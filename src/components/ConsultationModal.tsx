import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { X, CheckCircle, Calendar, MessageSquare, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    projectName?: string;
    propertyType?: string;
    area?: number;
    scope?: string;
    estimatedCost?: string;
    estimatedTimeline?: string;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Gurgaon / Delhi-NCR');
  const [propertyType, setPropertyType] = useState('Luxury Villa');
  const [serviceScope, setServiceScope] = useState('Full Turnkey Architecture & Execution');
  const [timeline, setTimeline] = useState('Within 3 Months');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialData) {
      if (initialData.propertyType) setPropertyType(initialData.propertyType);
      if (initialData.scope) setServiceScope(initialData.scope);
      if (initialData.projectName) {
        setNotes(`Regarding commission inspired by: ${initialData.projectName}`);
      } else if (initialData.estimatedCost) {
        setNotes(
          `Estimated area: ${initialData.area?.toLocaleString()} sq.ft, budget: ${initialData.estimatedCost}, timeline: ${initialData.estimatedTimeline}`
        );
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ref = `KCD-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello Kirpa Channa Design team, I have requested a private consultation (Ref: ${bookingRef}):\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nTypology: ${propertyType}\nScope: ${serviceScope}\nNotes: ${notes}`
    );
    window.open(`https://wa.me/919812044921?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="fixed inset-0" onClick={resetAndClose} />

      <div className="relative z-10 bg-[#161513] border border-[#2E2B26] max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col text-[#E8E4DF] my-auto">
        
        {/* Header */}
        <div className="bg-[#181715] px-6 py-4 border-b border-[#262421] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif-display text-lg tracking-wide text-[#F3EFEA]">
              KIRPA CHANNA DESIGN
            </span>
            <span className="text-[#4A463F]">·</span>
            <span className="text-xs text-[#C5A880]">Private Dialogue</span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-[#8C857B] hover:text-[#E8E4DF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#1C1A17] border border-[#C5A880] mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#C5A880]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C5A880]">
                  Consultation Request Received
                </span>
                <h3 className="font-serif-display text-3xl text-[#F3EFEA]">
                  Thank You, {name || 'Esteemed Patron'}
                </h3>
                <p className="text-sm text-[#A69F94] max-w-md mx-auto font-light">
                  Your private dialogue brief has been logged under reference{' '}
                  <strong className="text-[#C5A880] font-mono">{bookingRef}</strong>.
                  Kirpa Kaur Channa and our senior spatial steward will review your architectural parameters and reach out within 24 hours.
                </p>
              </div>

              <div className="p-4 bg-[#141311] border border-[#262421] max-w-md mx-auto text-left text-xs space-y-1.5">
                <div className="text-[#C5A880] font-semibold text-[11px] uppercase tracking-wider">
                  Direct Studio Contact
                </div>
                <div className="text-[#E8E4DF]">Phone: {STUDIO_INFO.phone}</div>
                <div className="text-[#A69F94]">Location: Tauru Studio (Bhagat Singh Marg / Capital High Street)</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsAppForward}
                  className="px-6 py-3 bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:bg-[#20ba59] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Summary via WhatsApp</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="px-6 py-3 border border-[#3E3A33] text-[#E8E4DF] text-xs uppercase tracking-wider hover:border-[#C5A880] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1 pb-2">
                <h3 className="font-serif-display text-2xl text-[#F3EFEA]">
                  Initiate Architectural Dialogue
                </h3>
                <p className="text-xs text-[#8C857B]">
                  Schedule an in-person studio visit at Tauru or a confidential on-site spatial consultation across NCR.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-[#A69F94] uppercase tracking-wider block font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1A1816] border border-[#2E2B26] focus:border-[#C5A880] px-3.5 py-2.5 text-sm text-[#F3EFEA] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#A69F94] uppercase tracking-wider block font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1A1816] border border-[#2E2B26] focus:border-[#C5A880] px-3.5 py-2.5 text-sm text-[#F3EFEA] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-[#A69F94] uppercase tracking-wider block font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1A1816] border border-[#2E2B26] focus:border-[#C5A880] px-3.5 py-2.5 text-sm text-[#F3EFEA] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#A69F94] uppercase tracking-wider block font-medium">
                    Site / Residence Location *
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#1A1816] border border-[#2E2B26] focus:border-[#C5A880] px-3.5 py-2.5 text-sm text-[#F3EFEA] outline-none"
                  >
                    <option value="Tauru / Mewat Valley">Tauru / Mewat Valley</option>
                    <option value="Gurgaon / DLF / Golf Course">Gurgaon / DLF / Golf Course</option>
                    <option value="Sohna Road / Aravalli Foothills">Sohna Road / Aravalli Foothills</option>
                    <option value="Bhiwadi / Alwar Corridor">Bhiwadi / Alwar Corridor</option>
                    <option value="South Delhi / Central Delhi">South Delhi / Central Delhi</option>
                    <option value="Jaipur / Rajasthan">Jaipur / Rajasthan</option>
                    <option value="International / NRI Commission">International / NRI Commission</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-[#A69F94] uppercase tracking-wider block font-medium">
                    Project Typology
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#1A1816] border border-[#2E2B26] focus:border-[#C5A880] px-3.5 py-2.5 text-sm text-[#F3EFEA] outline-none"
                  >
                    <option value="Luxury Villa / Estate">Luxury Villa / Estate</option>
                    <option value="Sky Penthouse / Duplex">Sky Penthouse / Duplex</option>
                    <option value="Heritage Haveli Modernization">Heritage Haveli Modernization</option>
                    <option value="Executive Corporate Office">Executive Corporate Office</option>
                    <option value="Boutique Hospitality / Wellness">Boutique Hospitality / Wellness</option>
                    <option value="Bespoke Salon / Millwork">Bespoke Salon / Millwork</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#A69F94] uppercase tracking-wider block font-medium">
                    Desired Handover Window
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-[#1A1816] border border-[#2E2B26] focus:border-[#C5A880] px-3.5 py-2.5 text-sm text-[#F3EFEA] outline-none"
                  >
                    <option value="Immediate Discovery (Next 2 Weeks)">Immediate Discovery (Next 2 Weeks)</option>
                    <option value="Within 3 Months">Within 3 Months</option>
                    <option value="3 to 6 Months">3 to 6 Months</option>
                    <option value="Planning for Next Year">Planning for Next Year</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-[#A69F94] uppercase tracking-wider block font-medium">
                  Spatial Aspirations & Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding your space, square footage, neuroarchitecture preferences, or timeline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#1A1816] border border-[#2E2B26] focus:border-[#C5A880] px-3.5 py-2.5 text-sm text-[#F3EFEA] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#C5A880] hover:bg-[#D5BC96] text-[#121110] font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Brief...</span>
                  ) : (
                    <>
                      <span>Submit Private Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#7A7368] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Strict Confidentiality Guaranteed</span>
                </span>
                <span>Tauru Studio & Delhi-NCR Hub</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
