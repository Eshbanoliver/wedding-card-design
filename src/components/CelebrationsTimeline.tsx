import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CornerOrnament,
  GoldDivider,
  RoyalHaldiUrliIllustration,
  RoyalMehndiIllustration,
  RoyalVivahMandapIllustration,
} from './OrnamentalSVGs';
import { Calendar, Clock, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { triggerPetalShower } from './PetalShower';

export const CelebrationsTimeline: React.FC = () => {
  const { t } = useLanguage();

  // Countdown to Royal Wedding: 25 November 2026, 09:00 AM IST
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-11-25T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      id: 'haldi',
      nameHi: t.haldi.nameHi,
      nameEn: t.haldi.nameEn,
      dayHi: t.haldi.dayHi,
      dayEn: t.haldi.dayEn,
      timeHi: t.haldi.timeHi,
      timeEn: t.haldi.timeEn,
      tagline: t.haldi.tagline,
      isMainWedding: false,
      isHaldi: true,
      isMehndi: false,
      svgIcon: (
        <div className="w-full flex justify-center py-2">
          <RoyalHaldiUrliIllustration size={135} />
        </div>
      ),
    },
    {
      id: 'mehndi',
      nameHi: t.mehndi.nameHi,
      nameEn: t.mehndi.nameEn,
      dayHi: t.mehndi.dayHi,
      dayEn: t.mehndi.dayEn,
      timeHi: t.mehndi.timeHi,
      timeEn: t.mehndi.timeEn,
      tagline: t.mehndi.tagline,
      isMainWedding: false,
      isHaldi: false,
      isMehndi: true,
      svgIcon: (
        <div className="w-full flex justify-center py-2">
          <RoyalMehndiIllustration size={135} />
        </div>
      ),
    },
    {
      id: 'wedding',
      nameHi: t.wedding.nameHi,
      nameEn: t.wedding.nameEn,
      dayHi: t.wedding.dayHi,
      dayEn: t.wedding.dayEn,
      timeHi: t.wedding.timeHi,
      timeEn: t.wedding.timeEn,
      tagline: t.wedding.tagline,
      isMainWedding: true,
      isHaldi: false,
      isMehndi: false,
      svgIcon: (
        <div
          className="w-full max-w-[340px] mx-auto py-1 cursor-pointer group"
          onClick={triggerPetalShower}
          title="शुभ विवाह पर पुष्प वर्षा करें (Click to shower auspicious petals)"
        >
          <RoyalVivahMandapIllustration className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]" />
        </div>
      ),
    },
  ];

  const createGoogleCalendarUrl = (title: string, startDateStr: string, details: string) => {
    const startIso = startDateStr.replace(/-|:|\\.\\d\\d\\d/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startIso}/${startIso}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent('Hotel Madurai, Udaipole, Udaipur, Rajasthan')}`;
  };

  return (
    <section id="celebrations" className="relative py-12 md:py-24 px-4 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-14 flex flex-col items-center justify-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-champagne/80 block mb-2 text-center">
          {t.weddingFestivities}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-devanagari font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale via-gold-champagne to-gold-antique block leading-normal py-1.5 text-center">
          {t.shubhKaryakram}
        </h2>
        <p className="text-xs sm:text-sm font-cormorant tracking-widest uppercase text-gold-champagne/80 mt-2 font-medium text-center">
          {t.ceremoniesTagline}
        </p>
        <GoldDivider className="max-w-xs mx-auto mt-4" />
      </motion.div>

      {/* AUSPICIOUS WEDDING COUNTDOWN TIMER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 max-w-2xl mx-auto"
      >
        <div className="relative border-2 border-gold-antique/60 bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/98 rounded-2xl p-5 sm:p-6 shadow-xl text-center">
          <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-70" size={24} />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-70" size={24} />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-70" size={24} />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-70" size={24} />

          <p className="font-devanagari text-xs uppercase tracking-widest text-gold-champagne/80 mb-3 font-semibold leading-normal py-0.5">
            {t.countdownTitle}
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
            {[
              { labelHi: t.days, labelEng: 'Days', value: timeLeft.days },
              { labelHi: t.hours, labelEng: 'Hours', value: timeLeft.hours },
              { labelHi: t.minutes, labelEng: 'Mins', value: timeLeft.minutes },
              { labelHi: t.seconds, labelEng: 'Secs', value: timeLeft.seconds },
            ].map((unit, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-maroon-darkest/80 border border-gold-antique/30 shadow-inner"
              >
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] to-[#C6A15B]">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-devanagari text-[11px] sm:text-xs text-gold-champagne font-medium mt-0.5 leading-normal py-0.5">
                  {unit.labelHi}
                </span>
                <span className="text-[9px] font-cormorant uppercase tracking-wider text-gold-champagne/60">
                  {unit.labelEng}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-devanagari text-gold-champagne/80 mt-3 leading-relaxed py-0.5">
            {t.weddingOnDate}
          </p>
        </div>
      </motion.div>

      {/* EVENT TIMELINE CARDS */}
      <div className="space-y-8 md:space-y-12">
        {events.map((evt, index) => {
          const isMain = evt.isMainWedding;
          const isHaldi = evt.isHaldi;
          const isMehndi = evt.isMehndi;

          return (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative mx-auto w-full ${isMain ? 'max-w-4xl' : 'max-w-3xl'}`}
            >
              {/* ─── SPECIAL GLOW ACCENTS ─── */}
              {isHaldi && (
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-yellow-400/40 to-amber-500/30 rounded-3xl blur-2xl opacity-90 pointer-events-none" />
              )}
              {isMehndi && (
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-green-400/40 to-teal-500/30 rounded-3xl blur-2xl opacity-90 pointer-events-none" />
              )}
              {isMain && (
                <div className="absolute -inset-2 bg-gradient-to-r from-[#F4DEC3]/50 via-[#FFF4E0]/60 to-[#F4DEC3]/50 rounded-3xl blur-2xl opacity-90 pointer-events-none" />
              )}

              {/* ─── EVENT CARD CONTAINER ─── */}
              <div
                className={`relative border-2 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md overflow-hidden transition-all duration-300 ${
                  isHaldi
                    ? 'border-amber-400/90 shadow-[0_0_35px_rgba(245,158,11,0.35)] bg-gradient-to-b from-[#321703]/98 via-[#220D02]/98 to-[#150602]/98'
                    : isMehndi
                    ? 'border-emerald-400/90 shadow-[0_0_35px_rgba(16,185,129,0.35)] bg-gradient-to-b from-[#082915]/98 via-[#041E0F]/98 to-[#021208]/98'
                    : isMain
                    ? 'border-2 border-[#C6A15B] shadow-[0_12px_45px_rgba(198,161,91,0.28)] bg-gradient-to-b from-[#FDFBF7] via-[#F8F2E6] to-[#ECE0C8]'
                    : 'border-gold-antique/60 shadow-xl bg-gradient-to-b from-maroon-deep/85 via-maroon-burgundy/90 to-maroon-darkest/95'
                }`}
              >
                {/* Subtle Royal Jaali Texture for Beige Card */}
                {isMain && (
                  <div className="absolute inset-0 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.14] pointer-events-none" />
                )}

                {/* Inner Decorative Borders */}
                <div
                  className={`absolute inset-2 border rounded-2xl pointer-events-none ${
                    isHaldi
                      ? 'border-amber-300/45'
                      : isMehndi
                      ? 'border-emerald-300/45'
                      : isMain
                      ? 'border-[#C6A15B]/55'
                      : 'border-gold-champagne/30'
                  }`}
                />
                <div
                  className={`absolute inset-3.5 border rounded-xl pointer-events-none ${
                    isHaldi
                      ? 'border-yellow-500/25'
                      : isMehndi
                      ? 'border-green-500/25'
                      : isMain
                      ? 'border-[#A17A32]/25'
                      : 'border-gold-antique/15'
                  }`}
                />

                {/* Corner Ornaments */}
                <CornerOrnament
                  position="top-left"
                  className={`absolute top-2 left-2 ${
                    isHaldi
                      ? 'text-amber-300 opacity-90'
                      : isMehndi
                      ? 'text-emerald-300 opacity-90'
                      : isMain
                      ? 'text-[#C6A15B] opacity-90'
                      : 'opacity-75'
                  }`}
                  size={isMain ? 34 : 26}
                />
                <CornerOrnament
                  position="top-right"
                  className={`absolute top-2 right-2 ${
                    isHaldi
                      ? 'text-amber-300 opacity-90'
                      : isMehndi
                      ? 'text-emerald-300 opacity-90'
                      : isMain
                      ? 'text-[#C6A15B] opacity-90'
                      : 'opacity-75'
                  }`}
                  size={isMain ? 34 : 26}
                />
                <CornerOrnament
                  position="bottom-left"
                  className={`absolute bottom-2 left-2 ${
                    isHaldi
                      ? 'text-amber-300 opacity-90'
                      : isMehndi
                      ? 'text-emerald-300 opacity-90'
                      : isMain
                      ? 'text-[#C6A15B] opacity-90'
                      : 'opacity-75'
                  }`}
                  size={isMain ? 34 : 26}
                />
                <CornerOrnament
                  position="bottom-right"
                  className={`absolute bottom-2 right-2 ${
                    isHaldi
                      ? 'text-amber-300 opacity-90'
                      : isMehndi
                      ? 'text-emerald-300 opacity-90'
                      : isMain
                      ? 'text-[#C6A15B] opacity-90'
                      : 'opacity-75'
                  }`}
                  size={isMain ? 34 : 26}
                />

                {/* ─── EVENT TOP BADGE ─── */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-5 py-1.5 rounded-full border shadow-sm ${
                      isHaldi
                        ? 'border-yellow-300 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-maroon-darkest font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                        : isMehndi
                        ? 'border-emerald-300 bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 text-white font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                        : isMain
                        ? 'border-2 border-[#C6A15B] bg-gradient-to-r from-[#570D19] via-[#7B1122] to-[#570D19] text-[#FFF8E7] font-extrabold shadow-[0_2px_12px_rgba(87,13,25,0.4)]'
                        : 'border-gold-antique/50 bg-maroon-darkest/80 text-gold-champagne'
                    }`}
                  >
                    <Sparkles
                      className={`w-4 h-4 ${
                        isHaldi
                          ? 'text-maroon-darkest'
                          : isMehndi
                          ? 'text-emerald-100'
                          : isMain
                          ? 'text-[#FDE047]'
                          : 'text-gold-antique'
                      }`}
                    />
                    <span className="font-devanagari text-xs md:text-sm font-bold tracking-widest uppercase leading-normal py-0.5">
                      {isHaldi
                        ? '॥ मांगलिक हल्दी समारोह • कार्यक्रम 1 ॥'
                        : isMehndi
                        ? '॥ रंगीलो मेहंदी समारोह • कार्यक्रम 2 ॥'
                        : isMain
                        ? '॥ पावन विवाह संस्कार • मुख्य कार्यक्रम ३ ॥'
                        : `${t.karyakram} ${index + 1}`}
                    </span>
                    <Sparkles
                      className={`w-4 h-4 ${
                        isHaldi
                          ? 'text-maroon-darkest'
                          : isMehndi
                          ? 'text-emerald-100'
                          : isMain
                          ? 'text-[#FDE047]'
                          : 'text-gold-antique'
                      }`}
                    />
                  </div>
                </div>

                {/* ─── EVENT VISUAL ILLUSTRATION ─── */}
                <div className="my-3 flex justify-center">
                  {evt.svgIcon}
                </div>

                {/* ─── EVENT TITLES ─── */}
                <div className="text-center my-4">
                  <h3
                    className={`font-devanagari font-extrabold tracking-wide inline-block py-2 leading-normal ${
                      isHaldi
                        ? 'text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#FDE047] to-[#D97706] drop-shadow-[0_2px_14px_rgba(245,158,11,0.6)]'
                        : isMehndi
                        ? 'text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#F0FDF4] via-[#86EFAC] to-[#15803D] drop-shadow-[0_2px_14px_rgba(34,197,94,0.5)]'
                        : isMain
                        ? 'text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#4A0812] via-[#6E0F1F] to-[#3E040D] drop-shadow-[0_1px_3px_rgba(198,161,91,0.4)]'
                        : 'text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B]'
                    }`}
                  >
                    {evt.nameHi}
                  </h3>
                  <p
                    className={`font-cormorant text-base sm:text-lg font-bold tracking-wider mt-1 ${
                      isHaldi
                        ? 'text-amber-200'
                        : isMehndi
                        ? 'text-emerald-200'
                        : isMain
                        ? 'text-[#7D531E]'
                        : 'text-gold-champagne'
                    }`}
                  >
                    {evt.nameEn}
                  </p>

                  {/* Tagline Banner */}
                  <div className="mt-2 flex justify-center">
                    <p
                      className={`font-devanagari text-xs sm:text-sm leading-relaxed py-1.5 px-5 rounded-full border ${
                        isHaldi
                          ? 'bg-amber-950/80 border-amber-400/50 text-yellow-100 shadow-inner'
                          : isMehndi
                          ? 'bg-emerald-950/80 border-emerald-400/50 text-emerald-100 shadow-inner'
                          : isMain
                          ? 'bg-[#F2E5D0] border-[#C6A15B]/60 text-[#570D19] font-bold shadow-inner'
                          : 'border-transparent text-cream/90 italic'
                      }`}
                    >
                      {isHaldi
                        ? `🌼 ${evt.tagline} 🌼`
                        : isMehndi
                        ? `🌿 ${evt.tagline} 🌿`
                        : isMain
                        ? `🪔 ${evt.tagline} 🪔`
                        : evt.tagline}
                    </p>
                  </div>

                  {/* Sacred Vedic & Jain Wedding Rituals Highlight Row (For Vivah UX) */}
                  {isMain && (
                    <div className="mt-4 max-w-xl mx-auto grid grid-cols-3 gap-2 px-1">
                      <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/80 border border-[#C6A15B]/40 shadow-xs text-center transition-all hover:bg-white hover:border-[#C6A15B]">
                        <span className="text-lg mb-0.5">🕊️</span>
                        <span className="font-devanagari text-[11px] sm:text-xs font-bold text-[#570D19] leading-tight">
                          हस्तमिलाप
                        </span>
                        <span className="font-cormorant text-[9px] sm:text-[10px] text-[#7D531E] font-semibold">
                          Paanigrahan
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/80 border border-[#C6A15B]/40 shadow-xs text-center transition-all hover:bg-white hover:border-[#C6A15B]">
                        <span className="text-lg mb-0.5">🔥</span>
                        <span className="font-devanagari text-[11px] sm:text-xs font-bold text-[#570D19] leading-tight">
                          सप्तपदी (सात फेरे)
                        </span>
                        <span className="font-cormorant text-[9px] sm:text-[10px] text-[#7D531E] font-semibold">
                          Sacred Vows
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/80 border border-[#C6A15B]/40 shadow-xs text-center transition-all hover:bg-white hover:border-[#C6A15B]">
                        <span className="text-lg mb-0.5">👑</span>
                        <span className="font-devanagari text-[11px] sm:text-xs font-bold text-[#570D19] leading-tight">
                          सिन्दूरदान व वरमाला
                        </span>
                        <span className="font-cormorant text-[9px] sm:text-[10px] text-[#7D531E] font-semibold">
                          Varmala & Aashirwad
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`w-24 h-[1.5px] mx-auto my-4 ${
                    isHaldi
                      ? 'bg-gradient-to-r from-transparent via-amber-400 to-transparent'
                      : isMehndi
                      ? 'bg-gradient-to-r from-transparent via-emerald-400 to-transparent'
                      : isMain
                      ? 'bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent'
                      : 'bg-gradient-to-r from-transparent via-gold-antique to-transparent'
                  }`}
                />

                {/* ─── DATE & TIME GRID ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto my-4">
                  {/* Date Column */}
                  <div
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                      isHaldi
                        ? 'bg-gradient-to-br from-[#452204]/90 to-[#2A1402]/90 border-amber-400/50 shadow-md hover:border-amber-400'
                        : isMehndi
                        ? 'bg-gradient-to-br from-[#0B351C]/90 to-[#052010]/90 border-emerald-400/50 shadow-md hover:border-emerald-400'
                        : isMain
                        ? 'bg-white/90 border-[#C6A15B]/50 shadow-[0_4px_16px_rgba(198,161,91,0.18)] hover:border-[#C6A15B] hover:shadow-[0_6px_22px_rgba(198,161,91,0.28)]'
                        : 'bg-maroon-darkest/70 border-gold-antique/25'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 ${
                        isHaldi
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-maroon-darkest border-yellow-200 shadow-sm'
                          : isMehndi
                          ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-maroon-darkest border-emerald-200 shadow-sm'
                          : isMain
                          ? 'bg-gradient-to-br from-[#570D19] to-[#781223] text-[#FFF8E7] border border-[#C6A15B] shadow-sm'
                          : 'bg-maroon-deep border-gold-antique/40 text-gold-champagne'
                      }`}
                    >
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span
                        className={`block font-devanagari text-[11px] uppercase tracking-wider leading-normal ${
                          isHaldi
                            ? 'text-amber-300 font-semibold'
                            : isMehndi
                            ? 'text-emerald-300 font-semibold'
                            : isMain
                            ? 'text-[#7D531E] font-bold'
                            : 'text-gold-champagne/70'
                        }`}
                      >
                        {t.dateLabel}
                      </span>
                      <p
                        className={`font-devanagari text-sm sm:text-base font-semibold leading-normal py-0.5 ${
                          isHaldi
                            ? 'text-yellow-50'
                            : isMehndi
                            ? 'text-emerald-50'
                            : isMain
                            ? 'text-[#4A0812] font-bold'
                            : 'text-cream'
                        }`}
                      >
                        {evt.dayHi}
                      </p>
                      <p
                        className={`font-cormorant text-xs ${
                          isHaldi
                            ? 'text-amber-200'
                            : isMehndi
                            ? 'text-emerald-200'
                            : isMain
                            ? 'text-[#7D531E] font-semibold'
                            : 'text-gold-champagne/80'
                        }`}
                      >
                        {evt.dayEn}
                      </p>
                    </div>
                  </div>

                  {/* Time Column */}
                  <div
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                      isHaldi
                        ? 'bg-gradient-to-br from-[#452204]/90 to-[#2A1402]/90 border-amber-400/50 shadow-md hover:border-amber-400'
                        : isMehndi
                        ? 'bg-gradient-to-br from-[#0B351C]/90 to-[#052010]/90 border-emerald-400/50 shadow-md hover:border-emerald-400'
                        : isMain
                        ? 'bg-white/90 border-[#C6A15B]/50 shadow-[0_4px_16px_rgba(198,161,91,0.18)] hover:border-[#C6A15B] hover:shadow-[0_6px_22px_rgba(198,161,91,0.28)]'
                        : 'bg-maroon-darkest/70 border-gold-antique/25'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 ${
                        isHaldi
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-maroon-darkest border-yellow-200 shadow-sm'
                          : isMehndi
                          ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-maroon-darkest border-emerald-200 shadow-sm'
                          : isMain
                          ? 'bg-gradient-to-br from-[#570D19] to-[#781223] text-[#FFF8E7] border border-[#C6A15B] shadow-sm'
                          : 'bg-maroon-deep border-gold-antique/40 text-gold-champagne'
                      }`}
                    >
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`block font-devanagari text-[11px] uppercase tracking-wider leading-normal ${
                            isHaldi
                              ? 'text-amber-300 font-semibold'
                              : isMehndi
                              ? 'text-emerald-300 font-semibold'
                              : isMain
                              ? 'text-[#7D531E] font-bold'
                              : 'text-gold-champagne/70'
                          }`}
                        >
                          {t.timeLabel}
                        </span>
                        {isHaldi && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400/30 text-yellow-300 font-devanagari">
                            शुभ मुहूर्त
                          </span>
                        )}
                        {isMehndi && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-400/30 text-emerald-200 font-devanagari">
                            शुभ संध्या
                          </span>
                        )}
                        {isMain && (
                          <span className="text-[9px] px-2 py-0.2 rounded-full bg-[#570D19] text-[#FFF8E7] border border-[#C6A15B]/60 font-devanagari font-bold shadow-xs">
                            शुभ लग्न मुहूर्त
                          </span>
                        )}
                      </div>
                      <p
                        className={`font-devanagari text-sm sm:text-base font-bold leading-normal py-0.5 inline-block ${
                          isHaldi
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300'
                            : isMehndi
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-400'
                            : isMain
                            ? 'text-[#570D19] font-extrabold'
                            : 'text-transparent bg-clip-text bg-gradient-to-r from-gold-pale to-gold-antique'
                        }`}
                      >
                        {evt.timeHi}
                      </p>
                      <p
                        className={`font-cormorant text-xs ${
                          isHaldi
                            ? 'text-amber-200'
                            : isMehndi
                            ? 'text-emerald-200'
                            : isMain
                            ? 'text-[#7D531E] font-semibold'
                            : 'text-gold-champagne/80'
                        }`}
                      >
                        {evt.timeEn}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ─── VENUE QUICK-ACCESS BAR (For Vivah UX) ─── */}
                {isMain && (
                  <div className="mt-4 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#F6ECE0]/95 border border-[#C6A15B]/60 shadow-inner">
                    <div className="flex items-center gap-3 text-left w-full sm:w-auto">
                      <div className="p-2.5 rounded-xl bg-[#570D19] text-[#FFF8E7] border border-[#C6A15B]/50 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-devanagari text-[10px] font-bold text-[#7D531E] uppercase tracking-wider">
                          विवाह स्थल (Wedding Venue)
                        </span>
                        <p className="font-devanagari text-xs sm:text-sm font-bold text-[#4A0812] leading-tight">
                          होटल मदुरै, उदयपोल, उदयपुर (राज.)
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Hotel+Madurai+Udaipole+Udaipur+Rajasthan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#C6A15B]/70 text-[#570D19] font-devanagari text-xs font-bold hover:bg-[#570D19] hover:text-[#FFF8E7] transition-all shadow-xs"
                    >
                      <span>गूगल मैप्स पर देखें</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* ─── ACTION BUTTONS ROW ─── */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  <a
                    href={createGoogleCalendarUrl(
                      `Akshay & Vibhuti - ${evt.nameEn}`,
                      evt.id === 'wedding'
                        ? '20261125T090000'
                        : evt.id === 'haldi'
                        ? '20261124T150000'
                        : '20261124T180000',
                      `Royal Jain Wedding of Akshay & Vibhuti. Ceremony: ${evt.nameHi} (${evt.nameEn}). Venue: Hotel Madurai, Udaipur, Rajasthan.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-devanagari text-xs sm:text-sm font-bold shadow-md transition-all duration-300 leading-normal hover:scale-[1.03] active:scale-[0.98] ${
                      isHaldi
                        ? 'border-2 border-yellow-300 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-maroon-darkest shadow-[0_4px_16px_rgba(245,158,11,0.4)] hover:shadow-[0_4px_24px_rgba(245,158,11,0.7)]'
                        : isMehndi
                        ? 'border-2 border-emerald-300 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-white shadow-[0_4px_16px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_24px_rgba(16,185,129,0.7)]'
                        : isMain
                        ? 'border-2 border-[#C6A15B] bg-gradient-to-r from-[#570D19] via-[#7B1122] to-[#570D19] hover:from-[#7B1122] hover:to-[#570D19] text-[#FFFDF5] shadow-[0_4px_18px_rgba(87,13,25,0.35)] hover:shadow-[0_6px_25px_rgba(87,13,25,0.55)]'
                        : 'border border-gold-antique/60 bg-maroon-darkest/90 hover:bg-gold-antique hover:text-maroon-darkest text-gold-champagne hover:shadow-gold-sm'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="py-0.5">{t.addToCalendar}</span>
                  </a>

                  {/* Interactive Pushpa Varsha (Petal Shower) Button for Vivah */}
                  {isMain && (
                    <button
                      onClick={triggerPetalShower}
                      type="button"
                      title="शुभ विवाह पर पुष्प वर्षा करें (Shower Auspicious Petals)"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-devanagari text-xs sm:text-sm font-bold border-2 border-[#C6A15B] bg-white/95 hover:bg-[#F3E7CE] text-[#570D19] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                    >
                      <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                      <span className="py-0.5">पुष्प वर्षा करें (Bless with Flowers)</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
