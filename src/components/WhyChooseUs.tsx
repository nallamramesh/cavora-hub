import React from 'react';
import { Lightbulb, Layers, Zap, Users, Sparkles, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 relative bg-[#09090c] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Cavora Hub Advantage</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Why Creators Choose Cavora Hub
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            We operate at the intersection of cinematic storytelling and modern platform algorithms to ensure your visual assets make an indelible impression.
          </p>
        </div>

        {/* 4 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyChooseUs.map((item) => (
            <div
              key={item.number}
              id={`why-choose-card-${item.number}`}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#111116] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30 overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Number & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300">
                    {getFeatureIcon(item.iconName)}
                  </div>
                  <span className="font-display text-3xl font-extrabold text-zinc-700/80 group-hover:text-purple-400 transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Highlight Pill */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-purple-300">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
