import React, { useState, useEffect } from 'react';
import { Users, ShieldCheck, Heart, Mail, ArrowRight, Sparkles, Handshake, CheckCircle2, User, X } from 'lucide-react';

export default function OurTeamPage({ onNavigate, onOpenContact }) {
  const givewiseUrl = "https://fund.givewise.ca/gift/charity/NQD00331";
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = [
    {
      name: "Warren Janzen",
      role: "Board Member",
      title: "Strategic Leadership & Stewardship",
      image: "/team-warren-janzen.jpg",
      bio: "Warren brings over three decades of global non-profit and ministry leadership experience, including serving as International Director of SEND International and founding WJJ Consulting. Holding a Master’s in Christian Leadership from Trinity Western University, he is passionate about equipping leaders and uniting local churches for community transformation in Abbotsford."
    },
    {
      name: "Tammy Kyte",
      role: "Board Member",
      title: "Community Partnerships",
      image: "/team-tammy-kyte.png",
      bio: "Tammy is the Co-Founder and Executive Director of GiveWise Foundation Canada, based in Abbotsford. After 15 years running a local home-building business with her husband Dan, she transitioned full-time into tech-driven philanthropy and collaborative community initiatives that empower generosity and care for vulnerable neighbours."
    },
    {
      name: "Sandy Driediger",
      role: "Board Member",
      title: "Governance & Ethics",
      image: "/team-sandy-driediger.png",
      bio: "Deeply rooted in the Abbotsford agricultural and faith community, Sandy brings a heart for faithful stewardship, family restoration, and collaborative service. Alongside her family’s multi-generation farming heritage in Abbotsford, she is dedicated to building bridges of practical care across local churches and agencies."
    },
    {
      name: "Cam Broad",
      role: "Board Member",
      title: "Church Relations",
      image: "/team-cam-broad.webp",
      bio: "Cam is a Registered Clinical Counsellor (RCC), life coach with Doing Family Right in Abbotsford, and credentialed minister with over 20 years of pastoral ministry experience. He is deeply committed to family wholeness, relational healing, and mobilizing local congregations to walk alongside families in crisis."
    },
    {
      name: "Wes Friesen",
      role: "Board Member",
      title: "Operations & Finance",
      image: null,
      bio: "Wes is a longtime Abbotsford business and community leader with deep experience in organizational operations, financial stewardship, and servant leadership. He helps guide the operational foundation and accountability of the Abbotsford Table Society as it serves children and families across our city."
    },
    {
      name: "Michelle Stuart",
      role: "Board Member",
      title: "Community Engagement",
      image: null,
      bio: "Michelle is passionate about grass-roots community engagement, advocating for vulnerable families, and connecting compassionate neighbours with practical opportunities to serve. As a Board Member, she helps foster collaborative relationships between local volunteers, churches, and frontline community partners."
    },
  ];

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
            About / Our Team
          </span>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#2b3705] tracking-tight leading-tight">
            Our Team & Leadership
          </h1>

          <p className="text-[#1f2410] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            Abbotsford Table Society is led by a dedicated volunteer Board of Directors, church champions, and community responders united to serve vulnerable families.
          </p>
        </div>
      </div>

      {/* Main Team Content */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 space-y-16">

          {/* Board of Directors Grid */}
          <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9f7f29] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
                Board of Directors
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-[#2b3705]">
                Volunteer Leadership & Governance
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Our volunteer Board of Directors provides strategic oversight, spiritual alignment, financial stewardship, and governance in service of Abbotsford. Click on any board member to read their bio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {boardMembers.map((member, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="bg-[#FAF9F5] border border-[#d8cba9] rounded-2xl p-6 space-y-4 shadow-sm hover:border-[#2b3705] hover:shadow-md transition flex flex-col items-center text-center group cursor-pointer w-full"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover object-top border-2 border-[#9f7f29] shadow-md bg-white group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2b3705] to-[#1f2410] text-[#d8cba9] border-2 border-[#d8cba9] flex flex-col items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <User className="w-9 h-9 text-[#d8cba9]/80 mb-0.5" />
                      <span className="text-[11px] font-heading font-extrabold tracking-widest uppercase text-[#d8cba9]/90">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-[#2b3705] transition">{member.name}</h3>
                    <span className="text-xs font-bold text-[#9f7f29] block mt-0.5">{member.role}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-[#d8cba9] pt-3 w-full">
                    {member.title}
                  </p>
                  <span className="text-[11px] font-bold text-[#2b3705] group-hover:text-[#9f7f29] underline">
                    Read Short Bio →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Community Responders & Church Champions */}
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#9f7f29] text-white flex items-center justify-center shadow">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900">Church Care Champions</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Local pastors and church ministry leaders who mobilize volunteer care teams across Abbotsford neighborhoods to respond to vetted CarePortal requests.
                </p>
              </div>

              <div className="pt-4 border-t border-[#d8cba9] text-xs font-bold text-[#2b3705]">
                Uniting local congregations across denominational lines.
              </div>
            </div>

            <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e2703] text-white flex items-center justify-center shadow">
                  <Users className="w-6 h-6 text-[#d8cba9]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900">Partner Agencies</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Partner agencies and frontline caseworkers who identify real, immediate needs of vulnerable children and families in crisis.
                </p>
              </div>

              <div className="pt-4 border-t border-[#d8cba9] text-xs font-bold text-[#9f7f29]">
                Ensuring every need is verified and respectfully met.
              </div>
            </div>

          </div>

          {/* Join The Team Banner */}
          <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2b3705] bg-[#faf7ef] px-3.5 py-1 rounded-full border border-[#d8cba9]">
              Get Involved
            </span>
            <h3 className="text-3xl font-heading font-extrabold text-[#2b3705]">
              Want to Join the Abbotsford Table Team?
            </h3>
            <p className="text-slate-700 text-base max-w-2xl mx-auto leading-relaxed">
              Whether you want to serve on a local church care team, become a Point of Contact, or support our operations, we welcome your partnership.
            </p>

            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="inline-flex items-center gap-2 bg-[#FAF9F5] hover:bg-[#d8cba9]/30 border-2 border-[#d8cba9] hover:border-[#2b3705] px-7 py-3.5 rounded-xl text-[#2b3705] font-bold text-sm transition cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#9f7f29]" />
              <span>Open Contact Form</span>
            </button>
          </div>

        </div>
      </section>

      {/* Footer Call to Action */}
      <div className="bg-[#FFFFFF] border-t border-[#d8cba9] py-16 text-center">
        <div className="container max-w-3xl mx-auto space-y-6 px-4">
          <a 
            href={givewiseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-sm px-8 py-3.5 text-decoration-none shadow-md"
          >
            <Heart className="w-4 h-4 mr-1.5 fill-white" /> DONATE
          </a>
        </div>
      </div>

      {/* Board Member Short Bio Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#2b3705] text-white p-6 flex items-center justify-between border-b-2 border-[#d8cba9]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d8cba9] block">
                  {selectedMember.role} • {selectedMember.title}
                </span>
                <h3 className="text-xl font-heading font-extrabold text-white mt-0.5">
                  {selectedMember.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#1f2410] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-[#FAF9F5] space-y-5 text-center">
              {selectedMember.image ? (
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-28 h-28 rounded-full object-cover object-top border-2 border-[#9f7f29] shadow-lg mx-auto bg-white"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#2b3705] to-[#1f2410] text-[#d8cba9] border-2 border-[#d8cba9] flex flex-col items-center justify-center shadow-lg mx-auto">
                  <User className="w-10 h-10 text-[#d8cba9]/80 mb-0.5" />
                  <span className="text-xs font-heading font-extrabold tracking-widest uppercase text-[#d8cba9]/90">
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}

              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans text-left bg-white p-5 rounded-2xl border border-[#d8cba9] shadow-sm">
                {selectedMember.bio}
              </p>

              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="btn btn-primary text-xs px-5 py-2.5 rounded-xl font-bold"
                >
                  Close Bio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
