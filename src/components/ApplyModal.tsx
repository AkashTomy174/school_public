import React, { useState } from 'react';
import { ASSESSMENT_SLOTS, ENROLLMENT_MODES, GRADE_OPTIONS, SCHOOL_INFO } from '../data/schoolData';
import { Modal, ModalHeader } from './ui/primitives';
import { ArrowLeft, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';

interface ApplyModalProps {
  onClose: () => void;
}

type WizardStep = 1 | 2 | 3;

interface ApplicationForm {
  studentName: string;
  gender: string;
  grade: string;
  dob: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  mode: string;
  slotDate: string;
}

const INITIAL_FORM: ApplicationForm = {
  studentName: '',
  gender: 'Male',
  grade: GRADE_OPTIONS[7],
  dob: '',
  parentName: '',
  parentPhone: '',
  parentEmail: '',
  mode: 'Full Residential Boarder (Hostel)',
  slotDate: ASSESSMENT_SLOTS[0],
};

const STEP_LABELS: Record<WizardStep, string> = {
  1: 'Scholar Details',
  2: 'Guardian & Boarding',
  3: 'Assessment Slot',
};

const FIELD_CLASSES =
  'w-full px-3 py-2 rounded-lg bg-white border border-outline-variant text-xs text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary';

const LABEL_CLASSES = 'block text-xs font-bold text-primary mb-1';

const ROW_CLASSES = 'flex justify-between gap-3 border-b border-surface-container pb-1.5';

export const ApplyModal: React.FC<ApplyModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<WizardStep>(1);
  const [formData, setFormData] = useState<ApplicationForm>(INITIAL_FORM);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  const updateField = <K extends keyof ApplicationForm>(key: K, value: ApplicationForm[K]) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const canAdvance = (): boolean => {
    if (step === 1) return formData.studentName.trim().length > 0;
    if (step === 2) return formData.parentName.trim().length > 0 && formData.parentPhone.trim().length > 0;
    return true;
  };

  const handleNext = () => {
    if (!canAdvance()) return;

    if (step < 3) {
      setStep((current) => (current + 1) as WizardStep);
      return;
    }

    // Optimistic local acknowledgement; a real deployment would submit upstream.
    setApplicationId(
      `PPS-REG-${SCHOOL_INFO.intake.slice(0, 4)}-${Math.floor(10000 + Math.random() * 90000)}`,
    );
  };

  return (
    <Modal
      onClose={onClose}
      label={`Admission application ${SCHOOL_INFO.intake}`}
      sizeClass="max-w-xl"
      header={
        <ModalHeader
          title={`Admission Application ${SCHOOL_INFO.intake}`}
          subtitle={`${SCHOOL_INFO.name} • Classes IV to XII`}
          onClose={onClose}
          icon={
            <span className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </span>
          }
        />
      }
    >
      {/* Wizard Progress Indicator */}
      {!applicationId && (
        <ol className="shrink-0 bg-surface-container px-6 py-3 border-b border-hairline flex items-center justify-between gap-2 text-xs font-bold text-on-surface-variant">
          {([1, 2, 3] as const).map((stepNumber, index) => (
            <React.Fragment key={stepNumber}>
              {index > 0 && <li aria-hidden="true">→</li>}
              <li
                aria-current={step === stepNumber ? 'step' : undefined}
                className={step >= stepNumber ? 'text-primary' : undefined}
              >
                {stepNumber}. {STEP_LABELS[stepNumber]}
              </li>
            </React.Fragment>
          ))}
        </ol>
      )}

      <div className="p-6">
        {applicationId ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-tertiary-container/10 text-tertiary-container flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-display text-2xl text-primary">Application Successfully Logged!</h4>
            <p className="text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Thank you for applying to {SCHOOL_INFO.name} Nilambur. An acknowledgment SMS and
              prospectus copy have been sent to <strong>{formData.parentPhone}</strong>.
            </p>

            <div className="p-4 bg-white rounded-xl border border-hairline text-left text-xs space-y-2 max-w-md mx-auto">
              <div className={ROW_CLASSES}>
                <span className="text-on-surface-variant">Registration Code:</span>
                <strong className="font-mono text-primary">{applicationId}</strong>
              </div>
              <div className={ROW_CLASSES}>
                <span className="text-on-surface-variant">Applicant Scholar:</span>
                <strong className="text-primary">{formData.studentName}</strong>
              </div>
              <div className={ROW_CLASSES}>
                <span className="text-on-surface-variant">Grade & Track:</span>
                <strong className="text-primary">{formData.grade}</strong>
              </div>
              <div className={ROW_CLASSES}>
                <span className="text-on-surface-variant">Enrollment Mode:</span>
                <strong className="text-tertiary-container">{formData.mode}</strong>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-on-surface-variant">Entrance Assessment:</span>
                <strong className="text-secondary text-right">{formData.slotDate}</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-container transition-colors cursor-pointer"
            >
              Return to Campus Portal
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm">
            {step === 1 && (
              <div className="space-y-3">
                <div>
                  <label htmlFor="apply-student" className={LABEL_CLASSES}>
                    Student's Full Name *
                  </label>
                  <input
                    id="apply-student"
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(event) => updateField('studentName', event.target.value)}
                    placeholder="e.g. Adithya Kurup"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="apply-grade" className={LABEL_CLASSES}>
                      Grade Applying *
                    </label>
                    <select
                      id="apply-grade"
                      value={formData.grade}
                      onChange={(event) => updateField('grade', event.target.value)}
                      className={FIELD_CLASSES}
                    >
                      {GRADE_OPTIONS.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="apply-gender" className={LABEL_CLASSES}>
                      Gender *
                    </label>
                    <select
                      id="apply-gender"
                      value={formData.gender}
                      onChange={(event) => updateField('gender', event.target.value)}
                      className={FIELD_CLASSES}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="apply-dob" className={LABEL_CLASSES}>
                    Date of Birth
                  </label>
                  <input
                    id="apply-dob"
                    type="date"
                    value={formData.dob}
                    onChange={(event) => updateField('dob', event.target.value)}
                    className={FIELD_CLASSES}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <div>
                  <label htmlFor="apply-parent" className={LABEL_CLASSES}>
                    Parent / Guardian Name *
                  </label>
                  <input
                    id="apply-parent"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(event) => updateField('parentName', event.target.value)}
                    placeholder="e.g. Dr. Rajesh Kurup"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="apply-phone" className={LABEL_CLASSES}>
                      Primary Mobile *
                    </label>
                    <input
                      id="apply-phone"
                      type="tel"
                      required
                      value={formData.parentPhone}
                      onChange={(event) => updateField('parentPhone', event.target.value)}
                      placeholder="+91 98765 43210"
                      className={FIELD_CLASSES}
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-email" className={LABEL_CLASSES}>
                      Email Address
                    </label>
                    <input
                      id="apply-email"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(event) => updateField('parentEmail', event.target.value)}
                      placeholder="parent@example.com"
                      className={FIELD_CLASSES}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="apply-mode" className={LABEL_CLASSES}>
                    Enrollment Type Preference *
                  </label>
                  <select
                    id="apply-mode"
                    value={formData.mode}
                    onChange={(event) => updateField('mode', event.target.value)}
                    className={FIELD_CLASSES}
                  >
                    <option>Full Residential Boarder (Hostel)</option>
                    <option>Day Scholar (School Bus Commuter)</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <div className="p-3 bg-secondary-fixed/30 border border-secondary-fixed rounded-lg text-xs text-on-secondary-container leading-relaxed">
                  <strong>Assessment & Aptitude Evaluation:</strong> Scholars applying for Classes IV to
                  XI participate in a 90-minute conceptual assessment followed by an interactive
                  interaction with the Principal.
                </div>

                <div>
                  <label htmlFor="apply-slot" className={LABEL_CLASSES}>
                    Choose Assessment Slot *
                  </label>
                  <select
                    id="apply-slot"
                    value={formData.slotDate}
                    onChange={(event) => updateField('slotDate', event.target.value)}
                    className={FIELD_CLASSES}
                  >
                    {ASSESSMENT_SLOTS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-white rounded-lg border border-hairline text-xs space-y-1">
                  <span className="font-bold text-primary">Summary:</span>
                  <p className="text-on-surface-variant">
                    Scholar: <strong>{formData.studentName || 'Not specified'}</strong> applying for{' '}
                    <strong>{formData.grade}</strong> ({formData.mode}).
                  </p>
                </div>
              </div>
            )}

            {/* Wizard Navigation */}
            <div className="pt-4 flex items-center justify-between gap-3 border-t border-surface-container">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((current) => (current - 1) as WizardStep)}
                  className="px-4 py-2 border border-outline-variant rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <span />
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={!canAdvance()}
                className="px-5 py-2.5 bg-primary hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span>{step === 3 ? 'Confirm & Register' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
