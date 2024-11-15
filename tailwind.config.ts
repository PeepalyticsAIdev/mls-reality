import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#1E90FF',
          dark: '#1C3D5A',
        },
        secondary: {
          green: '#28A745',
          red: '#DC3545',
        },
        neutral: {
          darkGray: '#343A40',
          mediumGray: '#6C757D',
          lightGray: '#F8F9FA',
        },
        accent: {
          orange: '#FD7E14',
          gray: '#D5D7DA',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        lora: 'Lora',
      },
      fontSize: {
        display: ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h1: ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['30px', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '1.2', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        4: '4px',
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        48: '48px',
      },
      screens: {
        xs: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1400px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
