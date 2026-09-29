import React, { useState } from 'react';
import {
  ACADEMIC_TRACKS,
  DAILY_ROUTINE,
  ROUTINE_CATEGORY_COLORS,
  SENIOR_STREAMS,
  type AcademicTrack,
} from '../data/schoolData';
import { Modal, ModalHeader, SectionHeader } from './ui/primitives';
import { Check, ShieldCheck, Clock } from 'lucide-react';

/** Point list shared by the light and navy academic cards. */
const TrackPoints: React.FC<{
  readonly points: readonly string[];
  readonly checkClassName: string;
}> = ({ points, checkClassName }) => (
  <ul className="space-y-2 font-body-sm text-xs">
    {points.map((point) => (
      <li key={point} className="flex items-start gap-2">
        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${checkClassName}`} />
        <span>{point}</span>
      </li>
    ))}
  </ul>
);

/** Senior Secondary: inverted navy card with an interactive stream switch. */
const SeniorSecondaryCard: React.FC<{ readonly track: AcademicTrack }> = ({ track }) => {
  const [activeStreamId, setActiveStreamId] = useState(SENIOR_STREAMS[0].id);
  const activeStream =
    SENIOR_STREAMS.find((stream) => stream.id === activeStreamId) ?? SENIOR_STREAMS[0];

  return (
    <div className="bg-primary text-white rounded-xl p-6 lg:p-7 shadow-lg flex flex-col justify-between border border-primary-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between pb-4">
          <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[11px]">
            {track.badge}
          </span>
          <span className="font-label-sm text-xs text-surface-container-highest">{track.ages}</span>
        </div>

        <h3 className="font-headline-sm text-2xl text-white mb-1">{track.tier}</h3>
        <span className="font-label-md text-xs text-secondary-fixed block mb-4">{track.classes}</span>

        <p className="font-body-md text-sm text-surface-container-highest mb-5 leading-relaxed">
          {track.description}
        </p>

        {/* Stream Selection Tabs */}
        <div
          className="mb-4 p-1 bg-white/10 rounded-lg flex items-center gap-1 text-xs"
          role="tablist"
          aria-label="Senior secondary streams"
        >
          {SENIOR_STREAMS.map((stream) => {
            const isActive = stream.id === activeStream.id;
            return (
              <button
                key={stream.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStreamId(stream.id)}
                className={`flex-1 py-1 px-2 rounded-md font-bold transition-colors cursor-pointer ${
                  isActive ? 'bg-secondary-container text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {stream.label}
              </button>
            );
          })}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-4 text-xs text-surface-container-highest min-h-20">
          <p>{activeStream.detail}</p>
        </div>

        <TrackPoints points={track.curriculumPoints} checkClassName="text-secondary-fixed" />
      </div>

      <div className="pt-5 mt-5 border-t border-white/15 relative z-10">
        <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary-fixed block mb-1">
          {track.focusCaption}
        </span>
        <span className="font-body-sm text-xs font-semibold text-white">{track.focus}</span>
      </div>
    </div>
  );
};

/** Middle & Secondary: light card variant. */
const StandardTrackCard: React.FC<{ readonly track: AcademicTrack }> = ({ track }) => (
  <div className="bg-white rounded-xl p-6 lg:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-hairline">
    <div>
      <div className="flex items-center justify-between pb-4">
        <span className={`px-2.5 py-1 rounded font-label-sm text-[11px] font-bold ${track.badgeColor}`}>
          {track.badge}
        </span>
        <span className="font-label-sm text-xs text-on-surface-variant">{track.ages}</span>
      </div>

      <h3 className="font-headline-sm text-2xl text-primary mb-1">{track.tier}</h3>
      <span className="font-label-md text-xs text-secondary block mb-4">{track.classes}</span>

      <p className="font-body-md text-sm text-on-surface-variant mb-5 leading-relaxed">
        {track.description}
      </p>

      <div className="text-on-surface-variant">
        <TrackPoints points={track.curriculumPoints} checkClassName="text-secondary" />
      </div>
    </div>

    <div className="pt-5 mt-5 border-t border-surface-container">
      <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block mb-1">
        {track.focusCaption}
      </span>
      <span className="font-body-sm text-xs font-semibold text-primary">{track.focus}</span>
    </div>
  </div>
);

export const AcademicsSection: React.FC = () => {
  const [showRoutineModal, setShowRoutineModal] = useState(false);

  return (
    <section id="academics" className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Academic Pathways"
          title="Curriculum Tailored for Growth (Classes IV to XII)"
          actions={
            <>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary-container text-white text-xs font-semibold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-secondary-container" />
                <span>Integrated JEE • NEET • CUET Coaching</span>
              </div>

              <button
                type="button"
                onClick={() => setShowRoutineModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-hairline text-primary hover:bg-surface-container text-xs font-bold transition-colors cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5 text-secondary" />
                <span>Daily Boarder Schedule</span>
              </button>
            </>
          }
        />

        {/* 3 Tier Academic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ACADEMIC_TRACKS.map((track) =>
            track.isSpecialized ? (
              <SeniorSecondaryCard key={track.tier} track={track} />
            ) : (
              <StandardTrackCard key={track.tier} track={track} />
            ),
          )}
        </div>
      </div>

      {/* Daily Routine Modal */}
      {showRoutineModal && (
        <Modal
          onClose={() => setShowRoutineModal(false)}
          label="A day in the life of a boarder"
          sizeClass="max-w-2xl"
          header={
            <ModalHeader
              title="A Day in the Life of a Boarder"
              subtitle="Gurukul Discipline & Modern Balanced Cadence"
              onClose={() => setShowRoutineModal(false)}
              icon={<Clock className="w-5 h-5 text-secondary-container shrink-0" />}
            />
          }
        >
          <ul className="p-6 divide-y divide-surface-container">
            {DAILY_ROUTINE.map((item) => (
              <li key={item.time} className="py-2.5 flex items-start justify-between gap-4">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs font-bold text-primary w-36 shrink-0">
                    {item.time}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">{item.activity}</span>
                </div>
                <span
                  className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded shrink-0 ${
                    ROUTINE_CATEGORY_COLORS[item.category]
                  }`}
                >
                  {item.category}
                </span>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </section>
  );
};
