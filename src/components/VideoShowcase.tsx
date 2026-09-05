import React, { useState } from 'react';
import { Play, Sparkles, Eye, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { VideoProject } from '../types';
import { VideoModal } from './VideoModal';

interface VideoShowcaseProps {
  onRequestQuote: (projectName: string) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onRequestQuote }) => {
  const [activeVideoModal, setActiveVideoModal] = useState<VideoProject | null>(null);

  const featured = siteConfig.featuredVideo;
  const projectList = siteConfig.videoProjects;

  return (
    <section id="showcase" className="py-16 sm:py-24 relative bg-[#FAF2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Video Editing Formats</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1C1618] uppercase tracking-tight mb-4">
            Cinematic Styles We Produce
          </h2>
          <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed">
            From high-converting YouTube masterworks to cinematic reels and commercials, preview the cutting rhythm, color grading, and motion design we bring to your raw footage.
          </p>
        </div>

        {/* Large Featured Video Card */}
        <div className="mb-10">
          <div
            id="featured-video-card"
            className="group relative rounded-3xl overflow-hidden bg-white border border-[#F0E2D8] shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Featured Video Thumbnail with Play Button */}
              <div
                className="lg:col-span-7 relative aspect-video cursor-pointer overflow-hidden"
                onClick={() => setActiveVideoModal(featured)}
              >
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Big Center Play Button in Coral */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF5533] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#E64424] transition-all duration-300 border-2 border-white">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Top badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-display font-bold text-white border border-white/20">
                    Featured Masterwork
                  </span>
                </div>

                {/* Bottom stats inside thumbnail */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1.5 font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Eye className="w-3.5 h-3.5 text-[#FF5533]" />
                    {featured.views}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-[#FF5533]" />
                    {featured.duration}
                  </span>
                </div>
              </div>

              {/* Featured Project Details */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-[#FF5533]">
                      {featured.category}
                    </span>
                    <span className="text-xs text-[#7D6E6F] font-mono">
                      Client: {featured.client}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#1C1618] uppercase tracking-tight mb-3 group-hover:text-[#FF5533] transition-colors">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-[#5E5253] leading-relaxed mb-6">
                    {featured.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#FAF2EA] border border-[#E8D8CC] text-xs font-mono text-[#5E5253]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#F0E2D8]">
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(featured)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#FF5533]/25 transition-all"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Full Showcase</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onRequestQuote(featured.title)}
                    className="p-3 rounded-full bg-[#FAF2EA] hover:bg-[#F2E4D8] border border-[#E8D8CC] text-[#1C1618] transition-colors"
                    title="Request similar project"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Smaller Video Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              id={`video-card-${project.id}`}
              className="group rounded-2xl bg-white border border-[#F0E2D8] hover:border-[#FF5533]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Thumbnail with overlay */}
              <div
                className="relative aspect-video cursor-pointer overflow-hidden"
                onClick={() => setActiveVideoModal(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF5533] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E64424] transition-transform">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-white border border-white/20">
                  {project.category}
                </span>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-mono">
                  <span>{project.views}</span>
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Text info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-display text-base font-black text-[#1C1618] uppercase tracking-wide mb-1.5 group-hover:text-[#FF5533] transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#5E5253] leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0E2D8] flex items-center justify-between">
                  <span className="text-[11px] text-[#7D6E6F] font-mono">
                    {project.client}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(project)}
                    className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider hover:text-[#E64424] transition-colors"
                  >
                    <span>Preview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Triggered on Click */}
      <VideoModal
        project={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};
