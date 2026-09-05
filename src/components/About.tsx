import React from 'react';
import { Sparkles, Check, Film, Award, Flame, Users, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#09090c] border-y border-white/[0.06]">
      {/* Ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Collage with Studio Atmosphere */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111116] p-2">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
                alt="Cavora Hub Post-Production Suite"
                className="w-full h-[380px] sm:h-[460px] object-cover rounded-xl sm:rounded-2xl brightness-90"
              />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-[#0d0d12]/90 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      The Cavora Philosophy
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      Design. Create. Inspire.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  We believe content without emotional rhythm is just noise. We blend technical audio-visual mastery with creator-first empathy.
                </p>
              </div>

              {/* Floating top tag */}
              <div className="absolute top-6 right-6 bg-purple-600 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-lg border border-purple-400/40">
                EST. {siteConfig.brand.foundedYear}
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative & Prominent Statistics */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About {siteConfig.brand.fullName}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] mb-6">
              {siteConfig.about.heading}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4">
              {siteConfig.about.contentParagraph1}
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed mb-10">
              {siteConfig.about.contentParagraph2}
            </p>

            {/* Prominent Statistics Grid (50+, 30+, 10+, 24/7) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-white/10">
              {siteConfig.about.stats.map((stat) => (
                <div
                  key={stat.id}
                  id={`stat-${stat.id}`}
                  className="p-4 sm:p-5 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-purple-500/30 transition-all group"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 mb-1 group-hover:scale-105 origin-left transition-transform">
                    {stat.value}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-medium">
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
