import React from 'react';
import { SCHOOL_INFO, telHref } from '../data/schoolData';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';

interface CampusVisitSectionProps {
  readonly onOpenApplyModal: () => void;
}

/**
 * Closing call to action: invites prospective families to book a walkthrough of
 * the Nilambur campus. Anchored at `#contact` for the masthead navigation.
 */
export const CampusVisitSection: React.FC<CampusVisitSectionProps> = ({ onOpenApplyModal }) => (
  <section id="contact" className="w-full py-16 bg-surface border-t border-hairline scroll-mt-28">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-hairline flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="font-label-sm text-xs uppercase tracking-widest text-secondary">
            Plan Your Nilambur Campus Visit
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary mt-1">
            Experience the Foothill Sanctuary Firsthand
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
            We welcome prospective parents and scholars for guided walking tours of our 25-acre
            grounds, residential hostels, and science laboratories every Monday through Saturday.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold text-primary">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-secondary" />
              <span>{SCHOOL_INFO.tourTimings}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Nilambur, Malappuram (Kerala)</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <button
            type="button"
            onClick={onOpenApplyModal}
            className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-container shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Campus Tour Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={telHref(SCHOOL_INFO.phonePrimary)}
            className="w-full sm:w-auto px-6 py-3.5 border border-outline-variant hover:border-primary text-primary rounded-lg font-bold text-sm bg-white transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-secondary" />
            <span>Call Admissions Desk</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);