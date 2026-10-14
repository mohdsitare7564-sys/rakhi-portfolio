import React, { useState, useEffect } from 'react';
import { PORTFOLIO_METADATA } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  LayoutGrid,
  Flame,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';

interface NavbarProps {
  currentView: 'interactive' | 'deck';
  onChangeView: (view: 'interactive' | 'deck') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'interactive') {
      onChangeView('interactive');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 py-3 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12141e]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-2.5 px-4 sm:px-6'
          : 'bg-[#12141e]/70 backdrop-blur-md border border-white/8 py-3 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between gap-4">
          {/* Brand & Moniker */}
          <div
            onClick={() => {
              onChangeView('interactive');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ea580c] via-[#f97316] to-[#fb923c] p-[1.5px] shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                <div className="w-full h-full rounded-[10px] bg-[#0c0d14] flex items-center justify-center font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-mono tracking-wider">
                  R
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0c0d14] animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-display group-hover:text-orange-400 transition-colors">
                  RAKHI
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-950/80 border border-orange-500/30 px-2 py-0.5 rounded-full font-mono">
                  B2B SaaS
                </span>
              </div>
              <div className="text-[11px] text-stone-400 hidden sm:flex items-center gap-1.5 font-medium">
                <span>Senior Content Writer</span>
                <span className="text-stone-600">·</span>
                <span className="text-emerald-400 text-[10px]">Open for Retainers</span>
              </div>
            </div>
          </div>

          {/* Desktop Center Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-xs text-stone-300">
            <button
              onClick={() => scrollTo('about')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('frameworks')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition font-medium"
            >
              Frameworks
            </button>
            <button
              onClick={() => scrollTo('real-works')}
              className="px-3 py-1.5 rounded-lg text-orange-400 hover:text-orange-300 hover:bg-orange-950/40 font-semibold transition flex items-center gap-1"
            >
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>Live Works</span>
            </button>
            <button
              onClick={() => scrollTo('articles-reader')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition font-medium"
            >
              Articles
            </button>
            <button
              onClick={() => scrollTo('clients')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition font-medium"
            >
              Clients
            </button>
            <button
              onClick={() => {
                if (currentView === 'deck') {
                  onChangeView('interactive');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  onChangeView('deck');
                }
              }}
              className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition font-medium ${
                currentView === 'deck'
                  ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white border-transparent shadow-xs'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border-white/10'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-orange-400" />
              <span>Behance Deck</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                currentView === 'deck' ? 'bg-black/30 text-white' : 'bg-stone-800 text-stone-400'
              }`}>
                19
              </span>
            </button>
          </div>

          {/* Right Actions & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* LinkedIn Profile */}
            <a
              href={PORTFOLIO_METADATA.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-stone-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
              <span className="text-[11px] font-medium">LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-stone-500" />
            </a>

            {/* Primary Hire CTA */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] bg-size-200 hover:bg-pos-100 text-white text-xs font-bold rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.35)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)] transition-all transform hover:scale-[1.03]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Rakhi</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-stone-300 hover:text-white md:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3 space-y-3">
            <button
              onClick={() => {
                if (currentView === 'deck') {
                  onChangeView('interactive');
                } else {
                  onChangeView('deck');
                }
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-xl border transition ${
                currentView === 'deck'
                  ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white border-transparent'
                  : 'bg-white/5 border-white/10 text-stone-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{currentView === 'deck' ? 'Interactive View' : '19-Slide Behance Deck'}</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-300 pt-1">
              <button
                onClick={() => scrollTo('about')}
                className="p-2 text-left rounded-lg bg-white/5 hover:bg-white/10"
              >
                About Rakhi
              </button>
              <button
                onClick={() => scrollTo('frameworks')}
                className="p-2 text-left rounded-lg bg-white/5 hover:bg-white/10"
              >
                S.A.V.E & 3P
              </button>
              <button
                onClick={() => scrollTo('real-works')}
                className="p-2 text-left rounded-lg bg-orange-950/40 text-orange-400 font-semibold"
              >
                Live Works (KGS)
              </button>
              <button
                onClick={() => scrollTo('articles-reader')}
                className="p-2 text-left rounded-lg bg-white/5 hover:bg-white/10"
              >
                Technical Essays
              </button>
              <button
                onClick={() => scrollTo('clients')}
                className="p-2 text-left rounded-lg bg-white/5 hover:bg-white/10"
              >
                Client Ecosystem
              </button>
              <a
                href={PORTFOLIO_METADATA.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-between rounded-lg bg-white/5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
