import React, { useEffect } from 'react';
import { Sparkles, Users, Handshake, Zap, Target, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

export default function OurMissionPage({ onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen">
      
      {/* Page Header Banner */}
      {/* Page Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E5DEC9] py-14">
        <div className="container text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-forest-50 text-forest-700 border border-forest-100 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            Abbotsford Table Society
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 tracking-tight">
            Our Mission & Three Pillars
          </h1>

          <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            The Abbotsford Table Society exists to unite our community — churches, non-profits, government agencies, and local leaders — to support our most vulnerable citizens through strategic partnerships and collaborative solutions.
          </p>
        </div>
      </div>

      {/* Sub-Navigation Tabs under About */}
      <div className="bg-[#FCFBF8] border-b border-[#E5DEC9] py-3.5">
        <div className="container max-w-4xl mx-auto flex items-center justify-center gap-3">
          <button 
            onClick={() => onNavigate && onNavigate('/about')}
            className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold bg-forest-50 text-forest-800 border border-forest-100 hover:bg-forest-100 transition"
          >
            Our Story & Purpose
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('/our-mission')}
            className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold bg-forest-700 text-white shadow-sm"
          >
            Our Mission & Three Pillars
          </button>
        </div>
      </div>

      {/* Inspiring Vision Statement Banner */}
      <div className="bg-[#FCFBF8] border-b border-[#E5DEC9] py-14">
        <div className="container max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">The Vision Behind Our Mission</span>
          <p className="text-xl md:text-2xl font-serif italic text-forest-900 leading-relaxed max-w-3xl mx-auto">
            "For years, God has been stirring in us a vision — one that goes beyond any single church or agency. It’s a dream for a city where the vulnerable are seen, where gaps in care are understood, and where hope and healing flow through the love of Jesus."
          </p>
        </div>
      </div>

      {/* The Three Pillars Section: Connection, Collaboration, Catalyzing Change */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-50 px-3.5 py-1 rounded border border-forest-100">
              Foundational Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
              Three Pillars of Our Work
            </h2>
            <p className="text-slate-700 text-base md:text-lg">
              We anchor our mission around three core pillars that drive all of our community initiatives across Abbotsford.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Connection */}
            <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-5 shadow-sm hover:border-forest-700 transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-forest-700 text-white flex items-center justify-center shadow-md">
                  <Users className="w-7 h-7 text-gold-200" />
                </div>
                <div>
                  <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block mb-1">First Pillar</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Connection
                  </h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Bridging the gap between professional social workers and local church care teams. We connect real-time family needs with compassionate neighbors ready to serve.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs font-semibold text-slate-800 border-t border-[#E5DEC9]">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <span>Direct caseworker-to-church alert network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <span>Geographic neighborhood matching in Abbotsford</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <span>Relational bridges beyond one-time handouts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Collaboration */}
            <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-5 shadow-sm hover:border-gold-700 transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gold-700 text-white flex items-center justify-center shadow-md">
                  <Handshake className="w-7 h-7 text-gold-100" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gold-700 uppercase tracking-widest block mb-1">Second Pillar</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Collaboration
                  </h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Bringing together churches, non-profits, government agencies, and businesses around one shared table. Together, we accomplish what no single group can do alone.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs font-semibold text-slate-800 border-t border-[#E5DEC9]">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
                    <span>Cross-denominational church response networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
                    <span>MCFD, school district & community agency partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
                    <span>Shared resource pool & collective problem solving</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Catalyzing Change */}
            <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 space-y-5 shadow-sm hover:border-forest-700 transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-forest-900 text-white flex items-center justify-center shadow-md">
                  <Zap className="w-7 h-7 text-gold-200" />
                </div>
                <div>
                  <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block mb-1">Third Pillar</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Catalyzing Change
                  </h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Transforming crisis into long-term stability and relational wholeness. We empower families, prevent child apprehension, and restore hope through Jesus.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs font-semibold text-slate-800 border-t border-[#E5DEC9]">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <span>Child apprehension prevention & family stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <span>Safe reunification of children with parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <span>Dignified, ongoing neighborhood care & support</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Objectives & Strategic Alignment Grid */}
      <div className="bg-[#FCFBF8] border-t border-[#E5DEC9] py-20">
        <div className="container max-w-5xl mx-auto">
          <div className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold-700 text-white flex items-center justify-center font-bold shadow">
                <Target className="w-6 h-6 text-gold-100" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
                  Objectives: Uniting Our Community in Hope & Action
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-forest-700">Strategic Direction</span>
              </div>
            </div>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              The Abbotsford Table Society exists to bring our community together — churches, non-profits, government agencies, and local leaders — to support our most vulnerable citizens through strategic partnerships and collaborative solutions. We believe lasting change happens when we connect, collaborate, and catalyze.
            </p>

            <blockquote className="p-6 bg-forest-50 border-l-4 border-forest-700 rounded-r-xl italic text-forest-900 font-serif text-lg leading-relaxed">
              "When we show up together — listening, serving, building — transformation becomes possible. Let’s reimagine what’s possible for Abbotsford."
            </blockquote>

            <div className="pt-6 border-t border-[#E5DEC9] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Support The Mission</span>
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

      {/* Next Step Callout: See How CarePortal Puts Our Mission Into Action */}
      <div className="bg-forest-900 text-white py-16">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-serif font-bold text-white">
            See How CarePortal Puts Our Mission Into Action
          </h3>
          <p className="text-forest-100 text-base max-w-2xl mx-auto leading-relaxed">
            Discover the CarePortal framework, how caseworkers submit needs, and how local churches respond across Abbotsford.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => onNavigate && onNavigate('/how-it-works')}
              className="btn btn-gold text-base px-8 py-3.5 font-bold shadow-lg hover:scale-105 transition"
            >
              <span>Explore How CarePortal Works</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
