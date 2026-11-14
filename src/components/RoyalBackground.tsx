import React, { useMemo } from 'react';

export const RoyalBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Generate random golden dust particles for subtle floating shimmer
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-maroon-deep text-cream overflow-hidden">
      {/* 1. Base Rich Maroon & Burgundy Royal Gradient Layer */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, #681120 0%, #570D19 35%, #380710 75%, #1e0307 100%)',
        }}
      />

      {/* 2. Seamless Indian Temple Jaali & Floral Paisley Pattern Layer (SVG Data Pattern) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15 mix-blend-color-dodge"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C6A15B' fill-opacity='0.6' fill-rule='evenodd'%3E%3Cpath d='M60 0 C65 15 75 25 90 30 C75 35 65 45 60 60 C55 45 45 35 30 30 C45 25 55 15 60 0 Z M60 60 C65 75 75 85 90 90 C75 95 65 105 60 120 C55 105 45 95 30 90 C45 85 55 75 60 60 Z' /%3E%3Ccircle cx='60' cy='60' r='5' fill='%23E6D3A3' /%3E%3Ccircle cx='0' cy='0' r='6' fill='%23C6A15B' /%3E%3Ccircle cx='120' cy='0' r='6' fill='%23C6A15B' /%3E%3Ccircle cx='0' cy='120' r='6' fill='%23C6A15B' /%3E%3Ccircle cx='120' cy='120' r='6' fill='%23C6A15B' /%3E%3Cpath d='M0 60 C15 55 25 45 30 30 C35 45 45 55 60 60 C45 65 35 75 30 90 C25 75 15 65 0 60 Z' fill-opacity='0.4' /%3E%3Cpath d='M120 60 C105 55 95 45 90 30 C85 45 75 55 60 60 C75 65 85 75 90 90 C95 75 105 65 120 60 Z' fill-opacity='0.4' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
        }}
      />

      {/* 3. Handcrafted Silk / Velvet Grain Texture Layer */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.7'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* 4. Left & Right Traditional Ornate Pillar Borders (Desktop & Tablet) */}
      <div className="fixed left-0 top-0 bottom-0 w-3 md:w-6 pointer-events-none z-20 flex flex-col items-center justify-between opacity-70">
        <div className="w-full h-full border-r-2 border-gold-antique/40 bg-gradient-to-r from-maroon-darkest/80 to-transparent flex flex-col justify-around py-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-2 h-8 mx-auto border-y border-gold-antique/30 rotate-45 my-2" />
          ))}
        </div>
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-3 md:w-6 pointer-events-none z-20 flex flex-col items-center justify-between opacity-70">
        <div className="w-full h-full border-l-2 border-gold-antique/40 bg-gradient-to-l from-maroon-darkest/80 to-transparent flex flex-col justify-around py-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-2 h-8 mx-auto border-y border-gold-antique/30 rotate-45 my-2" />
          ))}
        </div>
      </div>

      {/* 5. Subtle Floating Golden Light Particles */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gold-champagne shadow-gold-sm animate-float-slow"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 6. Children / Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};
