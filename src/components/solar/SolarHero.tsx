import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Video, Palette, Flame } from 'lucide-react';
import { RetroStar8, RetroStar4, CreativePurposeBadge } from './RetroIcons';

interface SolarHeroProps {
  onViewWork: () => void;
  onAboutMe: () => void;
  onOpenInquiry: () => void;
}

export const SolarHero: React.FC<SolarHeroProps> = ({ onViewWork, onOpenInquiry }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative z-10"
          >
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] mb-6 shadow-xs hover:shadow-sm transition-shadow"
            >
              <Flame className="w-3.5 h-3.5 text-[#FF3E6C] animate-bounce" />
              <span className="font-display font-extrabold text-[11px] sm:text-xs tracking-widest text-[#FF3E6C] uppercase">
                CREATIVE. STRATEGIC. IMPACTFUL.
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="relative mb-6">
              {/* Decorative 8-point pink starburst on the left with gentle float */}
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -left-8 sm:-left-12 top-10 pointer-events-none hidden sm:block"
              >
                <RetroStar8 className="w-10 h-10 sm:w-12 sm:h-12" color="#FF5571" />
              </motion.div>

              {/* Decorative 4-point sparkle above headline with gentle spin & pulse */}
              <motion.div
                animate={{ rotate: [0, 90, 180, 270, 360], scale: [0.9, 1.15, 0.9] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute left-52 sm:left-72 -top-4 pointer-events-none"
              >
                <RetroStar4 className="w-7 h-7 sm:w-8 sm:h-8" color="#FF5571" />
              </motion.div>

              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-[5.8rem] tracking-tight text-[#1C1618] uppercase leading-[0.95]">
                CAVORA HUB
                <br />
                <span className="text-[#FF5533] inline-block hover:scale-[1.02] transition-transform duration-200">
                  GRAPHICS
                </span>
              </h1>
            </div>

            {/* Description Subtext */}
            <p className="text-base sm:text-lg text-[#5E5253] max-w-xl leading-relaxed mb-8 sm:mb-10 font-medium">
              Cavora Hub Graphics is a creative post-production studio crafting cinematic video edits, high-end photo retouching, bold brand identities, and viral social media assets. We are currently accepting new client projects with dedicated 1-on-1 focus.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenInquiry}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-sm uppercase tracking-wider shadow-md shadow-[#FF5533]/25 hover:shadow-lg hover:shadow-[#FF5533]/35 transition-all cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={onViewWork}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF2EA] border border-[#D9C4B5] text-[#1C1618] font-display font-bold text-sm uppercase tracking-wider shadow-xs hover:border-[#1C1618] transition-all cursor-pointer"
              >
                <span>EXPLORE SERVICES</span>
                <Sparkles className="w-4 h-4 text-[#FF5533] group-hover:rotate-12 transition-transform" />
              </motion.button>
            </div>

            {/* Studio Status Strip */}
            <div className="mt-10 flex items-center gap-6 sm:gap-8 pt-6 border-t border-[#F0E2D8]/80">
              <div>
                <span className="inline-flex items-center gap-1.5 font-display font-black text-2xl text-[#25D366]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                  OPEN
                </span>
                <p className="text-xs text-[#7D6E6F] font-mono">Now Taking Projects</p>
              </div>
              <div className="w-[1px] h-8 bg-[#E8D8CC]" />
              <div>
                <span className="font-display font-black text-2xl text-[#FF3E6C]">100%</span>
                <p className="text-xs text-[#7D6E6F] font-mono">Dedicated Attention</p>
              </div>
              <div className="w-[1px] h-8 bg-[#E8D8CC]" />
              <div>
                <span className="font-display font-black text-2xl text-[#FF5533]">24–48h</span>
                <p className="text-xs text-[#7D6E6F] font-mono">Rapid Turnaround</p>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual: Branded Design Arch Showcase with Motion & Waveforms */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient radiating lines in background with slow spin */}
            <div className="absolute inset-0 -m-10 flex items-center justify-center pointer-events-none opacity-40">
              <svg viewBox="0 0 500 500" className="w-[120%] h-[120%] stroke-[#F0D5C2] animate-spin-reverse-slow" strokeWidth="1.5">
                {Array.from({ length: 18 }).map((_, i) => {
                  const angle = (i * 360) / 18;
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 250 + Math.cos(rad) * 240;
                  const y2 = 250 + Math.sin(rad) * 240;
                  return <line key={i} x1="250" y1="250" x2={x2} y2={y2} strokeDasharray="4 6" />;
                })}
              </svg>
            </div>

            {/* Glowing Halo Background Layer */}
            <div className="absolute w-[300px] sm:w-[340px] h-[420px] sm:h-[480px] rounded-t-full rounded-b-3xl bg-[#FF5533]/15 blur-2xl animate-pulse-halo pointer-events-none" />

            {/* The Tall Arch Card: Bespoke Studio Brand & Creative Design Motif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[460px] rounded-t-full rounded-b-3xl overflow-hidden bg-gradient-to-b from-[#FF5533] via-[#FF5571] to-[#FFEAE8] p-1.5 shadow-2xl shadow-[#FF5533]/25 transition-all duration-300"
            >
              
              <div className="w-full h-full rounded-t-full rounded-b-[20px] overflow-hidden relative bg-gradient-to-b from-[#FFF5EE] via-[#FCECE1] to-[#F7DECD] flex flex-col items-center justify-between p-6 select-none">
                
                {/* Background Concentric Arches & Rays */}
                <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border border-dashed border-[#FF5533]/40 animate-spin-slow" />
                  <div className="w-72 h-72 rounded-full border border-[#FF5533]/20 absolute" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 pt-4 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-[#F0E2D8] shadow-2xs"
                  >
                    <Sparkles className="w-3 h-3 text-[#FF5533] animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="font-display font-black text-[10px] tracking-widest text-[#FF5533] uppercase">
                      STUDIO LAB
                    </span>
                  </motion.div>
                </div>

                {/* Center Core: Custom Cavora Hub Medallion & Creative Design Elements */}
                <div className="relative z-10 flex flex-col items-center my-auto">
                  {/* Central Branded Medallion with interactive hover pulse */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#FF5533] to-[#FF3E6C] flex items-center justify-center shadow-xl shadow-[#FF5533]/30 border-4 border-white cursor-pointer group"
                  >
                    
                    {/* Retro Sunburst in background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <RetroStar8 className="w-20 h-20 opacity-25 text-white animate-spin-slow" />
                    </div>

                    {/* Bold Studio Mark */}
                    <div className="relative text-center text-white">
                      <span className="font-display font-black text-4xl sm:text-5xl tracking-tighter leading-none block group-hover:scale-110 transition-transform">
                        C
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest block font-bold text-white/90 -mt-1">
                        HUB
                      </span>
                    </div>

                    {/* Floating corner micro-badges with counter animation */}
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white text-[#FF5533] flex items-center justify-center shadow-md border border-[#F0E2D8]"
                    >
                      <Video className="w-3.5 h-3.5" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [3, -3, 3] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                      className="absolute -bottom-1 -left-1 w-7 h-7 rounded-full bg-white text-[#FF3E6C] flex items-center justify-center shadow-md border border-[#F0E2D8]"
                    >
                      <Palette className="w-3.5 h-3.5" />
                    </motion.div>
                  </motion.div>

                  {/* Creative Tags */}
                  <div className="mt-4 text-center">
                    <p className="font-display font-black text-sm text-[#1C1618] uppercase tracking-wide">
                      VISUAL CREATIVE SUITE
                    </p>
                    <p className="text-[11px] font-mono text-[#7D6E6F] mt-0.5">
                      4K Video • Retouching • Branding
                    </p>
                  </div>

                  {/* Animated Audio/Video Waveform bar */}
                  <div className="mt-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 border border-[#E8D8CC] shadow-2xs">
                    <span className="w-1.5 bg-[#FF5533] rounded-full animate-wave-1" />
                    <span className="w-1.5 bg-[#FF3E6C] rounded-full animate-wave-2" />
                    <span className="w-1.5 bg-[#F5BE6B] rounded-full animate-wave-3" />
                    <span className="w-1.5 bg-[#FF5533] rounded-full animate-wave-4" />
                    <span className="w-1.5 bg-[#FF3E6C] rounded-full animate-wave-5" />
                    <span className="text-[10px] font-mono font-bold text-[#1C1618] ml-1.5">
                      NOW BOOKING
                    </span>
                  </div>
                </div>

                {/* Bottom label inside arch */}
                <div className="relative z-10 pb-2 text-center w-full">
                  <span className="inline-block w-full py-1.5 rounded-full bg-white/95 backdrop-blur-md font-display font-black text-xs uppercase tracking-wider text-[#1C1618] shadow-sm border border-[#F0E2D8]">
                    CAVORA HUB • GRAPHICS
                  </span>
                </div>

              </div>

            </motion.div>

            {/* Floating Circular Badge: "CREATIVE WITH PURPOSE ♥" with continuous rotation and hover magnification */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              whileHover={{ scale: 1.12 }}
              className="absolute -bottom-4 -left-4 sm:left-4 z-20 cursor-pointer"
            >
              <CreativePurposeBadge size={120} />
            </motion.div>

            {/* Floating Top Right Sparkle with organic float */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 right-6 z-20"
            >
              <RetroStar8 className="w-10 h-10 sm:w-12 sm:h-12" color="#FF5571" />
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
