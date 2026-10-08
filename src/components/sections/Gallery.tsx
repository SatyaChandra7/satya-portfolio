'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GlassCard } from '@/components/common/GlassCard';
import { galleryData } from '@/data/gallery';
import { MediaItem } from '@/types';
import { 
  X, 
  Film, 
  Image as ImageIcon, 
  ChevronLeft, 
  ChevronRight,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery: React.FC = () => {
  const [modalMode, setModalMode] = useState<'Posters' | 'Videos' | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const postersData = galleryData.filter((item) => item.category === 'Graphic Design' || !item.videoUrl);
  const videosData = galleryData.filter((item) => item.videoUrl || item.category === 'Video Edits');

  const activeList = modalMode === 'Posters' ? postersData : modalMode === 'Videos' ? videosData : [];
  const activeMedia = activeList[currentIndex] || null;

  // Reset loading state whenever active index or media changes
  useEffect(() => {
    setIsImageLoading(true);
  }, [currentIndex, modalMode]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalMode]);

  const handleNext = () => {
    if (activeList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % activeList.length);
  };

  const handlePrev = () => {
    if (activeList.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + activeList.length) % activeList.length);
  };

  // Keyboard navigation (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalMode) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setModalMode(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalMode, currentIndex, activeList.length]);

  const openModal = (mode: 'Posters' | 'Videos', index = 0) => {
    setModalMode(mode);
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-24 relative">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FF6600] opacity-15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Creative Media Showcase"
          title="Graphic Design & Video Editing"
          subtitle="Click the showcase buttons below to launch the interactive swipe slider for Graphic Design Posters and Video Edits."
        />

        {/* Main Action Cards (Showcase Triggers on Main Page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Graphic Design Posters */}
          <GlassCard
            variant="light"
            interactive={true}
            onClick={() => openModal('Posters', 0)}
            className="p-8 sm:p-10 flex flex-col justify-between items-center text-center space-y-6 border-2 border-[rgba(255,102,0,0.3)] hover:border-[#FF6600] shadow-xl hover:shadow-[0_15px_40px_rgba(255,102,0,0.3)] transition-all group"
          >
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(255,102,0,0.12)] border-2 border-[#FF6600] text-[#FF6600] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <ImageIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#0F172A] group-hover:text-[#FF6600] transition-colors">
                  Graphic Design Posters
                </h3>
                <span className="inline-block mt-1 px-3 py-1 rounded-full bg-[#FF6600]/15 text-[#FF6600] text-xs font-bold border border-[#FF6600]/30">
                  {postersData.length} Design Assets
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed max-w-xs">
                Interactive swipe showcase of festival artwork, app launch posters, brand emblem logos, and digital designs created in Photoshop.
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                openModal('Posters', 0);
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-[#FF6600] text-white font-extrabold text-sm shadow-md hover:bg-[#E65C00] transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Launch Posters Swipe Showcase</span>
            </button>
          </GlassCard>

          {/* Card 2: Video Edits */}
          <GlassCard
            variant="light"
            interactive={true}
            onClick={() => openModal('Videos', 0)}
            className="p-8 sm:p-10 flex flex-col justify-between items-center text-center space-y-6 border-2 border-[rgba(255,102,0,0.3)] hover:border-[#FF6600] shadow-xl hover:shadow-[0_15px_40px_rgba(255,102,0,0.3)] transition-all group"
          >
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(255,102,0,0.12)] border-2 border-[#FF6600] text-[#FF6600] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Film className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#0F172A] group-hover:text-[#FF6600] transition-colors">
                  Video Edits & Promos
                </h3>
                <span className="inline-block mt-1 px-3 py-1 rounded-full bg-[#FF6600]/15 text-[#FF6600] text-xs font-bold border border-[#FF6600]/30">
                  {videosData.length} Video Advertisement
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed max-w-xs">
                High-impact commercial video promo advertisement engineered with motion graphics and sound design in Premiere Pro.
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                openModal('Videos', 0);
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-[#FF6600] text-white font-extrabold text-sm shadow-md hover:bg-[#E65C00] transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Film className="w-4 h-4" />
              <span>Launch Video Showcase</span>
            </button>
          </GlassCard>

        </div>

      </div>

      {/* SWIPE CAROUSEL SHOWCASE MODAL */}
      <AnimatePresence>
        {modalMode && activeMedia && (
          <div 
            onClick={() => setModalMode(null)}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200 p-3 sm:p-6 flex items-center justify-center"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl my-auto glass-panel bg-[#0F172A]/95 border-2 border-[#FF6600] p-4 sm:p-6 rounded-2xl shadow-2xl text-white flex flex-col justify-between"
            >
              
              {/* Top Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="px-3 py-1 rounded-full bg-[#FF6600] text-white text-xs font-extrabold">
                    {modalMode === 'Posters' ? 'Graphic Design Showcase' : 'Video Edit Showcase'}
                  </div>
                  <span className="text-xs font-mono text-white/70">
                    {currentIndex + 1} / {activeList.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalMode(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#FF6600] text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Swappable Viewer Area */}
              <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
                
                {/* Left Swipe Button */}
                {activeList.length > 1 && (
                  <button
                    onClick={handlePrev}
                    className="absolute left-1 sm:left-3 z-20 p-2 sm:p-3 rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#FF6600] transition-colors shadow-lg cursor-pointer"
                    aria-label="Previous Poster"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}

                {/* Main Media Display with Drag/Swipe gesture */}
                <motion.div
                  key={activeMedia.id}
                  initial={{ opacity: 0, scale: 0.96, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -30 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) {
                      handleNext();
                    } else if (info.offset.x > 60) {
                      handlePrev();
                    }
                  }}
                  className="relative w-full max-h-[65vh] flex items-center justify-center rounded-xl overflow-hidden cursor-grab active:cursor-grabbing px-6 sm:px-10"
                >
                  {/* Loading Spinner */}
                  {isImageLoading && !activeMedia.videoUrl && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-xl">
                      <Loader2 className="w-8 h-8 text-[#FF6600] animate-spin" />
                    </div>
                  )}

                  {activeMedia.videoUrl ? (
                    <video
                      src={activeMedia.videoUrl}
                      controls
                      autoPlay
                      onLoadedData={() => setIsImageLoading(false)}
                      className="max-h-[65vh] w-auto max-w-full rounded-xl shadow-2xl"
                    />
                  ) : (
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[65vh]">
                      <Image
                        src={activeMedia.highResUrl || activeMedia.thumbnail}
                        alt={activeMedia.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        onLoad={() => setIsImageLoading(false)}
                        className={`object-contain rounded-xl transition-opacity duration-300 ${
                          isImageLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        priority
                      />
                    </div>
                  )}
                </motion.div>

                {/* Right Swipe Button */}
                {activeList.length > 1 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-1 sm:left-auto sm:right-3 z-20 p-2 sm:p-3 rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#FF6600] transition-colors shadow-lg cursor-pointer"
                    aria-label="Next Poster"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}

              </div>

              {/* Active Media Description */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{activeMedia.title}</span>
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-2 mt-0.5 max-w-2xl">
                    {activeMedia.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {activeMedia.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-[#FF6600]/20 border border-[#FF6600]/40 text-[10px] text-[#FF8533] font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Thumbnail Strip Tracker */}
              {activeList.length > 1 && (
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {activeList.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'border-[#FF6600] scale-110 shadow-[0_0_15px_rgba(255,102,0,0.8)]'
                          : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                      }`}
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
