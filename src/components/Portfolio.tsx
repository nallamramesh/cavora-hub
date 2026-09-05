import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Video, Wand2, Palette, Smartphone, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface PortfolioProps {
  onRequestSimilar: (service: string, projectName: string) => void;
}

const CAPABILITIES = [
  {
    id: 'video',
    icon: Video,
    category: 'VIDEO POST-PRODUCTION',
    title: 'Cinematic Video Editing & Motion',
    description:
      'We turn raw clips into high-converting, binge-worthy video content with immaculate pacing, sound design, and color grading.',
    deliverables: [
      'YouTube Long-Form & Documentaries',
      '9:16 Viral Reels, Shorts & TikToks',
      'Cinematic Color Grading & LUT Styling',
      'Kinetic Subtitles & Sound Effects',
      'Motion Graphics & Hook Transitions',
    ],
    accentColor: '#FF5533',
    bgBadge: '#FFEAE8',
  },
  {
    id: 'photo',
    icon: Wand2,
    category: 'PHOTO RETOUCHING',
    title: 'High-End Retouching & Color Grading',
    description:
      'Editorial-grade beauty, fashion, and commercial product photo enhancement with natural textures and balanced lighting.',
    deliverables: [
      'Commercial Product Cleanups & Isolation',
      'Frequency Separation Skin Retouching',
      'Atmospheric Color Balancing & Relighting',
      'Editorial Lookbook Post-Production',
      'High-Resolution Print & Web Exports',
    ],
    accentColor: '#FF3E6C',
    bgBadge: '#FFF0F3',
  },
  {
    id: 'graphic',
    icon: Palette,
    category: 'BRANDING & DESIGN',
    title: 'Brand Identities & Graphic Design',
    description:
      'Memorable visual identities and marketing collateral built to stand out on crowded feeds and physical shelves.',
    deliverables: [
      'Modern & Retro Logo Design Suites',
      'Color Palettes & Typographic Systems',
      'Packaging, Labels & Merchandise',
      'Event Posters, Flyers & Banners',
      'Vector Illustrations & Custom Badges',
    ],
    accentColor: '#F5BE6B',
    bgBadge: '#FFF8EB',
  },
  {
    id: 'social',
    icon: Smartphone,
    category: 'SOCIAL GROWTH',
    title: 'Social Media Viral Creatives',
    description:
      'High-CTR thumbnails, swipeable carousels, and thumb-stopping motion ads designed to boost engagement and conversions.',
    deliverables: [
      'High-CTR YouTube Thumbnails',
      'Multi-Slide Educational Carousels',
      'Animated Stories & Ad Creatives',
      'Channel Banners & Profile Branding',
      'Rapid Turnaround Content Batches',
    ],
    accentColor: '#FF5533',
    bgBadge: '#FFEAE8',
  },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestSimilar }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="capabilities" className="py-16 sm:py-24 relative bg-[#FAF2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Disciplines & Skills</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1C1618] uppercase tracking-tight mb-4">
            What We Can Build For You
          </h2>
          <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed">
            We are currently accepting our initial projects! Discover the four core creative disciplines Cavora Hub Graphics specializes in delivering with precision and speed.
          </p>
        </motion.div>

        {/* 4 Core Discipline Cards with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                id={`capability-${cap.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl p-7 sm:p-9 bg-white border border-[#F0E2D8] hover:border-[#FF5533]/60 transition-colors duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-display font-black uppercase tracking-wider"
                      style={{ backgroundColor: cap.bgBadge, color: cap.accentColor }}
                    >
                      {cap.category}
                    </span>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: cap.bgBadge, color: cap.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#1C1618] uppercase tracking-tight mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5253] leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F0E2D8]">
                    <p className="text-xs font-display font-bold uppercase tracking-wider text-[#1C1618] mb-3">
                      Deliverables Included:
                    </p>
                    {cap.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4A3E3D] font-medium leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-4 border-t border-[#F0E2D8]">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onRequestSimilar(cap.category, cap.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FAF2EA] hover:bg-[#FF5533] text-[#1C1618] hover:text-white font-display font-bold text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founding Client Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#1C1618] to-[#2E2024] text-white relative overflow-hidden shadow-2xl border border-[#3D2E32]"
        >
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF5533]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[11px] font-display font-bold tracking-wider text-[#FF5571] uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <span>NOW ACCEPTING OUR FIRST CLIENTS</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight mb-3">
                Have A Project In Mind? Let's Collaborate.
              </h3>
              <p className="text-sm sm:text-base text-[#D4C5C6] leading-relaxed max-w-2xl">
                We are ready to bring your video footage, photos, and brand ideas to life with 100% dedicated focus, 24-48h turnaround, and direct communication on WhatsApp ({siteConfig.contact.phoneDisplay}).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF2EA] text-[#1C1618] font-display font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center"
              >
                <span>SEND PROJECT BRIEF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
