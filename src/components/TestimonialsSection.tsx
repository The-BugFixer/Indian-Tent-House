import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

/**
 * TestimonialsSection Component
 * 
 * Showcases verified testimonials from families and event hosts who celebrated
 * their royal weddings and expositions with Indian Tent House.
 * Builds strong community trust and credibility.
 */
export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#14110E] border-y border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 block">
            CLIENT EXPERIENCES &amp; REVIEWS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-100">
            Trusted by Families Across Eastern UP
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mx-auto mt-2" />
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-100">4.9 out of 5</span>
            <span className="text-xs text-stone-400">(Based on 500+ Local Weddings &amp; Events)</span>
          </div>
        </div>

        {/* Testimonials 3-Card Responsive Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-3xl bg-[#181411] border border-amber-500/25 shadow-royal hover:shadow-royal-lg hover:border-amber-500/60 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-400/30" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author & Event Info */}
              <div className="pt-4 border-t border-amber-500/20">
                <h4 className="font-serif font-bold text-stone-100 text-base">
                  {t.clientName}
                </h4>
                <p className="text-xs font-semibold text-amber-300 mt-0.5">
                  {t.event}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-stone-400 mt-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{t.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
