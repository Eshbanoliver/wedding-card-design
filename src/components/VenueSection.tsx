import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider } from './OrnamentalSVGs';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const venueName = 'Hotel Madurai';
  const fullAddress = '118 Hotel Street, Udaipole Road Behind HDFC Bank, Udaipole, Shrinath Market, Udaipur, Rajasthan 313001';
  
  // Exact Google Maps query URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${venueName}, ${fullAddress}`
  )}`;

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
        className="text-center mb-10 md:mb-14"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 block mb-1">
          Wedding Destination
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique">
          विवाह स्थल
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium">
          Royal Venue &amp; Directions
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
        <div className="relative border-2 border-gold-antique bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/98 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md text-center overflow-hidden">
          
          {/* Inner Gold Borders */}
          <div className="absolute inset-2 border border-gold-champagne/35 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3 border border-gold-antique/20 rounded-xl pointer-events-none" />

          {/* Corner Ornaments */}
          <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" size={32} />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" size={32} />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-80" size={32} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-80" size={32} />

          {/* Royal Palace Architecture Crest */}
          <div className="flex justify-center mb-4">
            <svg viewBox="0 0 100 80" className="w-20 h-16 text-gold-antique filter drop-shadow-md" fill="none">
              <path
                d="M 50 10 C 40 25 20 25 15 40 L 85 40 C 80 25 60 25 50 10 Z"
                fill="#C6A15B"
                opacity="0.9"
              />
              <circle cx="50" cy="8" r="3" fill="#FFF8E7" />
              <rect x="20" y="40" width="60" height="28" fill="#380710" stroke="#C6A15B" strokeWidth="1.5" />
              {/* Palace Arch Doorway */}
              <path
                d="M 42 68 L 42 50 C 42 45 58 45 58 50 L 58 68 Z"
                fill="#C6A15B"
              />
              {/* Pillars */}
              <line x1="26" y1="40" x2="26" y2="68" stroke="#E6D3A3" strokeWidth="1.5" />
              <line x1="74" y1="40" x2="74" y2="68" stroke="#E6D3A3" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Venue Name */}
          <div className="my-2">
            <span className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/80 block mb-1">
              ॥ शुभ विवाह वेदी ॥
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique">
              {venueName}
            </h3>
            <p className="font-devanagari text-base sm:text-lg text-cream/90 font-medium mt-1">
              होटल मदुरै, उदयपुर
            </p>
          </div>

          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-4" />

          {/* Complete Address Box */}
          <div className="max-w-2xl mx-auto my-6 p-5 sm:p-6 rounded-2xl bg-maroon-darkest/75 border border-gold-antique/30 shadow-inner">
            <div className="flex items-start justify-center gap-2 mb-2 text-gold-champagne">
              <MapPin className="w-5 h-5 text-gold-antique shrink-0 mt-0.5" />
              <span className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/90 font-semibold">
                पूर्ण पता / Complete Address
              </span>
            </div>

            <p className="font-devanagari text-base sm:text-lg text-cream/95 leading-relaxed font-medium">
              118 Hotel Street, Udaipole Road Behind HDFC Bank, Udaipole, Shrinath Market, Udaipur, Rajasthan 313001
            </p>

            <p className="font-cormorant text-xs sm:text-sm text-gold-champagne/70 mt-2">
              City of Lakes — Udaipur, Rajasthan (Pincode: 313001)
            </p>

            {/* Quick Copy Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold-antique/40 bg-maroon-deep/70 hover:bg-gold-antique hover:text-maroon-darkest text-gold-champagne text-xs transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>पता कॉपी हो गया! (Address Copied)</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>पता कॉपी करें (Copy Address)</span>
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
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-devanagari text-base font-bold text-maroon-darkest overflow-hidden transition-all duration-300 shadow-xl hover:shadow-gold-md hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #FFF9EA 0%, #E6D3A3 30%, #C6A15B 70%, #9E7B35 100%)',
                border: '2px solid #FFF8E7',
              }}
            >
              <Navigation className="w-5 h-5 text-maroon-darkest" />
              <span>विवाह स्थल देखें</span>
              <span className="text-xs uppercase font-serif tracking-widest text-maroon-deep/90 border-l border-maroon-deep/30 pl-2">
                GET DIRECTIONS
              </span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
          </div>

          {/* Embedded Google Map Preview Frame */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-gold-antique/40 shadow-xl max-w-3xl mx-auto">
            <div className="p-2 bg-maroon-darkest text-xs font-devanagari text-gold-champagne flex items-center justify-between px-4 border-b border-gold-antique/20">
              <span>Google Maps Live Location</span>
              <span className="text-[11px] text-cream/70">उदयपोल, उदयपुर</span>
            </div>
            <iframe
              title="Hotel Madurai Udaipur Google Map Location"
              src="https://maps.google.com/maps?q=Hotel+Madurai+118+Hotel+Street+Udaipole+Road+Behind+HDFC+Bank+Udaipole+Shrinath+Market+Udaipur+Rajasthan+313001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

