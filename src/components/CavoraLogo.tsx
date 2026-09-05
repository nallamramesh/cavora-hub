import React from 'react';

interface CavoraLogoProps {
  variant?: 'full' | 'horizontal' | 'icon-only' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
  theme?: 'light' | 'dark';
}

export const CavoraLogo: React.FC<CavoraLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
  theme = 'light',
}) => {
  // Determine pixel dimensions for the icon
  const iconSizeMap = {
    sm: 36,
    md: 44,
    lg: 56,
    xl: 72,
  };

  const iconPx = iconSizeMap[size];
  const isLight = theme === 'light';

  // The custom vector SVG emblem embodying the Cavora Hub mark
  const Emblem = (
    <div
      className="relative flex-shrink-0"
      style={{ width: iconPx, height: iconPx }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_16px_rgba(236,72,153,0.3)]"
        aria-hidden="true"
      >
        <defs>
          {/* Main multi-color brush swoosh gradient */}
          <linearGradient id="cavoraSwooshGrad" x1="5" y1="85" x2="95" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="25%" stopColor="#EC4899" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="75%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          {/* Glowing filter */}
          <filter id="cavoraGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Letter gradient fills */}
          <linearGradient id="cavoraHGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          <linearGradient id="cavoraUGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          <linearGradient id="cavoraBGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Circular backplate */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill={isLight ? '#1C1618' : '#0C0C12'}
          stroke={isLight ? 'rgba(255,85,51,0.3)' : 'rgba(255,255,255,0.1)'}
          strokeWidth="1.5"
        />

        {/* Stylized Outer 'C' Crescent */}
        <path
          d="M62 20 C42 16 20 28 17 50 C14 70 30 84 50 84 C56 84 62 82 66 79"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />

        {/* Inner 'H' Monogram Left Pillar */}
        <path
          d="M36 32 L36 68"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Inner 'H' Crossbar */}
        <path
          d="M36 50 L56 50"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Inner 'H' Right Pillar upper segment */}
        <path
          d="M56 32 L56 50"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Dynamic sweeping brush stroke swooshing from the right pillar underneath */}
        <path
          d="M56 48 C56 64 54 74 68 76 C78 77 86 68 87 56 C88 44 80 34 72 31"
          stroke="url(#cavoraSwooshGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#cavoraGlow)"
        />

        {/* Under-crescent dynamic flourish accent */}
        <path
          d="M26 74 C36 82 52 83 68 78 C76 75 84 69 88 62"
          stroke="url(#cavoraSwooshGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Paint splatter droplets */}
        <circle cx="78" cy="27" r="2.8" fill="#06B6D4" />
        <circle cx="86" cy="35" r="2.2" fill="#38BDF8" />
        <circle cx="91" cy="48" r="1.8" fill="#FBBF24" />
        <circle cx="88" cy="68" r="2.2" fill="#F97316" />
        <circle cx="73" cy="85" r="2" fill="#EC4899" />
        <circle cx="34" cy="84" r="1.6" fill="#8B5CF6" />
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  // Text scaling based on size prop
  const fontSizes = {
    sm: {
      brand: 'text-base sm:text-lg',
      hub: 'text-base sm:text-lg',
      sub: 'text-[9px] tracking-[0.22em]',
      tagline: 'text-[9px]',
    },
    md: {
      brand: 'text-lg sm:text-xl',
      hub: 'text-lg sm:text-xl',
      sub: 'text-[10px] tracking-[0.28em]',
      tagline: 'text-[10px]',
    },
    lg: {
      brand: 'text-2xl sm:text-3xl',
      hub: 'text-2xl sm:text-3xl',
      sub: 'text-xs tracking-[0.32em]',
      tagline: 'text-xs',
    },
    xl: {
      brand: 'text-3xl sm:text-4xl',
      hub: 'text-3xl sm:text-4xl',
      sub: 'text-sm tracking-[0.35em]',
      tagline: 'text-sm',
    },
  };

  const fonts = fontSizes[size];

  return (
    <div
      className={`inline-flex ${
        variant === 'stacked' ? 'flex-col items-center text-center gap-2' : 'items-center gap-3'
      } select-none ${className}`}
    >
      {Emblem}

      <div className={`flex flex-col ${variant === 'stacked' ? 'items-center' : 'items-start'}`}>
        {/* Main Brand Title: CAVORA HUB */}
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-display font-extrabold tracking-wide ${isLight ? 'text-[#1C1618]' : 'text-white'} ${fonts.brand}`}>
            Cavora
          </span>
          <span className={`font-display font-extrabold flex items-center ${fonts.hub}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500">
              H
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-500">
              u
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-amber-400 to-cyan-500">
              b
            </span>
          </span>
        </div>

        {/* Subtitle: — GRAPHICS — with accent lines */}
        <div className="flex items-center gap-1.5 mt-1 w-full justify-between">
          <span className="h-[1.5px] w-3.5 sm:w-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
          <span className={`font-sans font-bold uppercase ${isLight ? 'text-[#5E5253]' : 'text-zinc-300'} ${fonts.sub}`}>
            GRAPHICS
          </span>
          <span className="h-[1.5px] w-3.5 sm:w-5 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex-shrink-0" />
        </div>

        {/* Tagline: Design. Create. Inspire. */}
        {showTagline && (variant === 'full' || variant === 'stacked') && (
          <div className="mt-1 flex items-center gap-1.5">
            <span className={`font-sans font-medium ${isLight ? 'text-[#FF5533]' : 'text-cyan-400/90'} ${fonts.tagline}`}>
              Design. Create. Inspire.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
