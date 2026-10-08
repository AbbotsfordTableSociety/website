import React from 'react';
import { Heart, Sparkles, Target, ArrowRight } from 'lucide-react';

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

        {/* Feature Photography Banner */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#E5DEC9] h-64 group">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80" 
              alt="Abbotsford Volunteers and Church Responders" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-200">Church & Agency Collaboration</span>
              <h4 className="text-xl font-serif font-bold text-white mt-1">Uniting Community Responders</h4>
              <p className="text-xs text-slate-200 mt-1">Connecting churches, schools, and social workers for tangible local impact.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#E5DEC9] h-64 group">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80" 
              alt="Warm Community Gathering around Table" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gold-900/90 via-gold-900/40 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-200">Relational Wholeness</span>
              <h4 className="text-xl font-serif font-bold text-white mt-1">Dignified, Lasting Care</h4>
              <p className="text-xs text-slate-200 mt-1">Meeting crisis needs with long-term neighborhood friendship.</p>
            </div>
          </div>
        </div>

        {/* Story & Foundation Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-10">
          
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
                <Heart className="w-3.5 h-3.5" /> Give via GiveWise
              </a>
            </div>
          </div>

        </div>

        {/* Wide Callout Banner: Read More About Our Mission & Three Pillars */}
        <div className="bg-forest-900 border-2 border-forest-800 rounded-2xl p-6 md:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              Explore Our Mission & Three Pillars of Care
            </h4>
            <p className="text-sm text-forest-100 max-w-2xl">
              Learn more about how we connect caseworkers, local churches, and neighborhood volunteers for long-term community transformation.
            </p>
          </div>
          <a 
            href="/how-it-works"
            className="btn btn-gold px-6 py-3 text-sm font-bold shrink-0 inline-flex items-center gap-2 shadow hover:scale-[1.02] transition"
          >
            <span>Read More About Our Mission</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
