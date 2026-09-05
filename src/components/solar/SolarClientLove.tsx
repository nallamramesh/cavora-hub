import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Clock, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface GuaranteeItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
}

const GUARANTEES: GuaranteeItem[] = [
  {
    id: '1',
    badge: 'EXCLUSIVE FOCUS',
    title: '100% Undivided Creative Attention',
    description:
      'As our priority client, your project will not be juggled among dozens of backlogs. You receive our direct, senior-level craft and meticulous attention to detail from concept to master export.',
    highlight: 'Priority Studio Queue',
  },
  {
    id: '2',
    badge: 'PERFECTION GUARANTEE',
    title: 'Unlimited Revisions Until Thrilled',
    description:
      'We refine pacing, typography, sound design, color grading, and skin retouching until every single frame matches your exact aesthetic vision. No arbitrary iteration limits.',
    highlight: '100% Satisfaction Guarantee',
  },
  {
    id: '3',
    badge: 'DIRECT CONTACT',
    title: `Direct WhatsApp Chat (${siteConfig.contact.phoneDisplay})`,
    description:
      'Skip frustrating support tickets and email delays. Collaborate in real time with our creative lead on WhatsApp for rapid feedback, video review cuts, and instant turnaround.',
    highlight: 'Instant Studio Communication',
  },
];

export const SolarClientLove: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="promise" className="py-14 sm:py-20 relative bg-[#FAF2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Work With Us</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1C1618] uppercase tracking-tight flex items-center justify-center gap-3">
            <span>OUR CLIENT PROMISE</span>
            <span className="text-[#FF3E6C]">♥</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E5253] leading-relaxed">
            We are building our reputation on every single deliverable. Here is our unwavering commitment to our founding clients.
          </p>
        </div>

        {/* 3 Guarantee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUARANTEES.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                activeIndex === idx
                  ? 'border-[#FFCCD3] shadow-xl shadow-[#FF5533]/10 -translate-y-1'
                  : 'border-[#F0E2D8] hover:border-[#FFCCD3]'
              }`}
            >
              <div>
                {/* Badge Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0E6] text-[10px] font-display font-black tracking-widest text-[#FF5533] uppercase mb-4">
                  {item.badge}
                </span>
                
                {/* Card Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-[#1C1618] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-[#5E5253] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#F0E2D8] text-xs font-display font-bold text-[#1C1618]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
