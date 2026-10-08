import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Shield, Sparkles, ChevronDown } from 'lucide-react';
import AbbyTableLogo from './AbbyTableLogo';

export default function Navbar({ onOpenRespond, onOpenChurchEnroll, currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    onNavigate(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAF8F5] shadow-sm border-b border-[#E5DEC9] py-2' : 'bg-[#FAF8F5]/95 border-b border-[#E5DEC9]/80 py-3 backdrop-blur-md'}`}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        
        {/* Official Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center group text-decoration-none py-1 flex-shrink-0 pr-4"
        >
          <AbbyTableLogo isDark={false} className="h-14 md:h-16" />
        </a>

        {/* Desktop Nav Links - Clean & Natural */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-bold tracking-wide text-slate-800">
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className={`transition-colors whitespace-nowrap ${currentPath === '/' ? 'text-forest-700 font-extrabold border-b-2 border-forest-700 pb-0.5' : 'hover:text-forest-700'}`}
          >
            Home
          </a>

          {/* About Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button 
              onClick={(e) => handleNavClick(e, '/about')}
              className={`transition-colors whitespace-nowrap flex items-center gap-1.5 py-1 ${ (currentPath === '/about' || currentPath === '/our-mission') ? 'text-forest-700 font-extrabold border-b-2 border-forest-700 pb-0.5' : 'hover:text-forest-700'}`}
            >
              <span>About</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-forest-700 transition" />
            </button>

            {/* Dropdown Menu */}
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-[#FCFBF8] border-2 border-[#E5DEC9] rounded-xl shadow-xl py-2 z-50 animate-fadeIn">
                <a 
                  href="/about" 
                  onClick={(e) => handleNavClick(e, '/about')}
                  className={`block px-4 py-2.5 text-xs font-bold transition hover:bg-forest-50 hover:text-forest-800 ${currentPath === '/about' ? 'text-forest-700 bg-forest-50 font-extrabold' : 'text-slate-800'}`}
                >
                  Our Story & Objectives
                </a>
                <a 
                  href="/our-mission" 
                  onClick={(e) => handleNavClick(e, '/our-mission')}
                  className={`block px-4 py-2.5 text-xs font-bold transition hover:bg-forest-50 hover:text-forest-800 ${currentPath === '/our-mission' ? 'text-forest-700 bg-forest-50 font-extrabold' : 'text-slate-800'}`}
                >
                  Our Mission & Three Pillars
                </a>
              </div>
            )}
          </div>

          <a 
            href="/how-it-works" 
            onClick={(e) => handleNavClick(e, '/how-it-works')}
            className={`transition-colors whitespace-nowrap ${currentPath === '/how-it-works' ? 'text-forest-700 font-extrabold border-b-2 border-forest-700 pb-0.5' : 'hover:text-forest-700'}`}
          >
            How CarePortal Works
          </a>

          <a 
            href="/governance" 
            onClick={(e) => handleNavClick(e, '/governance')}
            className={`transition-colors whitespace-nowrap flex items-center gap-1 ${currentPath === '/governance' ? 'text-forest-700 font-extrabold border-b-2 border-forest-700 pb-0.5' : 'hover:text-forest-700'}`}
          >
            <Shield className="w-3.5 h-3.5 text-gold-700" />
            Governance
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0 pl-4">
          <button 
            onClick={onOpenRespond}
            className="btn btn-primary text-xs xl:text-sm px-3.5 xl:px-4 py-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Respond to Need
          </button>
          
          <a 
            href={givewiseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-xs xl:text-sm px-3.5 xl:px-4 py-2 text-decoration-none"
          >
            <Heart className="w-3.5 h-3.5" />
            Give Online
          </a>
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
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="py-2 border-b border-[#E5DEC9]"
            >
              Home Page
            </a>
            <a 
              href="/about" 
              onClick={(e) => handleNavClick(e, '/about')}
              className="py-2 border-b border-[#E5DEC9]"
            >
              About Us
            </a>
            <a 
              href="/our-mission" 
              onClick={(e) => handleNavClick(e, '/our-mission')}
              className="py-2 border-b border-[#E5DEC9]"
            >
              Our Mission & Three Pillars
            </a>
            <a 
              href="/how-it-works" 
              onClick={(e) => handleNavClick(e, '/how-it-works')}
              className="py-2 border-b border-[#E5DEC9]"
            >
              How CarePortal Works
            </a>
            <a 
              href="/governance" 
              onClick={(e) => handleNavClick(e, '/governance')}
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
              
              <a 
                href={givewiseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-gold w-full py-3 justify-center text-decoration-none"
              >
                <Heart className="w-4 h-4" />
                Give Online
              </a>

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
