import React, { useState } from 'react';
import { X, BookOpen, Clock, Calendar, Check, Copy, Share2, Sparkles, Tag, ArrowRight } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  takeaway: string;
  fullText: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'case-study-architecture',
    title: 'The Architecture of a 7-Figure B2B SaaS Case Study',
    category: 'Case Studies & Sales Enablement',
    date: 'Oct 2025',
    readTime: '4 min read',
    takeaway: 'Enterprise buyers do not buy tools because they look nice; they buy because peer companies avoided catastrophe and increased profit.',
    excerpt: 'Most SaaS case studies read like lazy press releases filled with generic compliments. Here is how to structure a proof asset that sales reps actually fight to use in contract negotiations.',
    fullText: [
      'In enterprise software sales, testimonials do not close six-figure deals. Rigorous evidence closes deals.',
      'When an enterprise buyer—whether a VP of Engineering, Chief Information Security Officer (CISO), or CFO—is reviewing a contract, they are not looking for enthusiastic adjectives like “intuitive” or “game-changing”. They are looking for defensive air cover.',
      'They need to show their procurement committee that adopting your software will not cause a multi-million dollar outage, fail a SOC 2 audit, or consume 400 engineering hours in unanticipated migration overhead.',
      'Here is the 4-part architectural blueprint I use when writing customer case studies for high-growth SaaS companies:',
      '1. The Quantified Breaking Point: Establish the precise operational ceiling the client hit before adopting your tool. Don\'t say “They were scaling rapidly and faced challenges.” Say “Their existing PostgreSQL database was locking table writes for 42 seconds every midnight during reconciliation, triggering 120 pager alerts per week and stalling two core sprint teams.”',
      '2. The Evaluated Alternatives (The “Why Not Build It In-House” Trap): Explicitly address why the engineering team chose your solution instead of writing an internal microservice or sticking with open-source defaults. This directly neutralizes the exact objections your prospect\'s in-house team is currently whispering to the VP.',
      '3. The Granular Architecture & Rollout: Detail the implementation phase with technical honesty. What did the ingestion pipeline look like? Was migration completed in 4 weeks or 12 weeks? By disclosing the real mechanics of deployment, you build immense credibility with engineering leadership.',
      '4. The Triple-Metric Payoff: Every case study must demonstrate three distinct tiers of ROI:',
      '   • Tier A (Direct Financial ROI): Dollars saved on AWS egress, cloud licenses, or reduced third-party contractor spend.',
      '   • Tier B (Velocity ROI): Days shaved off sprint cycles, reduction in Mean Time to Resolution (MTTR), or faster release cadence.',
      '   • Tier C (Human / Cultural ROI): Engineers no longer getting woken up at 3:00 AM by Sev-1 alerts, leading to zero attrition in the DevOps squad.',
      'When you replace vague praise with audit-grade technical narrative, your case studies transform from passive marketing brochures into the single highest-converting sales collateral in your pipeline.'
    ]
  },
  {
    id: 'writing-for-developers',
    title: 'Why Developers Hate Marketing Fluff (And How to Write for Engineers)',
    category: 'Developer Marketing & DevRel',
    date: 'Nov 2025',
    readTime: '5 min read',
    takeaway: 'Software engineers have the most aggressive bullshit detectors in any B2B market. Earn their trust with code snippets, trade-offs, and humility.',
    excerpt: 'Software developers will instantly bounce from your blog post the second they encounter words like “seamless”, “single pane of glass”, or “magic”. Here is how to write copy that engineers respect and share.',
    fullText: [
      'Software engineers do not read technical blogs the way normal consumers read lifestyle content. They read defensively, looking for reasons to dismiss the author as an uninformed marketer.',
      'If your article opens with “In today\'s fast-paced digital era, cloud computing is more critical than ever,” 95% of engineers have already closed the tab or scrolled to the comments to tear your premises apart.',
      'To earn the respect of technical readers, follow these non-negotiable rules:',
      'Rule 1: Show the Trade-offs Immediately. In computer science, there is no such thing as a free lunch. Every architectural decision is a compromise between latency, throughput, consistency, memory, and cost. If your article claims your distributed storage engine is infinitely scalable, completely consistent, and ultra-low cost, developers know you are lying. Explain the trade-offs: “We chose eventual consistency over strong ACID guarantees to sustain 250,000 writes per second at edge nodes.” Developers will immediately nod and keep reading.',
      'Rule 2: Put Code Above the Fold. Don\'t make developers read 800 words of background context before showing how the tool actually works. Show the YAML config, the CLI installation command, or the 10-line TypeScript SDK initialization within the first two scrolls.',
      'Rule 3: Eliminate Banned Adjectives. Delete every instance of: “seamless”, “effortless”, “revolutionary”, “game-changer”, “lightning-fast”, “state-of-the-art”. Replace them with measurable benchmarks: “cuts cold start latency from 450ms to 28ms” or “compiles a 200k-line monorepo in 1.4 seconds.”',
      'Rule 4: Write with the Humility of a Practicing Practitioner. Acknowledge edge cases where your product is NOT the right fit. When you explicitly tell a reader: “If your dataset fits in RAM on a single node, you do not need our distributed engine—stick with SQLite,” you generate unprecedented brand loyalty.',
      'Developers don\'t hate content. They love deep, thoughtful, well-diagrammed content that saves them hours of debugging. Write for their intellect, not their gullibility.'
    ]
  },
  {
    id: 'product-led-seo',
    title: 'From Traffic to Pipeline: Building Product-Led SEO Pillars',
    category: 'Product-Led Growth & SEO',
    date: 'Dec 2025',
    readTime: '4 min read',
    takeaway: '1,000 qualified technical readers searching for a solution to their exact architectural pain point are worth more than 100,000 accidental visitors to a top-10 listicle.',
    excerpt: 'High search volume means nothing if your bounce rate is 92% and nobody creates an account. Here is the framework for tying search intent directly to product adoption.',
    fullText: [
      'Many B2B SaaS founders celebrate when their blog reaches 100,000 monthly page views, only to realize during quarterly financial reviews that those 100,000 visitors produced zero sales pipeline.',
      'This happens because traditional SEO agencies chase broad top-of-funnel keywords like “what is cloud computing” or “best productivity tips”. Those keywords bring college students writing essays or casual hobbyists, not senior buyers with credit cards and budget authority.',
      'Product-Led SEO flips this equation completely by targeting high-intent, problem-aware search queries.',
      'Instead of targeting “what is Kubernetes”, we target:',
      '• “How to debug CrashLoopBackOff in production EKS clusters”',
      '• “Kafka consumer lag monitoring without OpenTelemetry overhead”',
      '• “Migrating from Redis to KeyDB: performance benchmarks & caveats”',
      'The Structure of a Product-Led SEO Article:',
      'Step 1: Diagnose the Exact Problem. The reader landed on your page because their terminal threw a specific error or their current vendor\'s bill skyrocketed. Validate that pain in the opening two sentences.',
      'Step 2: Provide the Universal Manual Solution First. Show how an engineer can resolve the problem manually using standard open-source tools or CLI commands. This proves your technical authority and builds goodwill.',
      'Step 3: Introduce the Native Automation (Your Product). Naturally demonstrate how your platform automates the tedious manual steps from Step 2 with a single configuration flag or API call. Don\'t sell aggressively—simply demonstrate the contrast in engineering time.',
      'When your product is the natural, logical resolution to a technical headache, signups and demo requests occur organically as part of the learning journey.'
    ]
  },
  {
    id: 'ai-content-landscape-2026',
    title: 'The AI Content Landscape: Why Deep Domain Expertise Beats Synthetic Velocity',
    category: 'Industry Commentary & Strategy',
    date: 'Jan 2026',
    readTime: '4 min read',
    takeaway: 'In a world where anyone can generate 50 generic articles per day with an LLM, original research, practitioner interviews, and human perspective are the only moats left.',
    excerpt: 'The internet is drowning in synthesized, lukewarm AI summaries. Why the highest-performing B2B brands are doubling down on deep technical journalism and contrarian voice.',
    fullText: [
      'Since 2023, the barrier to producing grammatically correct 1,200-word blog posts has dropped to zero. Companies rushed to publish hundreds of AI-generated articles per week in hopes of gaming search engine algorithms.',
      'The result? A digital wasteland of lukewarm, repetitive content where every article sounds like the average of the internet.',
      'And what happened to reader behavior? Human readers developed an instant, subconscious filter against AI prose. The moment someone senses that a post was generated without genuine human thought, they exit immediately.',
      'In this environment, what creates enduring commercial value for a SaaS company?',
      '1. Primary Data & Original Benchmarks. An LLM cannot spin up a 64-node cluster on AWS, run load tests with Locust at 50,000 req/sec, and document the CPU thermal throttling patterns. When your content presents proprietary, real-world data, you become the primary source that everyone else links to.',
      '2. Practitioner-Driven Opinions. Technology is fundamentally about human trade-offs. Why did your engineering team decide to ditch GraphQL and revert back to REST? An LLM gives you both sides equally. An experienced practitioner gives you the gritty, honest retrospective that sparks 400 comments on Hacker News.',
      '3. Empathy for the Buyer\'s Career Risk. Purchasing enterprise software involves career risk. If a Director of DevOps selects an unreliable monitoring tool, they could lose their job after a major outage. AI content cannot speak to that visceral fear. A human writer who has interviewed dozens of tech leaders understands how to craft arguments that soothe that exact risk.',
      'The winning formula for modern content is not human vs. AI—it is human depth, rigorous reporting, and distinctive voice amplified by modern workflow tools.'
    ]
  },
  {
    id: 'whitepapers-that-convert',
    title: 'B2B Whitepapers That Don’t Put Executives to Sleep',
    category: 'Whitepapers & Research',
    date: 'Feb 2026',
    readTime: '5 min read',
    takeaway: 'Treat your whitepaper not as a dry academic paper, but as an executive briefing that arms the buyer with arguments for their CFO.',
    excerpt: 'How to write 4,000+ word technical research reports that get forwarded across C-suites, cited by industry analysts, and drive enterprise sales conversations.',
    fullText: [
      'A great whitepaper is the most potent lead-generation instrument in the B2B enterprise toolkit. It is the asset that justifies an enterprise sales rep requesting a 30-minute discovery call with a Fortune 500 VP.',
      'Yet most corporate whitepapers fail because they are written like dry academic textbooks: 30 pages of small text, passive voice, and abstract theory that no executive has the patience to read.',
      'To build a high-leverage whitepaper that commands C-suite attention:',
      '1. Start with an Executive Snapshot. Executives read in 5-minute bursts between meetings. Provide an executive summary on Page 2 that delivers all core findings, key benchmark tables, and action items in under 400 words.',
      '2. Frame the Narrative Around an Inevitable Macro Shift. Don\'t pitch your product on Page 1. Pitch the unstoppable market trend that is rendering old architectures obsolete. Whether it\'s data sovereignty regulations, AI compute cost spikes, or zero-trust identity mandates—establish that doing nothing is the riskiest option.',
      '3. Visual Information Architecture. Break up dense analysis with clear architectural flowcharts, benchmark bar charts, and highlighted callout quotes. A reader scanning through should be able to absorb the core message purely through figures and captions.',
      '4. Provide an Actionable Maturity Model. Give readers a self-assessment checklist (e.g., Level 1 to Level 4 Cloud Security Maturity). When a reader assesses their own organization and realizes they are operating at Level 1 while their competitors are at Level 3, the urge to purchase your solution becomes immediate.',
      'A whitepaper that educates, clarifies, and guides will sit on an executive\'s desktop for months and circulate across their entire team.'
    ]
  },
  {
    id: 'content-repurposing-flywheel',
    title: 'The 1-to-12 Content Repurposing Flywheel for Lean Teams',
    category: 'Content Operations & Distribution',
    date: 'Mar 2026',
    readTime: '3 min read',
    takeaway: 'Never write a 3,000-word technical masterpiece and publish it once. Squeeze maximum leverage out of every hour of research.',
    excerpt: 'How high-growth B2B startups turn one deep technical cornerstone piece into a month’s worth of high-performing marketing assets across all channels.',
    fullText: [
      'The single biggest mistake lean B2B marketing teams make is spending 30 hours crafting an incredible technical research article, posting it once to Twitter and LinkedIn, and immediately moving on to the next piece.',
      'Content distribution should consume at least 50% of your total content effort. Here is how I repurpose every long-form technical asset into a 12-part omnichannel distribution engine:',
      'Asset 1: The Core Pillar (3,000 - 4,000 words on company blog or docs hub).',
      'Assets 2 to 5: Four Distinct LinkedIn Carousels & Breakdown Posts. Extract individual sections: (a) The benchmark graph with commentary, (b) The contrarian hot take, (c) The step-by-step code tutorial, (d) The customer impact story.',
      'Asset 6: Executive Email Newsletter Edition. A condensed 500-word digest delivered directly into your subscriber inboxes.',
      'Asset 7: Slide Deck Summary. A 10-slide PDF deck uploaded to LinkedIn Document posts (which enjoy 3x organic reach compared to standard text posts).',
      'Assets 8 & 9: Sales Enablement One-Pagers. A 2-page PDF excerpt tailored specifically for sales SDRs and AEs to drop into cold outbound emails as value-add follow-ups.',
      'Asset 10: Community Forum / Reddit / Hacker News Contribution. A conversational summary submitted to relevant developer subreddits and developer communities.',
      'Assets 11 & 12: Short-Form Video or Audio Script. Bullet points provided to your Developer Advocate or Founder to record a 3-minute Loom walkthrough.',
      'When you operationalize repurposing, you extract 10x more reach, pipeline, and awareness from every single piece of content you produce.'
    ]
  }
];

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!post) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#10121d] text-[#e2e8f0] rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0c0d15] sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 text-xs font-mono font-bold bg-orange-950/80 text-orange-400 rounded-full border border-orange-500/30">
              {post.category}
            </span>
            <span className="text-stone-600 font-mono">·</span>
            <span className="text-xs text-stone-400 font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/5 hover:bg-white/10 text-stone-300 rounded-xl border border-white/8 transition"
              title="Copy article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-xl hover:bg-white/10 transition"
              title="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 leading-relaxed">
          {/* Article Header */}
          <div className="space-y-3 pb-6 border-b border-white/8">
            <div className="text-xs font-mono text-orange-400 uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              <span>Published {post.date}</span>
              <span className="text-stone-600">·</span>
              <span>By Rakhi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 italic font-editorial border-l-2 border-orange-500 pl-4 py-1">
              {post.excerpt}
            </p>
          </div>

          {/* Key Takeaway Callout */}
          <div className="p-4 bg-orange-950/40 rounded-2xl border border-orange-500/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 block">
                Executive Takeaway
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-200 mt-1 leading-relaxed">
                {post.takeaway}
              </p>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            {post.fullText.map((paragraph, index) => {
              if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') || paragraph.startsWith('Rule') || paragraph.startsWith('Step') || paragraph.startsWith('Asset')) {
                return (
                  <div key={index} className="p-4 bg-[#090a10] rounded-xl border border-white/8 font-medium text-white mt-2">
                    {paragraph}
                  </div>
                );
              }
              if (paragraph.startsWith('•') || paragraph.startsWith('   •')) {
                return (
                  <div key={index} className="pl-6 text-stone-300 font-mono text-xs sm:text-sm flex items-start gap-2">
                    <span className="text-orange-400 font-bold">›</span>
                    <span>{paragraph.replace(/^[•\s]+/, '')}</span>
                  </div>
                );
              }
              return (
                <p key={index} className="text-stone-300">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer Note */}
          <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0c0d15] p-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ea580c] to-[#f97316] text-white flex items-center justify-center font-bold font-mono">
                R
              </div>
              <div>
                <div className="text-xs font-bold text-white">Written by Rakhi</div>
                <div className="text-[11px] text-stone-400 font-mono">Senior Tech & B2B SaaS Content Writer</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-stone-200 text-xs font-bold rounded-xl transition"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close Article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
