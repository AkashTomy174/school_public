import React, { useState } from 'react';
import {
  SCHOOL_INFO,
  telHref,
  ADMISSION_HIGHLIGHTS,
  ENROLLMENT_MODES,
  FEE_BANDS,
  GRADE_OPTIONS,
  SCHOLARSHIP_NOTE,
} from '../data/schoolData';
import { Icon } from './ui/icons';
import { Modal, ModalHeader } from './ui/primitives';
import { Calculator, CheckCircle, Send, X } from 'lucide-react';

interface AdmissionSectionProps {
  onOpenApplyModal: () => void;
}

/** Shared field styling for the quick-enquiry form. */
const FIELD_CLASSES =
  'w-full px-3 py-2 rounded-lg bg-white border border-outline-variant text-xs sm:text-sm text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary';

const generateReference = (): string =>
  `PPS-${SCHOOL_INFO.intake.slice(0, 4)}-${Math.floor(1000 + Math.random() * 9000)}`;

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ onOpenApplyModal }) => {
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState(GRADE_OPTIONS[7]);
  const [enrollmentType, setEnrollmentType] = useState(ENROLLMENT_MODES[0]);
  const [parentContact, setParentContact] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeeEstimator, setShowFeeEstimator] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!studentName.trim() || !parentContact.trim()) return;

    setIsSubmitting(true);
    // Optimistic acknowledgement; a real deployment would post to the CRM here.
    setTimeout(() => {
      setSubmittedRef(generateReference());
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setStudentName('');
    setParentContact('');
  };

  return (
    <section id="admissions" className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-primary text-white rounded-2xl p-8 lg:p-14 shadow-xl relative overflow-hidden border border-primary-container">
          {/* Decorative ambient blooms */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-20 w-72 h-72 rounded-full bg-tertiary-container/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Admissions Information */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container text-on-secondary-container self-start shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-label-sm text-xs uppercase tracking-wider">
                  Admissions Open {SCHOOL_INFO.intake}
                </span>
              </div>

              <h2 className="font-headline-lg text-3xl sm:text-4xl text-white tracking-tight">
                Begin Your Child’s Journey of Distinction at Nilambur
              </h2>

              <p className="font-body-lg text-sm sm:text-base text-surface-container-highest max-w-xl leading-relaxed">
                Limited residential and day-scholar seats available for Classes IV through XI. Early
                registration grants access to upcoming campus assessment dates and personalized
                orientation tours.
              </p>

              {/* Feature Badges */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {ADMISSION_HIGHLIGHTS.map((highlight) => (
                  <li
                    key={highlight.label}
                    className="flex items-center gap-2.5 text-surface-container-highest text-xs sm:text-sm"
                  >
                    <Icon name={highlight.icon} className="w-4 h-4 text-secondary-fixed shrink-0" />
                    <span>{highlight.label}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenApplyModal}
                  className="px-5 py-2.5 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-xs sm:text-sm hover:bg-white transition-colors cursor-pointer"
                >
                  Complete Online Application Form
                </button>

                <button
                  type="button"
                  onClick={() => setShowFeeEstimator(true)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5 text-secondary-fixed" />
                  <span>Fee & Scholarship Calculator</span>
                </button>
              </div>
            </div>

            {/* Right Column: Quick Admission Enquiry */}
            <div className="lg:col-span-5 flex flex-col gap-3 bg-white text-on-surface p-6 lg:p-7 rounded-xl shadow-2xl border border-hairline">
              {submittedRef ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-tertiary-container/10 text-tertiary-container flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-primary">Enquiry Registered!</h3>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Our Senior Admissions Counselor will contact you within 24 hours.
                    </p>
                  </div>
                  <div className="p-3 bg-surface rounded-lg border border-hairline text-xs space-y-1">
                    <span className="text-secondary font-bold block uppercase tracking-wider">
                      Application Reference
                    </span>
                    <span className="font-mono text-base font-bold text-primary">{submittedRef}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    Scholar: <strong>{studentName}</strong> • {grade} ({enrollmentType})
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2.5 px-4 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="font-title-lg text-lg sm:text-xl text-primary">Quick Admission Enquiry</h3>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                      Fill out this quick form and our academic counsellors will contact you within 24
                      hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 mt-1">
                    <div>
                      <label htmlFor="enquiry-student" className="block text-xs font-semibold text-primary mb-1">
                        Student's Full Name *
                      </label>
                      <input
                        id="enquiry-student"
                        type="text"
                        required
                        value={studentName}
                        onChange={(event) => setStudentName(event.target.value)}
                        placeholder="Enter scholar's name"
                        className={FIELD_CLASSES}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="enquiry-grade" className="block text-xs font-semibold text-primary mb-1">
                          Grade Applying
                        </label>
                        <select
                          id="enquiry-grade"
                          value={grade}
                          onChange={(event) => setGrade(event.target.value)}
                          className={FIELD_CLASSES}
                        >
                          {GRADE_OPTIONS.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="enquiry-mode" className="block text-xs font-semibold text-primary mb-1">
                          Enrollment Type
                        </label>
                        <select
                          id="enquiry-mode"
                          value={enrollmentType}
                          onChange={(event) => setEnrollmentType(event.target.value)}
                          className={FIELD_CLASSES}
                        >
                          {ENROLLMENT_MODES.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="enquiry-contact" className="block text-xs font-semibold text-primary mb-1">
                        Parent Contact Number *
                      </label>
                      <input
                        id="enquiry-contact"
                        type="tel"
                        required
                        value={parentContact}
                        onChange={(event) => setParentContact(event.target.value)}
                        placeholder="+91 98765 43210 / +971 (UAE)"
                        className={FIELD_CLASSES}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-3 px-4 rounded-lg bg-primary hover:bg-primary-container disabled:opacity-60 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Registering Enquiry…</span>
                      ) : (
                        <>
                          <span>Submit Admission Enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="pt-2 text-center text-xs text-on-surface-variant">
                    Prefer direct phone contact? Call{' '}
                    <a
                      href={telHref(SCHOOL_INFO.phonePrimary)}
                      className="text-secondary font-bold hover:underline"
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
        <Modal
          onClose={() => setShowFeeEstimator(false)}
          label="Estimated fee structure"
          sizeClass="max-w-xl"
          header={
            <ModalHeader
              title={`Estimated Fee Structure (${SCHOOL_INFO.intake})`}
              subtitle="Transparent Academic & Residential Breakdown"
              onClose={() => setShowFeeEstimator(false)}
              icon={<Calculator className="w-5 h-5 text-secondary-container shrink-0" />}
            />
          }
        >
          <div className="p-6 space-y-4 text-xs sm:text-sm text-on-surface-variant">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEE_BANDS.map((band) => (
                <div key={band.label} className="p-4 rounded-xl bg-white border border-hairline shadow-xs">
                  <span className={`font-bold uppercase text-[11px] block ${band.labelColor}`}>
                    {band.label}
                  </span>
                  <div className="text-2xl font-display font-bold text-primary mt-1">{band.range}</div>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">{band.notes}</p>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-secondary-fixed/30 rounded-xl border border-secondary-fixed text-xs text-on-secondary-container leading-relaxed">
              <strong>Merit Scholarships:</strong> {SCHOLARSHIP_NOTE}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setShowFeeEstimator(false);
                  onOpenApplyModal();
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-xs hover:bg-primary-container transition-colors cursor-pointer"
              >
                Apply with Scholarship Review
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
