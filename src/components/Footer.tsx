import React from 'react';
import { SCHOOL_IMAGES, SCHOOL_INFO } from '../data/schoolData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  Video,
  Bell,
  Trees,
  ShieldCheck,
} from 'lucide-react';

interface FooterProps {
  onOpenDisclosureModal: () => void;
  onOpenApplyModal: () => void;
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDisclosureModal,
  onOpenApplyModal,
  onSelectTab,
}) => {
  return (
    <footer className="w-full bg-[#f4f4f0] text-[#1b1c1a] pt-16 pb-12 border-t border-[#e8e5dd]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#e8e5dd]">
          {/* Column 1: School Identity */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={SCHOOL_IMAGES.logoCrest}
                alt="Peevees Public School Crest Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-headline-sm text-xl sm:text-2xl text-[#00162d] font-bold">
                Peevees Public School
              </span>
            </div>

            <p className="font-body-md text-xs sm:text-sm text-[#43474d] leading-relaxed">
              A premier senior secondary co-educational day and residential institution fostering
              scholastic distinction and pastoral nourishment along the forested valley of Nilambur.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 bg-[#e9e8e4] rounded text-xs text-[#00162d] font-bold">
                CBSE Affiliation #{SCHOOL_INFO.affiliationNo}
              </span>
              <span className="px-2.5 py-1 bg-[#003119] rounded text-xs text-[#aef2c2] font-bold flex items-center gap-1">
                <Trees className="w-3.5 h-3.5" />
                <span>Eco-Green Campus</span>
              </span>
            </div>

            {/* Social communication icons */}
            <div className="flex items-center gap-2.5 pt-2 text-[#43474d]">
              <a
                href="#contact"
                aria-label="School Communication Hub"
                className="w-9 h-9 rounded-full bg-[#efeeea] flex items-center justify-center hover:bg-[#00162d] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <button
                onClick={() => onSelectTab('facilities')}
                aria-label="Media and Videos"
                className="w-9 h-9 rounded-full bg-[#efeeea] flex items-center justify-center hover:bg-[#00162d] hover:text-white transition-colors cursor-pointer"
              >
                <Video className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenApplyModal}
                aria-label="News and Notifications"
                className="w-9 h-9 rounded-full bg-[#efeeea] flex items-center justify-center hover:bg-[#00162d] hover:text-white transition-colors cursor-pointer"
              >
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-title-md text-sm sm:text-base text-[#00162d] font-bold mb-1">
              Quick Navigation
            </h3>
            <button
              onClick={() => onSelectTab('about')}
              className="text-left text-xs sm:text-sm text-[#43474d] hover:text-[#00162d] transition-colors cursor-pointer"
            >
              About Heritage
            </button>
            <button
              onClick={() => onSelectTab('academics')}
              className="text-left text-xs sm:text-sm text-[#43474d] hover:text-[#00162d] transition-colors cursor-pointer"
            >
              CBSE Curriculum
            </button>
            <button
              onClick={() => onSelectTab('admissions')}
              className="text-left text-xs sm:text-sm text-[#43474d] hover:text-[#00162d] transition-colors cursor-pointer"
            >
              Admissions 2025–26
            </button>
            <button
              onClick={() => onSelectTab('facilities')}
              className="text-left text-xs sm:text-sm text-[#43474d] hover:text-[#00162d] transition-colors cursor-pointer"
            >
              Boarding & Campus
            </button>
            <button
              onClick={onOpenDisclosureModal}
              className="text-left text-xs sm:text-sm text-[#7c5800] font-bold hover:underline cursor-pointer"
            >
              Mandatory CBSE Disclosure
            </button>
            <a
              href="#contact"
              className="text-left text-xs sm:text-sm text-[#43474d] hover:text-[#00162d] transition-colors"
            >
              Reach Out
            </a>
          </div>

          {/* Column 3: Campus & Admissions Contacts */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h3 className="font-title-md text-sm sm:text-base text-[#00162d] font-bold mb-1">
              Campus & Admissions
            </h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-[#43474d]">
              <MapPin className="w-4 h-4 text-[#00162d] mt-0.5 shrink-0" />
              <span>
                Peevees Public School,
                <br />
                Nilambur, Malappuram District,
                <br />
                Kerala - 679329, India
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#43474d] mt-1">
              <Phone className="w-4 h-4 text-[#00162d] shrink-0" />
              <a
                href={`tel:${SCHOOL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="hover:underline"
              >
                {SCHOOL_INFO.phonePrimary} / 222384
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#43474d]">
              <Mail className="w-4 h-4 text-[#00162d] shrink-0" />
              <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:underline">
                {SCHOOL_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#43474d]">
              <Clock className="w-4 h-4 text-[#00162d] shrink-0" />
              <span>{SCHOOL_INFO.timings}</span>
            </div>
          </div>

          {/* Column 4: Nilambur Campus Map Card */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h3 className="font-title-md text-sm sm:text-base text-[#00162d] font-bold mb-1">
              Nilambur Campus Map
            </h3>
            <div className="w-full h-44 rounded-xl bg-[#efeeea] overflow-hidden relative shadow-xs flex flex-col justify-end p-3 border border-[#e8e5dd]">
              <div className="absolute inset-0 bg-[#e9e8e4] flex items-center justify-center">
                <div className="text-center px-4">
                  <Trees className="w-8 h-8 text-[#7c5800] mx-auto opacity-70" />
                  <p className="font-label-md text-xs text-[#43474d] font-medium mt-1">
                    35-Acre Foothill Campus, Nilambur
                  </p>
                  <span className="text-[10px] text-slate-500">
                    45 km from Calicut Airport (CCJ)
                  </span>
                </div>
              </div>

              <div className="relative z-10 bg-white/90 backdrop-blur-md p-2 rounded-lg flex items-center justify-between shadow-xs border border-[#e8e5dd]">
                <span className="font-label-sm text-xs text-[#00162d] font-semibold">
                  Google Maps Pin
                </span>
                <a
                  href="https://maps.google.com/?q=Peevees+Public+School+Nilambur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-sm text-xs text-[#7c5800] hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#43474d]">
          <p className="text-center sm:text-left">
            © 2025 Peevees Public School, Nilambur. Affiliated to CBSE New Delhi (#
            {SCHOOL_INFO.affiliationNo}). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDisclosureModal}
              className="hover:text-[#00162d] transition-colors cursor-pointer"
            >
              CBSE Disclosure
            </button>
            <span>•</span>
            <button
              onClick={() => alert('Peevees Public School complies with student data privacy protocols.')}
              className="hover:text-[#00162d] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => alert('Terms of Service and hostel bylaws available upon enrollment.')}
              className="hover:text-[#00162d] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
