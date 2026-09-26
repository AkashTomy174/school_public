import React, { useState } from 'react';
import { ACADEMIC_TRACKS, DAILY_ROUTINE } from '../data/schoolData';
import { Check, ShieldCheck, Clock, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

export const AcademicsSection: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState<'pcmb' | 'pcmc' | 'commerce'>('pcmb');
  const [showRoutineModal, setShowRoutineModal] = useState(false);

  return (
    <section id="academics" className="w-full py-20 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header with Title and Integrated Coaching Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#7c5800] font-bold">
              Academic Pathways
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#00162d] mt-1.5 font-bold tracking-tight">
              Curriculum Tailored for Growth (Classes IV to XII)
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0f2b48] text-white text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#ffc656]" />
              <span>Integrated JEE • NEET • CUET Coaching</span>
            </div>

            <button
              onClick={() => setShowRoutineModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#e8e5dd] text-[#00162d] hover:bg-[#efeeea] text-xs font-bold transition-colors cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-[#7c5800]" />
              <span>Daily Boarder Schedule</span>
            </button>
          </div>
        </div>

        {/* 3 Tier Academic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ACADEMIC_TRACKS.map((track) => {
            if (track.isSpecialized) {
              // Senior Secondary (Navy Styled Card)
              return (
                <div
                  key={track.tier}
                  className="bg-[#00162d] text-white rounded-xl p-6 lg:p-7 shadow-lg flex flex-col justify-between border border-[#0f2b48] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc656]/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between pb-4">
                      <span className="px-2.5 py-1 rounded bg-[#ffc656] text-[#745200] font-label-sm text-[11px] font-bold">
                        {track.badge}
                      </span>
                      <span className="font-label-sm text-xs text-[#e3e2df] font-semibold">
                        {track.ages}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-2xl text-white font-bold mb-1">
                      {track.tier}
                    </h3>
                    <span className="font-label-md text-xs text-[#ffdea7] font-bold block mb-4">
                      {track.classes}
                    </span>

                    <p className="font-body-md text-sm text-[#e3e2df] mb-5 leading-relaxed">
                      {track.description}
                    </p>

                    {/* Stream Selection Tabs */}
                    <div className="mb-4 p-1 bg-white/10 rounded-lg flex items-center gap-1 text-xs">
                      <button
                        onClick={() => setSelectedStream('pcmb')}
                        className={`flex-1 py-1 px-2 rounded-md font-bold transition-colors cursor-pointer ${
                          selectedStream === 'pcmb'
                            ? 'bg-[#ffc656] text-[#00162d]'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        Medical (PCMB)
                      </button>
                      <button
                        onClick={() => setSelectedStream('pcmc')}
                        className={`flex-1 py-1 px-2 rounded-md font-bold transition-colors cursor-pointer ${
                          selectedStream === 'pcmc'
                            ? 'bg-[#ffc656] text-[#00162d]'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        AI & Tech (PCMC)
                      </button>
                      <button
                        onClick={() => setSelectedStream('commerce')}
                        className={`flex-1 py-1 px-2 rounded-md font-bold transition-colors cursor-pointer ${
                          selectedStream === 'commerce'
                            ? 'bg-[#ffc656] text-[#00162d]'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        Commerce
                      </button>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-4 text-xs text-[#e3e2df]">
                      {selectedStream === 'pcmb' && (
                        <p>
                          <strong className="text-white">PCMB Track:</strong> Physics, Chemistry,
                          Mathematics, Biology with structured NEET hospital simulation clinics and
                          problem labs.
                        </p>
                      )}
                      {selectedStream === 'pcmc' && (
                        <p>
                          <strong className="text-white">PCMC Track:</strong> Physics, Chemistry,
                          Mathematics, Computer Science / Artificial Intelligence with JEE Advanced
                          coding and robotics modules.
                        </p>
                      )}
                      {selectedStream === 'commerce' && (
                        <p>
                          <strong className="text-white">Commerce Track:</strong> Accountancy,
                          Business Studies, Economics, Applied Mathematics / Informatics with CUET &
                          CA Foundation guidance.
                        </p>
                      )}
                    </div>

                    <ul className="space-y-2 text-[#e3e2df] font-body-sm text-xs">
                      {track.curriculumPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#ffdea7] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/15 relative z-10">
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#ffdea7] block mb-1 font-bold">
                      Success Record
                    </span>
                    <span className="font-body-sm text-xs font-semibold text-white">
                      {track.focus}
                    </span>
                  </div>
                </div>
              );
            }

            // Middle & Secondary Cards
            return (
              <div
                key={track.tier}
                className="bg-white rounded-xl p-6 lg:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-[#e8e5dd]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span
                      className={`px-2.5 py-1 rounded font-label-sm text-[11px] font-bold ${track.badgeColor}`}
                    >
                      {track.badge}
                    </span>
                    <span className="font-label-sm text-xs text-[#43474d] font-semibold">
                      {track.ages}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-2xl text-[#00162d] font-bold mb-1">
                    {track.tier}
                  </h3>
                  <span className="font-label-md text-xs text-[#7c5800] font-bold block mb-4">
                    {track.classes}
                  </span>

                  <p className="font-body-md text-sm text-[#43474d] mb-5 leading-relaxed">
                    {track.description}
                  </p>

                  <ul className="space-y-2 text-[#43474d] font-body-sm text-xs">
                    {track.curriculumPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#7c5800] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-[#efeeea]">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#43474d] block mb-1 font-bold">
                    Focus
                  </span>
                  <span className="font-body-sm text-xs font-semibold text-[#00162d]">
                    {track.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Routine Modal */}
      {showRoutineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#faf9f5] max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5dd]">
            <div className="bg-[#00162d] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#ffc656]" />
                <div>
                  <h3 className="font-display text-xl font-bold">A Day in the Life of a Boarder</h3>
                  <p className="text-xs text-[#afc8ed]">Gurukul Discipline & Modern Balanced Cadence</p>
                </div>
              </div>
              <button
                onClick={() => setShowRoutineModal(false)}
                className="text-white/70 hover:text-white text-xs px-2.5 py-1 rounded bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto divide-y divide-[#efeeea]">
              {DAILY_ROUTINE.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#00162d] w-36 shrink-0">
                      {item.time}
                    </span>
                    <span className="text-xs text-[#43474d] font-medium">{item.activity}</span>
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded shrink-0 ${
                      item.category === 'Academics'
                        ? 'bg-[#d2e4ff] text-[#001c37]'
                        : item.category === 'Fitness' || item.category === 'Sports'
                        ? 'bg-[#aef2c2] text-[#00210f]'
                        : item.category === 'Dining'
                        ? 'bg-[#ffdea7] text-[#271900]'
                        : 'bg-[#efeeea] text-[#43474d]'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
