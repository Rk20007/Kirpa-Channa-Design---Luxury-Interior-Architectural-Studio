import React, { useState } from 'react';
import { Project } from '../data/studioData';
import { X, ArrowRight, Check, Compass, Shield, Share2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 bg-[#161513] border border-[#2E2B26] max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col my-auto text-[#E8E4DF]">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-[#161513]/95 backdrop-blur-md px-6 py-4 border-b border-[#262421] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
              {project.categoryLabel}
            </span>
            <span className="text-[#4A463F]">·</span>
            <span className="text-xs text-[#8C857B]">{project.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 text-[#8C857B] hover:text-[#C5A880] transition-colors"
              title="Copy Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#8C857B] hover:text-[#E8E4DF] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Display */}
          <div className="space-y-3">
            <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-black border border-[#2E2B26]">
              <img
                src={project.gallery[activeImageIndex] || project.heroImage}
                alt={`${project.title} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-3 right-3 bg-[#121110]/80 px-2.5 py-1 text-xs text-[#A69F94] border border-[#2E2B26]">
                {activeImageIndex + 1} / {project.gallery.length}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 shrink-0 overflow-hidden border cursor-pointer transition-all ${
                      activeImageIndex === idx ? 'border-[#C5A880] scale-98' : 'border-[#2E2B26] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#262421]">
            <div className="md:col-span-2 space-y-3">
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F3EFEA] font-normal">
                {project.title}
              </h2>
              <p className="text-sm text-[#C5A880] font-light italic">
                "{project.tagline}"
              </p>
              <p className="text-sm text-[#A69F94] leading-relaxed font-light pt-2">
                {project.description}
              </p>
            </div>

            {/* Specs Column */}
            <div className="bg-[#1B1917] border border-[#2E2B26] p-5 space-y-3 self-start">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] pb-2 border-b border-[#2E2B26]">
                Commission Specs
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8C857B]">Location</span>
                  <span className="text-[#E8E4DF] font-medium">{project.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C857B]">Spatial Area</span>
                  <span className="text-[#E8E4DF] font-medium">{project.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C857B]">Year Handover</span>
                  <span className="text-[#E8E4DF] font-medium">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C857B]">Lead Architect</span>
                  <span className="text-[#E8E4DF] font-medium">Kirpa Kaur Channa</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2E2B26] text-[11px] text-[#A69F94] italic">
                {project.highlight}
              </div>
            </div>
          </div>

          {/* Neuroarchitecture Blueprint & Spatial Psychology */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880]">
              <Compass className="w-4 h-4 text-[#C5A880]" />
              <span>Neuroarchitecture Calibration</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.neuroAspects.map((aspect, i) => (
                <div key={i} className="p-4 bg-[#1B1917] border border-[#262421] space-y-2">
                  <span className="text-[10px] text-[#C5A880] font-mono">0{i + 1} // SENSORY CALIBRATION</span>
                  <p className="text-xs text-[#CCC5B9] font-light leading-relaxed">
                    {aspect}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Materiality & Tonal Palette */}
          <div className="space-y-4 pt-4 border-t border-[#262421]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] block">
              Curated Material Palette
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.palette.map((p) => (
                <div key={p.name} className="p-3 bg-[#1B1917] border border-[#262421] space-y-2">
                  <div
                    className="h-10 w-full border border-black/30 rounded-xs shadow-inner"
                    style={{ backgroundColor: p.hex }}
                  />
                  <div>
                    <div className="text-xs text-[#E8E4DF] font-medium">{p.name}</div>
                    <div className="text-[10px] text-[#8C857B]">{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-[#262421] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#8C857B] text-center sm:text-left">
              Interested in translating these neuroarchitectural principles into your residence or commercial project?
            </div>
            <button
              onClick={() => {
                onClose();
                onInquireProject(project.title);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#C5A880] hover:bg-[#D5BC96] text-[#121110] font-medium tracking-wider uppercase text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Commission a Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
