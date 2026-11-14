import React from 'react';

// Antique Gold Linear Gradient definition reusable in SVGs
export const GoldGradientDef: React.FC<{ id?: string }> = ({ id = 'gold-gradient' }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFF8E7" />
      <stop offset="25%" stopColor="#E6D3A3" />
      <stop offset="50%" stopColor="#C6A15B" />
      <stop offset="75%" stopColor="#8B6F30" />
      <stop offset="100%" stopColor="#DFBA73" />
    </linearGradient>
    <linearGradient id={`${id}-bright`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#8B6F30" />
      <stop offset="30%" stopColor="#C6A15B" />
      <stop offset="50%" stopColor="#FFF8E7" />
      <stop offset="70%" stopColor="#C6A15B" />
      <stop offset="100%" stopColor="#8B6F30" />
    </linearGradient>
    <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.8" />
      <stop offset="40%" stopColor="#C6A15B" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#570D19" stopOpacity="0" />
    </radialGradient>
  </defs>
);

// 1. Sacred Jain Prateek Chinha (The official Jain Symbol of non-violence, ratnatraya, and moksha)
export const JainSymbol: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 70 }) => {
  const gradId = `jain-gold-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <GoldGradientDef id={gradId} />
      {/* Crescent and Dot at Top (Siddhashila and Muktatma) */}
      <path
        d="M 32 16 C 42 22 58 22 68 16 C 63 24 37 24 32 16 Z"
        fill={`url(#${gradId})`}
      />
      <circle cx="50" cy="12" r="3" fill={`url(#${gradId})`} />

      {/* Three Auspicious Dots (Ratnatraya: Samyak Darshan, Jnana, Charitra) */}
      <circle cx="38" cy="27" r="2.5" fill={`url(#${gradId})`} />
      <circle cx="50" cy="27" r="2.5" fill={`url(#${gradId})`} />
      <circle cx="62" cy="27" r="2.5" fill={`url(#${gradId})`} />

      {/* Auspicious Swastika (Four realms of birth / Chati gati) */}
      <g transform="translate(50, 44) scale(0.85)" stroke={`url(#${gradId})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="0" y1="-10" x2="0" y2="10" />
        <line x1="-10" y1="0" x2="10" y2="0" />
        <line x1="0" y1="-10" x2="7" y2="-10" />
        <line x1="0" y1="10" x2="-7" y2="10" />
        <line x1="-10" y1="0" x2="-10" y2="-7" />
        <line x1="10" y1="0" x2="10" y2="7" />
      </g>

      {/* Hand of Ahinsa / Abhaya Mudra */}
      <path
        d="M 40 68 C 36 68 34 72 34 77 C 34 85 41 94 50 94 C 59 94 66 85 66 77 C 66 72 64 68 60 68 C 58 68 56 70 56 74 C 56 70 54 66 52 66 C 50 66 49 68 49 71 C 48 67 46 66 44 66 C 42 66 40 68 40 73 Z"
        fill={`url(#${gradId})`}
        opacity="0.95"
      />
      {/* 24-spoke Wheel of Dharma inside Hand */}
      <circle cx="50" cy="82" r="6" fill="#380710" stroke={`url(#${gradId})`} strokeWidth="1" />
      <circle cx="50" cy="82" r="2" fill={`url(#${gradId})`} />

      {/* Sacred Text Inscription under the Symbol */}
      <text
        x="50"
        y="108"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill={`url(#${gradId})`}
        fontFamily="sans-serif"
        letterSpacing="0.5"
      >
        परस्परोपग्रहो जीवानाम्
      </text>
    </svg>
  );
};

// 2. Auspicious Jain Mangal Kalash (Water Vessel of Purity and Prosperity)
export const JainKalash: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 80 }) => {
  const gradId = `kalash-gold-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <GoldGradientDef id={gradId} />
      {/* Subtle Glow */}
      <circle cx="50" cy="50" r="44" fill={`url(#${gradId}-glow)`} />
      
      {/* Coconut Tip */}
      <path d="M 50 16 L 47 25 L 53 25 Z" fill={`url(#${gradId})`} />
      {/* Coconut */}
      <circle cx="50" cy="30" r="9" fill={`url(#${gradId})`} />
      
      {/* Mango Leaves */}
      <path d="M 50 36 C 42 30 30 30 26 34 C 30 40 42 40 50 38 Z" fill={`url(#${gradId})`} />
      <path d="M 50 36 C 58 30 70 30 74 34 C 70 40 58 40 50 38 Z" fill={`url(#${gradId})`} />
      <path d="M 50 36 C 45 24 38 22 36 21 C 41 23 48 29 50 36 Z" fill={`url(#${gradId})`} />
      <path d="M 50 36 C 55 24 62 22 64 21 C 59 23 52 29 50 36 Z" fill={`url(#${gradId})`} />

      {/* Kalash Neck */}
      <path d="M 37 42 L 63 42 L 67 37 L 33 37 Z" fill={`url(#${gradId})`} stroke="#380710" strokeWidth="0.5" />
      <rect x="36" y="42" width="28" height="3" fill="#FFF8E7" rx="1.5" opacity="0.7" />

      {/* Pot Body */}
      <path
        d="M 34 45 C 24 57 28 75 50 75 C 72 75 76 57 66 45 C 62 42 58 42 50 42 C 42 42 38 42 34 45 Z"
        fill={`url(#${gradId})`}
      />

      {/* Swastika on Pot */}
      <g transform="translate(50, 60) scale(0.65)" stroke="#380710" strokeWidth="2.2" strokeLinecap="square" fill="none">
        <line x1="0" y1="-8" x2="0" y2="8" />
        <line x1="-8" y1="0" x2="8" y2="0" />
        <line x1="0" y1="-8" x2="6" y2="-8" />
        <line x1="0" y1="8" x2="-6" y2="8" />
        <line x1="-8" y1="0" x2="-8" y2="-6" />
        <line x1="8" y1="0" x2="8" y2="6" />
      </g>

      {/* Base */}
      <path d="M 36 75 L 64 75 L 61 80 L 39 80 Z" fill={`url(#${gradId})`} />
    </svg>
  );
};

// 3. Grand Palace Arch / Jain Temple Archway (Jharokha with multi-foil cusp curves)
export const PalaceArchFrame: React.FC<{
  children?: React.ReactNode;
  className?: string;
  glow?: boolean;
}> = ({ children, className = '', glow = true }) => {
  return (
    <div className={`relative p-5 md:p-10 ${className}`}>
      {/* Decorative SVG Arch Header */}
      <div className="w-full flex justify-center mb-[-2px] relative z-10">
        <svg
          viewBox="0 0 600 130"
          className="w-full max-w-[620px] h-auto text-gold-antique drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <GoldGradientDef id="arch-gold" />
          
          {/* Main Multifoil Palace Arch Outline */}
          <path
            d="M 40 130 L 40 95 C 40 95 90 90 140 70 C 180 54 220 54 250 35 C 280 15 295 4 300 0 C 305 4 320 15 350 35 C 380 54 420 54 460 70 C 510 90 560 95 560 95 L 560 130"
            stroke="url(#arch-gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Inner Parallel Arch Curve */}
          <path
            d="M 52 130 L 52 100 C 52 100 100 95 145 78 C 185 62 225 62 255 44 C 282 26 295 14 300 10 C 305 14 318 26 345 44 C 375 62 415 62 455 78 C 500 95 548 100 548 100 L 548 130"
            stroke="url(#arch-gold)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          {/* Central Royal Finial (Kalash Crest at Arch Peak) */}
          <circle cx="300" cy="3" r="4" fill="url(#arch-gold)" />
          <path d="M 296 10 C 294 5 306 5 304 10 Z" fill="url(#arch-gold)" />
          <path d="M 285 28 C 295 18 305 18 315 28 C 308 24 292 24 285 28 Z" fill="url(#arch-gold)" />

          {/* Scalloped Cusp Ornaments */}
          <circle cx="140" cy="73" r="3" fill="url(#arch-gold)" />
          <circle cx="220" cy="52" r="3" fill="url(#arch-gold)" />
          <circle cx="380" cy="52" r="3" fill="url(#arch-gold)" />
          <circle cx="460" cy="73" r="3" fill="url(#arch-gold)" />
          
          {/* Left Floral Bracket */}
          <path d="M 40 95 C 60 95 75 110 75 130" stroke="url(#arch-gold)" strokeWidth="2" fill="none" />
          <path d="M 40 108 C 52 108 62 118 62 130" stroke="url(#arch-gold)" strokeWidth="1" fill="none" />

          {/* Right Floral Bracket */}
          <path d="M 560 95 C 540 95 525 110 525 130" stroke="url(#arch-gold)" strokeWidth="2" fill="none" />
          <path d="M 560 108 C 548 108 538 118 538 130" stroke="url(#arch-gold)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Frame Container */}
      <div
        className={`relative z-10 border-x-2 border-b-2 border-gold-antique/70 bg-gradient-to-b from-maroon-deep/90 via-maroon-burgundy/95 to-maroon-darkest/95 p-6 md:p-12 shadow-2xl ${
          glow ? 'shadow-gold-md' : ''
        }`}
      >
        {/* Ornate Inner Border Line */}
        <div className="absolute inset-2 border border-gold-champagne/30 pointer-events-none" />
        <div className="absolute inset-3 border border-gold-antique/15 pointer-events-none" />

        {/* Four Corner Ornaments */}
        <CornerOrnament position="top-left" className="absolute top-2 left-2" />
        <CornerOrnament position="top-right" className="absolute top-2 right-2" />
        <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2" />
        <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2" />

        {children}
      </div>
    </div>
  );
};

// 4. Antique Gold Corner Filigree Ornament
export const CornerOrnament: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position = 'top-left', className = '', size = 32 }) => {
  const rotation = {
    'top-left': 'rotate(0deg)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      style={{ transform: rotation }}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <GoldGradientDef id="corner-gold" />
      <path
        d="M 4 4 L 4 35 C 4 25 12 18 20 18 C 28 18 35 25 35 35 L 35 4 Z"
        stroke="url(#corner-gold)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M 2 2 L 2 45 M 2 2 L 45 2"
        stroke="url(#corner-gold)"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" fill="url(#corner-gold)" />
      <circle cx="22" cy="6" r="1.5" fill="url(#corner-gold)" />
      <circle cx="6" cy="22" r="1.5" fill="url(#corner-gold)" />
    </svg>
  );
};

// 5. Antique Gold Ornamental Divider with central Lotus Medallion
export const GoldDivider: React.FC<{ className?: string; title?: string }> = ({ className = '', title }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 w-full ${className}`}>
      {/* Left Ornate Line */}
      <div className="flex-1 max-w-xs h-[2px] bg-gradient-to-r from-transparent via-gold-antique to-gold-champagne relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gold-antique" />
      </div>

      {/* Center Motif */}
      <div className="flex items-center gap-2 px-2">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <GoldGradientDef id="divider-gold" />
          <circle cx="20" cy="20" r="16" stroke="url(#divider-gold)" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="20" cy="20" r="10" stroke="url(#divider-gold)" strokeWidth="1.5" />
          {/* 8-Petal Royal Lotus */}
          <path d="M 20 8 C 22 14 22 14 20 20 C 18 14 18 14 20 8 Z" fill="url(#divider-gold)" />
          <path d="M 20 32 C 22 26 22 26 20 20 C 18 26 18 26 20 32 Z" fill="url(#divider-gold)" />
          <path d="M 8 20 C 14 22 14 22 20 20 C 14 18 14 18 8 20 Z" fill="url(#divider-gold)" />
          <path d="M 32 20 C 26 22 26 22 20 20 C 26 18 26 18 32 20 Z" fill="url(#divider-gold)" />
          <circle cx="20" cy="20" r="3" fill="#FFF8E7" />
        </svg>

        {title && (
          <span className="font-devanagari text-gold-champagne text-sm md:text-base font-semibold tracking-wider leading-normal py-0.5">
            {title}
          </span>
        )}

        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <GoldGradientDef id="divider-gold-2" />
          <circle cx="20" cy="20" r="16" stroke="url(#divider-gold-2)" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="20" cy="20" r="10" stroke="url(#divider-gold-2)" strokeWidth="1.5" />
          <path d="M 20 8 C 22 14 22 14 20 20 C 18 14 18 14 20 8 Z" fill="url(#divider-gold-2)" />
          <path d="M 20 32 C 22 26 22 26 20 20 C 18 26 18 26 20 32 Z" fill="url(#divider-gold-2)" />
          <path d="M 8 20 C 14 22 14 22 20 20 C 14 18 14 18 8 20 Z" fill="url(#divider-gold-2)" />
          <path d="M 32 20 C 26 22 26 22 20 20 C 26 18 26 18 32 20 Z" fill="url(#divider-gold-2)" />
          <circle cx="20" cy="20" r="3" fill="#FFF8E7" />
        </svg>
      </div>

      {/* Right Ornate Line */}
      <div className="flex-1 max-w-xs h-[2px] bg-gradient-to-l from-transparent via-gold-antique to-gold-champagne relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gold-antique" />
      </div>
    </div>
  );
};

// 6. Traditional Indian Brass Bell with Hanging Chain (Royal Temple Bell)
export const HangingBell: React.FC<{
  className?: string;
  chainLength?: number;
  animationClass?: string;
}> = ({ className = '', chainLength = 60, animationClass = 'bell-sway-1' }) => {
  return (
    <div className={`flex flex-col items-center pointer-events-none ${animationClass} ${className}`}>
      {/* Chain link line */}
      <div
        className="w-[2px] bg-gradient-to-b from-gold-dark via-gold-antique to-gold-champagne"
        style={{ height: `${chainLength}px` }}
      />
      {/* Little brass rings */}
      <div className="w-2 h-2 rounded-full border border-gold-antique bg-maroon-darkest -my-0.5" />
      {/* Bell body */}
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <GoldGradientDef id="bell-gold" />
        {/* Bell Top Loop */}
        <circle cx="12" cy="4" r="3" stroke="url(#bell-gold)" strokeWidth="1.5" />
        {/* Bell Dome */}
        <path
          d="M 6 12 C 6 6 18 6 18 12 L 20 20 C 21 22 22 23 23 23 L 1 23 C 2 23 3 22 4 20 Z"
          fill="url(#bell-gold)"
        />
        {/* Clapper / Tongue */}
        <circle cx="12" cy="25" r="2.5" fill="#FFF8E7" />
        <path d="M 12 21 L 12 24" stroke="url(#bell-gold)" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

// 7. Traditional Rajasthani Toran (Festive Marigold & Mango Leaves Doorway Garlands)
export const ToranOrnament: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex justify-between items-start pointer-events-none select-none ${className}`}>
      {Array.from({ length: 12 }).map((_, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center">
          {/* Toran scallop curve */}
          <svg viewBox="0 0 80 45" className="w-full text-gold-antique drop-shadow" fill="none">
            <path
              d="M 0 0 C 20 30 60 30 80 0"
              stroke="#C6A15B"
              strokeWidth="2.5"
            />
            <path
              d="M 5 0 C 22 24 58 24 75 0"
              stroke="#E6D3A3"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            {/* Hanging Marigold motif */}
            <circle cx="40" cy="22" r="4.5" fill="#C6A15B" />
            <circle cx="40" cy="22" r="2.5" fill="#FFF8E7" />
          </svg>
          {/* Subtle hanging bell on every 2nd or 3rd leaf */}
          {idx % 2 === 0 && (
            <HangingBell
              chainLength={idx % 4 === 0 ? 25 : 15}
              animationClass={idx % 4 === 0 ? 'bell-sway-1' : 'bell-sway-2'}
              className="-mt-1"
            />
          )}
        </div>
      ))}
    </div>
  );
};

// 8. Sacred Diya (Oil Lamp with Auspicious Golden Flame)
export const SacredDiya: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {/* Flickering Flame */}
      <div className="diya-flicker">
        <svg width={size * 0.4} height={size * 0.6} viewBox="0 0 20 30" fill="none">
          <defs>
            <radialGradient id="flame-grad" cx="50%" cy="80%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#FFE066" />
              <stop offset="70%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#CC3300" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M 10 0 C 13 8 18 16 18 22 C 18 27 14 30 10 30 C 6 30 2 27 2 22 C 2 16 7 8 10 0 Z"
            fill="url(#flame-grad)"
          />
        </svg>
      </div>
      {/* Brass Diya Vessel */}
      <svg width={size} height={size * 0.5} viewBox="0 0 60 30" fill="none" className="-mt-1">
        <GoldGradientDef id="diya-gold" />
        <path
          d="M 10 8 C 10 8 18 22 30 22 C 42 22 50 8 50 8 C 44 14 36 15 30 15 C 24 15 16 14 10 8 Z"
          fill="url(#diya-gold)"
        />
        {/* Diya Base */}
        <path d="M 24 22 L 36 22 L 39 27 L 21 27 Z" fill="url(#diya-gold)" />
        <ellipse cx="30" cy="8" rx="20" ry="4" fill="url(#diya-gold)" stroke="#380710" strokeWidth="0.8" />
      </svg>
    </div>
  );
};

// 9. Royal Mandap Artwork (Traditional wedding pavilion with ornate pillars and kalash roof)
export const RoyalMandapIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 240"
      className={`w-full max-w-lg mx-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GoldGradientDef id="mandap-gold" />
      
      {/* Mandap Base Platform (Vedi / Pithika) */}
      <rect x="30" y="215" width="340" height="15" fill="url(#mandap-gold)" rx="2" />
      <rect x="45" y="205" width="310" height="10" fill="url(#mandap-gold)" opacity="0.85" />

      {/* 4 Carved Royal Pillars */}
      {/* Outer Left Pillar */}
      <g>
        <rect x="65" y="70" width="14" height="135" fill="url(#mandap-gold)" />
        <path d="M 60 70 L 84 70 L 78 80 L 66 80 Z" fill="#FFF8E7" />
        <path d="M 60 205 L 84 205 L 78 195 L 66 195 Z" fill="#FFF8E7" />
        {/* Carvings */}
        <line x1="72" y1="85" x2="72" y2="190" stroke="#380710" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Inner Left Pillar */}
      <g>
        <rect x="130" y="70" width="16" height="135" fill="url(#mandap-gold)" />
        <path d="M 124 70 L 152 70 L 146 80 L 130 80 Z" fill="#FFF8E7" />
        <path d="M 124 205 L 152 205 L 146 195 L 130 195 Z" fill="#FFF8E7" />
        <line x1="138" y1="85" x2="138" y2="190" stroke="#380710" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Inner Right Pillar */}
      <g>
        <rect x="254" y="70" width="16" height="135" fill="url(#mandap-gold)" />
        <path d="M 248 70 L 276 70 L 270 80 L 254 80 Z" fill="#FFF8E7" />
        <path d="M 248 205 L 276 205 L 270 195 L 254 195 Z" fill="#FFF8E7" />
        <line x1="262" y1="85" x2="262" y2="190" stroke="#380710" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Outer Right Pillar */}
      <g>
        <rect x="321" y="70" width="14" height="135" fill="url(#mandap-gold)" />
        <path d="M 316 70 L 340 70 L 334 80 L 322 80 Z" fill="#FFF8E7" />
        <path d="M 316 205 L 340 205 L 334 195 L 322 195 Z" fill="#FFF8E7" />
        <line x1="328" y1="85" x2="328" y2="190" stroke="#380710" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Central Multifoil Arch across Pillars */}
      <path
        d="M 130 90 C 130 90 150 80 170 80 C 185 80 195 72 200 65 C 205 72 215 80 230 80 C 250 80 270 90 270 90"
        stroke="url(#mandap-gold)"
        strokeWidth="3"
        fill="none"
      />

      {/* Top Dome / Mandap Canopy */}
      <path
        d="M 50 70 L 350 70 L 330 50 C 310 50 290 35 250 25 C 220 18 205 10 200 5 C 195 10 180 18 150 25 C 110 35 90 50 70 50 Z"
        fill="url(#mandap-gold)"
        opacity="0.9"
      />
      {/* Top Kalash Finial */}
      <circle cx="200" cy="5" r="4" fill="#FFF8E7" />
      <path d="M 197 12 C 197 5 203 5 203 12 Z" fill="#FFF8E7" />

      {/* Central Sacred Havan / Vivah Mandap Heart Symbol */}
      <g transform="translate(200, 160)">
        <circle cx="0" cy="0" r="22" stroke="url(#mandap-gold)" strokeWidth="1.5" strokeDasharray="4 2" />
        <path
          d="M 0 -8 C 4 -15 14 -12 14 -4 C 14 5 0 14 0 14 C 0 14 -14 5 -14 -4 C -14 -12 -4 -15 0 -8 Z"
          fill="url(#mandap-gold)"
        />
        <text
          x="0"
          y="28"
          textAnchor="middle"
          fontSize="8"
          fill="url(#mandap-gold)"
          fontFamily="serif"
          fontWeight="bold"
        >
          शुभ विवाह
        </text>
      </g>
    </svg>
  );
};

// 10. Royal Groom Safa / Kalgi Motif (पारंपरिक राजसी साफा एवं कलगी)
export const RoyalSafaIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 56 }) => {
  const gradId = `safa-gold-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <GoldGradientDef id={gradId} />
      {/* Turban Folds / Pagri Contours */}
      <path
        d="M 22 56 C 18 48 20 38 30 32 C 40 26 58 28 64 36 C 68 42 66 52 60 56 C 48 62 32 62 22 56 Z"
        fill="#570D19"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
      />
      {/* Turban Swirls */}
      <path d="M 24 48 C 32 40 50 38 62 46" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 26 54 C 36 46 48 44 60 52" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 30 38 C 38 32 50 32 58 38" stroke={`url(#${gradId})`} strokeWidth="1.2" strokeLinecap="round" />
      {/* Royal Kalgi / Sarpech Brooch at top */}
      <path
        d="M 40 32 C 38 22 40 10 42 6 C 44 10 46 22 44 32 Z"
        fill={`url(#${gradId})`}
      />
      {/* Pearl / Gem drop on Kalgi */}
      <circle cx="42" cy="30" r="3" fill="#FFF8E7" stroke={`url(#${gradId})`} strokeWidth="1" />
      <circle cx="42" cy="18" r="2" fill="#E6D3A3" />
      <circle cx="42" cy="8" r="1.5" fill="#FFF8E7" />
      {/* Trailing Safa cloth on side */}
      <path
        d="M 58 54 C 62 58 66 68 64 74 C 62 76 60 74 60 70 C 60 66 58 58 56 56"
        fill="#380710"
        stroke={`url(#${gradId})`}
        strokeWidth="1.2"
      />
    </svg>
  );
};

// 11. Royal Bride Doli / Palanquin Motif (मांगलिक वधु पालकी एवं मयूर)
export const RoyalDoliIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 56 }) => {
  const gradId = `doli-gold-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <GoldGradientDef id={gradId} />
      {/* Palanquin Dome / Chhatri */}
      <path
        d="M 26 36 C 26 26 34 20 40 16 C 46 20 54 26 54 36 Z"
        fill="#570D19"
        stroke={`url(#${gradId})`}
        strokeWidth="1.8"
      />
      {/* Top Kalash Kalgi */}
      <circle cx="40" cy="14" r="2.5" fill={`url(#${gradId})`} />
      <path d="M 38 16 L 42 16 L 40 12 Z" fill="#FFF8E7" />
      {/* Doli Carriage Box */}
      <rect x="22" y="36" width="36" height="24" rx="4" fill="#380710" stroke={`url(#${gradId})`} strokeWidth="1.8" />
      {/* Jharokha Window with Arch Curtain */}
      <path
        d="M 32 54 L 32 44 C 32 40 48 40 48 44 L 48 54 Z"
        fill="#570D19"
        stroke={`url(#${gradId})`}
        strokeWidth="1.2"
      />
      {/* Hanging pearl tassels */}
      <circle cx="34" cy="56" r="1.2" fill="#FFF8E7" />
      <circle cx="40" cy="56" r="1.2" fill="#FFF8E7" />
      <circle cx="46" cy="56" r="1.2" fill="#FFF8E7" />
      {/* Doli Carrying Poles (Danda) */}
      <line x1="8" y1="44" x2="72" y2="44" stroke={`url(#${gradId})`} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="10" cy="44" r="2" fill="#FFF8E7" />
      <circle cx="70" cy="44" r="2" fill="#FFF8E7" />
    </svg>
  );
};

// 12. Royal Gathbandhan Knot (पवित्र गठबंधन गाँठ एवं मंगल कलश)
export const RoyalGathbandhanIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 64 }) => {
  const gradId = `gath-gold-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <GoldGradientDef id={gradId} />
      {/* Golden Radiance Ring */}
      <circle cx="40" cy="40" r="30" stroke={`url(#${gradId})`} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      {/* Sacred Knot Ribbon Loops */}
      <path
        d="M 20 48 C 24 36 32 32 40 40 C 48 48 56 44 60 32"
        stroke="#C6A15B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 20 32 C 24 44 32 48 40 40 C 48 32 56 36 60 48"
        stroke="#E6D3A3"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Central Auspicious Sacred Lotus Seal */}
      <circle cx="40" cy="40" r="14" fill="#380710" stroke={`url(#${gradId})`} strokeWidth="2" />
      <circle cx="40" cy="40" r="11" fill="none" stroke="#E6D3A3" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Center Heart / Sacred Flame */}
      <path
        d="M 40 35 C 42 32 46 32 46 36 C 46 40 40 44 40 44 C 40 44 34 40 34 36 C 34 32 38 32 40 35 Z"
        fill={`url(#${gradId})`}
      />
      {/* Tassels */}
      <line x1="38" y1="54" x2="36" y2="64" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="42" y1="54" x2="44" y2="64" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="36" cy="65" r="1.5" fill="#FFF8E7" />
      <circle cx="44" cy="65" r="1.5" fill="#FFF8E7" />
    </svg>
  );
};

