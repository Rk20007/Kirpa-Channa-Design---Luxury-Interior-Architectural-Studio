import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Compass, Phone, MessageSquare, Menu, X, ArrowUpRight, Award } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Neuroarchitecture', href: '#neuroarchitecture' },
    { name: 'Materials', href: '#materials' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Studio & Location', href: '#location' },
    { name: 'Estimate Scope', href: '#estimator', onClick: onOpenEstimator },
  ];

  return (
    <>
      {/* Top micro bar with coordinates & studio status */}
      <div className="bg-[#0D0C0B] border-b border-[#262421] text-[11px] text-[#A69F94] py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#C5A880]">
              <Compass className="w-3 h-3 text-[#C5A880]" />
              <span>{STUDIO_INFO.coordinates.display}</span>
            </span>
            <span className="text-[#4A463F]">·</span>
            <span>Tauru & Gurgaon / Delhi-NCR Hub</span>
            <span className="text-[#4A463F]">·</span>
            <span className="flex items-center gap-1 text-[#E8E4DF]">
              <Award className="w-3 h-3 text-[#C5A880]" />
              <span>ARIDO Award Laureate</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={STUDIO_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A880] transition-colors flex items-center gap-1"
            >
              <span>View Google Maps Pin</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-[#4A463F]">·</span>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="hover:text-[#C5A880] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#121110]/95 backdrop-blur-md border-b border-[#262421] shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#121110]/90 to-[#121110]/40 backdrop-blur-xs border-b border-[#262421]/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand mark */}
          <a href="#" className="group flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-xl sm:text-2xl tracking-[0.18em] text-[#F3EFEA] font-medium group-hover:text-[#C5A880] transition-colors">
                KIRPA CHANNA
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-light">
                DESIGN
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#8C857B] mt-0.5">
              Interior Architecture · Tauru NCR
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide text-[#CCC5B9]">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className="hover:text-[#F3EFEA] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="p-2.5 rounded border border-[#3A3630] text-[#D8CFBE] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors bg-[#1A1816]"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium bg-[#C5A880] text-[#121110] hover:bg-[#D8BE96] transition-all duration-200 shadow-sm rounded-none border border-[#C5A880] cursor-pointer flex items-center gap-2"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium bg-[#C5A880] text-[#121110] sm:hidden"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E8E4DF] hover:text-[#C5A880] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121110] bg-opacity-98 flex flex-col p-6 lg:hidden animate-fade-in">
          <div className="flex items-center justify-between pb-6 border-b border-[#262421]">
            <div>
              <span className="font-serif-display text-xl tracking-[0.15em] text-[#F3EFEA]">
                KIRPA CHANNA DESIGN
              </span>
              <p className="text-[10px] text-[#A69F94] tracking-widest uppercase mt-0.5">
                Tauru Studio · Delhi-NCR
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#E8E4DF]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 py-8 text-base">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className="text-[#E8E4DF] hover:text-[#C5A880] transition-colors flex items-center justify-between border-b border-[#262421]/60 pb-3"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C857B]" />
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-3 pt-6 border-t border-[#262421]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center uppercase tracking-widest text-xs font-semibold bg-[#C5A880] text-[#121110]"
            >
              Book Private Consultation
            </button>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center uppercase tracking-widest text-xs font-medium border border-[#3A3630] text-[#E8E4DF] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A880]" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
            <div className="text-[11px] text-center text-[#7A7368] pt-2">
              Studio Location: {STUDIO_INFO.coordinates.display} · Tauru, NCR
            </div>
          </div>
        </div>
      )}
    </>
  );
};
