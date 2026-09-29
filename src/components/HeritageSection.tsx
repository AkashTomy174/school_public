import React, { useState } from 'react';
import {
  SCHOOL_INFO,
  CAMPUS_FACTS,
  HERITAGE_PARAGRAPHS,
  PRINCIPAL_QUOTE,
  PRINCIPAL_MESSAGE,
} from '../data/schoolData';
import { Icon } from './ui/icons';
import { Modal, ModalHeader } from './ui/primitives';
import { ArrowRight, Quote, Trees } from 'lucide-react';

export const HeritageSection: React.FC = () => {
  const [showPrincipalModal, setShowPrincipalModal] = useState(false);

  return (
    <section id="about" className="w-full pt-28 lg:pt-32 pb-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary" />
              <span className="font-label-md text-xs uppercase tracking-widest text-secondary">
                Institutional Heritage
              </span>
            </div>

            <h2 className="font-headline-lg text-3xl sm:text-4xl text-primary tracking-tight">
              A Tradition of Holistic Excellence Along the Valley of Nilambur
            </h2>

            {HERITAGE_PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed'
                    : 'font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed'
                }
              >
                {paragraph}
              </p>
            ))}

            {/* Principal Quote Block */}
            <div className="p-6 rounded-xl bg-surface-container-low border border-hairline shadow-xs flex items-start gap-4 mt-2">
              <Quote className="w-8 h-8 text-secondary shrink-0 rotate-180" aria-hidden="true" />
              <div className="flex-1">
                <p className="font-body-md text-sm sm:text-base italic text-primary leading-relaxed font-medium">
                  “{PRINCIPAL_QUOTE}”
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-hairline">
                  <div>
                    <h4 className="font-title-md text-sm sm:text-base text-primary">Principal’s Desk</h4>
                    <span className="font-label-sm text-xs text-on-surface-variant">
                      {SCHOOL_INFO.name} Nilambur
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowPrincipalModal(true)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-secondary hover:text-primary transition-colors group cursor-pointer"
                  >
                    <span>Full Profile & Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Fact Card & Climate Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md border border-hairline">
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary">
                  Campus Factsheet
                </span>
                <span className="px-2.5 py-0.5 bg-tertiary-container text-forest-tint rounded text-xs font-semibold flex items-center gap-1">
                  <ShieldCheckIcon />
                  <span>Verified CBSE Info</span>
                </span>
              </div>

              <dl className="space-y-2.5 mt-3.5">
                {CAMPUS_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-3 hover:bg-surface-container transition-colors"
                  >
                    <dt className="text-xs sm:text-sm text-on-surface-variant flex items-center gap-2 font-medium">
                      <Icon name={fact.icon} className="w-4 h-4 text-primary shrink-0" />
                      {fact.label}
                    </dt>
                    <dd className="text-xs sm:text-sm font-bold text-primary text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              {/* Climate Callout */}
              <div className="mt-4 p-4 rounded-xl bg-primary text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <Trees className="w-4 h-4 text-forest-tint" />
                    <span className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed">
                      Nilambur Foothill Climate
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-surface-container-highest mt-1.5 leading-relaxed">
                    Surrounded by teak reserves and mountain breezes, providing an unpolluted backdrop
                    that sharpens mental clarity, emotional poise, and athletic endurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principal Profile Modal */}
      {showPrincipalModal && (
        <Modal
          onClose={() => setShowPrincipalModal(false)}
          label="Message from the Principal's desk"
          sizeClass="max-w-xl"
          header={
            <ModalHeader
              title="Message from the Principal's Desk"
              subtitle={`${SCHOOL_INFO.name}, Nilambur`}
              onClose={() => setShowPrincipalModal(false)}
              icon={
                <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
                  <Quote className="w-4 h-4 rotate-180" />
                </div>
              }
            />
          }
        >
          <div className="p-6 space-y-4 text-sm text-on-surface-variant leading-relaxed">
            <p>
              <strong className="text-primary">Dear Parents, Guardians, and Future Scholars,</strong>
            </p>

            {PRINCIPAL_MESSAGE.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-3 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-bold text-primary block">Office of the Principal</span>
                <span className="text-xs text-slate-500">
                  M.Sc., M.Ed., Ph.D. in Educational Pedagogy
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowPrincipalModal(false)}
                className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-container transition-colors cursor-pointer"
              >
                Close Message
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

/** Local alias kept close to its single call site. */
const ShieldCheckIcon: React.FC = () => (
  <Icon name="shield-check" className="w-3.5 h-3.5" strokeWidth={2.5} />
);
