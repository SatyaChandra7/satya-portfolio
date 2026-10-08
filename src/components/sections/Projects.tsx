'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GlassCard } from '@/components/common/GlassCard';
import { projectsData } from '@/data/projects';
import { Project } from '@/types';
import { 
  ExternalLink, 
  Github, 
  Play, 
  X, 
  Layers, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3, 
  FileCode2,
  Sparkles
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Lock body scroll when Case Study modal or Video modal is open
  useEffect(() => {
    if (selectedProject || playingVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, playingVideo]);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#FF6600] opacity-20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#FF8533] opacity-20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Featured Engineering & Research"
          title="Case Studies & Proof of Work"
          subtitle="In-depth breakdown of full-stack production platforms, real-estate marketplaces, and deep learning forecasting systems."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <GlassCard
              key={project.id}
              variant="light"
              interactive={true}
              className="flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl border-b border-[rgba(255,102,0,0.15)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FF6600] text-[#FFFFFF] text-xs font-bold shadow-md">
                    {project.category}
                  </div>

                  {/* Video Badge if available */}
                  {project.videoUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideo(project.videoUrl!);
                      }}
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF6600] text-[#FFFFFF] text-xs font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                      <Play className="w-3.5 h-3.5 fill-[#FFFFFF]" />
                      <span>Watch Demo Video</span>
                    </button>
                  )}
                </div>

                {/* Project Info Header */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#FF6600] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#FF6600] font-bold">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[#334155] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/90 border border-[rgba(255,102,0,0.2)] text-[11px] font-mono text-[#0F172A] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 rounded-md bg-[rgba(255,102,0,0.15)] text-[11px] font-mono text-[#FF6600] font-bold">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 border-t border-[rgba(255,102,0,0.12)] flex items-center justify-between gap-3 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3.5 rounded-xl bg-[#FF6600] text-white font-bold text-xs hover:bg-[#E65C00] transition-all flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Visit Live</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-[rgba(255,102,0,0.12)] text-[#FF6600] border border-[rgba(255,102,0,0.3)] font-bold text-xs hover:bg-[#FF6600] hover:text-[#FFFFFF] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>
              </div>

            </GlassCard>
          ))}
        </div>

      </div>

      {/* Case Study Modal Window */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xl animate-in fade-in duration-200 p-4 sm:p-6 flex items-center justify-center"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-auto glass-panel bg-white/95 border-2 border-[rgba(255,102,0,0.4)] p-6 sm:p-8 rounded-2xl shadow-2xl text-[#0F172A]"
          >
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-[#FF6600] hover:text-[#FFFFFF] text-[#0F172A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF6600] text-[#FFFFFF] text-xs font-bold">
                {selectedProject.category} Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-[#FF6600] font-bold">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Case Study Image / Video Banner */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden my-6 border border-[rgba(255,102,0,0.2)]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Case Study Content Grid */}
            <div className="space-y-6 text-sm">
              
              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-[rgba(255,102,0,0.08)] border border-[rgba(255,102,0,0.2)]">
                <h4 className="font-bold text-[#FF6600] mb-2 text-base flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Problem Statement & Challenge
                </h4>
                <p className="text-[#334155] leading-relaxed">
                  {selectedProject.fullCaseStudy.problemStatement}
                </p>
              </div>

              {/* Architecture Overview */}
              <div className="p-4 rounded-xl bg-orange-50 border border-[rgba(255,102,0,0.2)]">
                <h4 className="font-bold text-[#FF6600] mb-2 text-base flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  System Architecture & Solution Design
                </h4>
                <p className="text-[#334155] leading-relaxed">
                  {selectedProject.fullCaseStudy.architectureOverview}
                </p>
              </div>

              {/* Metrics Grid */}
              {selectedProject.fullCaseStudy.metrics && (
                <div>
                  <h4 className="font-bold text-[#0F172A] mb-3 text-base flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#FF6600]" />
                    Key Performance Metrics & Benchmarks
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.fullCaseStudy.metrics.map((m) => (
                      <div key={m.label} className="p-3.5 rounded-xl bg-white border border-[rgba(255,102,0,0.2)] shadow-sm text-center">
                        <div className="text-xl font-extrabold text-[#FF6600]">{m.value}</div>
                        <div className="text-xs text-[#64748B] mt-0.5 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div>
                <h4 className="font-bold text-[#0F172A] mb-3 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                  Key Engineering Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.fullCaseStudy.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[rgba(255,102,0,0.18)] shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#FF6600] mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-[#334155] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="font-bold text-[#0F172A] mb-3 text-base flex items-center gap-2">
                  <FileCode2 className="w-4 h-4 text-[#FF6600]" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[rgba(255,102,0,0.12)] border border-[rgba(255,102,0,0.3)] text-xs font-mono text-[#FF6600] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom CTAs */}
            <div className="mt-8 pt-4 border-t border-[rgba(255,102,0,0.15)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-xs font-bold text-[#0F172A] hover:bg-[#FF6600] hover:text-[#FFFFFF] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF6600] text-[#FFFFFF] text-xs font-bold hover:brightness-110 transition-all shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Live Platform</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A]"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl glass-panel bg-[#120904] p-4 rounded-2xl border-[rgba(255,102,0,0.4)] shadow-2xl">
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#FF8533]"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={playingVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-xl shadow-lg max-h-[80vh]"
            />
          </div>
        </div>
      )}

    </section>
  );
};
