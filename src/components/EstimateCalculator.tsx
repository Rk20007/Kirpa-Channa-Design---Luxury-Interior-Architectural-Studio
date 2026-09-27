import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Calculator, Clock, Users, ShieldCheck, ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';

interface EstimateCalculatorProps {
  onOpenConsultationWithData: (data: {
    propertyType: string;
    area: number;
    scope: string;
    estimatedTimeline: string;
    estimatedCost: string;
  }) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({
  onOpenConsultationWithData
}) => {
  const [propertyType, setPropertyType] = useState('villa');
  const [area, setArea] = useState(6500);
  const [scope, setScope] = useState<'turnkey' | 'interior' | 'styling'>('turnkey');

  const propertyTypes = [
    { id: 'villa', label: 'Luxury Villa / Estate', baseRate: 3800 },
    { id: 'penthouse', label: 'Sky Duplex / Penthouse', baseRate: 4200 },
    { id: 'farmhouse', label: 'Farmhouse Sanctuary', baseRate: 3500 },
    { id: 'commercial', label: 'Executive HQ / Corporate', baseRate: 3200 },
    { id: 'hospitality', label: 'Boutique Hotel / Spa', baseRate: 4500 }
  ];

  const scopeMultipliers = {
    turnkey: { mult: 1.0, label: 'Full Turnkey Architecture & Execution', durationMonths: [6, 9] },
    interior: { mult: 0.75, label: 'Interior Architecture & Bespoke Millwork', durationMonths: [4, 6] },
    styling: { mult: 0.45, label: 'Sensory Curation, Furniture & Acoustics', durationMonths: [2, 4] }
  };

  const selectedProp = propertyTypes.find(p => p.id === propertyType) || propertyTypes[0];
  const selectedScope = scopeMultipliers[scope];

  const ratePerSqFt = Math.round(selectedProp.baseRate * selectedScope.mult);
  const totalMin = Math.round((ratePerSqFt * area * 0.9) / 100000); // In Lakhs
  const totalMax = Math.round((ratePerSqFt * area * 1.15) / 100000); // In Lakhs

  const timelineMin = selectedScope.durationMonths[0] + (area > 8000 ? 2 : 0);
  const timelineMax = selectedScope.durationMonths[1] + (area > 8000 ? 3 : 0);
  const timelineString = `${timelineMin} – ${timelineMax} Months`;
  const costString = `₹${totalMin} Lakhs – ₹${totalMax} Lakhs (Est. ₹${ratePerSqFt}/sq.ft)`;

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Kirpa Channa Design team, I used your website project calculator:\n\n- Property: ${selectedProp.label}\n- Area: ${area.toLocaleString()} sq.ft\n- Scope: ${selectedScope.label}\n- Estimated Scope: ${costString}\n- Estimated Timeline: ${timelineString}\n\nI would like to schedule a feasibility discussion.`
    );
    window.open(`https://wa.me/919812044921?text=${text}`, '_blank');
  };

  const handleConsultation = () => {
    onOpenConsultationWithData({
      propertyType: selectedProp.label,
      area,
      scope: selectedScope.label,
      estimatedTimeline: timelineString,
      estimatedCost: costString
    });
  };

  return (
    <section id="estimator" className="py-24 bg-[#0F0E0D] border-t border-[#262421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Calculator</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFEA] font-normal">
            Project Scope & Feasibility
          </h2>
          <p className="text-sm text-[#A69F94] font-light leading-relaxed">
            Configure your spatial parameters to receive real-time estimates for timeline duration, milestone phases, and turnkey investment benchmarks.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#141311] border border-[#262421] p-6 sm:p-8 space-y-8">
            
            {/* 1. Property Type */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-[#C5A880] block font-medium">
                1. Select Typology
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {propertyTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setPropertyType(t.id)}
                    className={`p-3 text-left border transition-all cursor-pointer text-xs ${
                      propertyType === t.id
                        ? 'bg-[#1C1A17] border-[#C5A880] text-[#F3EFEA]'
                        : 'bg-[#181614] border-[#2E2B26] text-[#A69F94] hover:text-[#CCC5B9]'
                    }`}
                  >
                    <div className="font-medium">{t.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Carpet Area Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <label className="uppercase tracking-wider text-[#C5A880] font-medium">
                  2. Spatial Footprint (Sq. Ft.)
                </label>
                <span className="font-mono text-base font-semibold text-[#F3EFEA]">
                  {area.toLocaleString()} sq. ft.
                </span>
              </div>

              <input
                type="range"
                min="1500"
                max="20000"
                step="250"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#C5A880] bg-[#2E2B26] h-1.5 cursor-pointer"
              />

              <div className="flex justify-between text-[10px] text-[#7A7368] font-mono">
                <span>1,500 sq.ft (Boutique)</span>
                <span>8,000 sq.ft (Villa)</span>
                <span>20,000+ sq.ft (Estate)</span>
              </div>
            </div>

            {/* 3. Scope of Engagement */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-[#C5A880] block font-medium">
                3. Service Depth
              </label>
              <div className="space-y-2">
                {(['turnkey', 'interior', 'styling'] as const).map((sc) => (
                  <button
                    key={sc}
                    onClick={() => setScope(sc)}
                    className={`w-full p-3.5 text-left border transition-all cursor-pointer flex items-center justify-between text-xs ${
                      scope === sc
                        ? 'bg-[#1C1A17] border-[#C5A880] text-[#F3EFEA]'
                        : 'bg-[#181614] border-[#2E2B26] text-[#A69F94] hover:text-[#CCC5B9]'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-[#F3EFEA]">{scopeMultipliers[sc].label}</div>
                      <div className="text-[11px] text-[#8C857B] mt-0.5">
                        {sc === 'turnkey' && 'Complete architectural overhaul, MEP, structural, custom stone & handover'}
                        {sc === 'interior' && 'Complete interior architecture, joinery, wall claddings & lighting'}
                        {sc === 'styling' && 'Sensory neuroarchitecture upgrade, acoustic fabrics & custom furnishings'}
                      </div>
                    </div>
                    {scope === sc && <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0 ml-3" />}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-[#161513] border border-[#2E2B26] p-6 sm:p-8 space-y-6">
            
            <div className="pb-6 border-b border-[#262421]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] block">
                Preliminary Feasibility Assessment
              </span>
              <h3 className="font-serif-display text-2xl text-[#F3EFEA] mt-1">
                {selectedProp.label}
              </h3>
              <p className="text-xs text-[#8C857B] mt-0.5">
                {area.toLocaleString()} sq. ft. · {selectedScope.label}
              </p>
            </div>

            {/* Estimated Band */}
            <div className="p-5 bg-[#1C1A17] border border-[#C5A880]/40 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#A69F94] font-mono">
                ESTIMATED INVESTMENT BRACKET
              </span>
              <div className="text-2xl font-serif-display text-[#C5A880] font-medium">
                {costString}
              </div>
              <p className="text-[11px] text-[#8C857B] pt-1">
                Transparent line-item BOQ with zero undisclosed contractor markups.
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#262421]">
                <span className="text-[#8C857B] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Execution Timeline</span>
                </span>
                <span className="font-mono text-[#E8E4DF] font-semibold">{timelineString}</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-[#262421]">
                <span className="text-[#8C857B] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Studio Team Assigned</span>
                </span>
                <span className="text-[#E8E4DF]">Lead Architect + Site Steward</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8C857B] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Quality Guarantee</span>
                </span>
                <span className="text-[#E8E4DF]">ARIDO Standards Audited</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={handleConsultation}
                className="w-full py-3.5 bg-[#C5A880] hover:bg-[#D5BC96] text-[#121110] font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed with this Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleLaunchWhatsApp}
                className="w-full py-3 border border-[#3E3A33] hover:border-[#25D366] text-[#E8E4DF] hover:text-[#25D366] text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer bg-[#1A1816]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send Scope to WhatsApp</span>
              </button>
            </div>

            <p className="text-[11px] text-[#7A7368] text-center italic">
              Estimates are directional based on regional Haryana/Delhi-NCR material indices. Exact cost frozen upon site survey.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
