import React from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider, RoyalMandapIllustration, JainSymbol } from './OrnamentalSVGs';
import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { triggerPetalShower } from './PetalShower';

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
        {/* Soft Golden Ambient Glow */}
        <div className="absolute -inset-3 bg-gradient-to-b from-gold-antique/25 via-gold-champagne/30 to-gold-antique/25 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

        {/* Grand Palace Arch Inscription Box */}
        <div className="relative border-2 border-gold-antique bg-gradient-to-b from-maroon-deep/95 via-maroon-burgundy to-maroon-darkest rounded-t-[80px] md:rounded-t-[120px] rounded-b-3xl p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-md text-center overflow-hidden">
          
          {/* Subtle Rotating Mandala Watermark in Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-antique animate-spin" style={{ animationDuration: '80s' }}>
              <circle cx="50" cy="50" r="45" stroke="#C6A15B" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M 50 5 C 60 25 75 40 95 50 C 75 60 60 75 50 95 C 40 75 25 60 5 50 C 25 40 40 25 50 5 Z" />
            </svg>
          </div>

          {/* Inner Golden Borders */}
          <div className="absolute inset-2 md:inset-3 border border-gold-champagne/40 rounded-t-[72px] md:rounded-t-[110px] rounded-b-2xl pointer-events-none" />
          <div className="absolute inset-4 md:inset-5 border border-gold-antique/15 rounded-t-[64px] md:rounded-t-[100px] rounded-b-xl pointer-events-none" />

          {/* Corner Ornaments */}
          <CornerOrnament position="bottom-left" className="absolute bottom-3 left-3 opacity-80" size={32} />
          <CornerOrnament position="bottom-right" className="absolute bottom-3 right-3 opacity-80" size={32} />

          {/* ─── CONTENT (z-10) ─── */}
          <div className="relative z-10">
            {/* Top Auspicious Jain Symbol with Glowing Halo */}
            <div className="flex flex-col items-center justify-center mb-3">
              <div className="relative p-3 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 shadow-gold-sm">
                <JainSymbol size={56} className="filter drop-shadow-[0_0_12px_rgba(198,161,91,0.6)]" />
              </div>
              <span className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/80 mt-2 block leading-normal py-0.5">
                {t.grandClosingLabel}
              </span>
            </div>

            {/* Grand Royal Mandap Illustration */}
            <div className="my-3 max-w-sm mx-auto">
              <RoyalMandapIllustration className="w-full h-auto filter drop-shadow-md" />
            </div>

            {/* Closing Heartfelt Message */}
            <div className="my-6 max-w-2xl mx-auto px-5 py-6 rounded-2xl bg-maroon-darkest/80 border border-gold-antique/35 shadow-inner">
              <p className="font-devanagari text-lg sm:text-2xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] leading-[1.8] sm:leading-[2] md:leading-[2.2] font-bold py-2 px-1 inline-block w-full">
                {t.closingInvite}
              </p>
              <p className="font-cormorant text-xs sm:text-sm text-gold-champagne/80 italic mt-2">
                {t.withBlessings}
              </p>
            </div>

            <GoldDivider className="max-w-xs mx-auto my-4" />

            {/* Final Text: सादर आमंत्रित | अक्षय ❤️ विभूति */}
            <div className="my-6">
              <span className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-gold-champagne font-bold block mb-2 leading-normal py-0.5">
                {t.rsvpLabel}
              </span>

              {/* Royal Couple Monogram Medallion */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique drop-shadow-md inline-block py-2 leading-normal">
                  {t.groomName}
                </span>
                <motion.div
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  onClick={triggerPetalShower}
                  title="पुष्प वर्षा करें (Click for Petal Shower)"
                  className="p-2.5 rounded-full bg-gradient-to-br from-maroon-deep to-maroon-darkest border-2 border-gold-antique shadow-gold-md cursor-pointer hover:scale-110 transition-transform"
                >
                  <Heart className="w-6 h-6 text-gold-champagne fill-gold-antique" />
                </motion.div>
                <span className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-antique via-gold-champagne to-gold-pale drop-shadow-md inline-block py-2 leading-normal">
                  {t.brideName}
                </span>
              </div>

              <p className="font-cormorant text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-champagne/80 font-bold mt-1">
                Akshay &amp; Vibhuti
              </p>
            </div>

            {/* Interactive Grand Finale Pushpa Varsha Button */}
            <div className="flex justify-center my-6">
              <button
                onClick={triggerPetalShower}
                type="button"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-devanagari text-sm sm:text-base font-bold text-maroon-darkest shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 leading-normal"
                style={{
                  background: 'linear-gradient(135deg, #FFF9EA 0%, #E6D3A3 30%, #C6A15B 70%, #9E7B35 100%)',
                  border: '2px solid #FFF8E7',
                  boxShadow: '0 0 25px rgba(230,211,163,0.5)',
                }}
              >
                <Sparkles className="w-5 h-5 text-maroon-darkest group-hover:rotate-45 transition-transform" />
                <span className="py-0.5">🌸 नवदंपति को मंगल आशीर्वाद दें (Shower Blessings) 🌸</span>
                <Sparkles className="w-5 h-5 text-maroon-darkest group-hover:-rotate-45 transition-transform" />
              </button>
            </div>

            {/* Sacred Jain Mangal Paath Inscription */}
            <div className="mt-8 pt-4 border-t border-gold-antique/20 flex flex-wrap items-center justify-center gap-4 text-xs font-devanagari text-gold-champagne/80 leading-normal">
              <span>॥ शांतिः शांतिः शांतिः ॥</span>
              <span className="text-gold-antique font-serif">卐</span>
              <span>॥ चत्तारि मंगलं • अरिहंता मंगलं • सिद्धा मंगलं ॥</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
