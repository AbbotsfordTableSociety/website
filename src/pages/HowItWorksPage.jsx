import React, { useEffect } from 'react';
import ThreePillars from '../components/ThreePillars';
import { Building2, Sparkles, Church, Heart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

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

          <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            CarePortal is a technology platform that connects real-time casework requests from social workers and schools directly with local church care teams across our community.
          </p>
        </div>
      </div>

      {/* Step-by-Step Workflow Banner */}
      <section className="py-16 bg-[#FCFBF8] border-b border-[#E5DEC9]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Simple 4-Step Process</span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">From Need to Neighborhood Care</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            
            <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-700 text-white font-serif font-bold text-lg flex items-center justify-center mx-auto shadow">
                1
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-lg">Need Identified</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                A social worker, MCFD caseworker, or school counselor identifies a child or family in crisis.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-700 text-white font-serif font-bold text-lg flex items-center justify-center mx-auto shadow">
                2
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-lg">Request Submitted</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                The vetted caseworker posts the specific tangible need (e.g. crib, car seat, rent relief) to CarePortal.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold-700 text-white font-serif font-bold text-lg flex items-center justify-center mx-auto shadow">
                3
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-lg">Churches Alerted</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Churches within that local Abbotsford neighborhood receive an instant notification with request details.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-800 text-white font-serif font-bold text-lg flex items-center justify-center mx-auto shadow">
                4
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-lg">Neighbors Respond</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Church care teams step up to provide the requested item or support, building a dignified connection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CarePortal Roles Section */}
      <ThreePillars 
        onOpenChurchEnroll={onOpenChurchEnroll}
        onOpenSubmitNeed={onOpenSubmitNeed}
      />

      {/* Agency & Church Action Banner */}
      <div className="bg-[#FCFBF8] border-t border-[#E5DEC9] py-16">
        <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          
          <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center font-bold">
              <Church className="w-6 h-6 text-gold-200" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">For Churches & Care Teams</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Activate your congregation to serve local neighbors in crisis with zero cost and full coordination.
            </p>
            <button 
              onClick={onOpenChurchEnroll}
              className="btn btn-primary w-full py-3 text-sm justify-center font-bold"
            >
              Enroll Your Church Team
            </button>
          </div>

          <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gold-700 text-white flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6 text-gold-200" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">For Social Workers & Schools</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Submit verified family needs directly from your caseworker portal to mobilize community support in minutes.
            </p>
            <button 
              onClick={onOpenSubmitNeed}
              className="btn btn-gold w-full py-3 text-sm justify-center font-bold"
            >
              Submit a Family Need
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
