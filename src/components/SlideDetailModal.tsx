import React, { useState } from 'react';
import { PortfolioSlide } from '../data/portfolioData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ExternalLink,
  Sparkles,
  Command
} from 'lucide-react';

interface SlideDetailModalProps {
  slide: PortfolioSlide | null;
  allSlides: PortfolioSlide[];
  onClose: () => void;
  onSelectSlide: (slide: PortfolioSlide) => void;
}

export const SlideDetailModal: React.FC<SlideDetailModalProps> = ({
  slide,
  allSlides,
  onClose,
  onSelectSlide,
}) => {
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!slide) return null;

  const currentIndex = allSlides.findIndex((s) => s.id === slide.id);
  const prevSlide = currentIndex > 0 ? allSlides[currentIndex - 1] : null;
  const nextSlide = currentIndex < allSlides.length - 1 ? allSlides[currentIndex + 1] : null;

  const handleCopyText = () => {
    let textToCopy = `${slide.title}\n${slide.subtitle || ''}\n\n`;
    if (slide.verbatimContent.heading) {
      textToCopy += `HEADING: ${slide.verbatimContent.heading}\n`;
    }
    if (slide.verbatimContent.quotes?.length) {
      textToCopy += `QUOTES:\n${slide.verbatimContent.quotes.join('\n')}\n\n`;
    }
    slide.verbatimContent.sections.forEach((sec) => {
      textToCopy += `[${sec.title || 'Section'}]\n`;
      if (Array.isArray(sec.content)) {
        textToCopy += sec.content.join('\n') + '\n\n';
      } else {
        textToCopy += sec.content + '\n\n';
      }
    });

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[94vh] bg-[#10121d] text-[#e2e8f0] rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0c0d15]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-bold bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white rounded-lg tracking-wider">
              BOARD {String(slide.id).padStart(2, '0')} / {allSlides.length}
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight font-display">
                {slide.title}
              </h3>
              {slide.subtitle && (
                <p className="text-xs text-stone-400 font-mono mt-0.5">{slide.subtitle}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/5 hover:bg-white/10 text-stone-200 rounded-xl border border-white/10 transition shadow-xs"
              title="Copy complete slide copywriting text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Copy Copywriting</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-white/10 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split Image & Transcript */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[500px]">
          {/* Left: Slide Image with interactive zoom */}
          <div className="lg:col-span-7 bg-[#08090f] p-4 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="w-full h-full flex items-center justify-center overflow-auto max-h-[60vh] lg:max-h-[75vh]">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>

            {/* Zoom Controls Overlay */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs border border-white/10 shadow-lg">
              <button
                onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
                className="p-1 hover:bg-white/20 rounded transition"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-1.5 font-mono font-bold text-orange-400">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                className="p-1 hover:bg-white/20 rounded transition"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1 hover:bg-white/20 rounded transition ml-1 text-stone-400 hover:text-white"
                title="Reset Zoom"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Detailed Verbatim Transcript & Strategy Notes */}
          <div className="lg:col-span-5 p-6 overflow-y-auto bg-[#10121d] space-y-6">
            {/* Slide Category & Tags */}
            <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-white/8 text-xs font-mono">
              <span className="text-stone-400">CATEGORY:</span>
              <span className="px-2.5 py-0.5 bg-orange-950/80 border border-orange-500/30 text-orange-400 font-bold rounded-md">
                {slide.category.toUpperCase()}
              </span>
              {slide.clientName && (
                <span className="px-2.5 py-0.5 bg-white/5 border border-white/8 text-stone-300 font-medium rounded-md">
                  Client: {slide.clientName}
                </span>
              )}
            </div>

            {/* Description & Key Takeaways */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                Overview & Strategic Intent
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                {slide.description}
              </p>
              {slide.keyTakeaway && (
                <div className="mt-3 p-3.5 bg-orange-950/40 border border-orange-500/30 rounded-xl text-xs text-orange-200 leading-relaxed">
                  <span className="font-bold text-orange-400">Strategic Angle: </span>
                  {slide.keyTakeaway}
                </div>
              )}
            </div>

            {/* Quotes if any */}
            {slide.verbatimContent.quotes && slide.verbatimContent.quotes.length > 0 && (
              <div className="p-4 bg-white/4 border-l-4 border-orange-500 rounded-r-xl shadow-xs space-y-1">
                {slide.verbatimContent.quotes.map((q, idx) => (
                  <p key={idx} className="text-xs sm:text-sm italic font-serif text-amber-200 leading-relaxed">
                    “{q}”
                  </p>
                ))}
              </div>
            )}

            {/* Verbatim Sections */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-1">
                <h4 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                  Verbatim Copy & Transcriptions
                </h4>
                <span className="text-[10px] font-mono text-stone-500">Word-for-word</span>
              </div>

              {slide.verbatimContent.sections.map((section, sIdx) => (
                <div key={sIdx} className="p-4 bg-[#0a0b12] rounded-xl border border-white/8 space-y-2">
                  <div className="flex items-center justify-between">
                    {section.title && (
                      <h5 className="text-xs font-bold text-white tracking-wide">
                        {section.title}
                      </h5>
                    )}
                    {section.badge && (
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 bg-orange-950 text-orange-400 rounded border border-orange-500/30">
                        {section.badge}
                      </span>
                    )}
                  </div>

                  {Array.isArray(section.content) ? (
                    <ul className="space-y-1.5 text-xs text-stone-300 leading-relaxed list-disc list-inside">
                      {section.content.map((item, itemIdx) => (
                        <li key={itemIdx} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer: Prev/Next Controls */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/8 bg-[#0c0d15] text-xs">
          <button
            onClick={() => prevSlide && onSelectSlide(prevSlide)}
            disabled={!prevSlide}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition ${
              prevSlide
                ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                : 'text-stone-600 border-transparent cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Board</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-stone-500 font-mono text-[11px]">
            <span>Use Left / Right arrow keys to navigate</span>
          </div>

          <button
            onClick={() => nextSlide && onSelectSlide(nextSlide)}
            disabled={!nextSlide}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition ${
              nextSlide
                ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white border-transparent shadow-xs'
                : 'text-stone-600 border-transparent cursor-not-allowed'
            }`}
          >
            <span>Next Board</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
