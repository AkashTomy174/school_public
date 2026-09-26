/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HeritageSection } from './components/HeritageSection';
import { PillarsSection } from './components/PillarsSection';
import { AcademicsSection } from './components/AcademicsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionSection } from './components/AdmissionSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { VirtualTourModal } from './components/VirtualTourModal';
import { PortalModal } from './components/PortalModal';
import { ApplyModal } from './components/ApplyModal';
import { DisclosureModal } from './components/DisclosureModal';
import { SCHOOL_INFO } from './data/schoolData';
import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [showPortalModal, setShowPortalModal] = useState<boolean>(false);
  const [showTourModal, setShowTourModal] = useState<boolean>(false);
  const [showDisclosureModal, setShowDisclosureModal] = useState<boolean>(false);

  const handleScrollToAdmissions = () => {
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'admissions') {
      handleScrollToAdmissions();
    } else if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b1c1a] flex flex-col font-body selection:bg-[#ffc656] selection:text-[#1b1c1a]">
      {/* Fixed Sticky Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleTabSelect}
        onOpenApplyModal={() => setShowApplyModal(true)}
        onOpenPortalModal={() => setShowPortalModal(true)}
        onOpenTourModal={() => setShowTourModal(true)}
      />

      {/* Main Page Flow */}
      <main className="w-full flex-1">
        {/* 1. Hero Section with Animated Flow & Dynamic Foothill Perspectives */}
        <HeroSection
          onOpenApplyModal={() => setShowApplyModal(true)}
          onOpenTourModal={() => setShowTourModal(true)}
          onScrollToAdmissions={handleScrollToAdmissions}
        />

        {/* 2. Institutional Heritage Section & Facts */}
        <HeritageSection />

        {/* 3. Why Families Choose Us (The 6 Pillars) */}
        <PillarsSection />

        {/* 4. Academic Pathways (Classes IV to XII Curriculum & Coaching) */}
        <AcademicsSection />

        {/* 5. World-Class Infrastructure (25-Acre Bento Grid & Facilities) */}
        <FacilitiesSection onOpenTourModal={() => setShowTourModal(true)} />

        {/* 6. Admissions Banner & Quick Enquiry Capture */}
        <AdmissionSection onOpenApplyModal={() => setShowApplyModal(true)} />

        {/* 7. Testimonials & Verified CBSE Distinctions */}
        <TestimonialsSection />

        {/* 8. Contact & Campus Visit Experience Section */}
        <section id="contact" className="w-full py-16 bg-[#faf9f5] border-t border-[#e8e5dd]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-[#e8e5dd] flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#7c5800] font-bold">
                  Plan Your Nilambur Campus Visit
                </span>
                <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#00162d] mt-1 font-bold">
                  Experience the Foothill Sanctuary Firsthand
                </h3>
                <p className="font-body-md text-sm text-[#43474d] mt-2 leading-relaxed">
                  We welcome prospective parents and scholars for guided walking tours of our 25-acre
                  grounds, residential hostels, and science laboratories every Monday through Saturday.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold text-[#00162d]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#7c5800]" />
                    <span>Tours: 9:30 AM – 3:30 PM IST</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#7c5800]" />
                    <span>Nilambur, Malappuram (Kerala)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowApplyModal(true)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#00162d] text-white rounded-lg font-bold text-sm hover:bg-[#0f2b48] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Campus Tour Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#c4c6ce] hover:border-[#00162d] text-[#00162d] rounded-lg font-bold text-sm bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#7c5800]" />
                  <span>Call Admissions Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenDisclosureModal={() => setShowDisclosureModal(true)}
        onOpenApplyModal={() => setShowApplyModal(true)}
        onSelectTab={handleTabSelect}
      />

      {/* Interactive Modals */}
      {showTourModal && <VirtualTourModal onClose={() => setShowTourModal(false)} />}
      {showPortalModal && <PortalModal onClose={() => setShowPortalModal(false)} />}
      {showApplyModal && <ApplyModal onClose={() => setShowApplyModal(false)} />}
      {showDisclosureModal && <DisclosureModal onClose={() => setShowDisclosureModal(false)} />}
    </div>
  );
}
