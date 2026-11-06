import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Heart, 
  ArrowRight, 
  Building2, 
  Church, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  ExternalLink,
  Laptop,
  Bell,
  PackageCheck,
  Search,
  MapPin,
  Clock,
  Quote,
  RefreshCw,
  CircleDollarSign
} from 'lucide-react';
import { fetchCarePortalNeeds, DEFAULT_RSS_URL } from '../utils/carePortalRss';

export default function HowItWorksPage({ onOpenChurchEnroll, onOpenSubmitNeed, onOpenRespond, onOpenGiveNeed, onOpenContact, onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  const [needs, setNeeds] = useState([]);
  const [feedScope, setFeedScope] = useState('sample'); // 'abbotsford' | 'canada' | 'sample'
  const [isLoading, setIsLoading] = useState(false);

  // Live Canadian fallback needs from Winnipeg, MB if RSS network is unreachable
  const sampleNeeds = [
    {
      id: "CP-332755",
      title: "Travel System (Car Seat & Stroller)",
      category: "Help Strengthen a Bio Family",
      vettedBy: "Family Support Centre",
      neighborhood: "Winnipeg, Manitoba (R3B 1T4)",
      urgency: "Normal: Within 7-10 days",
      valueEst: 300,
      description: "I have a client who is expecting her third child in November. She has been in the country for 3 years and is married. Her husband lost his job and they are living on his employment insurance. They have not been able to gather funds for a car seat and a stroller. Providing a car seat/stroller combo would give them a good start and peace of mind knowing that they can get the baby home.",
      itemsNeeded: ["Travel System (Car Seat & Stroller) (x1)"],
      carePortalLink: "https://system.careportal.org/requests/332755"
    },
    {
      id: "CP-332993",
      title: "Toys - ages 7-12 & ages 0-6 (Community Christmas Hamper)",
      category: "Help Strengthen a Bio Family",
      vettedBy: "Living Bible Explorers",
      neighborhood: "Winnipeg, Manitoba (R3G 2B9)",
      urgency: "Normal: Within 7-10 days",
      valueEst: 800,
      description: "Living Bible Explorers is hosting our annual Community Christmas Party on Dec 12, and we would love your help in collecting toys. Our event brings in around 200 individuals from the West End neighbourhood. As part of the food hamper, the parents are able to choose a small toy for each of their children ages 0-12 years old. We love being able to bless these families in this way!",
      itemsNeeded: ["Toys - ages 7-12 (x50)", "Toys - ages 0-6 (x50)"],
      carePortalLink: "https://system.careportal.org/requests/332993"
    },
    {
      id: "CP-328894",
      title: "Household & Bedding Essentials for Family Reunification",
      category: "Help Reunify a Bio Family",
      vettedBy: "Inner City Youth Alive",
      neighborhood: "Winnipeg, Manitoba (R2C 0A0)",
      urgency: "Normal: Within 7-10 days",
      valueEst: 1847,
      description: "One of our step up crew members at ICYA is moving into a new place that his kids will be staying at occasionally. The items requested will help the children be comfortable when they stay with their dad. Having these basic needs met will provide stability for the children and confidence for the father as he provides for his children.",
      itemsNeeded: ["Couch (x1)", "Dresser (x3)", "Stovetop Pots & Pans Cookware Set (x1)", "Vacuum Cleaner (x1)", "Coffee Table (x1)", "Silverware 20-piece set for 4 (x1)"],
      carePortalLink: "https://system.careportal.org/requests/328894"
    }
  ];

  const loadFeed = async () => {
    setIsLoading(true);
    const result = await fetchCarePortalNeeds(DEFAULT_RSS_URL);
    if (result && result.needs && result.needs.length > 0) {
      setNeeds(result.needs);
      setFeedScope(result.scope || 'abbotsford');
    } else {
      setNeeds(sampleNeeds);
      setFeedScope('sample');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadFeed();
  }, []);

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      
      {/* 1. HERO BANNER WITH ADAPTED HEADLINE */}
      <div className="relative w-full bg-[#FAF9F5] border-b border-[#d8cba9] py-16 md:py-20">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faf7ef] text-[#2b3705] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#9f7f29]" />
            CarePortal Framework in Abbotsford
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-[#2b3705] tracking-tight leading-tight">
            Loving your neighbour suddenly gets super practical.
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#9f7f29] max-w-3xl mx-auto">
            Meet real needs in real time.
          </p>

          <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            CarePortal connects local caseworkers and partner agencies directly to church care teams across Abbotsford — turning empathy into practical, relational action.
          </p>

          {/* Primary Actions / CTAs Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a 
              href={givewiseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-sm px-7 py-3.5 text-decoration-none shadow-md hover:scale-105 transition"
            >
              <Heart className="w-4 h-4 mr-1.5 fill-white" /> DONATE
            </a>

            <button 
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="px-7 py-3.5 rounded-xl text-sm font-bold bg-[#FAF9F5] text-[#2b3705] border-2 border-[#d8cba9] hover:bg-[#d8cba9]/30 transition"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* 2. SECTION 1: HOW CAREPORTAL WORKS (ILLUSTRATED 4-STEP GRAPHIC WORKFLOW) */}
      <section className="py-16 md:py-24 bg-[#e0dbd7]/45 border-b border-[#d8cba9]">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          
          {/* Title with Hand-Drawn Style Underline */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-wide text-[#2b3705] uppercase inline-block relative pb-3">
              HOW CAREPORTAL WORKS
              <svg className="w-full h-3.5 mt-1 overflow-visible" viewBox="0 0 500 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10 C 140 5, 360 4, 496 8" stroke="#9f7f29" strokeWidth="5.5" strokeLinecap="round" />
              </svg>
            </h2>
          </div>

          {/* 4-Step Illustrated Visual Flow with Curved Arrows */}
          <div className="relative pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 items-start relative">

              {/* Step 1: Uncovering Needs */}
              <div className="flex flex-col items-center text-center relative px-2">
                {/* Curved Arrow 1 -> 2 (Desktop) */}
                <div className="hidden lg:block absolute -top-4 -right-10 w-20 h-12 z-10 pointer-events-none">
                  <svg viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M6 34 C 24 8, 54 8, 76 28" stroke="#2b3705" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M66 12 L 80 30 L 56 32" stroke="#2b3705" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Illustration 1: Person next to house with alert pin */}
                <div className="h-40 flex items-end justify-center mb-4">
                  <svg viewBox="0 0 180 150" className="w-44 h-36 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    {/* Soft ground shadow */}
                    <ellipse cx="95" cy="138" rx="68" ry="6" fill="#d8cba9" opacity="0.65" />
                    {/* Alert Pin above House */}
                    <g transform="translate(105, 8)">
                      <path d="M12 0 C5.4 0 0 5.4 0 12 C0 20 12 31 12 31 C12 31 24 20 24 12 C24 5.4 18.6 0 12 0 Z" fill="#c85a32" />
                      <rect x="10.5" y="5" width="3" height="10" rx="1.5" fill="#FFFFFF" />
                      <circle cx="12" cy="18.5" r="1.8" fill="#FFFFFF" />
                    </g>
                    {/* House */}
                    <polygon points="82,66 117,38 152,66" fill="#6f9ea6" />
                    <polyline points="79,67 117,37 155,67" stroke="#4f7b83" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <rect x="86" y="66" width="62" height="70" fill="#89b6be" />
                    {/* House Windows & Door */}
                    <rect x="95" y="76" width="14" height="16" rx="1.5" fill="#4f7b83" />
                    <rect x="125" y="76" width="14" height="16" rx="1.5" fill="#4f7b83" />
                    <rect x="95" y="102" width="14" height="16" rx="1.5" fill="#4f7b83" />
                    <rect x="125" y="102" width="14" height="34" rx="1.5" fill="#4f7b83" />
                    {/* Tree */}
                    <rect x="155" y="105" width="5" height="31" rx="2" fill="#9f7f29" />
                    <circle cx="158" cy="96" r="16" fill="#6f9ea6" />
                    <circle cx="149" cy="103" r="12" fill="#7daab2" />
                    <circle cx="165" cy="104" r="11" fill="#5e8c94" />
                    {/* Person standing on left */}
                    <circle cx="52" cy="48" r="10" fill="#d99b78" />
                    {/* Hair */}
                    <path d="M42 46 C42 36 60 36 60 48 C60 56 56 62 46 62 C42 58 42 52 42 46 Z" fill="#5a3825" />
                    {/* Sweater/Top */}
                    <path d="M42 62 C42 59 62 59 62 64 L64 92 L40 92 Z" fill="#7c5295" />
                    {/* Pants */}
                    <path d="M42 92 L62 92 L60 126 L53 126 L51 102 L49 126 L42 126 Z" fill="#2c3e50" />
                    {/* Shoes */}
                    <rect x="40" y="126" width="12" height="7" rx="3.5" fill="#c85a32" />
                    <rect x="52" y="126" width="13" height="7" rx="3.5" fill="#c85a32" />
                  </svg>
                </div>

                <span className="text-xl md:text-2xl font-sans font-normal text-[#2b3705]">Step 1</span>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#2b3705] leading-tight mt-0.5 mb-3">
                  Uncovering<br />Needs
                </h3>
                <p className="text-[#1f2410] text-base leading-snug max-w-[230px] font-sans">
                  A child or family in need requires help from a caseworker
                </p>
              </div>

              {/* Step 2: Submitting Needs */}
              <div className="flex flex-col items-center text-center relative px-2">
                {/* Curved Arrow 2 -> 3 (Desktop) */}
                <div className="hidden lg:block absolute -top-4 -right-10 w-20 h-12 z-10 pointer-events-none">
                  <svg viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M6 34 C 24 8, 54 8, 76 28" stroke="#2b3705" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M66 12 L 80 30 L 56 32" stroke="#2b3705" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Illustration 2: Caseworker at computer desk */}
                <div className="h-40 flex items-end justify-center mb-4">
                  <svg viewBox="0 0 180 150" className="w-44 h-36 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="95" cy="138" rx="68" ry="6" fill="#d8cba9" opacity="0.65" />
                    {/* Desk */}
                    <rect x="78" y="86" width="72" height="5" rx="2" fill="#34495e" />
                    <line x1="88" y1="91" x2="82" y2="136" stroke="#2c3e50" strokeWidth="4" strokeLinecap="round" />
                    <line x1="140" y1="91" x2="146" y2="136" stroke="#2c3e50" strokeWidth="4" strokeLinecap="round" />
                    {/* Computer Monitor */}
                    <rect x="98" y="42" width="46" height="34" rx="3" fill="#e8eef1" stroke="#cbd5e1" strokeWidth="2" />
                    <rect x="117" y="76" width="8" height="10" fill="#94a3b8" />
                    <rect x="108" y="83" width="26" height="3" rx="1.5" fill="#64748b" />
                    {/* Chair */}
                    <path d="M42 66 L54 66 L54 98 L76 98 L76 105 L42 105 Z" fill="#e0dbd7" />
                    <line x1="58" y1="105" x2="58" y2="132" stroke="#334155" strokeWidth="4" />
                    <line x1="44" y1="132" x2="72" y2="132" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="44" cy="135" r="3" fill="#1e293b" />
                    <circle cx="58" cy="135" r="3" fill="#1e293b" />
                    <circle cx="72" cy="135" r="3" fill="#1e293b" />
                    {/* Caseworker sitting */}
                    <circle cx="65" cy="42" r="10" fill="#d99b78" />
                    <path d="M54 42 C54 30 73 30 73 42 C73 50 66 56 55 56 Z" fill="#6e472b" />
                    {/* Teal top */}
                    <path d="M54 56 C54 54 74 54 76 62 L88 78 L80 83 L68 72 L68 92 L52 92 Z" fill="#4f9a94" />
                    {/* Blue pants */}
                    <path d="M54 92 L76 92 L92 122 L82 124 L68 99 L54 99 Z" fill="#2b5784" />
                    {/* Shoes */}
                    <rect x="82" y="123" width="13" height="6" rx="3" fill="#334155" />
                  </svg>
                </div>

                <span className="text-xl md:text-2xl font-sans font-normal text-[#2b3705]">Step 2</span>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#2b3705] leading-tight mt-0.5 mb-3">
                  Submitting<br />Needs
                </h3>
                <p className="text-[#1f2410] text-base leading-snug max-w-[230px] font-sans">
                  The Caseworker types their vetted needs into CarePortal
                </p>
              </div>

              {/* Step 3: Sharing Needs */}
              <div className="flex flex-col items-center text-center relative px-2">
                {/* Curved Arrow 3 -> 4 (Desktop) */}
                <div className="hidden lg:block absolute -top-4 -right-10 w-20 h-12 z-10 pointer-events-none">
                  <svg viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M6 34 C 24 8, 54 8, 76 28" stroke="#2b3705" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M66 12 L 80 30 L 56 32" stroke="#2b3705" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Illustration 3: Community Buildings & Neighborhood */}
                <div className="h-40 flex items-end justify-center mb-4">
                  <svg viewBox="0 0 210 150" className="w-52 h-36 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="105" cy="138" rx="90" ry="6" fill="#d8cba9" opacity="0.65" />
                    {/* Left small house */}
                    <polygon points="28,96 48,78 68,96" fill="#9f7f29" />
                    <rect x="32" y="96" width="32" height="40" fill="#d8cba9" />
                    <rect x="40" y="104" width="7" height="9" fill="#2b3705" />
                    <rect x="51" y="104" width="7" height="9" fill="#2b3705" />
                    <rect x="44" y="119" width="8" height="17" fill="#4f7b83" />
                    {/* Center tall church/community building */}
                    <polygon points="66,68 98,42 130,68" fill="#5e8c94" />
                    <rect x="70" y="68" width="56" height="68" fill="#89b6be" />
                    <rect x="78" y="76" width="10" height="12" fill="#4f7b83" />
                    <rect x="93" y="76" width="10" height="12" fill="#4f7b83" />
                    <rect x="108" y="76" width="10" height="12" fill="#4f7b83" />
                    <rect x="78" y="95" width="10" height="12" fill="#4f7b83" />
                    <rect x="93" y="95" width="10" height="12" fill="#4f7b83" />
                    <rect x="108" y="95" width="10" height="12" fill="#4f7b83" />
                    <rect x="92" y="115" width="12" height="21" fill="#4f7b83" />
                    {/* Right flat-top building */}
                    <rect x="128" y="56" width="42" height="80" fill="#7daab2" />
                    <rect x="125" y="53" width="48" height="5" fill="#5e8c94" />
                    <rect x="135" y="66" width="10" height="12" fill="#4f7b83" />
                    <rect x="152" y="66" width="10" height="12" fill="#4f7b83" />
                    <rect x="135" y="86" width="10" height="12" fill="#4f7b83" />
                    <rect x="152" y="86" width="10" height="12" fill="#4f7b83" />
                    {/* Far right small annex */}
                    <polygon points="154,98 174,84 194,98" fill="#5e8c94" />
                    <rect x="156" y="98" width="36" height="38" fill="#d8cba9" />
                    <rect x="166" y="112" width="14" height="24" fill="#9f7f29" />
                    {/* Trees */}
                    <circle cx="20" cy="112" r="11" fill="#6f9ea6" />
                    <rect x="18.5" y="120" width="3" height="16" fill="#4f7b83" />
                    <circle cx="68" cy="110" r="12" fill="#2b3705" />
                    <rect x="66.5" y="118" width="3" height="18" fill="#9f7f29" />
                    {/* Tiny community responder figures */}
                    <circle cx="80" cy="121" r="3" fill="#d99b78" />
                    <rect x="78" y="124" width="4" height="12" rx="1.5" fill="#c85a32" />
                    <circle cx="184" cy="120" r="3" fill="#d99b78" />
                    <rect x="182" y="123" width="4" height="13" rx="1.5" fill="#9f7f29" />
                  </svg>
                </div>

                <span className="text-xl md:text-2xl font-sans font-normal text-[#2b3705]">Step 3</span>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#2b3705] leading-tight mt-0.5 mb-3">
                  Sharing<br />Needs
                </h3>
                <p className="text-[#1f2410] text-base leading-snug max-w-[230px] font-sans">
                  CarePortal alerts nearby churches and community members to the family's needs
                </p>
              </div>

              {/* Step 4: Meeting Needs */}
              <div className="flex flex-col items-center text-center relative px-2">
                {/* Illustration 4: Responders delivering care package to family at house */}
                <div className="h-40 flex items-end justify-center mb-4">
                  <svg viewBox="0 0 190 150" className="w-48 h-36 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="100" cy="138" rx="76" ry="6" fill="#d8cba9" opacity="0.65" />
                    {/* House */}
                    <polygon points="92,66 127,38 162,66" fill="#6f9ea6" />
                    <polyline points="89,67 127,37 165,67" stroke="#4f7b83" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <rect x="96" y="66" width="62" height="70" fill="#89b6be" />
                    <rect x="105" y="76" width="14" height="16" rx="1.5" fill="#4f7b83" />
                    <rect x="135" y="76" width="14" height="16" rx="1.5" fill="#4f7b83" />
                    <rect x="105" y="102" width="14" height="16" rx="1.5" fill="#4f7b83" />
                    <rect x="135" y="102" width="14" height="34" rx="1.5" fill="#4f7b83" />
                    {/* Tree */}
                    <rect x="165" y="105" width="5" height="31" rx="2" fill="#9f7f29" />
                    <circle cx="168" cy="96" r="16" fill="#6f9ea6" />
                    <circle cx="159" cy="103" r="12" fill="#7daab2" />
                    {/* Person 1 (Family member on left) */}
                    <circle cx="38" cy="46" r="9.5" fill="#d99b78" />
                    <path d="M29 44 C29 34 46 34 46 46 C46 54 42 60 33 60 Z" fill="#5a3825" />
                    <path d="M29 60 C29 57 47 57 47 62 L49 90 L27 90 Z" fill="#7c5295" />
                    <path d="M29 90 L47 90 L45 126 L39 126 L38 102 L36 126 L29 126 Z" fill="#2c3e50" />
                    <rect x="27" y="126" width="11" height="7" rx="3.5" fill="#c85a32" />
                    <rect x="39" y="126" width="12" height="7" rx="3.5" fill="#c85a32" />
                    {/* Person 2 (Community Responder holding care box) */}
                    <circle cx="64" cy="49" r="9" fill="#8d5524" />
                    <path d="M56 46 C56 38 72 38 72 47 Z" fill="#1e293b" />
                    <path d="M54 60 C54 57 72 57 74 63 L76 90 L52 90 Z" fill="#d96b43" />
                    <path d="M54 90 L72 90 L70 126 L64 126 L62 103 L60 126 L54 126 Z" fill="#4b6584" />
                    <rect x="53" y="126" width="10" height="7" rx="3" fill="#475569" />
                    <rect x="64" y="126" width="11" height="7" rx="3" fill="#475569" />
                    {/* Care Box being handed over */}
                    <rect x="70" y="60" width="18" height="16" rx="2" fill="#9f7f29" />
                    <rect x="69" y="58" width="20" height="4" rx="1" fill="#2b3705" />
                  </svg>
                </div>

                <span className="text-xl md:text-2xl font-sans font-normal text-[#2b3705]">Step 4</span>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#2b3705] leading-tight mt-0.5 mb-3">
                  Meeting<br />Needs
                </h3>
                <p className="text-[#1f2410] text-base leading-snug max-w-[230px] font-sans">
                  Church and Community members partner to ensure the child and family is helped.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: OPEN REQUESTS (LIVE CAREPORTAL RSS FEED WITH ABBOTSFORD -> CANADA -> SAMPLE FALLBACK) */}
      <section className="py-16 md:py-20 bg-[#FAF9F5] border-b border-[#d8cba9]">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9f7f29] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
                Real-Time Requests
              </span>
              {feedScope === 'abbotsford' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2b3705] text-[#d8cba9] text-xs font-bold border border-[#2b3705]">
                  <span className="w-2 h-2 rounded-full bg-[#d8cba9] animate-pulse"></span>
                  Live CarePortal Sync • Abbotsford, BC
                </span>
              ) : feedScope === 'canada' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2b3705] text-[#d8cba9] text-xs font-bold border border-[#2b3705]">
                  <span className="w-2 h-2 rounded-full bg-[#d8cba9] animate-pulse"></span>
                  Live CarePortal Sync • Canada
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7ef] text-[#9f7f29] text-xs font-bold border border-[#d8cba9]">
                  Sample Request Preview
                </span>
              )}
              <button
                onClick={loadFeed}
                disabled={isLoading}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#d8cba9] text-xs font-bold text-[#2b3705] hover:bg-[#faf7ef] transition"
                title="Refresh CarePortal RSS Feed"
              >
                <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
                <span>{isLoading ? 'Syncing...' : 'Sync Feed'}</span>
              </button>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#2b3705] tracking-tight">
              {feedScope === 'canada'
                ? 'Open CarePortal Requests Across Canada'
                : 'Open Requests in Abbotsford'}
            </h2>
            <p className="text-slate-700 text-base md:text-lg">
              {feedScope === 'abbotsford'
                ? 'Active requests submitted by vetted partner caseworkers in Abbotsford.'
                : feedScope === 'canada'
                ? 'No open requests in Abbotsford at this moment — displaying live CarePortal requests across Canada. Local Abbotsford requests will appear here automatically once posted.'
                : 'Below is how active requests appear when caseworkers submit verified needs from families in our community. Once requests are posted in CarePortal, they display here automatically.'}
            </p>
          </div>

          {/* Requests List */}
          <div className="space-y-6">
            {needs.map((need) => (
              <div
                key={need.id}
                className="bg-white border-2 border-[#d8cba9] rounded-3xl p-6 sm:p-8 md:p-10 shadow-md space-y-6"
              >
                {/* Card Header & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#d8cba9]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#2b3705] text-[#d8cba9] text-xs font-extrabold uppercase tracking-wider">
                      {need.category || 'Care Need'}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#FAF9F5] text-[#9f7f29] border border-[#d8cba9] text-xs font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#9f7f29]" />
                      {need.vettedBy || need.agency}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1 text-[#9f7f29]">
                      <Clock className="w-3.5 h-3.5" /> {need.urgency}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#2b3705]">
                      <MapPin className="w-3.5 h-3.5" /> {need.neighborhood || need.location}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="space-y-4 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#2b3705]">
                      {need.title}
                    </h3>
                    {(need.valueEst > 0 || need.value) && (
                      <span className="text-xl md:text-2xl font-heading font-extrabold text-[#9f7f29] whitespace-nowrap">
                        Est. Value: {need.value || `$${need.valueEst}`}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-700 text-base md:text-lg leading-relaxed font-sans">
                    {need.description}
                  </p>

                  {need.itemsNeeded && need.itemsNeeded.length > 0 && (
                    <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#d8cba9] flex flex-wrap items-center gap-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#2b3705]">
                        Requested Items:
                      </span>
                      {need.itemsNeeded.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-[#1f2410] px-3 py-1 rounded-lg border border-[#d8cba9]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9f7f29]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-6 border-t border-[#d8cba9] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    ID: {need.id} • Vetted by partner agencies
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    {need.carePortalLink ? (
                      <a
                        href={need.carePortalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-xs sm:text-sm px-6 py-3 text-decoration-none"
                      >
                        <span>RESPOND TO THIS NEED</span>
                        <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenRespond ? onOpenRespond(need) : (onNavigate && onNavigate('/'))}
                        className="btn btn-primary text-xs sm:text-sm px-6 py-3"
                      >
                        RESPOND TO THIS NEED
                      </button>
                    )}

                    <a
                      href={givewiseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold text-xs sm:text-sm px-6 py-3 text-decoration-none shadow-sm"
                    >
                      <CircleDollarSign className="w-4 h-4 mr-1.5" /> GIVE (GIVEWISE)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-slate-500 italic">
            * Live requests are synced automatically from CarePortal as submitted by licensed caseworkers.
          </p>

        </div>
      </section>

      {/* 4. SECTION 3: PARTNER CHURCHES AND AGENCIES */}
      <section className="py-16 md:py-20 bg-white border-b border-[#d8cba9]">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9f7f29] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
              Collaborative Network
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#2b3705] tracking-tight">
              Partner Churches & Agencies
            </h2>
            <p className="text-slate-700 text-base md:text-lg">
              Bringing together child welfare leaders and local church care teams under one shared table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Agencies Card */}
            <div className="bg-[#FAF9F5] border-2 border-[#d8cba9] rounded-3xl p-8 space-y-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#9f7f29] text-white flex items-center justify-center font-bold shadow-md">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#2b3705]">
                  For Partner Agencies
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  Verified caseworkers and community partner agencies submit family needs to mobilize immediate neighborhood support.
                </p>
                <ul className="space-y-2.5 text-xs md:text-sm font-semibold text-slate-800 pt-2 border-t border-[#d8cba9]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" />
                    <span>Child & Family Support Partner Agencies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" />
                    <span>Community Outreach & Family Resource Agencies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" />
                    <span>Community Family & Housing Support Navigators</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={onOpenContact}
                className="btn btn-gold w-full py-3.5 text-xs sm:text-sm font-extrabold justify-center"
              >
                Submit a Family Need
              </button>
            </div>

            {/* Churches Card */}
            <div className="bg-[#FAF9F5] border-2 border-[#d8cba9] rounded-3xl p-8 space-y-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2b3705] text-[#d8cba9] flex items-center justify-center font-bold shadow-md">
                  <Church className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#2b3705]">
                  For Local Church Care Teams
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  Churches across North, South, East, and West Abbotsford enroll their care teams to receive local request alerts and serve families in their immediate neighborhood.
                </p>
                <ul className="space-y-2.5 text-xs md:text-sm font-semibold text-slate-800 pt-2 border-t border-[#d8cba9]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2b3705]" />
                    <span>Zero-cost implementation for local congregations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2b3705]" />
                    <span>Geographic neighborhood matching in Abbotsford</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2b3705]" />
                    <span>Dignified relational care beyond one-time handouts</span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://careportal.zendesk.com/hc/en-us/articles/360037975193--How-Does-My-Church-Join-CarePortal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full py-3.5 text-xs sm:text-sm font-extrabold justify-center text-decoration-none"
              >
                Enroll Your Church Team
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION 4: IMPACT STORIES (OPEN EDITORIAL PULL-QUOTES) */}
      <section className="py-20 md:py-24 bg-[#d8cba9]/25 border-b border-[#d8cba9]">
        <div className="container max-w-5xl mx-auto px-6 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9f7f29] block">
              Real Transformation
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#2b3705] tracking-tight">
              Stories of Real-Time Care
            </h2>
            <p className="text-slate-700 text-base md:text-lg">
              See how simple, practical acts of care restore hope and strengthen families across Abbotsford.
            </p>
            <div className="w-16 h-0.5 bg-[#9f7f29] mx-auto pt-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 md:divide-x md:divide-[#d8cba9]">
            
            {/* Story 1 */}
            <blockquote className="md:pr-12 flex flex-col justify-between space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <span className="font-heading text-6xl leading-none text-[#9f7f29]/50 select-none block">
                  &ldquo;
                </span>
                <p className="text-[#1f2410] text-lg md:text-xl font-sans italic leading-relaxed -mt-4">
                  When a crib and toddler bed were delivered to our apartment within 24 hours of moving in, it wasn't just furniture — it meant my daughters could stay in my care safely. The team who brought it prayed with me and brought groceries.
                </p>
              </div>
              <footer className="space-y-1.5 pt-2">
                <div className="w-10 h-0.5 bg-[#9f7f29] mx-auto md:mx-0 mb-3"></div>
                <strong className="text-[#2b3705] font-heading font-bold block text-base">Sarah</strong>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#9f7f29] block">
                  Abbotsford Mother • Family Preservation Response
                </span>
              </footer>
            </blockquote>

            {/* Story 2 */}
            <blockquote className="md:pl-12 pt-10 md:pt-0 border-t md:border-t-0 border-[#d8cba9] flex flex-col justify-between space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <span className="font-heading text-6xl leading-none text-[#9f7f29]/50 select-none block">
                  &ldquo;
                </span>
                <p className="text-[#1f2410] text-lg md:text-xl font-sans italic leading-relaxed -mt-4">
                  CarePortal allows our church care team to respond to exact, verified needs identified by partner agencies. We get to meet neighbors in our own block whom we never would have known otherwise, building real relationships.
                </p>
              </div>
              <footer className="space-y-1.5 pt-2">
                <div className="w-10 h-0.5 bg-[#9f7f29] mx-auto md:mx-0 mb-3"></div>
                <strong className="text-[#2b3705] font-heading font-bold block text-base">David M.</strong>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#9f7f29] block">
                  Local Church Care Team Leader in Abbotsford
                </span>
              </footer>
            </blockquote>

          </div>

        </div>
      </section>

      {/* 6. PRIMARY ACTIONS & CONTACT SECTION */}
      <div id="contact-info" className="bg-white border-t border-[#d8cba9] py-16">
        <div className="container max-w-3xl mx-auto text-center space-y-6 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9f7f29] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
            Get In Touch
          </span>
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#2b3705]">
            Contact Us & Get Involved
          </h3>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Send us an inquiry regarding CarePortal, church enrollment, or community partnerships:
          </p>

          <div>
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#FAF9F5] hover:bg-[#d8cba9]/30 border-2 border-[#d8cba9] hover:border-[#2b3705] px-8 py-4 rounded-2xl text-[#2b3705] font-bold text-base shadow-sm transition cursor-pointer"
            >
              <Mail className="w-5 h-5 text-[#9f7f29]" />
              <span>Open Contact Form</span>
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a 
              href={givewiseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-sm px-7 py-3.5 text-decoration-none shadow-md"
            >
              <Heart className="w-4 h-4 mr-1.5 fill-white" /> DONATE
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
