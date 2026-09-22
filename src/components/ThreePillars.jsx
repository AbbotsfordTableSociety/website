import React from 'react';
import { Church, Building2, HeartHandshake, ArrowRight, ShieldCheck, CheckCircle, Users } from 'lucide-react';

export default function ThreePillars({ onOpenChurchEnroll, onOpenSubmitNeed, onOpenGive }) {
  const pillars = [
    {
      id: "churches",
      icon: Church,
      badge: "For Local Faith Communities",
      title: "Churches & Responders",
      subtitle: "Activate your congregation to serve local neighbors in crisis.",
      points: [
        "Receive real-time alerts tailored to your zip code/neighborhood",
        "Form internal Care Teams to respond with items or relational help",
        "Build authentic, dignified connections beyond one-time handouts",
        "100% free for local Abbotsford churches to join"
      ],
      ctaText: "Enroll Your Church Team",
      ctaAction: onOpenChurchEnroll,
      badgeColor: "bg-forest-50 text-forest-700 border-forest-100",
      btnClass: "btn-primary"
    },
    {
      id: "agencies",
      icon: Building2,
      badge: "For Social Workers & Schools",
      title: "Child Welfare & Agencies",
      subtitle: "Connect families in crisis with community support in minutes.",
      points: [
        "Submit vetted needs directly from your caseworker portal",
        "Prevent child apprehension and support family reunification",
        "Rapid turnaround times with local church response teams",
        "Transparent tracking from request submission to fulfillment"
      ],
      ctaText: "Submit a Family Need",
      ctaAction: onOpenSubmitNeed,
      badgeColor: "bg-gold-50 text-gold-700 border-gold-200",
      btnClass: "btn-gold"
    },
    {
      id: "donors",
      icon: HeartHandshake,
      badge: "For Donors & Businesses",
      title: "Champions & Donors",
      subtitle: "Fuel community care and directly fund critical family needs.",
      points: [
        "Fund tangible requests like beds, utility bills, and baby care",
        "100% tax-deductible giving processed securely via GiveWise",
        "Sponsor CarePortal technology operations in Abbotsford",
        "Receive transparent impact updates on lives transformed"
      ],
      ctaText: "Give Online via GiveWise",
      ctaAction: onOpenGive,
      badgeColor: "bg-rose-50 text-rose-700 border-rose-100",
      btnClass: "btn-outline"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FCFBF8] border-t border-[#E5DEC9]">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-50 px-3.5 py-1 rounded border border-forest-100">
            How CarePortal Works in Abbotsford
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Connecting Three Pillars of Community Care
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed font-normal">
            CarePortal is not just a technology app—it's a relational bridge that turns local desire into immediate action for children and families in crisis.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="bg-[#FAF8F5] border-2 border-[#E5DEC9] rounded-2xl p-8 flex flex-col justify-between hover:border-forest-700 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Badge */}
                  <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6 border ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-forest-700 text-white flex items-center justify-center shadow flex-shrink-0">
                      <Icon className="w-7 h-7 text-gold-200" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm mb-6 leading-relaxed">
                    {pillar.subtitle}
                  </p>

                  {/* Points */}
                  <ul className="space-y-3 mb-8">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-slate-800">
                        <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={pillar.ctaAction}
                  className={`btn ${pillar.btnClass} w-full py-3 text-sm justify-center font-bold`}
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
