import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, GraduationCap, Calendar, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ApplyModalProps {
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'Male',
    grade: 'Class XI (Science)',
    dob: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    residence: 'Kerala / India',
    mode: 'Full Residential Boarder',
    slotDate: 'Next Saturday (10:00 AM IST)',
  });
  const [applicationId, setApplicationId] = useState<string | null>(null);

  const handleNext = () => {
    if (step === 1 && !formData.studentName) return;
    if (step === 2 && (!formData.parentName || !formData.parentPhone)) return;
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    } else {
      const generatedId = `PPS-REG-2025-${Math.floor(10000 + Math.random() * 90000)}`;
      setApplicationId(generatedId);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf9f5] max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5dd]">
        {/* Header */}
        <div className="bg-[#00162d] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#ffc656] text-[#00162d] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold">
                Admission Application 2025–26
              </h3>
              <p className="text-xs text-[#d2e4ff]">Peevees Public School • Classes IV to XII</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Steps indicator */}
        {!applicationId && (
          <div className="bg-[#efeeea] px-6 py-3 border-b border-[#e8e5dd] flex items-center justify-between text-xs font-bold text-[#43474d]">
            <span className={step >= 1 ? 'text-[#00162d]' : ''}>1. Scholar Details</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#00162d]' : ''}>2. Guardian & Boarding</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#00162d]' : ''}>3. Assessment Slot</span>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {applicationId ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#003119]/10 text-[#003119] flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#00162d]">
                Application Successfully Logged!
              </h4>
              <p className="text-xs text-[#43474d] max-w-sm mx-auto leading-relaxed">
                Thank you for applying to Peevees Public School Nilambur. An acknowledgment SMS and
                prospectus copy have been sent to <strong>{formData.parentPhone}</strong>.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#e8e5dd] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#efeeea] pb-1.5">
                  <span className="text-[#43474d]">Registration Code:</span>
                  <strong className="font-mono text-[#00162d]">{applicationId}</strong>
                </div>
                <div className="flex justify-between border-b border-[#efeeea] pb-1.5">
                  <span className="text-[#43474d]">Applicant Scholar:</span>
                  <strong className="text-[#00162d]">{formData.studentName}</strong>
                </div>
                <div className="flex justify-between border-b border-[#efeeea] pb-1.5">
                  <span className="text-[#43474d]">Grade & Track:</span>
                  <strong className="text-[#00162d]">{formData.grade}</strong>
                </div>
                <div className="flex justify-between border-b border-[#efeeea] pb-1.5">
                  <span className="text-[#43474d]">Enrollment Mode:</span>
                  <strong className="text-[#003119]">{formData.mode}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#43474d]">Entrance Assessment:</span>
                  <strong className="text-[#7c5800]">{formData.slotDate}</strong>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#00162d] text-white rounded-lg text-xs font-bold hover:bg-[#0f2b48]"
              >
                Return to Campus Portal
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm">
              {step === 1 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#00162d] mb-1">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Adithya Kurup"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs text-[#1b1c1a] focus:border-[#00162d] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#00162d] mb-1">Grade Applying *</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
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
                      <label className="block text-xs font-bold text-[#00162d] mb-1">Gender *</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00162d] mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#00162d] mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Kurup"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#00162d] mb-1">
                        Primary Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#00162d] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00162d] mb-1">
                      Enrollment Type Preference *
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
                    >
                      <option>Full Residential Boarder (Hostel)</option>
                      <option>Day Scholar (School Bus Commuter)</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#ffdea7]/30 border border-[#ffdea7] rounded-lg text-xs text-[#745200]">
                    <strong>Assessment & Aptitude Evaluation:</strong> Scholars applying for Classes
                    IV to XI participate in an intuitive 90-minute conceptual assessment followed by
                    an interactive interaction with the Principal.
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00162d] mb-1">
                      Choose Assessment Slot *
                    </label>
                    <select
                      value={formData.slotDate}
                      onChange={(e) => setFormData({ ...formData, slotDate: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#c4c6ce] text-xs"
                    >
                      <option>Next Saturday (10:00 AM IST) - Nilambur Campus</option>
                      <option>Next Sunday (11:00 AM IST) - Nilambur Campus</option>
                      <option>Online Proctored Slot (For NRI / Gulf Scholars)</option>
                      <option>Schedule Personalized Weekday Tour & Assessment</option>
                    </select>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#e8e5dd] text-xs space-y-1">
                    <span className="font-bold text-[#00162d]">Summary:</span>
                    <p className="text-[#43474d]">
                      Scholar: <strong>{formData.studentName || 'Not specified'}</strong> applying
                      for <strong>{formData.grade}</strong> ({formData.mode}).
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-[#efeeea]">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
                    className="px-4 py-2 border border-[#c4c6ce] rounded-lg text-xs font-semibold text-[#43474d] hover:bg-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-[#00162d] hover:bg-[#0f2b48] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>{step === 3 ? 'Confirm & Register' : 'Continue'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
