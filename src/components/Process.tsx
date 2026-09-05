import React, { useState } from 'react';
import { Sparkles, MessageSquare, UploadCloud, Wand2, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // 0-indexed, default at 'We Create'

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#FF5533]" />;
      case 1:
        return <UploadCloud className="w-5 h-5 text-[#FF3E6C]" />;
      case 2:
        return <Wand2 className="w-5 h-5 text-[#FF5533]" />;
      case 3:
        return <RefreshCw className="w-5 h-5 text-[#F5BE6B]" />;
      case 4:
        return <Send className="w-5 h-5 text-[#FF5533]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#FF5533]" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 relative bg-[#FAF2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Workflow</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1C1618] uppercase tracking-tight mb-4">
            From Raw Ideas To Polished Reality
          </h2>
          <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed">
            Our streamlined 5-step creative pipeline ensures rapid delivery, clear checkpoints, and broadcast-ready deliverables.
          </p>
        </div>

        {/* Process Timeline - Interactive Cards */}
        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF5533]/20 via-[#FF5533]/50 to-[#FF5533]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {siteConfig.processSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-[#FF5533] shadow-xl shadow-[#FF5533]/15 -translate-y-2'
                      : 'bg-white/80 hover:bg-white border-[#F0E2D8] hover:border-[#FF5533]/40'
                  }`}
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-display font-black text-2xl tracking-tight ${
                          isSelected ? 'text-[#FF5533]' : 'text-[#7D6E6F]'
                        }`}
                      >
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] flex items-center justify-center">
                        {getStepIcon(idx)}
                      </div>
                    </div>

                    <h3 className="font-display font-black text-base sm:text-lg text-[#1C1618] uppercase tracking-wide mb-2 group-hover:text-[#FF5533] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#5E5253] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable info */}
                  <div className="pt-3 border-t border-[#F0E2D8] flex items-center gap-1.5 text-[11px] font-mono text-[#FF5533]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-bold">{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-[#FFF6EE] border border-[#F4DFD2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF5533] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
              {siteConfig.processSteps[activeStep].number}
            </div>
            <div>
              <h4 className="font-display font-black text-sm uppercase text-[#1C1618]">
                Currently Focusing: {siteConfig.processSteps[activeStep].title}
              </h4>
              <p className="text-xs text-[#5E5253]">
                {siteConfig.processSteps[activeStep].description}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF5533]/25 transition-all"
          >
            Start At Step 1
          </a>
        </div>

      </div>
    </section>
  );
};
