'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GlassCard } from '@/components/common/GlassCard';
import { Cpu, Layers, Palette, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="About Me"
          title="Bridging Intelligence with Aesthetic Design"
          subtitle="A versatile developer and creator combining machine learning models with responsive full-stack architectures and visual media."
        />

        <div className="w-full">
          <GlassCard variant="light" className="p-8 sm:p-10 space-y-6 border-2 border-[#FF6600] shadow-[0_0_25px_rgba(255,102,0,0.35)] hover:shadow-[0_0_40px_rgba(255,102,0,0.5)] transition-all duration-300">
            <div className="space-y-5">

              <p className="text-[#0F172A] leading-relaxed text-base sm:text-lg font-semibold">
                I&apos;m a versatile creator and developer with a passion for emerging technology. I combine robust programming language expertise with a keen eye for aesthetic quality in graphic design. Currently, deeply focused on exploring and applying <strong className="text-[#FF6600]">Artificial Intelligence (AI)</strong> to enhance digital solutions and user experiences, striving to build the next generation of smart, engaging platforms.
              </p>

              <p className="text-[#334155] leading-relaxed text-base">
                I completed my B.Tech degree in Artificial Intelligence & Machine Learning at Srinivasa Institute of Engineering and Technology. My technical focus centers on training, evaluating, and deploying neural networks (such as <span className="text-[#FF6600] font-semibold">LSTM, ANN, and Scikit-Learn pipelines</span>) and pairing them with high-throughput backend services (<span className="text-[#FF6600] font-semibold">Node.js, Express.js, FastAPI</span>).
              </p>

              <p className="text-[#334155] leading-relaxed text-base">
                Beyond software engineering, I possess an extensive creative toolkit in <span className="text-[#FF6600] font-semibold">Adobe Premiere Pro and Photoshop</span>, allowing me to craft promotional video ads, brand identity assets, and intuitive UI/UX design systems.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[rgba(255,102,0,0.2)]">
              <div className="flex flex-col items-center text-center p-2">
                <Cpu className="w-6 h-6 text-[#FF6600] mb-1" />
                <span className="text-xs font-bold text-[#0F172A]">AI & Deep Learning</span>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <Layers className="w-6 h-6 text-[#FF6600] mb-1" />
                <span className="text-xs font-bold text-[#0F172A]">Full-Stack Systems</span>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <ShieldCheck className="w-6 h-6 text-[#FF6600] mb-1" />
                <span className="text-xs font-bold text-[#0F172A]">Video Editing</span>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};
