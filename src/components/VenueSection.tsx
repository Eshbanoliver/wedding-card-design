import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider } from './OrnamentalSVGs';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const VenueSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const venueName = 'Hotel Madurai';
  const fullAddress = '118 Hotel Street, Udaipole Road Behind HDFC Bank, Udaipole, Shrinath Market, Udaipur, Rajasthan 313001';
  
  const googleMapsUrl = 'https://www.google.com/maps/place/Hotel+Madurai/@24.5771991,73.6984737,17z/data=!3m1!4b1!4m9!3m8!1s0x3967e581e14a0677:0x1cde58ccaa7542a4';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venueName}, ${fullAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="venue" className="relative py-12 md:py-24 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-14 flex flex-col items-center justify-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 block mb-2 text-center">
          {t.weddingDestination}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique block leading-normal py-1.5 text-center">
          {t.vivahSthal}
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium text-center">
          {t.venueTagline}
        </p>
        <GoldDivider className="max-w-xs mx-auto mt-4" />
      </motion.div>

      {/* Main Palace Venue Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative"
      >
        {/* Soft Golden Ambient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-gold-antique/20 via-gold-champagne/30 to-gold-antique/20 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

        <div className="relative border-2 border-gold-antique bg-gradient-to-b from-maroon-deep/95 via-maroon-burgundy/98 to-maroon-darkest rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md text-center overflow-hidden">
          
          {/* ─── GHIBLI ART UDAIPUR PALACE AT SUNSET BACKGROUND (25% OPACITY) ─── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
            <img
              src="/ghibli-udaipur.jpg"
              alt="Udaipur Royal Palace at Sunset Studio Ghibli Art"
              className="w-full h-full object-cover object-center opacity-25 filter contrast-110"
            />
            {/* Protective Royal Maroon Gradient Wash for 100% Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/85 via-maroon-burgundy/75 to-maroon-darkest/92" />
          </div>

          {/* Inner Gold Borders */}
          <div className="absolute inset-2 border border-gold-champagne/35 rounded-2xl pointer-events-none z-10" />
          <div className="absolute inset-3 border border-gold-antique/20 rounded-xl pointer-events-none z-10" />

          {/* Corner Ornaments */}
          <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80 z-10" size={32} />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80 z-10" size={32} />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80 z-10" size={32} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80 z-10" size={32} />

          {/* ─── VENUE CARD CONTENT (z-10 for complete visibility) ─── */}
          <div className="relative z-10">
            {/* Top Auspicious Destination Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 shadow-gold-sm">
                <span className="text-sm">🏰</span>
                <span className="font-devanagari text-xs md:text-sm font-bold text-gold-champagne tracking-widest uppercase leading-normal py-0.5">
                  ॥ पावन विवाह स्थल • झीलों की नगरी उदयपुर ॥
                </span>
                <span className="text-sm">🪔</span>
              </div>
            </div>

            {/* Venue Name Heading */}
            <div className="my-2">
              <span className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/80 block mb-1 leading-normal py-0.5">
                {t.vivahVedi}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique drop-shadow-md">
                {venueName}
              </h3>
              <p className="font-devanagari text-lg sm:text-xl text-cream font-bold mt-1 leading-normal py-0.5">
                {t.venueNameHi}
              </p>
            </div>

            {/* Udaipur Highlights Feature Chips (Eye-Catchy & Helpful) */}
            <div className="mt-4 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-2 px-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-darkest/80 border border-gold-antique/40 text-[11px] sm:text-xs text-gold-champagne font-devanagari">
                ✨ झीलों की नगरी (City of Lakes)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-darkest/80 border border-gold-antique/40 text-[11px] sm:text-xs text-gold-champagne font-devanagari">
                🚗 मुख्य उदयपोल मार्ग (Central Udaipole)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-darkest/80 border border-gold-antique/40 text-[11px] sm:text-xs text-gold-champagne font-devanagari">
                🅿️ सुगम पार्किंग एवं स्वागत (Guest Valet)
              </span>
            </div>

            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-5" />

            {/* Complete Address Box */}
            <div className="max-w-2xl mx-auto my-6 p-5 sm:p-6 rounded-2xl bg-maroon-darkest/80 border border-gold-antique/40 shadow-xl backdrop-blur-md">
              <div className="flex items-start justify-center gap-2 mb-2 text-gold-champagne">
                <MapPin className="w-5 h-5 text-gold-antique shrink-0 mt-0.5" />
                <span className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne font-bold leading-normal">
                  {t.fullAddressLabel}
                </span>
              </div>

              <p className="font-devanagari text-base sm:text-lg text-cream leading-relaxed font-semibold py-1">
                {t.fullAddressHi}
              </p>

              <p className="font-cormorant text-xs sm:text-sm text-gold-champagne/80 mt-1.5 font-medium">
                City of Lakes — Udaipur, Rajasthan (Pincode: 313001)
              </p>

              {/* Quick Copy Button */}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-gold-antique/60 bg-maroon-deep/90 hover:bg-gold-antique hover:text-maroon-darkest text-gold-champagne text-xs transition-all duration-200 font-devanagari font-bold shadow-sm leading-normal hover:scale-105 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="py-0.5">{t.copiedMsg}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="py-0.5">{t.copyAddressBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Google Maps Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-devanagari text-base font-bold text-maroon-darkest overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(230,211,163,0.6)] hover:scale-[1.04] leading-normal"
                style={{
                  background: 'linear-gradient(135deg, #FFF9EA 0%, #E6D3A3 30%, #C6A15B 70%, #9E7B35 100%)',
                  border: '2px solid #FFF8E7',
                }}
              >
                <Navigation className="w-5 h-5 text-maroon-darkest group-hover:rotate-45 transition-transform duration-300" />
                <span className="py-0.5">{t.getDirectionsBtn}</span>
                <span className="text-xs uppercase font-serif tracking-widest text-maroon-deep/90 border-l border-maroon-deep/30 pl-2">
                  {t.getDirectionsSub}
                </span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>

            {/* Embedded Google Map Preview Frame (Styled like a Royal Jharokha Window) */}
            <div className="mt-8 rounded-2xl overflow-hidden border-2 border-gold-antique/60 shadow-2xl max-w-3xl mx-auto bg-maroon-darkest">
              <div className="p-3 bg-gradient-to-r from-maroon-deep via-maroon-burgundy to-maroon-deep text-xs font-devanagari text-gold-champagne flex items-center justify-between px-4 border-b border-gold-antique/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold">Google Maps Live Location (होटल मदुरै)</span>
                </div>
                <span className="text-[11px] text-gold-pale/90">{t.udaipoleCity}</span>
              </div>
              <iframe
                title="Hotel Madurai Udaipur Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.347549130966!2d73.69847367536192!3d24.57719907811547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e581e14a0677%3A0x1cde58ccaa7542a4!2sHotel%20Madurai!5e0!3m2!1sen!2sin!4v1794637962844!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
