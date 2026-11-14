import React from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider } from './OrnamentalSVGs';
import { MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CoupleSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="couple" className="relative py-12 md:py-20 px-4 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 block mb-1">
          {t.theAuspiciousUnion}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique inline-block leading-normal py-1.5">
          {t.varEvamVadhu}
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium">
          {t.coupleTagline}
        </p>
        <GoldDivider className="max-w-xs mx-auto mt-4" />
      </motion.div>

      {/* Symmetrical Couple Cards Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-6 lg:gap-4 items-center">
        
        {/* GROOM CARD (वर) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 relative"
        >
          {/* Royal Ornamental Card Frame */}
          <div className="relative border-2 border-gold-antique/70 bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/98 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-sm text-center overflow-hidden">
            
            {/* Inner Gold Borders */}
            <div className="absolute inset-2 border border-gold-champagne/35 rounded-2xl pointer-events-none" />
            <div className="absolute inset-3 border border-gold-antique/20 rounded-xl pointer-events-none" />

            {/* Corner Ornaments */}
            <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={30} />

            {/* Top Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-gold-antique/50 bg-maroon-darkest/80 mb-4 shadow-gold-sm">
              <span className="font-devanagari text-gold-champagne text-xs md:text-sm font-bold tracking-widest leading-normal py-0.5">
                {t.varLabel}
              </span>
            </div>

            {/* Groom Name: अक्षय (Akshay) */}
            <div className="my-3 md:my-5">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] tracking-wide drop-shadow-md inline-block py-2 leading-normal">
                {t.groomName}
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-gold-champagne font-semibold tracking-wider mt-1">
                Akshay
              </p>
            </div>

            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-4" />

            {/* Parents Lineage */}
            <div className="my-4 text-cream/95">
              <span className="block font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 mb-1 leading-normal">
                {t.suputraOf}
              </span>
              <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium leading-relaxed py-0.5">
                {t.groomParentsHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 italic mt-0.5">
                {t.groomParentsEn}
              </p>
            </div>

            {/* Residence */}
            <div className="mt-5 pt-4 border-t border-gold-antique/20">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <MapPin className="w-4 h-4 text-gold-antique shrink-0" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 leading-normal">
                  {t.nivasiLabel}
                </span>
              </div>
              <p className="font-devanagari text-sm sm:text-base font-medium text-cream leading-relaxed py-0.5">
                {t.groomResidenceHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 mt-0.5">
                {t.groomResidenceEn}
              </p>
            </div>

            {/* Subtle Jain Temple Rishabhdeo Heritage note */}
            <div className="mt-4 pt-3 text-[11px] font-devanagari text-gold-champagne/70 border-t border-gold-antique/10 leading-relaxed py-0.5">
              {t.groomHeritage}
            </div>

          </div>
        </motion.div>

        {/* CENTRAL WEDDING ORNAMENT / GATHBANDHAN (Col 6) */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex flex-col items-center"
          >
            {/* Top connecting line on desktop */}
            <div className="hidden lg:block w-[1.5px] h-12 bg-gradient-to-b from-transparent via-gold-antique to-gold-champagne" />

            {/* Auspicious Medallion */}
            <div className="relative my-2 p-3 rounded-full border-2 border-gold-antique bg-gradient-to-br from-maroon-deep via-maroon-burgundy to-maroon-darkest shadow-gold-md">
              <Heart className="w-6 h-6 md:w-7 md:h-7 text-gold-champagne fill-gold-antique" />
              <div className="absolute -inset-1 rounded-full border border-gold-champagne/40 animate-ping opacity-20 pointer-events-none" />
            </div>

            <span className="font-devanagari text-[11px] font-bold text-gold-champagne tracking-widest uppercase text-center mt-1 leading-normal py-0.5">
              {t.shubhParinay}
            </span>

            {/* Bottom connecting line on desktop */}
            <div className="hidden lg:block w-[1.5px] h-12 bg-gradient-to-t from-transparent via-gold-antique to-gold-champagne" />
          </motion.div>
        </div>

        {/* BRIDE CARD (वधु) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 relative"
        >
          {/* Royal Ornamental Card Frame */}
          <div className="relative border-2 border-gold-antique/70 bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/98 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-sm text-center overflow-hidden">
            
            {/* Inner Gold Borders */}
            <div className="absolute inset-2 border border-gold-champagne/35 rounded-2xl pointer-events-none" />
            <div className="absolute inset-3 border border-gold-antique/20 rounded-xl pointer-events-none" />

            {/* Corner Ornaments */}
            <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={30} />

            {/* Top Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-gold-antique/50 bg-maroon-darkest/80 mb-4 shadow-gold-sm">
              <span className="font-devanagari text-gold-champagne text-xs md:text-sm font-bold tracking-widest leading-normal py-0.5">
                {t.vadhuLabel}
              </span>
            </div>

            {/* Bride Name: विभूति (Vibhuti) */}
            <div className="my-3 md:my-5">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] tracking-wide drop-shadow-md inline-block py-2 leading-normal">
                {t.brideName}
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-gold-champagne font-semibold tracking-wider mt-1">
                Vibhuti
              </p>
            </div>

            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-4" />

            {/* Parents Lineage */}
            <div className="my-4 text-cream/95">
              <span className="block font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 mb-1 leading-normal">
                {t.suputriOf}
              </span>
              <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium leading-relaxed py-0.5">
                {t.brideParentsHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 italic mt-0.5">
                {t.brideParentsEn}
              </p>
            </div>

            {/* Residence */}
            <div className="mt-5 pt-4 border-t border-gold-antique/20">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <MapPin className="w-4 h-4 text-gold-antique shrink-0" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 leading-normal">
                  {t.nivasiLabel}
                </span>
              </div>
              <p className="font-devanagari text-sm sm:text-base font-medium text-cream leading-relaxed py-0.5">
                {t.brideResidenceHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 mt-0.5">
                {t.brideResidenceEn}
              </p>
            </div>

            {/* Cultural note */}
            <div className="mt-4 pt-3 text-[11px] font-devanagari text-gold-champagne/70 border-t border-gold-antique/10 leading-relaxed py-0.5">
              {t.brideHeritage}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
