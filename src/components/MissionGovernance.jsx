import React from 'react';
import { ShieldCheck, Users, FileText, CheckCircle2, Lock, ExternalLink, Award, FileSpreadsheet } from 'lucide-react';

export default function MissionGovernance() {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  const boardMembers = [
    { name: "Warren Janzen", role: "Board Member" },
    { name: "Tammy Kyte", role: "Board Member" },
    { name: "Sandy Driediger", role: "Board Member" },
    { name: "Cam Broad", role: "Board Member" },
    { name: "Wes Friesen", role: "Board Member" },
    { name: "Michelle Stuart", role: "Board Member" },
  ];

  return (
    <section id="governance" className="py-24 bg-[#FAF8F5] text-slate-900 border-t border-[#E5DEC9] relative overflow-hidden">
      
      <div className="container relative z-10">
        
        {/* Governance & Accountability Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-gold-50 text-gold-700 border border-gold-200 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold-700" />
            Governance & Ethical Oversight
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Governance & Accountability
          </h2>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Abbotsford Table Society is committed to transparency, accountability, and responsible stewardship. We believe churches, donors, volunteers, and community partners should have clear access to information about our organization, governance, and the responsible management of the resources entrusted to us.
          </p>
        </div>

        {/* Legal & Organizational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center font-bold border border-forest-100 mb-2">
              <FileText className="w-5 h-5 text-forest-700" />
            </div>
            <h4 className="text-lg font-serif font-bold text-slate-900">BC Incorporated Society</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Officially incorporated non-profit society under the British Columbia Societies Act.
            </p>
            <div className="pt-2 border-t border-[#E5DEC9] text-xs font-bold text-slate-800 space-y-1">
              <div>BC Society Reg #: <span className="text-forest-700">S0082710</span></div>
              <div className="text-[11px] text-slate-500">Incorporated June 2025</div>
            </div>
          </div>

          <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center font-bold border border-gold-200 mb-2">
              <Award className="w-5 h-5 text-gold-700" />
            </div>
            <h4 className="text-lg font-serif font-bold text-slate-900">Business Registration</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Registered corporate entity for official Canadian operations and community oversight.
            </p>
            <div className="pt-2 border-t border-[#E5DEC9] text-xs font-bold text-slate-800 space-y-1">
              <div>Business Number:</div>
              <div className="text-gold-700 font-mono">76018 8169 BC0001</div>
            </div>
          </div>

          <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold border border-rose-100 mb-2">
              <Lock className="w-5 h-5 text-rose-700" />
            </div>
            <h4 className="text-lg font-serif font-bold text-slate-900">Charitable Giving Partner</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Abbotsford Table Society partners with GiveWise to process charitable donations. Eligible donations receive official tax receipts issued through GiveWise.
            </p>
            <div className="pt-2 border-t border-[#E5DEC9]">
              <a 
                href={givewiseUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-gold-700 hover:text-gold-800 flex items-center gap-1 text-decoration-none"
              >
                <span>GiveWise Charity Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Board of Directors Section */}
        <div className="bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-3 py-1 rounded border border-forest-100">
              Leadership & Stewardship
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              Board of Directors
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Abbotsford Table Society is governed by a volunteer Board of Directors committed to providing strategic leadership, accountability, and faithful stewardship in support of our mission.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {boardMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF8F5] border border-[#E5DEC9] rounded-xl p-4 text-center space-y-1 hover:border-gold-600 transition"
              >
                <div className="w-10 h-10 rounded-full bg-forest-700 text-gold-200 flex items-center justify-center font-serif font-bold text-sm mx-auto mb-2">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">{member.name}</h4>
                <p className="text-[11px] text-slate-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Reports Card */}
        <div className="bg-[#FCFBF8] border border-[#E5DEC9] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center flex-shrink-0 border border-forest-100">
              <FileSpreadsheet className="w-6 h-6 text-forest-700" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-slate-900">Annual Reports & Accountability</h4>
              <p className="text-xs text-slate-600 max-w-xl">
                Abbotsford Table Society publishes annual reports to share our activities, partnerships, organizational progress, and stewardship with our community. Our Inaugural Report will be published here soon.
              </p>
            </div>
          </div>

          <a 
            href={givewiseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-xs px-5 py-3 whitespace-nowrap text-decoration-none"
          >
            Support Our Mission via GiveWise
          </a>
        </div>

      </div>
    </section>
  );
}
