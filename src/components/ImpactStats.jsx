import React from 'react';
import { Users, Heart, ShieldCheck, DollarSign, Home, Award } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: "142+",
      label: "Abbotsford Families Served",
      desc: "Vetted crisis requests fulfilled locally",
      bgColor: "bg-forest-50",
      iconColor: "text-forest-700",
      borderColor: "border-forest-100"
    },
    {
      id: 2,
      icon: Home,
      value: "18",
      label: "Active Local Churches",
      desc: "Churches with active Care Teams responding",
      bgColor: "bg-gold-50",
      iconColor: "text-gold-700",
      borderColor: "border-gold-200"
    },
    {
      id: 3,
      icon: Heart,
      value: "320+",
      label: "Children Impacted",
      desc: "Prevented foster entry & preserved families",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-700",
      borderColor: "border-rose-100"
    },
    {
      id: 4,
      icon: DollarSign,
      value: "$185,000+",
      label: "Community Care Value",
      desc: "Direct practical aid delivered to neighbors",
      bgColor: "bg-forest-50",
      iconColor: "text-forest-700",
      borderColor: "border-forest-100"
    }
  ];

  return (
    <section className="py-14 bg-[#FCFBF8] border-b border-[#E5DEC9] text-slate-900 relative z-20">
      <div className="container">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-50 px-3.5 py-1 rounded border border-forest-100">
            Real-Time Community Impact
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-slate-900">
            Connecting Compassion with Measurable Local Action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="bg-[#FAF8F5] border border-[#E5DEC9] rounded-xl p-6 hover:border-gold-700 shadow-sm hover:shadow transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${item.bgColor} ${item.borderColor} border flex items-center justify-center ${item.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-white px-2.5 py-1 rounded border border-[#E5DEC9]">
                    Abbotsford, BC
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-serif font-extrabold text-forest-700 mb-1 tracking-tight">
                  {item.value}
                </div>
                <div className="text-base font-bold text-slate-900">
                  {item.label}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
