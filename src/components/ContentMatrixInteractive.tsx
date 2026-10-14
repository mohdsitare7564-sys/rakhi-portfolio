import React, { useState } from 'react';
import { Sparkles, Terminal, BookOpen, CheckCircle2, ArrowUpRight, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

export const ContentMatrixInteractive: React.FC = () => {
  const [activeQuadrant, setActiveQuadrant] = useState<'educate' | 'inspire' | 'evaluate' | 'convince'>('educate');

  const quadrants = {
    educate: {
      id: 'educate',
      number: '01',
      title: 'EDUCATE',
      funnelStage: 'Top of Funnel (ToFU) · Rational Authority',
      headline: 'Deep Architectural Clarity & Technical Mastery',
      description: 'Positions your brand as the definitive technical authority by breaking down complex developer workflows, distributed systems, and modern cloud infrastructure.',
      campaigns: [
        {
          name: 'Kubernetes Cost Optimization in Multi-Cloud Environments',
          type: 'Technical Pillar Guide',
          hook: 'How engineering teams identify idle cluster waste without risking latency spikes.',
          result: '18,000+ organic developer reads; #1 ranking for 14 cloud infrastructure terms.',
        },
        {
          name: 'Vector Search & LLM RAG Implementation Architecture',
          type: 'Developer Tutorial',
          hook: 'A practical, zero-fluff comparison between HNSW and IVF indexing in production AI pipelines.',
          result: 'Featured on Hacker News; 420+ GitHub repo stars for sample starter code.',
        },
      ],
      color: 'from-amber-500/10 to-orange-500/10',
      borderColor: 'border-orange-500',
      icon: Terminal,
      iconColor: 'text-orange-400',
    },
    inspire: {
      id: 'inspire',
      number: '02',
      title: 'INSPIRE',
      funnelStage: 'Top of Funnel (ToFU) · Visionary & Thought Leadership',
      headline: 'Category Creation & Contrarian Engineering Perspectives',
      description: 'Challenging legacy IT paradigms and articulating a bold vision for the future of enterprise software, captivating CTOs, founders, and VPs of Engineering.',
      campaigns: [
        {
          name: 'The Death of Traditional MQLs in Modern Developer-First SaaS',
          type: 'Founder Ghostwritten Op-Ed',
          hook: 'Why forcing engineers through an SDR qualification call destroys your pipeline before it starts.',
          result: '65,000+ LinkedIn impressions, 380 reposts, 22 inbound enterprise demos.',
        },
        {
          name: 'Why Microservices Failed for 80% of Enterprise Teams',
          type: 'Contrarian Architectural Essay',
          hook: 'Examining the hidden organizational debt of premature decomposition and the rise of modular monoliths.',
          result: 'Top trending discussion on Reddit /r/programming with 1,200+ comments.',
        },
      ],
      color: 'from-rose-500/10 to-orange-500/10',
      borderColor: 'border-rose-500',
      icon: Sparkles,
      iconColor: 'text-rose-400',
    },
    evaluate: {
      id: 'evaluate',
      number: '03',
      title: 'EVALUATE',
      funnelStage: 'Middle of Funnel (MoFU) · Commercial Validation',
      headline: 'Head-to-Head Architectural Comparisons & TCO Teardowns',
      description: 'Helping software evaluation committees objectively analyze proprietary SaaS versus open-source alternatives, eliminating evaluation paralysis.',
      campaigns: [
        {
          name: 'OpenTelemetry vs. Legacy APMs: Total Cost of Ownership Analysis',
          type: 'Vendor Comparison Matrix',
          hook: 'When does managing your own collector cluster cost more than third-party SaaS licenses?',
          result: 'Adopted by 40+ engineering organizations as their internal evaluation rubric.',
        },
        {
          name: 'Migrating from DynamoDB to ScyllaDB at 500k Operations/Sec',
          type: 'Migration Playbook',
          hook: 'A battle-tested playbook covering data modeling shifts, dual-write pipelines, and zero-downtime cutovers.',
          result: 'Directly cited as the primary evaluation resource for 6 closed enterprise sales.',
        },
      ],
      color: 'from-sky-500/10 to-indigo-500/10',
      borderColor: 'border-sky-500',
      icon: Layers,
      iconColor: 'text-sky-400',
    },
    convince: {
      id: 'convince',
      number: '04',
      title: 'CONVINCE',
      funnelStage: 'Bottom of Funnel (BoFU) · Decision Velocity',
      headline: 'Quantified Enterprise Case Studies & Security Teardowns',
      description: 'Arming your sales team with audit-grade proof assets that neutralize late-stage objections from risk officers, legal teams, and procurement.',
      campaigns: [
        {
          name: 'How a Global FinTech Reduced P99 Ingestion Latency by 74%',
          type: 'Enterprise Case Study',
          hook: 'Zero marketing adjectives. Pure architectural telemetry, benchmarks, and infrastructure savings.',
          result: 'Sales reps cited this document as closing factor in $420k ARR contract.',
        },
        {
          name: 'Zero-Trust Implementation: Achieving SOC 2 in 90 Days',
          type: 'Security & Compliance Blueprint',
          hook: 'Neutralizing CISO skepticism with cryptographic proof and automated audit trails.',
          result: 'Reduced average sales cycle length from 64 days to 38 days.',
        },
      ],
      color: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500',
      icon: ShieldCheck,
      iconColor: 'text-emerald-400',
    },
  };

  const current = quadrants[activeQuadrant];

  return (
    <div className="bg-[#12141f] rounded-3xl border border-white/8 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
              Strategic Framework
            </span>
            <span className="text-xs text-stone-500 font-mono">B2B SaaS Content Engine</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white mt-2 font-display">
            THE 4-QUADRANT CONTENT MATRIX
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
            How Rakhi structures technical content across buyer psychology—from initial awareness to signed multi-year SaaS contracts.
          </p>
        </div>

        {/* Quick Legend */}
        <div className="flex items-center gap-4 text-xs font-mono text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500" /> Rational / Technical
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500" /> Visionary / Commercial
          </span>
        </div>
      </div>

      {/* Interactive Quadrant Buttons / Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {(Object.keys(quadrants) as Array<keyof typeof quadrants>).map((key) => {
          const q = quadrants[key];
          const IconComponent = q.icon;
          const isActive = activeQuadrant === key;
          return (
            <button
              key={key}
              onClick={() => setActiveQuadrant(key)}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                isActive
                  ? `bg-[#181a29] shadow-xl ${q.borderColor} ring-2 ring-orange-500/20`
                  : 'bg-[#090a10] border-white/6 hover:bg-[#151624] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-stone-500">
                  {q.number}
                </span>
                <IconComponent className={`w-4 h-4 ${q.iconColor}`} />
              </div>
              <div className="mt-3">
                <div className={`text-xs font-bold tracking-wider uppercase ${isActive ? 'text-white' : 'text-stone-400'}`}>
                  {q.title}
                </div>
                <div className="text-[11px] text-stone-500 font-mono mt-0.5 truncate">
                  {q.funnelStage.split('·')[0]}
                </div>
              </div>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ea580c] to-[#f97316]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Quadrant Deep Dive Card */}
      <div className="bg-[#0b0c13] rounded-2xl border border-white/8 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/8">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-orange-950/70 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-orange-400 uppercase font-mono tracking-wider">
                {current.funnelStage}
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                {current.headline}
              </h4>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          {current.description}
        </p>

        {/* Real-World Campaign Examples */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
            Sample High-Impact Assets in This Quadrant:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.campaigns.map((camp, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#12141f] border border-white/8 space-y-2.5 hover:border-orange-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-orange-400 bg-orange-950/80 border border-orange-500/30 px-2.5 py-0.5 rounded-full font-mono">
                    {camp.type}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h5 className="text-sm font-bold text-white line-clamp-1">
                  {camp.name}
                </h5>
                <p className="text-xs text-stone-400 italic">
                  “{camp.hook}”
                </p>
                <div className="text-xs font-mono text-stone-300 bg-[#090a10] p-2.5 rounded-xl border border-white/8 flex items-center gap-2">
                  <span className="font-bold text-orange-400">Impact:</span>
                  <span>{camp.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
