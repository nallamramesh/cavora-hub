import React from 'react';
import { Check, Sparkles, ArrowRight, Info } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface PricingProps {
  onSelectPlan: (planName: string, targetBudget: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative bg-[#FFF7F0] border-y border-[#F0E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear Investment</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1C1618] uppercase tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed">
            Choose a focused package or request a custom proposal tailored to your team's creative roadmap.
          </p>
        </div>

        {/* 3 Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricing.map((plan) => (
            <div
              key={plan.id}
              id={`pricing-card-${plan.id}`}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                plan.popular
                  ? 'bg-white border-2 border-[#FF5533] shadow-2xl shadow-[#FF5533]/15 lg:-translate-y-2'
                  : 'bg-white border border-[#F0E2D8] hover:border-[#FF5533]/40 shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-[#FF5571] text-white text-xs font-display font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-display font-black text-xl text-[#1C1618] uppercase tracking-wide mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#5E5253] min-h-[32px]">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-[#F0E2D8]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-4xl sm:text-5xl text-[#1C1618] tracking-tight">
                      {plan.currencySymbol ? `${plan.currencySymbol}${plan.price}` : plan.price}
                    </span>
                    <span className="text-xs text-[#7D6E6F] font-mono">
                      {plan.period}
                    </span>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#FAF2EA] text-[11px] font-mono text-[#5E5253] border border-[#E8D8CC]">
                    Budget Tier: {plan.targetBudget}
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-display font-extrabold text-[#1C1618] uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A3E3D]">
                      <div className="w-4 h-4 rounded-full bg-[#FFEAE8] text-[#FF5533] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name, plan.price)}
                  className={`w-full py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                    plan.popular
                      ? 'bg-[#FF5533] hover:bg-[#E64424] text-white shadow-md shadow-[#FF5533]/25'
                      : 'bg-[#FAF2EA] hover:bg-[#F2E4D8] border border-[#E8D8CC] text-[#1C1618] hover:border-[#FF5533]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise / Custom Consultation Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#7D6E6F]">
            Need high-volume monthly video retainers, dedicated editing pods, or custom SLAs?{' '}
            <a href="#contact" className="font-bold text-[#FF5533] underline hover:text-[#E64424]">
              Talk to our studio producers directly.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
