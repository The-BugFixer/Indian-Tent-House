import { ServiceItem, GalleryItem, FaqItem, ProcessStep, TestimonialItem } from '../types';

/**
 * Core business details for Indian Tent House.
 * Founded in 1991 in Gorakhpur, UP, catering to grand weddings and celebrations.
 */
export const BUSINESS_INFO = {
  name: 'Indian Tent House',
  tagline: 'Grand, Elegant & Unforgettable Event Setups',
  established: '1991',
  phone: '+919616665095',
  phoneDisplay: '+91 96166 65095',
  whatsapp: '919616665095',
  email: 'indiantenthouse1991@gmail.com',
  address: 'Civil Lines / Betiahata Road, Gorakhpur, Uttar Pradesh 273001, India',
  mapsUrl: 'https://www.google.com/maps/place/Indian+Tent+House/@26.754811,83.3528444,763m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39914414f2f91caf:0xece568abc46fc5ef!8m2!3d26.754811!4d83.3554247!16s%2Fg%2F11c5g6vx42?hl=en&authuser=0&entry=ttu',
  experienceYears: '34+',
  eventsCompleted: '5,000+',
  satisfactionRate: '99.4%',
};

/**
 * Core service offerings with descriptive tags, capacity ranges, and features.
 */
export const SERVICES: (ServiceItem & { image: string; fallbackImage: string })[] = [
  {
    id: 'tent-canopy',
    title: 'Grand Tents & German Hangars',
    subtitle: 'Engineered Weatherproof Marquees',
    description: 'Monumental covered pavilions, German aluminium hangars, pagoda canopies, and classic scalloped shamianas designed with wind-resistant engineering.',
    iconName: 'Tent',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-2.svg',
    features: ['German curved aluminium truss', 'Fire-retardant waterproof PVC membrane', 'Air-conditioning & mist cooling ducting', '100% column-free interior span'],
    capacity: '100 to 5,000+ Guests',
    idealFor: 'Grand Weddings, Open Lawn Receptions & VIP Expositions',
    tag: 'Signature Architecture',
  },
  {
    id: 'event-decoration',
    title: 'Luxury Floral & Fabric Decor',
    subtitle: 'Couture Aesthetic Styling',
    description: 'Transformative venue styling featuring imported silk drapes, cascading fresh floral arches, botanical ceiling swags, and bespoke thematic centerpieces.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-1.svg',
    features: ['Bespoke fabric draping & ceiling liners', 'Exotic botanical and marigold installations', 'Illuminated mirror aisle runners', 'Custom thematic color harmonizing'],
    capacity: 'Tailored to venue scale',
    idealFor: 'Sangeet Nights, Ring Ceremonies & Royal Baraats',
    tag: 'Artisan Decor',
  },
  {
    id: 'stage-setup',
    title: 'Imperial Stage & Mandap Setup',
    subtitle: 'Focal Ceremonial Platforms',
    description: 'Elevated multi-tiered stages, ornate hand-carved jali backdrops, royal throne settings, and traditional Vedic mandaps surrounded by sacred floral cascades.',
    iconName: 'Crown',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-4.svg',
    features: ['Multi-level heavy-duty stage decking', 'Carved Rajasthani & Mughal arch backdrops', 'Vedic havan-kund fire-safe ventilation', 'Dynamic LED backdrop & wash lighting'],
    capacity: 'Up to 30 people on stage',
    idealFor: 'Pheras, Wedding Stage, Varmala & Award Galas',
    tag: 'Ceremonial Centerpiece',
  },
  {
    id: 'banquet-dining',
    title: 'Bespoke Banquet & Dining Marquees',
    subtitle: 'Fine Culinary Ambience',
    description: 'Dedicated dining wings, climate-controlled buffet galleries, covered live-kitchen alleys, and luxury round-table banquet setups with gold Chiavari seating.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-6.svg',
    features: ['Dedicated exhaust ventilation for live counters', 'Non-slip carpeted floor runs', 'Brass chafing dish presentation islands', 'Ergonomic guest circulation lanes'],
    capacity: '200 to 3,000 Dining Guests',
    idealFor: 'Wedding Feasts, Reception Banquets & Corporate Luncheons',
    tag: 'Catering Architecture',
  },
  {
    id: 'lighting-ambience',
    title: 'Atmospheric Lighting & Audio Truss',
    subtitle: 'Nocturnal Splendor',
    description: 'Warm 2700K incandescent chandeliers, fairy light starfields, theatrical beam movers, pathway vintage street lanterns, and ambient floor uplighting.',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-3.svg',
    features: ['Crystal grand chandeliers up to 8ft drop', 'High-density fairy light curtains (Warm Gold)', 'Heavy-duty aerial truss rigging', 'Silent genset synchronized power backup'],
    capacity: 'Venue-wide illumination',
    idealFor: 'Night Celebrations, Cocktail Lounges & Sangeet',
    tag: 'Visual Atmosphere',
  },
  {
    id: 'custom-requirements',
    title: 'Turnkey Tailored Blueprinting',
    subtitle: 'Precision On-Site Engineering',
    description: 'Every venue is unique. We conduct on-site laser dimensioning, CAD spatial zoning, weather risk mitigation, and bespoke architectural fabrication.',
    iconName: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/event-portrait.svg',
    features: ['Free on-site laser survey in Gorakhpur & Purvanchal', '3D spatial zoning & CAD layout blueprinting', 'Dedicated on-site technical crew chief', 'Direct owner supervision from start to finish'],
    capacity: 'Unlimited venue dimensions',
    idealFor: 'Farmhouses, Heritage Palaces & Complex Lawns',
    tag: 'Turnkey Assurance',
  },
];

/**
 * Curated gallery items with direct photography and verified local SVG fallbacks.
 * Each item contains detailed specifications for user preview and WhatsApp inquiry.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Imperial Royal Wedding Shamiana',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-1.svg',
    description: 'A magnificent velvet maroon and champagne fabric pavilion featuring crystal chandeliers, raised floral aisle, and high-density canopy drapes.',
    dimensions: '30m x 45m (1,350 sq.m)',
    guestCapacity: '800–1,200 Guests',
    features: ['Velvet draped ceiling', 'Crystal chandeliers', 'Golden aisle pillars', 'Carpeted platform'],
  },
  {
    id: 'gallery-2',
    title: 'Curved German Aluminium Hangar',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-2.svg',
    description: 'Weatherproof German curved truss structure with translucent waterproof membrane, integrated amber spotlights, and sleek column-free reception space.',
    dimensions: '25m x 50m (1,250 sq.m)',
    guestCapacity: '1,000–1,800 Guests',
    features: ['All-weather waterproof', 'Zero internal pillars', 'Air-conditioning ready', 'Amber architectural wash'],
  },
  {
    id: 'gallery-3',
    title: 'Starlight Fairy Canopy Sangeet Lounge',
    category: 'parties',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: '/assets/gallery-3.svg',
    description: 'Under-the-stars cocktail and sangeet setup with floating Edison bulbs, neon accent wash, illuminated circular dance floor, and luxury lounge pods.',
    dimensions: '20m x 30m (600 sq.m)',
    guestCapacity: '350–500 Guests',
    features: ['Fairy light starfield', 'Edison glass lanterns', 'Circular dance stage', 'Cocktail seating'],
  },
  {
    id: 'gallery-4',
    title: 'Grand Tri-Arch Ceremonial Mandap & Stage',
    category: 'functions',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: '/assets/gallery-4.svg',
    description: 'Hand-carved Rajasthani jali arch backdrop with multi-step velvet stage, gold leaf throne chairs, cascading marigold drops, and theatrical warm wash.',
    dimensions: '40ft Width x 24ft Depth x 16ft Height',
    guestCapacity: 'Focal ceremonial stage',
    features: ['Mughal carved jali', 'Heavy-duty elevated deck', 'Warm footlight ambiance', 'Sacred floral swags'],
  },
  {
    id: 'gallery-5',
    title: 'Sunlit Haldi & Mehendi Yellow Fiesta',
    category: 'parties',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: '/assets/gallery-5.svg',
    description: 'Radiant saffron and yellow tent pavilion with brass urli centerpiece, hanging fresh marigold bells, and bohemian floor-cushion lawn seating.',
    dimensions: '18m x 25m (450 sq.m)',
    guestCapacity: '200–400 Guests',
    features: ['Marigold floral canopy', 'Carved brass urli pool', 'Bohemian floor diwans', 'UV sun shade fabric'],
  },
  {
    id: 'gallery-6',
    title: 'Palace Banquet & Buffet Dining Marquee',
    category: 'functions',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-6.svg',
    description: 'Clean ivory silk lined dining pavilion with warm pendant chandeliers, dedicated dual-sided live food stations, and round family banquet tables.',
    dimensions: '25m x 40m (1,000 sq.m)',
    guestCapacity: '500+ Simultaneous Diners',
    features: ['Ivory ceiling liner', 'Exhaust-ventilated live alley', 'Round banquet tables', 'Gold Chiavari chairs'],
  },
];

/**
 * 4-Step transparent event execution process.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Share Vision & Venue',
    description: 'Provide your event date, venue address, guest count, and setup aspirations via WhatsApp or our instant AI planner.',
    deliverable: 'Initial suitability audit & date reservation',
  },
  {
    step: '02',
    title: 'On-Site Laser Survey',
    description: 'Our senior surveyor visits your location to check ground soil, wind vectors, tree clearance, power ingress, and safety zoning.',
    deliverable: 'Accurate CAD layout & spatial zoning chart',
  },
  {
    step: '03',
    title: 'Bespoke Quote & 3D Review',
    description: 'Review transparent line-item pricing for structures, drapery, lighting, flooring, and ceremonial stages with zero hidden costs.',
    deliverable: 'Firm contract & material reservation',
  },
  {
    step: '04',
    title: 'Turnkey Flawless Execution',
    description: 'Our certified crews arrive 24–48 hours prior to the celebration to build, inspect, wire, and handover a pristine event setting.',
    deliverable: 'Ready-to-host venue with standby technician',
  },
];

/**
 * Frequently Asked Questions addressing client queries regarding booking, weatherproofing, and services.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How far in advance should we reserve Indian Tent House for a wedding?',
    answer: 'For prime winter and wedding muhurat dates (November to March), we strongly advise booking 2 to 4 months in advance. However, for smaller functions or corporate events, we can accommodate bookings on 3 to 7 days notice depending on inventory availability.',
  },
  {
    question: 'Can your German Hangars withstand sudden rains and high winds?',
    answer: 'Yes, absolutely. Our German Hangars are manufactured using heavy-duty extruded aluminium alloy 6061/T6 and flame-retardant, 100% waterproof 850g/sq.m PVC architectural fabric. They are structurally certified to withstand winds of up to 100 km/h and include engineered perimeter drainage gutters.',
  },
  {
    question: 'Do you provide complete turnkey services including lighting, gensets, and stage decor?',
    answer: 'Yes. Indian Tent House provides end-to-end turnkey event infrastructure. Along with the structural canopies, we engineer the chandeliers, ambient fairy lights, sound trusses, carpeted flooring, royal mandap stages, buffet marquees, and silent generator power backup.',
  },
  {
    question: 'What information is needed to receive a customised quotation?',
    answer: 'To provide an accurate quotation, we require: (1) Event date & duration, (2) Exact venue or lawn address, (3) Expected guest count, (4) Key setups needed (e.g. main tent, dining marquee, stage, lighting), and (5) Approximate lawn dimensions if known.',
  },
  {
    question: 'How does the AI Event Architect on this website assist me?',
    answer: 'Our AI Event Architect uses advanced reasoning powered by Gemini to calculate the exact tent dimensions, square footage per guest, stage clearance, fire-safety walkways, and budget estimates tailored to your venue and occasion. You can immediately review its structural plan and forward it to our team via WhatsApp for instant booking.',
  },
];

/**
 * Verified testimonials from families and hosts across Gorakhpur and Eastern Uttar Pradesh.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Rajiv & Sunita Singhania',
    event: "Daughter's Grand Royal Wedding",
    venue: 'Gorakhpur Farmhouse Lawn (1,200 Guests)',
    year: '2025',
    rating: 5,
    review: 'Indian Tent House transformed our 2-acre lawn into a breathtaking palace. The German Hangar was pristine, completely waterproof, air-conditioned, and withstood unexpected night wind effortlessly. Every guest was amazed by the chandeliers.',
  },
  {
    id: 'test-2',
    clientName: 'Dr. Alok & Meenakshi Srivastava',
    event: 'Sangeet & Wedding Reception',
    venue: 'Civil Lines, Gorakhpur (800 Guests)',
    year: '2024',
    rating: 5,
    review: 'From the traditional floral mandap to the magnificent starlight fairy canopy, their craftsmanship was exceptional. Personal owner supervision from start to finish gave us total peace of mind.',
  },
  {
    id: 'test-3',
    clientName: 'Vikramaditya Verma',
    event: 'Regional Infrastructure Exposition & Gala',
    venue: 'Regional Stadium Ground (2,500 Attendees)',
    year: '2024',
    rating: 5,
    review: 'The sheer scale and engineering precision of their German Hangars and sound trusses gave our corporate symposium world-class appeal. Delivered on schedule with zero snags.',
  },
];
