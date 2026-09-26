import React from 'react';
import { TESTIMONIALS } from '../data/schoolData';
import { Star, Award, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#f4f4f0] border-t border-[#e8e5dd]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#7c5800] font-bold">
              Voices of Trust & Legacy
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#00162d] mt-1.5 font-bold tracking-tight">
              What Parents and Alumni Say
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[#00162d]">
            <Award className="w-5 h-5 text-[#7c5800]" />
            <span className="font-label-md text-xs sm:text-sm font-bold text-[#00162d]">
              3 Decades of Trusted Guardianship
            </span>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 lg:p-7 rounded-xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-[#e8e5dd]"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#7c5800] mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#ffc656]" />
                  ))}
                  <span className="ml-2 text-[10px] uppercase font-bold text-[#7c5800] bg-[#faf9f5] px-2 py-0.5 rounded border border-[#e8e5dd]">
                    {testimonial.badge}
                  </span>
                </div>

                <p className="font-body-md text-sm text-[#43474d] italic mb-6 leading-relaxed">
                  “{testimonial.quote}”
                </p>
              </div>

              {/* Author attribution */}
              <div className="border-t border-[#efeeea] pt-4 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-xs ${testimonial.bgColor}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-title-md text-sm sm:text-base text-[#00162d] font-bold leading-tight">
                    {testimonial.name}
                  </h4>
                  <span className="font-label-sm text-xs text-[#43474d] block mt-0.5">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ticker Strip of CBSE Distinctions */}
        <div className="mt-12 p-6 rounded-xl bg-[#efeeea] border border-[#e8e5dd] flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="px-3">
            <span className="font-title-lg text-2xl lg:text-3xl text-[#00162d] font-bold block tabular-nums">
              100%
            </span>
            <span className="font-label-sm text-xs text-[#43474d] uppercase font-semibold mt-0.5 block">
              Pass Percentage Class X & XII
            </span>
          </div>

          <div className="h-8 w-px bg-[#c4c6ce] hidden md:block" />

          <div className="px-3">
            <span className="font-title-lg text-2xl lg:text-3xl text-[#00162d] font-bold block tabular-nums">
              48%
            </span>
            <span className="font-label-sm text-xs text-[#43474d] uppercase font-semibold mt-0.5 block">
              Students Above 90% Aggregate
            </span>
          </div>

          <div className="h-8 w-px bg-[#c4c6ce] hidden md:block" />

          <div className="px-3">
            <span className="font-title-lg text-2xl lg:text-3xl text-[#00162d] font-bold block tabular-nums">
              34
            </span>
            <span className="font-label-sm text-xs text-[#43474d] uppercase font-semibold mt-0.5 block">
              Centum Scores in Science & Math
            </span>
          </div>

          <div className="h-8 w-px bg-[#c4c6ce] hidden md:block" />

          <div className="px-3">
            <span className="font-title-lg text-2xl lg:text-3xl text-[#00162d] font-bold block">
              Zero
            </span>
            <span className="font-label-sm text-xs text-[#43474d] uppercase font-semibold mt-0.5 block">
              Compromise on Student Well-being
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
