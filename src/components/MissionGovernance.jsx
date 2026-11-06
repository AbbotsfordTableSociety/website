import React from 'react';
import { ShieldCheck, Users, FileText, Lock, ExternalLink, Award, FileSpreadsheet } from 'lucide-react';

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
    <section id="governance" className="py-16 md:py-20 bg-[#FAF9F5] text-slate-900 border-t border-[#d8cba9] relative">
      
      <div className="container max-w-5xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Governance Header */}
        <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faf7ef] text-[#2b3705] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9f7f29]" />
              Governance & Ethical Oversight
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#2b3705]">
              Governance & Accountability
            </h2>
          </div>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Abbotsford Table Society is committed to transparency, accountability, and responsible stewardship. We believe churches, donors, volunteers, and community partners should have clear access to information about our organization, governance, and the responsible management of the resources entrusted to us.
          </p>
        </div>

        {/* Legal & Organizational Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border-2 border-[#d8cba9] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#faf7ef] text-[#2b3705] flex items-center justify-center font-bold border border-[#d8cba9] mb-2">
              <FileText className="w-5 h-5 text-[#2b3705]" />
            </div>
            <h4 className="text-lg font-heading font-bold text-slate-900">BC Incorporated Society</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Officially incorporated non-profit society under the British Columbia Societies Act.
            </p>
            <div className="pt-2 border-t border-[#d8cba9] text-xs font-bold text-slate-800 space-y-1">
              <div>BC Society Reg #: <span className="text-[#2b3705] font-mono">S0082710</span></div>
              <div className="text-[11px] text-slate-500">Incorporated June 2025</div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#d8cba9] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#faf7ef] text-[#9f7f29] flex items-center justify-center font-bold border border-[#d8cba9] mb-2">
              <Award className="w-5 h-5 text-[#9f7f29]" />
            </div>
            <h4 className="text-lg font-heading font-bold text-slate-900">Business Registration</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Registered corporate entity for official Canadian operations and community oversight.
            </p>
            <div className="pt-2 border-t border-[#d8cba9] text-xs font-bold text-slate-800 space-y-1">
              <div>Business Number:</div>
              <div className="text-[#9f7f29] font-mono">76018 8169 BC0001</div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#d8cba9] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#faf7ef] text-[#2b3705] flex items-center justify-center font-bold border border-[#d8cba9] mb-2">
              <Lock className="w-5 h-5 text-[#2b3705]" />
            </div>
            <h4 className="text-lg font-heading font-bold text-slate-900">Charitable Giving Partner</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Abbotsford Table Society partners with GiveWise to process charitable donations. Eligible donations receive official tax receipts issued through GiveWise.
            </p>
            <div className="pt-2 border-t border-[#d8cba9]">
              <a 
                href={givewiseUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-[#9f7f29] hover:text-[#2b3705] flex items-center gap-1 text-decoration-none"
              >
                <span>GiveWise Charity Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>


        {/* Annual Reports Card */}
        <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#faf7ef] text-[#2b3705] flex items-center justify-center flex-shrink-0 border border-[#d8cba9]">
              <FileSpreadsheet className="w-6 h-6 text-[#2b3705]" />
            </div>
            <div>
              <h4 className="text-lg font-heading font-bold text-slate-900">Annual Reports & Accountability</h4>
              <p className="text-xs text-slate-600 max-w-xl">
                Abbotsford Table Society publishes annual reports to share our activities, partnerships, organizational progress, and stewardship with our community. Our Inaugural Report will be published here soon.
              </p>
            </div>
          </div>

          <a 
            href={givewiseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-xs px-6 py-3 whitespace-nowrap text-decoration-none shadow"
          >
            Support Our Mission via GiveWise
          </a>
        </div>

      </div>
    </section>
  );
}
