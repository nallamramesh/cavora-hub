import React from 'react';
import { Mail, Instagram, Globe, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { RetroFlower, SunFaceEmblem } from './RetroIcons';
import { CavoraLogo } from '../CavoraLogo';
import { siteConfig } from '../../data/siteConfig';

interface SolarFooterCtaProps {
  onOpenContact: () => void;
}

export const SolarFooterCta: React.FC<SolarFooterCtaProps> = ({ onOpenContact }) => {
  return (
    <footer id="footer" className="relative pt-12 pb-16 sm:pb-24 overflow-hidden border-t border-[#F0E2D8]/80 bg-[#FAF2EA]">
      
      {/* Corner Decorative Flower 1 (Bottom Left: Ochre/Amber) */}
      <div className="absolute -bottom-8 -left-8 pointer-events-none opacity-90 sm:opacity-100">
        <RetroFlower className="w-28 h-28 sm:w-36 sm:h-36" color="#F5BE6B" />
      </div>

      {/* Corner Decorative Flower 2 (Bottom Right: Soft Pink) */}
      <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-90 sm:opacity-100">
        <RetroFlower className="w-28 h-28 sm:w-36 sm:h-36" color="#FF8FA3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Contact Badges */}
          <div className="lg:col-span-7">
            {/* Cavora Hub Logo Treatment */}
            <div className="mb-6">
              <CavoraLogo
                variant="full"
                size="md"
                theme="light"
                showTagline={true}
              />
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#FF5533] uppercase tracking-tight leading-[0.95]">
              LET'S BUILD
            </h2>
            <div className="mt-1 mb-8">
              <span className="font-script text-[#FF3E6C] text-5xl sm:text-7xl lg:text-8xl font-bold -rotate-3 inline-block leading-tight">
                Something Amazing!
              </span>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* WhatsApp / Phone */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F8EE] border border-[#C5ECD0] text-xs sm:text-sm font-display font-bold text-[#1B8040] hover:bg-[#D4F4DF] shadow-2xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              {/* Direct Call */}
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8D6C8] text-xs sm:text-sm font-display font-bold text-[#1C1618] hover:border-[#FF5533] hover:text-[#FF5533] shadow-2xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5533]" />
                <span>Call Studio</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8D6C8] text-xs sm:text-sm font-display font-bold text-[#1C1618] hover:border-[#FF5533] hover:text-[#FF5533] shadow-2xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5533]" />
                <span>{siteConfig.contact.email}</span>
              </a>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8D6C8] text-xs sm:text-sm font-display font-bold text-[#1C1618] shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#FF5533]" />
                <span>Open For New Commissions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sun Emblem & Pink CTA Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end gap-5 sm:gap-8 flex-wrap sm:flex-nowrap">
            
            {/* Rotating / Radiating Vintage Sun Face Stamp */}
            <div className="shrink-0 hover:scale-105 transition-transform duration-300">
              <SunFaceEmblem className="w-24 h-24 sm:w-28 sm:h-28" />
            </div>

            {/* Pink CTA Card */}
            <div className="w-full sm:w-auto rounded-3xl p-6 sm:p-7 bg-[#FF5571] text-white shadow-xl shadow-[#FF5571]/25 flex flex-col justify-between max-w-xs border border-white/20">
              <div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-white mb-1.5 leading-snug">
                  HAVE A PROJECT
                  <br />
                  IN MIND?
                </h3>
                <p className="text-xs text-white/90 leading-relaxed mb-5 font-medium">
                  We are ready to craft visuals that make your brand stand out.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenContact}
                className="group inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* Sub-footer Copyright */}
        <div className="mt-16 pt-8 border-t border-[#F0E2D8]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7D6E6F] gap-4">
          <p>© {new Date().getFullYear()} Solar Pop Studio & Cavora Hub. All rights reserved.</p>
          <div className="flex items-center gap-6 font-display font-bold uppercase tracking-wider text-[11px]">
            <a href="#privacy" className="hover:text-[#FF5533] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#FF5533] transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-[#FF5533] transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
