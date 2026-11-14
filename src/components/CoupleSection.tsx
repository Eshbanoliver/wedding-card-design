import React from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider } from './OrnamentalSVGs';
import { MapPin, Heart } from 'lucide-react';

export const CoupleSection: React.FC = () => {
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
          The Auspicious Union
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique">
          वर एवं वधु
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium">
          Two Souls Bound by Faith, Tradition &amp; Love
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
              <span className="font-devanagari text-gold-champagne text-xs md:text-sm font-bold tracking-widest">
                ॥ वर ॥
              </span>
            </div>

            {/* Groom Name: अक्षय (Akshay) */}
            <div className="my-3 md:my-5">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] tracking-wide drop-shadow-md">
                अक्षय
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-gold-champagne font-semibold tracking-wider mt-1">
                Akshay
              </p>
            </div>

            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-4" />

            {/* Parents Lineage */}
            <div className="my-4 text-cream/95">
              <span className="block font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 mb-1">
                सुपुत्र:
              </span>
              <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                श्री दिनेश जी एवं श्रीमती करुणा
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 italic mt-0.5">
                S/o Shri Dinesh Ji &amp; Smt. Karuna
              </p>
            </div>

            {/* Residence */}
            <div className="mt-5 pt-4 border-t border-gold-antique/20">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <MapPin className="w-4 h-4 text-gold-antique shrink-0" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80">
                  निवासी:
                </span>
              </div>
              <p className="font-devanagari text-sm sm:text-base font-medium text-cream">
                ऋषभदेव, उदयपुर, राजस्थान
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 mt-0.5">
                Rishabhdeo, Udaipur, Rajasthan
              </p>
            </div>

            {/* Subtle Jain Temple Rishabhdeo Heritage note */}
            <div className="mt-4 pt-3 text-[11px] font-devanagari text-gold-champagne/60 border-t border-gold-antique/10">
              तीर्थंकर श्री ऋषभदेव पावन भूमि, मेवाड़
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

            <span className="font-devanagari text-[11px] font-bold text-gold-champagne tracking-widest uppercase text-center mt-1">
              शुभ परिणय
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
              <span className="font-devanagari text-gold-champagne text-xs md:text-sm font-bold tracking-widest">
                ॥ वधु ॥
              </span>
            </div>

            {/* Bride Name: विभूति (Vibhuti) */}
            <div className="my-3 md:my-5">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] tracking-wide drop-shadow-md">
                विभूति
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-gold-champagne font-semibold tracking-wider mt-1">
                Vibhuti
              </p>
            </div>

            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-4" />

            {/* Parents Lineage */}
            <div className="my-4 text-cream/95">
              <span className="block font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80 mb-1">
                सुपुत्री:
              </span>
              <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                श्री हेमंत जी एवं श्रीमती अर्चना
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 italic mt-0.5">
                D/o Shri Hemant Ji &amp; Smt. Archana
              </p>
            </div>

            {/* Residence */}
            <div className="mt-5 pt-4 border-t border-gold-antique/20">
              <div className="flex items-center justify-center gap-1.5 text-gold-champagne mb-1">
                <MapPin className="w-4 h-4 text-gold-antique shrink-0" />
                <span className="font-devanagari text-xs uppercase tracking-wider text-gold-champagne/80">
                  निवासी:
                </span>
              </div>
              <p className="font-devanagari text-sm sm:text-base font-medium text-cream">
                फिरोजाबाद, उत्तर प्रदेश
              </p>
              <p className="font-cormorant text-xs text-gold-champagne/70 mt-0.5">
                Firozabad, Uttar Pradesh
              </p>
            </div>

            {/* Cultural note */}
            <div className="mt-4 pt-3 text-[11px] font-devanagari text-gold-champagne/60 border-t border-gold-antique/10">
              पारंपरिक भारतीय सांस्कृतिक संस्कार
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

