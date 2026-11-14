import React from 'react';
import { ToranOrnament } from './OrnamentalSVGs';

export const ToranHeader: React.FC = () => {
  return (
    <header className="relative w-full z-30 pt-0">
      {/* Decorative Golden Arch Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-gold-dark via-gold-champagne to-gold-dark shadow-gold-sm" />
      {/* Traditional Marigold & Mango Leaves Garlands */}
      <ToranOrnament className="opacity-95" />
    </header>
  );
};

