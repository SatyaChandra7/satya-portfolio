'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="absolute top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <nav className={`w-full rounded-full px-3 sm:px-4 py-2 transition-all duration-300 shadow-xl backdrop-blur-md ${
          scrolled
            ? 'bg-[rgba(255,255,255,0.25)] border border-[rgba(255,255,255,0.45)] shadow-2xl'
            : 'bg-[rgba(255,255,255,0.18)] border border-[rgba(255,255,255,0.35)]'
        }`}>

          {/* Desktop Navigation Links - Perfectly Balanced 7-Column Grid */}
          <div className="hidden md:grid grid-cols-7 w-full items-center justify-items-stretch gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`w-full py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 text-center flex items-center justify-center whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-md font-bold'
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Bar */}
          <div className="flex md:hidden items-center justify-end px-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-white hover:bg-white/20 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl glass-nav bg-white/95 border border-[rgba(255,102,0,0.3)] shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#0F172A] hover:bg-[rgba(255,102,0,0.12)] hover:text-[#FF6600] transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <Sparkles className="w-4 h-4 text-[#FF6600] opacity-50" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
