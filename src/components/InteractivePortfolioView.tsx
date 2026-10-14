import React, { useState } from 'react';
import { PORTFOLIO_SLIDES, PORTFOLIO_METADATA, PortfolioSlide } from '../data/portfolioData';
import { ContentMatrixInteractive } from './ContentMatrixInteractive';
import { ClientGrid } from './ClientGrid';
import { BLOG_POSTS, BlogPost, BlogModal } from './BlogModal';
import { WorksShowcase } from './WorksShowcase';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  CheckCircle,
  Clock,
  Layers,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Quote,
  Eye,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  Share2,
  FileText,
  Search,
  CheckCircle2,
  Linkedin,
  Flame,
  LayoutGrid
} from 'lucide-react';

interface InteractivePortfolioViewProps {
  onSelectSlide: (slide: PortfolioSlide) => void;
  onOpenContact: () => void;
  onSwitchToDeck?: () => void;
}

export const InteractivePortfolioView: React.FC<InteractivePortfolioViewProps> = ({
  onSelectSlide,
  onOpenContact,
  onSwitchToDeck,
}) => {
  const [active3PTab, setActive3PTab] = useState<'pre' | 'prod' | 'post'>('pre');
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  return (
    <div className="w-full bg-[#090a0f] text-[#e2e8f0]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 border-b border-white/8 bg-mesh-hero bg-dot-grid">
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 rounded-full border border-orange-500/30 flex items-center gap-1.5 shadow-[0_0_15px_rgba(234,88,12,0.25)]">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>RAKHI · TECH WRITER</span>
              </span>
              <span className="text-stone-600">·</span>
              <span className="px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-stone-300 bg-white/5 rounded-full border border-white/10">
                B2B SAAS & CLOUD ARCHITECTURE
              </span>
              <span className="text-stone-600">·</span>
              <span className="px-3.5 py-1 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN FOR RETAINERS</span>
              </span>
            </div>

            {/* Headline */}
            <div className="relative max-w-4xl">
              <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-400 font-mono mb-3">
                SENIOR TECH & B2B SAAS CONTENT STRATEGIST
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-display uppercase leading-[1.05]">
                TURNING COMPLEX TECH INTO{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 underline decoration-orange-500/40 decoration-wavy decoration-2">
                  REVENUE STORIES
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-xl text-stone-300 font-normal leading-relaxed">
              Engineering-grade clarity meets buyer psychology. Transforming cloud infrastructure, developer software, and AI breakthroughs into high-converting whitepapers, case studies, and SEO pillars.
            </p>

            {/* Philosophy Pill */}
            <div className="max-w-xl p-4 bg-[#12141f]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl text-center space-y-1">
              <p className="text-xs sm:text-sm font-serif italic text-stone-200">
                “{PORTFOLIO_METADATA.tagline}”
              </p>
              <p className="text-[11px] font-bold text-orange-400 uppercase tracking-wider font-mono">
                • {PORTFOLIO_METADATA.taglineAuthor}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_25px_rgba(234,88,12,0.4)] hover:shadow-[0_0_35px_rgba(234,88,12,0.7)] transition-all hover:scale-[1.03] flex items-center gap-2"
              >
                <span>Hire Rakhi for Your Next Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('real-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3.5 bg-[#141624] hover:bg-[#1a1d30] text-stone-200 text-xs sm:text-sm font-bold rounded-xl border border-white/10 shadow-md transition flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>Explore Live Works (KGS)</span>
              </button>

              {onSwitchToDeck && (
                <button
                  onClick={onSwitchToDeck}
                  className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white text-xs sm:text-sm font-bold rounded-xl border border-white/8 transition flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-orange-400" />
                  <span>View 19-Slide Behance Deck</span>
                </button>
              )}
            </div>

            {/* 4 Proven ROI Metrics Bento Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl pt-6">
              {[
                { label: 'Influenced Pipeline', value: '$2.8M+', desc: 'Direct attribution from whitepapers & case studies' },
                { label: 'Long-Form Assets', value: '240+', desc: 'Research reports, SEO pillars & case studies' },
                { label: 'Avg Organic Lift', value: '+215%', desc: '6-month sustained growth in technical readership' },
                { label: 'Retainer Retention', value: '98%', desc: 'Pilot projects converted to ongoing retainers' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#12141f]/70 backdrop-blur-md rounded-2xl border border-white/8 text-left shadow-lg hover:border-orange-500/40 transition-all group"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white font-display group-hover:text-orange-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider font-mono mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1.5 leading-snug">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT RAKHI · THE ENGINEERING-MINDED STORYTELLER */}
      <section id="about" className="py-24 border-b border-white/8 relative bg-[#0d0e17]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-950/70 border border-orange-500/30 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-orange-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About The Writer · Core Philosophy</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
                  Hi, I'm Rakhi.
                </h2>
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Senior Tech & B2B SaaS Content Writer | Content Strategist
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
                <p>
                  Most B2B tech content fails because of a fundamental disconnect: generalist marketers write superficial copy that software engineers dismiss, while engineering teams write dense documentation that commercial decision-makers never finish.
                </p>
                <p>
                  I bridge the chasm. I read API specs, inspect Kubernetes manifests, and interview your lead system architects—then translate those technical triumphs into compelling, high-converting narratives that convince CTOs, CISOs, and CFOs.
                </p>
                <div className="p-4 bg-white/4 rounded-xl border border-white/8 font-serif italic text-amber-200/90 leading-relaxed">
                  “Clear writing is the downstream byproduct of clear technical thinking. When we eliminate marketing fluff, the true architectural advantage of your software speaks for itself.”
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs text-stone-400 font-mono">
                  Specialized in: AI/ML, Cloud Infrastructure, Developer Tooling & CyberSecurity
                </p>
              </div>
            </div>

            {/* Right Card / Strategy Highlights */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#12141f] text-stone-100 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-5 w-full max-w-md">
                <div className="flex items-center gap-3 pb-3 border-b border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-400 flex items-center justify-center font-bold font-mono">
                    R
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      Why Founders & CMOs Partner With Me
                    </h4>
                    <span className="text-[11px] text-orange-400 font-mono">The Rakhi Standard</span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {[
                    { title: 'Zero Hand-Holding Required', desc: 'Capable of reading GitHub issues, RFCs, and product roadmaps autonomously.' },
                    { title: 'Developer-Grade Authenticity', desc: 'Respects engineer skepticism with real benchmarks and architectural trade-offs.' },
                    { title: 'Business Outcome Focused', desc: 'Every word is calculated to drive free trial activations, demo bookings, or deal closes.' },
                    { title: 'Turnkey Delivery', desc: 'Full package with meta descriptions, social copy, and distribution snippets.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">{item.title}</div>
                        <div className="text-[11px] text-stone-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white text-xs font-bold rounded-xl transition shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE & TRACK RECORD */}
      <section id="experience" className="py-24 border-b border-white/8 bg-[#090a10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/8 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-1 rounded">
                Track Record & Timeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-display">
                EXPERIENCE & CREDENTIALS
              </h2>
            </div>
            <div className="text-xs font-mono text-stone-400">
              4+ Years Dedicated to B2B Tech & SaaS Content
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Competencies & Focus Areas */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#12141f] p-6 rounded-2xl border border-white/8 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                  <Terminal className="w-5 h-5 text-orange-400" />
                  <span>CORE TECHNICAL DOMAINS</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { domain: 'AI & Machine Learning', detail: 'LLM RAG architectures, Vector databases, Agentic workflows' },
                    { domain: 'Cloud & DevOps Infrastructure', detail: 'Kubernetes, Service Mesh, Multi-cloud FinOps, Terraform' },
                    { domain: 'Developer Tooling & Observability', detail: 'OpenTelemetry, Distributed Tracing, CI/CD automation' },
                    { domain: 'CyberSecurity & Identity', detail: 'Zero-Trust (ZTNA), Supply Chain Security, SOC2/HIPAA' },
                    { domain: 'FinTech & Embedded Finance', detail: 'Real-time payment rails, Open Banking APIs, Fraud engines' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/4 border border-white/6">
                      <div className="text-xs font-bold text-white">{item.domain}</div>
                      <div className="text-[11px] text-stone-400 mt-0.5">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#12141f] p-6 rounded-2xl border border-white/8 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span>STRATEGIC CAPABILITIES</span>
                </div>
                <div className="space-y-2.5 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    <span>Technical Subject Matter Expert (SME) Interviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    <span>SEO Information Architecture & Intent Clustering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    <span>Executive Thought Leadership & Founder Ghostwriting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    <span>Quantitative Benchmark Analysis & Chart Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="lg:col-span-7 bg-[#12141f] p-6 sm:p-8 rounded-2xl border border-white/8 shadow-md space-y-6">
              <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide pb-2 border-b border-white/8">
                <Briefcase className="w-5 h-5 text-orange-400" />
                <span>CHRONOLOGICAL JOURNEY</span>
              </div>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-amber-400 before:to-stone-700">
                {/* 2023 - Present */}
                <div className="relative space-y-1.5">
                  <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-orange-950" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-orange-400">2023 – Present</span>
                    <span className="text-[11px] font-semibold text-orange-300 bg-orange-950/80 border border-orange-500/30 px-2 py-0.5 rounded">
                      Independent Practice
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Lead Tech Content Strategist & Consultant (Freelance)
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Partnered with 15+ Series A to C SaaS companies across AI, Cloud, and FinTech. Spearheaded flagship research whitepapers, product-led SEO topic clusters, and customer case studies generating over $2.8M in influenced pipeline.
                  </p>
                </div>

                {/* 2022 - 2023 */}
                <div className="relative space-y-1.5">
                  <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-orange-950" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-stone-400">2022 – 2023</span>
                    <span className="text-[11px] font-semibold text-stone-300 bg-white/5 px-2 py-0.5 rounded">
                      SaaS Studio
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Senior Tech Content Writer — DevTools & Cloud SaaS Studio
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Produced 80+ in-depth technical guides, API integration tutorials, and competitive teardowns for DevOps and infrastructure clients. Scaled several client blogs from 5k to 100k+ monthly organic developer readers.
                  </p>
                </div>

                {/* 2021 - 2022 */}
                <div className="relative space-y-1.5">
                  <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-stone-500 ring-4 ring-stone-900" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-stone-400">2021 – 2022</span>
                    <span className="text-[11px] font-semibold text-stone-300 bg-white/5 px-2 py-0.5 rounded">
                      B2B Marketing
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    B2B Copywriter & Content Specialist
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Crafted high-converting landing pages, email nurture sequences, and executive thought leadership essays on LinkedIn and Substack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICE PILLARS */}
      <section id="services" className="py-24 border-b border-white/8 bg-[#0b0c12]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-500/30 px-3 py-1 rounded-full">
              High-Leverage Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
              WHAT TECH COMPANIES HIRE ME FOR
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Turnkey content solutions engineered specifically for high-growth B2B software companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Flagship Whitepapers & Research Reports',
                badge: 'Enterprise Pipeline',
                desc: '3,500 – 6,000 word exhaustive industry reports with primary benchmark data, architectural flowcharts, and executive takeaways. Built to serve as lead magnets and sales collateral for enterprise accounts.',
                points: ['SME interview transcription & synthesis', 'Custom architectural flowcharts', 'Executive summary snapshot for C-suite']
              },
              {
                num: '02',
                title: 'High-Converting Customer Case Studies',
                badge: 'Deal Closer',
                desc: 'Deep-dive interviews with your enterprise champions (VP Eng, CTO, Head of SecOps). Built around the Challenge-Architecture-Impact framework with verifiable hard numbers and ROI metrics.',
                points: ['Direct 20-min champion interviews', '3-Tier ROI proof (Financial, Velocity, Cultural)', 'Sales-enablement 1-pager summary']
              },
              {
                num: '03',
                title: 'Product-Led SEO Content Pillars',
                badge: 'Organic Scale',
                desc: 'Comprehensive technical tutorials and comparison guides that capture high-intent search queries from engineers actively looking for solutions to their exact technical headaches.',
                points: ['Zero fluff; code snippets above the fold', 'Step-by-step reproduction steps', 'Native product activation touchpoints']
              },
              {
                num: '04',
                title: 'Executive & Founder Ghostwriting',
                badge: 'Category Creation',
                desc: 'Distilling founder perspectives into viral LinkedIn breakdowns, Substack columns, and tech publication bylines that build category authority and generate inbound investor & customer interest.',
                points: ['Authentic founder voice calibration', 'Viral carousel copywriting', 'Regular 10k+ impression consistency']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#12141f] border border-white/8 hover:border-orange-500/40 transition-all shadow-md space-y-5 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-1 rounded">
                      {service.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-bold">
                      {service.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/8 space-y-2">
                  {service.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC MATRIX & PRODUCTION FRAMEWORKS */}
      <section id="frameworks" className="py-24 border-b border-white/8 bg-[#090a10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Interactive Matrix */}
          <ContentMatrixInteractive />

          {/* Editorial Process Frameworks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* The 3P Production Model */}
            <div className="bg-[#12141f] p-6 sm:p-8 rounded-2xl border border-white/8 shadow-md space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                  Production Framework
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  THE 3P EDITORIAL SYSTEM
                </h3>
                <p className="text-xs text-stone-400">
                  How every piece of content moves from concept to published revenue asset.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex p-1 bg-[#090a10] rounded-xl text-xs font-semibold border border-white/8">
                {[
                  { id: 'pre', label: '1. Pre-Research' },
                  { id: 'prod', label: '2. Production' },
                  { id: 'post', label: '3. Repurposing' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive3PTab(tab.id as any)}
                    className={`flex-1 py-2 rounded-lg transition ${
                      active3PTab === tab.id ? 'bg-[#ea580c] text-white shadow-xs' : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 rounded-xl bg-white/4 border border-white/6 space-y-3">
                {active3PTab === 'pre' && (
                  <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
                    <div className="font-bold text-white">Pre-Production & Architectural Research</div>
                    <p>• 20-minute targeted interview with your subject-matter expert (engineer or PM).</p>
                    <p>• Reverse-engineering top SERP competitors to identify conceptual gaps.</p>
                    <p>• Delivery of an exhaustive outline and thesis statement before writing a single paragraph.</p>
                  </div>
                )}
                {active3PTab === 'prod' && (
                  <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
                    <div className="font-bold text-white">Production & Voice Calibration</div>
                    <p>• Draft delivered within 5–7 business days.</p>
                    <p>• Code verification in local environments or sandboxes.</p>
                    <p>• Incorporation of benchmark data, architectural flowcharts, and customer stories.</p>
                  </div>
                )}
                {active3PTab === 'post' && (
                  <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
                    <div className="font-bold text-white">The 1-to-12 Repurposing Flywheel</div>
                    <p>• 1 cornerstone long-form asset transformed into 4 LinkedIn executive posts.</p>
                    <p>• Condensed 400-word digest for company email newsletter.</p>
                    <p>• Sales enablement one-page summary for cold outbound sequences.</p>
                  </div>
                )}
              </div>
            </div>

            {/* The S.A.V.E. SaaS Funnel */}
            <div className="bg-[#12141f] p-6 sm:p-8 rounded-2xl border border-white/8 shadow-md space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                  Buyer Journey Framework
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  THE S.A.V.E. SAAS FUNNEL
                </h3>
                <p className="text-xs text-stone-400">
                  Aligning technical content with how modern software buyers make decisions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { letter: 'S', title: 'Solution Discovery', desc: 'Uncovering the hidden architectural bottleneck costing the company money.' },
                  { letter: 'A', title: 'Access & Friction', desc: 'Quick-start guides and copy-paste starter repos reducing time-to-first-value.' },
                  { letter: 'V', title: 'Value Proof', desc: 'Case studies showing explicit dollars saved and engineering hours recovered.' },
                  { letter: 'E', title: 'Education & Expansion', desc: 'Advanced architecture recipes turning users into enterprise advocates.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-white/4 rounded-xl border border-white/6 space-y-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#ea580c] text-white flex items-center justify-center font-bold text-xs font-mono">
                      {item.letter}
                    </div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <p className="text-[11px] text-stone-400 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIVE WORKS & VIRAL INFOGRAPHICS (KHAN GLOBAL STUDIES) */}
      <WorksShowcase />

      {/* 7. INTERACTIVE ARTICLES & WRITING SAMPLES READER */}
      <section id="articles-reader" className="py-24 border-b border-white/8 bg-[#090a10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/8 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-1 rounded">
                Interactive Writing Samples
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display mt-2">
                FEATURED ARTICLES & ESSAYS
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                Click any card to read the complete article right in the modal reader.
              </p>
            </div>
            <div className="text-xs font-mono text-stone-500">
              6 In-Depth Publications Available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedBlogPost(post)}
                className="p-6 rounded-2xl bg-[#12141f] border border-white/8 hover:border-orange-500/40 hover:-translate-y-1 transition-all cursor-pointer shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-mono text-stone-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/8 mt-4 flex items-center justify-between text-xs">
                  <span className="font-mono text-stone-500">{post.date}</span>
                  <span className="font-bold text-orange-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLIENT ROSTER & SAAS ECOSYSTEM */}
      <section id="clients" className="py-24 border-b border-white/8 bg-[#0b0c13]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientGrid />
        </div>
      </section>

      {/* 9. FEATURED CASE STUDIES DEEP DIVE */}
      <section id="case-studies" className="py-24 border-b border-white/8 bg-[#090a10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-1 rounded">
              Proven Commercial Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
              FEATURED CASE STUDIES
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Examining real metrics, pipeline influence, and organic reach generated for clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                slideId: 8,
                client: 'CloudScale Data',
                badge: 'Whitepaper Campaign',
                metric: '$680,000',
                metricLabel: 'Pipeline Generated',
                desc: 'A 4,200-word distributed database whitepaper comparing p99 latency benchmarks under 100k req/sec.',
                impact: '1,420+ downloads & 28 enterprise sales meetings booked.'
              },
              {
                slideId: 9,
                client: 'NexusFlow SaaS',
                badge: 'Product-Led SEO',
                metric: '182,000',
                metricLabel: 'Monthly Organic Readers',
                desc: 'Architected 24 programmatic developer guides with downloadable YAML orchestration templates.',
                impact: 'Grew traffic from 8k to 182k in 7 months with 450+ signups/wk.'
              },
              {
                slideId: 10,
                client: 'CyberShield AI',
                badge: 'Customer Success Series',
                metric: '+42%',
                metricLabel: 'Enterprise Demo Lift',
                desc: 'Structured 3-part case study series highlighting SOC 2 and HIPAA compliance and 70% MTTD reductions.',
                impact: 'Shortened average enterprise sales cycle by 21 days.'
              }
            ].map((cs, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12141f] border border-white/8 shadow-md flex flex-col justify-between space-y-4 hover:border-orange-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono font-bold text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-0.5 rounded">
                    {cs.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {cs.client}
                  </h3>
                  <div className="p-3 bg-[#090a10] rounded-xl border border-white/8 text-left">
                    <div className="text-2xl font-black text-white font-display">
                      {cs.metric}
                    </div>
                    <div className="text-[11px] font-bold text-orange-400 uppercase font-mono">
                      {cs.metricLabel}
                    </div>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/8 text-xs font-mono text-stone-300">
                  <span className="font-bold text-orange-400">Outcome: </span>
                  <span>{cs.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-24 border-b border-white/8 bg-[#0b0c13]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-500/30 px-2.5 py-1 rounded">
              Client Endorsements
            </span>
            <h2 className="text-3xl font-black text-white font-display">
              WHAT TECH LEADERS SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: '“Rakhi is one in a million. Finding someone who understands distributed databases and can also write copy that drives demo signups is nearly impossible. She nailed our flagship whitepaper on the first revision.”',
                author: 'Alex V.',
                role: 'VP of Marketing at CloudScale Data'
              },
              {
                quote: '“Our organic developer signups tripled within 6 months of Rakhi taking over our technical blog. She requires almost zero hand-holding and communicates directly with our engineering team with complete fluency.”',
                author: 'Priya M.',
                role: 'Head of Growth at NexusFlow'
              },
              {
                quote: '“Rakhi’s case studies became our enterprise sales reps’ #1 closing asset. She knows how to extract real customer metrics that convince enterprise CISOs and risk committees.”',
                author: 'Daniel K.',
                role: 'Co-Founder & CEO at CyberShield AI'
              }
            ].map((t, idx) => (
              <div key={idx} className="p-6 bg-[#12141f] rounded-2xl border border-white/8 shadow-md flex flex-col justify-between space-y-4">
                <Quote className="w-6 h-6 text-orange-500/50" />
                <p className="text-xs sm:text-sm text-stone-300 italic font-editorial leading-relaxed">
                  {t.quote}
                </p>
                <div className="pt-3 border-t border-white/8">
                  <div className="text-xs font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-orange-400 font-mono">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION & FOOTER */}
      <section className="py-24 bg-[#090a10] text-stone-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-[#f97316] text-white flex items-center justify-center font-bold text-2xl mx-auto shadow-[0_0_30px_rgba(234,88,12,0.5)] font-mono">
            R
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
            Ready to Build High-Converting B2B Tech Content?
          </h2>
          <p className="text-sm sm:text-base text-stone-400 max-w-xl mx-auto">
            Currently accepting 2 new clients for monthly content retainers, flagship whitepapers, and strategic case study sprints.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_25px_rgba(234,88,12,0.4)] hover:shadow-[0_0_35px_rgba(234,88,12,0.7)] transition hover:scale-[1.03] flex items-center gap-2"
            >
              <span>Get in Touch with Rakhi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`mailto:${PORTFOLIO_METADATA.email}`}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-orange-400" />
              <span>{PORTFOLIO_METADATA.email}</span>
            </a>
          </div>
          <div className="pt-10 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono">
            <span>© 2026 Rakhi · Senior Tech & B2B SaaS Content Writer</span>
            <span>Available for Global / Remote Engagements</span>
          </div>
        </div>
      </section>

      {/* Interactive Blog Modal Reader */}
      <BlogModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />
    </div>
  );
};
