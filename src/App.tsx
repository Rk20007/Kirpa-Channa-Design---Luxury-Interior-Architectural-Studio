/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectModal } from './components/ProjectModal';
import { NeuroarchitectureLab } from './components/NeuroarchitectureLab';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { FounderSection } from './components/FounderSection';
import { EstimateCalculator } from './components/EstimateCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationMapSection } from './components/LocationMapSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PROJECTS, STUDIO_INFO } from './data/studioData';
import { MessageSquare, MapPin } from 'lucide-react';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationData, setConsultationData] = useState<{
    projectName?: string;
    propertyType?: string;
    area?: number;
    scope?: string;
    estimatedCost?: string;
    estimatedTimeline?: string;
  } | null>(null);

  const selectedProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  const handleOpenConsultation = (data?: {
    projectName?: string;
    propertyType?: string;
    area?: number;
    scope?: string;
    estimatedCost?: string;
    estimatedTimeline?: string;
  }) => {
    setConsultationData(data || null);
    setIsConsultationOpen(true);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#E8E4DF] flex flex-col font-sans selection:bg-[#C5A880] selection:text-[#121110]">
      {/* Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenEstimator={handleScrollToEstimator}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenEstimator={handleScrollToEstimator}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Portfolio Showcase with Before/After Slider */}
        <ProjectShowcase
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* The Neuroarchitecture Lab & Circadian Simulator */}
        <NeuroarchitectureLab />

        {/* Sensory Material Archive */}
        <MaterialsShowcase />

        {/* Founder Bio & 4-Step Turnkey Process */}
        <FounderSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Interactive Scope & Feasibility Calculator */}
        <EstimateCalculator
          onOpenConsultationWithData={(data) => handleOpenConsultation(data)}
        />

        {/* Verified Patrons & Reviews */}
        <TestimonialsSection />

        {/* Direct Google Maps Location Pin & Connectivity */}
        <LocationMapSection
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenEstimator={handleScrollToEstimator}
      />

      {/* Floating Bottom Quick Contact Bar */}
      <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href={STUDIO_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#181614] border border-[#3E3A33] text-[#C5A880] hover:text-[#F3EFEA] hover:border-[#C5A880] shadow-xl backdrop-blur-md transition-all hover:scale-105"
          title="Open Google Maps Pin (Tauru)"
        >
          <MapPin className="w-5 h-5" />
        </a>

        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-full bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:bg-[#20ba59] transition-all hover:scale-105 flex items-center gap-2"
          title="Direct WhatsApp Consultation"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Studio</span>
        </a>
      </aside>

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onInquireProject={(projectName) =>
          handleOpenConsultation({ projectName })
        }
      />

      {/* Private Consultation & Appointment Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialData={consultationData}
      />
    </div>
  );
}
