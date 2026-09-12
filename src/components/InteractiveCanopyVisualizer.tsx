import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sliders, Ruler, Users, Layers, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * Props for Setup & Sizing Estimator.
 */
interface CanopyVisualizerProps {
  onOpenContactWithSpec: (spec: string) => void;
}

/**
 * Structural marquee profile definitions with spatial allocation metrics.
 */
const STRUCTURE_TYPES = [
  {
    id: 'hangar',
    name: 'German Aluminium Hangar',
    category: 'Waterproof All-Weather',
    sqFtPerGuest: 16,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-2.svg',
    description: 'A-frame clear-span aluminium profile with zero interior columns, rated for high winds and heavy monsoons.',
    features: ['100% column-free', 'AC & ducting compatible', 'Up to 100km/h wind tolerance', 'Translucent or blackout roof'],
  },
  {
    id: 'shamiana',
    name: 'Imperial Royal Shamiana',
    category: 'Classic Regal Wedding',
    sqFtPerGuest: 18,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-1.svg',
    description: 'Traditional multi-layered velvet and silk fabric pavilion with handcrafted scalloped borders and crystal chandeliers.',
    features: ['Rich velvet ceiling liner', 'Hand-stitched decorative borders', 'Crystal chandeliers included', 'Carpeted flooring base'],
  },
  {
    id: 'starlight',
    name: 'Starlight Fairy Canopy',
    category: 'Sangeet & Cocktail',
    sqFtPerGuest: 14,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: '/assets/gallery-3.svg',
    description: 'Open-air or semi-covered pavilion drenched in thousands of warm fairy lights, Edison bulbs, and elevated dance floor.',
    features: ['High-density starfield ceiling', 'Integrated truss beam lighting', 'Circular dance stage deck', 'Cocktail pod layouts'],
  },
  {
    id: 'mandap',
    name: 'Grand Vedic Mandap',
    category: 'Ceremonial Pheras',
    sqFtPerGuest: 20,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/assets/gallery-4.svg',
    description: 'Elevated ceremonial stage pavilion with ornate hand-carved pillars and fire-safe ventilation for the sacred havan.',
    features: ['Heavy-duty multi-step stage', 'Carved Rajasthani arch backdrop', 'Safe havan ventilation', '360° audience sightlines'],
  },
];

/**
 * InteractiveCanopyVisualizer / Setup Estimator Component
 * 
 * Provides an intuitive, mobile-friendly interactive calculator where clients
 * can select guest count and pavilion type to see instant square-footage,
 * truss counts, chandelier needs, and send the exact specification to WhatsApp.
 */
export const InteractiveCanopyVisualizer: React.FC<CanopyVisualizerProps> = ({
  onOpenContactWithSpec,
}) => {
  const [activeStructure, setActiveStructure] = useState(STRUCTURE_TYPES[0]);
  const [guests, setGuests] = useState(600);

  // Real-time engineering spatial math
  const calculatedArea = guests * activeStructure.sqFtPerGuest;
  const recommendedTrusses = Math.ceil(calculatedArea / 2500);
  const chandelierCount = Math.max(2, Math.round(calculatedArea / 2000));
  const buffetCounters = Math.max(4, Math.round(guests / 120));

  // WhatsApp formatted string
  const specText = `${activeStructure.name} for ${guests} guests (~${calculatedArea.toLocaleString()} sq ft covered area, ${recommendedTrusses} trusses, ${chandelierCount} chandeliers, ${buffetCounters} buffet aisles)`;

  const handleWhatsAppSend = () => {
    const text = `Hello Indian Tent House,\n\nI calculated my event setup on your website estimator:\n• Structure: ${activeStructure.name}\n• Expected Guests: ${guests}\n• Estimated Area: ${calculatedArea.toLocaleString()} sq. ft.\n• Recommended Trusses: ${recommendedTrusses}\n• Chandeliers: ${chandelierCount}\n• Buffet Counters: ${buffetCounters}\n\nPlease share estimated cost and confirm availability.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 lg:py-24 bg-gradient-to-b from-[#14110E] via-[#100E0C] to-[#14110E] border-y border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Rich Color Depth */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 block">
            EVENT SIZING &amp; CAPACITY PLANNER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-100">
            Setup Sizing &amp; Capacity Estimator
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mx-auto mt-2" />
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Estimate your required tent square footage, structural trusses, and dining layout in real time based on your expected guest count.
          </p>
        </div>

        {/* Structure Selector Pill Tabs (Swipeable/Scrollable on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-4xl mx-auto mb-10">
          {STRUCTURE_TYPES.map((type) => {
            const isSelected = activeStructure.id === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveStructure(type)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-[#281E17] border-amber-500 shadow-royal ring-2 ring-amber-500/30'
                    : 'bg-[#181411] border-amber-500/25 hover:bg-[#221B17] shadow-sm'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${isSelected ? 'text-amber-400 font-extrabold' : 'text-stone-400'}`}>
                  {type.category}
                </span>
                <span className={`text-xs sm:text-sm font-bold block mt-0.5 ${isSelected ? 'text-stone-100' : 'text-stone-300'}`}>
                  {type.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Interactive Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Sliders & Controls (Col 1-6) */}
          <div className="lg:col-span-6 bg-[#181411] rounded-3xl p-5 sm:p-8 border border-amber-500/25 shadow-royal space-y-6">
            
            {/* Guest Count Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="guest-slider" className="text-sm font-bold text-stone-100 flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Expected Guests:</span>
                </label>
                <span className="text-xl sm:text-2xl font-serif font-bold text-royal-gradient">
                  {guests.toLocaleString()} <span className="text-xs font-sans font-normal text-stone-400">Guests</span>
                </span>
              </div>

              <input
                id="guest-slider"
                type="range"
                min="100"
                max="2500"
                step="50"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full h-3 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Expected guest count slider"
              />

              {/* Quick Preset Buttons for Mobile & Desktop */}
              <div className="flex items-center justify-between gap-1.5 pt-1">
                {[200, 500, 800, 1200, 2000].map((count) => (
                  <button
                    key={count}
                    onClick={() => setGuests(count)}
                    className={`flex-1 min-h-[38px] py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      guests === count
                        ? 'bg-amber-600 text-white border-amber-500 shadow-sm scale-105'
                        : 'bg-[#221B17] text-stone-300 border-amber-500/25 hover:bg-[#2B231E]'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* Structure Summary & Features */}
            <div className="pt-2 border-t border-stone-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-100">Structure Specifications</h4>
                <span className="text-xs text-amber-300 font-bold bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/40">
                  {activeStructure.sqFtPerGuest} sq ft / guest
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {activeStructure.description}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {activeStructure.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions: WhatsApp + Prefill Contact */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="flex-1 min-h-[44px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Sizing on WhatsApp</span>
              </button>

              <button
                onClick={() => onOpenContactWithSpec(specText)}
                className="min-h-[44px] py-3 px-5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm border border-amber-500/30 transition-all hover:scale-[1.01] active:scale-95"
              >
                <span>Book This Spec</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Calculated Blueprint & Preview (Col 7-12) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Setup Preview with ImageWithFallback */}
            <div className="rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-royal-lg bg-[#181411] relative">
              <ImageWithFallback
                src={activeStructure.image}
                fallbackSrc={activeStructure.fallbackImage}
                alt={activeStructure.name}
                className="w-full aspect-[16/10] object-cover"
                badgeText={activeStructure.category}
              />
              <div className="p-4 bg-[#181411] border-t border-amber-500/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-stone-100 text-sm">{activeStructure.name}</h4>
                  <p className="text-xs text-stone-400 font-medium">Live Spatial Dimensioning</p>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40">
                  {calculatedArea.toLocaleString()} Sq. Ft.
                </span>
              </div>
            </div>

            {/* Calculated Metrics Bento Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-[#181411] border border-amber-500/25 text-center shadow-royal-card">
                <Ruler className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <span className="text-lg sm:text-xl font-serif font-bold text-stone-100 block">
                  {calculatedArea.toLocaleString()}
                </span>
                <p className="text-[11px] text-stone-400 font-medium">Covered Sq. Ft.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#181411] border border-amber-500/25 text-center shadow-royal-card">
                <Layers className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <span className="text-lg sm:text-xl font-serif font-bold text-stone-100 block">
                  {recommendedTrusses}
                </span>
                <p className="text-[11px] text-stone-400 font-medium">Structural Trusses</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#181411] border border-amber-500/25 text-center shadow-royal-card">
                <Sparkles className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <span className="text-lg sm:text-xl font-serif font-bold text-stone-100 block">
                  {chandelierCount}
                </span>
                <p className="text-[11px] text-stone-400 font-medium">Grand Chandeliers</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#181411] border border-amber-500/25 text-center shadow-royal-card">
                <Shield className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <span className="text-lg sm:text-xl font-serif font-bold text-stone-100 block">
                  {buffetCounters}
                </span>
                <p className="text-[11px] text-stone-400 font-medium">Buffet Aisles</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
