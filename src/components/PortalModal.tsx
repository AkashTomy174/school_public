import React, { useState } from 'react';
import { X, User, Calendar, Award, Coffee, Clock, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

interface PortalModalProps {
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'attendance' | 'grades' | 'mess'>('profile');
  const [leaveRequested, setLeaveRequested] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf9f5] max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5dd] flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#00162d] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#ffdea7] text-[#00162d] flex items-center justify-center font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold">
                Student & Parent Scholastic Portal
              </h3>
              <p className="text-xs text-[#d2e4ff]">
                Peevees Public School • Secure Guardian Access
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="bg-[#efeeea] px-4 pt-2 border-b border-[#e8e5dd] flex gap-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#00162d] text-[#00162d] font-bold bg-white rounded-t-lg'
                : 'border-transparent text-[#43474d] hover:text-[#00162d]'
            }`}
          >
            Scholar Profile
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`py-2 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'attendance'
                ? 'border-[#00162d] text-[#00162d] font-bold bg-white rounded-t-lg'
                : 'border-transparent text-[#43474d] hover:text-[#00162d]'
            }`}
          >
            Attendance (98.4%)
          </button>
          <button
            onClick={() => setActiveTab('grades')}
            className={`py-2 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'grades'
                ? 'border-[#00162d] text-[#00162d] font-bold bg-white rounded-t-lg'
                : 'border-transparent text-[#43474d] hover:text-[#00162d]'
            }`}
          >
            Term Gradebook
          </button>
          <button
            onClick={() => setActiveTab('mess')}
            className={`py-2 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'mess'
                ? 'border-[#00162d] text-[#00162d] font-bold bg-white rounded-t-lg'
                : 'border-transparent text-[#43474d] hover:text-[#00162d]'
            }`}
          >
            Organic Mess Menu
          </button>
        </div>

        {/* Portal Body Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-[#e8e5dd] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#00162d] text-white flex items-center justify-center font-bold text-xl">
                    AK
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#00162d]">Master Adithya Kurup</h4>
                    <p className="text-xs text-[#43474d]">
                      Scholar ID: <strong className="text-[#00162d]">PPS-2024-082</strong> • Class XI
                      (PCMB - Science)
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-[#003119] text-[#aef2c2] text-[10px] font-bold">
                      Full Residential Boarder • Kaveri House (Room 204)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#7c5800] font-bold block">Housemaster</span>
                  <span className="text-xs font-semibold text-[#00162d]">Prof. K. Narayanan</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-xl border border-[#e8e5dd]">
                  <span className="text-xs text-[#43474d] block">Academic Standing</span>
                  <span className="text-lg font-bold text-[#00162d] block mt-1">95.4% (Rank 2)</span>
                  <span className="text-[10px] text-[#003119] font-semibold">Distinction Tier</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#e8e5dd]">
                  <span className="text-xs text-[#43474d] block">Coaching Track</span>
                  <span className="text-lg font-bold text-[#00162d] block mt-1">NEET Synchronized</span>
                  <span className="text-[10px] text-[#7c5800] font-semibold">Fortnightly Tests</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#e8e5dd]">
                  <span className="text-xs text-[#43474d] block">Hostel Medical Status</span>
                  <span className="text-lg font-bold text-[#00162d] block mt-1">Fit & Verified</span>
                  <span className="text-[10px] text-[#43474d] font-semibold">Blood: O+ Positive</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e8e5dd]">
                <h5 className="font-bold text-[#00162d] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7c5800]" />
                  <span>Residential Gate Pass Management</span>
                </h5>
                <p className="text-xs text-[#43474d] mb-3">
                  Weekend outings or mid-term holiday pickup requests must be submitted 48 hours in
                  advance.
                </p>
                {leaveRequested ? (
                  <div className="p-3 bg-[#aef2c2]/30 border border-[#5d9e75] rounded-lg text-xs text-[#09522f] flex items-center justify-between">
                    <span>
                      Gate Pass for <strong>Oct 2 – Oct 5</strong> submitted & Approved by Housemaster.
                    </span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                ) : (
                  <button
                    onClick={() => setLeaveRequested(true)}
                    className="px-4 py-2 bg-[#00162d] text-white rounded-lg text-xs font-bold hover:bg-[#0f2b48]"
                  >
                    Request Weekend Leave Pass
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="bg-white p-5 rounded-xl border border-[#e8e5dd] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#00162d]">Term Attendance Log</h4>
                  <p className="text-xs text-[#43474d]">Academic Session 2024–25 (Classes IV–XII)</p>
                </div>
                <span className="text-2xl font-bold text-[#003119]">98.4%</span>
              </div>
              <div className="h-3 rounded-full bg-[#efeeea] overflow-hidden">
                <div className="h-full bg-[#003119] rounded-full w-[98.4%]" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-lg bg-[#faf9f5]">
                  <span className="text-[#43474d] block">Working Days</span>
                  <strong className="text-sm text-[#00162d]">128 Days</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#faf9f5]">
                  <span className="text-[#43474d] block">Days Present</span>
                  <strong className="text-sm text-[#003119]">126 Days</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#faf9f5]">
                  <span className="text-[#43474d] block">Approved Leave</span>
                  <strong className="text-sm text-[#7c5800]">2 Days</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'grades' && (
            <div className="bg-white p-5 rounded-xl border border-[#e8e5dd] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#efeeea]">
                <div>
                  <h4 className="font-bold text-base text-[#00162d]">Half-Yearly Examination</h4>
                  <span className="text-xs text-[#43474d]">CBSE Senior Secondary Assessment</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#ffdea7] text-[#271900] font-bold text-xs">
                  Grade: A1 (Distinction)
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { subject: 'Physics (Theory & Practical)', score: '96 / 100', grade: 'A1' },
                  { subject: 'Chemistry (Organic & Analytic)', score: '94 / 100', grade: 'A1' },
                  { subject: 'Mathematics (Calculus & Vectors)', score: '98 / 100', grade: 'A1' },
                  { subject: 'Biology (Genetics & Physiology)', score: '92 / 100', grade: 'A1' },
                  { subject: 'English Core', score: '95 / 100', grade: 'A1' },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#faf9f5] flex items-center justify-between border border-[#efeeea]"
                  >
                    <span className="font-medium text-[#00162d]">{row.subject}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#00162d]">{row.score}</span>
                      <span className="px-2 py-0.5 rounded bg-[#003119] text-[#aef2c2] text-[10px] font-bold">
                        {row.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mess' && (
            <div className="bg-white p-5 rounded-xl border border-[#e8e5dd] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#efeeea]">
                <div>
                  <h4 className="font-bold text-base text-[#00162d]">Today's Organic Dining Menu</h4>
                  <p className="text-xs text-[#43474d]">
                    Farm-fresh produce sourced locally from Nilambur agro-gardens
                  </p>
                </div>
                <Coffee className="w-5 h-5 text-[#7c5800]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#faf9f5] border border-[#efeeea]">
                  <span className="font-bold text-[#7c5800] uppercase text-[10px] block">
                    Breakfast (07:15 AM)
                  </span>
                  <p className="text-[#00162d] font-semibold mt-1">
                    Kerala Idiyappam with Vegetable Stew / Steamed Eggs, Fresh Papaya, Warm Cow Milk & Tea.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#faf9f5] border border-[#efeeea]">
                  <span className="font-bold text-[#003119] uppercase text-[10px] block">
                    Lunch (01:15 PM)
                  </span>
                  <p className="text-[#00162d] font-semibold mt-1">
                    Steamed Kerala Matta Rice, Malabar Chicken Curry / Paneer Butter Masala, Sambar, Cabbage Thoran, Curd.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#faf9f5] border border-[#efeeea]">
                  <span className="font-bold text-[#7c5800] uppercase text-[10px] block">
                    High Tea (05:45 PM)
                  </span>
                  <p className="text-[#00162d] font-semibold mt-1">
                    Warm Banana Fritters (Pazham Pori) / Baked vegetable puffs, Horlicks & Herbal Green Tea.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#faf9f5] border border-[#efeeea]">
                  <span className="font-bold text-[#00162d] uppercase text-[10px] block">
                    Dinner (08:30 PM)
                  </span>
                  <p className="text-[#00162d] font-semibold mt-1">
                    Soft Phulkas, Dal Tadka, Mixed Vegetable Kurma, Fresh Green Salad & Warm Turmeric Milk.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#efeeea] border-t border-[#e8e5dd] flex items-center justify-between text-xs">
          <span className="text-[#43474d]">Logged in as guardian: kurup.rajesh@gmail.com</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#00162d] text-white rounded-lg font-bold hover:bg-[#0f2b48]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
