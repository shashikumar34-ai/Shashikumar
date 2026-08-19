import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { EligibilityCalculator } from './components/EligibilityCalculator';
import { AiCounselorSection } from './components/AiCounselorSection';
import { PlacementsSection } from './components/PlacementsSection';
import { CampusFacilities } from './components/CampusFacilities';
import { VirtualCampusTour } from './components/VirtualCampusTour';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NoticeBoardModal } from './components/NoticeBoardModal';
import { CampusGalleryModal } from './components/CampusGalleryModal';
import { AdmissionsEnquiryModal } from './components/AdmissionsEnquiryModal';
import { BrochureDownloadModal } from './components/BrochureDownloadModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { FloatingAiButton } from './components/FloatingAiButton';
import { Sparkles, Phone, Bell, MessageSquareText, FileText, Bot } from 'lucide-react';
import { COLLEGE_INFO } from './data/mockData';

export default function App() {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isNoticesOpen, setIsNoticesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-400 selection:text-blue-950">
      
      {/* Fixed Header & Navigation */}
      <Header
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenNotices={() => setIsNoticesOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onOpenAi={() => setIsAiOpen(true)}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onOpenGallery={() => setIsGalleryOpen(true)}
          onOpenNotices={() => setIsNoticesOpen(true)}
          onDownloadBrochure={() => setIsBrochureOpen(true)}
          onOpenAi={() => setIsAiOpen(true)}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* Live Announcement Marquee Banner */}
        <div className="bg-[#002244] text-white py-2.5 px-4 overflow-hidden border-y border-blue-900/60 shadow-inner flex items-center">
          <div className="flex items-center space-x-2 bg-amber-400 text-blue-950 px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase flex-shrink-0 z-10 shadow-sm mr-3">
            <Bell className="w-3.5 h-3.5" />
            <span>Latest</span>
          </div>
          
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="animate-marquee inline-block text-xs font-medium text-blue-100">
              <span className="mx-4 cursor-pointer hover:text-amber-300 transition-colors" onClick={() => setIsNoticesOpen(true)}>
                📢 Admissions 2026-27 Open for BE, MBA & MCA under KCET (E037) and COMED-K (E025) Quota.
              </span>
              <span className="text-amber-400 font-bold">•</span>
              <span className="mx-4 cursor-pointer hover:text-amber-300 transition-colors" onClick={() => setIsAiOpen(true)}>
                🤖 Need Guidance? Ask ASSRKS AI Academic Counselor for instant syllabus & branch matching.
              </span>
              <span className="text-amber-400 font-bold">•</span>
              <span className="mx-4 cursor-pointer hover:text-amber-300 transition-colors" onClick={() => setIsNoticesOpen(true)}>
                🏆 Record Placement Season: Highest Package of 27.7 LPA & 500+ offers across top tech firms.
              </span>
              <span className="text-amber-400 font-bold">•</span>
              <span className="mx-4 cursor-pointer hover:text-amber-300 transition-colors" onClick={() => setIsNoticesOpen(true)}>
                🚀 K-Tech NAIN Innovation Center: Prototype project seed funding open for student startups.
              </span>
            </div>
          </div>
        </div>

        {/* About BITM & Legacy */}
        <AboutSection />

        {/* Academic Degree Programs (BE, MBA, MCA, PhD) */}
        <ProgramsSection 
          onOpenAdmissions={() => setIsAdmissionsOpen(true)} 
        />

        {/* Dedicated ASSRKS AI Academic & Admissions Counselor Section */}
        <AiCounselorSection
          onOpenAiModal={() => setIsAiOpen(true)}
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
          onDownloadBrochure={() => setIsBrochureOpen(true)}
        />

        {/* Interactive Eligibility & Cutoff Estimator */}
        <EligibilityCalculator 
          onOpenAdmissions={() => setIsAdmissionsOpen(true)} 
        />

        {/* Placement Excellence & Recruiters Wall */}
        <PlacementsSection 
          onOpenAdmissions={() => setIsAdmissionsOpen(true)} 
        />

        {/* Campus Facilities & Infrastructure */}
        <CampusFacilities 
          onOpenGallery={() => setIsGalleryOpen(true)} 
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* 360-Degree Panoramic Virtual Campus Tour */}
        <VirtualCampusTour 
          onOpenAdmissions={() => setIsAdmissionsOpen(true)} 
          onOpenVirtualTourModal={() => setIsVirtualTourOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection 
          onOpenAdmissions={() => setIsAdmissionsOpen(true)} 
        />

        {/* Contact & Transit Guide */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenNotices={() => setIsNoticesOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onDownloadBrochure={() => setIsBrochureOpen(true)}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      {/* Interactive Modals */}
      <NoticeBoardModal
        isOpen={isNoticesOpen}
        onClose={() => setIsNoticesOpen(false)}
      />

      <CampusGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      <AdmissionsEnquiryModal
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
      />

      <BrochureDownloadModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
      />

      {/* Official BITM 360 Interactive Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Official BITM Gemini AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Floating AI Counselor Launch Button */}
      <FloatingAiButton onOpen={() => setIsAiOpen(true)} />

    </div>
  );
}
