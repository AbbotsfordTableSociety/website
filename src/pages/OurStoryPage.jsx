import React, { useEffect } from 'react';
import { Sparkles, Users, Handshake, Zap, ArrowRight, Heart, Target, CheckCircle2 } from 'lucide-react';

export default function OurStoryPage({ onNavigate }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-[#FAF9F5] min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-[#FAF9F5] border-b border-[#d8cba9] py-14 md:py-20">
        <div className="container text-center max-w-4xl mx-auto space-y-4 px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faf7ef] text-[#2b3705] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#9f7f29]" />
            About / Our Story
          </span>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#2b3705] tracking-tight leading-tight">
            Our Story & Three Pillars
          </h1>

          <p className="text-[#1f2410] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            Discover how Abbotsford Table Society was born and how our core pillars — Connection, Collaboration, and Catalyzing Change — guide our work across the city.
          </p>
        </div>
      </div>

      {/* Main Story & Pillars Breakdown */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 space-y-16">

          {/* Section 1: History & Vision */}
          <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
            <h2 className="text-3xl font-heading font-extrabold text-[#2b3705]">
              A Shared Dream for Abbotsford
            </h2>
            
            <div className="p-6 bg-[#FAF9F5] border-l-4 border-[#9f7f29] rounded-r-2xl italic text-lg text-[#2b3705]">
              "For years, God has been stirring in us a vision — one that goes beyond any single church or agency. It’s a dream for a city where the vulnerable are seen, where gaps in care are understood, and where hope and healing flow through the love of Jesus."
            </div>

            <p className="text-slate-800 text-base md:text-lg leading-relaxed">
              In <strong>June 2025</strong>, we launched the <strong>Abbotsford Table Society</strong> to bring this vision to life — fostering holistic care and relational wholeness through connected partnerships. Together, we’re uniting our community in hope and transformation.
            </p>
          </div>

          {/* Section 2: Detailed Pillars Breakdown */}
          <div className="space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9f7f29]">Comprehensive Strategy</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#2b3705]">Our Three Pillars in Action</h2>
            </div>

            {/* Pillar 1: Connection */}
            <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2b3705] text-white flex items-center justify-center shadow">
                  <Users className="w-7 h-7 text-[#d8cba9]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#9f7f29] uppercase tracking-widest">Pillar One</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Connection</h3>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                We’re building a network of trusted relationships that bridges sectors and strengthens community unity:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Building Trusted Partnerships
                  </h4>
                  <p className="text-xs text-slate-600">Fostering strong, mission-aligned relationships across churches, agencies, and community leaders.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Mapping Community Assets
                  </h4>
                  <p className="text-xs text-slate-600">Identifying services, strengths, and gaps within partner organizations to better understand the landscape.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Assessing Needs and Gaps
                  </h4>
                  <p className="text-xs text-slate-600">Conducting regular assessments to inspire meaningful, data-informed responses.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Bridging Across Sectors
                  </h4>
                  <p className="text-xs text-slate-600">Creating safe, neutral spaces for diverse groups to connect, align, and act together.</p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Collaboration */}
            <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#9f7f29] text-white flex items-center justify-center shadow">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#2b3705] uppercase tracking-widest">Pillar Two</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Collaboration</h3>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Working together, we tackle community needs with shared purpose. Key strategies include:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#9f7f29] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2b3705]" /> Launching CarePortal
                  </h4>
                  <p className="text-xs text-slate-600">Leading the rollout of CarePortal—an online platform connecting real-time needs with local church responders.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#9f7f29] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2b3705]" /> Mobilizing Local Responders
                  </h4>
                  <p className="text-xs text-slate-600">Activating churches and volunteers to meet urgent, vetted needs in our community.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#9f7f29] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2b3705]" /> Hosting Gatherings
                  </h4>
                  <p className="text-xs text-slate-600">Organizing roundtables, workshops, and initiatives that align vision and action across sectors.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#9f7f29] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2b3705]" /> Tracking Progress & Impact
                  </h4>
                  <p className="text-xs text-slate-600">Measuring engagement, evaluating outcomes, and reporting back to ensure accountability.</p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Catalyzing Change */}
            <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1e2703] text-white flex items-center justify-center shadow">
                  <Zap className="w-7 h-7 text-[#d8cba9]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#9f7f29] uppercase tracking-widest">Pillar Three</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Catalyzing Change</h3>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Supporting long-term solutions through innovation, leadership development, and systemic support:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Community-Led Ministries
                  </h4>
                  <p className="text-xs text-slate-600">Encouraging and empowering new, community-led care initiatives.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Asset-Based Approach
                  </h4>
                  <p className="text-xs text-slate-600">Building on existing strengths, skills, and resources already present in Abbotsford.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Piloting & Scaling
                  </h4>
                  <p className="text-xs text-slate-600">Testing innovative care models locally and scaling what demonstrates real fruit.</p>
                </div>
                <div className="p-4 bg-[#FAF9F5] border border-[#d8cba9] rounded-xl space-y-1">
                  <h4 className="font-bold text-[#2b3705] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9f7f29]" /> Developing Leaders
                  </h4>
                  <p className="text-xs text-slate-600">Investing in local champions for sustainable, generational transformation.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Call to Action */}
      <div className="bg-[#FFFFFF] border-t border-[#d8cba9] py-16">
        <div className="container max-w-3xl mx-auto text-center space-y-6 px-4">
          <h3 className="text-3xl font-heading font-extrabold text-[#2b3705]">
            Be Part of Our Story
          </h3>
          <p className="text-slate-700 text-sm md:text-base">
            Whether you are a church leader, agency caseworker, business owner, or neighbor, there is a place for you at the table.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
