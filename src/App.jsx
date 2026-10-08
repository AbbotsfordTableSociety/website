import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Dedicated Multi-Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurMissionPage from './pages/OurMissionPage';
import HowItWorksPage from './pages/HowItWorksPage';
import GovernancePage from './pages/GovernancePage';

// Interactive Modals
import RespondModal from './components/RespondModal';
import SubmitNeedModal from './components/SubmitNeedModal';
import ChurchEnrollModal from './components/ChurchEnrollModal';
import GiveModal from './components/GiveModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [activeModal, setActiveModal] = useState(null); // 'respond', 'submit', 'church', 'give'
  const [selectedNeed, setSelectedNeed] = useState(null);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

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
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenRespond={() => handleOpenRespond(null)}
        onOpenChurchEnroll={() => setActiveModal('church')}
      />

      {/* Multi-Page Route Renderer */}
      <main className="flex-grow">
        {currentPath === '/about' ? (
          <AboutPage onNavigate={handleNavigate} />
        ) : currentPath === '/our-mission' ? (
          <OurMissionPage onNavigate={handleNavigate} />
        ) : currentPath === '/how-it-works' ? (
          <HowItWorksPage 
            onOpenChurchEnroll={() => setActiveModal('church')}
            onOpenSubmitNeed={() => setActiveModal('submit')}
          />
        ) : currentPath === '/governance' ? (
          <GovernancePage />
        ) : (
          <HomePage 
            onOpenRespond={handleOpenRespond}
            onOpenGiveNeed={handleOpenGive}
            onOpenSubmitNeed={() => setActiveModal('submit')}
            onOpenChurchEnroll={() => setActiveModal('church')}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
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
