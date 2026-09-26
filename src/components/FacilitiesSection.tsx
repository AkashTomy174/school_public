import React, { useState } from 'react';
import { FACILITIES, FacilityItem, SCHOOL_IMAGES } from '../data/schoolData';
import {
  FlaskConical,
  Trees,
  Home,
  BookOpen,
  Trophy,
  MapPin,
  Shield,
  Maximize2,
  X,
  CheckCircle2,
} from 'lucide-react';

interface FacilitiesSectionProps {
  onOpenTourModal: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenTourModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const categories = ['All', 'Labs', 'Boarding', 'Sports', 'Library', 'Campus'];

  const filteredFacilities =
    activeCategory === 'All'
      ? FACILITIES
      : FACILITIES.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="w-full py-20 bg-[#f4f4f0] border-y border-[#e8e5dd]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#7c5800] font-bold">
              25-Acre Ecological Campus
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#00162d] mt-1.5 font-bold tracking-tight">
              World-Class Infrastructure for Mind, Body & Character
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#43474d] mt-2 leading-relaxed">
              Explore spaces built to spark scientific discovery, literary immersion, and athletic
              prowess within an unhurried natural sanctuary.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTourModal}
              className="px-4 py-2.5 rounded-lg bg-[#00162d] text-white hover:bg-[#0f2b48] text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-[#ffc656]" />
              <span>Launch Virtual 360° Tour</span>
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 text-xs scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#00162d] text-white shadow-xs'
                  : 'bg-white text-[#43474d] hover:bg-[#efeeea] border border-[#e8e5dd]'
              }`}
            >
              {cat === 'All' ? 'All Spaces' : cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Large Science Labs (8 columns) */}
          <div
            onClick={() => setSelectedFacility(FACILITIES[0])}
            className="md:col-span-8 bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group border border-[#e8e5dd] cursor-pointer"
          >
            <div className="relative h-72 md:h-80 w-full overflow-hidden bg-slate-900">
              <img
                src={FACILITIES[0].image}
                alt={FACILITIES[0].name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/90 via-[#00162d]/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="px-2.5 py-1 rounded bg-[#ffc656] text-[#745200] font-label-sm text-[11px] font-bold inline-block mb-1">
                  {FACILITIES[0].tag}
                </span>
                <h4 className="font-title-lg text-xl sm:text-2xl text-white font-bold">
                  {FACILITIES[0].name}
                </h4>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="font-body-md text-sm sm:text-base text-[#43474d] leading-relaxed">
                {FACILITIES[0].description}
              </p>
              <div className="pt-4 mt-4 border-t border-[#efeeea] flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                  <span className="font-bold text-[#00162d]">3 Specialist Labs</span>
                  <span className="text-[#c4c6ce]">•</span>
                  <span className="font-bold text-[#00162d]">AI & Robotics Station</span>
                </div>
                <FlaskConical className="w-5 h-5 text-[#7c5800]" />
              </div>
            </div>
          </div>

          {/* Card 2: 25-Acre Eco Grounds (4 columns) */}
          <div
            onClick={() => setSelectedFacility(FACILITIES[1])}
            className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group border border-[#e8e5dd] cursor-pointer"
          >
            <div className="relative h-56 md:h-64 w-full overflow-hidden bg-slate-900">
              <img
                src={FACILITIES[1].image}
                alt={FACILITIES[1].name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2 py-0.5 rounded bg-[#003119] text-[#aef2c2] font-label-sm text-[11px] font-bold inline-block mb-1">
                  {FACILITIES[1].tag}
                </span>
                <h4 className="font-title-lg text-lg sm:text-xl text-white font-bold">
                  {FACILITIES[1].name}
                </h4>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="font-body-sm text-xs sm:text-sm text-[#43474d] leading-relaxed">
                {FACILITIES[1].description}
              </p>
              <div className="pt-3 mt-3 border-t border-[#efeeea] flex items-center gap-1 text-[#7c5800] font-label-sm text-xs font-bold">
                <MapPin className="w-4 h-4" />
                <span>Nilambur, Western Ghats Valley</span>
              </div>
            </div>
          </div>

          {/* Card 3: Boarding Houses (4 columns) with generated photo */}
          <div
            onClick={() => setSelectedFacility(FACILITIES[2])}
            className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group border border-[#e8e5dd] cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              <img
                src={FACILITIES[2].image}
                alt={FACILITIES[2].name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="px-2 py-0.5 rounded bg-[#0f2b48] text-white font-label-sm text-[10px] font-bold inline-block mb-1">
                  {FACILITIES[2].tag}
                </span>
                <h4 className="font-title-lg text-lg text-white font-bold">
                  {FACILITIES[2].name}
                </h4>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="font-body-sm text-xs sm:text-sm text-[#43474d] leading-relaxed">
                {FACILITIES[2].description}
              </p>
              <div className="mt-4 p-2.5 rounded bg-[#f4f4f0] flex items-center justify-between text-xs text-[#00162d] font-semibold">
                <span>Separate Boys & Girls Hostels</span>
                <Shield className="w-4 h-4 text-[#7c5800]" />
              </div>
            </div>
          </div>

          {/* Card 4: Central Library (4 columns) with generated photo */}
          <div
            onClick={() => setSelectedFacility(FACILITIES[3])}
            className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group border border-[#e8e5dd] cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              <img
                src={FACILITIES[3].image}
                alt={FACILITIES[3].name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="px-2 py-0.5 rounded bg-[#ffdea7] text-[#271900] font-label-sm text-[10px] font-bold inline-block mb-1">
                  {FACILITIES[3].tag}
                </span>
                <h4 className="font-title-lg text-lg text-white font-bold">
                  {FACILITIES[3].name}
                </h4>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="font-body-sm text-xs sm:text-sm text-[#43474d] leading-relaxed">
                {FACILITIES[3].description}
              </p>
              <div className="mt-4 p-2.5 rounded bg-[#f4f4f0] flex items-center justify-between text-xs text-[#00162d] font-semibold">
                <span>20,000+ Printed & Digital Titles</span>
                <BookOpen className="w-4 h-4 text-[#7c5800]" />
              </div>
            </div>
          </div>

          {/* Card 5: Athletic Complex & Turfs (4 columns) with generated photo */}
          <div
            onClick={() => setSelectedFacility(FACILITIES[4])}
            className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group border border-[#e8e5dd] cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              <img
                src={FACILITIES[4].image}
                alt={FACILITIES[4].name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="px-2 py-0.5 rounded bg-[#003119] text-[#aef2c2] font-label-sm text-[10px] font-bold inline-block mb-1">
                  {FACILITIES[4].tag}
                </span>
                <h4 className="font-title-lg text-lg text-white font-bold">
                  {FACILITIES[4].name}
                </h4>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="font-body-sm text-xs sm:text-sm text-[#43474d] leading-relaxed">
                {FACILITIES[4].description}
              </p>
              <div className="mt-4 p-2.5 rounded bg-[#f4f4f0] flex items-center justify-between text-xs text-[#00162d] font-semibold">
                <span>NIS Certified Physical Mentors</span>
                <Trophy className="w-4 h-4 text-[#7c5800]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5dd]">
            <div className="relative h-64 w-full bg-slate-900">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded bg-[#ffc656] text-[#745200] font-bold text-xs">
                  {selectedFacility.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {selectedFacility.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-[#43474d] leading-relaxed">
                {selectedFacility.description}
              </p>

              <div className="space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#7c5800]">
                  Key Facility Specifications:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-[#faf9f5] border border-[#e8e5dd] flex items-center gap-2 text-xs text-[#00162d] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#003119] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#efeeea] flex items-center justify-between">
                <span className="text-xs text-[#7c5800] font-bold">
                  Open for parent and scholar walkthroughs
                </span>
                <button
                  onClick={() => {
                    setSelectedFacility(null);
                    onOpenTourModal();
                  }}
                  className="px-4 py-2 bg-[#00162d] text-white rounded-lg text-xs font-bold hover:bg-[#0f2b48]"
                >
                  View in 360° Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
