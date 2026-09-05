import React from 'react';
import { X, Sparkles, CheckCircle2, Wrench, BarChart2, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onRequestSimilar: (service: string, projectName: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onRequestSimilar,
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#F0E2D8] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-[#FAF2EA] border-b border-[#F0E2D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold uppercase tracking-wider text-[#FF5533]">
              {item.category}
            </span>
            <span className="text-xs text-[#7D6E6F] font-mono hidden sm:inline">
              Case Study
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#F2E4D8] text-[#1C1618] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main High-Res Preview Image */}
          <div className="relative rounded-2xl overflow-hidden border border-[#F0E2D8] aspect-video sm:aspect-[16/9] bg-[#FAF2EA]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-white">
              {item.client}
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1C1618] uppercase tracking-tight mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Impact Metrics */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#FFF4ED] border border-[#FCD8C2] grid grid-cols-2 sm:grid-cols-3 gap-3">
              {item.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs text-[#7D6E6F] font-mono uppercase">{m.label}</span>
                  <span className="font-display font-black text-lg sm:text-xl text-[#FF5533]">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Deliverables / Scope */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#1C1618] mb-3">
              Deliverables & Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.servicesUsed.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#4A3E3D]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5533] shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Software Tools Used */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#1C1618] mb-2.5">
              Tools & Software
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-[#FAF2EA] border border-[#E8D8CC] text-xs font-mono text-[#5E5253]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 sm:p-6 bg-[#FAF2EA] border-t border-[#F0E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7D6E6F]">
            Want an outcome like this for your brand?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestSimilar(item.category, item.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF5533]/25 transition-all"
            >
              <span>Request Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F2E4D8] border border-[#E8D8CC] text-xs font-display font-bold uppercase text-[#1C1618] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
