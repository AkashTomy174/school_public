import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCHOOL_IMAGES, HERO_STATS } from '../data/schoolData';
import { ArrowRight, Video, Sparkles, Wind, ShieldCheck, ChevronRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
  onScrollToAdmissions: () => void;
}

const HERO_SCENES = [
  {
    id: 'campus',
    title: 'Western Ghats Foothills',
    caption: '25-Acre Emerald Botanical Campus',
    image: SCHOOL_IMAGES.heroCampus,
  },
  {
    id: 'labs',
    title: 'Advanced Science & AI Labs',
    caption: 'Experiential STEM & Micro-Spectroscopy',
    image: SCHOOL_IMAGES.scienceLab,
  },
  {
    id: 'boarding',
    title: 'Gurukul Residential Life',
    caption: 'Colonial-Style Boy & Girl Hostels',
    image: SCHOOL_IMAGES.hostel,
  },
  {
    id: 'sports',
    title: 'Championship Sports Arena',
    caption: '400m Turf Track, Football & Swimming',
    image: SCHOOL_IMAGES.sports,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApplyModal,
  onOpenTourModal,
  onScrollToAdmissions,
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto cycle scenes smoothly every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % HERO_SCENES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeScene = HERO_SCENES[activeSceneIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#00162d] text-white">
      {/* Background Cinematic Visual with Motion Crossfade & Subtle Zoom */}
      <div
        className="absolute inset-0 z-0 select-none overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScene.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.42, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeScene.image}
              alt={activeScene.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00162d] via-[#00162d]/70 to-[#00162d]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00162d] via-[#00162d]/60 to-transparent pointer-events-none" />

        {/* Floating particles/mist aesthetic overlay */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#ffc656]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#003119]/25 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-32 flex flex-col justify-center">
        {/* Top Badges & Real-time Foothill Micro-Data */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ffdea7] animate-pulse"></span>
            <span className="uppercase tracking-wider text-[#ffdea7] font-bold">
              CBSE Affiliated #930127 • Classes IV – XII • Day & Residential
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#003119]/70 backdrop-blur-md border border-[#5d9e75]/30 text-xs text-[#aef2c2]">
            <Wind className="w-3.5 h-3.5 text-[#aef2c2]" />
            <span>Nilambur Foothill Air Index: AQI 18 (Pristine)</span>
          </div>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-[58px] text-[#faf9f5] leading-[1.12] tracking-tight font-bold"
          >
            Nurturing Global Minds, <br />
            <span className="italic font-normal text-[#ffdea7]">Grounded in Values.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body-lg text-base sm:text-lg text-[#e3e2df] max-w-2xl leading-relaxed font-normal"
          >
            Excellence in day and residential schooling set amidst the emerald foothills of the Western
            Ghats. Since 1993, inspiring academic distinction, integrity, and lifelong leadership in
            Nilambur.
          </motion.p>
        </div>

        {/* Call to Actions & Interactive Scene Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onScrollToAdmissions}
            className="px-6 py-3.5 rounded-lg bg-[#ffc656] hover:bg-[#7c5800] text-[#745200] hover:text-white font-bold text-sm sm:text-base shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer active:scale-95"
          >
            <span>Apply for Admission (2025–26)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenTourModal}
            className="px-5 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-[#faf9f5] font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200 flex items-center gap-2.5 cursor-pointer border border-white/10 group"
          >
            <div className="w-6 h-6 rounded-full bg-[#ffc656] text-[#00162d] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Explore Virtual Campus Tour</span>
          </button>
        </motion.div>

        {/* Interactive Scene Switcher / Camera Angles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2 text-[#d2e4ff]">
            <Sparkles className="w-3.5 h-3.5 text-[#ffdea7]" />
            <span className="font-semibold uppercase tracking-wider">Live Campus Perspectives:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {HERO_SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
                  activeSceneIndex === idx
                    ? 'bg-[#ffc656] text-[#00162d] font-bold shadow-sm'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                <span>{scene.title}</span>
                {activeSceneIndex === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00162d]"></span>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Stats Bar Overlapping Bottom of Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 -mb-14 lg:-mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full bg-white rounded-xl shadow-xl p-5 lg:p-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 border border-[#e8e5dd]"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col group transition-transform hover:-translate-y-0.5 ${
                idx < 4 ? 'border-b sm:border-b-0 pb-3 sm:pb-0' : ''
              } ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span
                className={`font-stat-display text-4xl lg:text-[44px] leading-tight font-bold tracking-tight ${
                  stat.highlight ? 'text-[#003119]' : stat.value === 'Dual' ? 'text-[#7c5800]' : 'text-[#00162d]'
                }`}
              >
                {stat.value}
              </span>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#7c5800] mt-1 font-bold">
                {stat.label}
              </span>
              <span className="font-body-sm text-xs text-[#43474d] mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
