import React, { useState } from 'react';
import { CLIENT_LIST, CLIENT_CATEGORIES, ClientItem } from '../data/portfolioData';
import { Search, Building2, Sparkles, Filter, ExternalLink } from 'lucide-react';

export const ClientGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredClients = CLIENT_LIST.filter((client) => {
    const matchesCategory =
      selectedCategory === 'All' || client.category === selectedCategory;
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (client.tagline && client.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
      client.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#12141f] rounded-3xl border border-white/8 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
              Client & Partner Roster
            </span>
            <span className="text-xs text-stone-500 font-mono">25+ Tech Brands</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white mt-2 font-display">
            CLIENTS & SAAS ECOSYSTEM
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
            B2B SaaS and technology companies powered by Rakhi's technical whitepapers, case studies & SEO growth engines.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brands or industries..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-[#090a10] border border-white/10 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40 transition"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#090a10] rounded-2xl border border-white/8">
        {CLIENT_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = cat === 'All' 
            ? CLIENT_LIST.length 
            : CLIENT_LIST.filter(c => c.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-xs'
                  : 'text-stone-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-black/30 text-white' : 'bg-white/5 text-stone-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Client Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 pt-2">
        {filteredClients.map((client, idx) => {
          return (
            <div
              key={idx}
              className={`group relative p-4 rounded-2xl bg-[#0b0c13] border transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg ${
                client.highlight
                  ? 'border-orange-500/30 hover:border-orange-500/60 shadow-[0_4px_16px_rgba(234,88,12,0.08)]'
                  : 'border-white/6 hover:border-white/20'
              }`}
            >
              {client.highlight && (
                <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              )}
              
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-2 group-hover:scale-105 transition-transform">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                  {client.name}
                </h4>
                <p className="text-[10px] font-medium text-stone-500 uppercase tracking-wider font-mono">
                  {client.category}
                </p>
              </div>

              {client.tagline && (
                <p className="text-[11px] text-stone-400 mt-2.5 line-clamp-2 leading-tight">
                  {client.tagline}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {filteredClients.length === 0 && (
        <div className="text-center py-12 text-stone-500 text-xs font-mono">
          No brands found matching "{searchQuery}". Try clearing search.
        </div>
      )}

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-white/8 text-xs text-stone-500 font-mono">
        <span>GLOBAL / REMOTE ENGAGEMENTS</span>
        <span>RAKHI · TECH & B2B SAAS WRITER</span>
      </div>
    </div>
  );
};
