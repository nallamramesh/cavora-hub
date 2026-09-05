import React from 'react';
import { X, Play, Volume2, ShieldCheck, Sparkles } from 'lucide-react';
import { VideoProject } from '../types';

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
  onRequestQuote: (projectName: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white border border-[#F0E2D8] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#FAF2EA] border-b border-[#F0E2D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold uppercase tracking-wider text-[#FF5533]">
              {project.category}
            </span>
            <span className="text-xs text-[#7D6E6F] font-mono hidden sm:inline">
              Client: {project.client}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#F2E4D8] text-[#1C1618] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video w-full bg-[#1C1618] flex items-center justify-center overflow-hidden">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              poster={project.thumbnail}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF5533] text-white flex items-center justify-center mb-3 shadow-xl">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
                <p className="text-white text-sm font-display font-bold uppercase tracking-wider">
                  Showcase Stream Simulator Active
                </p>
                <p className="text-white/80 text-xs mt-1 max-w-sm">
                  Full 4K Master deliverables are rendered and transferred directly to clients via Frame.io / Google Drive.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Info and CTA */}
        <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-y-auto">
          <div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#1C1618] uppercase tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5253] max-w-xl leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full bg-[#FAF2EA] border border-[#E8D8CC] text-[11px] font-mono text-[#5E5253]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(project.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF5533]/25 transition-all"
            >
              Order Similar Edit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#FAF2EA] hover:bg-[#F2E4D8] border border-[#E8D8CC] text-xs font-display font-bold uppercase text-[#1C1618] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
