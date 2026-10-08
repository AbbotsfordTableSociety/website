import React, { useEffect } from 'react';
import ThreePillars from '../components/ThreePillars';
import { Building2, Sparkles, Church, Heart, ShieldCheck } from 'lucide-react';

export default function HowItWorksPage({ onOpenChurchEnroll, onOpenSubmitNeed }) {
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
            CarePortal Framework
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 tracking-tight">
            How CarePortal Works in Abbotsford
          </h1>

          <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            CarePortal is a technology platform that connects real-time casework requests directly with local church care teams across our community.
          </p>
        </div>
      </div>

      {/* Three Pillars Section */}
      <ThreePillars 
        onOpenChurchEnroll={onOpenChurchEnroll}
        onOpenSubmitNeed={onOpenSubmitNeed}
      />

      {/* Agency & Church Action Banner */}
      <div className="bg-[#FCFBF8] border-t border-[#E5DEC9] py-16">
        <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          
          <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center font-bold">
              <Church className="w-6 h-6 text-gold-200" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">For Churches & Care Teams</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Activate your congregation to serve local neighbors in crisis with zero cost and full coordination.
            </p>
            <button 
              onClick={onOpenChurchEnroll}
              className="btn btn-primary w-full py-3 text-sm justify-center"
            >
              Enroll Your Church Team
            </button>
          </div>

          <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-700 text-white flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6 text-gold-200" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">For Social Workers & Schools</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Submit verified family needs directly from your caseworker portal to mobilize community support in minutes.
            </p>
            <button 
              onClick={onOpenSubmitNeed}
              className="btn btn-gold w-full py-3 text-sm justify-center"
            >
              Submit a Family Need
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
