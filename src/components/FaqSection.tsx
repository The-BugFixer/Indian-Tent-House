import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_INFO } from '../data/mockData';

/**
 * FaqSection Component
 * 
 * Frequently Asked Questions accordion addressing booking lead times,
 * German hangar wind/waterproofing, turnkey inclusions, and on-site surveys.
 */
export const FaqSection: React.FC = () => {
  // Store the open index, defaulting to the first question
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#0F0D0B] border-y border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 block">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-100">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mx-auto mt-2" />
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about booking, structural certifications, and setup logistics with Indian Tent House.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#181411] rounded-2xl border transition-all ${
                  isOpen ? 'border-amber-500 shadow-royal' : 'border-amber-500/25 shadow-royal-card'
                } overflow-hidden`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif font-bold text-base sm:text-lg leading-snug transition-colors ${
                    isOpen ? 'text-amber-300' : 'text-stone-100'
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-amber-700 text-white border-amber-600 shadow-sm'
                        : 'bg-[#241E1A] border-amber-500/30 text-amber-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-300 text-xs sm:text-sm leading-relaxed border-t border-amber-500/20 bg-[#14100D]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help Card with Rich Color Depth */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-[#1E1713] via-[#241C18] to-[#1E1713] border border-amber-500/30 shadow-royal flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="font-bold text-stone-100 text-sm sm:text-base">Have a unique venue question?</h4>
            <p className="text-xs text-stone-400">Speak directly with our senior event planner today.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
            {/* Call button with phone number hidden */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="min-h-[44px] justify-center py-2.5 px-5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-royal hover:scale-105 active:scale-95 border border-amber-500/30"
            >
              <Phone className="w-3.5 h-3.5 text-amber-200" />
              <span>Call Directly</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                'Hello Indian Tent House, I have a specific question about an event setup.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] justify-center py-2.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
