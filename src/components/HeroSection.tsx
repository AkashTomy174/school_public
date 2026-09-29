import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SCHOOL_INFO,
  HERO_STATS,
  HERO_SCENES,
  HERO_SCENE_INTERVAL_MS,
  type StatItem,
} from '../data/schoolData';
import { ArrowRight, Sparkles, Wind, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
  onScrollToAdmissions: () => void;
}

/** Value colour coding: forest and gold accents break up the numeric row. */
const STAT_VALUE_TONE: Record<NonNullable<StatItem['accent']> | 'default', string> = {
  forest: 'text-tertiary-container',
  gold: 'text-secondary',
  default: 'text-primary',
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApplyModal,
  onOpenTourModal,
  onScrollToAdmissions,
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle scenes smoothly unless the pointer is resting on the image.
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % HERO_SCENES.length);
    }, HERO_SCENE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeScene = HERO_SCENES[activeSceneIndex];

  return (
    <section id="home" className="relative w-full overflow-hidden bg-primary text-white">
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
              alt={activeScene.caption}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent pointer-events-none" />

        {/* Ambient light blooms echoing the palette */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary-container/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-tertiary-container/25 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-32 flex flex-col justify-center">
        {/* Top Badges & Foothill Micro-Data */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
            <span className="uppercase tracking-wider text-secondary-fixed font-bold">
              CBSE Affiliated #{SCHOOL_INFO.affiliationNo} • Classes IV – XII • Day & Residential
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary-container/70 backdrop-blur-md border border-on-tertiary-container/30 text-xs text-forest-tint">
            <Wind className="w-3.5 h-3.5 text-forest-tint" />
            <span>Nilambur Foothill Air Index: AQI 18 (Pristine)</span>
          </div>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-[58px] text-surface leading-[1.12] tracking-tight"
          >
            Nurturing Global Minds, <br />
            <span className="italic font-normal text-secondary-fixed">Grounded in Values.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body-lg text-base sm:text-lg text-surface-container-highest max-w-2xl leading-relaxed"
          >
            Excellence in day and residential schooling set amidst the emerald foothills of the Western
            Ghats. Since {SCHOOL_INFO.established}, inspiring academic distinction, integrity, and
            lifelong leadership in Nilambur.
          </motion.p>
        </div>

        {/* Primary Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={onScrollToAdmissions}
            className="px-6 py-3.5 rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-white font-bold text-sm sm:text-base shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer active:scale-95"
          >
            <span>Apply for Admission ({SCHOOL_INFO.intake})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenTourModal}
            className="px-5 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-surface font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200 flex items-center gap-2.5 cursor-pointer border border-white/10 group"
          >
            <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>Explore Virtual Campus Tour</span>
          </button>

          <button
            type="button"
            onClick={onOpenApplyModal}
            className="text-sm font-semibold text-primary-fixed hover:text-secondary-fixed underline underline-offset-4 decoration-primary-fixed/40 transition-colors cursor-pointer"
          >
            Request a prospectus
          </button>
        </motion.div>

        {/* Interactive Scene Switcher / Camera Angles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2 text-primary-fixed">
            <Sparkles className="w-3.5 h-3.5 text-secondary-fixed" />
            <span className="font-semibold uppercase tracking-wider">Live Campus Perspectives:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Campus perspectives">
            {HERO_SCENES.map((scene, idx) => {
              const isActive = activeSceneIndex === idx;
              return (
                <button
                  key={scene.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSceneIndex(idx)}
                  title={scene.caption}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-secondary-container text-primary font-bold shadow-sm'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span>{scene.title}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Floating Stats Bar Overlapping the Bottom of the Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 -mb-14 lg:-mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full bg-white rounded-xl shadow-xl p-5 lg:p-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 border border-hairline"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col group transition-transform hover:-translate-y-0.5 ${
                idx < 4 ? 'border-b sm:border-b-0 pb-3 sm:pb-0' : ''
              } ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span
                className={`font-stat-display text-4xl lg:text-[44px] ${STAT_VALUE_TONE[stat.accent ?? 'default']}`}
              >
                {stat.value}
              </span>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary mt-1">
                {stat.label}
              </span>
              <span className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
