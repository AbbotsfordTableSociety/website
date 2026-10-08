import React, { useEffect } from 'react';
import ThreePillars from '../components/ThreePillars';
import { Building2, Sparkles, Church, Heart, CheckCircle, Users, Handshake, Zap } from 'lucide-react';

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
            Our Mission & Core Pillars
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 tracking-tight">
            Connection. Collaboration. Catalyzing Change.
          </h1>

          <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            The Abbotsford Table Society exists to bring our community together — churches, non-profits, government agencies, and local leaders — to support our most vulnerable citizens through three core pillars of action.
          </p>
        </div>
      </div>

      {/* Three Mission Pillars Cards: Connection, Collaboration, Catalyzing Change */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Connection */}
            <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-4 shadow-sm hover:border-forest-700 transition">
              <div className="w-14 h-14 rounded-2xl bg-forest-700 text-white flex items-center justify-center shadow-md">
                <Users className="w-7 h-7 text-gold-200" />
              </div>
              <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block">Pillar 1</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Connection
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Bridging the gap between professional caseworkers and local church care teams. We connect real-time family needs with compassionate neighbors ready to serve.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs font-semibold text-slate-800 border-t border-[#E5DEC9]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <span>Direct caseworker-to-church alert network</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <span>Geographic neighborhood matching in Abbotsford</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <span>Relational bridges beyond one-time handouts</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Collaboration */}
            <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-4 shadow-sm hover:border-gold-700 transition">
              <div className="w-14 h-14 rounded-2xl bg-gold-700 text-white flex items-center justify-center shadow-md">
                <Handshake className="w-7 h-7 text-gold-100" />
              </div>
              <span className="text-xs font-bold text-gold-700 uppercase tracking-widest block">Pillar 2</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Collaboration
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Bringing together churches, non-profits, government agencies, and businesses around one shared table. Together, we accomplish what no single group can do alone.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs font-semibold text-slate-800 border-t border-[#E5DEC9]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
                  <span>Cross-denominational church response networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
                  <span>MCFD, school district & community agency partners</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
                  <span>Shared resource pool & collective problem solving</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Catalyzing Change */}
            <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-4 shadow-sm hover:border-forest-700 transition">
              <div className="w-14 h-14 rounded-2xl bg-forest-900 text-white flex items-center justify-center shadow-md">
                <Zap className="w-7 h-7 text-gold-200" />
              </div>
              <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block">Pillar 3</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Catalyzing Change
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Transforming crisis into long-term stability and relational wholeness. We empower families, prevent child apprehension, and restore hope through Jesus.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs font-semibold text-slate-800 border-t border-[#E5DEC9]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <span>Child apprehension prevention & family stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <span>Safe reunification of children with parents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <span>Dignified, ongoing neighborhood care & support</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

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
