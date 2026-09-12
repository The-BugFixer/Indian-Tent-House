import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { InteractiveCanopyVisualizer } from './components/InteractiveCanopyVisualizer';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

/**
 * App Component
 * 
 * Root orchestrator for Indian Tent House (Est. 1991).
 * Features a warm, royal Indian celebration visual theme (ivory, gold, amber, and crimson accents)
 * with zero dark mode clunkiness, verified image fallbacks (preventing any cracked images),
 * mobile-first sticky action bar, and setup sizing estimator.
 */
export function App() {
  // Form prefill states for seamless booking workflow
  const [prefillSpec, setPrefillSpec] = useState<string>('');
  const [prefillService, setPrefillService] = useState<string>('');

  /**
   * Smoothly scrolls to the contact and booking form
   */
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Opens contact section with prefilled sizing calculation specs
   */
  const handleOpenContactWithSpec = (spec: string) => {
    setPrefillSpec(spec);
    handleScrollToContact();
  };

  /**
   * Opens contact section for a specific portfolio gallery setup
   */
  const handleOpenContactForSetup = (setupTitle: string) => {
    setPrefillSpec(`Inquiry for portfolio setup: ${setupTitle}`);
    handleScrollToContact();
  };

  return (
    <div className="min-h-screen font-sans bg-[#0F0D0B] text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. Main Navigation Bar with Mobile Drawer */}
      <Navbar
        onOpenContact={handleScrollToContact}
      />

      {/* Main Page Content Flow */}
      <main>
        {/* 2. Royal Hero Section with Heritage Highlights & Direct Actions */}
        <Hero
          onOpenContact={handleScrollToContact}
        />

        {/* 3. Heritage & Engineering About Section */}
        <AboutSection
          onOpenContact={handleScrollToContact}
        />

        {/* 4. Interactive Setup Sizing & Capacity Estimator */}
        <InteractiveCanopyVisualizer
          onOpenContactWithSpec={handleOpenContactWithSpec}
        />

        {/* 5. Signature Event Gallery & Fullscreen Lightbox */}
        <GallerySection
          onOpenContactForSetup={handleOpenContactForSetup}
        />

        {/* 6. Why Choose Us: 6 Core Structural Pillars */}
        <WhyChooseUs />

        {/* 7. 4-Step Transparent Execution Process */}
        <ProcessSection
          onOpenContact={handleScrollToContact}
        />

        {/* 8. Verified Client Testimonials & Community Reviews */}
        <TestimonialsSection />

        {/* 9. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 10. Multi-Channel Contact, Date Booking & Google Maps */}
        <ContactSection
          prefillMessage={prefillSpec}
          prefillService={prefillService}
        />
      </main>

      {/* 11. Royal Footer with Business Information & Quick Navigation */}
      <Footer
        onOpenContact={handleScrollToContact}
      />

      {/* 12. Mobile Sticky Bottom Action Bar & Desktop Floating Triggers */}
      <FloatingActions
        onOpenContact={handleScrollToContact}
      />
    </div>
  );
}

export default App;
