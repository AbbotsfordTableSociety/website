import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import CarePortalBoard from '../components/CarePortalBoard';
import ThreePillars from '../components/ThreePillars';
import MissionGovernance from '../components/MissionGovernance';
import Testimonials from '../components/Testimonials';

export default function HomePage({ onOpenRespond, onOpenGiveNeed, onOpenSubmitNeed, onOpenChurchEnroll, onNavigate }) {
  return (
    <>
      {/* Hero Section */}
      <Hero 
        onOpenRespond={() => onOpenRespond(null)}
        onOpenSubmitNeed={onOpenSubmitNeed}
        onOpenChurchEnroll={onOpenChurchEnroll}
      />

      {/* Live Impact Ticker */}
      <ImpactStats />

      {/* Core CarePortal Live Needs Feed */}
      <CarePortalBoard 
        onSelectNeed={(need) => onOpenRespond(need)}
        onOpenGiveNeed={(need) => onOpenGiveNeed(need)}
        onOpenSubmitNeed={onOpenSubmitNeed}
      />

      {/* How It Works (3 Pillars) */}
      <ThreePillars 
        onOpenChurchEnroll={onOpenChurchEnroll}
        onOpenSubmitNeed={onOpenSubmitNeed}
      />

      {/* Mission & Governance Preview */}
      <MissionGovernance />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
