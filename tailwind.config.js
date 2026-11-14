/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          darkest: '#1e0307',
          burgundy: '#380710',
          deep: '#570D19',
          wine: '#480a14',
          royal: '#5c0f1b',
        },
        gold: {
          deep: '#694F1C',
          dark: '#8B6F30',
          antique: '#C6A15B',
          rich: '#D4AF37',
          champagne: '#E6D3A3',
          light: '#F5E6BE',
          pale: '#FFF8E7',
        },
        ivory: '#FFF8E9',
        cream: '#F5EBD7',
      },
      fontFamily: {
        devanagari: ['"Noto Serif Devanagari"', '"Noto Sans Devanagari"', 'serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #FFF8E7 0%, #E6D3A3 25%, #C6A15B 50%, #8B6F30 75%, #DFBA73 100%)',
        'gold-metallic-h': 'linear-gradient(90deg, #8B6F30 0%, #C6A15B 25%, #FFF8E7 50%, #C6A15B 75%, #8B6F30 100%)',
        'gold-foil': 'linear-gradient(45deg, #9E7B35 0%, #C6A15B 25%, #FFF3D6 50%, #C6A15B 75%, #7D5D1D 100%)',
        'maroon-radial': 'radial-gradient(circle at center, #570D19 0%, #380710 60%, #1e0307 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(198, 161, 91, 0.25)',
        'gold-md': '0 0 20px rgba(198, 161, 91, 0.35)',
        'gold-lg': '0 0 35px rgba(198, 161, 91, 0.45)',
        'maroon-inner': 'inset 0 0 40px rgba(26, 3, 7, 0.8)',
      },
      animation: {
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-very-slow': 'spin 40s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.8', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

