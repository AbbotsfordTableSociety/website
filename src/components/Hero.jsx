import React from 'react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function Hero({ onOpenRespond, onOpenSubmitNeed, onOpenChurchEnroll, onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  return (
    <div className="w-full">
      
      {/* 1. Full-Width Edge-to-Edge Hero Banner */}
      <section className="relative w-full min-h-[580px] md:min-h-[640px] flex items-center justify-center text-center overflow-hidden border-b border-[#d8cba9]">
        
        {/* Full-Bleed Background Photography */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80" 
            alt="Abbotsford Table Society Community Gathering" 
            className="w-full h-full object-cover object-center"
          />
          {/* Soft Brand Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2410]/95 via-[#2b3705]/75 to-[#1f2410]/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container max-w-5xl mx-auto px-6 py-24 text-white space-y-6">

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white leading-tight">
            Equipping Churches. <br className="hidden sm:inline" />
            <span className="text-[#d8cba9]">Transforming Abbotsford.</span>
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl text-slate-100 font-sans font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
            Uniting churches, agencies, non-profits, and neighbours to respond to crisis with compassion, collaboration, and practical care.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="/our-mission"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/our-mission');
                }
              }}
              className="btn bg-[#FAF9F5] hover:bg-white text-[#2b3705] text-base px-8 py-4 rounded-xl shadow-xl font-extrabold border-2 border-[#d8cba9] transition flex items-center gap-2"
            >
              <span>OUR MISSION</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a 
              href={givewiseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-base px-8 py-4 rounded-xl text-decoration-none shadow-xl font-extrabold flex items-center gap-2 hover:scale-105 transition"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>DONATE</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. Wide Banner Strip: Our Mission Statement */}
      <section className="w-full bg-[#FAF9F5] py-20 border-b border-[#d8cba9]">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#9f7f29] bg-[#faf7ef] px-4 py-1.5 rounded-full border border-[#d8cba9]">
              Our Mission
            </span>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#2b3705] leading-tight max-w-4xl mx-auto">
              Abbotsford Table Society exists to unite churches and believers across our city to meet real needs in practical, relational, and collaborative ways.
            </h2>

            <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-sans">
              So that our community experiences the love of Christ through the people of God.
            </p>

            <div className="pt-2">
              <a 
                href="/our-mission"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/our-mission');
                  }
                }}
                className="inline-flex items-center gap-2 text-base font-extrabold text-[#2b3705] border-b-2 border-[#2b3705] pb-1 hover:text-[#9f7f29] hover:border-[#9f7f29] transition"
              >
                <span>OUR MISSION</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Full-Width Edge-to-Edge Image Banner from Abbotsford Table Society */}
      <section className="w-full relative overflow-hidden border-y border-[#d8cba9] bg-[#d8cba9]">
        <div className="w-full h-[360px] sm:h-[480px] md:h-[580px] relative">
          <img 
            src="/ats-hero-mother-child.png" 
            alt="Abbotsford Table Society Family Care" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* 4. Full-Bleed Brand Tan Action Strip: Get Involved */}
      <section className="w-full bg-[#d8cba9] py-16 text-center border-t border-[#9f7f29]/40">
        <div className="container max-w-4xl mx-auto px-6 space-y-6">
          <h3 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#2b3705]">
            Get Involved with Abbotsford Table Society
          </h3>
          <p className="text-base sm:text-lg text-[#2b3705]/90 font-medium max-w-2xl mx-auto">
            Join us in fostering unity and support in our community through collaborative efforts and local partnerships.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a 
              href={givewiseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-sm md:text-base px-8 py-3.5 rounded-xl text-decoration-none shadow-lg font-extrabold flex items-center gap-2"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>DONATE</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
