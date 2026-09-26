import React, { useState } from 'react';
import { PILLARS, PillarItem } from '../data/schoolData';
import {
  BookOpen,
  Bed,
  FlaskConical,
  UserCheck,
  Trophy,
  Drama,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  menu_book: <BookOpen className="w-6 h-6" />,
  hotel: <Bed className="w-6 h-6" />,
  biotech: <FlaskConical className="w-6 h-6" />,
  psychology: <UserCheck className="w-6 h-6" />,
  sports_soccer: <Trophy className="w-6 h-6" />,
  theater_comedy: <Drama className="w-6 h-6" />,
};

export const PillarsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const togglePillar = (id: string) => {
    setSelectedPillar(selectedPillar === id ? null : id);
  };

  return (
    <section className="w-full py-20 bg-[#f4f4f0] border-y border-[#e8e5dd]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-label-sm text-xs uppercase tracking-widest text-[#7c5800] font-bold">
            Why Families Choose Us
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#00162d] mt-2 font-bold tracking-tight">
            The Pillars of a Transformative Education
          </h2>
          <p className="font-body-md text-sm sm:text-base text-[#43474d] mt-2 leading-relaxed">
            We combine intellectual ambition, pastoral attentiveness, and exceptional physical
            infrastructure to unlock every child's innate potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const isExpanded = selectedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => togglePillar(pillar.id)}
                className={`bg-white p-6 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between border cursor-pointer ${
                  isExpanded ? 'border-[#7c5800] ring-1 ring-[#7c5800]/20' : 'border-[#e8e5dd]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#efeeea] flex items-center justify-center text-[#00162d] group-hover:bg-[#00162d] group-hover:text-white transition-colors">
                      {ICON_MAP[pillar.icon] || <Sparkles className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] text-[#7c5800] font-bold uppercase tracking-wider bg-[#faf9f5] px-2 py-0.5 rounded border border-[#e8e5dd]">
                      {isExpanded ? 'Tap to condense' : 'Details'}
                    </span>
                  </div>

                  <h3 className="font-title-lg text-lg text-[#00162d] font-bold mb-2 group-hover:text-[#7c5800] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-body-md text-sm text-[#43474d] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Expanded Insights */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#efeeea] space-y-3 animate-in fade-in duration-200">
                      <p className="text-xs text-[#1b1c1a] font-medium leading-relaxed bg-[#f4f4f0] p-3 rounded-lg">
                        {pillar.extendedDetails}
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#43474d]">
                        {pillar.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#003119] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-5 mt-4 border-t border-[#efeeea] flex items-center justify-between font-label-md text-xs text-[#7c5800] font-semibold">
                  <div className="flex items-center gap-1">
                    <span>{pillar.badge}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003119]" />
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#7c5800]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#7c5800] opacity-50 group-hover:opacity-100" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
