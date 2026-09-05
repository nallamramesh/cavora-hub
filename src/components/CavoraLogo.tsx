import React, { useId } from 'react';

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
  const uniqueId = useId().replace(/:/g, '');
  const isLight = theme === 'light';

  // Pixel sizing mapping for the emblem
  const emblemSizeMap = {
    sm: 38,
    md: 48,
    lg: 72,
    xl: 96,
  };

  const emblemPx = emblemSizeMap[size];

  // Colors based on theme
  const primaryBlack = isLight ? '#14151B' : '#FFFFFF';
  const subtitleColor = isLight ? '#14151B' : '#F4F4F5';
  const designColor = isLight ? '#14151B' : '#E4E4E7';

  // The precise vector emblem matching the official Cavora Hub logo
  const Emblem = (
    <div
      className="relative flex-shrink-0 transition-transform duration-200"
      style={{ width: emblemPx, height: emblemPx }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Vertical gradient on the right pillar of H (Magenta -> Orange -> Amber) */}
          <linearGradient id={`hRightPillarGrad_${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9006C" />
            <stop offset="45%" stopColor="#FF3B00" />
            <stop offset="100%" stopColor="#FFA000" />
          </linearGradient>

          {/* Sweeping multi-color paint swoosh (Purple -> Pink -> Orange -> Amber -> Cyan) */}
          <linearGradient id={`swooshSweepGrad_${uniqueId}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="20%" stopColor="#7C3AED" />
            <stop offset="40%" stopColor="#E11D48" />
            <stop offset="65%" stopColor="#EA580C" />
            <stop offset="85%" stopColor="#F59E0B" />
            <stop offset="95%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* Outer Crescent 'C' (Tapering horn at top right, curving around left to bottom) */}
        <path
          d="M 59 25.5 
             C 46 22, 28 29, 21 44 
             C 14 57, 19 72, 31 81 
             C 37 85, 43 86.5, 49 86.5 
             C 43.5 82, 36.5 79.5, 30.5 72.5 
             C 24 64.5, 23 52.5, 28 42.5 
             C 32.5 32.5, 44 25, 59 25.5 Z"
          fill={primaryBlack}
        />

        {/* Inner 'H' Monogram Left Pillar (Sharp angled top cut) */}
        <path
          d="M 37.5 35 
             L 44.5 31 
             L 44.5 67 
             L 37.5 70 Z"
          fill={primaryBlack}
        />

        {/* Inner 'H' Monogram Crossbar */}
        <path
          d="M 44.5 48 
             L 57 48 
             L 57 54.5 
             L 44.5 54.5 Z"
          fill={primaryBlack}
        />

        {/* Inner 'H' Monogram Right Pillar (Vibrant Gradient Magenta -> Orange -> Amber) */}
        <path
          d="M 57 31 
             L 64 31 
             L 64 61.5 
             L 57 61.5 Z"
          fill={`url(#hRightPillarGrad_${uniqueId})`}
        />

        {/* Dynamic Sweeping Multi-Color Paint Swoosh */}
        <path
          d="M 38 74 
             C 45 83, 56 86, 67 82 
             C 75 77, 81 67, 82 54 
             C 82.5 48, 80 43, 78 45 
             C 77 47, 75 51, 74 55 
             C 71 65, 63 71, 53 72.5 
             C 46 73.5, 41 72, 38 74 Z"
          fill={`url(#swooshSweepGrad_${uniqueId})`}
        />

        {/* Feathered Brush Flare Strands at Tip */}
        <path
          d="M 76 44 
             C 78 42, 81 44, 80 48 
             C 78 52, 74 58, 69 64 
             C 72 60, 75 54, 76 44 Z"
          fill={`url(#swooshSweepGrad_${uniqueId})`}
        />
        <path
          d="M 72 49 
             C 74 47, 77 49, 76 53 
             C 74 57, 71 61, 67 66 
             C 69 62, 71 56, 72 49 Z"
          fill={`url(#swooshSweepGrad_${uniqueId})`}
        />

        {/* Paint Splatter Droplets (Magenta, Orange, Cyan) */}
        <circle cx="81.5" cy="43" r="2" fill="#E11D48" />
        <circle cx="83.5" cy="48" r="1.5" fill="#F97316" />
        <circle cx="79" cy="51.5" r="1.2" fill="#06B6D4" />
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
      sub: 'text-[9px] tracking-[0.25em]',
      tagline: 'text-[9px]',
      lineW: 'w-4 sm:w-6',
    },
    md: {
      brand: 'text-xl sm:text-2xl',
      hub: 'text-xl sm:text-2xl',
      sub: 'text-[11px] tracking-[0.3em]',
      tagline: 'text-[10px]',
      lineW: 'w-6 sm:w-8',
    },
    lg: {
      brand: 'text-3xl sm:text-4xl',
      hub: 'text-3xl sm:text-4xl',
      sub: 'text-xs sm:text-sm tracking-[0.35em]',
      tagline: 'text-xs',
      lineW: 'w-8 sm:w-12',
    },
    xl: {
      brand: 'text-4xl sm:text-5xl',
      hub: 'text-4xl sm:text-5xl',
      sub: 'text-sm sm:text-base tracking-[0.38em]',
      tagline: 'text-sm',
      lineW: 'w-10 sm:w-16',
    },
  };

  const fonts = fontSizes[size];

  // STACKED VARIANT: Exact 1:1 match to the user's uploaded image!
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        {/* Top Centered Emblem */}
        <div className="mb-2">{Emblem}</div>

        {/* Brand Name: Cavora Hub */}
        <div className="flex items-baseline justify-center gap-1.5 leading-none">
          <span className={`font-display font-black tracking-tight ${fonts.brand}`} style={{ color: primaryBlack }}>
            Cavora
          </span>
          <span className={`font-display font-black flex items-center ${fonts.hub}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#E11D48]">
              H
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E11D48] via-[#EA580C] to-[#F97316]">
              u
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] via-[#0284C7] to-[#06B6D4]">
              b
            </span>
          </span>
        </div>

        {/* Divider: — G R A P H I C S — */}
        <div className="flex items-center justify-center gap-2 mt-2 w-full">
          <span className={`h-[1.5px] ${fonts.lineW} bg-gradient-to-r from-[#E11D48] to-[#F97316] rounded-full flex-shrink-0`} />
          <span className={`font-sans font-extrabold uppercase ${fonts.sub}`} style={{ color: subtitleColor }}>
            GRAPHICS
          </span>
          <span className={`h-[1.5px] ${fonts.lineW} bg-gradient-to-r from-[#06B6D4] to-[#2563EB] rounded-full flex-shrink-0`} />
        </div>

        {/* Tagline: Design. Create. Inspire. */}
        {showTagline && (
          <div className={`mt-1.5 flex items-center justify-center gap-1 font-sans font-bold ${fonts.tagline}`}>
            <span style={{ color: designColor }}>Design.</span>
            <span className="text-[#FF4500]">Create.</span>
            <span className="text-[#0284C7]">Inspire.</span>
          </div>
        )}
      </div>
    );
  }

  // HORIZONTAL / FULL VARIANT: Emblem on left, typography on right
  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {Emblem}

      <div className="flex flex-col items-start leading-none">
        {/* Brand Name: Cavora Hub */}
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-display font-black tracking-tight ${fonts.brand}`} style={{ color: primaryBlack }}>
            Cavora
          </span>
          <span className={`font-display font-black flex items-center ${fonts.hub}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#E11D48]">
              H
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E11D48] via-[#EA580C] to-[#F97316]">
              u
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] via-[#0284C7] to-[#06B6D4]">
              b
            </span>
          </span>
        </div>

        {/* Divider: — G R A P H I C S — */}
        <div className="flex items-center gap-1.5 mt-1.5 w-full justify-between">
          <span className={`h-[1.5px] ${fonts.lineW} bg-gradient-to-r from-[#E11D48] to-[#F97316] rounded-full flex-shrink-0`} />
          <span className={`font-sans font-extrabold uppercase ${fonts.sub}`} style={{ color: subtitleColor }}>
            GRAPHICS
          </span>
          <span className={`h-[1.5px] ${fonts.lineW} bg-gradient-to-r from-[#06B6D4] to-[#2563EB] rounded-full flex-shrink-0`} />
        </div>

        {/* Tagline: Design. Create. Inspire. */}
        {showTagline && (variant === 'full') && (
          <div className={`mt-1 flex items-center gap-1 font-sans font-bold ${fonts.tagline}`}>
            <span style={{ color: designColor }}>Design.</span>
            <span className="text-[#FF4500]">Create.</span>
            <span className="text-[#0284C7]">Inspire.</span>
          </div>
        )}
      </div>
    </div>
  );
};
