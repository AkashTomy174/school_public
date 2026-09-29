import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Modal, ModalHeader } from './ui/primitives';
import { CheckCircle2, Coffee, ShieldCheck, User } from 'lucide-react';

interface PortalModalProps {
  onClose: () => void;
}

type PortalTab = 'profile' | 'attendance' | 'grades' | 'mess';

const TABS: readonly { readonly id: PortalTab; readonly label: string }[] = [
  { id: 'profile', label: 'Scholar Profile' },
  { id: 'attendance', label: 'Attendance (98.4%)' },
  { id: 'grades', label: 'Term Gradebook' },
  { id: 'mess', label: 'Organic Mess Menu' },
];

const GRADE_ROWS = [
  { subject: 'Physics (Theory & Practical)', score: '96 / 100', grade: 'A1' },
  { subject: 'Chemistry (Organic & Analytic)', score: '94 / 100', grade: 'A1' },
  { subject: 'Mathematics (Calculus & Vectors)', score: '98 / 100', grade: 'A1' },
  { subject: 'Biology (Genetics & Physiology)', score: '92 / 100', grade: 'A1' },
  { subject: 'English Core', score: '95 / 100', grade: 'A1' },
] as const;

const MESS_MENU = [
  {
    meal: 'Breakfast (07:15 AM)',
    tone: 'text-secondary',
    items:
      'Kerala Idiyappam with Vegetable Stew / Steamed Eggs, Fresh Papaya, Warm Cow Milk & Tea.',
  },
  {
    meal: 'Lunch (01:15 PM)',
    tone: 'text-tertiary',
    items:
      'Steamed Kerala Matta Rice, Malabar Chicken Curry / Paneer Butter Masala, Sambar, Cabbage Thoran, Curd.',
  },
  {
    meal: 'High Tea (05:45 PM)',
    tone: 'text-secondary',
    items: 'Warm Banana Fritters (Pazham Pori) / Baked vegetable puffs, Horlicks & Herbal Green Tea.',
  },
  {
    meal: 'Dinner (08:30 PM)',
    tone: 'text-primary',
    items: 'Soft Phulkas, Dal Tadka, Mixed Vegetable Kurma, Fresh Green Salad & Warm Turmeric Milk.',
  },
] as const;

/**
 * Demonstration portal shell.
 *
 * The figures below are representative sample data standing in for the real
 * guardian-facing portal feed; nothing here is fetched or persisted.
 */
export const PortalModal: React.FC<PortalModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<PortalTab>('profile');
  const [leaveRequested, setLeaveRequested] = useState(false);

  return (
    <Modal
      onClose={onClose}
      label="Student and parent scholastic portal"
      sizeClass="max-w-3xl"
      header={
        <ModalHeader
          title="Student & Parent Scholastic Portal"
          subtitle={`${SCHOOL_INFO.name} • Secure Guardian Access`}
          onClose={onClose}
          icon={
            <span className="w-9 h-9 rounded-full bg-secondary-fixed text-primary flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </span>
          }
        />
      }
      footer={
        <div className="shrink-0 p-4 bg-surface-container border-t border-hairline flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-on-surface-variant">
            Sample guardian view: kurup.rajesh@gmail.com
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      }
    >
      {/* Portal Navigation Tabs */}
      <div
        className="sticky top-0 z-10 bg-surface-container px-4 pt-2 border-b border-hairline flex gap-2 overflow-x-auto text-xs font-semibold scrollbar-none"
        role="tablist"
        aria-label="Portal sections"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'border-primary text-primary font-bold bg-white rounded-t-lg'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="p-6 space-y-4 text-xs sm:text-sm">
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0">
                  AK
                </span>
                <div>
                  <h4 className="font-bold text-base text-primary">Master Adithya Kurup</h4>
                  <p className="text-xs text-on-surface-variant">
                    Scholar ID: <strong className="text-primary">PPS-2024-082</strong> • Class XI (PCMB -
                    Science)
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded bg-tertiary-container text-forest-tint text-[10px] font-bold">
                    Full Residential Boarder • Kaveri House (Room 204)
                  </span>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="text-[11px] text-secondary font-bold block">Housemaster</span>
                <span className="text-xs font-semibold text-primary">Prof. K. Narayanan</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-xl border border-hairline">
                <span className="text-xs text-on-surface-variant block">Academic Standing</span>
                <span className="text-lg font-bold text-primary block mt-1">95.4% (Rank 2)</span>
                <span className="text-[10px] text-tertiary-container font-semibold">Distinction Tier</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-hairline">
                <span className="text-xs text-on-surface-variant block">Coaching Track</span>
                <span className="text-lg font-bold text-primary block mt-1">NEET Synchronized</span>
                <span className="text-[10px] text-secondary font-semibold">Fortnightly Tests</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-hairline">
                <span className="text-xs text-on-surface-variant block">Hostel Medical Status</span>
                <span className="text-lg font-bold text-primary block mt-1">Fit & Verified</span>
                <span className="text-[10px] text-on-surface-variant font-semibold">Blood: O+ Positive</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-hairline">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Residential Gate Pass Management</span>
              </h4>
              <p className="text-xs text-on-surface-variant mb-3">
                Weekend outings or mid-term holiday pickup requests must be submitted 48 hours in
                advance.
              </p>
              {leaveRequested ? (
                <div className="p-3 bg-forest-tint/30 border border-on-tertiary-container rounded-lg text-xs text-[#09522f] flex items-center justify-between gap-2">
                  <span>
                    Gate Pass for <strong>Oct 2 – Oct 5</strong> submitted & approved by the housemaster.
                  </span>
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setLeaveRequested(true)}
                  className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-container transition-colors cursor-pointer"
                >
                  Request Weekend Leave Pass
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="bg-white p-5 rounded-xl border border-hairline space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="font-bold text-base text-primary">Term Attendance Log</h4>
                <p className="text-xs text-on-surface-variant">
                  Academic Session {SCHOOL_INFO.intake} (Classes IV–XII)
                </p>
              </div>
              <span className="text-2xl font-bold text-tertiary-container">98.4%</span>
            </div>
            <div
              className="h-3 rounded-full bg-surface-container overflow-hidden"
              role="img"
              aria-label="Attendance 98.4 percent"
            >
              <div className="h-full bg-tertiary-container rounded-full w-[98.4%]" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-lg bg-surface">
                <span className="text-on-surface-variant block">Working Days</span>
                <strong className="text-sm text-primary">128 Days</strong>
              </div>
              <div className="p-3 rounded-lg bg-surface">
                <span className="text-on-surface-variant block">Days Present</span>
                <strong className="text-sm text-tertiary-container">126 Days</strong>
              </div>
              <div className="p-3 rounded-lg bg-surface">
                <span className="text-on-surface-variant block">Approved Leave</span>
                <strong className="text-sm text-secondary">2 Days</strong>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="bg-white p-5 rounded-xl border border-hairline space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-surface-container">
              <div>
                <h4 className="font-bold text-base text-primary">Half-Yearly Examination</h4>
                <span className="text-xs text-on-surface-variant">
                  CBSE Senior Secondary Assessment
                </span>
              </div>
              <span className="px-2.5 py-1 rounded bg-secondary-fixed text-[#271900] font-bold text-xs">
                Grade: A1 (Distinction)
              </span>
            </div>

            <ul className="space-y-2 text-xs">
              {GRADE_ROWS.map((row) => (
                <li
                  key={row.subject}
                  className="p-2.5 rounded-lg bg-surface flex items-center justify-between gap-3 border border-surface-container"
                >
                  <span className="font-medium text-primary">{row.subject}</span>
                  <span className="flex items-center gap-3 shrink-0">
                    <span className="font-bold text-primary">{row.score}</span>
                    <span className="px-2 py-0.5 rounded bg-tertiary-container text-forest-tint text-[10px] font-bold">
                      {row.grade}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'mess' && (
          <div className="bg-white p-5 rounded-xl border border-hairline space-y-3">
            <div className="flex items-center justify-between gap-3 pb-2 border-b border-surface-container">
              <div>
                <h4 className="font-bold text-base text-primary">Today's Organic Dining Menu</h4>
                <p className="text-xs text-on-surface-variant">
                  Farm-fresh produce sourced locally from Nilambur agro-gardens
                </p>
              </div>
              <Coffee className="w-5 h-5 text-secondary shrink-0" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {MESS_MENU.map((entry) => (
                <div key={entry.meal} className="p-3 rounded-lg bg-surface border border-surface-container">
                  <span className={`font-bold uppercase text-[10px] block ${entry.tone}`}>
                    {entry.meal}
                  </span>
                  <p className="text-primary font-semibold mt-1 leading-relaxed">{entry.items}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
