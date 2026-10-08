'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-[50vh] xl:h-screen bg-gradient-to-b from-[#FF6600] via-[#FF7300] to-[#FF5500] overflow-hidden flex flex-col justify-between">
      
      {/* Dynamic Background Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18)_0%,_transparent_70%)] pointer-events-none -z-0" />

      {/* Header Overlay - Centered Vertically in Middle on Mobile, iPad & Desktop */}
      <div className="absolute inset-0 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-end text-right space-y-1.5 sm:space-y-2 md:space-y-2.5 xl:space-y-3 pointer-events-none pt-10 sm:pt-12 md:pt-14 xl:pt-0">
        
        {/* Main Title - Pure White */}
        <motion.h1 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-[#FFFFFF] tracking-tight leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] whitespace-nowrap text-right uppercase"
        >
          B. SATYA CHANDRA
        </motion.h1>

        {/* Subtitle: Web Dev & Digital Media */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
          className="inline-block bg-[rgba(255,255,255,0.96)] backdrop-blur-md px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-lg border border-white shadow-lg pointer-events-auto max-w-full"
        >
          <p className="text-[9px] sm:text-xs md:text-sm xl:text-lg font-black text-[#0F172A] tracking-[0.1em] md:tracking-[0.16em] xl:tracking-[0.24em] uppercase whitespace-nowrap">
            Web Dev & Digital Media
          </p>
        </motion.div>

        {/* Role Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.4)] text-white text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-md pointer-events-auto whitespace-nowrap"
        >
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
          <span className="whitespace-nowrap">AI/ML Engineer & Full-Stack Developer</span>
        </motion.div>

      </div>

      {/* Satya.png (Subject Animation) - Covers edge to edge to bottom on all screens */}
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
        className="absolute inset-x-0 bottom-0 top-[55px] sm:top-[60px] md:top-[65px] xl:top-[110px] w-full flex items-start justify-center z-10 overflow-hidden"
      >
        <Image
          src="/satya.png"
          alt="B. Satya Chandra"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-top w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-transform duration-300"
        />
      </motion.div>

    </section>
  );
};
