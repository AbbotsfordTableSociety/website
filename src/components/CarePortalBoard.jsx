import React, { useState } from 'react';
import { MapPin, Tag, ShieldCheck, Clock, Heart, Filter, ChevronRight, CheckCircle2, AlertTriangle, Sparkles, Building2 } from 'lucide-react';

export default function CarePortalBoard({ onSelectNeed, onOpenSubmitNeed }) {
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const needsData = [
    {
      id: "NEED-ABBY-101",
      title: "Twin Bed Frame & Clean Mattress for 7-Year-Old Boy",
      neighborhood: "Clearbrook",
      category: "Furniture & Beds",
      urgency: "Urgent",
      urgencyBadge: "badge-urgent",
      timeAgo: "22 mins ago",
      vettedBy: "Ministry of Children & Family Development (MCFD)",
      agencyType: "Child Welfare",
      description: "Single mother of 2 children moved into safe housing following domestic hardship. Needs a twin bed frame, clean mattress, and bedding set for her young son to sleep comfortably.",
      itemsNeeded: ["Twin Mattress", "Twin Bed Frame", "Boys Bedding Set"],
      valueEst: 350,
      pledgedPercent: 40,
      respondersCount: 1
    },
    {
      id: "NEED-ABBY-102",
      title: "Convertible Car Seat & Infant Supplies for Newborn",
      neighborhood: "East Abbotsford",
      category: "Baby & Toddler",
      urgency: "High Priority",
      urgencyBadge: "badge-amber",
      timeAgo: "1 hour ago",
      vettedBy: "Abbotsford Public Health & Family Services",
      agencyType: "Health & Social Services",
      description: "Young mother expecting her first baby next week needs an unexpired convertible car seat, newborn diapers (size 1), and a stroller to safely transport her baby to medical appointments.",
      itemsNeeded: ["Rear-facing Car Seat", "Newborn Diapers", "Stroller"],
      valueEst: 280,
      pledgedPercent: 65,
      respondersCount: 2
    },
    {
      id: "NEED-ABBY-103",
      title: "Hydro Utility Payment Relief to Prevent Disconnection",
      neighborhood: "Townline / West Abbotsford",
      category: "Household & Emergency Aid",
      urgency: "Urgent",
      urgencyBadge: "badge-urgent",
      timeAgo: "3 hours ago",
      vettedBy: "Abbotsford School District #34 Community Liaison",
      agencyType: "School District",
      description: "Family of 4 faced temporary income loss due to layoff. Electric utility disconnection notice served for Friday. Urgent relief needed to keep power and heating on.",
      itemsNeeded: ["Emergency Utility Support ($240)"],
      valueEst: 240,
      pledgedPercent: 20,
      respondersCount: 1
    },
    {
      id: "NEED-ABBY-104",
      title: "Father Mentorship & Employment Transportation Assistance",
      neighborhood: "Mill Lake & Central",
      category: "Relational Support",
      urgency: "Normal",
      urgencyBadge: "badge-teal",
      timeAgo: "5 hours ago",
      vettedBy: "Local Non-Profit Family Restoration Partner",
      agencyType: "Community Non-Profit",
      description: "Father striving to stabilize employment to regain custody of his children needs a reliable adult bicycle, helmet, and a male mentor for weekly encouragement and accountability.",
      itemsNeeded: ["Adult Bicycle", "Bus Pass / Commute Support", "Weekly Mentor"],
      valueEst: 180,
      pledgedPercent: 80,
      respondersCount: 3
    },
    {
      id: "NEED-ABBY-105",
      title: "Dining Room Table & 4 Chairs for Reunified Family",
      neighborhood: "Matsqui / Rural",
      category: "Furniture & Beds",
      urgency: "High Priority",
      urgencyBadge: "badge-amber",
      timeAgo: "6 hours ago",
      vettedBy: "BC Indigenous Child & Family Services",
      agencyType: "Indigenous Family Support",
      description: "Family recently reunified with 3 children needing a basic kitchen table and chairs so they can eat family meals together in their newly rented home.",
      itemsNeeded: ["Dining Table", "4 Chairs"],
      valueEst: 320,
      pledgedPercent: 50,
      respondersCount: 2
    }
  ];

  const neighborhoods = ["All", "Clearbrook", "East Abbotsford", "Mill Lake & Central", "Townline / West Abbotsford", "Matsqui / Rural"];
  const categories = ["All", "Furniture & Beds", "Baby & Toddler", "Household & Emergency Aid", "Relational Support"];

  const filteredNeeds = needsData.filter(item => {
    const matchesArea = selectedArea === 'All' || item.neighborhood === selectedArea;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesCategory && matchesSearch;
  });

  return (
    <section id="care-portal" className="py-20 bg-[#FAF8F5] relative border-b border-[#E5DEC9]">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-forest-50 text-forest-700 text-xs font-bold uppercase tracking-wider border border-forest-100">
              <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              CarePortal Live Needs Feed • Abbotsford, BC
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
              Real-Time Needs from Abbotsford Caseworkers
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Every need below is 100% verified by local government agencies, public schools, or non-profit case managers working directly with families in crisis.
            </p>
          </div>

          <button 
            onClick={onOpenSubmitNeed}
            className="btn btn-outline text-sm px-5 py-3 whitespace-nowrap self-start md:self-auto"
          >
            <Building2 className="w-4 h-4 text-forest-700" />
            Are You an Agency? Submit a Need
          </button>
        </div>

        {/* Filters Bar */}
        <div className="bg-[#FCFBF8] p-5 rounded-xl border border-[#E5DEC9] shadow-sm mb-8 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input 
                type="text"
                placeholder="Search needs by keyword (e.g. crib, mattress, clearbrook)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E5DEC9] bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-forest-700 text-slate-900"
              />
              <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Area Selector */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-forest-700" />
                <select 
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="bg-white border border-[#E5DEC9] text-sm font-bold text-slate-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest-700"
                >
                  <option value="All">All Neighborhoods</option>
                  {neighborhoods.filter(n => n !== 'All').map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Category Selector */}
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gold-700" />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white border border-[#E5DEC9] text-sm font-bold text-slate-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest-700"
                >
                  <option value="All">All Need Categories</option>
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex items-center gap-2 pt-2 overflow-x-auto text-xs font-bold text-slate-700">
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">Filter Area:</span>
            {neighborhoods.map(area => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-3 py-1.5 rounded transition ${selectedArea === area ? 'bg-forest-700 text-white shadow-sm' : 'bg-white border border-[#E5DEC9] text-slate-800 hover:bg-[#F4EFE4]'}`}
              >
                {area}
              </button>
            ))}
          </div>

        </div>

        {/* Needs Feed Grid */}
        {filteredNeeds.length === 0 ? (
          <div className="bg-[#FCFBF8] rounded-xl p-12 text-center border border-[#E5DEC9]">
            <AlertTriangle className="w-12 h-12 text-gold-700 mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">No Matching Needs Found</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Try adjusting your filter settings or search terms to view active requests across Abbotsford.
            </p>
            <button 
              onClick={() => { setSelectedArea('All'); setSelectedCategory('All'); setSearchQuery(''); }}
              className="btn btn-outline text-xs px-4 py-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNeeds.map((need) => (
              <div 
                key={need.id} 
                className="bg-[#FCFBF8] flex flex-col justify-between p-6 border-2 border-[#E5DEC9] rounded-2xl hover:border-gold-700 transition shadow-sm hover:shadow-md"
              >
                <div>
                  
                  {/* Top Bar: Urgency & Neighborhood */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`badge ${need.urgencyBadge}`}>
                      {need.urgency === 'Urgent' && <span className="pulse-dot mr-1"></span>}
                      {need.urgency}
                    </span>

                    <span className="text-xs font-bold text-forest-700 flex items-center gap-1 bg-forest-50 px-2.5 py-1 rounded border border-forest-100">
                      <MapPin className="w-3 h-3 text-forest-700" />
                      {need.neighborhood}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug mb-2">
                    {need.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {need.description}
                  </p>

                  {/* Items List */}
                  <div className="bg-[#FAF8F5] p-3 rounded-lg border border-[#E5DEC9] mb-4 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Requested Items:
                    </span>
                    {need.itemsNeeded.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Section */}
                <div className="space-y-4 pt-4 border-t border-[#E5DEC9]">
                  
                  {/* Vetting Agency Info */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                      Vetted Request
                    </span>
                    <span className="text-slate-500 font-medium">{need.timeAgo}</span>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-forest-700">{need.pledgedPercent}% Funded / Responded</span>
                      <span className="text-slate-600">Est. ${need.valueEst}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#E5DEC9]/60 overflow-hidden">
                      <div 
                        className="h-full bg-forest-700 rounded-full" 
                        style={{ width: `${need.pledgedPercent}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => onSelectNeed(need)}
                    className="btn btn-primary w-full py-2.5 text-sm font-bold justify-center"
                  >
                    <Heart className="w-4 h-4" />
                    I Can Help With This Need
                  </button>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
