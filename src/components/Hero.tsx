import React from 'react';
import { STUDIO_INFO, PROJECTS } from '../data/studioData';
import { ArrowUpRight, Compass, Star, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onOpenEstimator,
  onSelectProject
}) => {
  const featured = PROJECTS[0];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#121110]">
      {/* Background Architectural Canvas with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={featured.heroImage}
          alt="Kirpa Channa Design - Luxury Interior Architecture"
          className="w-full h-full object-cover object-center opacity-38 scale-105 filter brightness-85 contrast-110"
        />
        {/* Editorial Gradients for high contrast & luxury atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/75 to-[#121110]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#121110]/40 to-[#121110]/90" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 border-x border-[#8C857B]/30">
          <div className="border-r border-[#8C857B]/20 h-full" />
          <div className="border-r border-[#8C857B]/20 h-full hidden md:block" />
          <div className="border-r border-[#8C857B]/20 h-full hidden md:block" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Left Editorial Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Coordinates & Google Pin verification metadata (unboxed, clean typography) */}
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-[#B8AF9F]">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C5A880] hover:underline"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="font-mono">{STUDIO_INFO.coordinates.display}</span>
              </a>
              <span className="text-[#555047]">·</span>
              <span className="uppercase text-[11px] tracking-widest text-[#D4CCC0]">
                Tauru Studio · NCR
              </span>
              <span className="text-[#555047]">·</span>
              <span className="inline-flex items-center gap-1 text-[#E5DDD0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Verified Studio Pin</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] block font-medium">
                Multidisciplinary Interior Architecture & Neuroarchitecture
              </span>
              <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F7F4EF] leading-[1.08]">
                Spaces Sculpted for the <span className="italic font-light text-[#E8D6BF]">Human Nervous System</span>.
              </h1>
            </div>

            {/* Subtitle / Philosophy */}
            <p className="text-base sm:text-lg text-[#C8C0B2] max-w-2xl font-light leading-relaxed">
              Founded by award-winning designer <strong className="text-[#F3EFEA] font-medium">Kirpa Kaur Channa</strong> (ARIDO Award Laureate), our Tauru-based studio orchestrates emotionally intelligent residences, restorative retreats, and bespoke commercial pavilions across Delhi-NCR, Canada, and the globe.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#D5BC96] text-[#121110] font-medium tracking-[0.15em] uppercase text-xs transition-all shadow-lg hover:shadow-[#C5A880]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Private Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 border border-[#3E3A33] hover:border-[#C5A880] bg-[#1A1816]/70 backdrop-blur-xs text-[#E8E4DF] hover:text-[#C5A880] tracking-[0.15em] uppercase text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Calculate Scope & Estimate</span>
              </button>

              <a
                href="#portfolio"
                className="px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-[#A69F94] hover:text-[#F3EFEA] transition-colors"
              >
                Explore Works ↓
              </a>
            </div>

            {/* Trust indicators strip */}
            <div className="pt-8 border-t border-[#262421] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <div className="flex items-center gap-1 text-[#C5A880] mb-1">
                  <Star className="w-3.5 h-3.5 fill-[#C5A880]" />
                  <span className="font-semibold text-sm text-[#F3EFEA]">5.0</span>
                  <span className="text-[11px] text-[#8C857B]">({STUDIO_INFO.reviewsCount} reviews)</span>
                </div>
                <div className="text-[11px] text-[#A69F94] uppercase tracking-wider">
                  Google Maps Rated
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm text-[#F3EFEA] mb-1">
                  ARIDO Award
                </div>
                <div className="text-[11px] text-[#A69F94] uppercase tracking-wider">
                  Promising Designer of the Year
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm text-[#F3EFEA] mb-1">
                  100% Turnkey
                </div>
                <div className="text-[11px] text-[#A69F94] uppercase tracking-wider">
                  Design to Site Handover
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm text-[#F3EFEA] mb-1">
                  6+ Countries
                </div>
                <div className="text-[11px] text-[#A69F94] uppercase tracking-wider">
                  Global Commission Portfolio
                </div>
              </div>
            </div>

          </div>

          {/* Right Featured Project Card Preview */}
          <div className="lg:col-span-4">
            <div className="bg-[#181614]/90 border border-[#2E2B26] p-5 sm:p-6 backdrop-blur-md space-y-4 hover:border-[#C5A880]/50 transition-all duration-300">
              <div className="flex items-center justify-between text-xs text-[#8C857B]">
                <span className="uppercase tracking-[0.2em] text-[#C5A880]">Featured Commission</span>
                <span>{featured.year}</span>
              </div>

              <div
                className="relative aspect-4/3 overflow-hidden cursor-pointer group"
                onClick={() => onSelectProject(featured.id)}
              >
                <img
                  src={featured.heroImage}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs text-[#E8E4DF] font-medium tracking-wide">
                    {featured.location}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A880] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-serif-display text-xl text-[#F3EFEA] font-medium">
                  {featured.title}
                </h2>
                <p className="text-xs text-[#A69F94] mt-1 line-clamp-2">
                  {featured.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#262421] flex items-center justify-between text-xs">
                <span className="text-[#8C857B]">Material Palette:</span>
                <div className="flex items-center gap-1.5">
                  {featured.palette.map((p) => (
                    <span
                      key={p.name}
                      title={p.name}
                      className="w-3.5 h-3.5 rounded-full border border-black/40 inline-block shadow-inner"
                      style={{ backgroundColor: p.hex }}
                    />
                  ))}
                </div>
              </div>

              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs uppercase tracking-widest text-[#C5A880] hover:text-[#E8E4DF] border border-[#332E27] hover:border-[#C5A880] transition-colors flex items-center justify-center gap-2"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Visit Studio in Tauru (Directions)</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
