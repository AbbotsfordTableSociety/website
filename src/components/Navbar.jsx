import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Shield, ChevronDown, BookOpen, Users, Sparkles, Phone, Mail, ExternalLink } from 'lucide-react';
import AbbyTableLogo from './AbbyTableLogo';

export default function Navbar({ onOpenRespond, onOpenChurchEnroll, onOpenContact, currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

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
    setResourcesDropdownOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
      return;
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "mailto:info@abbotsfordtablesociety.ca";
    }
  };

  const isAboutActive = currentPath === '/about' || currentPath === '/our-mission' || currentPath === '/our-story' || currentPath === '/our-team' || currentPath === '/governance';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/85 backdrop-blur-md border-b-2 border-[#d8cba9] ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-3.5'}`}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        
        {/* Prominent Logo & Organization Title */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center group text-decoration-none py-1 flex-shrink-0 pr-2 sm:pr-4"
        >
          <AbbyTableLogo isDark={false} className="h-20 sm:h-24 md:h-28" />
        </a>

        {/* Desktop Primary Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans font-bold text-sm tracking-wide text-[#1f2410]">
          
          {/* 1. Home */}
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className={`transition-colors whitespace-nowrap py-1 ${currentPath === '/' ? 'text-[#2b3705] font-extrabold border-b-2 border-[#2b3705] pb-0.5' : 'hover:text-[#2b3705]'}`}
          >
            Home
          </a>

          {/* 2. About (Dropdown: Our Story, Our Team, Governance) */}
          <div 
            className="relative group py-1"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <a 
              href="/about"
              onClick={(e) => handleNavClick(e, '/about')}
              className={`transition-colors whitespace-nowrap flex items-center gap-1.5 ${ isAboutActive ? 'text-[#2b3705] font-extrabold border-b-2 border-[#2b3705] pb-0.5' : 'hover:text-[#2b3705]'}`}
            >
              <span>About</span>
              <ChevronDown className="w-4 h-4 text-[#9f7f29] group-hover:text-[#2b3705] transition" />
            </a>

            {/* Dropdown Menu: Our Mission, Our Team, Governance */}
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 pt-1 w-60 z-50 animate-fadeIn">
                <div className="bg-[#FFFFFF] border-2 border-[#d8cba9] rounded-xl shadow-xl py-2.5">
                  <a 
                    href="/our-mission" 
                    onClick={(e) => handleNavClick(e, '/our-mission')}
                    className={`block px-4 py-2.5 text-xs font-bold transition hover:bg-[#faf7ef] hover:text-[#2b3705] ${currentPath === '/our-mission' ? 'text-[#2b3705] bg-[#faf7ef] font-extrabold' : 'text-[#1f2410]'}`}
                  >
                    Our Mission
                  </a>
                  <a 
                    href="/our-team" 
                    onClick={(e) => handleNavClick(e, '/our-team')}
                    className={`block px-4 py-2.5 text-xs font-bold transition hover:bg-[#faf7ef] hover:text-[#2b3705] ${currentPath === '/our-team' ? 'text-[#2b3705] bg-[#faf7ef] font-extrabold' : 'text-[#1f2410]'}`}
                  >
                    Our Team
                  </a>
                  <a 
                    href="/governance" 
                    onClick={(e) => handleNavClick(e, '/governance')}
                    className={`block px-4 py-2.5 text-xs font-bold transition hover:bg-[#faf7ef] hover:text-[#2b3705] ${currentPath === '/governance' ? 'text-[#2b3705] bg-[#faf7ef] font-extrabold' : 'text-[#1f2410]'}`}
                  >
                    Governance
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 3. CarePortal */}
          <a 
            href="/how-it-works" 
            onClick={(e) => handleNavClick(e, '/how-it-works')}
            className={`transition-colors whitespace-nowrap py-1 ${currentPath === '/how-it-works' ? 'text-[#2b3705] font-extrabold border-b-2 border-[#2b3705] pb-0.5' : 'hover:text-[#2b3705]'}`}
          >
            CarePortal
          </a>

          {/* 4. Resources (Dropdown: Neighbour Up, Neighborly Podcast, FAQs) */}
          <div 
            className="relative group py-1"
            onMouseEnter={() => setResourcesDropdownOpen(true)}
            onMouseLeave={() => setResourcesDropdownOpen(false)}
          >
            <button 
              className="transition-colors whitespace-nowrap flex items-center gap-1.5 hover:text-[#2b3705]"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 text-[#9f7f29] group-hover:text-[#2b3705] transition" />
            </button>

            {/* Resources Dropdown */}
            {resourcesDropdownOpen && (
              <div className="absolute top-full left-0 pt-1 w-64 z-50 animate-fadeIn">
                <div className="bg-[#FFFFFF] border-2 border-[#d8cba9] rounded-xl shadow-xl py-2.5">
                  <a 
                    href="https://www.careimpact.ca/neighbour-up" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResourcesDropdownOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#1f2410] hover:bg-[#faf7ef] hover:text-[#2b3705] transition text-decoration-none"
                  >
                    <span>Neighbour Up!</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9f7f29]" />
                  </a>
                  <a 
                    href="https://www.careimpact.ca/neighbourly" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResourcesDropdownOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#1f2410] hover:bg-[#faf7ef] hover:text-[#2b3705] transition text-decoration-none"
                  >
                    <span>Neighbourly Podcast</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9f7f29]" />
                  </a>
                  <a 
                    href="#faqs" 
                    onClick={(e) => { e.preventDefault(); alert('FAQs section coming soon!'); setResourcesDropdownOpen(false); }}
                    className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#1f2410] hover:bg-[#faf7ef] hover:text-[#2b3705] transition"
                  >
                    <span>FAQs</span>
                    <span className="text-[10px] bg-[#e0dbd7] text-[#1f2410] px-2 py-0.5 rounded font-semibold">Soon</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 5. Contact */}
          <a 
            href="#contact" 
            onClick={handleContactClick}
            className="transition-colors whitespace-nowrap py-1 hover:text-[#2b3705]"
          >
            Contact
          </a>

        </nav>

        {/* Action Buttons: Prominent Donate CTA Only */}
        <div className="hidden md:flex items-center flex-shrink-0 pl-2">
          {/* Prominent Working Donate Button -> GiveWise Destination */}
          <a 
            href={givewiseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-xs xl:text-sm px-6 py-2.5 text-decoration-none shadow-md hover:scale-105 transition font-extrabold"
          >
            <Heart className="w-4 h-4 fill-white text-white" />
            <span>DONATE</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2b3705] hover:bg-[#e0dbd7] transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] text-[#1f2410] p-6 border-b-2 border-[#d8cba9] shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4 font-sans text-base font-bold">
            
            {/* Home */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="py-2 border-b border-[#d8cba9] text-[#2b3705]"
            >
              Home
            </a>

            {/* About Accordion */}
            <div className="border-b border-[#d8cba9] pb-2">
              <div className="flex items-center justify-between py-2">
                <a 
                  href="/about" 
                  onClick={(e) => handleNavClick(e, '/about')} 
                  className="font-bold text-[#2b3705]"
                >
                  About (Overview)
                </a>
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="p-1 text-slate-600"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {mobileAboutOpen && (
                <div className="pl-4 pt-2 space-y-2 text-sm font-semibold text-slate-700">
                  <a href="/our-mission" onClick={(e) => handleNavClick(e, '/our-mission')} className="block py-1 hover:text-[#2b3705]">
                    Our Mission
                  </a>
                  <a href="/our-team" onClick={(e) => handleNavClick(e, '/our-team')} className="block py-1 hover:text-[#2b3705]">
                    Our Team
                  </a>
                  <a href="/governance" onClick={(e) => handleNavClick(e, '/governance')} className="block py-1 hover:text-[#2b3705]">
                    Governance
                  </a>
                </div>
              )}
            </div>

            {/* CarePortal */}
            <a 
              href="/how-it-works" 
              onClick={(e) => handleNavClick(e, '/how-it-works')}
              className="py-2 border-b border-[#d8cba9]"
            >
              CarePortal
            </a>

            {/* Resources Accordion */}
            <div className="border-b border-[#d8cba9] pb-2">
              <button 
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full py-2 flex items-center justify-between text-left font-bold"
              >
                <span>Resources</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileResourcesOpen && (
                <div className="pl-4 pt-2 space-y-2 text-sm font-semibold text-slate-700">
                  <a 
                    href="https://www.careimpact.ca/neighbour-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 flex items-center justify-between hover:text-[#2b3705] transition text-decoration-none"
                  >
                    <span>Neighbour Up!</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9f7f29]" />
                  </a>
                  <a 
                    href="https://www.careimpact.ca/neighbourly"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 flex items-center justify-between hover:text-[#2b3705] transition text-decoration-none"
                  >
                    <span>Neighbourly Podcast</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9f7f29]" />
                  </a>
                  <div className="py-1 flex items-center justify-between">
                    <span>FAQs</span>
                    <span className="text-[10px] bg-[#e0dbd7] px-2 py-0.5 rounded">Soon</span>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="py-2 border-b border-[#d8cba9]"
            >
              Contact
            </a>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <a 
                href={givewiseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-gold w-full py-3.5 text-base justify-center font-extrabold shadow text-decoration-none"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>DONATE ONLINE</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
