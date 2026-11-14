import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export const triggerPetalShower = () => {
  // Rich Royal Wedding Colors: Antique Gold, Champagne, Rose Pink, Deep Crimson Maroon
  const colors = ['#C6A15B', '#E6D3A3', '#DFBA73', '#D4AF37', '#9E2A2B', '#E63946', '#FFF8E7'];

  // Left side floral burst
  confetti({
    particleCount: 45,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.65 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
    drift: 0.1,
  });

  // Right side floral burst
  confetti({
    particleCount: 45,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.65 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
    drift: -0.1,
  });

  // Gentle central flower shower from top
  setTimeout(() => {
    confetti({
      particleCount: 60,
      spread: 90,
      origin: { y: 0.1 },
      colors: colors,
      gravity: 0.6,
      scalar: 1.2,
      ticks: 200,
    });
  }, 250);
};

export const PetalShowerButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <button
      onClick={triggerPetalShower}
      title="पुष्प वर्षा करें (Shower Auspicious Petals)"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-antique/60 bg-maroon-darkest/90 hover:bg-gold-antique hover:text-maroon-darkest text-gold-champagne text-xs font-devanagari font-semibold transition-all duration-300 shadow-md hover:shadow-gold-sm ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
      <span>पुष्प वर्षा करें (Shower Petals)</span>
    </button>
  );
};
