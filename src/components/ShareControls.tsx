import React, { useState } from 'react';
import { Share2, Check, Send } from 'lucide-react';
import { PetalShowerButton } from './PetalShower';
import { useLanguage } from '../context/LanguageContext';

export const ShareControls: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return window.location.href;
    }
    return 'https://invitation.futurexdigital.in/';
  };

  const handleWhatsAppShare = () => {
    const url = getShareUrl();
    const shareText =
      language === 'hi'
        ? `॥ शुभ विवाह ॥\nपरम तत्व श्री भगवान की अनंत कृपा से,\n\nअक्षय ❤️ विभूति\n\nके पावन विवाह संस्कार में आप सपरिवार सादर आमंत्रित हैं।\n\nदिनांक: 24 & 25 नवंबर 2026\nस्थान: होटल मदुरै, उदयपुर (राजस्थान)\n\nडिजिटल आमंत्रण पत्र देखें:\n`
        : `॥ Shubh Vivah ॥\nWith the divine blessings of the Almighty,\n\nAkshay ❤️ Vibhuti\n\nCordially invite you and your family to celebrate their royal wedding.\n\nDate: 24 & 25 November 2026\nVenue: Hotel Madurai, Udaipur (Rajasthan)\n\nView Royal Wedding Invitation:\n`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed top-4 right-3 sm:right-4 z-40 flex items-center gap-2">
      {/* Flower Petal Shower Button (Desktop & Tablet) */}
      <div className="hidden sm:block">
        <PetalShowerButton />
      </div>

      {/* WhatsApp Share Button */}
      <button
        onClick={handleWhatsAppShare}
        aria-label={t.shareWhatsApp}
        title={t.shareWhatsApp}
        className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-gold-antique/70 bg-gradient-to-r from-emerald-800 to-green-900 hover:from-emerald-700 hover:to-green-800 text-white text-xs font-devanagari font-semibold transition-all duration-300 shadow-lg hover:shadow-gold-sm leading-normal active:scale-95"
      >
        <Send className="w-3.5 h-3.5" />
        <span className="hidden sm:inline py-0.5">{language === 'hi' ? 'शेयर करें' : 'Share'}</span>
      </button>

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        aria-label={copied ? t.linkCopied : t.copyLink}
        title={copied ? t.linkCopied : t.copyLink}
        className="flex items-center justify-center p-2 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 hover:bg-gold-antique hover:text-maroon-darkest text-gold-champagne transition-all duration-300 shadow-md active:scale-95"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Share2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};
