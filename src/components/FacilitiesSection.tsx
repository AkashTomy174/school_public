import React, { useState } from 'react';
import {
  FACILITIES,
  FACILITY_CATEGORIES,
  type FacilityCategory,
  type FacilityItem,
} from '../data/schoolData';
import { Icon } from './ui/icons';
import { Modal, SectionHeader } from './ui/primitives';
import { CheckCircle2, MapPin, Maximize2, X } from 'lucide-react';

interface FacilitiesSectionProps {
  onOpenTourModal: () => void;
}

/**
 * Bento tile for a single facility.
 *
 * The `hero` variant spans eight of twelve columns with taller imagery; the
 * `standard` variant spans four and uses a compact footer row. Both share the
 * same content and interaction model.
 */
const FacilityCard: React.FC<{
  readonly facility: FacilityItem;
  readonly onOpen: () => void;
}> = ({ facility, onOpen }) => {
  const isHero = facility.emphasis === 'hero';

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`${
        isHero ? 'md:col-span-8' : 'md:col-span-4'
      } text-left bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group border border-hairline cursor-pointer`}
    >
      <div
        className={`relative w-full overflow-hidden bg-primary ${
          isHero ? 'h-72 md:h-80' : 'h-48 md:h-56'
        }`}
      >
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />

        <div
          className={`absolute text-white ${
            isHero ? 'bottom-4 left-5 right-5' : 'bottom-3 left-4 right-4'
          }`}
        >
          <span
            className={`${facility.tagColor} px-2.5 py-1 rounded font-label-sm text-[11px] inline-block mb-1`}
          >
            {facility.tag}
          </span>
          <h4
            className={`font-title-lg text-white ${
              isHero ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {facility.name}
          </h4>
        </div>
      </div>

      <div className={`flex-1 flex flex-col justify-between ${isHero ? 'p-6' : 'p-5'}`}>
        <p
          className={`text-on-surface-variant leading-relaxed ${
            isHero ? 'font-body-md text-sm sm:text-base' : 'font-body-sm text-xs sm:text-sm'
          }`}
        >
          {facility.description}
        </p>

        {isHero ? (
          <div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold text-primary">{facility.footerStat}</span>
            <Icon name={facility.footerIcon} className="w-5 h-5 text-secondary" />
          </div>
        ) : (
          <div className="mt-4 p-2.5 rounded bg-surface-container-low flex items-center justify-between gap-3 text-xs text-primary font-semibold">
            <span>{facility.footerStat}</span>
            <Icon name={facility.footerIcon} className="w-4 h-4 text-secondary shrink-0" />
          </div>
        )}
      </div>
    </button>
  );
};

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenTourModal }) => {
  const [activeCategory, setActiveCategory] = useState<FacilityCategory>('All');
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  /**
   * Filter labels, each paired with the button text shown in the rail. The
   * text doubles as the accessible name, so no separate labelling is needed.
   */
  const filterOptions = FACILITY_CATEGORIES.map((category) => ({
    category,
    label: category === 'All' ? 'All Spaces' : category,
  }));

  const visibleFacilities =
    activeCategory === 'All'
      ? FACILITIES
      : FACILITIES.filter((facility) => facility.category === activeCategory);

  return (
    <section id="facilities" className="w-full py-20 bg-surface-container-low border-y border-hairline">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="25-Acre Ecological Campus"
          title="World-Class Infrastructure for Mind, Body & Character"
          subtitle="Explore spaces built to spark scientific discovery, literary immersion, and athletic prowess within an unhurried natural sanctuary."
          actions={
            <button
              type="button"
              onClick={onOpenTourModal}
              className="px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-container text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-secondary-container" />
              <span>Launch Virtual 360° Tour</span>
            </button>
          }
        />

        {/* Category Filter Rail */}
        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 text-xs scrollbar-none"
          role="group"
          aria-label="Filter campus spaces by category"
        >
          {filterOptions.map(({ category, label }) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white text-on-surface-variant hover:bg-surface-container border border-hairline'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div id="gallery" className="grid grid-cols-1 md:grid-cols-12 gap-6 scroll-mt-28">
          {visibleFacilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              onOpen={() => setSelectedFacility(facility)}
            />
          ))}
        </div>

        {visibleFacilities.length === 0 && (
          <p className="py-12 text-center text-sm text-on-surface-variant">
            No spaces listed under this category yet — check back soon.
          </p>
        )}
      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <Modal
          onClose={() => setSelectedFacility(null)}
          label={selectedFacility.name}
          sizeClass="max-w-2xl"
        >
          <div className="relative h-64 w-full bg-primary">
            <img
              src={selectedFacility.image}
              alt={selectedFacility.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
            <button
              type="button"
              onClick={() => setSelectedFacility(null)}
              aria-label="Close facility details"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-5 right-5">
              <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-bold text-xs">
                {selectedFacility.tag}
              </span>
              <h3 className="font-display text-2xl text-white mt-1">{selectedFacility.name}</h3>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {selectedFacility.description}
            </p>

            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-secondary">
                Key Facility Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedFacility.specs.map((spec) => (
                  <div
                    key={spec}
                    className="p-2.5 rounded-lg bg-surface border border-hairline flex items-center gap-2 text-xs text-primary font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-tertiary-container shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-surface-container flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-secondary font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Open for parent and scholar walkthroughs
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedFacility(null);
                  onOpenTourModal();
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-container transition-colors cursor-pointer"
              >
                View in 360° Tour
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
