import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'var(--font-manrope)'
      },
      spacing: {
        lg: '18px',
        '10xl': '100px',
        '40xl': '400px'
      },
      colors: {
        black: '#0A0A11',
        'black-secondary': '#161F37',
        gray: '#434D67',
        brand: '#4070CD',
        'brand-secondary': '#BCE6D2',
        white: '#F3F3F3',
        error: '#DA1414',
        success: '#3CBC81'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        tablet: '32px',
        desktop: '100px'
      }
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px'
    },
    fontSize: {
      sm: ['12px', { lineHeight: '1.33' }],
      base: ['14px', { lineHeight: '1.28' }],
      md: ['16px', { lineHeight: '1.12' }],
      lg: ['18px', { lineHeight: '1.33' }],
      xl: ['24px', { lineHeight: '1.33', fontWeight: 500 }],
      '2xl': ['28px', { lineHeight: '1.4', letterSpacing: '-0.56px' }],
      '3xl': ['32px', { lineHeight: '1.18', fontWeight: 600 }],
      '4xl': [
        '40px',
        { lineHeight: '1.1', letterSpacing: '-0.8px', fontWeight: 600 }
      ],
      '5xl': ['56px', { lineHeight: '1.07', fontWeight: 600 }],
      '6xl': ['64px', { lineHeight: '1.06', fontWeight: 600 }]
    }
  },
  plugins: [require('tailwindcss-text-fill'), require('tailwindcss-animate')]
} satisfies Config
