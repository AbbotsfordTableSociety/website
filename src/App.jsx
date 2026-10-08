import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import CarePortalBoard from './components/CarePortalBoard';
import ThreePillars from './components/ThreePillars';
import MissionGovernance from './components/MissionGovernance';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import RespondModal from './components/RespondModal';
import SubmitNeedModal from './components/SubmitNeedModal';
import ChurchEnrollModal from './components/ChurchEnrollModal';
import GiveModal from './components/GiveModal';

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // 'respond', 'submit', 'church', 'give'
  const [selectedNeed, setSelectedNeed] = useState(null);

  const handleOpenRespond = (need = null) => {
    setSelectedNeed(need);
    setActiveModal('respond');
  };

  const handleOpenGive = (need = null) => {
    setSelectedNeed(need);
    setActiveModal('give');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSelectedNeed(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Sticky Glass Navbar */}
      <Navbar 
        onOpenRespond={() => handleOpenRespond(null)}
        onOpenGive={() => handleOpenGive(null)}
        onOpenChurchEnroll={() => setActiveModal('church')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onOpenRespond={() => handleOpenRespond(null)}
          onOpenSubmitNeed={() => setActiveModal('submit')}
          onOpenChurchEnroll={() => setActiveModal('church')}
        />

        {/* Live Impact Ticker */}
        <ImpactStats />

        {/* Core CarePortal Live Needs Feed */}
        <CarePortalBoard 
          onSelectNeed={(need) => handleOpenRespond(need)}
          onOpenGiveNeed={(need) => handleOpenGive(need)}
          onOpenSubmitNeed={() => setActiveModal('submit')}
        />

        {/* How It Works (3 Pillars) */}
        <ThreePillars 
          onOpenChurchEnroll={() => setActiveModal('church')}
          onOpenSubmitNeed={() => setActiveModal('submit')}
          onOpenGive={() => handleOpenGive(null)}
        />

        {/* Mission & Governance */}
        <MissionGovernance 
          onOpenGive={() => handleOpenGive(null)}
        />

        {/* Testimonials */}
        <Testimonials />

      </main>

      {/* Footer */}
      <Footer 
        onOpenGive={() => handleOpenGive(null)}
        onOpenRespond={() => handleOpenRespond(null)}
        onOpenSubmitNeed={() => setActiveModal('submit')}
        onOpenChurchEnroll={() => setActiveModal('church')}
      />

      {/* Interactive Modals */}
      {activeModal === 'respond' && (
        <RespondModal 
          need={selectedNeed} 
          onClose={handleCloseModal} 
        />
      )}

      {activeModal === 'submit' && (
        <SubmitNeedModal 
          onClose={handleCloseModal} 
        />
      )}

      {activeModal === 'church' && (
        <ChurchEnrollModal 
          onClose={handleCloseModal} 
        />
      )}

      {activeModal === 'give' && (
        <GiveModal 
          need={selectedNeed}
          onClose={handleCloseModal} 
        />
      )}

    </div>
  );
}
