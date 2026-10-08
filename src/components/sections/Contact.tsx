'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GlassCard } from '@/components/common/GlassCard';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please complete all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage('Thank you! Your message details have been sent to satyachandra722@gmail.com. Satya Chandra will get back to you shortly.');
        
        if (data.fallbackToMailto) {
          const mailtoUrl = `mailto:satyachandra722@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
          window.location.href = mailtoUrl;
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Message could not be sent. Please try emailing directly to satyachandra722@gmail.com.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Network error. Please try emailing directly at satyachandra722@gmail.com.');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF6600] opacity-15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Something Impactful Together"
          subtitle="Whether you have an opportunity, project collaboration, or want to discuss AI/ML solutions, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="light" className="p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Direct Contact Channels</h3>
                <p className="text-xs text-[#64748B] font-medium">
                  Available for full-time engineering roles, AI consulting, and full-stack software development.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href="mailto:satyachandra722@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/90 border border-[rgba(255,102,0,0.2)] shadow-sm hover:border-[#FF6600] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[rgba(255,102,0,0.12)] text-[#FF6600] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] font-bold uppercase tracking-wider">Email Address</div>
                    <div className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6600] transition-colors">
                      satyachandra722@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:9948550301"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/90 border border-[rgba(255,102,0,0.2)] shadow-sm hover:border-[#FF6600] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[rgba(255,102,0,0.12)] text-[#FF6600] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] font-bold uppercase tracking-wider">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6600] transition-colors">
                      +91 9948550301
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/90 border border-[rgba(255,102,0,0.2)] shadow-sm hover:border-[#FF6600] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[rgba(255,102,0,0.12)] text-[#FF6600] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] font-bold uppercase tracking-wider">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6600] transition-colors">
                      satya chandra
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/90 border border-[rgba(255,102,0,0.2)] shadow-sm">
                  <div className="p-3 rounded-xl bg-[rgba(255,102,0,0.12)] text-[#FF6600]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#64748B] font-bold uppercase tracking-wider">Location Base</div>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      Mummidivaram, Andhra Pradesh, India
                    </div>
                  </div>
                </div>

              </div>
            </GlassCard>
          </div>

          {/* Right Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard variant="light" className="p-8">
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#FF6600] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(255,102,0,0.25)] text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#FF6600] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(255,102,0,0.25)] text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-[#FF6600] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Developer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(255,102,0,0.25)] text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#FF6600] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(255,102,0,0.25)] text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all resize-none"
                  />
                </div>

                {/* Feedback Toast */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-[rgba(255,102,0,0.12)] border border-[#FF6600] text-[#FF6600] text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#FF6600]" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-300 text-red-700 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-[#FF6600] text-[#FFFFFF] font-bold text-sm shadow-xl hover:brightness-110 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
