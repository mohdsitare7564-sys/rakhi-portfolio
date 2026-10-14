import React, { useState } from 'react';
import { REAL_WORK_SAMPLES, WorkSample } from '../data/portfolioData';
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Sparkles,
  ExternalLink,
  ZoomIn,
  X,
  TrendingUp,
  CheckCircle2,
  Flame,
  Check,
  Copy,
  Layers,
  ArrowRight
} from 'lucide-react';

export const WorksShowcase: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedCaption, setCopiedCaption] = useState<boolean>(false);

  const categories = [
    'All',
    'Sports & Current Affairs Infographics',
    'Science & Aerospace Explainers',
    'Ecology & Environmental Policy',
    'Geography & Competitive Examination Prep',
    'Interactive Quiz & Viral Engagement'
  ];

  const filteredSamples = activeCategory === 'All'
    ? REAL_WORK_SAMPLES
    : REAL_WORK_SAMPLES.filter(s => s.category === activeCategory);

  const handleCopyCaption = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  return (
    <section id="real-works" className="py-24 border-b border-white/8 relative bg-[#0b0c13] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-orange-400 bg-orange-950/70 border border-orange-500/30">
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                <span>Live Publishing Portfolio</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Client: Khan Global Studies (KGS)</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              VIRAL INFOGRAPHICS & EDUCATIONAL ASSETS
            </h2>
            <p className="text-sm sm:text-base text-stone-400 max-w-2xl leading-relaxed">
              Published social assets written and visual-directed for millions of students, competitive exam aspirants, and curious readers.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-md">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <div className="text-xs font-mono">
              <div className="font-bold text-white">High Organic Retention</div>
              <div className="text-stone-400">Up to 1.8k+ organic likes & 160+ saves per post</div>
            </div>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const shortLabel = cat === 'All'
              ? 'All Works (5)'
              : cat.replace(' Infographics', '').replace(' Explainers', '').replace(' Prep', '');

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-[0_4px_16px_rgba(234,88,12,0.35)]'
                    : 'bg-[#141622] text-stone-400 hover:text-white border border-white/8 hover:border-white/20'
                }`}
              >
                {shortLabel}
              </button>
            );
          })}
        </div>

        {/* Grid of Work Samples */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSelectedSample(sample)}
              className="group relative bg-[#12141f] rounded-2xl border border-white/8 hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_16px_36px_-8px_rgba(234,88,12,0.18)] cursor-pointer hover:-translate-y-1"
            >
              {/* Graphic Card Visual Header */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#0c0d15]">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141f] via-transparent to-black/40 pointer-events-none" />

                {/* Client Badge on top-left */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 bg-black/75 backdrop-blur-md rounded-xl border border-white/10 text-xs font-bold text-white shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span>{sample.client}</span>
                </div>

                {/* Quick inspect button */}
                <div className="absolute top-3 right-3 p-2 bg-black/75 backdrop-blur-md rounded-xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4 text-orange-400" />
                </div>

                {/* Instagram / Social Engagement Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                    <span>{sample.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-300 font-bold">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{sample.stats.comments}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{sample.stats.shares}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{sample.stats.bookmarks}</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400">
                    {sample.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug font-display">
                    {sample.title}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {sample.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/8 space-y-2.5">
                  <div className="p-3 bg-white/4 rounded-xl border border-white/6 text-xs text-stone-300 leading-snug">
                    <span className="font-bold text-orange-400">Strategic Angle: </span>
                    <span>{sample.takeaway}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between pt-1">
                    <div className="flex flex-wrap gap-1">
                      {sample.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-stone-400 border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold text-orange-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Work Sample */}
      {selectedSample && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedSample(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#12141f] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Graphic Preview with dark cinematic backing */}
            <div className="lg:w-1/2 bg-[#090a10] p-4 flex items-center justify-center relative overflow-hidden">
              <img
                src={selectedSample.image}
                alt={selectedSample.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Right Strategic Breakdown & Transcript */}
            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-orange-400 bg-orange-950/70 border border-orange-500/30 px-3 py-1 rounded-lg">
                      {selectedSample.client}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      {selectedSample.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedSample(null)}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight">
                    {selectedSample.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                    {selectedSample.subtitle}
                  </p>
                </div>

                {/* Social Metrics Bar */}
                <div className="grid grid-cols-4 gap-2.5 p-3.5 bg-[#0b0c13] rounded-2xl border border-white/8 text-center font-mono text-xs">
                  <div>
                    <div className="font-black text-rose-400 text-sm">{selectedSample.stats.likes}</div>
                    <div className="text-[10px] text-stone-500">Likes</div>
                  </div>
                  <div>
                    <div className="font-black text-sky-400 text-sm">{selectedSample.stats.comments}</div>
                    <div className="text-[10px] text-stone-500">Comments</div>
                  </div>
                  <div>
                    <div className="font-black text-emerald-400 text-sm">{selectedSample.stats.shares}</div>
                    <div className="text-[10px] text-stone-500">Shares</div>
                  </div>
                  <div>
                    <div className="font-black text-amber-400 text-sm">{selectedSample.stats.bookmarks}</div>
                    <div className="text-[10px] text-stone-500">Bookmarks</div>
                  </div>
                </div>

                {/* Published Caption Box with Copy Button */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-300 uppercase tracking-wider font-mono">
                      Published Social Caption
                    </span>
                    <button
                      onClick={() => handleCopyCaption(selectedSample.captionSnippet)}
                      className="flex items-center gap-1 text-[11px] text-orange-400 hover:text-orange-300 font-mono transition"
                    >
                      {copiedCaption ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCaption ? 'Copied!' : 'Copy Caption'}</span>
                    </button>
                  </div>
                  <div className="text-xs text-stone-300 bg-[#090a10] p-4 rounded-xl border border-white/8 leading-relaxed font-sans">
                    {selectedSample.captionSnippet}
                  </div>
                </div>

                {/* Editorial Impact & Strategy */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-300 uppercase tracking-wider font-mono">
                    Editorial Architecture
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {selectedSample.description}
                  </p>
                </div>

                <div className="p-4 bg-orange-950/40 rounded-xl border border-orange-500/30 space-y-1.5">
                  <div className="text-xs font-bold text-orange-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    <span>Content Strategy Takeaway</span>
                  </div>
                  <p className="text-xs text-stone-200 leading-relaxed">
                    {selectedSample.takeaway}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-white/8 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedSample.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-stone-400 bg-white/5 border border-white/6 px-2 py-0.5 rounded-md">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedSample(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
