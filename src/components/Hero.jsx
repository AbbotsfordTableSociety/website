import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, MapPin, Sparkles, AlertCircle, Building2 } from 'lucide-react';

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

          {/* Right Live Request Card Simulation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Traditional Card */}
              <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-6 shadow-md">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#E5DEC9]">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-urgent">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Urgent Family Need
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Posted 14m ago</span>
                  </div>
                  <span className="text-xs font-bold text-forest-700 bg-forest-50 px-2.5 py-1 rounded border border-forest-100">
                    Clearbrook, Abbotsford
                  </span>
                </div>

                <div className="py-5 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-slate-900 leading-snug">
                    Safety & Bedding for Single Mother & 2 Toddlers
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A local agency partner requested a twin mattress, car seats, and groceries to prevent child apprehension and ensure safe reunification.
                  </p>
                  
                  {/* Progress bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gold-700">Needs 1 Response</span>
                      <span className="text-slate-600">Goal: $450 or Physical Items</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#E5DEC9]/50 overflow-hidden">
                      <div className="h-full bg-forest-700 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5DEC9] flex items-center justify-between">
                  <div className="text-xs text-slate-600">
                    <span className="font-bold text-slate-900">Vetted by:</span> Ministry of Children & Family Development
                  </div>
                  <button 
                    onClick={onOpenRespond}
                    className="btn btn-primary text-xs px-4 py-2"
                  >
                    I Can Help
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
