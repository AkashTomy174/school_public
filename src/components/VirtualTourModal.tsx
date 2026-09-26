import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolData';
import { X, MapPin, Compass, Eye, Volume2, VolumeX, Maximize, Check } from 'lucide-react';

interface VirtualTourModalProps {
  onClose: () => void;
}

const TOUR_SPOTS = [
  {
    id: 'grounds',
    name: '25-Acre Foothill Eco Campus',
    category: 'Outdoors',
    image: SCHOOL_IMAGES.heroCampus,
    description:
      'Sprawling botanical campus located in the Western Ghats foothill green belt with zero urban pollution.',
    hotspots: [
      { x: '35%', y: '60%', label: 'Main Assembly Lawn', detail: 'Morning yoga & moral assembly grounds' },
      { x: '68%', y: '45%', label: 'Botanical Canopy', detail: 'Over 1,200 native Nilambur teak & mahogany trees' },
    ],
  },
  {
    id: 'labs',
    name: 'Advanced Science & AI Innovation Labs',
    category: 'STEM',
    image: SCHOOL_IMAGES.scienceLab,
    description:
      'State-of-the-art Physics, Chemistry, and Life Sciences laboratories with individual workstations.',
    hotspots: [
      { x: '30%', y: '50%', label: 'Microscopy Workstation', detail: 'High-power optical & digital spectrometers' },
      { x: '70%', y: '55%', label: 'Robotics & AI Bench', detail: 'Microcontrollers, Arduino and sensor rigs' },
    ],
  },
  {
    id: 'hostel',
    name: 'Residential Gurukul Boarding Houses',
    category: 'Pastoral',
    image: SCHOOL_IMAGES.hostel,
    description:
      'Airy colonial architecture with spacious verandas, climate-controlled rooms, and 24/7 warden supervision.',
    hotspots: [
      { x: '45%', y: '40%', label: 'Study Veranda', detail: 'Supervised evening prep and reading lounge' },
      { x: '75%', y: '65%', label: 'Hostel Courtyard', detail: 'Recreational lawns and indoor games room' },
    ],
  },
  {
    id: 'sports',
    name: 'Athletic Arena & 400m Track',
    category: 'Athletics',
    image: SCHOOL_IMAGES.sports,
    description:
      'Full standard football turf, synthetic athletic running track, basketball pavilion, and semi-Olympic pool.',
    hotspots: [
      { x: '50%', y: '65%', label: 'FIFA-Spec Football Turf', detail: 'Floodlit evening matches & tournaments' },
      { x: '25%', y: '55%', label: 'All-Weather Track', detail: '400m track for sprints and cross-country drills' },
    ],
  },
  {
    id: 'library',
    name: 'Central Scholastic Library',
    category: 'Academics',
    image: SCHOOL_IMAGES.library,
    description:
      'Quiet intellectual haven housing 20,000+ volumes, scientific periodicals, and high-speed research terminals.',
    hotspots: [
      { x: '40%', y: '50%', label: 'Reference Arch', detail: 'Encyclopedias and peer-reviewed journals' },
      { x: '80%', y: '60%', label: 'Digital Scholar Carrels', detail: 'Internet-enabled academic terminals' },
    ],
  },
];

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ onClose }) => {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const [selectedPin, setSelectedPin] = useState<{ label: string; detail: string } | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  const spot = TOUR_SPOTS[activeSpotIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#00162d] max-w-5xl w-full h-[90vh] max-h-[800px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#00162d] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#ffc656] text-[#00162d] flex items-center justify-center">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                Virtual Campus Tour • Nilambur
              </h3>
              <p className="text-xs text-[#d2e4ff]">Interactive 360° Visual Walkthrough</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isPlayingAudio ? 'bg-white/20 text-[#ffdea7]' : 'bg-white/10 text-white/60'
              }`}
              title="Campus Audio Ambience"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">
                {isPlayingAudio ? 'Nature Audio Active' : 'Muted'}
              </span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Screen */}
        <div className="relative flex-1 bg-black overflow-hidden select-none">
          <img
            src={spot.image}
            alt={spot.name}
            className="w-full h-full object-cover object-center animate-in fade-in duration-500 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Interactive Hotspot Pins */}
          {spot.hotspots.map((pin, i) => (
            <button
              key={i}
              onClick={() => setSelectedPin(pin)}
              style={{ left: pin.x, top: pin.y }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-[#ffc656] opacity-75 animate-ping" />
                <div className="w-6 h-6 rounded-full bg-[#ffc656] text-[#00162d] flex items-center justify-center font-bold text-xs shadow-lg group-hover:scale-125 transition-transform">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </div>
              <span className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white px-2 py-0.5 rounded text-[11px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                {pin.label}
              </span>
            </button>
          ))}

          {/* Active Spot Info Card Overlay */}
          <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#00162d]/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/15 shadow-xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffdea7]">
              {spot.category} Sector
            </span>
            <h4 className="font-display text-lg font-bold text-white mt-0.5">{spot.name}</h4>
            <p className="text-xs text-[#e3e2df] mt-1 leading-relaxed">{spot.description}</p>
          </div>

          {/* Selected Pin Popover */}
          {selectedPin && (
            <div className="absolute bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm bg-white text-[#00162d] p-4 rounded-xl shadow-2xl border border-[#e8e5dd] animate-in slide-in-from-bottom duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7c5800] font-bold">
                    Hotspot Insight
                  </span>
                  <h5 className="font-bold text-sm text-[#00162d]">{selectedPin.label}</h5>
                </div>
                <button
                  onClick={() => setSelectedPin(null)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-[#43474d] mt-1.5 leading-relaxed">{selectedPin.detail}</p>
            </div>
          )}
        </div>

        {/* Spot Navigation Thumbnails */}
        <div className="p-3 bg-[#00162d] border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {TOUR_SPOTS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveSpotIndex(idx);
                setSelectedPin(null);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeSpotIndex === idx
                  ? 'bg-[#ffc656] text-[#00162d] shadow-sm font-bold'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <span>{s.name.split(' ')[0]} {s.name.split(' ')[1]}</span>
              {activeSpotIndex === idx && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
