/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HeritageSection } from './components/HeritageSection';
import { PillarsSection } from './components/PillarsSection';
import { AcademicsSection } from './components/AcademicsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionSection } from './components/AdmissionSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CampusVisitSection } from './components/CampusVisitSection';
import { Footer } from './components/Footer';
import { VirtualTourModal } from './components/VirtualTourModal';
import { PortalModal } from './components/PortalModal';
import { ApplyModal } from './components/ApplyModal';
import { DisclosureModal } from './components/DisclosureModal';

/** Masthead height plus breathing room, used when scrolling to a section. */
const MASTHEAD_OFFSET_PX = 104;

/**
 * Names of the overlays that can be open at once. Only one is ever shown, so a
 * single discriminated state replaces four independent booleans.
 */
type OpenModal = 'apply' | 'portal' | 'tour' | 'disclosure' | null;

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [openModal, setOpenModal] = useState<OpenModal>(null);

  const closeModal = useCallback(() => setOpenModal(null), []);

  const scrollToSection = useCallback((id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - MASTHEAD_OFFSET_PX;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const handleTabSelect = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      scrollToSection(tab);
    },
    [scrollToSection],
  );

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-body selection:bg-secondary-container selection:text-primary">
      {/* Fixed Sticky Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleTabSelect}
        onOpenApplyModal={() => setOpenModal('apply')}
        onOpenPortalModal={() => setOpenModal('portal')}
        onOpenTourModal={() => setOpenModal('tour')}
      />

      {/* Main Page Flow */}
      <main className="w-full flex-1">
        {/* 1. Hero — cinematic scene rotation and headline statistics */}
        <HeroSection
          onOpenApplyModal={() => setOpenModal('apply')}
          onOpenTourModal={() => setOpenModal('tour')}
          onScrollToAdmissions={() => scrollToSection('admissions')}
        />

        {/* 2. Institutional heritage, principal's message and campus factsheet */}
        <HeritageSection />

        {/* 3. Why families choose us — the six pillars */}
        <PillarsSection />

        {/* 4. Academic pathways — classes IV to XII */}
        <AcademicsSection />

        {/* 5. Campus infrastructure and facilities bento grid (anchors #gallery) */}
        <FacilitiesSection onOpenTourModal={() => setOpenModal('tour')} />

        {/* 6. Admissions banner and quick enquiry capture */}
        <AdmissionSection onOpenApplyModal={() => setOpenModal('apply')} />

        {/* 7. Testimonials and verified CBSE board outcomes */}
        <TestimonialsSection />

        {/* 8. Plan a campus visit (anchors #contact) */}
        <CampusVisitSection onOpenApplyModal={() => setOpenModal('apply')} />
      </main>

      {/* Footer */}
      <Footer
        onOpenDisclosureModal={() => setOpenModal('disclosure')}
        onOpenApplyModal={() => setOpenModal('apply')}
        onSelectTab={handleTabSelect}
      />

      {/* Interactive Modals — at most one is mounted at a time */}
      {openModal === 'tour' && <VirtualTourModal onClose={closeModal} />}
      {openModal === 'portal' && <PortalModal onClose={closeModal} />}
      {openModal === 'apply' && <ApplyModal onClose={closeModal} />}
      {openModal === 'disclosure' && <DisclosureModal onClose={closeModal} />}
    </div>
  );
}
