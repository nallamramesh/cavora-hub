import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  Sliders,
  Layers,
  ChevronDown,
  Volume2,
  Maximize2,
  Video,
  Smartphone,
  Palette,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(48.6);
  const [scrubberPosition, setScrubberPosition] = useState(48);

  // Auto advance timeline when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.2;
        return next > 90 ? 12 : next;
      });
      setScrubberPosition((prev) => {
        const next = prev + 0.3;
        return next > 95 ? 15 : next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTimecode = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    const frames = Math.floor((secs % 1) * 24);
    return `00:${mins.toString().padStart(2, '0')}:${remainingSecs
      .toString()
      .padStart(2, '0')}:${frames.toString().padStart(2, '0')}`;
  };

  const getTrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-4 h-4 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-pink-400" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Background Glows & Studio Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[550px] bg-gradient-to-tr from-purple-700/20 via-indigo-600/15 to-pink-600/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/2 -right-48 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-48 w-[400px] h-[400px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Hero Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-purple-300 mb-6 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span>Creative Post-Production & Digital Studio</span>
            <span className="text-white/30">•</span>
            <span className="text-zinc-400">Accepting Q2 Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
            We Turn Your Ideas Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Visual Stories.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10">
            {siteConfig.brand.subTagline}
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-start-project-btn"
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-purple-400/30"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-view-work-btn"
              onClick={onViewWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-zinc-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-200"
            >
              <span>View Our Work</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                50+ Projects
              </span>
            </button>
          </div>

          {/* Trust Indicators Pill Bar */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-400">
            <span className="text-zinc-500 font-medium uppercase tracking-wider text-[11px]">
              Specialized In:
            </span>
            {siteConfig.trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]"
              >
                {getTrustIcon(badge.icon)}
                <span className="text-zinc-300 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Visual Composition: Video Editing Timeline & Studio Deck */}
        <div className="relative max-w-5xl mx-auto mt-4">
          {/* Outer Frame with Studio Glow */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-xl">
            {/* Studio Workspace Header Bar */}
            <div className="bg-[#121217] rounded-xl sm:rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="px-4 py-3 bg-[#0a0a0d] border-b border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  <span className="ml-3 font-mono text-[11px] text-zinc-300 font-semibold tracking-wider">
                    PIXORA_STUDIO_SUITE_v4.2 // TIMELINE_4K
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 text-[11px]">
                    REC 709 • 3840×2160 • 60 FPS
                  </span>
                  <span className="font-mono text-zinc-300 bg-zinc-800/60 px-2 py-0.5 rounded">
                    {formatTimecode(currentTime)}
                  </span>
                </div>
              </div>

              {/* Composition Main Grid: Video Player + Waveform & Inspector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Viewport / Screen */}
                <div className="lg:col-span-8 relative aspect-video bg-black overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
                    alt="Cavora Hub Video Timeline Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />

                  {/* Grading Overlay Mock Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-zinc-200 font-mono">LUT: Film_TealOrange_Master.cube</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-purple-900/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-purple-200 border border-purple-500/30">
                    4K PRORES 422 HQ
                  </div>

                  {/* Center Playback Overlay Toggle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-600/90 hover:bg-purple-600 text-white flex items-center justify-center shadow-2xl shadow-purple-600/60 hover:scale-110 active:scale-95 transition-all border border-purple-400/40"
                      aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-white" />
                      ) : (
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Playhead Bottom Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-purple-400 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <Volume2 className="w-4 h-4 text-zinc-400" />
                      <span className="font-mono text-[11px] text-zinc-300">
                        {Math.floor(currentTime)}s / 90s
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-[11px] font-mono">EXPORT: READY</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Right Inspector & Node Panel */}
                <div className="lg:col-span-4 bg-[#0e0e12] p-4 sm:p-5 border-t lg:border-t-0 lg:border-l border-white/[0.08] flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
                      <span className="font-semibold text-zinc-200 flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-purple-400" />
                        Color & Audio FX Stack
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-mono">
                        Active Nodes: 7
                      </span>
                    </div>

                    <div className="space-y-2.5 font-mono text-[11px]">
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-300">Node 01: Exposure & Curve</span>
                        <span className="text-purple-400 font-semibold">+0.4 EV</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-300">Node 02: Skin Tone Isolate</span>
                        <span className="text-pink-400 font-semibold">Protected</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-300">Node 03: Filmic Halation & Glow</span>
                        <span className="text-amber-400 font-semibold">18% Soft</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-300">Node 04: Dynamic Bass Compress</span>
                        <span className="text-cyan-400 font-semibold">-14 LUFS</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between text-zinc-400 text-[11px] mb-1.5">
                      <span>Export Render Status</span>
                      <span className="text-emerald-400 font-semibold">Master Quality</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-300"
                        style={{ width: `${scrubberPosition}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-Track Interactive Editing Timeline */}
              <div className="p-3 sm:p-4 bg-[#0a0a0d] border-t border-white/[0.08]">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span className="font-semibold text-zinc-300">MULTI-LAYER TIMELINE</span>
                  </div>
                  <span className="font-mono text-zinc-500 hidden sm:inline">
                    DRAG OR CLICK TO SCRUB • 24 FPS
                  </span>
                </div>

                {/* Timeline Tracks */}
                <div
                  className="relative space-y-1.5 pt-2 pb-1 select-none cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percent = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                    setScrubberPosition(percent);
                    setCurrentTime((percent / 100) * 90);
                  }}
                >
                  {/* Scrubber Playhead Line */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-red-500 z-20 pointer-events-none transition-all duration-75 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    style={{ left: `${scrubberPosition}%` }}
                  >
                    <div className="w-2.5 h-2.5 bg-red-500 rotate-45 -translate-x-[4px] -top-1 absolute" />
                  </div>

                  {/* Video Track V2 */}
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="w-8 text-zinc-500 font-mono">V2</span>
                    <div className="flex-1 h-5 bg-zinc-900/90 rounded border border-white/[0.06] relative overflow-hidden flex items-center">
                      <div className="absolute left-[15%] w-[45%] h-full bg-purple-600/40 border-x border-purple-500/50 rounded flex items-center px-2 text-purple-200">
                        <span className="truncate">Motion Titles & Kinetic SFX</span>
                      </div>
                      <div className="absolute left-[65%] w-[25%] h-full bg-pink-600/40 border-x border-pink-500/50 rounded flex items-center px-2 text-pink-200">
                        <span className="truncate">3D Brand Logo Reveal</span>
                      </div>
                    </div>
                  </div>

                  {/* Video Track V1 (Main Footage) */}
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="w-8 text-zinc-500 font-mono">V1</span>
                    <div className="flex-1 h-6 bg-zinc-900/90 rounded border border-white/[0.06] relative overflow-hidden flex items-center">
                      <div className="absolute left-0 w-[35%] h-full bg-indigo-600/50 border-r border-indigo-400/50 rounded-l flex items-center px-2 text-indigo-100 font-mono">
                        <span>A-Roll_Interview_4K.mov</span>
                      </div>
                      <div className="absolute left-[35%] w-[40%] h-full bg-blue-600/50 border-r border-blue-400/50 flex items-center px-2 text-blue-100 font-mono">
                        <span>B-Roll_DroneCinematic.mov</span>
                      </div>
                      <div className="absolute left-[75%] w-[25%] h-full bg-violet-600/50 rounded-r flex items-center px-2 text-violet-100 font-mono">
                        <span>Product_MacroClose.mov</span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Track A1 (Music + Waveforms) */}
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="w-8 text-zinc-500 font-mono">A1</span>
                    <div className="flex-1 h-5 bg-zinc-900/90 rounded border border-white/[0.06] relative overflow-hidden flex items-center px-2">
                      <div className="w-full h-full flex items-center gap-[3px] opacity-70">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-emerald-400/70 rounded-full"
                            style={{
                              height: `${Math.max(20, Math.sin(i * 0.4) * 80 + 10)}%`,
                            }}
                          />
                        ))}
                      </div>
                      <span className="absolute left-3 text-[9px] font-mono text-emerald-300 bg-black/60 px-1 rounded">
                        Soundtrack_Cyberpunk_Master.wav (-14 LUFS)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quick Feature Chips */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-[#141419] border border-white/10 rounded-2xl px-4 py-2.5 shadow-2xl items-center gap-3 backdrop-blur-xl">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">4K 60FPS Delivery</p>
                <p className="text-[10px] text-zinc-400">Color Graded in ACES</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-5 -right-4 bg-[#141419] border border-white/10 rounded-2xl px-4 py-2.5 shadow-2xl items-center gap-3 backdrop-blur-xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">24-48h Rapid Turnaround</p>
                <p className="text-[10px] text-zinc-400">Ready for All Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <div className="mt-12 text-center flex flex-col items-center justify-center">
        <a
          href="#services"
          className="inline-flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors group focus:outline-none"
          aria-label="Scroll to services"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase">
            Scroll To Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1 group-hover:border-purple-400 transition-colors">
            <span className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
