import React, { useState } from 'react';
import { TOUR_SPOTS, type TourHotspot } from '../data/schoolData';
import { Modal } from './ui/primitives';
import { Check, Compass, MapPin, Volume2, VolumeX, X } from 'lucide-react';

interface VirtualTourModalProps {
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ onClose }) => {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const [selectedPin, setSelectedPin] = useState<TourHotspot | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  const spot = TOUR_SPOTS[activeSpotIndex];

  const selectSpot = (index: number) => {
    setActiveSpotIndex(index);
    setSelectedPin(null);
  };

  return (
    <Modal
      onClose={onClose}
      label="Virtual campus tour"
      tone="deep"
      sizeClass="max-w-5xl"
      header={
        <div className="shrink-0 px-6 py-4 bg-primary border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </span>
            <div>
              <h3 className="font-display text-lg sm:text-xl text-white leading-tight">
                Virtual Campus Tour • Nilambur
              </h3>
              <p className="text-xs text-primary-fixed">Interactive 360° Visual Walkthrough</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlayingAudio((playing) => !playing)}
              aria-pressed={isPlayingAudio}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isPlayingAudio ? 'bg-white/20 text-secondary-fixed' : 'bg-white/10 text-white/60'
              }`}
              title="Campus audio ambience"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">
                {isPlayingAudio ? 'Nature Audio Active' : 'Muted'}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close virtual tour"
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      }
      footer={
        <div className="shrink-0 p-3 bg-primary border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {TOUR_SPOTS.map((tourSpot, index) => {
            const isActive = activeSpotIndex === index;
            return (
              <button
                key={tourSpot.id}
                type="button"
                onClick={() => selectSpot(index)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-secondary-container text-primary shadow-sm'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                <span>{tourSpot.category}</span>
                {isActive && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      }
    >
      {/* Viewport — pinned to a fixed height so the overlay cards have room. */}
      <div className="relative h-[52vh] min-h-[320px] bg-black overflow-hidden select-none">
        <img
          src={spot.image}
          alt={spot.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Interactive Hotspot Pins */}
        {spot.hotspots.map((pin) => (
          <button
            key={pin.label}
            type="button"
            onClick={() => setSelectedPin(pin)}
            style={{ left: pin.x, top: pin.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            aria-label={`${pin.label} — ${pin.detail}`}
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full bg-secondary-container opacity-75 animate-ping" />
              <span className="relative w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                <MapPin className="w-3.5 h-3.5" />
              </span>
            </span>
            <span className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white px-2 py-0.5 rounded text-[11px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              {pin.label}
            </span>
          </button>
        ))}

        {/* Active Spot Info Card */}
        <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-md bg-primary/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/15 shadow-xl">
          <span className="text-[10px] uppercase tracking-widest text-secondary-fixed font-bold">
            {spot.category} Sector
          </span>
          <h4 className="font-display text-lg text-white mt-0.5">{spot.name}</h4>
          <p className="text-xs text-surface-container-highest mt-1 leading-relaxed">{spot.description}</p>
        </div>

        {/* Selected Pin Popover */}
        {selectedPin && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm bg-white text-primary p-4 rounded-xl shadow-2xl border border-hairline">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-secondary font-bold">
                  Hotspot Insight
                </span>
                <h4 className="font-bold text-sm text-primary">{selectedPin.label}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPin(null)}
                aria-label="Dismiss hotspot insight"
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">{selectedPin.detail}</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
