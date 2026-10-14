import React, { useState, useEffect } from 'react';
import { PORTFOLIO_SLIDES, PortfolioSlide } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { InteractivePortfolioView } from './components/InteractivePortfolioView';
import { BehanceDeckView } from './components/BehanceDeckView';
import { SlideDetailModal } from './components/SlideDetailModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'interactive' | 'deck'>('interactive');
  const [selectedSlide, setSelectedSlide] = useState<PortfolioSlide | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Keyboard navigation for slide modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSlide(null);
        setIsContactOpen(false);
      } else if (selectedSlide && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        const currentIndex = PORTFOLIO_SLIDES.findIndex((s) => s.id === selectedSlide.id);
        if (e.key === 'ArrowRight' && currentIndex < PORTFOLIO_SLIDES.length - 1) {
          setSelectedSlide(PORTFOLIO_SLIDES[currentIndex + 1]);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setSelectedSlide(PORTFOLIO_SLIDES[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSlide]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#090a0f] text-[#e2e8f0]">
      {/* Top Navbar with Mode Switcher */}
      <Navbar
        currentView={currentView}
        onChangeView={setCurrentView}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'interactive' ? (
          <InteractivePortfolioView
            onSelectSlide={setSelectedSlide}
            onOpenContact={() => setIsContactOpen(true)}
            onSwitchToDeck={() => {
              setCurrentView('deck');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <BehanceDeckView
            onSelectSlide={setSelectedSlide}
            onOpenContact={() => setIsContactOpen(true)}
            onSwitchToInteractive={() => {
              setCurrentView('interactive');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Deep-Dive Inspection Lightbox for any Slide */}
      <SlideDetailModal
        slide={selectedSlide}
        allSlides={PORTFOLIO_SLIDES}
        onClose={() => setSelectedSlide(null)}
        onSelectSlide={setSelectedSlide}
      />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
