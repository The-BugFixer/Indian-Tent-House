import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Ruler, Calendar, ArrowRight, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * Props for AboutSection component.
 */
interface AboutSectionProps {
  onOpenContact: () => void;
}

/**
 * AboutSection Component
 * 
 * Details the 34+ years heritage of Indian Tent House (Est. 1991 in Gorakhpur),
 * showcasing their structural engineering, fire safety standards, and
 * turnkey event execution for royal weddings and celebrations.
 */
export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="py-20 lg:py-24 relative overflow-hidden bg-[#0F0D0B] border-y border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Card with ImageWithFallback (Col 1-6) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-royal-lg bg-[#181411]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                fallbackSrc="/assets/event-portrait.svg"
                alt="Royal Wedding Mandap and Event Setup by Indian Tent House"
                className="w-full h-auto object-cover max-h-[580px]"
                badgeText="Est. 1991 • Gorakhpur"
              />

              {/* Floating Heritage Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#181411]/95 backdrop-blur-md border border-amber-500/30 shadow-royal flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-amber-400 font-bold uppercase block">
                    FOUNDED 1991 • GORAKHPUR
                  </span>
                  <p className="text-sm font-serif font-bold text-stone-100 mt-0.5">
                    WEDDINGS • PARTIES • FUNCTIONS
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#261F1A] text-amber-300 border border-amber-500/40">
                  {BUSINESS_INFO.experienceYears} Years
                </span>
              </div>
            </div>

            {/* Subtle decorative gold circle */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-amber-500/20 pointer-events-none -z-10" />
          </motion.div>

          {/* Heritage Copy Block (Col 7-12) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Section Eyebrow */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                <Award className="w-4 h-4 text-amber-400" />
                ABOUT INDIAN TENT HOUSE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-stone-100 leading-tight">
                Three Decades of Imperial Elegance &amp; Engineering
              </h2>
              <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mt-2" />
            </div>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
              Founded in 1991 in Gorakhpur, <strong className="text-amber-300">Indian Tent House</strong> has evolved from a classical royal shamiana provider into Eastern Uttar Pradesh’s foremost architectural event infrastructure agency.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              We specialize in grand wedding pavilions, high-span German aluminium hangars, air-conditioned banqueting marquees, and handcrafted ceremonial mandaps. Every setup is executed with meticulous safety certifications, fire-retardant materials, and direct owner supervision.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#181411] border border-amber-500/25 shadow-royal-card">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-100">Weatherproof Hangars</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Heavy-duty German alloy structures rated up to 100 km/h wind resilience.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#181411] border border-amber-500/25 shadow-royal-card">
                <Ruler className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-100">Free On-Site Laser Survey</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Precise soil, dimension, and 3D zoning blueprinting before construction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#181411] border border-amber-500/25 shadow-royal-card">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-100">Turnkey Coordination</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Single-window delivery: tents, lighting, stage, flooring, and backup power.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#181411] border border-amber-500/25 shadow-royal-card">
                <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-100">On-Time Handover</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Crews assemble 24–48 hours in advance for thorough testing &amp; inspection.</p>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white font-bold text-sm shadow-royal hover:shadow-royal-lg border border-amber-500/40 transition-all hover:scale-105 active:scale-95"
              >
                <span>Request Site Inspection &amp; Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
