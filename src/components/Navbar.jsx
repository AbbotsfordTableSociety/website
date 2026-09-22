import React, { useState, useEffect } from 'react';
import { Heart, Users, Menu, X, Shield, Sparkles } from 'lucide-react';
import AbbyTableLogo from './AbbyTableLogo';

export default function Navbar({ onOpenRespond, onOpenGive, onOpenChurchEnroll }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAF8F5] shadow-sm border-b border-[#E5DEC9] py-2.5' : 'bg-[#FAF8F5]/95 border-b border-[#E5DEC9]/80 py-3.5 backdrop-blur-md'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center group text-decoration-none py-1">
          <AbbyTableLogo isDark={false} className="h-16 md:h-18" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide text-slate-800">
          <a href="#care-portal" className="hover:text-forest-700 transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            Live Needs Feed
          </a>
          <a href="#how-it-works" className="hover:text-forest-700 transition-colors">
            How CarePortal Works
          </a>
          <a href="#mission" className="hover:text-forest-700 transition-colors">
            Our Mission
          </a>
          <a href="#governance" className="hover:text-forest-700 transition-colors flex items-center gap-1">
            <Shield className="w-4 h-4 text-gold-700" />
            Governance & Board
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenRespond}
            className="btn btn-primary text-sm px-4 py-2"
          >
            <Sparkles className="w-4 h-4" />
            Respond to Need
          </button>
          
          <button 
            onClick={onOpenGive}
            className="btn btn-gold text-sm px-4 py-2"
          >
            <Heart className="w-4 h-4" />
            Give Online
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-[#F4EFE4] transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFBF8] text-slate-800 p-6 border-b border-[#E5DEC9] shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-bold">
            <a 
              href="#care-portal" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E5DEC9] flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              Live Needs Feed
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E5DEC9]"
            >
              How CarePortal Works
            </a>
            <a 
              href="#mission" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E5DEC9]"
            >
              Mission & Strategy
            </a>
            <a 
              href="#governance" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E5DEC9] flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-gold-700" />
              Governance & Board
            </a>

            <div className="flex flex-col gap-3 pt-4">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenRespond(); }}
                className="btn btn-primary w-full py-3"
              >
                <Sparkles className="w-4 h-4" />
                Respond to Need
              </button>
              
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenGive(); }}
                className="btn btn-gold w-full py-3"
              >
                <Heart className="w-4 h-4" />
                Give Online
              </button>

              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenChurchEnroll(); }}
                className="btn btn-outline w-full py-3 text-sm"
              >
                Enroll Your Church / Team
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
