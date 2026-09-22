import React from 'react';
import { ShieldCheck, Heart, Users, Sparkles, FileText, CheckCircle2, Globe, Lock } from 'lucide-react';

export default function MissionGovernance({ onOpenGive }) {
  return (
    <section id="mission" className="py-24 bg-[#FAF8F5] text-slate-900 border-t border-[#E5DEC9] relative overflow-hidden">
      
      <div className="container relative z-10">
        
        {/* Mission Plaque */}
        <div className="max-w-4xl mx-auto bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-xl bg-forest-700 text-white flex items-center justify-center flex-shrink-0 shadow">
              <Users className="w-10 h-10 text-gold-200" />
            </div>

            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded border border-gold-200">
                Our Core Mission Statement
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold leading-snug text-slate-900 italic">
                "Abbotsford Table Society exists to unite churches and believers across our city to meet real needs in practical, relational, and collaborative ways — so that our community experiences the love of Christ through the people of God."
              </h2>
            </div>
          </div>
        </div>

        {/* 3 Core Approach Cards: Connect, Collaborate, Catalyze */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#FCFBF8] border border-[#E5DEC9] rounded-xl p-6 hover:border-forest-700 transition">
            <div className="w-10 h-10 rounded bg-forest-50 text-forest-700 flex items-center justify-center font-bold text-lg mb-4 border border-forest-100">
              01
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Connect</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              We break down denominational silos by bringing church leaders, non-profits, and city partners to one table in unity for Abbotsford.
            </p>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E5DEC9] rounded-xl p-6 hover:border-gold-700 transition">
            <div className="w-10 h-10 rounded bg-gold-50 text-gold-700 flex items-center justify-center font-bold text-lg mb-4 border border-gold-200">
              02
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Collaborate</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              By embedding CarePortal technology, we match real-time casework requests directly with local church care teams across the city.
            </p>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E5DEC9] rounded-xl p-6 hover:border-rose-700 transition">
            <div className="w-10 h-10 rounded bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-lg mb-4 border border-rose-100">
              03
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Catalyze</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              We empower lasting relational wholeness, ensuring families in crisis experience long-term support and neighborhood friendship.
            </p>
          </div>
        </div>

        {/* Governance & Accountability Section */}
        <div id="governance" className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 md:p-12 shadow-sm">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-gold-50 text-gold-700 border border-gold-200 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold-700" />
                Governance & Ethical Oversight
              </div>

              <h3 className="text-3xl font-serif font-extrabold tracking-tight text-slate-900">
                Built on Highest Standards of Accountability & Transparency
              </h3>

              <p className="text-slate-700 text-base leading-relaxed">
                Abbotsford Table Society is an officially incorporated non-profit society under the British Columbia Societies Act (<strong className="text-slate-900">BC Incorporation #S0082710</strong>). We operate with full financial transparency and independent board leadership.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-lg border border-[#E5DEC9]">
                  <FileText className="w-5 h-5 text-gold-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">BC Incorporated Society</h4>
                    <p className="text-xs text-slate-600 mt-0.5">BC Society Reg #S0082710 (Incorporated June 2025)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-lg border border-[#E5DEC9]">
                  <Lock className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">GiveWise Charitable Partner</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Secure, transparent tax-deductible donation processing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 md:p-8 rounded-xl border border-[#E5DEC9] space-y-4">
              <h4 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-forest-700" />
                Our Governance Commitments
              </h4>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-700 mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-slate-900">Dignity-First Standard</strong>: Assistance is provided without pre-conditions, proselytization, or stigma.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-700 mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-slate-900">Strict Vetting</strong>: Needs are exclusively entered by certified social workers and school representatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-700 mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-slate-900">Volunteer Board</strong>: Governed by an active volunteer board of local Abbotsford community & ministry leaders.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#E5DEC9]">
                <button 
                  onClick={onOpenGive}
                  className="btn btn-gold w-full py-2.5 text-xs font-bold justify-center"
                >
                  Partner With Us via GiveWise
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
