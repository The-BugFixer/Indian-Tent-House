import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Users, Ruler, Sparkles, MessageCircle, ChevronRight, Check } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/mockData';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * Props for GallerySection component.
 */
interface GallerySectionProps {
  onOpenContactForSetup: (title: string) => void;
}

/**
 * GallerySection Component
 * 
 * Displays an interactive photo gallery of signature Indian Tent House setups
 * with category filtering, zero broken images via ImageWithFallback,
 * and a high-resolution lightbox inspection modal with direct booking actions.
 */
export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenContactForSetup }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'weddings' | 'parties' | 'functions'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filter items based on selected category
  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Filter definitions with counts
  const filters: Array<{ label: string; value: 'all' | 'weddings' | 'parties' | 'functions'; count: number }> = [
    { label: 'All Setups', value: 'all', count: GALLERY_ITEMS.length },
    { label: 'Royal Weddings', value: 'weddings', count: GALLERY_ITEMS.filter((i) => i.category === 'weddings').length },
    { label: 'Parties & Sangeet', value: 'parties', count: GALLERY_ITEMS.filter((i) => i.category === 'parties').length },
    { label: 'Stages & Mandaps', value: 'functions', count: GALLERY_ITEMS.filter((i) => i.category === 'functions').length },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-[#0F0D0B] border-y border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 block">
            PORTFOLIO &amp; EVENT INSPIRATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-100">
            Signature Event Gallery
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mx-auto mt-2" />
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Explore authentic event designs crafted for royal wedding receptions, sangeet nights, and cultural galas across Gorakhpur and Eastern Uttar Pradesh.
          </p>
        </div>

        {/* Filter Navigation Tabs (Horizontal swipeable on mobile) */}
        <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-10 pb-1 px-1">
          {filters.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`min-h-[40px] px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 text-white shadow-royal scale-105 border border-amber-500/40'
                    : 'bg-[#181411] text-stone-300 hover:bg-[#241E1A] border border-amber-500/25 shadow-sm'
                }`}
              >
                <span>{f.label}</span>
                <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#241E1A] text-amber-300 border border-amber-500/30'
                }`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Cards Responsive Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-[#181411] rounded-3xl overflow-hidden border border-amber-500/25 shadow-royal hover:shadow-royal-lg hover:border-amber-500/60 transition-all cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedItem(item)}
              >
                {/* Visual Image with multi-tier fallback */}
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
                  <ImageWithFallback
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Expand Overlay Button */}
                  <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3.5 py-2 rounded-full bg-[#181411]/95 text-stone-100 font-bold text-xs flex items-center gap-1.5 shadow-lg border border-amber-500/30">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Specifications</span>
                    </span>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#181411]/90 text-stone-200 shadow-sm border border-amber-500/30 backdrop-blur-sm">
                    {item.category === 'weddings' ? 'Royal Wedding' : item.category === 'parties' ? 'Sangeet & Party' : 'Stage Setup'}
                  </div>
                </div>

                {/* Card Summary Details */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-serif font-bold text-lg text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1 text-stone-400">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.guestCapacity}</span>
                    </span>
                    <span className="font-semibold text-amber-400 flex items-center gap-1">
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/85 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#181411] rounded-3xl overflow-hidden max-w-4xl w-full border border-amber-500/30 shadow-2xl max-h-[92vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-4 sm:p-5 border-b border-amber-500/20 flex items-center justify-between bg-[#14100D]">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-950/80 text-amber-300 border border-amber-500/40">
                      Portfolio Showcase
                    </span>
                    <h3 className="font-serif font-bold text-base sm:text-xl text-stone-100">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-full hover:bg-stone-800 text-stone-300 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
                  {/* Large High-Res Visual with Fallback */}
                  <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-sm aspect-[16/10] bg-stone-900">
                    <ImageWithFallback
                      src={selectedItem.image}
                      fallbackSrc={selectedItem.fallbackImage}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                      badgeText="Verified Setup"
                    />
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#201A16] border border-amber-500/25 space-y-1">
                      <span className="text-xs text-stone-400 font-medium flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5 text-amber-400" />
                        <span>Footprint &amp; Dimensions</span>
                      </span>
                      <p className="font-bold text-stone-100 text-sm">{selectedItem.dimensions}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#201A16] border border-amber-500/25 space-y-1">
                      <span className="text-xs text-stone-400 font-medium flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>Recommended Capacity</span>
                      </span>
                      <p className="font-bold text-stone-100 text-sm">{selectedItem.guestCapacity}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-stone-100">Setup Description</h4>
                    <p className="text-stone-300 text-sm leading-relaxed">{selectedItem.description}</p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-stone-100">Included Structural Components</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedItem.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-300 bg-[#241D19] p-2.5 rounded-xl border border-amber-500/25">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Action Bar */}
                <div className="p-4 sm:p-5 border-t border-amber-500/20 bg-[#14100D] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-stone-400">
                    Custom adaptations available for your venue dimensions.
                  </p>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    {/* WhatsApp inquiry button */}
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello Indian Tent House, I would like to inquire about the setup: "${selectedItem.title}" (${selectedItem.dimensions}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial min-h-[44px] py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Inquiry</span>
                    </a>

                    {/* Book setup */}
                    <button
                      onClick={() => {
                        const title = selectedItem.title;
                        setSelectedItem(null);
                        onOpenContactForSetup(title);
                      }}
                      className="flex-1 sm:flex-initial min-h-[44px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 border border-amber-500/40"
                    >
                      <span>Book This Setup</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
