import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Video,
  Palette,
  Camera,
  Smartphone,
  MapPin,
} from 'lucide-react';

export const SolarAboutCard: React.FC = () => {
  const capabilities = [
    { label: 'Cinematic Video Editing', icon: Video },
    { label: 'High-End Retouching', icon: Camera },
    { label: 'Brand & Graphic Design', icon: Palette },
    { label: 'Reels & Viral Content', icon: Smartphone },
    { label: 'Color Grading & Audio', icon: Sparkles },
  ];

  return (
    <section id="about" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large White Rounded Container with Viewport Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="retro-card p-6 sm:p-8 lg:p-10 transition-all hover:shadow-xl border border-[#F0E2D8]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Creative Studio Workspace Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-4"
            >
              <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-[#FDF0E7] border border-[#F3E3D5] group shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
                  alt="Cavora Hub Studio Creative Workspace"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5533]/20 to-transparent pointer-events-none" />
                
                {/* Floating Location Badge */}
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/20 shadow-md"
                >
                  <MapPin className="w-3 h-3 text-[#FF5533]" />
                  <span>Remote Worldwide Studio</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Middle Column: Bio & Signature */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 flex flex-col justify-center"
            >
              <span className="font-display font-extrabold text-sm sm:text-base text-[#FF5533] uppercase tracking-wider mb-2">
                ABOUT CAVORA HUB
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1618] uppercase tracking-tight leading-tight mb-3">
                CREATIVE POST-PRODUCTION & DESIGN STUDIO
              </h2>
              <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed mb-4">
                We combine editorial precision, Hollywood-grade color science, and bold graphic design to turn raw footage and brand ideas into irresistible visual assets.
              </p>
              
              {/* Handwritten Signature with interactive micro-spring */}
              <div className="mt-1">
                <motion.span
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                  className="font-script text-4xl sm:text-5xl text-[#1C1618] font-bold inline-block -rotate-3 cursor-pointer select-none"
                >
                  Cavora Studio <span className="text-[#FF3E6C] inline-block animate-pulse">♡</span>
                </motion.span>
              </div>
            </motion.div>

            {/* Right Column: Capabilities List with Hover Staggers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-3 flex flex-col gap-2.5"
            >
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#7D6E6F] mb-1">
                Core Capabilities
              </span>
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF2EA] border border-[#F0E2D8] hover:border-[#FF5533] hover:shadow-xs transition-colors group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white text-[#FF5533] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#FF5533] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-display font-bold text-[#1C1618] leading-tight group-hover:text-[#FF5533] transition-colors">
                      {cap.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

