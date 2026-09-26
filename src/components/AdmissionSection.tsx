import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import {
  Calendar,
  Bed,
  GraduationCap,
  Bus,
  Send,
  CheckCircle,
  Phone,
  Calculator,
  X,
  FileCheck,
} from 'lucide-react';

interface AdmissionSectionProps {
  onOpenApplyModal: () => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ onOpenApplyModal }) => {
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('Class XI (Science)');
  const [enrollmentType, setEnrollmentType] = useState('Full Boarder (Hostel)');
  const [parentContact, setParentContact] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeeEstimator, setShowFeeEstimator] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentContact) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `PPS-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setStudentName('');
    setParentContact('');
    setParentEmail('');
  };

  return (
    <section id="admissions" className="w-full py-20 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-[#00162d] text-white rounded-2xl p-8 lg:p-14 shadow-xl relative overflow-hidden border border-[#0f2b48]">
          {/* Decorative ambient radial blurs */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#ffc656]/10 filter blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-20 w-72 h-72 rounded-full bg-[#003119]/30 filter blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Admissions Info */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ffc656] text-[#745200] self-start shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00162d]"></span>
                <span className="font-label-sm text-xs uppercase font-bold tracking-wider">
                  Admissions Open 2025–26
                </span>
              </div>

              <h2 className="font-headline-lg text-3xl sm:text-4xl text-white tracking-tight font-bold">
                Begin Your Child’s Journey of Distinction at Nilambur
              </h2>

              <p className="font-body-lg text-sm sm:text-base text-[#e3e2df] max-w-xl leading-relaxed">
                Limited residential and day-scholar seats available for Classes IV through XI. Early
                registration grants access to upcoming campus assessment dates and personalized orientation
                tours.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                <div className="flex items-center gap-2.5 text-[#e3e2df] text-xs sm:text-sm">
                  <Calendar className="w-4 h-4 text-[#ffdea7] shrink-0" />
                  <span>Entrance Assessments: Weekly Slots</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#e3e2df] text-xs sm:text-sm">
                  <Bed className="w-4 h-4 text-[#ffdea7] shrink-0" />
                  <span>Residential Hostel Seats Limited</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#e3e2df] text-xs sm:text-sm">
                  <GraduationCap className="w-4 h-4 text-[#ffdea7] shrink-0" />
                  <span>Merit Scholarships Available</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#e3e2df] text-xs sm:text-sm">
                  <Bus className="w-4 h-4 text-[#ffdea7] shrink-0" />
                  <span>Day-Scholar Transport Routes Active</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenApplyModal}
                  className="px-5 py-2.5 bg-[#ffc656] text-[#745200] rounded-lg font-bold text-xs sm:text-sm hover:bg-white transition-colors cursor-pointer"
                >
                  Complete Online Application Form
                </button>

                <button
                  onClick={() => setShowFeeEstimator(true)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#ffdea7]" />
                  <span>Fee & Scholarship Calculator</span>
                </button>
              </div>
            </div>

            {/* Right Column: Quick Admission Enquiry Form */}
            <div className="lg:col-span-5 flex flex-col gap-3 bg-white text-[#1b1c1a] p-6 lg:p-7 rounded-xl shadow-2xl border border-[#e8e5dd]">
              {submittedRef ? (
                <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#003119]/10 text-[#003119] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-[#00162d]">
                      Enquiry Registered!
                    </h4>
                    <p className="text-xs text-[#43474d] mt-1">
                      Our Senior Admissions Counselor will contact you within 24 hours.
                    </p>
                  </div>
                  <div className="p-3 bg-[#faf9f5] rounded-lg border border-[#e8e5dd] text-xs space-y-1">
                    <span className="text-[#7c5800] font-bold block uppercase tracking-wider">
                      Application Reference
                    </span>
                    <span className="font-mono text-base font-bold text-[#00162d]">
                      {submittedRef}
                    </span>
                  </div>
                  <p className="text-xs text-[#43474d]">
                    Scholar: <strong>{studentName}</strong> • {grade} ({enrollmentType})
                  </p>
                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#00162d] text-white text-xs font-bold hover:bg-[#0f2b48] transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="font-title-lg text-lg sm:text-xl text-[#00162d] font-bold">
                      Quick Admission Enquiry
                    </h3>
                    <p className="font-body-sm text-xs text-[#43474d] mt-0.5">
                      Fill out this quick form and our academic counsellors will contact you within 24
                      hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 mt-1">
                    <div>
                      <label className="block text-xs font-semibold text-[#00162d] mb-1">
                        Student's Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Enter scholar's name"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] focus:border-[#00162d] focus:ring-1 focus:ring-[#00162d] text-xs sm:text-sm text-[#1b1c1a] outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#00162d] mb-1">
                          Grade Applying
                        </label>
                        <select
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                          className="w-full px-2.5 py-2 rounded-lg bg-white border border-[#c4c6ce] focus:border-[#00162d] text-xs text-[#1b1c1a] outline-none"
                        >
                          <option>Class IV</option>
                          <option>Class V</option>
                          <option>Class VI</option>
                          <option>Class VII</option>
                          <option>Class VIII</option>
                          <option>Class IX</option>
                          <option>Class X</option>
                          <option>Class XI (Science - PCMB)</option>
                          <option>Class XI (Science - PCMC)</option>
                          <option>Class XI (Commerce)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#00162d] mb-1">
                          Enrollment Type
                        </label>
                        <select
                          value={enrollmentType}
                          onChange={(e) => setEnrollmentType(e.target.value)}
                          className="w-full px-2.5 py-2 rounded-lg bg-white border border-[#c4c6ce] focus:border-[#00162d] text-xs text-[#1b1c1a] outline-none"
                        >
                          <option>Full Boarder (Hostel)</option>
                          <option>Day Scholar</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00162d] mb-1">
                        Parent Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={parentContact}
                        onChange={(e) => setParentContact(e.target.value)}
                        placeholder="+91 98765 43210 / +971 (UAE)"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] focus:border-[#00162d] focus:ring-1 focus:ring-[#00162d] text-xs sm:text-sm text-[#1b1c1a] outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-3 px-4 rounded-lg bg-[#00162d] hover:bg-[#0f2b48] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Registering Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Admission Enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="pt-2 text-center text-xs text-[#43474d]">
                    Prefer direct phone contact? Call{' '}
                    <a
                      href={`tel:${SCHOOL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                      className="text-[#7c5800] font-bold hover:underline"
                    >
                      {SCHOOL_INFO.phonePrimary}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fee & Scholarship Estimator Modal */}
      {showFeeEstimator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#faf9f5] max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5dd]">
            <div className="bg-[#00162d] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-[#ffc656]" />
                <div>
                  <h3 className="font-display text-xl font-bold">Estimated Fee Structure (2025–26)</h3>
                  <p className="text-xs text-[#afc8ed]">Transparent Academic & Residential Breakdown</p>
                </div>
              </div>
              <button
                onClick={() => setShowFeeEstimator(false)}
                className="text-white/70 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm text-[#43474d] max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-[#e8e5dd] shadow-xs">
                  <span className="font-bold text-[#7c5800] uppercase text-[11px] block">
                    Day Scholar (Annual)
                  </span>
                  <div className="text-2xl font-bold text-[#00162d] mt-1">₹45,000 – ₹72,000</div>
                  <p className="text-[11px] text-[#43474d] mt-1">
                    Tuition, smart lab access, library, sports coaching, CBSE registration. (Bus
                    transport optional by route).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e8e5dd] shadow-xs">
                  <span className="font-bold text-[#003119] uppercase text-[11px] block">
                    Residential Boarder (Annual)
                  </span>
                  <div className="text-2xl font-bold text-[#00162d] mt-1">₹1,40,000 – ₹1,95,000</div>
                  <p className="text-[11px] text-[#43474d] mt-1">
                    Includes AC dorms, 4 wholesome organic meals daily, laundry, evening tutor prep,
                    infirmary medical care.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-[#ffdea7]/30 rounded-xl border border-[#ffdea7] text-xs text-[#745200]">
                <strong>Merit Scholarships:</strong> Up to 50% tuition waiver available for scholars
                scoring 90%+ in the Peevees Talent Search Assessment or state-level sports achievers.
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setShowFeeEstimator(false);
                    onOpenApplyModal();
                  }}
                  className="px-4 py-2 bg-[#00162d] text-white rounded-lg font-bold text-xs hover:bg-[#0f2b48]"
                >
                  Apply with Scholarship Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
