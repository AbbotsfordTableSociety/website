import React from 'react';
import { Heart, Sparkles, Target, ArrowRight, ShieldCheck, Users, Globe } from 'lucide-react';

export default function AboutStory() {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  return (
    <section id="about" className="py-24 bg-[#FCFBF8] text-slate-900 border-t border-[#E5DEC9] relative">
      <div className="container">
        
        {/* Header & Shared Dream Intro */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-forest-50 text-forest-700 border border-forest-100 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            Our Origins & Story
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            A Shared Dream for Abbotsford
          </h2>

          <p className="text-lg md:text-xl text-slate-700 font-serif leading-relaxed italic max-w-3xl mx-auto pt-2">
            "For years, God has been stirring in us a vision — one that goes beyond any single church or agency. It’s a dream for a city where the vulnerable are seen, where gaps in care are understood, and where hope and healing flow through the love of Jesus."
          </p>
        </div>

        {/* Story & Foundation Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          <div className="lg:col-span-6 bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center font-bold text-lg shadow">
                2025
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Launched in June 2025
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                In June 2025, we launched the <strong>Abbotsford Table Society</strong> to bring this vision to life — fostering holistic care and relational wholeness through connected partnerships. Together, we’re uniting our community in hope and transformation.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E5DEC9] mt-6">
              <a 
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-bold text-forest-700 hover:text-forest-800 transition"
              >
                <span>Read More About Our Mission & Three Pillars</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-700 text-white flex items-center justify-center font-bold text-lg shadow">
                <Target className="w-6 h-6 text-gold-200" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Objectives: Uniting Our Community in Hope & Action
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                The Abbotsford Table Society exists to bring our community together — churches, non-profits, government agencies, and local leaders — to support our most vulnerable citizens through strategic partnerships and collaborative solutions. We believe lasting change happens when we connect, collaborate, and catalyze.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-semibold italic text-forest-800">
                "When we show up together — listening, serving, building — transformation becomes possible. Let’s reimagine what’s possible for Abbotsford."
              </p>
            </div>

            <div className="pt-6 border-t border-[#E5DEC9] mt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Join The Table</span>
              <a 
                href={givewiseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-xs px-4 py-2 text-decoration-none"
              >
                Partner With Us
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
