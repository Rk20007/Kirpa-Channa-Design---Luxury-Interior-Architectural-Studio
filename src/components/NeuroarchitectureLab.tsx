import React, { useState } from 'react';
import { NEURO_PILLARS } from '../data/studioData';
import { Sun, Volume2, Leaf, Maximize, Eye, Sparkles, Activity } from 'lucide-react';

export const NeuroarchitectureLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'circadian' | 'acoustic' | 'biophilic' | 'spatial'>('circadian');
  const [circadianTime, setCircadianTime] = useState<'dawn' | 'midday' | 'golden' | 'night'>('golden');

  const lightConfigs = {
    dawn: {
      kelvin: '2,200K',
      lux: '150 Lux',
      name: 'Early Dawn Awakening',
      glow: 'rgba(235, 140, 52, 0.28)',
      tint: 'bg-amber-950/30',
      biology: 'Stimulates gentle cortisol awakening response without nervous system shock.',
      roomFilter: 'sepia(30%) brightness(85%) contrast(105%) hue-rotate(-15deg)'
    },
    midday: {
      kelvin: '5,400K',
      lux: '800 Lux',
      name: 'Peak Daylight Cognitive Focus',
      glow: 'rgba(210, 230, 255, 0.20)',
      tint: 'bg-sky-950/20',
      biology: 'Peak alertness, optimal serotonin synthesis and heightened detail recognition.',
      roomFilter: 'brightness(110%) contrast(110%) saturate(105%)'
    },
    golden: {
      kelvin: '2,700K',
      lux: '300 Lux',
      name: 'Golden Hour Decompression',
      glow: 'rgba(240, 160, 60, 0.35)',
      tint: 'bg-orange-950/30',
      biology: 'Triggers parasympathetic nervous system transition; heart rate decelerates.',
      roomFilter: 'sepia(45%) brightness(95%) contrast(100%) saturate(120%)'
    },
    night: {
      kelvin: '1,800K',
      lux: '45 Lux',
      name: 'Restorative Nocturnal Sanctuary',
      glow: 'rgba(180, 70, 20, 0.20)',
      tint: 'bg-stone-950/70',
      biology: 'Zero blue light wavelength; triggers uninhibited melatonin production for deep sleep.',
      roomFilter: 'brightness(60%) contrast(120%) sepia(60%)'
    }
  };

  const currentLight = lightConfigs[circadianTime];

  return (
    <section id="neuroarchitecture" className="py-24 bg-[#0F0E0D] border-t border-[#262421] relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow matching active circadian mode */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: currentLight.glow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880]">
            <Activity className="w-3.5 h-3.5" />
            <span>Studio Specialization</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFEA] font-normal leading-tight">
            The Science of Neuroarchitecture
          </h2>
          <p className="text-sm sm:text-base text-[#A69F94] font-light leading-relaxed">
            The human brain processes environmental stimuli 24 hours a day. Kirpa Channa Design bridges neurological science with interior architecture to build spaces that proactively regulate stress hormones, sleep cycles, and mental stamina.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-[#262421] pb-4 mb-8">
          <button
            onClick={() => setActiveTab('circadian')}
            className={`p-3 text-left transition-all cursor-pointer border-b-2 ${
              activeTab === 'circadian'
                ? 'border-[#C5A880] text-[#F3EFEA] bg-[#161513]'
                : 'border-transparent text-[#8C857B] hover:text-[#CCC5B9]'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <Sun className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-mono text-[10px] text-[#C5A880]">01 // LIGHT</span>
            </div>
            <div className="font-serif-display text-base sm:text-lg">Circadian Tuning</div>
          </button>

          <button
            onClick={() => setActiveTab('acoustic')}
            className={`p-3 text-left transition-all cursor-pointer border-b-2 ${
              activeTab === 'acoustic'
                ? 'border-[#C5A880] text-[#F3EFEA] bg-[#161513]'
                : 'border-transparent text-[#8C857B] hover:text-[#CCC5B9]'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <Volume2 className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-mono text-[10px] text-[#C5A880]">02 // SOUND</span>
            </div>
            <div className="font-serif-display text-base sm:text-lg">Acoustic Geometry</div>
          </button>

          <button
            onClick={() => setActiveTab('biophilic')}
            className={`p-3 text-left transition-all cursor-pointer border-b-2 ${
              activeTab === 'biophilic'
                ? 'border-[#C5A880] text-[#F3EFEA] bg-[#161513]'
                : 'border-transparent text-[#8C857B] hover:text-[#CCC5B9]'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <Leaf className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-mono text-[10px] text-[#C5A880]">03 // TOUCH</span>
            </div>
            <div className="font-serif-display text-base sm:text-lg">Tactile Biophilia</div>
          </button>

          <button
            onClick={() => setActiveTab('spatial')}
            className={`p-3 text-left transition-all cursor-pointer border-b-2 ${
              activeTab === 'spatial'
                ? 'border-[#C5A880] text-[#F3EFEA] bg-[#161513]'
                : 'border-transparent text-[#8C857B] hover:text-[#CCC5B9]'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <Maximize className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-mono text-[10px] text-[#C5A880]">04 // SPACE</span>
            </div>
            <div className="font-serif-display text-base sm:text-lg">Volumetric Flow</div>
          </button>
        </div>

        {/* Tab 1: Circadian Lighting Interactive Experience */}
        {activeTab === 'circadian' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141311] border border-[#262421] p-6 sm:p-10">
            
            {/* Interactive Room Visualization */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-16/10 overflow-hidden border border-[#2E2B26] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Circadian Room Lighting Simulator"
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                  style={{ filter: currentLight.roomFilter }}
                />
                <div className="absolute top-4 left-4 bg-[#121110]/80 backdrop-blur-xs px-3 py-1.5 text-xs text-[#E8E4DF] border border-[#3E3A33] flex items-center gap-2">
                  <Sun className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{currentLight.name}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#121110]/90 backdrop-blur-xs px-3 py-2 text-xs text-right border border-[#3E3A33]">
                  <div className="font-mono text-[#C5A880] font-semibold text-sm">{currentLight.kelvin}</div>
                  <div className="text-[10px] text-[#8C857B]">{currentLight.lux}</div>
                </div>
              </div>

              {/* Time Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['dawn', 'midday', 'golden', 'night'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setCircadianTime(t)}
                    className={`py-2 px-3 text-xs tracking-wider uppercase transition-all cursor-pointer border ${
                      circadianTime === t
                        ? 'bg-[#C5A880] text-[#121110] font-semibold border-[#C5A880]'
                        : 'bg-[#1A1816] text-[#A69F94] border-[#2E2B26] hover:text-[#E8E4DF]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation & Data Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs uppercase tracking-widest text-[#C5A880]">
                Circadian Lighting System
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F3EFEA]">
                {currentLight.name}
              </h3>

              <p className="text-sm text-[#CCC5B9] font-light leading-relaxed">
                By integrating micro-sensors with automated tuneable-white LED arrays, we sync your indoor lighting spectrum directly with the natural daylight trajectory of the Tauru sun.
              </p>

              <div className="p-4 bg-[#1A1816] border border-[#2E2B26] space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold block">
                  Neurological Impact:
                </span>
                <p className="text-xs text-[#E8E4DF] font-light">
                  {currentLight.biology}
                </p>
              </div>

              <div className="pt-2 border-t border-[#262421] text-xs text-[#8C857B] flex items-center justify-between">
                <span>Standard Specification:</span>
                <span className="text-[#E8E4DF]">CRI 98+ | Zero PWM Flicker</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Acoustic Geometry */}
        {activeTab === 'acoustic' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141311] border border-[#262421] p-6 sm:p-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#C5A880]">
                Acoustic Geometry & Stillness
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F3EFEA]">
                Soundscapes Engineered for Deep Solitude
              </h3>
              <p className="text-sm text-[#A69F94] leading-relaxed font-light">
                Modern residences often suffer from "acoustic glare"—bare marble and glass that bounce sound waves, creating subconscious sensory fatigue. Kirpa Channa uses spatial geometry and perforated stone panels to maintain warmth without lifeless silence.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-[#1A1816] border border-[#2E2B26] flex justify-between items-center text-xs">
                  <span className="text-[#CCC5B9]">Typical Glass & Tile Living Room</span>
                  <span className="text-rose-400 font-mono">1.8s Echo Decay (Fatiguing)</span>
                </div>
                <div className="p-3 bg-[#1A1816] border border-[#C5A880]/50 flex justify-between items-center text-xs">
                  <span className="text-[#F3EFEA] font-medium">Kirpa Channa Travertine & Wood Envelope</span>
                  <span className="text-[#C5A880] font-mono font-bold">0.45s Reverberation (Calming)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden border border-[#2E2B26]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                  alt="Acoustic Wood Fluting in Dining Salon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-[#D8CFBE]">
                    Smoked oak fluting dissipates high-frequency flutter echoes across 40 ft entertaining halls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Biophilic Tactility */}
        {activeTab === 'biophilic' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141311] border border-[#262421] p-6 sm:p-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#C5A880]">
                Tactile Biophilia
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F3EFEA]">
                The Healing Power of Natural Textures
              </h3>
              <p className="text-sm text-[#A69F94] leading-relaxed font-light">
                Our skin contains hundreds of thousands of mechanoreceptors. Touching authentic unlacquered bronze, raw travertine, or linen stimulates sensory grounding, counteracting the cold slick glass of digital screens.
              </p>
              
              <ul className="space-y-2 text-xs text-[#CCC5B9] pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>Zero synthetic PVC or laminate coatings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>Breathable lime plaster regulating indoor humidity at 45-55%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>Subtle indoor water fountains generating beneficial negative air ions</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden border border-[#2E2B26]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="Biophilic Bathroom Sanctuary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-[#D8CFBE]">
                    Monolithic stone basins cut from single boulders to retain geologic memory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Spatial Volume & Flow */}
        {activeTab === 'spatial' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141311] border border-[#262421] p-6 sm:p-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#C5A880]">
                Volumetric Flow
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F3EFEA]">
                The "Cathedral Effect" in Contemporary Architecture
              </h3>
              <p className="text-sm text-[#A69F94] leading-relaxed font-light">
                Ceiling heights alter cognitive style. Double-height rooms (18+ ft) induce expansive, abstract ideation suited for family lounges and studios. Transitioning through a lower, intimate timber-clad portal immediately focuses the mind for sleep or study.
              </p>
              
              <div className="p-4 bg-[#1A1816] border border-[#2E2B26] text-xs text-[#D8CFBE] space-y-1">
                <span className="text-[#C5A880] font-semibold">Compression & Expansion:</span>
                <p className="text-[#A69F94] font-light">
                  A conscious architectural choreography derived from Frank Lloyd Wright and ancient Indian courtyard architecture.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden border border-[#2E2B26]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Volumetric Spatial Flow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
