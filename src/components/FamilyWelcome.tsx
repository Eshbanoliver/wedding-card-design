import React from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider, SacredDiya } from './OrnamentalSVGs';
import { Sparkles, Heart } from 'lucide-react';

export const FamilyWelcome: React.FC = () => {
  return (
    <section id="family" className="relative py-12 md:py-24 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 block mb-1">
          With Warmest Regards
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique inline-block leading-normal py-1.5">
          सादर स्वागत एवं अभिनंदन
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium">
          Cordially Welcoming You with Open Hearts
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
        <div className="relative border-2 border-gold-antique/70 bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/98 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md text-center overflow-hidden">
          
          {/* Inner Double Borders */}
          <div className="absolute inset-2 border border-gold-champagne/35 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3 border border-gold-antique/15 rounded-xl pointer-events-none" />

          {/* Corner Ornaments */}
          <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={30} />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={30} />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={30} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={30} />

          {/* Top Diya and Blessings */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <SacredDiya size={34} />
            <span className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/80 leading-normal py-0.5">
              ॥ स्वागताकांक्षी ॥
            </span>
            <SacredDiya size={34} />
          </div>

          <p className="font-devanagari text-base sm:text-lg text-cream/95 max-w-2xl mx-auto leading-[1.8] md:leading-[2] mb-8 py-1">
            हमारे परिवार के इस मांगलिक अवसर पर आपका शुभागमन ही हमारे उत्सव की शोभा बढ़ाएगा।
            हम सहृदय आपका स्वागत एवं सत्कार करने को आतुर हैं।
          </p>

          {/* Symmetrical Host Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            {/* Host Card 1: आस्था एवं निहाल जी */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative p-6 rounded-2xl bg-maroon-darkest/80 border border-gold-antique/40 shadow-xl text-center group"
            >
              <div className="w-10 h-10 rounded-full border border-gold-antique/50 bg-maroon-deep mx-auto flex items-center justify-center mb-3 shadow-gold-sm">
                <Sparkles className="w-5 h-5 text-gold-antique group-hover:rotate-12 transition-transform" />
              </div>
              <span className="block font-devanagari text-xs uppercase tracking-widest text-gold-champagne/70 mb-1 leading-normal">
                स्नेही स्वागतकर्ता
              </span>
              <h3 className="text-xl sm:text-2xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique inline-block py-1.5 leading-normal">
                आस्था एवं निहाल जी
              </h3>
              <p className="font-cormorant text-xs text-gold-champagne/80 mt-1">
                Astha &amp; Nihal Ji
              </p>
            </motion.div>

            {/* Host Card 2: प्रणय 'जी' एवं अनंत */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative p-6 rounded-2xl bg-maroon-darkest/80 border border-gold-antique/40 shadow-xl text-center group"
            >
              <div className="w-10 h-10 rounded-full border border-gold-antique/50 bg-maroon-deep mx-auto flex items-center justify-center mb-3 shadow-gold-sm">
                <Heart className="w-5 h-5 text-gold-antique group-hover:scale-110 transition-transform" />
              </div>
              <span className="block font-devanagari text-xs uppercase tracking-widest text-gold-champagne/70 mb-1 leading-normal">
                स्नेही स्वागतकर्ता
              </span>
              <h3 className="text-xl sm:text-2xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique inline-block py-1.5 leading-normal">
                प्रणय 'जी' एवं अनंत
              </h3>
              <p className="font-cormorant text-xs text-gold-champagne/80 mt-1">
                Pranay 'Ji' &amp; Anant
              </p>
            </motion.div>

          </div>

          {/* Warm closing note */}
          <div className="mt-8 pt-6 border-t border-gold-antique/20 max-w-xl mx-auto">
            <p className="font-devanagari text-sm text-gold-champagne/90 italic leading-relaxed py-0.5">
              समस्त परिवारजन आपके स्नेहपूर्ण शुभाशीर्वाद के अभिलाषी हैं।
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

