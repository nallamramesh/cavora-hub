import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show inviting message bubble after 2 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Animated Floating Speech Bubble Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="mb-3 max-w-[260px] p-3.5 rounded-2xl bg-white text-[#1C1618] border border-[#F0E2D8] shadow-2xl relative"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#1C1618] text-white flex items-center justify-center hover:bg-[#FF5533] transition-colors"
              aria-label="Dismiss message"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#E8F8EE] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs font-display font-extrabold text-[#1C1618] uppercase tracking-wide">
                  Direct WhatsApp Chat
                </p>
                <p className="text-[11px] text-[#5E5253] leading-snug mt-0.5">
                  Discuss your video edit, photo retouch, or design project directly with our lead creative!
                </p>
                <p className="text-[10px] font-mono text-[#25D366] font-bold mt-1">
                  ⚡ Typically replies in minutes
                </p>
              </div>
            </div>

            {/* Downward triangle pointing to button */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-[#F0E2D8]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button Container with Sonar Waves */}
      <div className="relative flex items-center justify-center">
        {/* Continuous expanding sonar ring */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <span className="absolute -inset-3 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        <motion.a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-black text-xs uppercase tracking-wider shadow-2xl shadow-[#25D366]/40 border-2 border-white/60 cursor-pointer select-none"
          aria-label={`Chat with ${siteConfig.brand.fullName} on WhatsApp`}
        >
          {/* Live Online Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>

          <div className="w-5 h-5 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          </div>

          <span className="hidden sm:inline font-bold">Chat On WhatsApp</span>
          <span className="sm:hidden font-bold">WhatsApp</span>
        </motion.a>
      </div>
    </aside>
  );
};

