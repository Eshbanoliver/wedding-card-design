import React from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider, RoyalMandapIllustration, JainSymbol } from './OrnamentalSVGs';
import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const GrandClosing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="closing" className="relative py-14 md:py-28 px-4 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative"
      >
        {/* Outer Glow */}
        <div className="absolute -inset-3 bg-gradient-to-b from-gold-antique/15 via-gold-champagne/20 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />

        {/* Grand Palace Arch Inscription Box */}
        <div className="relative border-2 border-gold-antique bg-gradient-to-b from-maroon-deep/95 via-maroon-burgundy to-maroon-darkest rounded-t-[80px] md:rounded-t-[120px] rounded-b-3xl p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-md text-center overflow-hidden">
          
          {/* Inner Golden Border */}
          <div className="absolute inset-2 md:inset-3 border border-gold-champagne/40 rounded-t-[72px] md:rounded-t-[110px] rounded-b-2xl pointer-events-none" />
          <div className="absolute inset-4 md:inset-5 border border-gold-antique/15 rounded-t-[64px] md:rounded-t-[100px] rounded-b-xl pointer-events-none" />

          {/* Corner Ornaments */}
          <CornerOrnament position="bottom-left" className="absolute bottom-3 left-3 opacity-80" size={32} />
          <CornerOrnament position="bottom-right" className="absolute bottom-3 right-3 opacity-80" size={32} />

          {/* Top Auspicious Jain Symbol */}
          <div className="flex justify-center mb-2">
            <JainSymbol size={64} className="filter drop-shadow-[0_0_10px_rgba(198,161,91,0.5)]" />
          </div>

          <div className="my-2">
            <span className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/80 block leading-normal py-0.5">
              {t.grandClosingLabel}
            </span>
          </div>

          {/* Grand Royal Mandap Illustration */}
          <div className="my-4 max-w-sm mx-auto">
            <RoyalMandapIllustration className="w-full h-auto filter drop-shadow-md" />
          </div>

          {/* Closing Heartfelt Message */}
          <div className="my-6 max-w-2xl mx-auto px-4 py-6 rounded-2xl bg-maroon-darkest/70 border border-gold-antique/30 overflow-visible">
            <p className="font-devanagari text-lg sm:text-2xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] leading-[1.8] sm:leading-[2] md:leading-[2.2] font-bold py-2 px-1 inline-block w-full">
              {t.closingInvite}
            </p>
            <p className="font-cormorant text-xs sm:text-sm text-gold-champagne/70 italic mt-2">
              {t.withBlessings}
            </p>
          </div>

          <GoldDivider className="max-w-xs mx-auto my-4" />

          {/* Final Text: सादर आमंत्रित | अक्षय ❤️ विभूति */}
          <div className="my-6">
            <span className="font-devanagari text-sm uppercase tracking-widest text-gold-champagne font-semibold block mb-2 leading-normal py-0.5">
              {t.rsvpLabel}
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique drop-shadow-md inline-block py-2 leading-normal">
                {t.groomName}
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="p-2 rounded-full bg-maroon-darkest border border-gold-antique/50 shadow-gold-sm"
              >
                <Heart className="w-5 h-5 text-gold-champagne fill-gold-antique" />
              </motion.div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-antique via-gold-champagne to-gold-pale drop-shadow-md inline-block py-2 leading-normal">
                {t.brideName}
              </span>
            </div>

            <p className="font-cormorant text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-champagne/80 font-semibold mt-1">
              Akshay &amp; Vibhuti
            </p>
          </div>

          {/* Golden Ornamental Flourish */}
          <div className="mt-8 flex items-center justify-center gap-3 text-gold-antique">
            <Sparkles className="w-4 h-4 text-gold-champagne" />
            <span className="font-devanagari text-xs tracking-widest text-gold-champagne leading-normal py-0.5">
              ॐ शांतिः शांतिः शांतिः
            </span>
            <Sparkles className="w-4 h-4 text-gold-champagne" />
          </div>

        </div>
      </motion.div>
    </section>
  );
};
