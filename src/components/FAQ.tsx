import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([siteConfig.faqs[0].id]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative bg-[#FAF2EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1C1618] uppercase tracking-tight mb-4">
            Everything You Need To Know
          </h2>
          <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed">
            Got questions about files, revisions, turnarounds, or pricing? Find clear answers below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#FF5533] shadow-md shadow-[#FF5533]/10'
                    : 'bg-white/80 hover:bg-white border-[#F0E2D8] hover:border-[#FF5533]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-black text-[#1C1618] uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#FF5533] text-white rotate-180'
                        : 'bg-[#FAF2EA] text-[#5E5253]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5E5253] leading-relaxed border-t border-[#F0E2D8]/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
