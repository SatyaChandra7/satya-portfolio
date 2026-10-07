'use client';

import React, { useRef } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'forest' | 'orange';
  interactive?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'light',
  interactive = true,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set spotlight mouse variables
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Calculate 3D tilt angles based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 12; // Max 12deg tilt
    const rotateY = ((x - centerX) / centerX) * 12;  // Max 12deg tilt

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeave = () => {
    if (!interactive || !cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    cardRef.current.style.transition = 'transform 0.5s ease-out';
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'orange':
        return 'glass-panel-orange text-white';
      case 'dark':
        return 'bg-[rgba(255,255,255,0.92)] border-[rgba(255,102,0,0.2)] text-[#0F172A] shadow-lg';
      case 'forest':
        return 'bg-[rgba(255,255,255,0.96)] border-[rgba(255,102,0,0.25)] text-[#0F172A] shadow-lg';
      case 'light':
      default:
        return 'bg-[rgba(255,255,255,0.85)] border-[rgba(255,102,0,0.18)] text-[#0F172A] shadow-md';
    }
  };

  const panelClass = variant === 'orange' ? 'glass-panel-orange' : 'glass-panel';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      onClick={onClick}
      className={`${panelClass} ${getVariantStyles()} ${interactive ? 'glass-card-interactive cursor-pointer' : ''
        } ${className}`}
    >
      {children}
    </div>
  );
};
