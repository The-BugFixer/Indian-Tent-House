import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { PROCESS_STEPS, BUSINESS_INFO } from '../data/mockData';

/**
 * Props for ProcessSection component.
 */
interface ProcessSectionProps {
  onOpenContact: () => void;
}

/**
 * ProcessSection Component
 * 
 * Explains the clear, transparent 4-step workflow from initial inquiry
 * to full on-site event handover.
 */
export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-20 lg:py-24 bg-[#0F0D0B] border-y border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 block">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-100">
            Our 4-Step Execution Process
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mx-auto mt-2" />
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            From your very first conversation to the final lighting cue, our structured planning guarantees zero surprises on your big day.
          </p>
        </div>

        {/* 4 Process Cards Responsive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#181411] border border-amber-500/25 shadow-royal hover:shadow-royal-lg hover:border-amber-500/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Step Number Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-amber-400">
                    {step.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#241E1A] border border-amber-500/30 flex items-center justify-center text-xs font-bold text-amber-300">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-100 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="mt-6 pt-4 bg-[#201A16] p-3.5 rounded-2xl border border-amber-500/25">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
                  Deliverable:
                </span>
                <p className="text-xs font-semibold text-stone-200 mt-0.5">
                  {step.deliverable}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white font-bold text-sm shadow-royal hover:shadow-royal-lg transition-all hover:scale-105 active:scale-95 border border-amber-500/40"
          >
            <span>Start Step 1: Check Availability &amp; Reserve Date</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
