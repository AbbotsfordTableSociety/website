import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, MapPin, Sparkles, Building2 } from 'lucide-react';

export default function Hero({ onOpenRespond, onOpenSubmitNeed, onOpenChurchEnroll }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#FAF8F5] text-slate-900 border-b border-[#E5DEC9]">
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Traditional Serif Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight text-slate-900">
              Uniting <span className="text-forest-700 italic">Abbotsford</span> to Meet Real Needs in Crisis.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed mx-auto lg:mx-0 max-w-2xl">
              Abbotsford Table Society connects verified agency caseworkers directly with local churches, businesses, and neighbors—providing immediate, relational help for vulnerable children and families.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#care-portal"
                className="btn btn-primary text-base px-6 py-3.5"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                Explore Live Needs Feed
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button 
                onClick={onOpenSubmitNeed}
                className="btn btn-outline text-base px-6 py-3.5"
              >
                <Building2 className="w-5 h-5 text-forest-700" />
                Submit Need (Agencies)
              </button>

              <button 
                onClick={onOpenChurchEnroll}
                className="btn btn-gold text-base px-6 py-3.5"
              >
                <HeartHandshake className="w-5 h-5" />
                Enroll Your Church
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 border-t border-[#E5DEC9] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-700 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest-700" />
                <span>100% Vetted by Social Workers & Schools</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-700" />
                <span>Serving All Abbotsford Neighborhoods</span>
              </div>
            </div>

          </div>

          {/* Right Column: Full-Height Featured Photography Card */}
          <div className="lg:col-span-5 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#E5DEC9] group h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80" 
                alt="Abbotsford Community Gathering around Table" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="relative z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 sm:p-8 pt-20">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-300">A Shared Dream for Abbotsford</span>
                <p className="text-base sm:text-lg font-serif italic text-white mt-2 leading-relaxed">
                  "Where the vulnerable are seen, and hope flows through Jesus."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
