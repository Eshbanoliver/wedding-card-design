import React from 'react';
import { JainSymbol, CornerOrnament } from './OrnamentalSVGs';
import { Heart } from 'lucide-react';

export const RoyalFooter: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden z-20 pb-12 pt-8">
      {/* Intricate Golden Decorative Top Border */}
      <div className="relative w-full">
        {/* Top Metallic Gold Line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold-antique to-transparent shadow-gold-sm" />
        {/* Scalloped Lace Pattern */}
        <div className="w-full h-3 flex justify-center overflow-hidden opacity-60 my-0.5">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-3 border-b-2 border-r border-gold-antique/60 rounded-b-full shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content Container - Full-width Deep Maroon, Seamless Background */}
      <div className="relative max-w-4xl mx-auto px-4 py-8 text-center">
        
        {/* Corner Flourishes */}
        <div className="relative border border-gold-antique/40 bg-gradient-to-b from-maroon-deep/60 via-maroon-burgundy/80 to-maroon-darkest/95 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-70" size={24} />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-70" size={24} />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-70" size={24} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-70" size={24} />

          {/* Small Decorative Jain Auspicious Motif */}
          <div className="flex justify-center mb-3">
            <JainSymbol size={48} className="filter drop-shadow-[0_0_8px_rgba(198,161,91,0.4)]" />
          </div>

          {/* Footer Heading: शुभ विवाह */}
          <h3 className="text-2xl sm:text-3xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique tracking-wide mb-1">
            शुभ विवाह
          </h3>
          <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-gold-champagne/70 font-medium">
            Royal Jain Wedding Invitation
          </p>

          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-3" />

          {/* Couple Names: अक्षय ❤️ विभूति */}
          <div className="flex items-center justify-center gap-2 my-3">
            <span className="font-devanagari text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale to-gold-antique">
              अक्षय
            </span>
            <Heart className="w-4 h-4 text-gold-champagne fill-gold-antique" />
            <span className="font-devanagari text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-antique to-gold-pale">
              विभूति
            </span>
          </div>

          {/* Heartfelt Quote */}
          <p className="font-devanagari text-sm sm:text-base text-cream/90 max-w-xl mx-auto my-3 leading-relaxed italic">
            "आपकी गरिमामयी उपस्थिति हमारे लिए सौभाग्य एवं हर्ष का विषय होगी।"
          </p>

          <p className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/80 font-semibold my-2">
            सादर आमंत्रित
          </p>

          {/* Bottom Auspicious Jain Quote */}
          <div className="mt-6 pt-4 border-t border-gold-antique/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-devanagari text-gold-champagne/60 gap-2">
            <span>ऋषभदेव (उदयपुर) • फिरोजाबाद</span>
            <span className="text-gold-antique font-serif">卐 ॐ अर्हम् नमः 卐</span>
            <span>24 &amp; 25 नवंबर 2026</span>
          </div>
        </div>

      </div>

      {/* Traditional Ornamental Bottom Border Continuing To Document Bottom */}
      <div className="w-full h-2 bg-gradient-to-r from-gold-dark via-gold-champagne to-gold-dark mt-4" />
    </footer>
  );
};

