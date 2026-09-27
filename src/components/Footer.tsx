import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUp, Compass, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0A09] border-t border-[#262421] text-[#A69F94] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262421]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-display text-2xl tracking-[0.2em] text-[#F3EFEA] font-medium">
                  KIRPA CHANNA
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
                  DESIGN
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#7A7368] mt-1">
                Multidisciplinary Interior Architecture Studio
              </p>
            </div>

            <p className="text-xs text-[#8C857B] font-light leading-relaxed max-w-sm">
              Crafting restorative environments through neuroarchitecture, honest natural stone materiality, and bespoke Indian & international craftsmanship.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#C5A880] font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>{STUDIO_INFO.coordinates.display} · Tauru, NCR</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3EFEA] font-medium block">
              Exploration
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portfolio" className="hover:text-[#C5A880] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#neuroarchitecture" className="hover:text-[#C5A880] transition-colors">
                  Neuroarchitecture Lab
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#C5A880] transition-colors">
                  Material Library
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#C5A880] transition-colors">
                  About Kirpa Kaur Channa
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C5A880] transition-colors">
                  Tauru Studio & Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3EFEA] font-medium block">
              Engagement
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-[#C5A880] transition-colors text-left cursor-pointer"
                >
                  Book Private Dialogue
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEstimator}
                  className="hover:text-[#C5A880] transition-colors text-left cursor-pointer"
                >
                  Project Scope Estimator
                </button>
              </li>
              <li>
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1"
                >
                  <span>Google Maps Pin</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Inquiries</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3EFEA] font-medium block">
              Tauru Atelier
            </span>
            <p className="text-xs text-[#8C857B] leading-relaxed">
              {STUDIO_INFO.address.street}
              <br />
              {STUDIO_INFO.address.locality}
              <br />
              Near Delhi-NCR / Gurgaon-Bhiwadi Axis
            </p>

            <div className="space-y-1 pt-1">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="text-[#CCC5B9] hover:text-[#C5A880] flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{STUDIO_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="text-[#CCC5B9] hover:text-[#C5A880] flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{STUDIO_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Global Cities Presence & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7368]">
          <div className="flex flex-wrap items-center gap-3">
            <span>Commissioned Presence:</span>
            <span className="text-[#A69F94]">Tauru</span>
            <span>·</span>
            <span className="text-[#A69F94]">Gurgaon</span>
            <span>·</span>
            <span className="text-[#A69F94]">Delhi-NCR</span>
            <span>·</span>
            <span className="text-[#A69F94]">Toronto</span>
            <span>·</span>
            <span className="text-[#A69F94]">Dubai</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Kirpa Channa Design. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#2E2B26] hover:border-[#C5A880] text-[#A69F94] hover:text-[#F3EFEA] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
