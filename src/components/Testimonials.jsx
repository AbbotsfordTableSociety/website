import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, HeartHandshake } from 'lucide-react';

export default function Testimonials() {
  const stories = [
    {
      id: 1,
      quote: "CarePortal has fundamentally transformed how our agency supports families in crisis across Abbotsford. Within 45 minutes of posting a request for a crib and car seat, a local church Care Team stepped up to deliver brand-new items directly to the mother. That speed prevented foster care placement.",
      author: "Sarah M.",
      role: "Child Welfare Social Worker",
      org: "Abbotsford Family Services",
      location: "Clearbrook, Abbotsford"
    },
    {
      id: 2,
      quote: "As a pastor in Abbotsford, our congregation always wanted to serve real needs in our city, but we didn't know where to start without duplicating work. CarePortal gives us verified, manageable needs every week. Our people love showing up with beds, strollers, and genuine friendship.",
      author: "Pastor David K.",
      role: "Care Team Lead",
      org: "East Abbotsford Community Church",
      location: "East Abbotsford"
    },
    {
      id: 3,
      quote: "When I was starting over after fleeing domestic hardship, I felt completely alone. Abbotsford Table Society and CarePortal brought a dining table, twin beds for my toddlers, and grocery cards. But more than that, they treated me with such dignity and kindness. I knew God hadn't forgotten me.",
      author: "Elena R.",
      role: "Abbotsford Resident & Mother",
      org: "Family Recipient",
      location: "Townline, Abbotsford"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const current = stories[currentIndex];

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#E5DEC9]">
      <div className="container">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded border border-gold-200">
            Abbotsford Transformation Stories
          </span>
          <h2 className="text-3xl font-serif font-extrabold text-slate-900 tracking-tight">
            Lives Changed Through Citywide Unity
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-[#FCFBF8] rounded-2xl p-8 md:p-12 border-2 border-[#E5DEC9] shadow-sm relative">
          <Quote className="w-16 h-16 text-forest-700/10 absolute top-6 left-6 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-1 text-gold-700">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-600" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-slate-800 font-serif leading-relaxed italic">
              "{current.quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E5DEC9]">
              <div>
                <h4 className="text-base font-bold text-slate-900">{current.author}</h4>
                <p className="text-xs text-slate-600">{current.role} • <span className="text-forest-700 font-bold">{current.org}</span></p>
                <span className="text-[11px] text-slate-500 font-medium">{current.location}</span>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevStory}
                  className="w-10 h-10 rounded-lg border border-[#E5DEC9] bg-white flex items-center justify-center text-slate-700 hover:bg-forest-700 hover:text-white transition"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextStory}
                  className="w-10 h-10 rounded-lg border border-[#E5DEC9] bg-white flex items-center justify-center text-slate-700 hover:bg-forest-700 hover:text-white transition"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
