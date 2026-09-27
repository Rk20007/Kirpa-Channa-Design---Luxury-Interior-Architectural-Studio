import React, { useState } from 'react';
import { MATERIALS, MaterialItem } from '../data/studioData';
import { Layers, Check, ArrowRight } from 'lucide-react';

export const MaterialsShowcase: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIALS[0]);

  return (
    <section id="materials" className="py-24 bg-[#121110] border-t border-[#262421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              <Layers className="w-3.5 h-3.5" />
              <span>Sensory Material Archive</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFEA] font-normal">
              Honest Matter & Tactile Honesty
            </h2>
            <p className="text-sm text-[#A69F94] max-w-xl font-light">
              Materials that do not pretend to be something else. We curate authentic stone, patinated bronze, and hand-troweled lime that age with grace.
            </p>
          </div>
        </div>

        {/* Swatch & Specimen Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Swatch List / Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {MATERIALS.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1C1A17] border-[#C5A880]'
                      : 'bg-[#151412] border-[#262421] hover:border-[#3D3933]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 border border-black/40 shadow-inner shrink-0"
                      style={{ backgroundColor: mat.hex }}
                    />
                    <div>
                      <h4 className="text-sm font-medium text-[#F3EFEA]">{mat.name}</h4>
                      <p className="text-[11px] text-[#8C857B]">{mat.textureType}</p>
                    </div>
                  </div>

                  <span className="text-xs text-[#C5A880]">
                    {isSelected ? 'Active Specimen' : 'Inspect'}
                  </span>
                </div>
              );
            })}

            <div className="p-4 bg-[#181614] border border-[#2E2B26] text-xs text-[#A69F94] space-y-2 mt-4">
              <span className="text-[#C5A880] uppercase tracking-wider text-[10px] font-semibold block">
                Physical Material Boxes
              </span>
              <p className="font-light">
                Clients commissioning projects receive a curated solid-oak box with 1:1 tactile stone samples, hand-dyed linen swatches, and aged metal chips delivered directly to their doorstep.
              </p>
            </div>
          </div>

          {/* Detailed Specimen Card */}
          <div className="lg:col-span-7 bg-[#161513] border border-[#2E2B26] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-[#262421]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
                  Material Specification
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F3EFEA] mt-1">
                  {selectedMaterial.name}
                </h3>
              </div>

              <div className="text-xs text-right text-[#8C857B]">
                <div className="text-[#D8CFBE] font-medium">{selectedMaterial.origin}</div>
                <div className="text-[11px]">Sourced & Hand-Inspected</div>
              </div>
            </div>

            {/* Specimen Texture Image */}
            <div className="relative aspect-16/9 overflow-hidden border border-[#262421]">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#121110]/85 px-3 py-1 text-xs text-[#E8E4DF] border border-[#2E2B26]">
                Texture: {selectedMaterial.textureType}
              </div>
            </div>

            {/* Sensory & Architectural Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#1B1917] border border-[#262421] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block font-mono">
                  SENSORY & TACTILE PROFILE
                </span>
                <p className="text-[#CCC5B9] font-light">{selectedMaterial.tactileFeel}</p>
              </div>

              <div className="p-4 bg-[#1B1917] border border-[#262421] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block font-mono">
                  ARCHITECTURAL FUNCTION
                </span>
                <p className="text-[#CCC5B9] font-light">{selectedMaterial.description}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
