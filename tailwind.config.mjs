/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-cormorant)', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'brand-beige': '#F4F0E8',
        'brand-brown-grey': '#2B2B2B',
        'heritage-deep-green': '#1B3A34',
      },
      textShadow: {
        glow: '0 0 8px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function({ theme, addUtilities, e }) {
      const textShadows = theme('textShadow')
      const utilities = Object.keys(textShadows).map(key => {
        return {
          [`.text-shadow-${e(key)}`]: {
            textShadow: textShadows[key]
          }
        }
      })
      addUtilities(utilities, ['hover', 'group-hover'])
    })
  ],
};

export default config;
