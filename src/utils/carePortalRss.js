/**
 * CarePortal RSS Feed Parser Utility for Abbotsford Table Society
 * 
 * Fetches and parses real-time CarePortal RSS XML feed into structured JS objects
 * for the CarePortalBoard component.
 * 
 * Fallback Hierarchy:
 * 1. Local Abbotsford / BC needs from CarePortal RSS
 * 2. Other Canadian needs from CarePortal RSS (if none currently open in Abbotsford)
 * 3. Sample Abbotsford needs (handled by CarePortalBoard if no Canadian needs found)
 */

// Primary RSS feed URL (can be customized via VITE_CAREPORTAL_RSS_URL or updated directly here)
export const DEFAULT_RSS_URL = import.meta.env.VITE_CAREPORTAL_RSS_URL || "https://system.careportal.org/rss?status%5B0%5D=Open";

// Canadian provinces, territories, and common identifiers
const CANADIAN_PROVINCES = [
  "british columbia", "bc",
  "alberta", "ab",
  "saskatchewan", "sk",
  "manitoba", "mb",
  "ontario", "on",
  "quebec", "qc", "québec",
  "new brunswick", "nb",
  "nova scotia", "ns",
  "prince edward island", "pei", "pe",
  "newfoundland", "labrador", "nl",
  "yukon", "yt",
  "northwest territories", "nt",
  "nunavut", "nu",
  "canada"
];

// Canadian postal code pattern (e.g., V2S, V2T, K1A, M5V, T2P, etc.)
const CANADIAN_POSTAL_REGEX = /\b[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ](\s?\d[ABCEGHJKLMNPRSTVWXYZ]\d)?\b/i;

/**
 * Fetch raw XML from a CarePortal RSS URL using Netlify proxy first, then direct fetch, then CORS proxy
 */
async function fetchRssXml(feedUrl) {
  // 1. If pointing to system.careportal.org, try same-origin Netlify proxy first (avoids CORS in production)
  if (feedUrl.includes("system.careportal.org/")) {
    try {
      const relativePath = feedUrl.split("system.careportal.org/")[1];
      const netlifyProxyUrl = `/api/careportal-rss/${relativePath}`;
      const resp = await fetch(netlifyProxyUrl);
      if (resp.ok) {
        const text = await resp.text();
        if (text && (text.includes("<rss") || text.includes("<channel") || text.includes("<item"))) {
          return text;
        }
      }
    } catch (_) {
      // Ignore and try direct/CORS proxy
    }
  }

  // 2. Try direct fetch
  try {
    const response = await fetch(feedUrl);
    if (response.ok) {
      const text = await response.text();
      if (text && (text.includes("<rss") || text.includes("<channel") || text.includes("<item"))) {
        return text;
      }
    }
  } catch (_) {
    // Ignore and try CORS proxy
  }

  // 3. Try CORS proxies for local development or cross-origin feeds
  const corsProxies = [
    (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`
  ];

  for (const buildProxyUrl of corsProxies) {
    try {
      const proxyResp = await fetch(buildProxyUrl(feedUrl));
      if (proxyResp.ok) {
        const text = await proxyResp.text();
        if (text && (text.includes("<rss") || text.includes("<channel") || text.includes("<item"))) {
          return text;
        }
      }
    } catch (_) {
      // Continue to next proxy
    }
  }

  return null;
}

/**
 * Fetch and parse CarePortal RSS XML with 3-tier priority:
 * 1. Abbotsford / BC needs
 * 2. Other Canadian needs
 * 3. null (triggers Sample Abbotsford fallback in UI)
 * 
 * @param {string} feedUrl - Optional custom RSS URL from CarePortal
 * @returns {Promise<{needs: Array, scope: 'abbotsford' | 'canada'} | null>}
 */
export async function fetchCarePortalNeeds(feedUrl = DEFAULT_RSS_URL) {
  try {
    // 1. Always query CarePortal's `county=` filter for Abbotsford / Fraser Valley FIRST
    // so local Abbotsford needs are always prioritized even when older than the latest 100 global items.
    const abbyQueries = [
      `${feedUrl}&county=Abbotsford`,
      `${feedUrl}&county=Fraser+Valley`,
    ];

    for (const queryUrl of abbyQueries) {
      const queryXml = await fetchRssXml(queryUrl);
      if (queryXml) {
        const { abbotsfordNeeds, allNeeds } = parseCarePortalXml(queryXml);
        if (abbotsfordNeeds.length > 0) {
          return { needs: abbotsfordNeeds, scope: "abbotsford" };
        }
        if (allNeeds.length > 0) {
          return { needs: allNeeds, scope: "abbotsford" };
        }
      }
    }

    // 2. Check the primary open RSS feed for any Abbotsford/BC or Canadian needs
    const xmlText = await fetchRssXml(feedUrl);
    if (xmlText) {
      const { abbotsfordNeeds, canadaNeeds } = parseCarePortalXml(xmlText);

      // Tier 1: Local Abbotsford / BC needs found in primary feed
      if (abbotsfordNeeds.length > 0) {
        return { needs: abbotsfordNeeds, scope: "abbotsford" };
      }

      // Tier 2: Other Canadian needs found in primary feed
      if (canadaNeeds.length > 0) {
        return { needs: canadaNeeds, scope: "canada" };
      }
    }

    // 3. Fallback: Query active Canadian CarePortal county feed (Winnipeg, MB)
    const canadaQueries = [
      `${feedUrl}&county=Winnipeg`,
    ];

    for (const queryUrl of canadaQueries) {
      const queryXml = await fetchRssXml(queryUrl);
      if (queryXml) {
        const { canadaNeeds, allNeeds } = parseCarePortalXml(queryXml);
        if (canadaNeeds.length > 0) {
          return { needs: canadaNeeds, scope: "canada" };
        }
        if (allNeeds.length > 0) {
          return { needs: allNeeds, scope: "canada" };
        }
      }
    }

    // Tier 3: Return null to trigger fallback data
    return null;
  } catch (err) {
    console.error("Failed to fetch/parse CarePortal RSS feed:", err);
    return null;
  }
}

/**
 * Parse CarePortal XML string using browser DOMParser
 */
export function parseCarePortalXml(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const items = xmlDoc.querySelectorAll("item");

  const abbotsfordNeeds = [];
  const canadaNeeds = [];
  const allNeeds = [];

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
    const city = getCarePortalTagText("city") || "";
    const country = getCarePortalTagText("country") || "";
    const zipCode = getCarePortalTagText("zip_code") || getCarePortalTagText("postal_code") || "";
    const agencyName = getCarePortalTagText("agency_name") || "Verified Caseworker Agency";

    const combinedLocationText = `${state} ${county} ${city} ${country} ${zipCode} ${rawTitle} ${description} ${agencyName}`.toLowerCase();

    // Check if Abbotsford / Fraser Valley / BC
    const isAbbotsfordOrBC =
      state.toLowerCase().includes("british columbia") ||
      state.toLowerCase() === "bc" ||
      county.toLowerCase().includes("abbotsford") ||
      county.toLowerCase().includes("fraser valley") ||
      city.toLowerCase().includes("abbotsford") ||
      rawTitle.toLowerCase().includes("abbotsford") ||
      description.toLowerCase().includes("abbotsford") ||
      zipCode.toUpperCase().startsWith("V2S") ||
      zipCode.toUpperCase().startsWith("V2T") ||
      zipCode.toUpperCase().startsWith("V3G") ||
      zipCode.toUpperCase().startsWith("V4X") ||
      (zipCode.toUpperCase().startsWith("V") && CANADIAN_POSTAL_REGEX.test(zipCode));

    // Check if anywhere in Canada
    const stateLower = state.toLowerCase().trim();
    const countryLower = country.toLowerCase().trim();
    const isCanada =
      isAbbotsfordOrBC ||
      countryLower === "ca" ||
      countryLower === "can" ||
      countryLower.includes("canada") ||
      CANADIAN_PROVINCES.includes(stateLower) ||
      CANADIAN_POSTAL_REGEX.test(zipCode) ||
      CANADIAN_POSTAL_REGEX.test(rawTitle) ||
      combinedLocationText.includes("careimpact") ||
      combinedLocationText.includes("canada");

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

    const locationParts = [city || county, state].filter(Boolean);
    let neighborhood = locationParts.length > 0 ? locationParts.join(", ") : "Abbotsford";
    if (zipCode) {
      neighborhood += ` (${zipCode})`;
    }

    const title = rawTitle.replace(/^#\d+\s*/, "").split(" - ")[0] || rawTitle;

    let pledgedPercent = 0;
    if (amount > 0) {
      pledgedPercent = Math.round(((amount - amountRemaining) / amount) * 100);
    }

    let urgencyBadge = "badge-teal";
    if (urgency.toLowerCase().includes("urgent") || urgency.toLowerCase().includes("high")) {
      urgencyBadge = "badge-urgent";
    } else if (urgency.toLowerCase().includes("priority") || urgency.toLowerCase().includes("moderate")) {
      urgencyBadge = "badge-amber";
    }

    const parsedNeed = {
      id: `NEED-${id}`,
      cpId: id,
      title: title || rawTitle,
      neighborhood: neighborhood || "Abbotsford Area",
      category: category,
      urgency: urgency.split(":")[0] || status || "Open",
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
      zipCode: zipCode,
      isAbbotsford: isAbbotsfordOrBC,
      isCanada: isCanada
    };

    allNeeds.push(parsedNeed);
    if (isAbbotsfordOrBC) {
      abbotsfordNeeds.push(parsedNeed);
    }
    if (isCanada) {
      canadaNeeds.push(parsedNeed);
    }
  });

  return { abbotsfordNeeds, canadaNeeds, allNeeds };
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
