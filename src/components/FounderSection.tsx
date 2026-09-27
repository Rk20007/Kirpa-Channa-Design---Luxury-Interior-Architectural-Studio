import React from 'react';
import { STUDIO_INFO, STUDIO_TIMELINE_STEPS } from '../data/studioData';
import { Award, Globe, Quote, CheckCircle, ArrowUpRight } from 'lucide-react';

interface FounderSectionProps {
  onOpenConsultation: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="philosophy" className="py-24 bg-[#0F0E0D] border-t border-[#262421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Founder Bio Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Portrait & Credentials Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-4/5 overflow-hidden border border-[#2E2B26] bg-[#161513]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                alt="Kirpa Kaur Channa - Principal Architect"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
                  Studio Founder & Lead Architect
                </span>
                <h3 className="font-serif-display text-2xl text-[#F3EFEA] font-medium">
                  {STUDIO_INFO.founder}
                </h3>
                <p className="text-xs text-[#A69F94]">
                  ARIDO Award Recipient · Canada & India
                </p>
              </div>
            </div>

            {/* Accolades List */}
            <div className="p-4 bg-[#141311] border border-[#262421] space-y-2.5">
              <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold block">
                Honors & Recognition
              </span>
              {STUDIO_INFO.accolades.map((acc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#CCC5B9]">
                  <Award className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              <Quote className="w-3.5 h-3.5" />
              <span>Architectural Manifesto</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFEA] font-normal leading-tight">
              "We do not merely decorate rooms. We orchestrate emotional sanctuaries."
            </h2>

            <div className="space-y-4 text-sm text-[#A69F94] font-light leading-relaxed">
              <p>
                Having lived across Nigeria, studied architectural design in Canada, and delivered visionary spaces in the UAE, USA, and India, <strong className="text-[#E8E4DF] font-medium">Kirpa Kaur Channa</strong> brings a rare global perspective to the NCR design landscape.
              </p>
              <p>
                From our dedicated studio in Tauru, Haryana, we challenge the trend of mass-produced, soulless luxury. We believe true luxury is calm—the scent of genuine cedar, the gentle acoustic decay of hand-finished travertine, and the profound restoration of returning to an environment tailored for your body and spirit.
              </p>
              <p>
                Every commission, whether an 8,000 sq. ft. private estate in the Aravalli foothills or a corporate boardroom in Bhiwadi, is personally overseen by Kirpa from structural inception through white-glove handover.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#C5A880] hover:bg-[#D5BC96] text-[#121110] font-medium uppercase tracking-wider text-xs transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Schedule a Private Studio Dialogue</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* 4-Step Turnkey Process Grid */}
        <div className="mt-20 pt-16 border-t border-[#262421]">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              Turnkey Execution Methodology
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F3EFEA]">
              From Concept to Handover
            </h3>
            <p className="text-xs sm:text-sm text-[#8C857B]">
              A disciplined four-phase trajectory ensuring budget integrity, photorealistic alignment, and zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIO_TIMELINE_STEPS.map((step) => (
              <div key={step.number} className="bg-[#141311] border border-[#262421] p-6 space-y-3 relative group hover:border-[#C5A880]/50 transition-colors">
                <div className="text-2xl font-serif-display text-[#C5A880] font-light">
                  {step.number}
                </div>
                <div className="text-[11px] font-mono text-[#8C857B] uppercase tracking-wider">
                  {step.duration}
                </div>
                <h4 className="font-serif-display text-lg text-[#F3EFEA]">
                  {step.phase}
                </h4>
                <p className="text-xs text-[#A69F94] font-light leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
