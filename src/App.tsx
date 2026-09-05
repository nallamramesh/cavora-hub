import React, { useState } from 'react';
import { SolarNavbar } from './components/solar/SolarNavbar';
import { SolarHero } from './components/solar/SolarHero';
import { SolarMarquee } from './components/solar/SolarMarquee';
import { SolarAboutCard } from './components/solar/SolarAboutCard';
import { BeforeAfter } from './components/BeforeAfter';
import { Portfolio } from './components/Portfolio';
import { SolarServicesAndStats } from './components/solar/SolarServicesAndStats';
import { Process } from './components/Process';
import { SolarClientLove } from './components/solar/SolarClientLove';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { SolarFooterCta } from './components/solar/SolarFooterCta';
import { SolarInquiryModal } from './components/solar/SolarInquiryModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Video Editing');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹5,000 – ₹10,000');

  const handleOpenInquiry = (service?: string) => {
    if (service) setSelectedService(service);
    setIsInquiryModalOpen(true);
  };

  const handleRequestSimilar = (service: string, projectName: string) => {
    setSelectedService(service);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsInquiryModalOpen(true);
    }
  };

  const handleSelectPlan = (planName: string, budget: string) => {
    setSelectedService(`Pricing Plan: ${planName}`);
    setSelectedBudget(budget);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsInquiryModalOpen(true);
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('capabilities') || document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FAF2EA] text-[#1C1618] font-sans selection:bg-[#FF5533] selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. Retro Studio Navbar */}
      <SolarNavbar onOpenCreate={() => handleOpenInquiry()} />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* 2. Hero: "BRAND & MEDIA DESIGN THAT Shines" */}
        <SolarHero
          onViewWork={scrollToWork}
          onAboutMe={scrollToAbout}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* Dynamic Continuous Marquee Ticker */}
        <SolarMarquee />

        {/* 3. About Studio Card: Cavora Hub Studio & Core Capabilities */}
        <SolarAboutCard />

        {/* 4. Interactive Before & After Retouching Lab */}
        <BeforeAfter />

        {/* 5. Creative Capabilities & Disciplines (No fake past projects) */}
        <Portfolio onRequestSimilar={handleRequestSimilar} />

        {/* 7. Creative Services & Studio Commitments (Bento Stats) */}
        <SolarServicesAndStats />

        {/* 8. 5-Step Work Process Timeline */}
        <Process />

        {/* 9. Founding Client Guarantees & Promises */}
        <SolarClientLove />

        {/* 10. Transparent Pricing Packages */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 11. Frequently Asked Questions Accordion */}
        <FAQ />

        {/* 12. Direct Project Inquiry & WhatsApp Brief Estimator */}
        <Contact
          initialService={selectedService}
          initialBudget={selectedBudget}
        />

        {/* 14. Footer CTA: "LET'S BUILD Something Amazing!" + Cavora Hub Brand */}
        <SolarFooterCta onOpenContact={() => handleOpenInquiry()} />
      </main>

      {/* Floating WhatsApp Chat Pill */}
      <WhatsAppButton />

      {/* Interactive Project Inquiry Modal */}
      <SolarInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultService={selectedService}
      />

    </div>
  );
}
