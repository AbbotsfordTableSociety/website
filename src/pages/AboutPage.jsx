import React, { useEffect } from 'react';
import { Sparkles, ArrowRight, Heart, Mail, BookOpen, Users, ShieldCheck, Target } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      
      {/* Main Full-Width Hero Banner with Mountain Nature Photo */}
      <div className="relative w-full min-h-[380px] md:min-h-[440px] flex items-center justify-center text-center overflow-hidden border-b border-[#d8cba9]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ats-about-nature-bridge.png" 
            alt="A Shared Dream for Abbotsford Nature Trail" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2410]/95 via-[#2b3705]/80 to-[#1f2410]/75"></div>
        </div>

        <div className="relative z-10 container max-w-4xl mx-auto px-4 py-16 md:py-24 text-white space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F5]/90 text-[#2b3705] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#9f7f29]" />
            About Abbotsford Table Society
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-tight">
            A Shared Dream for Abbotsford
          </h1>

          <p className="text-slate-100 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-sans font-medium drop-shadow">
            Abbotsford Table Society exists to unite churches and believers across our city to meet real needs in practical, relational, and collaborative ways — so that our community experiences the love of Christ through the people of God.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-[#FAF9F5] overflow-hidden">
        
        {/* 1. Top Section: Left-Justified Text, Right Image */}
        <div className="container max-w-6xl mx-auto px-4 md:px-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text (Left Justified) */}
            <div className="lg:col-span-7 bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-10 shadow-sm space-y-6 text-left">
              <div className="text-slate-800 text-base md:text-lg leading-relaxed space-y-3">
                <p>
                  In <strong className="text-[#2b3705]">June 2025</strong>, we launched the <strong>Abbotsford Table Society</strong> to bring this vision to life — fostering holistic care and relational wholeness through connected partnerships. Together, we’re uniting our community in hope and transformation.
                </p>
              </div>

              <div className="p-6 bg-[#FAF9F5] border-l-4 border-[#9f7f29] rounded-r-2xl space-y-3">
                <p className="text-lg md:text-xl text-[#2b3705] font-sans leading-relaxed italic">
                  "For years, God has been stirring in us a vision — one that goes beyond any single church or agency. It’s a dream for a city where the vulnerable are seen, where gaps in care are understood, and where hope and healing flow through the love of Jesus."
                </p>
              </div>
            </div>

            {/* Right Column: Clean Transparent Circular Logo Emblem */}
            <div className="lg:col-span-5 h-full flex items-center justify-center p-4">
              <img 
                src="/ats-logo-seal.png" 
                alt="Abbotsford Table Society Official Seal" 
                className="w-full max-w-[320px] md:max-w-[360px] h-auto object-contain drop-shadow-lg hover:scale-105 transition-transform"
              />
            </div>

          </div>
        </div>

        {/* 2. Full-Bleed Connected Wide Objectives Block */}
        <div className="w-full mb-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch border-y-2 border-[#d8cba9] overflow-hidden shadow-sm">
            
            {/* Left Column: Image (Connected to Content Block) */}
            <div className="lg:col-span-5 h-[340px] sm:h-[420px] lg:h-auto w-full relative overflow-hidden bg-white border-r-2 border-[#d8cba9]">
              <img 
                src="/ats-worship-hands.png" 
                alt="Uniting Our Community in Hope and Action" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Column: White Content Block (Connected to Image) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 text-right">
              <div className="space-y-2">
                <span className="text-sm font-extrabold uppercase tracking-widest text-[#9f7f29] block">
                  Objectives:
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#2b3705] leading-tight">
                  Uniting Our Community in Hope and Action
                </h3>
              </div>

              <p className="text-slate-800 text-base md:text-lg lg:text-xl leading-relaxed font-sans">
                The Abbotsford Table Society exists to bring our community together — churches, non-profits, government agencies, and local leaders — to support our most vulnerable citizens through strategic partnerships and collaborative solutions. We believe lasting change happens when we <strong>connect</strong>, <strong>collaborate</strong>, and <strong>catalyze</strong>.
              </p>
            </div>

          </div>
        </div>

        {/* Centered Read More About Our Mission Button */}
        <div className="text-center pt-4">
          <a
            href="/our-mission"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/our-mission');
              }
            }}
            className="btn-gold px-8 py-4 rounded-xl text-xs sm:text-sm font-extrabold inline-flex items-center gap-2 shadow-lg hover:scale-105 transition text-decoration-none"
          >
            <span>READ MORE ABOUT OUR MISSION</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </section>

      {/* Full-Bleed Tan Gold Quote Banner */}
      <section className="w-full bg-[#d8cba9] py-14 border-y border-[#9f7f29]/30 text-center shadow-inner">
        <div className="container max-w-5xl mx-auto px-6 space-y-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#2b3705] leading-snug max-w-4xl mx-auto">
            When we show up together — listening, serving, building—transformation becomes possible.
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl font-sans italic text-[#2b3705] font-semibold">
            Let’s reimagine what’s possible for Abbotsford.
          </p>
          <div className="w-48 h-0.5 bg-[#2b3705]/40 mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

    </div>
  );
}
