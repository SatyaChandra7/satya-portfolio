'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GlassCard } from '@/components/common/GlassCard';
import { educationData, certificationsData } from '@/data/education';
import { CertificationItem } from '@/types';
import { GraduationCap, Award, Calendar, CheckCircle2, ExternalLink, X, Eye } from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="experience" className="py-24 relative">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#FF6600] opacity-15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Academic & Certifications"
          title="Education & Credentials"
          subtitle="Formal academic degrees in Artificial Intelligence & Machine Learning alongside verified industry certifications."
        />

        {/* Two-Column Grid: Left Education Timeline, Right Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Education Timeline (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-[rgba(255,102,0,0.12)] border border-[rgba(255,102,0,0.3)] text-[#FF6600]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Education Journey</span>
            </h3>

            <div className="relative border-l-2 border-[rgba(255,102,0,0.35)] ml-4 space-y-8 pl-6">
              {educationData.map((edu) => (
                <div key={edu.degree} className="relative group">
                  
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#FF6600] border-2 border-white shadow-md group-hover:scale-125 transition-transform" />

                  <GlassCard variant="light" className="p-6 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[rgba(255,102,0,0.12)] text-[#FF6600] text-xs font-bold">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-[#FF6600] bg-[rgba(255,102,0,0.15)] px-2 py-0.5 rounded border border-[rgba(255,102,0,0.3)]">
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#0F172A]">
                      {edu.degree}
                    </h4>

                    <p className="text-xs text-[#64748B] font-semibold">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-[#334155] leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="pt-2 border-t border-[rgba(255,102,0,0.15)] space-y-1">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#FF6600] font-medium">
                          <CheckCircle2 className="w-3 h-3 text-[#FF6600] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Right Verified Certifications Grid (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-[rgba(255,102,0,0.12)] border border-[rgba(255,102,0,0.3)] text-[#FF6600]">
                <Award className="w-5 h-5" />
              </div>
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert) => (
                <GlassCard
                  key={cert.id}
                  variant="light"
                  className="p-5 flex flex-col justify-between group hover:border-[#FF6600] transition-colors shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] uppercase font-bold text-[#FF6600] tracking-wider block bg-[rgba(255,102,0,0.1)] px-2 py-0.5 rounded border border-[rgba(255,102,0,0.2)]">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#FF6600] transition-colors leading-snug">
                      {cert.title}
                    </h4>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/90 border border-[rgba(255,102,0,0.18)] text-[10px] text-[#0F172A] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[rgba(255,102,0,0.15)] flex items-center justify-between">
                    <span className="text-[11px] text-[#64748B] font-medium">Verified Credential</span>
                    {cert.image ? (
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="px-3 py-1.5 rounded-lg bg-[#FF6600] text-white hover:bg-[#E65C00] font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                    ) : (
                      <span className="text-[10px] font-bold text-[#64748B] bg-slate-100 px-2 py-1 rounded">
                        Issuer Verified
                      </span>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Modal Inspector */}
      {selectedCert && selectedCert.image && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xl animate-in fade-in duration-200 p-4 flex items-center justify-center"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl my-auto glass-panel bg-white/95 p-6 rounded-2xl border-2 border-[rgba(255,102,0,0.4)] shadow-2xl text-[#0F172A]"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-[#0F172A] hover:bg-[#FF6600] hover:text-[#FFFFFF] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">{selectedCert.issuer}</span>
              <h3 className="text-xl font-bold text-[#0F172A]">{selectedCert.title}</h3>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[rgba(255,102,0,0.2)]">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
