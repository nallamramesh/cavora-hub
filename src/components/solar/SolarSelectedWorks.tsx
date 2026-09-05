import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { RetroStar4 } from './RetroIcons';

export interface SolarProject {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  deliverables: string[];
  client: string;
  year: string;
  stats?: string;
}

const PROJECTS: SolarProject[] = [
  {
    id: 'sundaze',
    category: 'BRANDING',
    title: 'SUNDAZE',
    subtitle: 'Wellness Brand',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    description: 'Complete brand identity, custom typography, sustainable cosmetic packaging, and photographic art direction for an organic botanical skincare line.',
    deliverables: ['Brand Identity & Logo', 'Glass Bottle & Box Packaging', 'Typography System', 'Brand Photography Guidelines'],
    client: 'Sundaze Botanical Co.',
    year: '2025',
    stats: '+140% D2C Launch Sales',
  },
  {
    id: 'morii',
    category: 'WEB DESIGN',
    title: 'MORII',
    subtitle: 'Creative Agency',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Immersive digital experience and interactive web portfolio crafted for an avant-garde creative and architectural collective in Tokyo and London.',
    deliverables: ['Custom Web Design', 'Interactive Motion Design', 'Design System', 'Content Strategy'],
    client: 'Morii Creative',
    year: '2025',
    stats: 'Awwwards Site of the Day',
  },
  {
    id: 'citrus',
    category: 'BRANDING',
    title: 'CITRUS',
    subtitle: 'Beverage Brand',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant aluminum can packaging, retro-pop color palette, brand illustrations, and shelf-popping point-of-sale displays for sparkling citrus beverages.',
    deliverables: ['Can Packaging Suite', 'Custom Mascot & Icons', 'Retail Display Assets', 'Social Launch Campaign'],
    client: 'Citrus Refreshment Co.',
    year: '2024',
    stats: 'Expanded to 450+ Supermarkets',
  },
  {
    id: 'wandr',
    category: 'UI/UX DESIGN',
    title: 'WANDR',
    subtitle: 'Travel App',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'End-to-end mobile product design for a curated slow-travel discovery app featuring personalized tropical itineraries, maps, and offline guidebooks.',
    deliverables: ['Mobile App UI/UX', 'Interactive Prototyping', 'Onboarding Flow', 'Design Tokens'],
    client: 'Wandr Global Inc.',
    year: '2024',
    stats: '4.9 App Store Rating (50K+ Installs)',
  },
];

interface SolarSelectedWorksProps {
  onOpenProjectDetail?: (project: SolarProject) => void;
}

export const SolarSelectedWorks: React.FC<SolarSelectedWorksProps> = () => {
  const [selectedProject, setSelectedProject] = useState<SolarProject | null>(null);

  return (
    <section id="work" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#1C1618] uppercase tracking-tight">
            SELECTED WORKS
          </h2>
          <a
            href="#work"
            className="group inline-flex items-center gap-1.5 font-display font-bold text-xs sm:text-sm text-[#FF5533] uppercase tracking-wider hover:text-[#E64424] transition-colors"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group relative cursor-pointer retro-card overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Meta Header */}
              <div className="p-5 pb-2">
                <span className="block font-display font-bold text-[10px] tracking-widest text-[#7D6E6F] uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-black text-xl text-[#FF5533] uppercase tracking-wide leading-tight group-hover:text-[#E64424] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5E5253] font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              {/* Card Mockup Visual Container */}
              <div className="relative mx-4 my-3 aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FDF0E6] to-[#F7E1D2] border border-[#EED9CB] flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-sm"
                />

                {/* Subtle Arch Framing on Mockup */}
                <div className="absolute inset-0 border-2 border-white/60 rounded-2xl pointer-events-none" />

                {/* Floating Arrow Badge at Bottom Right */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-[#FF5533] shadow-md flex items-center justify-center group-hover:bg-[#FF5533] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Bottom Space */}
              <div className="h-2" />

              {/* Decorative sparkle on the last card */}
              {index === 3 && (
                <div className="absolute -top-3 -right-3 pointer-events-none">
                  <RetroStar4 className="w-6 h-6 text-[#FF5571]" color="#FF5571" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E2D8] shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#7D6E6F] hover:text-[#1C1618] hover:bg-[#FAF2EA] transition-colors"
              aria-label="Close project preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-[#FF5533] font-display font-extrabold text-xs uppercase tracking-wider mb-2">
                {selectedProject.category}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1C1618] uppercase">
                {selectedProject.title} — {selectedProject.subtitle}
              </h3>
              <p className="text-xs text-[#7D6E6F] mt-1 font-mono">
                Client: {selectedProject.client} • Year: {selectedProject.year}
              </p>
            </div>

            {/* Visual */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-[#FAF2EA] border border-[#F0E2D8] mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#1C1618] mb-3">
                Key Deliverables & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#4A3E3D]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5533] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric */}
            {selectedProject.stats && (
              <div className="p-4 rounded-2xl bg-[#FFF4ED] border border-[#FCD8C2] flex items-center justify-between mb-6">
                <span className="font-display font-bold text-xs uppercase text-[#FF5533]">
                  Project Impact
                </span>
                <span className="font-display font-extrabold text-sm sm:text-base text-[#1C1618]">
                  {selectedProject.stats}
                </span>
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-[#FF5533] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#E64424] transition-colors"
              >
                Close Project
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
