import React, { useId, useState } from 'react';
import { PILLARS } from '../data/schoolData';
import { Icon } from './ui/icons';
import { SectionHeader } from './ui/primitives';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const panelIdPrefix = useId();

  const togglePillar = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full py-20 bg-surface-container-low border-y border-hairline">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Why Families Choose Us"
          title="The Pillars of a Transformative Education"
          subtitle="We combine intellectual ambition, pastoral attentiveness, and exceptional physical infrastructure to unlock every child's innate potential."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const isExpanded = expandedId === pillar.id;
            const panelId = `${panelIdPrefix}-${pillar.id}`;

            return (
              /**
               * The whole card is a single disclosure button so it works with
               * keyboard and assistive technology, not just a mouse click.
               */
              <button
                key={pillar.id}
                type="button"
                onClick={() => togglePillar(pillar.id)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                className={`text-left bg-white p-6 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between border cursor-pointer ${
                  isExpanded ? 'border-secondary ring-1 ring-secondary/20' : 'border-hairline'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={pillar.icon} className="w-6 h-6" />
                    </span>
                    <span className="text-[11px] text-secondary font-bold uppercase tracking-wider bg-surface px-2 py-0.5 rounded border border-hairline">
                      {isExpanded ? 'Tap to condense' : 'Details'}
                    </span>
                  </div>

                  <h3 className="font-title-lg text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Expanded Insights */}
                  <div
                    id={panelId}
                    hidden={!isExpanded}
                    className="mt-4 pt-4 border-t border-surface-container space-y-3"
                  >
                    <p className="text-xs text-on-surface font-medium leading-relaxed bg-surface-container-low p-3 rounded-lg">
                      {pillar.extendedDetails}
                    </p>
                    <ul className="space-y-1.5 text-xs text-on-surface-variant">
                      {pillar.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tertiary-container shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-surface-container flex items-center justify-between font-label-md text-xs text-secondary">
                  <span className="flex items-center gap-1">
                    {pillar.badge}
                    <CheckCircle2 className="w-3.5 h-3.5 text-tertiary-container" />
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-secondary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-secondary opacity-50 group-hover:opacity-100" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
