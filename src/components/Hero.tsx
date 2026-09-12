import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * Props for the Hero section.
 */
interface HeroProps {
  onOpenContact: () => void;
}

/**
 * Hero Component
 * 
 * High-end, royal Indian celebration entry section.
 * Designed with warm ivory, rich gold, amber, and deep crimson aesthetic,
 * direct click-to-call, date-booking CTAs, and zero cracked images.
 */
export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-28 overflow-hidden bg-gradient-to-b from-[#14110E] via-[#100E0C] to-[#14110E]"
    >
      {/* Subtle decorative background flourishes with rich royal color depth */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-amber-500/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-rose-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[22rem] h-[22rem] rounded-full bg-amber-600/08 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Heritage Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#241E1A] text-amber-300 border border-amber-500/30 shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Since {BUSINESS_INFO.established} • Gorakhpur, UP</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 shadow-sm">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>5,000+ Events Delivered</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-100 leading-[1.08]">
              Grand, Elegant &amp;{' '}
              <span className="font-display italic font-semibold text-royal-gradient block sm:inline">
                Unforgettable
              </span>{' '}
              Event Setups
            </h1>

            {/* Decorative Gold Separator */}
            <div className="text-amber-400 text-xs tracking-[0.4em] font-serif select-none flex items-center gap-2">
              <span>◆</span>
              <span className="w-16 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-transparent" />
              <span>◇</span>
              <span className="w-16 h-[2px] bg-gradient-to-l from-amber-500 via-rose-600 to-transparent" />
              <span>◆</span>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-stone-300 font-normal max-w-2xl leading-relaxed">
              Transform open lawns, farmhouses, and banquets into majestic celebration pavilions.
              Providing grand wedding decor, luxury canopies, and turnkey event infrastructure engineered for pure perfection.
            </p>

            {/* Primary Action Buttons - Mobile friendly */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Direct Call CTA - Phone number hidden from button */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white shadow-royal hover:shadow-royal-lg border border-amber-500/40 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>Call Now</span>
              </a>

              {/* Book / Check Date CTA */}
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#221B17] hover:bg-[#2B231E] text-stone-100 shadow-sm border border-amber-500/40 transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Check Date Availability</span>
              </button>
            </div>

            {/* Trust Highlights Strip with Rich Color Depth */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-amber-500/20 max-w-xl">
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-stone-100">34+</span>
                <p className="text-xs text-stone-400 font-medium">Years Experience</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400">100%</span>
                <p className="text-xs text-stone-400 font-medium">Weatherproof Protection</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-stone-100">Gorakhpur</span>
                <p className="text-xs text-stone-400 font-medium">&amp; Eastern UP</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Feature Visual with Multi-Tier Fallback (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-royal-lg bg-[#181411]">
              {/* Primary Wedding Image with Local SVG Fallback */}
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                fallbackSrc="/assets/hero-event.svg"
                alt="Grand Royal Wedding Shamiana by Indian Tent House"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/13]"
                badgeText="Signature Royal Setup"
              />

              {/* Bottom Floating Info Strip */}
              <div className="p-4 sm:p-5 bg-[#181411] border-t border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-bold text-amber-400 uppercase block">
                    FEATURED SETUP
                  </span>
                  <h3 className="font-serif font-bold text-stone-100 text-sm sm:text-base">
                    Imperial Royal Wedding Pavilion
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    German Hangar • Crystal Chandeliers • Raised Mandap
                  </p>
                </div>

                <button
                  onClick={onOpenContact}
                  className="px-3.5 py-2 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-200 text-xs font-bold border border-amber-500/40 transition-colors whitespace-nowrap"
                >
                  Book Setup
                </button>
              </div>
            </div>

            {/* Decorative Gold Accent Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#241E1A] text-amber-200 px-4 py-2 rounded-2xl shadow-lg border border-amber-500/40 hidden sm:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold">100% Wind &amp; Rain Safety Tested</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
