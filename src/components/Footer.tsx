import React from 'react';
import { SCHOOL_ADDRESS_LINES, SCHOOL_IMAGES, SCHOOL_INFO, telHref } from '../data/schoolData';
import { Crest } from './ui/primitives';
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Trees,
  Video,
} from 'lucide-react';

interface FooterProps {
  onOpenDisclosureModal: () => void;
  onOpenApplyModal: () => void;
  onSelectTab: (tab: string) => void;
}

interface FooterLink {
  readonly label: string;
  readonly onClick: () => void;
  readonly highlight?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDisclosureModal,
  onOpenApplyModal,
  onSelectTab,
}) => {
  const quickLinks: readonly FooterLink[] = [
    { label: 'About Heritage', onClick: () => onSelectTab('about') },
    { label: 'CBSE Curriculum', onClick: () => onSelectTab('academics') },
    { label: `Admissions ${SCHOOL_INFO.intake}`, onClick: () => onSelectTab('admissions') },
    { label: 'Boarding & Campus', onClick: () => onSelectTab('facilities') },
    { label: 'Mandatory CBSE Disclosure', onClick: onOpenDisclosureModal, highlight: true },
  ];

  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-16 pb-12 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-hairline">
          {/* Column 1: School Identity */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Crest src={SCHOOL_IMAGES.logoCrest} size="md" />
              <span className="font-headline-sm text-xl sm:text-2xl text-primary">
                {SCHOOL_INFO.name}
              </span>
            </div>

            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              A premier senior secondary co-educational day and residential institution fostering
              scholastic distinction and pastoral nourishment along the forested valley of Nilambur.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 bg-surface-container-high rounded text-xs text-primary font-bold">
                CBSE Affiliation #{SCHOOL_INFO.affiliationNo}
              </span>
              <span className="px-2.5 py-1 bg-tertiary-container rounded text-xs text-forest-tint font-bold flex items-center gap-1">
                <Trees className="w-3.5 h-3.5" />
                <span>Eco-Green Campus</span>
              </span>
            </div>

            {/* Communication shortcuts */}
            <div className="flex items-center gap-2.5 pt-2 text-on-surface-variant">
              <button
                type="button"
                onClick={() => onSelectTab('contact')}
                aria-label="Contact the school"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onSelectTab('gallery')}
                aria-label="View campus gallery"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <Video className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onOpenApplyModal}
                aria-label="Start an admission application"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <nav className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-title-md text-sm sm:text-base text-primary mb-1">Quick Navigation</h3>
            {quickLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.onClick}
                className={`text-left text-xs sm:text-sm transition-colors cursor-pointer ${
                  link.highlight
                    ? 'text-secondary font-bold hover:underline'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => onSelectTab('contact')}
              className="text-left text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Reach Out
            </button>
          </nav>

          {/* Column 3: Campus Contacts */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h3 className="font-title-md text-sm sm:text-base text-primary mb-1">Campus & Admissions</h3>

            <address className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant not-italic">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>
                {SCHOOL_ADDRESS_LINES.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </address>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant mt-1">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href={telHref(SCHOOL_INFO.phonePrimary)} className="hover:underline">
                {SCHOOL_INFO.phonePrimary} / 222384
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:underline">
                {SCHOOL_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>{SCHOOL_INFO.timings}</span>
            </div>
          </div>

          {/* Column 4: Campus Map Card */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h3 className="font-title-md text-sm sm:text-base text-primary mb-1">
              Nilambur Campus Map
            </h3>
            <div className="w-full h-44 rounded-xl bg-surface-container overflow-hidden relative shadow-xs flex flex-col justify-end p-3 border border-hairline">
              <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center">
                <div className="text-center px-4">
                  <Trees className="w-8 h-8 text-secondary mx-auto opacity-70" />
                  <p className="font-label-md text-xs text-on-surface-variant mt-1">
                    {SCHOOL_INFO.campusAcreage}, Nilambur
                  </p>
                  <span className="text-[10px] text-slate-500">45 km from Calicut Airport (CCJ)</span>
                </div>
              </div>

              <div className="relative z-10 bg-white/90 backdrop-blur-md p-2 rounded-lg flex items-center justify-between gap-2 shadow-xs border border-hairline">
                <span className="font-label-sm text-xs text-primary">Google Maps Pin</span>
                <a
                  href={SCHOOL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-sm text-xs text-secondary hover:underline flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SCHOOL_INFO.name}, Nilambur. Affiliated to CBSE New Delhi (#
            {SCHOOL_INFO.affiliationNo}). All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenDisclosureModal}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              CBSE Disclosure
            </button>
            <span aria-hidden="true">•</span>
            <button
              type="button"
              onClick={() => onSelectTab('contact')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Privacy & Data
            </button>
            <span aria-hidden="true">•</span>
            <button
              type="button"
              onClick={() => onSelectTab('admissions')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Hostel Bylaws
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
