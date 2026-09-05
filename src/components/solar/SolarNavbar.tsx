import React, { useState } from 'react';
import { ArrowRight, Menu, X, MessageCircle } from 'lucide-react';
import { CavoraLogo } from '../CavoraLogo';
import { siteConfig } from '../../data/siteConfig';

interface SolarNavbarProps {
  onOpenCreate: () => void;
}

export const SolarNavbar: React.FC<SolarNavbarProps> = ({ onOpenCreate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'BEFORE & AFTER', href: '#before-after' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'PROCESS', href: '#process' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'OUR PROMISE', href: '#promise' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF2EA]/95 backdrop-blur-md border-b border-[#F0E2D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('#home');
          }}
          className="flex items-center group focus:outline-none transition-transform hover:scale-[1.02]"
        >
          <CavoraLogo
            variant="horizontal"
            size="sm"
            theme="light"
            showTagline={false}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className="px-3 py-1.5 rounded-full text-xs font-display font-bold tracking-wider text-[#4A3E3D] hover:text-[#FF5533] hover:bg-[#F4E6DC] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & WhatsApp */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              siteConfig.contact.whatsappDefaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#E8F8EE] text-[#25D366] hover:bg-[#D6F3DF] transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenCreate}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <span>LET'S CREATE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenCreate}
            className="px-3 py-1.5 rounded-full bg-[#FF5533] text-white font-display font-bold text-[11px] uppercase tracking-wider"
          >
            Inquire
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#E8D8CC] text-[#1C1618] hover:bg-[#FAF2EA] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF2EA] border-b border-[#F0E2D8] px-4 pt-3 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className="block px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-[#1C1618] hover:bg-white hover:text-[#FF5533] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#F0E2D8] flex gap-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCreate();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#FF5533] text-white font-display font-bold text-xs uppercase tracking-wider"
            >
              <span>LET'S CREATE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
