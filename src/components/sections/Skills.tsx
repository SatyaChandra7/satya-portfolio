'use client';

import React, { useRef } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GlassCard } from '@/components/common/GlassCard';
import { skillsData } from '@/data/skills';
import { Brain, Code, Database, Palette, Sparkles, Fan } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-white" />,
  Code: <Code className="w-6 h-6 text-white" />,
  Database: <Database className="w-6 h-6 text-white" />,
  Palette: <Palette className="w-6 h-6 text-white" />,
};

interface SkillCardItemProps {
  category: typeof skillsData[0] & { side: 'left' | 'right' };
  isLeft: boolean;
}

const SkillCardItem: React.FC<SkillCardItemProps> = ({ category, isLeft }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"]
  });

  // 3D Scroll Rotation - Fan Rotation Effect
  const fanRotate = useTransform(scrollYProgress, [0, 1], [0, 540]);
  const cardRotateY = useTransform(scrollYProgress, [0, 0.5, 1], isLeft ? [-30, 0, 30] : [30, 0, -30]);
  const cardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);

  return (
    <div 
      ref={cardRef}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
      style={{ perspective: 1200 }}
    >
      
      {/* 3D Rotating Fan Badge on Central Line */}
      <motion.div 
        style={{ rotateZ: fanRotate, rotateY: fanRotate }}
        className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-2xl bg-[#FF6600] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,102,0,0.9)] border-2 border-white z-20 cursor-pointer"
      >
        <Fan className="w-5 h-5 text-white" />
      </motion.div>

      {/* 3D Rotating Glass Card - Orange Board & White Text */}
      <motion.div 
        style={{ 
          rotateY: cardRotateY, 
          rotateX: cardRotateX, 
          scale: cardScale,
          opacity: cardOpacity
        }}
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isLeft ? 'md:pr-10' : 'md:pl-10'
        }`}
      >
        <GlassCard
          variant="orange"
          className="p-6 space-y-4 rounded-2xl group text-white"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.div 
                style={{ rotateZ: fanRotate }}
                className="w-10 h-10 rounded-xl bg-white/20 border border-white/40 flex items-center justify-center text-white flex-shrink-0 shadow-md backdrop-blur-xs"
              >
                {iconMap[category.iconName]}
              </motion.div>
              <div>
                <h4 className="text-base font-extrabold text-white tracking-tight">
                  {category.title}
                </h4>
                <p className="text-xs text-white/90 font-medium">
                  {category.description}
                </p>
              </div>
            </div>

            <span className="text-white font-extrabold text-[11px] px-3 py-1 rounded-full bg-white/20 border border-white/40 whitespace-nowrap shadow-xs backdrop-blur-xs">
              {category.skills.length} Skill{category.skills.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/30">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/20 border border-white/40 text-white shadow-md hover:bg-white/30 hover:scale-105 transition-all backdrop-blur-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-white font-extrabold">{skill.name}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

    </div>
  );
};

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Ordered vertically: Programming Language (Left), Web Development (Right), Editing (Left), Graphic Designing (Right)
  const progLang = skillsData.find(s => s.title === 'Programming Language');
  const webDev = skillsData.find(s => s.title === 'Web Development');
  const editing = skillsData.find(s => s.title === 'Editing');
  const graphicDes = skillsData.find(s => s.title === 'Graphic Designing');

  const timelineItems = [
    ...(progLang ? [{ ...progLang, side: 'left' as const }] : []),
    ...(webDev ? [{ ...webDev, side: 'right' as const }] : []),
    ...(editing ? [{ ...editing, side: 'left' as const }] : []),
    ...(graphicDes ? [{ ...graphicDes, side: 'right' as const }] : []),
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6600] opacity-10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF8533] opacity-10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Technical Competencies"
          title="Skills & Technology Stack"
          subtitle="Comprehensive overview of tools, programming languages, neural network frameworks, and design software."
        />

        {/* Single Central Vertical Timeline with 3D Fan Rotation */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 border-l-2 border-[#FF6600]/40 z-0" />

          <div className="space-y-12 relative z-10">
            {timelineItems.map((category) => (
              <SkillCardItem 
                key={category.title}
                category={category}
                isLeft={category.side === 'left'}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
