import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

/**
 * Props for the top Navbar component.
 */
interface NavbarProps {
  onOpenContact: () => void;
}

/**
 * Navbar Component
 * 
 * Elegant top header with royal gold branding, quick navigation links,
 * mobile drawer menu, and direct Call / WhatsApp integration.
 * Fully responsive and optimized for mobile-friendly interactions.
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  // Track scroll state to apply backdrop elevation
  const [scrolled, setScrolled] = useState(false);
  // Mobile drawer open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary navigation links with corresponding section anchor IDs (Services removed)
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Setup Estimator', href: '#estimator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="top-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#14110E]/95 backdrop-blur-md border-b border-amber-500/25 shadow-xl'
          : 'bg-[#0F0D0B]/90 backdrop-blur-sm border-b border-amber-500/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Heritage Tagline */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Indian Tent House home"
          >
            <div className="w-11 h-11 rounded-full border-2 border-amber-400 bg-gradient-to-br from-amber-600 via-amber-700 to-rose-950 flex items-center justify-center text-white font-display font-bold text-lg tracking-wider shadow-md group-hover:scale-105 transition-transform">
              ITH
            </div>
            <div className="flex flex-col">
              <span className="text-base tracking-[0.18em] font-serif font-bold uppercase text-stone-100 leading-tight">
                INDIAN
              </span>
              <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-amber-400 font-bold">
                TENT HOUSE • 1991
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-amber-300 transition-colors py-1.5 relative font-semibold text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs: Direct Call Button (Phone number hidden from button) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-full border border-amber-500/40 bg-[#221B17] hover:bg-[#2D231E] text-amber-200 text-xs font-bold tracking-wide shadow-sm transition-all hover:scale-105"
            >
              Book Date
            </button>

            {/* Direct Call Button - Phone number hidden from CTA button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white text-xs font-bold tracking-wide shadow-royal flex items-center gap-2 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2.5 rounded-full bg-amber-700 text-white text-xs font-semibold flex items-center shadow-sm"
              aria-label="Call Indian Tent House"
            >
              <Phone className="w-4 h-4 text-amber-200" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-amber-500/30 text-stone-200 hover:bg-[#221B17] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-[#171310] border-b border-amber-500/30 px-5 pt-3 pb-6 space-y-4 shadow-2xl overflow-hidden"
          >
            {/* Nav list */}
            <nav className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-stone-300 hover:bg-[#251F1A] hover:text-amber-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Action CTAs */}
            <div className="pt-3 border-t border-stone-800 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hello Indian Tent House, I would like to inquire about event setup services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl border border-amber-500/40 bg-[#221B17] text-amber-200 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Book Event Date</span>
              </button>
            </div>

            {/* Location Notice */}
            <div className="pt-2 text-center text-xs text-stone-400 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Betiahata / Civil Lines, Gorakhpur, UP</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
