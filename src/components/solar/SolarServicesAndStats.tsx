import React from 'react';
import { motion } from 'motion/react';
import {
  Video,
  Camera,
  Palette,
  Smartphone,
  Sparkles,
  Clapperboard,
} from 'lucide-react';
import { RetroStar8 } from './RetroIcons';

export const SolarServicesAndStats: React.FC = () => {
  const services = [
    {
      title: 'Video Editing & Cutting',
      desc: 'Pacing, sound design, hooks & cinematic flow',
      icon: Video,
    },
    {
      title: 'Photo Retouching & Grading',
      desc: 'Skin smoothing, commercial cleanup & color mastery',
      icon: Camera,
    },
    {
      title: 'Brand Identity & Design',
      desc: 'Logos, vector typography & strategic brand kits',
      icon: Palette,
    },
    {
      title: 'Social Media & Reels',
      desc: 'Vertical 9:16 short-form edits engineered for retention',
      icon: Smartphone,
    },
    {
      title: 'Motion Graphics & VFX',
      desc: 'Animated titles, 3D kinetic typography & transitions',
      icon: Sparkles,
    },
    {
      title: 'Commercial Direction',
      desc: 'Ad creative strategy, color grading & master delivery',
      icon: Clapperboard,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: BRAND SERVICES (6 ITEMS) */}
          <motion.div
            initial={{ opacity: 0, x: -25, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1618] uppercase tracking-tight mb-8">
              OUR CREATIVE SERVICES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((srv, index) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={srv.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-start gap-3.5 group p-2.5 rounded-2xl hover:bg-white/70 transition-colors cursor-default"
                  >
                    {/* Pink/Coral Icon Circle */}
                    <div className="w-10 h-10 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] flex items-center justify-center text-[#FF5533] shrink-0 group-hover:bg-[#FF5533] group-hover:text-white transition-colors mt-0.5 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-display font-black text-sm text-[#1C1618] uppercase tracking-wide leading-snug group-hover:text-[#FF5533] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-[#7D6E6F] font-medium leading-relaxed mt-0.5">
                        {srv.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: OUR STUDIO STANDARDS (BENTO STATS) */}
          <motion.div
            id="experience"
            initial={{ opacity: 0, x: 25, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            
            {/* Header */}
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#FF3E6C] uppercase tracking-tight mb-8">
              OUR STUDIO COMMITMENT
            </h2>

            {/* Bento Grid: 2x2 */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 relative">
              
              {/* Stat 1: Open for Bookings (Soft Peach) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-6 sm:p-7 bg-[#FDF1E8] border border-[#F6DECE] flex flex-col justify-center transition-shadow hover:shadow-md cursor-default"
              >
                <span className="font-display font-black text-3xl sm:text-4xl text-[#25D366] tracking-tight flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping" />
                  OPEN
                </span>
                <span className="font-display font-extrabold text-[11px] sm:text-xs text-[#7D6E6F] uppercase tracking-wider mt-2">
                  NOW ACCEPTING
                  <br />
                  NEW PROJECTS
                </span>
              </motion.div>

              {/* Stat 2: 100% Dedicated Attention (Vivid Hot Pink/Coral) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-6 sm:p-7 bg-[#FF5571] text-white flex flex-col justify-center shadow-md shadow-[#FF5571]/20 hover:shadow-xl cursor-default"
              >
                <span className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white">
                  100%
                </span>
                <span className="font-display font-extrabold text-[11px] sm:text-xs text-white/90 uppercase tracking-wider mt-2">
                  DEDICATED 1-ON-1
                  <br />
                  CREATIVE ATTENTION
                </span>
              </motion.div>

              {/* Stat 3: 24–48h Rapid Turnaround (Soft Cream/Warm Peach) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.36 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-6 sm:p-7 bg-[#FDF4EB] border border-[#F6DECE] flex flex-col justify-center transition-shadow hover:shadow-md cursor-default"
              >
                <span className="font-display font-black text-3xl sm:text-4xl text-[#FF5533] tracking-tight">
                  24–48h
                </span>
                <span className="font-display font-extrabold text-[11px] sm:text-xs text-[#7D6E6F] uppercase tracking-wider mt-2">
                  RAPID DELIVERY
                  <br />
                  TURNAROUND
                </span>
              </motion.div>

              {/* Stat 4: 4 Core Disciplines (Warm Golden Amber) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.44 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-6 sm:p-7 bg-[#F5BE6B] flex flex-col justify-center transition-shadow hover:shadow-md cursor-default"
              >
                <span className="font-display font-black text-4xl sm:text-5xl text-[#1C1618] tracking-tight">
                  4
                </span>
                <span className="font-display font-extrabold text-[11px] sm:text-xs text-[#1C1618]/85 uppercase tracking-wider mt-2">
                  CREATIVE
                  <br />
                  DISCIPLINES
                </span>
              </motion.div>

              {/* Floating Decorative 8-Point Starburst with gentle pulse & float */}
              <motion.div
                animate={{ y: [-4, 4, -4], rotate: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 pointer-events-none hidden sm:block"
              >
                <RetroStar8 className="w-10 h-10 sm:w-12 sm:h-12" color="#FF5571" />
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
