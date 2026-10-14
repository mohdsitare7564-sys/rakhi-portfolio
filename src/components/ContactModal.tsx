import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Calendar, Copy, Check, Send, Sparkles, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_METADATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Monthly Content Retainer',
    timeline: 'Within 2-4 weeks',
    budget: '$3,000 – $6,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent(`B2B Content Inquiry: ${formData.service} — ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Hi Rakhi,\n\nI came across your portfolio and would like to discuss a project.\n\nProject Details:\n- Name: ${formData.name}\n- Company: ${formData.company}\n- Service Needed: ${formData.service}\n- Timeline: ${formData.timeline}\n- Estimated Budget: ${formData.budget}\n\nProject Overview:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    return `mailto:${PORTFOLIO_METADATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#10121d] text-[#e2e8f0] rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0c0d15]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <h3 className="text-base font-bold text-white font-display">
              Get in Touch with Rakhi
            </h3>
            <span className="text-xs text-stone-600 font-mono hidden sm:inline">·</span>
            <span className="text-xs text-orange-400 font-mono hidden sm:inline">Tech & B2B SaaS Writing</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-xl hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                Inquiry Prepared!
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Click below to launch your email client with your pre-filled inquiry, or copy Rakhi's direct address.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={createMailtoLink()}
                  className="px-6 py-3 bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white text-xs font-bold rounded-xl shadow-lg transition hover:scale-102 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Pre-Filled Email</span>
                </a>

                <button
                  onClick={() => copyToClipboard(PORTFOLIO_METADATA.email, 'submitted_email')}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 text-stone-300 rounded-xl border border-white/10 text-xs font-semibold transition flex items-center gap-2"
                >
                  {copiedField === 'submitted_email' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 text-stone-500 text-xs font-mono">
                Typical response turnaround: Within 24 business hours.
              </div>
            </div>
          ) : (
            <>
              {/* Direct Channels Quick Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  onClick={() => copyToClipboard(PORTFOLIO_METADATA.email, 'email')}
                  className="p-3.5 rounded-2xl bg-[#090a10] border border-white/8 hover:border-orange-500/40 transition cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <div>
                      <div className="text-[10px] text-stone-500 font-mono">DIRECT INBOX</div>
                      <div className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors">
                        {PORTFOLIO_METADATA.email}
                      </div>
                    </div>
                  </div>
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-stone-500 group-hover:text-white transition" />
                  )}
                </div>

                <a
                  href={PORTFOLIO_METADATA.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#090a10] border border-white/8 hover:border-orange-500/40 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                    <div>
                      <div className="text-[10px] text-stone-500 font-mono">LINKEDIN PROFILE</div>
                      <div className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors">
                        Connect with Rakhi
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-white transition" />
                </a>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-stone-400 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2 text-xs bg-[#090a10] border border-white/10 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-stone-400 uppercase">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.io"
                      className="w-full px-3.5 py-2 text-xs bg-[#090a10] border border-white/10 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-stone-400 uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="VectorScale AI"
                      className="w-full px-3.5 py-2 text-xs bg-[#090a10] border border-white/10 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-stone-400 uppercase">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-[#090a10] border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition"
                    >
                      <option value="Monthly Content Retainer">Monthly Content Retainer</option>
                      <option value="Flagship Whitepaper / Research Report">Flagship Whitepaper / Research Report</option>
                      <option value="Customer Case Study Sprints">Customer Case Study Sprints</option>
                      <option value="Product-Led SEO Strategy Hub">Product-Led SEO Strategy Hub</option>
                      <option value="Founder Thought Leadership Ghostwriting">Founder Thought Leadership Ghostwriting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-stone-400 uppercase">
                    Brief Project Overview & Goals
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, target audience (developers, CTOs, CISOs), and timeline..."
                    className="w-full px-3.5 py-2 text-xs bg-[#090a10] border border-white/10 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] text-white text-xs font-bold rounded-xl shadow-lg transition hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
