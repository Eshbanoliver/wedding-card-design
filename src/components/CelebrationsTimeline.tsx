import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, GoldDivider, RoyalMandapIllustration } from './OrnamentalSVGs';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CelebrationsTimeline: React.FC = () => {
  const { t } = useLanguage();

  // Countdown to Royal Wedding: 25 November 2026, 07:00 AM IST
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-11-25T07:00:00+05:30').getTime();

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
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto filter drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#380710" stroke="#C6A15B" strokeWidth="2" />
          <ellipse cx="50" cy="62" rx="26" ry="12" fill="#D99B26" />
          <path d="M 24 62 C 24 74 76 74 76 62 Z" fill="#B37D14" />
          <ellipse cx="50" cy="56" rx="28" ry="8" fill="#F4C430" stroke="#C6A15B" strokeWidth="1.5" />
          <circle cx="42" cy="54" r="5" fill="#FFA500" />
          <circle cx="58" cy="54" r="5" fill="#FF8C00" />
          <circle cx="50" cy="52" r="6" fill="#FFD700" />
          <path d="M 45 42 L 55 42 L 52 32 L 48 32 Z" fill="#C6A15B" />
          <circle cx="50" cy="28" r="6" fill="#E6D3A3" />
        </svg>
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
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto filter drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#380710" stroke="#C6A15B" strokeWidth="2" />
          <path
            d="M 50 22 C 34 22 28 38 34 54 C 38 64 50 72 58 72 C 68 72 74 62 70 48 C 66 36 58 32 58 24 C 58 18 54 18 50 22 Z"
            fill="none"
            stroke="#C6A15B"
            strokeWidth="2.5"
          />
          <circle cx="48" cy="46" r="6" fill="#C6A15B" />
          <circle cx="56" cy="54" r="3" fill="#E6D3A3" />
          <circle cx="40" cy="56" r="3" fill="#E6D3A3" />
          <circle cx="50" cy="24" r="1.5" fill="#FFF8E7" />
          <circle cx="36" cy="36" r="2" fill="#C6A15B" />
          <circle cx="64" cy="42" r="2" fill="#C6A15B" />
        </svg>
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
      svgIcon: (
        <div className="w-full max-w-[280px] mx-auto py-1">
          <RoyalMandapIllustration className="w-full h-auto" />
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
          return (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative mx-auto w-full ${isMain ? 'max-w-4xl' : 'max-w-3xl'}`}
            >
              {/* Special Glow for Main Wedding */}
              {isMain && (
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-antique/20 via-gold-champagne/25 to-gold-antique/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />
              )}

              {/* Event Card Container */}
              <div
                className={`relative border-2 ${
                  isMain
                    ? 'border-gold-antique shadow-gold-lg bg-gradient-to-b from-maroon-deep via-maroon-burgundy to-maroon-darkest'
                    : 'border-gold-antique/60 shadow-xl bg-gradient-to-b from-maroon-deep/85 via-maroon-burgundy/90 to-maroon-darkest/95'
                } rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md overflow-hidden`}
              >
                {/* Inner Gold Borders */}
                <div className="absolute inset-2 border border-gold-champagne/30 rounded-2xl pointer-events-none" />
                <div className="absolute inset-3 border border-gold-antique/15 rounded-xl pointer-events-none" />

                {/* Corner Ornaments */}
                <CornerOrnament position="top-left" className="absolute top-2 left-2 opacity-75" size={isMain ? 34 : 26} />
                <CornerOrnament position="top-right" className="absolute top-2 right-2 opacity-75" size={isMain ? 34 : 26} />
                <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-75" size={isMain ? 34 : 26} />
                <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-75" size={isMain ? 34 : 26} />

                {/* Event Top Badge */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-5 py-1.5 rounded-full border ${
                      isMain
                        ? 'border-gold-champagne bg-maroon-deep text-gold-pale shadow-gold-sm'
                        : 'border-gold-antique/50 bg-maroon-darkest/80 text-gold-champagne'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-gold-antique" />
                    <span className="font-devanagari text-xs md:text-sm font-bold tracking-widest uppercase leading-normal py-0.5">
                      {t.karyakram} {index + 1}
                    </span>
                  </div>
                </div>

                {/* Event Visual Illustration */}
                <div className="my-3 flex justify-center">
                  {evt.svgIcon}
                </div>

                {/* Event Titles */}
                <div className="text-center my-4">
                  <h3
                    className={`font-devanagari font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#EADBBA] to-[#C6A15B] tracking-wide inline-block py-2 leading-normal ${
                      isMain ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-2xl sm:text-3xl md:text-4xl'
                    }`}
                  >
                    {evt.nameHi}
                  </h3>
                  <p className="font-cormorant text-base sm:text-lg text-gold-champagne font-medium tracking-wider mt-1">
                    {evt.nameEn}
                  </p>
                  <p className="font-devanagari text-xs sm:text-sm text-cream/90 italic mt-1 leading-relaxed py-0.5">
                    {evt.tagline}
                  </p>
                </div>

                <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mx-auto my-4" />

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto my-4">
                  
                  {/* Date Column */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-maroon-darkest/70 border border-gold-antique/25">
                    <div className="p-2 rounded-lg bg-maroon-deep border border-gold-antique/40 text-gold-champagne shrink-0">
                      <Calendar className="w-5 h-5 text-gold-antique" />
                    </div>
                    <div>
                      <span className="block font-devanagari text-[11px] uppercase tracking-wider text-gold-champagne/70 leading-normal">
                        {t.dateLabel}
                      </span>
                      <p className="font-devanagari text-sm sm:text-base font-semibold text-cream leading-normal py-0.5">
                        {evt.dayHi}
                      </p>
                      <p className="font-cormorant text-xs text-gold-champagne/80">
                        {evt.dayEn}
                      </p>
                    </div>
                  </div>

                  {/* Time Column */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-maroon-darkest/70 border border-gold-antique/25">
                    <div className="p-2 rounded-lg bg-maroon-deep border border-gold-antique/40 text-gold-champagne shrink-0">
                      <Clock className="w-5 h-5 text-gold-antique" />
                    </div>
                    <div>
                      <span className="block font-devanagari text-[11px] uppercase tracking-wider text-gold-champagne/70 leading-normal">
                        {t.timeLabel}
                      </span>
                      <p className="font-devanagari text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-pale to-gold-antique leading-normal py-0.5 inline-block">
                        {evt.timeHi}
                      </p>
                      <p className="font-cormorant text-xs text-gold-champagne/80">
                        {evt.timeEn}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Add to Calendar Button */}
                <div className="flex justify-center mt-6">
                  <a
                    href={createGoogleCalendarUrl(
                      `Akshay & Vibhuti - ${evt.nameEn}`,
                      evt.id === 'wedding' ? '20261125T070000' : evt.id === 'haldi' ? '20261124T100000' : '20261124T160000',
                      `Royal Jain Wedding of Akshay & Vibhuti. Ceremony: ${evt.nameHi} (${evt.nameEn}). Venue: Hotel Madurai, Udaipur, Rajasthan.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 hover:bg-gold-antique hover:text-maroon-darkest text-gold-champagne transition-all duration-300 font-devanagari text-xs sm:text-sm font-semibold shadow-sm hover:shadow-gold-sm leading-normal"
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="py-0.5">{t.addToCalendar}</span>
                  </a>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
