import React from 'react';
import { Mail, Shield, ExternalLink, Heart } from 'lucide-react';
import AbbyTableLogo from './AbbyTableLogo';

export default function Footer({ onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  const handleNav = (e, path) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#2b3705] text-white pt-10 pb-8 border-t border-[#d8cba9]">
      <div className="container max-w-6xl mx-auto px-6 space-y-6">
        
        {/* Top Section: Organization Brand & Direct Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pb-6 border-b border-[#FAF9F5]/20">
          
          {/* Column 1: Organization Logo & Mission */}
          <div className="space-y-3">
            <a 
              href="/" 
              onClick={(e) => handleNav(e, '/')}
              className="inline-block"
            >
              <AbbyTableLogo isDark={true} className="h-14 md:h-16" />
            </a>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-md font-sans">
              Abbotsford Table Society exists to unite churches and believers across our city to meet real needs in practical, relational, and collaborative ways — so that our community experiences the love of Christ through the people of God.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a 
                href={givewiseUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold text-xs px-5 py-2 rounded-lg font-extrabold text-decoration-none shadow"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>DONATE</span>
              </a>
            </div>
          </div>

          {/* Column 2: Inquiries & Official Contact */}
          <div className="space-y-3 text-left md:text-right">
            <h4 className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider text-[#d8cba9]">
              Send all inquiries to:
            </h4>

            <div className="space-y-1 text-sm md:text-base font-sans">
              <div>
                <a 
                  href="mailto:info@abbotsfordtablesociety.ca" 
                  className="text-white hover:text-[#d8cba9] underline font-bold transition"
                >
                  info@abbotsfordtablesociety.ca
                </a>
              </div>

              <div>
                <a 
                  href="https://www.abbotsfordtablesociety.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-[#d8cba9] underline font-medium transition text-xs md:text-sm"
                >
                  www.abbotsfordtablesociety.ca
                </a>
              </div>
            </div>

            <div className="pt-1 text-[11px] text-slate-300 space-y-0.5">
              <div>BC Society Reg #: <span className="font-mono text-[#d8cba9]">S0082710</span></div>
              <div>Business Number: <span className="font-mono text-[#d8cba9]">76018 8169 BC0001</span></div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 font-sans">
          <p>© 2026 by Abbotsford Table Society. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Incorporated in British Columbia</span>
            <span>•</span>
            <span>GiveWise Donation Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
