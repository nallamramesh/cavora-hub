import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { SlidersHorizontal, Sparkles, Check, MoveHorizontal } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const BeforeAfter: React.FC = () => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePreset = siteConfig.beforeAfterPresets[selectedPresetIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-16 sm:py-24 relative bg-[#FFF7F0] border-y border-[#F0E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Retouching Lab</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1C1618] tracking-tight uppercase mb-4">
            See The Difference
          </h2>
          <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed">
            Drag the slider to inspect before and after transformations across color grading, skin retouching, and commercial enhancement.
          </p>

          {/* Preset Selector Tabs with Motion */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {siteConfig.beforeAfterPresets.map((preset, idx) => (
              <motion.button
                key={preset.id}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedPresetIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-colors duration-200 flex items-center gap-2 cursor-pointer ${
                  selectedPresetIndex === idx
                    ? 'bg-[#FF5533] text-white shadow-md shadow-[#FF5533]/30'
                    : 'bg-white text-[#5E5253] hover:text-[#1C1618] hover:bg-[#FAF2EA] border border-[#E8D8CC]'
                }`}
              >
                <span>{preset.title}</span>
                {selectedPresetIndex === idx && <Check className="w-3.5 h-3.5" />}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl p-3 sm:p-4 bg-white border border-[#F0E2D8] shadow-xl">
            {/* The Before/After Split Viewer */}
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={(e) => {
                if (e.touches.length > 0) handleMove(e.touches[0].clientX);
              }}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize bg-[#1C1618]"
            >
              {/* After Image (Full Background) */}
              <img
                src={activePreset.afterImage}
                alt={`${activePreset.title} - After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activePreset.beforeImage}
                  alt={`${activePreset.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none filter contrast-90 brightness-95"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-xs font-display font-bold tracking-wider text-white border border-white/20 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
                  BEFORE: {activePreset.beforeLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-3 py-1.5 rounded-full bg-[#FF5571] text-xs font-display font-bold tracking-wider text-white flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  AFTER: {activePreset.afterLabel}
                </span>
              </div>

              {/* Draggable Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white z-30 pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Circular Knob with dynamic ping & micro-pulse */}
                <div className="relative">
                  <span className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#FF5533]/40 animate-ping pointer-events-none" />
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF5533] text-white flex items-center justify-center shadow-xl border-2 border-white ring-4 ring-[#FF5533]/40"
                  >
                    <MoveHorizontal className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom Instructions Helper */}
              <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-white border border-white/10 flex items-center gap-1.5">
                  <MoveHorizontal className="w-3 h-3 text-[#FF5533]" />
                  Drag handle horizontally to compare
                </span>
              </div>
            </div>

            {/* Bottom Technique & Metric Metadata */}
            <div className="p-4 sm:p-6 bg-[#FAF2EA] rounded-2xl border border-[#F0E2D8] mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-display font-extrabold text-[#FF5533] uppercase tracking-wider block mb-1">
                  {activePreset.category} • {activePreset.stats}
                </span>
                <p className="text-sm text-[#5E5253] leading-relaxed max-w-2xl">
                  {activePreset.description}
                </p>
              </div>

              {/* Interactive Range Slider */}
              <div className="flex items-center gap-3 shrink-0 sm:border-l sm:border-[#E8D8CC] sm:pl-6">
                <span className="text-xs font-mono font-bold text-[#1C1618]">{Math.round(sliderPosition)}%</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-24 sm:w-32 accent-[#FF5533] cursor-pointer"
                  aria-label="Before/After split percentage"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
