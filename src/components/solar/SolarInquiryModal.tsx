import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { RetroStar4 } from './RetroIcons';
import { CavoraLogo } from '../CavoraLogo';

interface SolarInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const SolarInquiryModal: React.FC<SolarInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService || 'Brand Identity');
  const [budget, setBudget] = useState('$3,000 – $5,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  const services = [
    'Brand Identity',
    'Web Design',
    'UI/UX Design',
    'Packaging Design',
    'Social Media Design',
    'Creative Direction',
  ];

  const budgets = [
    '< $2,000',
    '$2,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000+',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E2D8] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7D6E6F] hover:text-[#1C1618] hover:bg-[#FAF2EA] transition-colors"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-[#FF5533] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl text-[#1C1618] uppercase tracking-wide mb-2">
              Message Received!
            </h3>
            <p className="text-sm text-[#5E5253] max-w-sm mx-auto leading-relaxed">
              Thanks for reaching out to Solar Pop Studio. We'll review your project details and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <CavoraLogo variant="horizontal" size="sm" theme="light" showTagline={false} />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEAE8] border border-[#FFCCD3]">
                <RetroStar4 className="w-3.5 h-3.5 text-[#FF5571]" color="#FF5571" />
                <span className="font-display font-bold text-[10px] uppercase tracking-wider text-[#FF5533]">
                  Start A Project
                </span>
              </div>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1618] uppercase tracking-tight mb-2">
              Let's Create Together
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5253] mb-6">
              Tell us about your brand vision, goals, and timeline.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-display font-bold text-xs text-[#1C1618] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF2EA] border border-[#E8D8CC] text-sm text-[#1C1618] placeholder-[#9C8C8D] focus:outline-none focus:border-[#FF5533]"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold text-xs text-[#1C1618] uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@brand.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF2EA] border border-[#E8D8CC] text-sm text-[#1C1618] placeholder-[#9C8C8D] focus:outline-none focus:border-[#FF5533]"
                  />
                </div>
              </div>

              {/* Company / Brand */}
              <div>
                <label className="block font-display font-bold text-xs text-[#1C1618] uppercase mb-1">
                  Brand or Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Sundaze Organics"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF2EA] border border-[#E8D8CC] text-sm text-[#1C1618] placeholder-[#9C8C8D] focus:outline-none focus:border-[#FF5533]"
                />
              </div>

              {/* Service Pills */}
              <div>
                <label className="block font-display font-bold text-xs text-[#1C1618] uppercase mb-2">
                  What Service Do You Need?
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`px-3 py-1.5 rounded-full text-xs font-display font-bold transition-all ${
                        selectedService === srv
                          ? 'bg-[#FF5533] text-white shadow-xs'
                          : 'bg-[#FAF2EA] border border-[#E8D8CC] text-[#4A3E3D] hover:border-[#FF5533]'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block font-display font-bold text-xs text-[#1C1618] uppercase mb-2">
                  Estimated Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`py-2 px-2 text-center rounded-xl text-xs font-display font-bold transition-all ${
                        budget === b
                          ? 'bg-[#FFEAE8] border-2 border-[#FF5533] text-[#FF5533]'
                          : 'bg-[#FAF2EA] border border-[#E8D8CC] text-[#5E5253] hover:border-[#FFCCD3]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-display font-bold text-xs text-[#1C1618] uppercase mb-1">
                  Project Vision & Scope
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a few lines about your objectives, timeline, or links..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF2EA] border border-[#E8D8CC] text-sm text-[#1C1618] placeholder-[#9C8C8D] focus:outline-none focus:border-[#FF5533] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-sm uppercase tracking-wider shadow-md shadow-[#FF5533]/25 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <span>SEND PROJECT INQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
