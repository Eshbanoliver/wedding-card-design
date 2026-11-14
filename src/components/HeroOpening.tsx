import React from 'react';
import { motion } from 'framer-motion';
import { JainSymbol, CornerOrnament, SacredDiya } from './OrnamentalSVGs';
import { Sparkles, Heart } from 'lucide-react';

interface HeroOpeningProps {
  onOpenInvitation: () => void;
  isOpen: boolean;
}

export const HeroOpening: React.FC<HeroOpeningProps> = ({ onOpenInvitation }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-16 overflow-hidden">
      {/* Decorative Traditional Toran / Arch Accent at top of Hero */}
      <div className="absolute top-0 inset-x-0 flex justify-center opacity-70 pointer-events-none">
        <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-gold-antique to-transparent" />
      </div>

      {/* Main Palace Arch Framing Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-full max-w-2xl mx-auto"
      >
        {/* Subtle Outer Glow */}
        <div className="absolute -inset-2 bg-gradient-to-b from-gold-antique/20 via-gold-champagne/10 to-transparent rounded-3xl blur-xl opacity-60 pointer-events-none" />

        {/* Grand Palace Arch Frame */}
        <div className="relative border-2 border-gold-antique/80 bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/98 rounded-t-[100px] md:rounded-t-[140px] rounded-b-2xl p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-md text-center">
          
          {/* Inner Ornate Outline */}
          <div className="absolute inset-2 md:inset-3 border border-gold-champagne/30 rounded-t-[92px] md:rounded-t-[130px] rounded-b-xl pointer-events-none" />
          <div className="absolute inset-4 md:inset-5 border border-gold-antique/15 rounded-t-[84px] md:rounded-t-[120px] rounded-b-lg pointer-events-none" />

          {/* Corner Flourishes */}
          <CornerOrnament position="bottom-left" className="absolute bottom-3 left-3 opacity-80" size={36} />
          <CornerOrnament position="bottom-right" className="absolute bottom-3 right-3 opacity-80" size={36} />

          {/* 1. Jain Auspicious Manglik Symbol */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col items-center justify-center mt-2 mb-4"
          >
            <div className="relative p-2">
              <JainSymbol size={76} className="filter drop-shadow-[0_0_12px_rgba(198,161,91,0.5)]" />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xs md:text-sm font-devanagari text-gold-champagne tracking-widest mt-1 opacity-90 leading-relaxed py-1"
            >
              ॥ ॐ श्री ऋषभदेवाय नमः ॥
            </motion.p>
          </motion.div>

          {/* Golden Divider with Diyas */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-center gap-4 my-3"
          >
            <SacredDiya size={34} className="opacity-90" />
            <div className="h-[1.5px] w-24 md:w-36 bg-gradient-to-r from-transparent via-gold-antique to-transparent" />
            <span className="text-gold-antique text-xs tracking-widest font-serif">卐</span>
            <div className="h-[1.5px] w-24 md:w-36 bg-gradient-to-r from-transparent via-gold-antique to-transparent" />
            <SacredDiya size={34} className="opacity-90" />
          </motion.div>

          {/* 2. Auspicious Title: शुभ विवाह */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="my-3 md:my-5"
          >
            <span className="inline-block text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 mb-1">
              Royal Wedding Invitation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#E8D5A7] to-[#C6A15B] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] inline-block leading-normal py-1.5">
              शुभ विवाह
            </h1>
          </motion.div>

          {/* 3. Golden Couple Names: अक्षय ❤️ विभूति */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="my-4 md:my-6 relative"
          >
            {/* Soft Royal Glow behind Names */}
            <div className="absolute inset-0 bg-gold-antique/10 blur-2xl rounded-full pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 py-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF9EA] via-[#E6D3A3] to-[#C6A15B] tracking-wider drop-shadow-md inline-block py-2 leading-normal">
                अक्षय
              </span>

              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="flex items-center justify-center p-2 rounded-full border border-gold-antique/40 bg-maroon-darkest/60 shadow-gold-sm"
              >
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-gold-champagne fill-gold-antique" />
              </motion.div>

              <span className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C6A15B] via-[#E6D3A3] to-[#FFF9EA] tracking-wider drop-shadow-md inline-block py-2 leading-normal">
                विभूति
              </span>
            </div>

            <p className="text-xs sm:text-sm font-cormorant tracking-[0.25em] uppercase text-gold-champagne/90 mt-2 font-medium">
              Akshay &amp; Vibhuti
            </p>
          </motion.div>

          {/* Auspicious Dates Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="my-4 text-xs sm:text-sm font-devanagari text-cream/90 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 leading-relaxed py-1"
          >
            <span>मंगलवार, 24 नवंबर 2026</span>
            <span className="text-gold-antique">•</span>
            <span>बुधवार, 25 नवंबर 2026</span>
            <span className="text-gold-antique">•</span>
            <span>उदयपुर, राजस्थान</span>
          </motion.div>

          {/* 4. Grand Opening Button: "आमंत्रण देखें" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="mt-6 md:mt-8 flex flex-col items-center"
          >
            <button
              onClick={onOpenInvitation}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-devanagari text-base sm:text-lg font-bold tracking-wide text-maroon-darkest overflow-hidden transition-all duration-300 shadow-xl hover:shadow-gold-md hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #FFF9EA 0%, #E6D3A3 30%, #C6A15B 70%, #9E7B35 100%)',
                border: '2px solid #FFF8E7',
              }}
            >
              {/* Button shimmer sweep */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <Sparkles className="w-5 h-5 text-maroon-darkest group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 font-extrabold tracking-wider py-0.5 leading-normal">
                आमंत्रण देखें
              </span>
              <span className="relative z-10 text-xs font-serif font-normal uppercase tracking-widest text-maroon-deep/90 border-l border-maroon-deep/30 pl-2">
                Open Invitation
              </span>
            </button>

            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="text-[11px] font-devanagari text-gold-champagne/75 mt-3 tracking-wider leading-relaxed"
            >
              ↓ नीचे स्क्रॉल करें अथवा बटन दबाएं
            </motion.p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

