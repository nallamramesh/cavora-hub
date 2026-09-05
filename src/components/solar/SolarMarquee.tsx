import React from 'react';
import { RetroStar8, RetroStar4 } from './RetroIcons';

const MARQUEE_ITEMS = [
  'CINEMATIC VIDEO EDITING',
  '4K COLOR GRADING',
  'HIGH-END RETOUCHING',
  'VIRAL REELS & SHORTS',
  'BRAND IDENTITY SUITES',
  '24–48H RAPID TURNAROUND',
  'CAVORA HUB GRAPHICS',
  'DIRECT WHATSAPP COLLABORATION',
  'AUDIO & SOUND DESIGN',
  'COMMERCIAL POST-PRODUCTION',
];

export const SolarMarquee: React.FC = () => {
  return (
    <div className="relative py-3 sm:py-4 bg-[#FF5533] text-white overflow-hidden select-none border-y border-[#E04422] shadow-inner">
      {/* Moving tape */}
      <div className="animate-marquee flex items-center">
        {/* Render twice for seamless continuous loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 whitespace-nowrap">
            <span className="font-display font-black text-xs sm:text-sm tracking-widest uppercase">
              {item}
            </span>
            {idx % 2 === 0 ? (
              <RetroStar8 className="w-4 h-4 text-[#F5BE6B] shrink-0 animate-spin-slow" />
            ) : (
              <RetroStar4 className="w-3.5 h-3.5 text-white/80 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
