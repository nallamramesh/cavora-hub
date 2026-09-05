import React from 'react';

// Radiating Sun Logo Glyph (Solar Pop Studio)
export const SolarSunLogo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="18" fill="#FF5533" />
    {/* Radiating rays */}
    <g stroke="#FF5533" strokeWidth="4" strokeLinecap="round">
      <line x1="50" y1="10" x2="50" y2="24" />
      <line x1="50" y1="76" x2="50" y2="90" />
      <line x1="10" y1="50" x2="24" y2="50" />
      <line x1="76" y1="50" x2="90" y2="50" />
      
      <line x1="22" y1="22" x2="32" y2="32" />
      <line x1="68" y1="68" x2="78" y2="78" />
      <line x1="22" y1="78" x2="32" y2="68" />
      <line x1="68" y1="32" x2="78" y2="22" />

      {/* Intermediary small rays */}
      <line x1="50" y1="4" x2="50" y2="6" strokeWidth="3" />
      <line x1="50" y1="94" x2="50" y2="96" strokeWidth="3" />
      <line x1="4" y1="50" x2="6" y2="50" strokeWidth="3" />
      <line x1="94" y1="50" x2="96" y2="50" strokeWidth="3" />
    </g>
  </svg>
);

// Retro 8-Point Starburst (in pink or coral)
export const RetroStar8: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#FF5571',
}) => (
  <svg viewBox="0 0 100 100" fill={color} xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
    <path
      d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"
      transform="rotate(45 50 50)"
      opacity="0.85"
    />
  </svg>
);

// Retro 4-Point Starburst (thin diamond sparkle)
export const RetroStar4: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#FF5571',
}) => (
  <svg viewBox="0 0 100 100" fill={color} xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 0 C50 38 62 50 100 50 C62 50 50 62 50 100 C50 62 38 50 0 50 C38 50 50 38 50 0 Z" />
  </svg>
);

// Retro 6-Petal Flower Daisy (for footer corners)
export const RetroFlower: React.FC<{ className?: string; color?: string; centerColor?: string }> = ({
  className = 'w-16 h-16',
  color = '#F5BE6B',
  centerColor = '#FFFFFF',
}) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill={color}>
      {/* 6 Elliptical Petals */}
      <path d="M60 10 C68 10 74 35 68 50 C64 54 56 54 52 50 C46 35 52 10 60 10 Z" />
      <path d="M60 110 C68 110 74 85 68 70 C64 66 56 66 52 70 C46 85 52 110 60 110 Z" />
      <path d="M10 60 C10 52 35 46 50 52 C54 56 54 64 50 68 C35 74 10 68 10 60 Z" />
      <path d="M110 60 C110 52 85 46 70 52 C66 56 66 64 70 68 C85 74 110 68 110 60 Z" />
      <path d="M25 25 C31 19 54 36 56 50 C54 55 47 57 43 53 C30 42 19 31 25 25 Z" />
      <path d="M95 95 C89 101 66 84 64 70 C66 65 73 63 77 67 C90 78 101 89 95 95 Z" />
      <path d="M25 95 C19 89 36 66 50 64 C55 66 57 73 53 77 C42 90 31 101 25 95 Z" />
      <path d="M95 25 C101 31 84 54 70 56 C65 54 63 47 67 43 C78 30 89 19 95 25 Z" />
    </g>
    <circle cx="60" cy="60" r="14" fill={centerColor} />
  </svg>
);

// Vintage Sun Face Stamp (footer)
export const SunFaceEmblem: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer circle */}
    <circle cx="70" cy="70" r="64" stroke="#FF5533" strokeWidth="2.5" strokeDasharray="3 3" />
    <circle cx="70" cy="70" r="54" stroke="#FF5533" strokeWidth="1.5" />
    
    {/* Sun face center */}
    <circle cx="70" cy="70" r="30" fill="#FFEAD9" stroke="#FF5533" strokeWidth="2" />
    
    {/* Cute smiling eyes and mouth */}
    <path d="M60 65 Q65 61 70 65" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M70 65 Q75 61 80 65" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M64 74 Q70 80 76 74" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" fill="none" />
    
    {/* Radiating triangle teeth / rays */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <line
          key={i}
          x1="70"
          y1="34"
          x2="70"
          y2="20"
          stroke="#FF5533"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 70 70)`}
        />
      );
    })}
  </svg>
);

// Creative With Purpose Circular Badge
export const CreativePurposeBadge: React.FC<{ className?: string }> = ({
  className = 'w-28 h-28',
}) => (
  <div
    className={`relative rounded-full bg-white border border-[#FF5533]/30 shadow-md flex flex-col items-center justify-center p-3 text-center ${className}`}
  >
    <div className="text-[#FF5533] text-lg mb-0.5">♥</div>
    <div className="font-display font-extrabold text-[10px] leading-tight text-[#1C1618] uppercase tracking-wider">
      CREATIVE
      <br />
      WITH
      <br />
      PURPOSE
    </div>
  </div>
);
