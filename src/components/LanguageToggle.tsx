import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// ─────────────────────────────────────────────────────────────────────────────
// LANGUAGE TOGGLE – Fixed left-side, vertically centered, royal gold & maroon
// Pill-shaped button with हिंदी / ENG options. Compact on mobile.
// ─────────────────────────────────────────────────────────────────────────────

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const isHindi = language === 'hi';

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
      className="fixed left-2 sm:left-3 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1"
      style={{ willChange: 'transform' }}
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-gold-antique/20 blur-lg pointer-events-none" />

      {/* Toggle Container – pill shape */}
      <div
        className="relative flex flex-col rounded-full border-2 border-gold-antique/80 overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(180deg, #380710 0%, #570D19 50%, #380710 100%)',
        }}
      >
        {/* हिंदी Button */}
        <button
          onClick={() => !isHindi && toggleLanguage()}
          aria-label="Switch to Hindi"
          title="हिंदी में देखें"
          className={`relative flex flex-col items-center justify-center px-2 sm:px-3 py-2 sm:py-3 transition-all duration-300 min-w-[36px] sm:min-w-[44px] ${
            isHindi
              ? 'bg-gradient-to-b from-gold-antique to-gold-champagne text-maroon-darkest'
              : 'bg-transparent text-gold-champagne/80 hover:text-gold-champagne hover:bg-maroon-deep/60'
          }`}
        >
          <span
            className="text-[9px] sm:text-[11px] font-bold leading-tight tracking-wide"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            हिं
          </span>
          <span className="hidden sm:block text-[8px] font-serif uppercase tracking-wider leading-none mt-0.5">
            दी
          </span>
          {/* Active indicator dot */}
          {isHindi && (
            <motion.span
              layoutId="langDot"
              className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1 h-4 rounded-full bg-maroon-deep"
            />
          )}
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gold-antique/50" />

        {/* ENG Button */}
        <button
          onClick={() => isHindi && toggleLanguage()}
          aria-label="Switch to English"
          title="View in English"
          className={`relative flex flex-col items-center justify-center px-2 sm:px-3 py-2 sm:py-3 transition-all duration-300 min-w-[36px] sm:min-w-[44px] ${
            !isHindi
              ? 'bg-gradient-to-b from-gold-antique to-gold-champagne text-maroon-darkest'
              : 'bg-transparent text-gold-champagne/80 hover:text-gold-champagne hover:bg-maroon-deep/60'
          }`}
        >
          <span className="text-[9px] sm:text-[11px] font-bold font-serif uppercase tracking-wider leading-tight">
            EN
          </span>
          <span className="hidden sm:block text-[8px] font-serif uppercase tracking-wider leading-none mt-0.5">
            G
          </span>
          {/* Active indicator dot */}
          {!isHindi && (
            <motion.span
              layoutId="langDot"
              className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1 h-4 rounded-full bg-maroon-deep"
            />
          )}
        </button>
      </div>

      {/* Tooltip label – desktop only */}
      <AnimatePresence>
        <motion.span
          key={language}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="hidden sm:block text-[9px] font-serif uppercase tracking-widest text-gold-champagne/60 mt-1 whitespace-nowrap"
        >
          {t.langLabel}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
};

