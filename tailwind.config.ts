import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope']
      },
      colors: {
        primaryDark: '#0A0A11',
        secondaryDark: '#161F37',
        tertiaryDark: '#434D67',
        primaryBrand: '#4070CD',
        secondaryBrand: '#BCE6D2',
        primaryLight: '#F3F3F3',
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
      //! Font size 12px
      'fs-12-fw-600': ['12px', { lineHeight: '1.33', fontWeight: 600 }],
      'fs-12-fw-500': ['12px', { lineHeight: 'normal', fontWeight: 500 }],
      'fs-12-fw-400': [
        '12px',
        { lineHeight: '1.33', letterSpacing: '-0.24px', fontWeight: 400 }
      ],

      //! Font size 14px
      'fs-14-fw-400-lh-1.28': ['14px', { lineHeight: '1.28', fontWeight: 400 }],
      'fs-14-fw-400-lh-1.42': ['14px', { lineHeight: '1.42', fontWeight: 400 }],
      'fs-14-fw-500-lh-1.28': ['14px', { lineHeight: '1.28', fontWeight: 500 }],
      'fs-14-fw-500-lh-1.42': ['14px', { lineHeight: '1.42', fontWeight: 500 }],
      'fs-14-fw-500-lh-1.6': ['14px', { lineHeight: '1.6', fontWeight: 500 }],
      'fs-14-fw-600': ['14px', { lineHeight: '1.28', fontWeight: 600 }],

      //! Font size 16px
      'fs-16-fw-400': [
        '16px',
        { lineHeight: 'normal', letterSpacing: '-0.32px', fontWeight: 400 }
      ],
      'fs-16-fw-500-lh-normal': [
        '16px',
        { lineHeight: 'normal', letterSpacing: '-0.32px', fontWeight: 500 }
      ],
      'fs-16-fw-500-lh-1.12': ['16px', { lineHeight: '1.12', fontWeight: 500 }],
      'fs-16-fw-500-lh-1.25': ['16px', { lineHeight: '1.25', fontWeight: 500 }],
      'fs-16-fw-600': ['16px', { lineHeight: '1.12', fontWeight: 600 }],

      //! Font size 17px
      'fs-17': ['17px', { lineHeight: '1.56', fontWeight: 400 }],

      //! Font size 18px
      'fs-18-400': [
        '18px',
        { lineHeight: '1.33', letterSpacing: '-0.36px', fontWeight: 400 }
      ],
      'fs-18-500': ['18px', { lineHeight: '1.33', fontWeight: 500 }],
      'fs-18-600': ['18px', { lineHeight: '1.22', fontWeight: 600 }],

      //! Font size 24px
      'fs-24': ['24px', { lineHeight: '1.33', fontWeight: 500 }],

      //! Font size 28px
      'fs-28-fw-500': [
        '28px',
        { lineHeight: '1.4', letterSpacing: '-0.56px', fontWeight: 500 }
      ],
      'fs-28-fw-600': [
        '28px',
        { lineHeight: '1.4', letterSpacing: '-0.56px', fontWeight: 600 }
      ],

      //! Font size 32px
      'fs-32': ['32px', { lineHeight: '1.18', fontWeight: 600 }],

      //! Font size 40px
      'fs-40': [
        '40px',
        { lineHeight: '1.1', letterSpacing: '-0.8px', fontWeight: 600 }
      ],

      //! Font size 56px
      'fs-56': ['56px', { lineHeight: '1.07', fontWeight: 600 }],

      //! Font size 64px
      'fs-64': ['64px', { lineHeight: '1.06', fontWeight: 600 }]
    }
  },
  plugins: [require('tailwindcss-text-fill')]
} satisfies Config
