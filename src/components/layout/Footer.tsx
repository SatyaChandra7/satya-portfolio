'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-12 border-t border-[rgba(255,102,0,0.15)] bg-[#F8FAFC] text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6600] border border-[#FFFFFF] flex items-center justify-center font-bold text-sm text-[#FFFFFF]">
                SC
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">B. Satya Chandra</h3>
                <p className="text-xs text-[#FF6600] font-semibold">AI/ML Engineer & Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-xs text-[#334155] font-medium leading-relaxed max-w-md">
              Merging deep learning models with full-stack web applications and aesthetic glassmorphism UI design systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/satya-chandra-a6169029a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-[rgba(255,102,0,0.25)] text-[#0F172A] hover:text-[#FF6600] hover:border-[#FF6600] shadow-xs transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/SatyaChandra7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-[rgba(255,102,0,0.25)] text-[#0F172A] hover:text-[#FF6600] hover:border-[#FF6600] shadow-xs transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:satyachandra722@gmail.com"
                className="p-2 rounded-lg bg-white border border-[rgba(255,102,0,0.25)] text-[#0F172A] hover:text-[#FF6600] hover:border-[#FF6600] shadow-xs transition-all cursor-pointer"
                aria-label="Email Satya Chandra"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Declaration Statement (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">
              Declaration Statement
            </h4>
            <p className="text-xs text-[#0F172A] font-medium leading-relaxed italic bg-white p-4 rounded-xl border border-[rgba(255,102,0,0.25)] shadow-xs">
              "I hereby declare that all furnished information and project records presented on this platform are accurate to the best of my knowledge."
            </p>
            <div className="text-[11px] text-[#FF6600] font-extrabold">
              — B. Satya Chandra (Mummidivaram)
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
