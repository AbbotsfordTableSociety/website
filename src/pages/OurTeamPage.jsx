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
    <div className="bg-[#FAF9F5] min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-[#FAF9F5] border-b border-[#d8cba9] py-14">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faf7ef] text-[#2b3705] border border-[#d8cba9] text-xs font-bold uppercase tracking-wider">
            About / Our Team
          </span>

          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#2b3705]">
            Our Team & Leadership
          </h1>

          <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto">
            Led by a dedicated volunteer Board of Directors, church champions, and community responders.
          </p>
        </div>
      </div>

      {/* Main Team Content */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 space-y-12">

          {/* Board of Directors Grid */}
          <div className="bg-white border-2 border-[#d8cba9] rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-heading font-extrabold text-[#2b3705]">
                Volunteer Board of Directors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Click on any board member to read their short bio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {boardMembers.map((member, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="p-6 bg-[#FAF9F5] border border-[#d8cba9] rounded-2xl flex flex-col items-center text-center space-y-3 shadow-sm hover:border-[#2b3705] hover:shadow-md transition group cursor-pointer w-full"
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
                    <h4 className="font-heading font-bold text-lg text-[#2b3705]">{member.name}</h4>
                    <span className="text-[11px] font-bold text-[#9f7f29] uppercase tracking-wider">{member.role}</span>
                  </div>
                  <p className="text-xs text-slate-600 border-t border-[#d8cba9] pt-2.5 w-full">
                    {member.title}
                  </p>
                  <span className="text-[11px] font-bold text-[#2b3705] group-hover:text-[#9f7f29] underline">
                    Read Short Bio →
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

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
