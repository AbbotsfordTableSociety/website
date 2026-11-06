import React from 'react';
import { Heart, Sparkles, Target, Users, Handshake, Zap, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export default function AboutStory({ onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  return (
    <section id="story" className="py-16 md:py-20 bg-[#FAF9F5] text-slate-900 border-t border-[#d8cba9] relative">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Section 1: A Shared Dream for Abbotsford */}
        <div className="bg-[#FFFFFF] border-2 border-[#d8cba9] rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
          <div className="space-y-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faf7ef] text-[#2b3705] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#9f7f29]" />
              Our Origin & Vision
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#2b3705] tracking-tight">
              A Shared Dream for Abbotsford
            </h2>
          </div>

          <div className="p-6 md:p-8 bg-[#FAF9F5] border-l-4 border-[#9f7f29] rounded-r-2xl space-y-3">
            <p className="text-lg md:text-2xl text-[#2b3705] font-sans leading-relaxed italic">
              "For years, God has been stirring in us a vision — one that goes beyond any single church or agency. It’s a dream for a city where the vulnerable are seen, where gaps in care are understood, and where hope and healing flow through the love of Jesus."
            </p>
          </div>

          <div className="space-y-4 text-slate-800 text-base md:text-lg leading-relaxed max-w-4xl">
            <p>
              In <strong className="text-[#2b3705]">June 2025</strong>, we launched the <strong>Abbotsford Table Society</strong> to bring this vision to life — fostering holistic care and relational wholeness through connected partnerships. Together, we’re uniting our community in hope and transformation.
            </p>
          </div>

          {/* Visual Highlight Cards */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border-2 border-[#d8cba9] h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80" 
                alt="Abbotsford Volunteers and Responders" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2703]/90 via-[#1e2703]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d8cba9]">Collaboration in Action</span>
                <h4 className="text-xl font-heading font-bold text-white mt-1">Uniting Community Responders</h4>
                <p className="text-xs text-slate-200 mt-1">Connecting churches, non-profits, and partner agencies.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm border-2 border-[#d8cba9] h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80" 
                alt="Warm Community Gathering around Table" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7e6420]/90 via-[#7e6420]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d8cba9]">Relational Wholeness</span>
                <h4 className="text-xl font-heading font-bold text-white mt-1">Dignified, Lasting Care</h4>
                <p className="text-xs text-slate-200 mt-1">Meeting crisis needs with long-term neighborhood support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Objectives: Uniting Our Community in Hope and Action */}
        <div className="bg-[#FFFFFF] border-2 border-[#d8cba9] rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faf7ef] text-[#9f7f29] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-[#9f7f29]" />
              Our Core Objectives
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#2b3705]">
              Uniting Our Community in Hope and Action
            </h3>
          </div>

          <div className="space-y-6 text-slate-800 text-base md:text-lg leading-relaxed max-w-4xl">
            <p className="font-medium text-[#1f2410]">
              The Abbotsford Table Society exists to bring our community together — churches, non-profits, government agencies, and local leaders — to support our most vulnerable citizens through strategic partnerships and collaborative solutions.
            </p>
            <p className="p-5 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl text-[#2b3705] font-semibold">
              We believe lasting change happens when we <strong>connect</strong>, <strong>collaborate</strong>, and <strong>catalyze</strong>. When we show up together — listening, serving, building — transformation becomes possible.
            </p>
            <p className="text-xl md:text-2xl font-heading font-extrabold text-[#9f7f29]">
              Let’s reimagine what’s possible for Abbotsford.
            </p>
          </div>
        </div>

        {/* Section 3: Mission & Three Pillars (On this page) */}
        <div id="mission" className="bg-[#FFFFFF] border-2 border-[#d8cba9] rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2b3705] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
              Mission & Core Pillars
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#2b3705]">
              Connection. Collaboration. Catalyzing Change.
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              Abbotsford Table Society exists to unite churches and believers across our city to meet real needs in practical, relational, and collaborative ways — so that our community experiences the love of Christ through the people of God.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Pillar 1: Connection */}
            <div className="bg-[#FAF9F5] border border-[#d8cba9] rounded-2xl p-6 space-y-3 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#2b3705] text-white flex items-center justify-center shadow">
                <Users className="w-6 h-6 text-[#d8cba9]" />
              </div>
              <span className="text-xs font-bold text-[#2b3705] uppercase tracking-widest block">First Pillar</span>
              <h4 className="text-xl font-heading font-bold text-slate-900">Connect</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Bridging the gap between partner agencies and local church care teams to meet real-time family needs.
              </p>
            </div>

            {/* Pillar 2: Collaboration */}
            <div className="bg-[#FAF9F5] border border-[#d8cba9] rounded-2xl p-6 space-y-3 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#9f7f29] text-white flex items-center justify-center shadow">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-[#9f7f29] uppercase tracking-widest block">Second Pillar</span>
              <h4 className="text-xl font-heading font-bold text-slate-900">Collaborate</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Bringing together churches, non-profits, and partner agencies around one shared table.
              </p>
            </div>

            {/* Pillar 3: Catalyzing Change */}
            <div className="bg-[#FAF9F5] border border-[#d8cba9] rounded-2xl p-6 space-y-3 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#1e2703] text-white flex items-center justify-center shadow">
                <Zap className="w-6 h-6 text-[#d8cba9]" />
              </div>
              <span className="text-xs font-bold text-[#2b3705] uppercase tracking-widest block">Third Pillar</span>
              <h4 className="text-xl font-heading font-bold text-slate-900">Catalyze</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Transforming crisis into long-term stability, preventing child apprehension, and restoring hope.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
