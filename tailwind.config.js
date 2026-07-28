/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
          dark: '#0D9488',
        },
        background: {
          primary: '#050505',
          secondary: '#0D1117',
          tertiary: '#161B22',
          surface: '#1C2128',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: {
          default: '#21262D',
          strong: '#30363D',
        },
        bio: {
          orange: '#ea6a13',
          purple: '#250a2b',
          yellow: '#ffe3a4',
          muted:  '#a89fac',
          white:  '#f0f0f0',
          card:   'rgba(58, 26, 63, 0.72)',
          line:   'rgba(240, 240, 240, 0.14)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        'teal-glow': '0 0 40px -10px rgba(20, 184, 166, 0.3)',
      },
      backgroundImage: {
        grid: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 .5H40M.5 0V40\" fill=\"none\" stroke=\"rgba(255,255,255,0.03)\"/%3E%3C/svg%3E')",
      },
      screens: {
        xs: '475px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
      fontSize: {
        'label': ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
        'body': ['16px', { lineHeight: '28px' }],
        'display-hero': ['120px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-section': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-title': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
