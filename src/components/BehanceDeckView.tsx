import React, { useState } from 'react';
import { PORTFOLIO_SLIDES, PORTFOLIO_METADATA, PortfolioSlide } from '../data/portfolioData';
import {
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  ZoomIn,
  Info,
  ChevronUp,
  ChevronDown,
  Check,
  ExternalLink,
  Linkedin,
  LayoutGrid,
  Square,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface BehanceDeckViewProps {
  onSelectSlide: (slide: PortfolioSlide) => void;
  onOpenContact?: () => void;
  onSwitchToInteractive?: () => void;
}

export const BehanceDeckView: React.FC<BehanceDeckViewProps> = ({ 
  onSelectSlide, 
  onOpenContact,
  onSwitchToInteractive 
}) => {
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [appreciated, setAppreciated] = useState<boolean>(false);
  const [appreciationCount, setAppreciationCount] = useState<number>(1840);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [layoutMode, setLayoutMode] = useState<'stream' | 'grid'>('stream');

  const handleAppreciate = () => {
    if (!appreciated) {
      setAppreciated(true);
      setAppreciationCount((c) => c + 1);
    } else {
      setAppreciated(false);
      setAppreciationCount((c) => c - 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const categories = [
    { id: 'all', label: 'All 19 Boards' },
    { id: 'framework', label: 'Strategy & Frameworks' },
    { id: 'case-study', label: 'Featured Case Studies' },
    { id: 'creative', label: 'Social, Video & PR' },
    { id: 'about', label: 'Philosophy & Story' },
  ];

  const filteredSlides = PORTFOLIO_SLIDES.filter((slide) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'framework') return slide.category === 'framework' || slide.category === 'services';
    if (selectedCategory === 'case-study') return slide.category === 'case-study' || slide.category === 'clients';
    if (selectedCategory === 'creative') return slide.category === 'video' || slide.category === 'pr' || slide.category === 'blog';
    if (selectedCategory === 'about') return slide.category === 'about' || slide.category === 'cover' || slide.category === 'resume' || slide.category === 'contact';
    return true;
  });

  return (
    <div className="w-full bg-[#0a0b12] text-[#e0e0e0] min-h-screen pb-32">
      {/* Executive Project Top Curator Bar */}
      <div className="bg-[#12141f]/95 border-b border-white/8 sticky top-16 z-30 shadow-2xl backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Creator Profile snippet */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 p-[1.5px] shadow-md">
              <div className="w-full h-full rounded-[10px] bg-[#0c0d14] flex items-center justify-center font-bold text-sm text-orange-400 font-mono">
                R
              </div>
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-display">
                <span>Rakhi — Content Writer Portfolio 2026</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400">
                  Behance Curated
                </span>
              </h1>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <span className="text-stone-300 font-medium">{PORTFOLIO_METADATA.author}</span>
                <span>·</span>
                <span className="text-orange-400/90 font-mono">19 High-Resolution Boards</span>
              </div>
            </div>
          </div>

          {/* Metrics & Interaction Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAppreciate}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                appreciated
                  ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-[0_0_15px_rgba(234,88,12,0.5)]'
                  : 'bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10'
              }`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{appreciated ? 'Endorsed' : 'Endorse'}</span>
              <span className="font-mono text-[11px] opacity-80">{appreciationCount}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 rounded-xl text-xs font-medium transition"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <div className="hidden sm:flex items-center gap-3 text-xs text-stone-400 pl-2 border-l border-white/10">
              <div className="flex items-center gap-1" title="Views">
                <Eye className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-mono">24.2k</span>
              </div>
              <div className="flex items-center gap-1" title="Comments">
                <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-mono">112</span>
              </div>
            </div>

            {onSwitchToInteractive && (
              <button
                onClick={onSwitchToInteractive}
                className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-950/70 hover:bg-orange-900/80 border border-orange-500/40 text-orange-300 text-xs font-bold transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Interactive Web</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* Controls Bar: Categories & Layout Mode */}
        <div className="p-4 rounded-2xl bg-[#12141f] border border-white/8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-xs'
                      : 'bg-white/4 text-stone-400 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-mono hidden sm:inline">View Mode:</span>
            <div className="flex items-center p-1 bg-[#090a10] rounded-xl border border-white/8">
              <button
                onClick={() => setLayoutMode('stream')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  layoutMode === 'stream' ? 'bg-[#ea580c] text-white' : 'text-stone-400 hover:text-white'
                }`}
                title="Continuous Stream View"
              >
                <Square className="w-3.5 h-3.5" />
                <span className="text-[11px]">Stream</span>
              </button>

              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  layoutMode === 'grid' ? 'bg-[#ea580c] text-white' : 'text-stone-400 hover:text-white'
                }`}
                title="Grid Gallery View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[11px]">Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Presentation Stream View */}
        {layoutMode === 'stream' && (
          <div className="space-y-6 sm:space-y-8">
            {filteredSlides.map((slide, index) => (
              <div
                key={slide.id}
                id={`slide-${slide.id}`}
                className="group relative bg-[#12141f] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/8 shadow-2xl transition hover:border-orange-500/40"
              >
                {/* Slide Top Bar */}
                <div className="px-5 py-3.5 bg-[#0e1019] border-b border-white/8 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white font-mono font-bold text-[11px]">
                      BOARD {String(slide.id).padStart(2, '0')} / {PORTFOLIO_SLIDES.length}
                    </span>
                    <span className="font-bold text-white text-sm sm:text-base font-display">
                      {slide.title}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectSlide(slide)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-orange-500 hover:text-white text-stone-300 border border-white/8 transition text-xs font-semibold group-hover:border-orange-500/40"
                  >
                    <Info className="w-3.5 h-3.5 text-orange-400 group-hover:text-white" />
                    <span>Inspect Copy & Strategy</span>
                  </button>
                </div>

                {/* The Slide Image */}
                <div 
                  className="relative cursor-pointer overflow-hidden bg-[#0a0b12] flex items-center justify-center"
                  onClick={() => onSelectSlide(slide)}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                  />

                  {/* Hover Overlay Prompt */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-5 py-2.5 rounded-2xl bg-black/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/20 shadow-2xl">
                      <ZoomIn className="w-4 h-4 text-orange-400" />
                      <span>Click to Zoom & Read Word-For-Word Copywriting</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Context Snippet */}
                <div className="p-4 sm:p-5 bg-[#0e1019] border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <p className="text-stone-300 line-clamp-1 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {slide.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-stone-400 bg-white/5 border border-white/6 px-2 py-0.5 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bento Grid Gallery View */}
        {layoutMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlides.map((slide) => (
              <div
                key={slide.id}
                onClick={() => onSelectSlide(slide)}
                className="group relative bg-[#12141f] rounded-2xl border border-white/8 hover:border-orange-500/40 overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Thumbnail */}
                <div className="relative aspect-16/10 bg-[#090a10] overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141f] via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-orange-400 font-mono text-[10px] font-bold border border-white/10">
                    BOARD {String(slide.id).padStart(2, '0')}
                  </div>

                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-orange-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1 font-display">
                      {slide.title}
                    </h3>
                    <p className="text-[11px] text-stone-400 line-clamp-2 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/8 flex items-center justify-between text-[11px]">
                    <span className="text-orange-400 font-mono uppercase font-semibold">
                      {slide.category}
                    </span>
                    <span className="text-stone-400 group-hover:text-white transition flex items-center gap-1 font-semibold">
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3 text-orange-400" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Credits & Bottom Metadata */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#12141f] border border-white/8 text-center space-y-5 shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-[#f97316] text-white flex items-center justify-center font-bold text-2xl mx-auto shadow-[0_0_30px_rgba(234,88,12,0.5)] font-mono">
            R
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white font-display">Rakhi</h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Senior Tech & B2B SaaS Content Writer | Content Strategist · Remote / Available Globally
            </p>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto italic font-serif leading-relaxed">
            “Clear writing is the downstream byproduct of clear technical thinking.”
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white text-xs font-bold rounded-xl shadow-lg transition hover:scale-103"
            >
              Hire Rakhi
            </button>
            <a
              href={PORTFOLIO_METADATA.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 text-xs font-semibold rounded-xl transition flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scrub Tray */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 p-1.5 bg-[#12141f]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl text-xs">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 hover:bg-white/10 rounded-xl text-stone-300 hover:text-white transition"
          title="Scroll to Top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        <span className="px-2 font-mono text-orange-400 text-xs font-bold">
          {PORTFOLIO_SLIDES.length} Boards
        </span>
        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="p-2 hover:bg-white/10 rounded-xl text-stone-300 hover:text-white transition"
          title="Scroll to Bottom"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
