import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, Shield, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import AbbyTableLogo from './AbbyTableLogo';

export default function Footer({ onOpenGive, onOpenRespond, onOpenSubmitNeed, onOpenChurchEnroll }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-slate-800 pt-16 pb-12 border-t-2 border-[#E5DEC9]">
      <div className="container">
        
        {/* Top Newsletter CTA Card in Forest Green */}
        <div className="bg-forest-800 text-white rounded-2xl p-8 md:p-10 mb-16 shadow-md border border-forest-900">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-200">
                Stay Connected with Abbotsford CarePortal
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-white">
                Receive Weekly Urgent Need Briefings
              </h3>
              <p className="text-emerald-100 text-sm">
                Get a clean, weekly digest of vetted local family needs in your neighborhood.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="bg-white/10 border border-white/20 text-white p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-200 flex-shrink-0" />
                  <span className="text-sm font-semibold">Thank you! You've been subscribed to weekly Abbotsford updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-600"
                  />
                  <button type="submit" className="btn btn-gold whitespace-nowrap py-3 px-6 text-sm">
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E5DEC9]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <AbbyTableLogo isDark={false} className="h-16 md:h-20" />

            <p className="text-xs text-slate-700 leading-relaxed max-w-sm">
              Abbotsford Table Society exists to unite churches and believers across our city to meet real needs in practical, relational, and collaborative ways — so that our community experiences the love of Christ.
            </p>

            <div className="text-xs text-slate-700 space-y-1.5 pt-2 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-700" />
                <a href="mailto:info@abbotsfordtablesociety.ca" className="hover:text-forest-700 transition font-bold">
                  info@abbotsfordtablesociety.ca
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-700" />
                <span>Abbotsford, British Columbia, Canada</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-600">
                <Shield className="w-3.5 h-3.5 text-slate-500" />
                <span>BC Society Inc #S0082710 (Incorporated June 2025)</span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-700 font-semibold">
              <li><a href="#care-portal" className="hover:text-forest-700 transition">Live Needs Feed</a></li>
              <li><a href="#how-it-works" className="hover:text-forest-700 transition">How CarePortal Works</a></li>
              <li><a href="#mission" className="hover:text-forest-700 transition">Mission & Strategy</a></li>
              <li><a href="#governance" className="hover:text-forest-700 transition">Governance & Board</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2 text-xs text-slate-700 font-semibold">
              <li><button onClick={onOpenRespond} className="hover:text-forest-700 transition text-left">Respond to a Need</button></li>
              <li><button onClick={onOpenChurchEnroll} className="hover:text-forest-700 transition text-left">Enroll Your Church</button></li>
              <li><button onClick={onOpenSubmitNeed} className="hover:text-forest-700 transition text-left">Agency Request Portal</button></li>
              <li><button onClick={onOpenGive} className="hover:text-forest-700 transition text-left">Give via GiveWise</button></li>
            </ul>
          </div>

          {/* External Partners */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Integrations</h4>
            <ul className="space-y-2 text-xs text-slate-700 font-semibold">
              <li>
                <a href="https://www.careportal.org" target="_blank" rel="noopener noreferrer" className="hover:text-forest-700 transition flex items-center gap-1">
                  <span>CarePortal.org</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://fund.givewise.ca/gift/charity/NQD00331" target="_blank" rel="noopener noreferrer" className="hover:text-gold-700 transition flex items-center gap-1">
                  <span>GiveWise Charity Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-medium gap-4">
          <p>© 2026 Abbotsford Table Society. All Rights Reserved. BC Society #S0082710.</p>
          <div className="flex items-center gap-6">
            <span>Terms of Service</span>
            <span>Privacy & Dignity Policy</span>
            <span className="text-forest-700 font-bold">Powered by CarePortal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
