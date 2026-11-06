import React, { useEffect } from 'react';
import { Target, Heart, ArrowRight, Mail } from 'lucide-react';

export default function OurMissionPage({ onNavigate, onOpenContact }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-[#FAF9F5] min-h-screen">
      
      {/* Full-Width Hero Banner with Nature Trail Image */}
      <div className="relative w-full min-h-[360px] md:min-h-[420px] flex items-center justify-center text-center overflow-hidden border-b border-[#d8cba9]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ats-about-nature-bridge.png" 
            alt="Our Mission" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2410]/95 via-[#2b3705]/85 to-[#1f2410]/75"></div>
        </div>

        <div className="relative z-10 container max-w-4xl mx-auto px-4 py-16 md:py-20 text-white space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F5]/90 text-[#2b3705] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
            <Target className="w-3.5 h-3.5 text-[#9f7f29]" />
            About / Our Mission
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Our Mission
          </h1>

          <p className="text-slate-100 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium drop-shadow">
            Abbotsford Table Society exists to unite churches and believers across our city to meet real needs in practical, relational, and collaborative ways — so that our community experiences the love of Christ through the people of God.
          </p>
        </div>
      </div>

      {/* Our Three Pillars Section Header */}
      <div className="py-12 md:py-16 bg-[#FAF9F5] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9f7f29] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
            Strategic Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#2b3705] tracking-tight">
            Our Three Pillars
          </h2>
        </div>
      </div>

      {/* 100% Full-Width Edge-to-Edge Three Pillars Section */}
      <div className="w-full">
        
        {/* Pillar 1: Connection (Image Left, Tan Content Right) */}
        <div className="w-full bg-[#FAF9F5] border-t-2 border-[#2b3705]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Image (Bleeds Flush to Left Edge) */}
            <div className="lg:col-span-6 h-[340px] sm:h-[420px] lg:h-auto w-full relative overflow-hidden bg-slate-900">
              <img 
                src="/ats-pillar-connection.png" 
                alt="Connection - Puzzle Pieces" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Column: Tan Content Box (Bleeds Flush to Right Edge) */}
            <div className="lg:col-span-6 bg-[#d8cba9] p-8 md:p-14 lg:p-20 flex flex-col justify-center space-y-6 text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#2b3705]">
                Connection
              </h3>
              
              <p className="text-slate-800 text-base md:text-lg font-sans italic leading-relaxed">
                We’re building a network of trusted relationships that bridges sectors and strengthens unity:
              </p>

              <ul className="space-y-4 list-disc pl-6 text-slate-900 text-sm md:text-base font-sans">
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Building Trusted Partnerships</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Fostering strong, mission-aligned relationships across churches, agencies, and community leaders.
                  </div>
                </li>
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Mapping Community Assets</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Identifying services, strengths, and gaps within partner organizations to better understand the landscape.
                  </div>
                </li>
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Assessing Needs and Gaps</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Conducting regular assessments to inspire meaningful, data-informed responses.
                  </div>
                </li>
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Bridging Across Sectors</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Creating safe, neutral spaces for diverse groups to connect, align, and act together.
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Pillar 2: Collaboration (Tan Content Left, Image Right) */}
        <div className="w-full bg-[#FAF9F5] border-t-2 border-[#2b3705]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Tan Content Box */}
            <div className="lg:col-span-6 bg-[#d8cba9] p-8 md:p-14 lg:p-20 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#2b3705]">
                Collaboration
              </h3>
              
              <p className="text-slate-800 text-base md:text-lg font-sans italic leading-relaxed">
                Working together, we tackle community needs with shared purpose. Key strategies include:
              </p>

              <ul className="space-y-4 list-disc pl-6 text-slate-900 text-sm md:text-base font-sans">
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Launching Care Portal</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Leading the rollout of CarePortal—an online platform that connects real-time needs with local responders.
                  </div>
                </li>
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Mobilizing Local Responders</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Activating churches and volunteers to meet urgent, vetted needs in our community.
                  </div>
                </li>
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Hosting Collaborative Gatherings</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Organizing roundtables, workshops, and initiatives that align vision and action across sectors.
                  </div>
                </li>
                <li className="pl-1">
                  <strong className="text-[#2b3705] font-bold">Tracking Progress and Impact</strong>
                  <div className="font-sans text-slate-800 text-sm mt-0.5">
                    Measuring engagement, evaluating outcomes, and reporting back to ensure accountability and learning.
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 h-[340px] sm:h-[420px] lg:h-auto w-full relative overflow-hidden bg-slate-900 order-1 lg:order-2">
              <img 
                src="/ats-pillar-collaboration.png" 
                alt="Collaboration - Handshake" 
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>

        {/* Pillar 3: Catalyzing Change (Image Left, Tan Content Right) */}
        <div className="w-full bg-[#FAF9F5] border-y-2 border-[#2b3705]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 h-[340px] sm:h-[420px] lg:h-auto w-full relative overflow-hidden bg-slate-900">
              <img 
                src="/ats-pillar-catalyzing.png" 
                alt="Catalyzing Change - Water Drop Ripples" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Column: Tan Content Box */}
            <div className="lg:col-span-6 bg-[#d8cba9] p-8 md:p-14 lg:p-20 flex flex-col justify-center space-y-6 text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#2b3705]">
                Catalyzing Change
              </h3>
              
              <p className="text-slate-800 text-base md:text-lg font-sans italic leading-relaxed">
                Supporting long-term solutions through innovation and leadership:
              </p>

              <ul className="space-y-4 list-disc pl-6 text-slate-900 text-sm md:text-base font-sans">
                <li className="pl-1">
                  <span className="text-slate-900 font-medium">Encouraging new, community-led ministries</span>
                </li>
                <li className="pl-1">
                  <span className="text-slate-900 font-medium">Using an asset-based approach</span>
                </li>
                <li className="pl-1">
                  <span className="text-slate-900 font-medium">Piloting & scaling what works</span>
                </li>
                <li className="pl-1">
                  <span className="text-slate-900 font-medium">Developing local leaders for long-term transformation</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* Contact Box */}
      <div id="contact-info" className="bg-[#FFFFFF] border-t border-[#d8cba9] py-16">
        <div className="container max-w-3xl mx-auto text-center space-y-6 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9f7f29] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
            Get In Touch
          </span>
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#2b3705]">
            Contact Us
          </h3>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Have questions or want to connect with Abbotsford Table Society? Send us an inquiry directly:
          </p>

          <div>
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#FAF9F5] hover:bg-[#d8cba9]/30 border-2 border-[#d8cba9] hover:border-[#2b3705] px-8 py-4 rounded-2xl text-[#2b3705] font-bold text-base shadow-sm transition cursor-pointer"
            >
              <Mail className="w-5 h-5 text-[#9f7f29]" />
              <span>Open Contact Form</span>
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate && onNavigate('/how-it-works')}
              className="btn btn-primary text-sm px-6 py-3"
            >
              Explore CarePortal <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>

            <a 
              href={givewiseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-sm px-6 py-3 text-decoration-none shadow-md"
            >
              <Heart className="w-4 h-4 mr-1.5 fill-white" /> DONATE
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
