import React, { useState } from 'react';
import { SCHOOL_IMAGES, SCHOOL_INFO } from '../data/schoolData';
import { Phone, Mail, MapPin, User, Menu, X, ArrowRight, ShieldCheck, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenApplyModal: () => void;
  onOpenPortalModal: () => void;
  onOpenTourModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenApplyModal,
  onOpenPortalModal,
  onOpenTourModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);

    // If on home page, smoothly scroll to corresponding element if present
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f5]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e8e5dd]">
      {/* Topmost Institutional Banner */}
      <div className="bg-[#00162d] text-white py-1.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between gap-y-1 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-[#d2e4ff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea7] animate-pulse"></span>
              <span>CBSE Affiliation No. {SCHOOL_INFO.affiliationNo}</span>
            </div>
            <span className="hidden sm:inline text-slate-500">•</span>
            <div className="hidden sm:flex items-center gap-1 text-[#e9e8e4]">
              <MapPin className="w-3.5 h-3.5 text-[#ffdea7]" />
              <span>Nilambur, Foothills of Western Ghats, Kerala</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${SCHOOL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center gap-1 text-[#e9e8e4] hover:text-[#ffdea7] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#ffdea7]" />
                <span>{SCHOOL_INFO.phonePrimary}</span>
              </a>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="flex items-center gap-1 text-[#e9e8e4] hover:text-[#ffdea7] transition-colors"
              >
                <Mail className="w-3 h-3 text-[#ffdea7]" />
                <span>{SCHOOL_INFO.email}</span>
              </a>
            </div>

            <button
              onClick={onOpenPortalModal}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded text-white font-medium transition-colors cursor-pointer"
              title="Student and Parent Portal"
            >
              <User className="w-3.5 h-3.5 text-[#ffdea7]" />
              <span>Student/Parent Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Crest & Wordmark */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          <img
            src={SCHOOL_IMAGES.logoCrest}
            alt="Peevees Public School Crest Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-xl lg:text-2xl text-[#00162d] leading-tight font-bold tracking-tight">
              Peevees Public School
            </span>
            <span className="font-label-sm text-[11px] text-[#7c5800] tracking-widest uppercase font-semibold">
              Day-cum-Boarding • Nilambur, Est. 1993
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer font-medium ${
                  isActive
                    ? 'bg-[#efeeea] text-[#00162d] font-bold shadow-xs'
                    : 'text-[#43474d] hover:text-[#00162d] hover:bg-[#faf9f5]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 lg:gap-4">
          <button
            onClick={onOpenApplyModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#ffc656] hover:bg-[#7c5800] text-[#745200] hover:text-white font-bold text-xs lg:text-sm shadow-sm transition-all duration-200 tracking-wide cursor-pointer active:scale-95"
          >
            <span>Apply for Admission 2025–26</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenPortalModal}
            className="w-9 h-9 rounded-full bg-[#00162d] text-white flex items-center justify-center hover:bg-[#0f2b48] transition-colors cursor-pointer"
            aria-label="Parent Portal Account"
          >
            <User className="w-4 h-4 text-[#ffdea7]" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#00162d] hover:bg-[#efeeea] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf9f5] border-t border-[#e8e5dd] px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === link.id
                    ? 'bg-[#efeeea] text-[#00162d] font-bold'
                    : 'text-[#43474d] hover:bg-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#e8e5dd] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-2.5 rounded-lg bg-[#ffc656] text-[#745200] font-bold text-sm text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Apply for Admission 2025–26</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full py-2 rounded-lg bg-[#00162d] text-white text-xs font-semibold text-center"
            >
              Explore Virtual Campus Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
