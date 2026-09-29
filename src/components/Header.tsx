import React, { useState } from 'react';
import { SCHOOL_IMAGES, SCHOOL_INFO, telHref, NAV_LINKS } from '../data/schoolData';
import { Crest } from './ui/primitives';
import { Phone, Mail, MapPin, User, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenApplyModal: () => void;
  onOpenPortalModal: () => void;
  onOpenTourModal: () => void;
}

/** Height of the fixed masthead, used to offset smooth-scroll targets. */
const MASTHEAD_OFFSET_PX = 104;

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenApplyModal,
  onOpenPortalModal,
  onOpenTourModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Navigate to a section.
   *
   * Every destination in {@link NAV_LINKS} now resolves to a real element id:
   * `gallery` maps to the facilities bento grid (which owns the campus
   * imagery) and `contact` maps to the campus-visit block.
   */
  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - MASTHEAD_OFFSET_PX;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-hairline">
      {/* Topmost Institutional Banner */}
      <div className="bg-primary text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between gap-y-1 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-primary-fixed">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
              <span>CBSE Affiliation No. {SCHOOL_INFO.affiliationNo}</span>
            </div>
            <span className="hidden sm:inline text-slate-500">•</span>
            <div className="hidden sm:flex items-center gap-1 text-surface-container-high">
              <MapPin className="w-3.5 h-3.5 text-secondary-fixed" />
              <span>Nilambur, Foothills of Western Ghats, Kerala</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4">
              <a
                href={telHref(SCHOOL_INFO.phonePrimary)}
                className="flex items-center gap-1 text-surface-container-high hover:text-secondary-fixed transition-colors"
              >
                <Phone className="w-3 h-3 text-secondary-fixed" />
                <span>{SCHOOL_INFO.phonePrimary}</span>
              </a>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="flex items-center gap-1 text-surface-container-high hover:text-secondary-fixed transition-colors"
              >
                <Mail className="w-3 h-3 text-secondary-fixed" />
                <span>{SCHOOL_INFO.email}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenPortalModal}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded text-white font-medium transition-colors cursor-pointer"
              title="Student and Parent Portal"
            >
              <User className="w-3.5 h-3.5 text-secondary-fixed" />
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
          <Crest src={SCHOOL_IMAGES.logoCrest} className="transition-transform group-hover:scale-105 duration-300" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-xl lg:text-2xl text-primary leading-tight tracking-tight">
              {SCHOOL_INFO.name}
            </span>
            <span className="font-label-sm text-[11px] text-secondary tracking-widest uppercase">
              {SCHOOL_INFO.tagline}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer font-medium ${
                  isActive
                    ? 'bg-surface-container text-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface'
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
            type="button"
            onClick={onOpenApplyModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-white font-bold text-xs lg:text-sm shadow-sm transition-all duration-200 tracking-wide cursor-pointer active:scale-95"
          >
            <span>Apply for Admission {SCHOOL_INFO.intake}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenPortalModal}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-colors cursor-pointer"
            aria-label="Parent Portal Account"
          >
            <User className="w-4 h-4 text-secondary-fixed" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="xl:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface border-t border-hairline px-4 py-4 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                  activeTab === link.id
                    ? 'bg-surface-container text-primary font-bold'
                    : 'text-on-surface-variant hover:bg-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-hairline flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-sm flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Apply for Admission {SCHOOL_INFO.intake}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full py-2 rounded-lg bg-primary text-white text-xs font-semibold text-center cursor-pointer"
            >
              Explore Virtual Campus Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
