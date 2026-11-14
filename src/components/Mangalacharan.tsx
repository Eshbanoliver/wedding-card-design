import React from 'react';
import { motion } from 'framer-motion';
import { JainKalash, CornerOrnament, GoldDivider } from './OrnamentalSVGs';

export const Mangalacharan: React.FC = () => {
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
          <div className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] font-serif text-gold-champagne/80 block mb-1">
              Sacred Inscription
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique">
              ॥ श्री जैन मंगलाचरण ॥
            </h2>
          </div>

          <GoldDivider className="my-4 max-w-md mx-auto" />

          {/* Sacred Mangalacharan Shloka */}
          <div className="my-6 px-3 sm:px-6 py-5 rounded-xl bg-maroon-darkest/60 border border-gold-antique/30 shadow-inner">
            <p className="font-devanagari text-lg sm:text-2xl md:text-2xl leading-relaxed md:leading-loose font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] drop-shadow-sm">
              मंगलम् भगवान वीरो मंगलम् गौतमो गणः।
              <br />
              मंगलम् कुन्दकुन्दाद्यो जैन धर्मस्तु मंगलम् ॥
            </p>
          </div>

          {/* English Meaning of the Sacred Shloka for Universal Appreciation */}
          <p className="font-cormorant italic text-xs sm:text-sm text-gold-champagne/80 max-w-xl mx-auto mb-6">
            "Auspicious is Bhagwan Mahavira, auspicious is Ganadhara Gautama Swami;
            auspicious is Acharya Kundakunda, and supreme and auspicious is the eternal Jain Dharma."
          </p>

          <GoldDivider className="my-4 max-w-xs mx-auto" />

          {/* Sacred Invitation Message */}
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="font-devanagari text-base sm:text-lg md:text-xl text-cream/95 leading-relaxed md:leading-loose">
              परम तत्व श्री भगवान की अनंत कृपा से हमारे परिवार में शुभ विवाह संस्कार का मंगल अवसर आ रहा है जिसमें आप सादर आमंत्रित हैं।
            </p>

            <p className="font-cormorant text-xs sm:text-sm text-gold-champagne/70 mt-3 tracking-wide">
              By the supreme grace of the Divine, an auspicious marriage celebration is gracing our family,
              and we cordially invite your gracious presence to bless the couple.
            </p>
          </div>

          {/* Bottom Auspicious Blessing Mark */}
          <div className="mt-8 flex justify-center items-center gap-3 text-gold-antique text-sm">
            <span>卐</span>
            <span className="font-devanagari text-xs tracking-widest text-gold-champagne">
              सत्य • अहिंसा • अपरिग्रह
            </span>
            <span>卐</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
