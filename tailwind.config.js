/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
        },
        teal: {
          DEFAULT: 'var(--teal)',
          light: 'var(--teal-light)',
          muted: 'var(--teal-muted)',
          glow: 'var(--teal-glow)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          default: 'var(--border-default)',
          strong: 'var(--border-strong)',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        'display-hero': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-section': ['56px', { lineHeight: '1.1', fontWeight: '600' }],
        'display-title': ['42px', { lineHeight: '1.2', fontWeight: '600' }],
        'h1': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['10px', { letterSpacing: '0.22em', fontWeight: '400' }],
        'code': ['12px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'tag': '4px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.6)',
        'teal-glow': '0 0 32px rgba(20,184,166,0.1)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(20,184,166,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.03) 1px, transparent 1px)',
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease forwards',
        'fade-in': 'fadeIn 500ms ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
