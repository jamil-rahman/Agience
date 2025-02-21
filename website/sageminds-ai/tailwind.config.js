/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Inter', 'sans-serif'],
        "dm-sans": ['DM Sans', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0B1120', // Main background (darkest)
          800: '#111827', // Slightly lighter for sections
          700: '#1F2937', // Even lighter for cards/elements
        }
      },
      animation: {
        'carousel-slow': 'carousel 30s linear infinite',
        'carousel-normal': 'carousel 20s linear infinite',
        'carousel-fast': 'carousel 10s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      transitionTimingFunction: {
        'snap-ease': 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
      },
      transitionDuration: {
        '800': '800ms',
      },
    },
  },
  plugins: [],
} 