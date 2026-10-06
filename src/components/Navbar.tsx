import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { 
  Database, 
  Menu, 
  X, 
  Download, 
  MessageSquareText, 
  ChevronRight,
  PenTool,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Beranda', page: 'home' },
    { label: 'Tentang Kami', page: 'about' },
    { label: 'Layanan', page: 'services' },
    { label: 'Solusi Bisnis', page: 'solutions' },
    { label: 'Portofolio', page: 'portfolio' },
    { label: 'Artikel & Wawasan', page: 'blog' },
    { label: 'Kontak', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-[#C59B27]/30 py-2.5 sm:py-3'
          : 'bg-[#0F172A] border-b border-[#C59B27]/20 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand with Dark Gold Emblem */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#E6C564] via-[#C59B27] to-[#94721C] flex items-center justify-center text-slate-950 shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform duration-200">
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 leading-tight">
                <span>DATAVORA</span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-amber-500/15 text-[#E6C564] px-1.5 py-0.5 rounded border border-[#C59B27]/40">
                  INDONESIA
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-medium text-slate-400">
                Turning Data Into Business Solutions
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-[#E6C564] bg-white/5 font-bold shadow-inner'
                      : 'text-slate-300 hover:text-[#E6C564] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2">
            
            {/* Primary Discuss Project CTA with Dark Gold Gradient */}
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-110 shadow-md shadow-amber-900/30 transition-all duration-150 active:scale-95"
            >
              <MessageSquareText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              <span>Konsultasi Proyek</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 lg:hidden">

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-200 hover:text-amber-300 hover:bg-slate-800 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-300" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-amber-500/20 bg-[#0F172A] px-4 pt-2.5 pb-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-0.5 mb-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-left transition-colors ${
                  currentPage === item.page
                    ? 'text-[#E6C564] bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B]"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Mulai Konsultasi Proyek</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
