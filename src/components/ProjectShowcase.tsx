import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/studioData';
import { ArrowUpRight, Maximize2, Sliders, CheckCircle2 } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (projectId: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'All Commissions' },
    { id: 'residential', label: 'Luxury Villas & Penthouses' },
    { id: 'commercial', label: 'Commercial & Executive' },
    { id: 'wellness', label: 'Wellness & Neuro' },
    { id: 'bespoke', label: 'Bespoke Millwork & Salons' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#121110] border-t border-[#262421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              <span>Portfolio of Works</span>
              <span className="text-[#4A463F]">·</span>
              <span>NCR & International</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFEA] font-normal">
              Curated Architectural Works
            </h2>
            <p className="text-sm text-[#A69F94] max-w-xl font-light">
              Each space is calibrated through spatial psychology, natural stone thermodynamics, and customized joinery crafted to stand for generations.
            </p>
          </div>

          {/* Interactive filter tabs (clean segmented controls, not pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1A1816] border border-[#2E2B26] text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 transition-all cursor-pointer text-xs uppercase tracking-wider ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A880] text-[#121110] font-semibold'
                    : 'text-[#A69F94] hover:text-[#F3EFEA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group bg-[#161513] border border-[#262421] hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/11 overflow-hidden bg-[#0D0C0B]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-transparent opacity-60" />
                
                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 bg-[#121110]/85 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#D4CCC0] border border-[#2E2B26]">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#C5A880] text-[#121110] p-2">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="flex items-center gap-2 text-xs text-[#8C857B]">
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.area}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-[#F3EFEA] group-hover:text-[#C5A880] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#A69F94] font-light leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Bottom Material Cue & Link */}
                <div className="pt-4 border-t border-[#262421] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-[#7A7368] uppercase tracking-wider">Palette:</span>
                    {project.palette.slice(0, 3).map((p) => (
                      <span
                        key={p.name}
                        title={p.name}
                        className="w-3 h-3 rounded-full border border-black/50"
                        style={{ backgroundColor: p.hex }}
                      />
                    ))}
                  </div>

                  <span className="text-xs uppercase tracking-wider text-[#C5A880] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Transformation Feature */}
        <div className="mt-20 p-8 sm:p-10 bg-[#161513] border border-[#262421]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880]">
                <Sliders className="w-3.5 h-3.5" />
                <span>Turnkey Transformation</span>
              </div>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#F3EFEA] font-normal leading-snug">
                From Raw Concrete Shell to Tactile Sanctuary
              </h3>
              <p className="text-sm text-[#A69F94] leading-relaxed font-light">
                Every Kirpa Channa commission begins with rigorous acoustic and structural analysis of the bare masonry, followed by precision HVAC concealment, custom travertine cladding, and circadian lighting installation.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-[#CCC5B9]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Zero visible air-conditioning grills or unsheathed conduits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Custom Italian and Rajasthan quarries hand-inspected by Kirpa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Integrated acoustic baffles dampening reverberation by 60%</span>
                </div>
              </div>

              <div className="text-xs text-[#8C857B] pt-2">
                Drag the slider over the photograph to inspect the transformation.
              </div>
            </div>

            {/* Interactive Before/After Comparison Slider */}
            <div className="lg:col-span-7">
              <div className="relative aspect-16/10 overflow-hidden select-none border border-[#2E2B26]">
                {/* After Image (Full background) */}
                <img
                  src={PROJECTS[0].afterImage}
                  alt="After: The Finished Travertine Sanctuary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#121110]/85 px-3 py-1 text-xs uppercase tracking-widest text-[#C5A880] border border-[#3E3A33]">
                  After: Kirpa Channa Design
                </div>

                {/* Before Image (Clipped by slider position) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={PROJECTS[0].beforeImage}
                    alt="Before: Raw Construction Shell"
                    className="w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                  />
                  <div className="absolute top-4 left-4 bg-[#121110]/85 px-3 py-1 text-xs uppercase tracking-widest text-[#E8E4DF] border border-[#3E3A33]">
                    Before: Raw Shell
                  </div>
                </div>

                {/* Slider divider line and handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-[#C5A880] shadow-lg pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#121110] border-2 border-[#C5A880] flex items-center justify-center text-[#C5A880] text-xs">
                    ↔
                  </div>
                </div>

                {/* Invisible input range covering the image */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                  aria-label="Before and after transformation slider"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
