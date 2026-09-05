import React from 'react';
import {
  Film,
  Image as ImageIcon,
  Palette,
  Share2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-6 h-6 text-purple-400" />;
      case 'Image':
        return <ImageIcon className="w-6 h-6 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-pink-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Capabilities</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            What We Create
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Everything you need to turn raw content into professional visual experiences.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#111115]/90 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-purple-950/40 hover:-translate-y-1"
            >
              {/* Subtle gradient wash on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Header row: Icon, Badge, and Big Number */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-purple-300">
                      {service.badge}
                    </span>
                  </div>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-700/80 group-hover:text-purple-400/80 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Service Title & Tagline */}
                <div className="relative z-10 mb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-purple-400/90 mt-1">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 relative z-10 pt-4 border-t border-white/[0.06]">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-all duration-200 group/btn"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
