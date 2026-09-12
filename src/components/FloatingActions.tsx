import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Sparkles, ArrowUp, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

/**
 * Props for FloatingActions component.
 */
interface FloatingActionsProps {
  onOpenContact: () => void;
}

/**
 * FloatingActions Component
 * 
 * Provides accessible, mobile-first quick action controls:
 * 1. Mobile Sticky Bottom Bar (Fixed at bottom on mobile for instant thumb access)
 * 2. Desktop Floating WhatsApp and Scroll-to-Top triggers
 */
export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenContact,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor vertical scroll position to show back-to-top trigger
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Desktop Floating Buttons (Hidden on mobile) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#181411] text-stone-200 border border-amber-500/30 shadow-royal hover:bg-[#251E1A] transition-all pointer-events-auto hover:scale-110"
              aria-label="Scroll to top of page"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-amber-400" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action with Ripple Hint */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
            'Hello Indian Tent House, I would like to inquire about wedding tent and event setup services.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-royal-lg flex items-center justify-center pointer-events-auto transition-transform border border-emerald-400/30"
          aria-label="Chat directly on WhatsApp with Indian Tent House"
          title="Direct WhatsApp Consultation"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>

      {/* 2. Mobile Bottom Sticky Navigation & Action Bar (Visible only on mobile devices) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#14100D]/95 backdrop-blur-md border-t border-amber-500/30 px-3 py-2.5 shadow-royal-lg flex items-center justify-between gap-2 safe-area-bottom">
        
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 border border-amber-500/40"
          aria-label="Call Indian Tent House directly"
        >
          <Phone className="w-3.5 h-3.5 text-amber-200" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
            'Hello Indian Tent House, I would like to inquire about event setups in Gorakhpur.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Check Date / Book */}
        <button
          onClick={onOpenContact}
          className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-[#241E1A] border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 hover:bg-[#2D2621]"
          aria-label="Book event date"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Book Date</span>
        </button>
      </div>
    </>
  );
};
