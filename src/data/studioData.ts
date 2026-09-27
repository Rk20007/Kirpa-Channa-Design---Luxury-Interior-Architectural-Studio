export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'wellness' | 'bespoke';
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  heroImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  tagline: string;
  description: string;
  neuroAspects: string[];
  palette: { name: string; hex: string; role: string }[];
  highlight: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  origin: string;
  textureType: string;
  description: string;
  tactileFeel: string;
  image: string;
  hex: string;
}

export const STUDIO_INFO = {
  name: "Kirpa Channa Design",
  founder: "Kirpa Kaur Channa",
  founderTitle: "Principal Architect & Neuroarchitecture Specialist",
  accolades: [
    "ARIDO Award Laureate",
    "Trendsetter & Promising Designer of the Year",
    "Projects across India, Canada, UAE, Nigeria & USA"
  ],
  tagline: "Spaces Sculpted for the Human Nervous System",
  subheading: "A multidisciplinary interior architecture studio orchestrating emotionally intelligent environments, organic materiality, and restorative spatial acoustics.",
  coordinates: {
    lat: 28.2056643,
    lng: 76.8107882,
    display: "28.2057° N, 76.8108° E"
  },
  address: {
    street: "Bhagat Singh Marg / Capital High Street Corridor",
    locality: "Tauru, Haryana 122105",
    landmark: "Near Delhi-NCR / Gurgaon-Bhiwadi Axis",
    country: "India"
  },
  googleMapsUrl: "https://www.google.com/maps/place/Kirpa+Channa+Design/@28.2056643,76.8107882,15z",
  googleMapsEmbedQuery: "Kirpa+Channa+Design,+Tauru,+Haryana",
  rating: 5.0,
  reviewsCount: 38,
  email: "letstalk@kirpachanna.com",
  phone: "+91 98120 44921",
  whatsappUrl: "https://wa.me/919812044921?text=Hello%20Kirpa%20Channa%20Design%2C%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20interior%20architecture%20project.",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST (Private Studio Visits by Appointment)",
  serviceAreas: ["Tauru & Mewat", "Gurgaon & Sohna", "Delhi-NCR", "Bhiwadi & Alwar", "Jaipur", "International Advisory"]
};

export const PROJECTS: Project[] = [
  {
    id: "travertine-sanctuary",
    title: "The Travertine Sanctuary",
    category: "residential",
    categoryLabel: "Luxury Villa",
    location: "Aravalli Foothills, Tauru NCR",
    area: "7,400 sq. ft.",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18f156f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    tagline: "Monolithic travertine stone meets soft morning filtered daylight",
    description: "Designed for a collector family seeking respite from the rapid pulse of urban Delhi. The home employs double-height porous travertine portals, lime-washed ceiling vaults, and integrated indoor courtyards that naturally cool the dry Mewat summer climate.",
    neuroAspects: [
      "Acoustic dampening via porous micro-textured travertine walls",
      "Circadian illumination mimicking natural sunlight through deep skylights",
      "Visual grounding through low horizontal furniture massing"
    ],
    palette: [
      { name: "Roman Travertine", hex: "#D6C7B2", role: "Primary Envelope" },
      { name: "Smoked French Oak", hex: "#4A3B32", role: "Joinery & Ceilings" },
      { name: "Aged Bronze", hex: "#5C4F3C", role: "Hardware & Profiles" },
      { name: "Loomed Bouclé", hex: "#E9E3D8", role: "Tactile Seating" }
    ],
    highlight: "Featured in Architectural Digest Showcase & ARIDO Nomination"
  },
  {
    id: "zen-courtyard-haveli",
    title: "The Courtyard of Stillness",
    category: "residential",
    categoryLabel: "Heritage Contemporary",
    location: "Sohna-Tauru Valley, Haryana",
    area: "8,900 sq. ft.",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
    ],
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    tagline: "Centuries-old stone wisdom translated into a meditative contemporary retreat",
    description: "Reinterpreting traditional North Indian Haveli wind corridors through high-performance thermal massing. A central reflecting water body mirrors the shifting skies while raw sand-blasted limestone maintains barefoot cooling.",
    neuroAspects: [
      "Auditory hydrotherapy with continuous low-frequency water trickle",
      "Biophilic views framed by deep recessed colonnades",
      "Thermal tranquility with unpolished Dholpur and limestone flooring"
    ],
    palette: [
      { name: "Dholpur Sandstone", hex: "#CDB296", role: "Courtyard Colonade" },
      { name: "Forest Slate", hex: "#323B38", role: "Water Basin" },
      { name: "Natural Cane", hex: "#D8BC88", role: "Custom Screens" },
      { name: "Off-White Slub Linen", hex: "#EDE8DF", role: "Drapery" }
    ],
    highlight: "Winner of Regional Spatial Excellence Award"
  },
  {
    id: "meridian-hq-bhiwadi",
    title: "Meridian Corporate Pavilion",
    category: "commercial",
    categoryLabel: "Executive Architecture",
    location: "Capital Corridor, Bhiwadi-Tauru Axis",
    area: "14,500 sq. ft.",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85"
    ],
    tagline: "Cognitive focus and low-cortisol executive spaces",
    description: "An intentional departure from clinical office sterile glass. We engineered acoustic baffles cloaked in organic felt, warm brass illumination, and ergonomic walnut lounges that reduce decision fatigue.",
    neuroAspects: [
      "Circadian color tuning (5000K focus at 11 AM down to 2700K dusk warm)",
      "High alpha-wave inducing acoustic privacy pods",
      "Air-purifying integrated living vertical garden lungs"
    ],
    palette: [
      { name: "Smoked American Walnut", hex: "#382921", role: "Acoustic Slats" },
      { name: "Brushed Champagne Brass", hex: "#BA9863", role: "Ambient Fixtures" },
      { name: "Charcoal Wool Felt", hex: "#2B2D2F", role: "Sound Absorption" },
      { name: "Olive Velvet", hex: "#525A47", role: "Executive Seating" }
    ],
    highlight: "Turnkey Architecture & Interior Fitout"
  },
  {
    id: "atelier-botanica",
    title: "Atelier Botanica Wellness Sanctuary",
    category: "wellness",
    categoryLabel: "Holistic Space",
    location: "Golf Course Road, Gurgaon NCR",
    area: "4,200 sq. ft.",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85"
    ],
    tagline: "Sensory decompression through curved earthen geometry",
    description: "Designed for a restorative aesthetic therapy center. Eliminating all aggressive 90-degree corners in favor of womb-like arched envelopes and fragrant cedar woodwork.",
    neuroAspects: [
      "Non-linear curved pathways inducing calm amygdala response",
      "Aromatherapeutic cedarwood millwork with subtle natural pinene emissions",
      "Zero glare indirect cove lighting"
    ],
    palette: [
      { name: "Terracotta Wash", hex: "#B86A50", role: "Curved Vaults" },
      { name: "Japanese Hinoki / Cedar", hex: "#D6B079", role: "Treatment Millwork" },
      { name: "Tamped Clay Plaster", hex: "#D8C7B4", role: "Textured Walls" },
      { name: "Moss Green Silk", hex: "#596850", role: "Textiles" }
    ],
    highlight: "Featured in Architectural Digest Wellness Review"
  },
  {
    id: "fluted-penthouse",
    title: "The Fluted Horizon Penthouse",
    category: "residential",
    categoryLabel: "Sky Penthouse",
    location: "DLF Phase V, NCR",
    area: "6,100 sq. ft.",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85"
    ],
    tagline: "Sky-high panoramic sanctuary wrapped in bespoke architectural joinery",
    description: "Commanding 360-degree vistas over the NCR skyline, this duplex penthouse pairs floor-to-ceiling bookmatched Calacatta marble with custom fluted wainscoting and hidden concealed doorways.",
    neuroAspects: [
      "Expansive ceiling sightlines fostering big-picture creative ideation",
      "Tactile knurled hardware providing sensory feedback",
      "Private restorative master enclave with 100% black-out motorized acoustics"
    ],
    palette: [
      { name: "Calacatta Viola", hex: "#F3ECE7", role: "Fireplace & Island" },
      { name: "Ebonized Ash", hex: "#1C1C1D", role: "Fluted Partitions" },
      { name: "Champagne Silk", hex: "#D9CDBF", role: "Wall Coverings" }
    ],
    highlight: "Bespoke Millwork & Turnkey Execution"
  },
  {
    id: "bespoke-curated-gallery",
    title: "Private Collector Studio & Salon",
    category: "bespoke",
    categoryLabel: "Art Salon & Study",
    location: "Tauru Countryside, Haryana",
    area: "3,100 sq. ft.",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85"
    ],
    tagline: "Curated stillness for contemporary Indian art and vintage bibliophiles",
    description: "Integrated custom brass display cases, floor-to-ceiling library ladders, and museum-grade UV filtered glazing designed to showcase rare manuscripts and contemporary sculpture.",
    neuroAspects: [
      "Museum CRI 98+ color accuracy for visual tranquility",
      "Deep tactile grain under hand-rubbed organic beeswax",
      "Zoned audio isolation for deep focus"
    ],
    palette: [
      { name: "Aged Raw Brass", hex: "#8F784B", role: "Shelving Frames" },
      { name: "Burnt Ochre Leather", hex: "#8E4627", role: "Reading Loungers" },
      { name: "Cast Concrete", hex: "#9E9A92", role: "Sculptural Pedestals" }
    ],
    highlight: "Custom Commissioned Millwork"
  }
];

export const NEURO_PILLARS = [
  {
    id: "circadian",
    title: "Circadian Light Orchestration",
    subtitle: "Biological Rhythm Alignment",
    description: "Light is the single most powerful synchronizer of the human biological clock. We eliminate harsh fluorescent flickering in favor of layered indirect illumination that adapts dynamically to solar angles, promoting daytime alert focus and evening melatonin synthesis.",
    metric: "40% reduction in sleep latency reported by residents",
    icon: "Sun",
    lightSimulator: {
      dawn: { kelvin: "2200K", lux: "150 Lux", mood: "Soft Amber Awakening", bg: "from-amber-900/40 via-stone-900 to-black" },
      midday: { kelvin: "5200K", lux: "750 Lux", mood: "Crisp Focus & Vitality", bg: "from-sky-950/30 via-stone-900 to-black" },
      golden: { kelvin: "2700K", lux: "300 Lux", mood: "Warm Evening Serenity", bg: "from-orange-950/40 via-stone-900 to-black" },
      night: { kelvin: "1900K", lux: "40 Lux", mood: "Deep Restorative Sanctuary", bg: "from-stone-950 via-black to-black" }
    }
  },
  {
    id: "acoustic",
    title: "Acoustic Serenity & Geometry",
    subtitle: "Nervous System Decompression",
    description: "Uncontrolled noise activates the sympathetic nervous system, causing micro-spikes in heart rate and cortisol. By engineering spatial volumes with concealed micro-perforated acoustic panels, dense natural textiles, and sound-absorbing masonry, we create quietude without dead silence.",
    metric: "NRC 0.85 sound absorption rating across private enclaves",
    icon: "Volume2"
  },
  {
    id: "biophilic",
    title: "Tactile Biophilia & Living Stone",
    subtitle: "Evolutionary Sensory Grounding",
    description: "The human hand and eye instinctively calm when encountering raw stone, authentic wood grain, and living flora. We ban synthetic plastic laminates in favor of honest tactile materials that age with dignified grace and breathe naturally with the seasons.",
    metric: "100% natural VOC-free lime washes and sustainably harvested timber",
    icon: "Leaf"
  },
  {
    id: "spatial",
    title: "Volumetric Proportion & Flow",
    subtitle: "Cathedral Effect vs Cocooning",
    description: "High ceilings stimulate abstract, creative thinking, while intimate lower proportions foster detail orientation and deep restorative security. We sculpt spatial transitions so your home intuitively shifts your mental state as you cross each threshold.",
    metric: "Architecturally balanced compression & expansion transitions",
    icon: "Maximize"
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: "travertine",
    name: "Tivoli Roman Travertine",
    origin: "Tivoli Quarries / Sourced for Tauru Sanctuary",
    textureType: "Honed & Unfilled Pore Stone",
    description: "Porous natural limestone with distinctive linear veining that gently scatters incoming sunlight.",
    tactileFeel: "Warm, velvety matte with subtle organic micro-cavities",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    hex: "#D4C5B0"
  },
  {
    id: "smoked-oak",
    name: "Smoked European Fluted Oak",
    origin: "Sustainably Forested Alpine Timber",
    textureType: "Wire-brushed & Organic Matte Oil",
    description: "Deep dimensional grooves that cast kinetic shadow play throughout the day while muffling ambient room echo.",
    tactileFeel: "Pronounced deep grain, silky warm timber touch",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    hex: "#43352B"
  },
  {
    id: "aged-brass",
    name: "Unlacquered Hand-Patinated Brass",
    origin: "Artisanal Metal Foundry, NCR",
    textureType: "Living Finish",
    description: "Reacts gracefully to human touch and ambient air, developing an organic bronze patina that tells the story of the home.",
    tactileFeel: "Substantial, cool metallic density that warms to the palm",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    hex: "#9F8253"
  },
  {
    id: "calce-plaster",
    name: "Hand-Troweled Calce Lime Plaster",
    origin: "Mineral Lime & Marble Dust",
    textureType: "Breathable Organic Stucco",
    description: "Naturally moisture-regulating and hypoallergenic plaster that absorbs atmospheric CO2 over its 50-year curing lifespan.",
    tactileFeel: "Suede-like soft mineral texture",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80",
    hex: "#E5DDD0"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Kirpa Channa transforms interior architecture into an emotional sanctuary. Walking into our home after a grueling day in Gurgaon instantly drops my shoulders. The way light and sound are sculpted is nothing short of transcendent.",
    author: "Devendra & Avantika Singhania",
    project: "The Travertine Sanctuary, Tauru Valley",
    role: "Villa Owners & Venture Partners",
    rating: 5
  },
  {
    quote: "From our first meeting at the Tauru studio, Kirpa's international background and Canadian training shone through. Her understanding of neuroarchitecture gave our executive headquarters an atmosphere where teams are remarkably energized.",
    author: "Rajiv Malhotra",
    project: "Meridian Corporate Pavilion, Bhiwadi Corridor",
    role: "Managing Director",
    rating: 5
  },
  {
    quote: "Her attention to material authenticity, zero shortcuts, and flawless turnkey delivery made this the most effortless build experience of our lives. An absolute masterclass in luxury design.",
    author: "Siddharth & Priya Mehra",
    project: "Sky Penthouse, NCR",
    role: "Private Art Collectors",
    rating: 5
  }
];

export const STUDIO_TIMELINE_STEPS = [
  {
    number: "01",
    phase: "Cognitive Discovery & Spatial Audit",
    duration: "Week 1 - 2",
    details: "We analyze your personal sensory triggers, circadian habits, lighting angles, and site orientation in Tauru / NCR."
  },
  {
    number: "02",
    phase: "Neuro-Architectural 3D Previsualization",
    duration: "Week 3 - 5",
    details: "Photorealistic 360° renders, tactile material sample boxes delivered to you, and acoustic simulation modeling."
  },
  {
    number: "03",
    phase: "Bespoke Engineering & BOQ Precision",
    duration: "Week 6 - 7",
    details: "Structural coordination, MEP, bespoke millwork joinery drawings, and zero-hidden-cost line-item budget freeze."
  },
  {
    number: "04",
    phase: "Turnkey Craftsmanship & Site Stewardship",
    duration: "Execution Phase",
    details: "Master stonemasons, bespoke carpenters, and weekly biometric photographic progress reports under Kirpa's personal supervision."
  }
];
