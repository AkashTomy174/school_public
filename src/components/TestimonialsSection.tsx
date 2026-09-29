import React from 'react';
import { BOARD_OUTCOMES, TESTIMONIALS } from '../data/schoolData';
import { SectionHeader } from './ui/primitives';
import { Award, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => (
  <section className="w-full py-20 bg-surface-container-low border-t border-hairline">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionHeader
        eyebrow="Voices of Trust & Legacy"
        title="What Parents and Alumni Say"
        actions={
          <div className="flex items-center gap-2 text-primary">
            <Award className="w-5 h-5 text-secondary" />
            <span className="font-label-md text-xs sm:text-sm">3 Decades of Trusted Guardianship</span>
          </div>
        }
      />

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="bg-white p-6 lg:p-7 rounded-xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-hairline"
          >
            <div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <Star key={index} className="w-4 h-4 fill-secondary-container text-secondary-container" />
                ))}
                <span className="ml-2 text-[10px] uppercase font-bold text-secondary bg-surface px-2 py-0.5 rounded border border-hairline">
                  {testimonial.badge}
                </span>
              </div>

              <blockquote className="font-body-md text-sm text-on-surface-variant italic mb-6 leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
            </div>

            <figcaption className="border-t border-surface-container pt-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-xs ${testimonial.avatarColor}`}
              >
                {testimonial.initials}
              </span>
              <span>
                <span className="font-title-md text-sm sm:text-base text-primary block leading-tight">
                  {testimonial.name}
                </span>
                <span className="font-label-sm text-xs text-on-surface-variant block mt-0.5">
                  {testimonial.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Verified Board Outcomes */}
      <dl className="mt-12 p-6 rounded-xl bg-surface-container border border-hairline grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {BOARD_OUTCOMES.map((outcome, index) => (
          <React.Fragment key={outcome.label}>
            {index > 0 && <div className="hidden" aria-hidden="true" />}
            <div className="px-3">
              <dt className="font-title-lg text-2xl lg:text-3xl text-primary block tabular-nums">
                {outcome.value}
              </dt>
              <dd className="font-label-sm text-xs text-on-surface-variant uppercase block mt-0.5">
                {outcome.label}
              </dd>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </div>
  </section>
);
