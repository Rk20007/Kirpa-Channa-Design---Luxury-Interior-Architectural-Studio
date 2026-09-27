import React from 'react';
import { TESTIMONIALS, STUDIO_INFO } from '../data/studioData';
import { Star, Quote, ShieldCheck, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#121110] border-t border-[#262421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              <Star className="w-3.5 h-3.5 fill-[#C5A880]" />
              <span>Patron Testimonials</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFEA] font-normal">
              Words from Our Patrons
            </h2>
          </div>

          {/* Google Maps Review Badge */}
          <div className="p-4 bg-[#181614] border border-[#2E2B26] flex items-center gap-4">
            <div>
              <div className="flex items-center gap-1 text-[#C5A880]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                ))}
              </div>
              <div className="text-xs text-[#E8E4DF] font-medium mt-1">
                5.0 Rating · {STUDIO_INFO.reviewsCount} Google Reviews
              </div>
              <div className="text-[10px] text-[#8C857B]">
                Kirpa Channa Design, Tauru Studio
              </div>
            </div>
            <a
              href={STUDIO_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C5A880] hover:underline"
            >
              Verify on Maps →
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#161513] border border-[#262421] p-8 flex flex-col justify-between space-y-6 relative hover:border-[#C5A880]/50 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#C5A880]/60" />
                <p className="text-sm text-[#CCC5B9] font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#262421]">
                <div className="font-serif-display text-lg text-[#F3EFEA] font-medium">
                  {t.author}
                </div>
                <div className="text-xs text-[#C5A880]">{t.role}</div>
                <div className="text-[11px] text-[#8C857B] mt-0.5">{t.project}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
