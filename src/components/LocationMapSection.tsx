import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink, ShieldCheck, Car, Check } from 'lucide-react';

interface LocationMapSectionProps {
  onOpenConsultation: () => void;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({ onOpenConsultation }) => {
  const [copiedCoords, setCopiedCoords] = useState(false);

  const copyCoordinates = () => {
    navigator.clipboard.writeText(`${STUDIO_INFO.coordinates.lat}, ${STUDIO_INFO.coordinates.lng}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-[#121110] border-t border-[#262421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Location & Accessibility</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFEA] font-normal">
            Visit the Tauru Studio
          </h2>
          <p className="text-sm text-[#A69F94] font-light leading-relaxed">
            Located at the crossroads of Gurgaon, Sohna, and Bhiwadi, our design atelier welcomes private clients, architects, and estate patrons by appointment.
          </p>
        </div>

        {/* Studio Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Studio Details Card */}
          <div className="lg:col-span-5 bg-[#161513] border border-[#2E2B26] p-6 sm:p-8 space-y-6">
            
            <div className="space-y-2 pb-6 border-b border-[#262421]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#C5A880]">
                  Official Studio Pin
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Verified</span>
                </span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#F3EFEA]">
                {STUDIO_INFO.name}
              </h3>
              <p className="text-xs text-[#A69F94] leading-relaxed">
                {STUDIO_INFO.address.street}, {STUDIO_INFO.address.locality}
                <br />
                {STUDIO_INFO.address.landmark}, Haryana {STUDIO_INFO.address.country}
              </p>
            </div>

            {/* Coordinates widget */}
            <div className="p-4 bg-[#1B1917] border border-[#2E2B26] flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8C857B] block font-mono">
                  GPS COORDINATES
                </span>
                <span className="font-mono text-[#E8E4DF] font-medium">
                  {STUDIO_INFO.coordinates.display}
                </span>
              </div>
              <button
                onClick={copyCoordinates}
                className="px-2.5 py-1 text-[11px] border border-[#3E3A33] hover:border-[#C5A880] text-[#A69F94] hover:text-[#E8E4DF] transition-colors cursor-pointer flex items-center gap-1"
              >
                {copiedCoords ? <Check className="w-3 h-3 text-emerald-400" /> : null}
                <span>{copiedCoords ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Hours & Contact */}
            <div className="space-y-3 text-xs text-[#CCC5B9]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#F3EFEA]">Studio Hours</div>
                  <div className="text-[#8C857B]">{STUDIO_INFO.hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#F3EFEA]">Direct Telephone</div>
                  <a href={`tel:${STUDIO_INFO.phone}`} className="text-[#8C857B] hover:text-[#C5A880]">
                    {STUDIO_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#F3EFEA]">Official Inquiries</div>
                  <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#8C857B] hover:text-[#C5A880]">
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Transit times */}
            <div className="pt-4 border-t border-[#262421] space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-medium block">
                Regional Connectivity
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#A69F94]">
                <div className="p-2 bg-[#1B1917] border border-[#262421]">
                  <span className="text-[#E8E4DF] font-medium">Bhiwadi Corridor:</span> 15 mins
                </div>
                <div className="p-2 bg-[#1B1917] border border-[#262421]">
                  <span className="text-[#E8E4DF] font-medium">Sohna Elevated:</span> 20 mins
                </div>
                <div className="p-2 bg-[#1B1917] border border-[#262421]">
                  <span className="text-[#E8E4DF] font-medium">Gurgaon Cyber City:</span> 40 mins
                </div>
                <div className="p-2 bg-[#1B1917] border border-[#262421]">
                  <span className="text-[#E8E4DF] font-medium">Delhi IGI Airport:</span> 55 mins
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#C5A880] hover:bg-[#D5BC96] text-[#121110] font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 border border-[#3E3A33] hover:border-[#C5A880] text-[#E8E4DF] hover:text-[#C5A880] text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer bg-[#1A1816]"
              >
                <span>Request Appointment Time</span>
              </button>
            </div>

          </div>

          {/* Right Interactive Embedded Map & Satellite View */}
          <div className="lg:col-span-7 bg-[#161513] border border-[#2E2B26] p-4 sm:p-6 space-y-4">
            
            <div className="relative aspect-16/11 sm:aspect-16/10 overflow-hidden border border-[#2E2B26] bg-[#0A0A09]">
              {/* Responsive Google Maps Iframe using exact coordinates */}
              <iframe
                title="Kirpa Channa Design Google Maps Pin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(105%) brightness(95%)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=28.2056643,76.8107882&hl=en&z=15&output=embed`}
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-[#121110]/95 backdrop-blur-md px-3.5 py-2 border border-[#3E3A33] text-xs shadow-xl hidden sm:block">
                <div className="flex items-center gap-1.5 font-medium text-[#F3EFEA]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Kirpa Channa Design Atelier</span>
                </div>
                <div className="text-[10px] text-[#A69F94] mt-0.5">
                  Tauru, Haryana · Coordinates: 28.2056643, 76.8107882
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#8C857B] px-1">
              <span>Interactive satellite and terrain pin provided via Google Maps.</span>
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A880] hover:underline flex items-center gap-1"
              >
                <span>Full Map Screen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
