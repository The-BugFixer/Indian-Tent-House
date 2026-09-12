import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, Clock, Calendar, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

/**
 * Props for ContactSection component.
 */
interface ContactSectionProps {
  prefillMessage?: string;
  prefillService?: string;
}

/**
 * ContactSection Component
 * 
 * Provides direct multi-channel communication for Indian Tent House:
 * 1. Pre-filled WhatsApp Inquiry Generator
 * 2. Instant Booking & Availability Inquiry Form
 * 3. Direct Phone Calls to Business Director
 * 4. Google Maps Directions to Civil Lines / Betiahata Road office in Gorakhpur
 */
export const ContactSection: React.FC<ContactSectionProps> = ({
  prefillMessage,
  prefillService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [event, setEvent] = useState(prefillService || 'Grand Royal Wedding');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('300–500 Guests');
  const [budget, setBudget] = useState('₹1,00,000 – ₹2,50,000');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusNote, setStatusNote] = useState('');

  // Handle incoming prefill specifications from Sizing Estimator or Gallery
  useEffect(() => {
    if (prefillMessage) {
      setMessage((prev) => (prev ? `${prev}\n\n[Specification]: ${prefillMessage}` : `[Specification]: ${prefillMessage}`));
    }
  }, [prefillMessage]);

  useEffect(() => {
    if (prefillService) {
      setEvent(prefillService);
    }
  }, [prefillService]);

  const minDate = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !date || !location) {
      setStatusNote('Please complete all required fields (Name, Phone, Date, and Location).');
      return;
    }

    // Build structured inquiry text for WhatsApp
    const whatsappMessage = `Hello Indian Tent House,\n\nI would like to enquire about an event setup:\n• Name: ${name}\n• Phone: ${phone}\n• Event Type: ${event}\n• Date: ${date}\n• Location: ${location}\n• Expected Guests: ${guests}\n• Budget Range: ${budget}\n${message ? `• Setup Notes: ${message}\n` : ''}\nPlease check availability and share a preliminary estimate.`;

    // Open WhatsApp directly
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setIsSubmitted(true);
    setStatusNote('Thank you! Your enquiry has been formatted and opened in WhatsApp for instant review.');
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#14110E] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 block">
            RESERVATIONS &amp; CONSULTATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-100">
            Book Your Date &amp; Setup
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 mx-auto mt-2" />
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Reserve peak wedding and celebration dates in Gorakhpur and Eastern Uttar Pradesh. We offer complimentary on-site laser surveys for all lawn and farmhouse inquiries.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Office Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#181411] border border-amber-500/25 shadow-royal space-y-6">
              <h3 className="font-serif font-bold text-xl text-stone-100">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Phone Call (phone number text hidden from UI, tel: retained) */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#201A16] border border-amber-500/20 hover:border-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#28211C] flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Phone / Mobile</span>
                    <span className="font-bold text-stone-100 text-sm">Call Direct Line</span>
                    <span className="text-[11px] text-emerald-400 font-semibold block mt-0.5">Direct Line to Senior Planner</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Indian Tent House, I would like to inquire about an event setup in Gorakhpur.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#201A16] border border-amber-500/20 hover:border-emerald-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#28211C] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Instant WhatsApp</span>
                    <span className="font-bold text-stone-100 text-sm">Chat on WhatsApp</span>
                    <span className="text-[11px] text-emerald-400 font-semibold block mt-0.5">Quickest response (Typically &lt; 15 mins)</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#201A16] border border-amber-500/20 hover:border-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#28211C] flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Email Address</span>
                    <span className="font-bold text-stone-100 text-xs sm:text-sm break-all">{BUSINESS_INFO.email}</span>
                  </div>
                </a>

                {/* Physical Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#201A16] border border-amber-500/20">
                  <div className="w-10 h-10 rounded-xl bg-[#28211C] flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Head Office &amp; Godown</span>
                    <p className="font-semibold text-stone-200 text-xs sm:text-sm leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 mt-1.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#241D19] border border-amber-500/25 text-xs text-stone-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Office Hours: 8:00 AM – 10:00 PM (Monday to Sunday)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form (Col 6-12) */}
          <div className="lg:col-span-7 bg-[#181411] rounded-3xl p-6 sm:p-8 border border-amber-500/25 shadow-royal">
            <h3 className="font-serif font-bold text-2xl text-stone-100 mb-2">
              Event Inquiry &amp; Date Reservation
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mb-6">
              Fill out the details below. You will be instantly connected to our planning team on WhatsApp with your exact event parameters.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-stone-300 block">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-bold text-stone-300 block">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-500"
                  />
                </div>
              </div>

              {/* Row 2: Event Type & Date */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-event" className="text-xs font-bold text-stone-300 block">
                    Occasion / Event Type *
                  </label>
                  <select
                    id="contact-event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="Grand Royal Wedding" className="bg-[#181411]">Grand Royal Wedding</option>
                    <option value="Wedding Reception & Banquet" className="bg-[#181411]">Wedding Reception &amp; Banquet</option>
                    <option value="Sangeet / Mehendi / Haldi Lounge" className="bg-[#181411]">Sangeet / Mehendi / Haldi Lounge</option>
                    <option value="German Aluminium Hangar Setup" className="bg-[#181411]">German Aluminium Hangar Setup</option>
                    <option value="Corporate Exposition / Gala" className="bg-[#181411]">Corporate Exposition / Gala</option>
                    <option value="Religious / Cultural Mandap" className="bg-[#181411]">Religious / Cultural Mandap</option>
                    <option value="Other Celebrations" className="bg-[#181411]">Other Celebrations</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-date" className="text-xs font-bold text-stone-300 block">
                    Event Date *
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    required
                    min={minDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Venue Location & Guests */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-location" className="text-xs font-bold text-stone-300 block">
                    Venue / Lawn Address *
                  </label>
                  <input
                    id="contact-location"
                    type="text"
                    required
                    placeholder="e.g. Civil Lines Lawn, Gorakhpur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-guests" className="text-xs font-bold text-stone-300 block">
                    Estimated Guest Count
                  </label>
                  <select
                    id="contact-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="100–300 Guests" className="bg-[#181411]">100–300 Guests</option>
                    <option value="300–600 Guests" className="bg-[#181411]">300–600 Guests</option>
                    <option value="600–1,000 Guests" className="bg-[#181411]">600–1,000 Guests</option>
                    <option value="1,000–2,000 Guests" className="bg-[#181411]">1,000–2,000 Guests</option>
                    <option value="2,000+ Grand Gathering" className="bg-[#181411]">2,000+ Grand Gathering</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Budget Range */}
              <div className="space-y-1.5">
                <label htmlFor="contact-budget" className="text-xs font-bold text-stone-300 block">
                  Approximate Budget Allocation
                </label>
                <select
                  id="contact-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  <option value="₹50,000 – ₹1,00,000" className="bg-[#181411]">₹50,000 – ₹1,00,000 (Standard Setup)</option>
                  <option value="₹1,00,000 – ₹2,50,000" className="bg-[#181411]">₹1,00,000 – ₹2,50,000 (Grand Shamiana &amp; Mandap)</option>
                  <option value="₹2,50,000 – ₹5,00,000" className="bg-[#181411]">₹2,50,000 – ₹5,00,000 (German Hangar &amp; Lighting)</option>
                  <option value="₹5,00,000+" className="bg-[#181411]">₹5,00,000+ (Monumental Turnkey Imperial Wedding)</option>
                </select>
              </div>

              {/* Row 5: Custom Notes or Specs */}
              <div className="space-y-1.5">
                <label htmlFor="contact-notes" className="text-xs font-bold text-stone-300 block">
                  Setup Specifications &amp; Special Requests
                </label>
                <textarea
                  id="contact-notes"
                  rows={3}
                  placeholder="Mention any specific structures, German hangar requirements, air conditioning, crystal chandeliers, or stage preferences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-500/30 bg-[#201A16] focus:bg-[#261E1A] text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none placeholder:text-stone-500"
                />
              </div>

              {/* Status Note or Feedback */}
              {statusNote && (
                <div className={`p-3 rounded-xl text-xs font-medium flex items-center gap-2 ${
                  isSubmitted ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/40' : 'bg-amber-950/70 text-amber-300 border border-amber-500/40'
                }`}>
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{statusNote}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-rose-900 hover:from-amber-500 hover:to-rose-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-royal hover:shadow-royal-lg transition-all hover:scale-[1.01] active:scale-[0.99] border border-amber-500/40"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Submit &amp; Open in WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
