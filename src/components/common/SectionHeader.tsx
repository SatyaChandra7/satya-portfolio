import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(255,102,0,0.2)] border border-[rgba(255,102,0,0.5)] text-[#FF8533] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm ${centered ? 'mx-auto' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse"></span>
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
