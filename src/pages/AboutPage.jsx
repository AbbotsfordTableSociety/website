import React, { useEffect } from 'react';
import AboutStory from '../components/AboutStory';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen">
      
      {/* Page Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E5DEC9] py-16">
        <div className="container text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-forest-50 text-forest-700 border border-forest-100 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            About Abbotsford Table Society
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 tracking-tight">
            Our Story, Purpose & Objectives
          </h1>

          <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Uniting churches, non-profits, government agencies, and local leaders across Abbotsford to serve our most vulnerable families with dignity and hope.
          </p>
        </div>
      </div>

      {/* Story & Objectives Component */}
      <AboutStory />

      {/* Call to Action Bar */}
      <div className="bg-[#FCFBF8] border-t border-[#E5DEC9] py-16">
        <div className="container text-center max-w-2xl mx-auto space-y-6">
          <h3 className="text-2xl font-serif font-bold text-slate-900">
            Ready to Join the Table in Abbotsford?
          </h3>
          <p className="text-slate-700 text-sm">
            Explore how CarePortal works in our city, or support the mission directly through GiveWise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('/how-it-works')}
              className="btn btn-primary text-sm px-6 py-3"
            >
              Explore How It Works <ArrowRight className="w-4 h-4" />
            </button>

            <a 
              href={givewiseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-sm px-6 py-3 text-decoration-none"
            >
              <Heart className="w-4 h-4" /> Give via GiveWise
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
