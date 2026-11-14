import React from 'react';
import { motion } from 'framer-motion';
import { JainKalash, CornerOrnament, GoldDivider } from './OrnamentalSVGs';
import { useLanguage } from '../context/LanguageContext';

export const Mangalacharan: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="mangalacharan" className="relative py-12 md:py-20 px-4 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="relative"
      >
        {/* Ornate Inscription Card */}
        <div className="relative border-2 border-gold-antique/70 bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/95 rounded-2xl p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-sm text-center">
          
          {/* Inner Double Golden Borders */}
          <div className="absolute inset-2 border border-gold-champagne/40 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 border border-gold-antique/20 rounded-lg pointer-events-none" />

          {/* Corner Filigrees */}
          <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={32} />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={32} />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={32} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={32} />

          {/* Auspicious Kalash with Mango Leaves & Coconut */}
          <div className="flex justify-center mb-3">
            <div className="relative">
              <JainKalash size={74} className="filter drop-shadow-[0_0_15px_rgba(198,161,91,0.4)]" />
            </div>
          </div>

          {/* Section Sub-heading */}
          <div className="mb-4 flex flex-col items-center justify-center text-center">
            <span className="text-xs uppercase tracking-[0.25em] font-serif text-gold-champagne/80 block mb-2 text-center">
              {t.sacredInscription}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique block leading-normal py-1.5 text-center">
              {t.mangalacharanTitle}
            </h2>
          </div>

          <GoldDivider className="my-4 max-w-md mx-auto" />

          {/* Sacred Mangalacharan Shloka */}
          <div className="my-6 px-3 sm:px-6 py-6 rounded-xl bg-maroon-darkest/60 border border-gold-antique/30 shadow-inner overflow-visible">
            <div className="font-devanagari text-lg sm:text-2xl md:text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] drop-shadow-sm leading-[2] sm:leading-[2.2] md:leading-[2.4] py-2 px-1">
              <span className="inline-block py-1">{t.mangalacharan1}</span>
              <br />
              <span className="inline-block py-1">{t.mangalacharan2}</span>
            </div>
          </div>

          {/* English Meaning of the Sacred Shloka for Universal Appreciation */}
          <p className="font-cormorant italic text-xs sm:text-sm text-gold-champagne/80 max-w-xl mx-auto mb-4">
            {t.mangalacharanMeaning}
          </p>

          <GoldDivider className="my-4 max-w-xs mx-auto" />

          {/* Bottom Auspicious Blessing Mark */}
          <div className="mt-6 flex justify-center items-center gap-3 text-gold-antique text-sm">
            <span>卐</span>
            <span className="font-devanagari text-xs tracking-widest text-gold-champagne leading-normal py-0.5">
              {t.jainValues}
            </span>
            <span>卐</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
