import React from 'react';
import Hero from '../components/Hero';

export default function HomePage({ onOpenRespond, onOpenGiveNeed, onOpenSubmitNeed, onOpenChurchEnroll, onNavigate }) {
  return (
    <>
      <Hero 
        onOpenRespond={() => onOpenRespond(null)}
        onOpenSubmitNeed={onOpenSubmitNeed}
        onOpenChurchEnroll={onOpenChurchEnroll}
        onNavigate={onNavigate}
      />
    </>
  );
}
