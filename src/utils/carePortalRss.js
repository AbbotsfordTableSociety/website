/**
 * CarePortal RSS Feed Parser Utility for Abbotsford Table Society
 * 
 * Fetches and parses real-time CarePortal RSS XML feed into structured JS objects
 * for the CarePortalBoard component.
 */

// Default feed URL provided by CarePortal (can be customized via VITE_CAREPORTAL_RSS_URL env or props)
export const DEFAULT_RSS_URL = "https://system.careportal.org/rss?status%5B0%5D=Open";

/**
 * Fetch and parse CarePortal RSS XML
 * @param {string} feedUrl - Optional custom RSS URL from CarePortal
 * @returns {Promise<Array>} List of parsed need objects
 */
export async function fetchCarePortalNeeds(feedUrl = DEFAULT_RSS_URL) {
  try {
    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} fetching CarePortal RSS`);
    }
    const xmlText = await response.text();
    const needs = parseCarePortalXml(xmlText);
    
    // If national feed returns no Abbotsford/BC items yet, return null to trigger Abbotsford fallback data
    if (!needs || needs.length === 0) {
      return null;
    }
    return needs;
  } catch (err) {
    console.warn("Direct CarePortal RSS fetch failed (may be CORS/network), trying CORS proxy:", err);
    
    // Try reliable CORS proxy if direct fetch hits CORS policy in browser
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
      const proxyResp = await fetch(proxyUrl);
      if (proxyResp.ok) {
        const xmlText = await proxyResp.text();
        const needs = parseCarePortalXml(xmlText);
        if (!needs || needs.length === 0) return null;
        return needs;
      }
    } catch (proxyErr) {
      console.error("CORS proxy fetch also failed:", proxyErr);
    }
    
    return null; // Return null so component can fallback gracefully to Abbotsford needs
  }
}

/**
 * Parse CarePortal XML string using browser DOMParser
 */
export function parseCarePortalXml(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const items = xmlDoc.querySelectorAll("item");

  const parsedNeeds = [];

  items.forEach((item, index) => {
    const getTagText = (tagName) => {
      const el = item.getElementsByTagName(tagName)[0];
      return el ? el.textContent.trim() : "";
    };

    const getCarePortalTagText = (tagName) => {
      let el = item.getElementsByTagName(`careportal:${tagName}`)[0];
      if (!el) {
        el = item.getElementsByTagName(tagName)[0];
      }
      return el ? el.textContent.trim() : "";
    };

    const id = getCarePortalTagText("id") || getTagText("guid") || `CP-${index + 100}`;
    const rawTitle = getTagText("title");
    const link = getTagText("link") || `https://system.careportal.org/requests/${id}`;
    const description = getTagText("description");
    const pubDate = getTagText("pubDate");
    const category = getTagText("category") || "Care Need";
    
    const status = getCarePortalTagText("status") || "Open";
    const urgency = getCarePortalTagText("urgency_as_string") || getTagText("category") || "Normal";
    const amount = parseFloat(getCarePortalTagText("amount")) || 0;
    const amountRemaining = parseFloat(getCarePortalTagText("amountRemaining")) || amount;
    const respondersCount = parseInt(getCarePortalTagText("responseCount")) || 0;
    
    const state = getCarePortalTagText("state") || "";
    const county = getCarePortalTagText("county") || "";
    const zipCode = getCarePortalTagText("zip_code") || "";
    const agencyName = getCarePortalTagText("agency_name") || "Verified Caseworker Agency";

    // Strictly filter location to Abbotsford, BC, or Canadian postal codes V2S/V2T/V3G/V4X
    const isAbbotsfordOrBC = 
      state.toLowerCase().includes("british columbia") || 
      state.toLowerCase() === "bc" || 
      county.toLowerCase().includes("abbotsford") || 
      rawTitle.toLowerCase().includes("abbotsford") || 
      description.toLowerCase().includes("abbotsford") || 
      zipCode.toUpperCase().startsWith("V");

    // If national feed contains non-BC / US items (like Fresno/WA/VA), skip them unless filtered feed URL
    if (!isAbbotsfordOrBC) {
      return; // Skip US items
    }

    // Extract requested items list if available
    const itemsNeeded = [];
    const needItemsNode = item.getElementsByTagName("careportal:needItem");
    for (let i = 0; i < needItemsNode.length; i++) {
      const itemEl = needItemsNode[i];
      const itemTitle = itemEl.getElementsByTagName("careportal:title")[0]?.textContent || "";
      const count = itemEl.getElementsByTagName("careportal:itemCount")[0]?.textContent || "1";
      if (itemTitle) {
        itemsNeeded.push(`${count}x ${itemTitle.trim()}`);
      }
    }

    let neighborhood = county || "Abbotsford";
    if (zipCode) {
      neighborhood += ` (${zipCode})`;
    }

    const title = rawTitle.replace(/^#\d+\s*/, '').split(' - ')[0] || rawTitle;

    let pledgedPercent = 0;
    if (amount > 0) {
      pledgedPercent = Math.round(((amount - amountRemaining) / amount) * 100);
    }

    let urgencyBadge = "badge-teal";
    if (urgency.toLowerCase().includes("urgent")) {
      urgencyBadge = "badge-urgent";
    } else if (urgency.toLowerCase().includes("priority") || urgency.toLowerCase().includes("high")) {
      urgencyBadge = "badge-amber";
    }

    parsedNeeds.push({
      id: `NEED-${id}`,
      cpId: id,
      title: title || rawTitle,
      neighborhood: neighborhood || "Abbotsford Area",
      category: category,
      urgency: urgency.split(':')[0] || "Open",
      urgencyBadge: urgencyBadge,
      timeAgo: formatDateAgo(pubDate),
      vettedBy: agencyName,
      agencyType: "Caseworker Agency",
      description: description,
      itemsNeeded: itemsNeeded.length > 0 ? itemsNeeded : ["Requested Items"],
      valueEst: amount,
      amountRemaining: amountRemaining,
      pledgedPercent: pledgedPercent,
      respondersCount: respondersCount,
      carePortalLink: link,
      state: state,
      county: county,
      zipCode: zipCode
    });
  });

  return parsedNeeds;
}

/**
 * Format pubDate into human readable time ago (e.g. "2 hours ago")
 */
function formatDateAgo(dateString) {
  if (!dateString) return "Recently";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Recently";

  const diffSeconds = Math.floor((new Date() - date) / 1000);
  if (diffSeconds < 60) return "Just now";
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)} mins ago`;
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)} hours ago`;
  return `${Math.floor(diffSeconds / 86400)} days ago`;
}
