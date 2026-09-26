import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { CheckCircle2, ShieldCheck, Sparkles, MapPin, Trees, ArrowRight, Quote, X } from 'lucide-react';

export const HeritageSection: React.FC = () => {
  const [showPrincipalModal, setShowPrincipalModal] = useState(false);

  return (
    <section id="about" className="w-full pt-28 lg:pt-32 pb-16 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#7c5800]"></span>
              <span className="font-label-md text-xs uppercase tracking-widest text-[#7c5800] font-bold">
                Institutional Heritage
              </span>
            </div>

            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#00162d] tracking-tight font-bold">
              A Tradition of Holistic Excellence Along the Valley of Nilambur
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-[#43474d] leading-relaxed">
              Founded three decades ago under the visionary patronship of Peevees Group, Peevees Public
              School has stood as an intellectual sanctuary in the Malappuram district of Kerala. Our
              tranquil 25-acre setting fosters a seamless harmony between rigorous CBSE academics,
              world-class athletic disciplines, and heartfelt moral character.
            </p>

            <p className="font-body-md text-sm sm:text-base text-[#43474d] leading-relaxed">
              By blending traditional gurukul-inspired residential warmth with progressive 21st-century
              pedagogy, we empower young boys and girls from Class 4 through 12 to flourish into independent
              scholars, compassionate innovators, and ethical global citizens.
            </p>

            {/* Principal Quote Block */}
            <div className="p-6 rounded-xl bg-[#f4f4f0] border border-[#e8e5dd] shadow-xs flex items-start gap-4 mt-2">
              <Quote className="w-8 h-8 text-[#7c5800] shrink-0 rotate-180" />
              <div className="flex-1">
                <p className="font-body-md text-sm sm:text-base italic text-[#00162d] leading-relaxed font-medium">
                  “True education does not merely train scholars for tests; it shapes character that endures
                  adversity and kindles curiosity that transforms the world.”
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#e8e5dd]">
                  <div>
                    <h4 className="font-title-md text-sm sm:text-base text-[#00162d] font-bold">
                      Principal’s Desk
                    </h4>
                    <span className="font-label-sm text-xs text-[#43474d]">
                      Peevees Public School Nilambur
                    </span>
                  </div>

                  <button
                    onClick={() => setShowPrincipalModal(true)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#7c5800] hover:text-[#00162d] transition-colors group cursor-pointer"
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
            <div className="bg-white p-6 rounded-xl shadow-md border border-[#e8e5dd]">
              <div className="flex items-center justify-between pb-3 border-b border-[#e8e5dd]">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#7c5800] font-bold">
                  Campus Factsheet
                </span>
                <span className="px-2.5 py-0.5 bg-[#003119] text-[#aef2c2] rounded text-xs font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified CBSE Info</span>
                </span>
              </div>

              <div className="space-y-2.5 mt-3.5">
                <div className="p-3 rounded-lg bg-[#f4f4f0] flex items-center justify-between hover:bg-[#efeeea] transition-colors">
                  <span className="text-xs sm:text-sm text-[#43474d] flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#00162d]" />
                    Affiliation Status
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00162d]">
                    Senior Secondary (#{SCHOOL_INFO.affiliationNo})
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#f4f4f0] flex items-center justify-between hover:bg-[#efeeea] transition-colors">
                  <span className="text-xs sm:text-sm text-[#43474d] flex items-center gap-2 font-medium">
                    <Trees className="w-4 h-4 text-[#00162d]" />
                    Campus Acreage
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00162d]">
                    {SCHOOL_INFO.campusAcreage}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#f4f4f0] flex items-center justify-between hover:bg-[#efeeea] transition-colors">
                  <span className="text-xs sm:text-sm text-[#43474d] flex items-center gap-2 font-medium">
                    <Sparkles className="w-4 h-4 text-[#00162d]" />
                    Student Diversity
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00162d]">
                    14+ Indian States & NRI
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#f4f4f0] flex items-center justify-between hover:bg-[#efeeea] transition-colors">
                  <span className="text-xs sm:text-sm text-[#43474d] flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00162d]" />
                    Co-Educational Status
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00162d]">
                    Boys & Girls (Classes IV-XII)
                  </span>
                </div>
              </div>

              {/* Climate Callout */}
              <div className="mt-4 p-4 rounded-xl bg-[#00162d] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#ffdea7]">
                    <Trees className="w-4 h-4 text-[#aef2c2]" />
                    <span className="font-label-sm text-xs uppercase font-bold tracking-wider">
                      Nilambur Foothill Climate
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#e3e2df] mt-1.5 leading-relaxed">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#faf9f5] max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5dd]">
            <div className="bg-[#00162d] text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#ffdea7] font-bold">
                  Leadership & Guidance
                </span>
                <h3 className="font-display text-2xl font-bold mt-1 text-white">
                  Message from the Principal's Desk
                </h3>
                <p className="text-xs text-[#afc8ed] mt-0.5">Peevees Public School, Nilambur</p>
              </div>
              <button
                onClick={() => setShowPrincipalModal(false)}
                className="text-white/70 hover:text-white p-1 rounded-lg bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm text-[#43474d] leading-relaxed max-h-[70vh] overflow-y-auto">
              <p>
                <strong>Dear Parents, Guardians, and Future Scholars,</strong>
              </p>
              <p>
                Welcome to Peevees Public School. When our doors opened in 1993, we set out with a simple yet
                profound conviction: that education in the 21st century must marry absolute scholastic rigor
                with the timeless values of compassionate mentorship.
              </p>
              <p>
                In an era dominated by relentless screens and urban distractions, our 25-acre foothill haven
                in Nilambur offers students a restorative environment where their minds can breathe, think
                deeply, and stretch their ambitions. Here, day scholars and residential boarders learn side by
                side, guided by faculty who mentor them around the clock.
              </p>
              <p>
                Whether in our robotics laboratories, our sports turf, or our quiet library nooks, we
                cherish every child’s unique spark. We welcome you to visit our campus and experience the
                Peevees family firsthand.
              </p>
              <div className="pt-3 border-t border-[#e8e5dd] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#00162d] block">Office of the Principal</span>
                  <span className="text-xs text-slate-500">M.Sc., M.Ed., Ph.D. in Educational Pedagogy</span>
                </div>
                <button
                  onClick={() => setShowPrincipalModal(false)}
                  className="px-4 py-2 bg-[#00162d] text-white rounded-lg text-xs font-bold hover:bg-[#0f2b48]"
                >
                  Close Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
