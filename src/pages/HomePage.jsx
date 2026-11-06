import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import CarePortalBoard from '../components/CarePortalBoard';
import ThreePillars from '../components/ThreePillars';
import Testimonials from '../components/Testimonials';

export default function HomePage({ onOpenRespond, onOpenGiveNeed, onOpenSubmitNeed, onOpenChurchEnroll, onNavigate }) {
  return (
    <>
      {/* Short, Welcoming Hero Section */}
      <Hero 
        onOpenRespond={() => onOpenRespond(null)}
        onOpenSubmitNeed={onOpenSubmitNeed}
        onOpenChurchEnroll={onOpenChurchEnroll}
        onNavigate={onNavigate}
      />

      {/* Live Impact Ticker */}
      <ImpactStats />

      {/* CarePortal Live Needs Feed */}
      <CarePortalBoard 
        onSelectNeed={(need) => onOpenRespond(need)}
        onOpenGiveNeed={(need) => onOpenGiveNeed(need)}
        onOpenSubmitNeed={onOpenSubmitNeed}
      />

      {/* Three Pillars Overview */}
      <ThreePillars 
        onOpenChurchEnroll={onOpenChurchEnroll}
        onOpenSubmitNeed={onOpenSubmitNeed}
      />

      {/* Community Testimonials */}
      <Testimonials />
    </>
  );
}
