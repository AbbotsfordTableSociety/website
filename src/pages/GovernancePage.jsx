import React, { useEffect } from 'react';
import MissionGovernance from '../components/MissionGovernance';
import { ShieldCheck } from 'lucide-react';

export default function GovernancePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen">
      
      {/* Page Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E5DEC9] py-16">
        <div className="container text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-gold-50 text-gold-700 border border-gold-200 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold-700" />
            Ethical Oversight & Transparency
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 tracking-tight">
            Governance & Accountability
          </h1>

          <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Abbotsford Table Society operates under the highest standards of legal registration, financial stewardship, and independent board leadership.
          </p>
        </div>
      </div>

      {/* Governance & Board Component */}
      <MissionGovernance />

    </div>
  );
}
