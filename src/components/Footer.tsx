import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Compass, ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

/**
 * Props for Footer component.
 */
interface FooterProps {
  onOpenContact?: () => void;
}

/**
 * Footer Component
 * 
 * Elegant royal closing section with balanced 4-column layout,
 * zero blank space, rich imperial tones, direct phone/WhatsApp actions,
 * operational hours, service territory, and mobile-friendly touch targets.
 */
export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-gradient-to-b from-[#1C1612] via-[#150F0C] to-[#0D0907] text-stone-300 pt-16 pb-32 sm:pb-16 border-t-2 border-amber-500/40 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-rose-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Balanced 4-Column Footer Grid (No awkward empty spaces on mobile, tablet, or desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-stone-800/90">
          
          {/* Col 1: Brand & Heritage */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-base shadow-royal">
                ITH
              </div>
              <div className="flex flex-col">
                <span className="text-lg tracking-[0.16em] font-serif font-bold uppercase text-amber-100">
                  INDIAN
                </span>
                <span className="text-[11px] tracking-[0.22em] font-sans uppercase text-amber-400 font-bold">
                  TENT HOUSE • 1991
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Eastern Uttar Pradesh’s premier event infrastructure and royal wedding decor agency. Creating majestic celebration pavilions and weather-certified canopies since 1991.
            </p>

            {/* Quick Trust Highlights */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-950/80 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>34+ Years of Trust</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-stone-800/80 text-emerald-300 border border-emerald-500/30">
                <span>5,000+ Events</span>
              </span>
            </div>

            {/* Quick Action Touch Buttons for Mobile & Desktop */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 border border-amber-500/30"
              >
                <Phone className="w-3.5 h-3.5 text-amber-200" />
                <span>Call Directly</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  'Namaste Indian Tent House! I want to inquire about event setup booking.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-300 text-sm tracking-wider uppercase flex items-center gap-1.5">
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Home &amp; Highlights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Heritage &amp; Legacy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#estimator" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Canopy Sizing Estimator</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Portfolio Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Why Choose Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#process" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>4-Step Process</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Client Reviews</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#faq" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Frequently Asked Questions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-between py-0.5">
                  <span>Contact &amp; Bookings</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Event Setup Offerings */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-300 text-sm tracking-wider uppercase">
              Setup Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">•</span>
                <span>Royal Wedding Shamianas &amp; Drapes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">•</span>
                <span>German Curved Aluminium Hangars</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">•</span>
                <span>Starlight Fairy Canopy Sangeet Lounges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">•</span>
                <span>Vedic Mandaps &amp; Royal Reception Stages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">•</span>
                <span>Palace Banquet &amp; Buffet Dining Wings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">•</span>
                <span>High-Wind Certified Weatherproof Covers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">•</span>
                <span>Synchronized Genset Power Backup</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-3 rounded-xl bg-stone-800/80 hover:bg-stone-700/90 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Reserve Event Dates</span>
              </button>
            </div>
          </div>

          {/* Col 4: Visit Office & Service Regions */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-300 text-sm tracking-wider uppercase">
              Office &amp; Yard
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open 7 Days: 8:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-amber-300 font-semibold text-stone-200">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-stone-200"
                >
                  WhatsApp: +91 93364 28824
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-300 break-all text-stone-200">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Coverage Area Badge */}
            <div className="p-3 rounded-2xl bg-stone-950/60 border border-amber-500/20 space-y-1 mt-2">
              <div className="flex items-center gap-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Service Coverage</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Gorakhpur, Deoria, Basti, Kushinagar, Maharajganj, Sant Kabir Nagar &amp; all Purvanchal.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Registered in Gorakhpur, Uttar Pradesh.
          </p>
          <div className="flex items-center gap-2 text-stone-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting Wedding &amp; Gala Bookings for 2026–2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
