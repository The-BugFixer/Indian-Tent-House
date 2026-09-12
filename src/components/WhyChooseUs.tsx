import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Ruler, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

/**
 * WhyChooseUs Component
 * 
 * Showcases the 6 foundational reasons clients across Eastern Uttar Pradesh
 * choose Indian Tent House for their grand celebrations.
 * Styled in warm ivory and royal gold with zero dark mode clunkiness.
 */
export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: '34+ Years Royal Legacy',
      description: `Established in ${BUSINESS_INFO.established}, we bring over three decades of uninterrupted wedding excellence, crafting more than ${BUSINESS_INFO.eventsCompleted} momentous occasions.`,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: 'Certified Weatherproof Hangars',
      description: 'Our German aluminium hangars and PVC membranes are tested for 100 km/h wind resistance, heavy monsoons, and flame-retardant safety standards.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: '100% In-House Inventory',
      description: 'From imported crystal chandeliers and Chiavari seating to heavy-duty audio trusses and silent gensets, we own our complete inventory with zero middleman markups.',
    },
    {
      icon: <Ruler className="w-6 h-6 text-amber-400" />,
      title: 'Complimentary On-Site Survey',
      description: 'Our senior surveyor visits your venue with precision laser tools to map ground contours, electrical entries, and tree clearance before designing a 3D layout.',
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: 'Early 24–48h Handover',
      description: 'We complete fabrication well in advance, providing your family and decorators ample time for rehearsals, soundchecks, and ceremonial setup.',
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: 'Direct Owner Supervision',
      description: 'The founders and senior project directors remain on ground throughout construction and event hours to ensure seamless, worry-free coordination.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-[#14110E] border-y border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 block">
            UNCOMPROMISING EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-100">
            Why Indian Tent House?
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mx-auto mt-2" />
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            When hosting a once-in-a-lifetime family wedding or state gala, safety, punctuality, and grandeur cannot be compromised.
          </p>
        </div>

        {/* 6 Reasons Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-7 rounded-3xl bg-[#181411] border border-amber-500/25 shadow-royal hover:shadow-royal-lg hover:border-amber-500/60 transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#241E1A] border border-amber-500/30 flex items-center justify-center shadow-sm">
                {item.icon}
              </div>

              <h3 className="font-serif font-bold text-lg text-stone-100 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar with Rich Imperial Color Depth */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1E1713] via-[#241C18] to-[#1E1713] border border-amber-500/30 shadow-royal-lg grid sm:grid-cols-3 gap-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <span className="text-3xl sm:text-5xl font-serif font-bold text-amber-200 block">
              {BUSINESS_INFO.experienceYears}
            </span>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-1">
              Years in Business
            </p>
          </div>
          <div className="relative z-10 sm:border-x sm:border-amber-500/20">
            <span className="text-3xl sm:text-5xl font-serif font-bold text-amber-300 block">
              {BUSINESS_INFO.eventsCompleted}
            </span>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-1">
              Celebrations Executed
            </p>
          </div>
          <div className="relative z-10">
            <span className="text-3xl sm:text-5xl font-serif font-bold text-emerald-300 block">
              {BUSINESS_INFO.satisfactionRate}
            </span>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-1">
              Client Satisfaction
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
