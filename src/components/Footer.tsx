import React, { useState } from 'react';
import {
  ArrowUp,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Sparkles,
  Heart,
  Check,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { CavoraLogo } from './CavoraLogo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#060608] border-t border-white/10 text-zinc-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <CavoraLogo variant="full" size="md" showTagline={true} />
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              “{siteConfig.brand.tagline}”
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-6">
              {siteConfig.brand.location}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-purple-600 hover:text-white border border-white/10 flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Cavora Hub Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-red-600 hover:text-white border border-white/10 flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Cavora Hub YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-blue-600 hover:text-white border border-white/10 flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Cavora Hub LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-emerald-600 hover:text-white border border-white/10 flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Cavora Hub WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Video Editing (YouTube & Reels)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Image Editing & Color Grading
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Graphic Design & Thumbnails
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Social Media Content Engine
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Monthly Creative Retainers
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Stay Inspired */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Stay Inspired
            </h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Get monthly breakdowns of viral video editing techniques and creative case studies.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Join Creative Brief</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {siteConfig.brand.foundedYear}–2026 {siteConfig.brand.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400">
              Built for Creators & Visionary Brands
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
