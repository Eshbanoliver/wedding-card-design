import React from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider, SacredDiya } from './OrnamentalSVGs';
import { Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { triggerPetalShower } from './PetalShower';

export const FamilyWelcome: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="family" className="relative py-12 md:py-24 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-14 flex flex-col items-center justify-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 block mb-2 text-center">
          {t.withWarmestRegards}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique block leading-normal py-1.5 text-center">
          {t.sadarSwagat}
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium text-center">
          {t.familyTagline}
        </p>
        <GoldDivider className="max-w-xs mx-auto mt-4" />
      </motion.div>

      {/* Royal Welcome Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Soft Golden Ambient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-gold-antique/20 via-gold-champagne/30 to-gold-antique/20 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

        <div className="relative border-2 border-gold-antique bg-gradient-to-b from-maroon-deep/95 via-maroon-burgundy/98 to-maroon-darkest rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md text-center overflow-hidden">
          
          {/* Subtle Rotating Watermark in Background */}
          <div className="absolute -left-12 -bottom-12 w-56 h-56 opacity-[0.05] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-antique animate-spin" style={{ animationDuration: '70s' }}>
              <circle cx="50" cy="50" r="45" stroke="#C6A15B" strokeWidth="2" fill="none" strokeDasharray="6 4" />
              <path d="M 50 10 C 60 30 70 40 90 50 C 70 60 60 70 50 90 C 40 70 30 60 10 50 C 30 40 40 30 50 10 Z" />
            </svg>
          </div>

          {/* Inner Double Borders */}
          <div className="absolute inset-2 border border-gold-champagne/35 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3.5 border border-gold-antique/20 rounded-xl pointer-events-none" />

          {/* Corner Ornaments */}
          <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={30} />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={30} />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={30} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={30} />

          {/* ─── CONTENT CONTAINER (z-10) ─── */}
          <div className="relative z-10">
            {/* Top Diya and Welcome Crest */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <SacredDiya size={32} />
              <div className="px-5 py-1.5 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 shadow-gold-sm">
                <span className="font-devanagari text-xs md:text-sm font-bold tracking-widest text-gold-champagne uppercase leading-normal py-0.5">
                  {t.swagatakanshi}
                </span>
              </div>
              <SacredDiya size={32} />
            </div>

            {/* Heartfelt Invitation Note */}
            <div className="max-w-2xl mx-auto my-4 p-4 rounded-2xl bg-maroon-darkest/70 border border-gold-antique/30 shadow-inner">
              <p className="font-devanagari text-base sm:text-lg md:text-xl text-cream leading-[1.8] md:leading-[2] font-medium py-1">
                "{t.welcomeMsg}"
              </p>
            </div>

            {/* Symmetrical Heraldic Host Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto my-8">
              
              {/* Host Card 1: आस्था एवं निहाल जी */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-maroon-deep/90 to-maroon-darkest/95 border-2 border-gold-antique/60 shadow-xl text-center group hover:border-gold-champagne hover:shadow-[0_0_25px_rgba(198,161,91,0.35)] transition-all"
              >
                {/* Golden Corner Accents on Card */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold-antique/70 rounded-tl-sm" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold-antique/70 rounded-tr-sm" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold-antique/70 rounded-bl-sm" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold-antique/70 rounded-br-sm" />

                {/* Crest Medallion */}
                <div className="relative w-12 h-12 rounded-full border-2 border-gold-antique/70 bg-gradient-to-br from-maroon-deep to-maroon-darkest mx-auto flex items-center justify-center mb-3 shadow-gold-sm group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-gold-champagne group-hover:rotate-12 transition-transform" />
                  <div className="absolute -inset-1 rounded-full border border-gold-champagne/40 animate-pulse opacity-30 pointer-events-none" />
                </div>

                <span className="inline-block px-3 py-0.5 rounded-full bg-maroon-darkest/90 border border-gold-antique/40 text-[10px] sm:text-[11px] font-devanagari font-bold uppercase tracking-wider text-gold-champagne mb-2">
                  ॥ {t.snehaSwagat} ॥
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique inline-block py-1 leading-normal">
                  {t.host1Hi}
                </h3>
                <p className="font-cormorant text-xs sm:text-sm text-gold-champagne/80 font-semibold tracking-wider mt-1">
                  {t.host1En}
                </p>
              </motion.div>

              {/* Host Card 2: प्रणय एवं अनंत */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-maroon-deep/90 to-maroon-darkest/95 border-2 border-gold-antique/60 shadow-xl text-center group hover:border-gold-champagne hover:shadow-[0_0_25px_rgba(198,161,91,0.35)] transition-all"
              >
                {/* Golden Corner Accents on Card */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold-antique/70 rounded-tl-sm" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold-antique/70 rounded-tr-sm" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold-antique/70 rounded-bl-sm" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold-antique/70 rounded-br-sm" />

                {/* Crest Medallion */}
                <div className="relative w-12 h-12 rounded-full border-2 border-gold-antique/70 bg-gradient-to-br from-maroon-deep to-maroon-darkest mx-auto flex items-center justify-center mb-3 shadow-gold-sm group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-gold-champagne fill-gold-antique/60 group-hover:scale-110 transition-transform" />
                  <div className="absolute -inset-1 rounded-full border border-gold-champagne/40 animate-pulse opacity-30 pointer-events-none" />
                </div>

                <span className="inline-block px-3 py-0.5 rounded-full bg-maroon-darkest/90 border border-gold-antique/40 text-[10px] sm:text-[11px] font-devanagari font-bold uppercase tracking-wider text-gold-champagne mb-2">
                  ॥ {t.snehaSwagat} ॥
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique inline-block py-1 leading-normal">
                  {t.host2Hi}
                </h3>
                <p className="font-cormorant text-xs sm:text-sm text-gold-champagne/80 font-semibold tracking-wider mt-1">
                  {t.host2En}
                </p>
              </motion.div>

            </div>

            {/* Interactive "सादर प्रणाम एवं मंगल पुष्प वर्षा" Button */}
            <div className="flex justify-center my-4">
              <button
                onClick={triggerPetalShower}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-devanagari text-xs sm:text-sm font-bold border-2 border-gold-antique bg-gradient-to-r from-maroon-deep via-maroon-burgundy to-maroon-deep text-gold-champagne shadow-gold-sm hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 leading-normal"
              >
                <Sparkles className="w-4 h-4 text-gold-champagne" />
                <span className="py-0.5">सादर प्रणाम एवं मंगल पुष्प वर्षा (Send Warm Regards)</span>
              </button>
            </div>

            {/* Warm closing note */}
            <div className="mt-8 pt-6 border-t border-gold-antique/20 max-w-xl mx-auto">
              <p className="font-devanagari text-xs sm:text-sm text-gold-champagne/90 italic leading-relaxed py-0.5">
                {t.closingNote}
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
