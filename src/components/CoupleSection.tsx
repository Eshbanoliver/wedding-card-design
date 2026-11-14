import React from 'react';
import { motion } from 'framer-motion';
import {
  CornerOrnament,
  GoldDivider,
  SacredDiya,
  RoyalSafaIcon,
  RoyalDoliIcon,
  RoyalGathbandhanIcon,
} from './OrnamentalSVGs';
import { MapPin, Sparkles, Feather, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { triggerPetalShower } from './PetalShower';

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
        className="text-center mb-10 md:mb-14 flex flex-col items-center justify-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 block mb-2 text-center">
          {t.theAuspiciousUnion}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique block leading-normal py-1.5 text-center">
          {t.varEvamVadhu}
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium text-center">
          {t.coupleTagline}
        </p>
        <GoldDivider className="max-w-xs mx-auto mt-4" />
      </motion.div>

      {/* ─── AI-GENERATED STUDIO GHIBLI ROYAL BRIDE & GROOM PORTRAIT CENTERPIECE ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-md sm:max-w-lg mx-auto mb-14 sm:mb-20"
      >
        {/* Soft Golden Halo Glow */}
        <div className="absolute -inset-3 bg-gradient-to-b from-gold-antique/25 via-gold-champagne/15 to-transparent rounded-[90px] sm:rounded-[120px] blur-2xl opacity-70 pointer-events-none" />

        {/* Grand Palace Arch Frame Container */}
        <div className="relative border-2 border-gold-antique/90 bg-gradient-to-b from-maroon-deep/95 via-maroon-burgundy to-maroon-darkest rounded-t-[90px] sm:rounded-t-[120px] rounded-b-3xl p-3 sm:p-5 shadow-2xl backdrop-blur-md overflow-hidden">
          
          {/* Inner Golden Border Insets */}
          <div className="absolute inset-1.5 sm:inset-2.5 border border-gold-champagne/40 rounded-t-[84px] sm:rounded-t-[112px] rounded-b-2xl pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-gold-antique/20 rounded-t-[76px] sm:rounded-t-[104px] rounded-b-xl pointer-events-none" />

          {/* Corner Filigrees on bottom */}
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80 z-10" size={28} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80 z-10" size={28} />

          {/* Auspicious Arch Top Motif */}
          <div className="flex items-center justify-center gap-2 pt-2 pb-3">
            <SacredDiya size={22} className="opacity-80" />
            <span className="font-devanagari text-[11px] sm:text-xs font-bold text-gold-champagne tracking-widest uppercase leading-normal">
              {t.couplePortraitTag}
            </span>
            <SacredDiya size={22} className="opacity-80" />
          </div>

          {/* Portrait Image Container */}
          <div className="relative rounded-t-[72px] sm:rounded-t-[98px] rounded-b-xl overflow-hidden shadow-inner border border-gold-antique/40 aspect-[3/4] max-h-[480px] w-full bg-maroon-darkest">
            <img
              src="/bride-groom.jpg"
              alt="Akshay and Vibhuti - Royal Jain Wedding Couple (Studio Ghibli Style)"
              className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.01] hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Subtle Vignette Overlay for Seamless Color Blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-darkest via-transparent to-maroon-deep/30 pointer-events-none" />
            <div className="absolute inset-0 border border-gold-antique/30 rounded-t-[72px] sm:rounded-t-[98px] rounded-b-xl pointer-events-none" />
          </div>

          {/* Portrait Caption Plate */}
          <div className="pt-4 pb-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="font-devanagari text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique leading-normal py-0.5">
                {t.groomName}
              </span>
              <span className="text-gold-antique font-serif text-sm">卐</span>
              <span className="font-devanagari text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-antique via-gold-champagne to-gold-pale leading-normal py-0.5">
                {t.brideName}
              </span>
            </div>
            <p className="font-cormorant text-xs sm:text-sm tracking-[0.2em] uppercase text-gold-champagne/80 mt-0.5 font-medium">
              {t.coupleNamesFull}
            </p>
          </div>

        </div>
      </motion.div>

      {/* ─── CREATIVE & DYNAMIC COUPLE CARDS GRID (वर एवं वधु) ─── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-4 items-center">
        
        {/* ══════════ GROOM CARD (वर) ══════════ */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: 'spring' }}
          whileHover={{ y: -6 }}
          className="lg:col-span-5 relative group"
        >
          {/* Card Outer Glow on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-b from-gold-antique/30 via-gold-champagne/15 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Royal Ornamental Card Frame */}
          <div className="relative border-2 border-gold-antique/80 bg-gradient-to-b from-maroon-deep/95 via-maroon-burgundy/98 to-maroon-darkest rounded-t-[48px] rounded-b-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md text-center overflow-hidden transition-all duration-300">
            
            {/* Subtle Rotating Watermark Motif in Background */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-antique animate-spin" style={{ animationDuration: '60s' }}>
                <circle cx="50" cy="50" r="45" stroke="#C6A15B" strokeWidth="2" fill="none" strokeDasharray="6 4" />
                <path d="M 50 10 C 60 30 70 40 90 50 C 70 60 60 70 50 90 C 40 70 30 60 10 50 C 30 40 40 30 50 10 Z" />
              </svg>
            </div>

            {/* Inner Gold Borders */}
            <div className="absolute inset-2 border border-gold-champagne/35 rounded-t-[42px] rounded-b-2xl pointer-events-none" />
            <div className="absolute inset-3.5 border border-gold-antique/15 rounded-t-[36px] rounded-b-xl pointer-events-none" />

            {/* Corner Filigrees */}
            <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={30} />

            {/* Top Creative Crest: Royal Safa / Kalgi Medallion */}
            <div className="flex flex-col items-center justify-center -mt-2 mb-3">
              <div className="relative p-2.5 rounded-full border-2 border-gold-antique/70 bg-gradient-to-br from-maroon-deep via-maroon-burgundy to-maroon-darkest shadow-gold-sm group-hover:scale-110 transition-transform duration-300">
                <RoyalSafaIcon size={46} />
                <div className="absolute -inset-1 rounded-full border border-gold-champagne/40 animate-pulse opacity-30 pointer-events-none" />
              </div>

              {/* Title Ribbon Badge */}
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
                <span className="font-devanagari text-gold-champagne text-xs sm:text-sm font-bold tracking-widest leading-normal py-0.5">
                  {t.varLabel}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
              </div>
            </div>

            {/* Groom Name: अक्षय (Akshay) */}
            <div className="my-3 md:my-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] tracking-wide drop-shadow-md inline-block py-2 leading-normal">
                {t.groomName}
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-gold-champagne font-semibold tracking-wider mt-0.5">
                Akshay
              </p>
            </div>

            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-3" />

            {/* 1. Parents Lineage (सुपुत्र) Box */}
            <div className="my-3.5 p-3 rounded-2xl bg-maroon-darkest/60 border border-gold-antique/25 shadow-inner">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <Feather className="w-3.5 h-3.5 text-gold-antique" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 font-semibold leading-normal">
                  {t.suputraOf}
                </span>
              </div>
              <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium text-cream leading-relaxed py-0.5">
                {t.groomParentsHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 italic mt-0.5">
                {t.groomParentsEn}
              </p>
            </div>

            {/* 2. Residence (पैतृक निवास) Box */}
            <div className="my-3.5 p-3 rounded-2xl bg-maroon-darkest/60 border border-gold-antique/25 shadow-inner">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <MapPin className="w-3.5 h-3.5 text-gold-antique shrink-0" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 font-semibold leading-normal">
                  {t.nivasiLabel}
                </span>
              </div>
              <p className="font-devanagari text-sm sm:text-base font-semibold text-cream leading-relaxed py-0.5">
                {t.groomResidenceHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 mt-0.5">
                {t.groomResidenceEn}
              </p>
            </div>

            {/* 3. Sacred Heritage Badge */}
            <div className="mt-4 pt-3 border-t border-gold-antique/20 flex items-center justify-center gap-2 text-xs font-devanagari text-gold-champagne/80 leading-relaxed py-0.5">
              <Compass className="w-3.5 h-3.5 text-gold-antique shrink-0" />
              <span>{t.groomHeritage}</span>
            </div>

          </div>
        </motion.div>

        {/* ══════════ CENTRAL SACRED GATHBANDHAN (Col 6) ══════════ */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => triggerPetalShower()}
            title="पवित्र गठबंधन (Click for Petal Shower)"
          >
            {/* Top decorative connection line */}
            <div className="hidden lg:block w-[2px] h-14 bg-gradient-to-b from-transparent via-gold-antique to-gold-champagne" />

            {/* Sacred Gathbandhan Emblem */}
            <div className="relative my-2 p-3 rounded-full border-2 border-gold-antique bg-gradient-to-br from-maroon-deep via-maroon-burgundy to-maroon-darkest shadow-gold-md group-hover:scale-110 transition-transform duration-300">
              <RoyalGathbandhanIcon size={52} />
              <div className="absolute -inset-1.5 rounded-full border border-gold-champagne/40 animate-ping opacity-25 pointer-events-none" />
            </div>

            {/* Gathbandhan Inscription */}
            <span className="font-devanagari text-xs font-bold text-gold-champagne tracking-widest uppercase text-center mt-1 leading-normal py-0.5 whitespace-nowrap">
              {t.gathbandhanText}
            </span>
            <span className="hidden sm:block text-[9px] font-cormorant tracking-wider text-gold-champagne/70 uppercase mt-0.5 text-center max-w-[90px] leading-tight">
              {t.gathbandhanSub}
            </span>

            {/* Bottom decorative connection line */}
            <div className="hidden lg:block w-[2px] h-14 bg-gradient-to-t from-transparent via-gold-antique to-gold-champagne mt-2" />
          </motion.div>
        </div>

        {/* ══════════ BRIDE CARD (वधु) ══════════ */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: 'spring' }}
          whileHover={{ y: -6 }}
          className="lg:col-span-5 relative group"
        >
          {/* Card Outer Glow on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-b from-gold-antique/30 via-gold-champagne/15 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Royal Ornamental Card Frame */}
          <div className="relative border-2 border-gold-antique/80 bg-gradient-to-b from-maroon-deep/95 via-maroon-burgundy/98 to-maroon-darkest rounded-t-[48px] rounded-b-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md text-center overflow-hidden transition-all duration-300">
            
            {/* Subtle Rotating Watermark Motif in Background */}
            <div className="absolute -left-10 -bottom-10 w-48 h-48 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-antique animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }}>
                <circle cx="50" cy="50" r="45" stroke="#C6A15B" strokeWidth="2" fill="none" strokeDasharray="6 4" />
                <path d="M 50 10 C 60 30 70 40 90 50 C 70 60 60 70 50 90 C 40 70 30 60 10 50 C 30 40 40 30 50 10 Z" />
              </svg>
            </div>

            {/* Inner Gold Borders */}
            <div className="absolute inset-2 border border-gold-champagne/35 rounded-t-[42px] rounded-b-2xl pointer-events-none" />
            <div className="absolute inset-3.5 border border-gold-antique/15 rounded-t-[36px] rounded-b-xl pointer-events-none" />

            {/* Corner Filigrees */}
            <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={30} />
            <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={30} />

            {/* Top Creative Crest: Royal Doli / Palanquin Medallion */}
            <div className="flex flex-col items-center justify-center -mt-2 mb-3">
              <div className="relative p-2.5 rounded-full border-2 border-gold-antique/70 bg-gradient-to-br from-maroon-deep via-maroon-burgundy to-maroon-darkest shadow-gold-sm group-hover:scale-110 transition-transform duration-300">
                <RoyalDoliIcon size={46} />
                <div className="absolute -inset-1 rounded-full border border-gold-champagne/40 animate-pulse opacity-30 pointer-events-none" />
              </div>

              {/* Title Ribbon Badge */}
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
                <span className="font-devanagari text-gold-champagne text-xs sm:text-sm font-bold tracking-widest leading-normal py-0.5">
                  {t.vadhuLabel}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
              </div>
            </div>

            {/* Bride Name: विभूति (Vibhuti) */}
            <div className="my-3 md:my-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] tracking-wide drop-shadow-md inline-block py-2 leading-normal">
                {t.brideName}
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-gold-champagne font-semibold tracking-wider mt-0.5">
                Vibhuti
              </p>
            </div>

            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-3" />

            {/* 1. Parents Lineage (सुपुत्री) Box */}
            <div className="my-3.5 p-3 rounded-2xl bg-maroon-darkest/60 border border-gold-antique/25 shadow-inner">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <Feather className="w-3.5 h-3.5 text-gold-antique" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 font-semibold leading-normal">
                  {t.suputriOf}
                </span>
              </div>
              <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium text-cream leading-relaxed py-0.5">
                {t.brideParentsHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 italic mt-0.5">
                {t.brideParentsEn}
              </p>
            </div>

            {/* 2. Residence (पैतृक निवास) Box */}
            <div className="my-3.5 p-3 rounded-2xl bg-maroon-darkest/60 border border-gold-antique/25 shadow-inner">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <MapPin className="w-3.5 h-3.5 text-gold-antique shrink-0" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 font-semibold leading-normal">
                  {t.nivasiLabel}
                </span>
              </div>
              <p className="font-devanagari text-sm sm:text-base font-semibold text-cream leading-relaxed py-0.5">
                {t.brideResidenceHi}
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 mt-0.5">
                {t.brideResidenceEn}
              </p>
            </div>

            {/* 3. Cultural Heritage Badge */}
            <div className="mt-4 pt-3 border-t border-gold-antique/20 flex items-center justify-center gap-2 text-xs font-devanagari text-gold-champagne/80 leading-relaxed py-0.5">
              <Compass className="w-3.5 h-3.5 text-gold-antique shrink-0" />
              <span>{t.brideHeritage}</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
