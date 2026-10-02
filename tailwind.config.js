/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: 'var(--teal)',
          light: 'var(--teal-light)',
          dark: 'var(--teal-dark)',
        },
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
          surface: 'var(--background-surface)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          default: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        accent: {
          purple: '#7C3AED',
          'purple-light': '#9F67FF',
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
        card: '1rem',
      },
      boxShadow: {
        'teal-glow': '0 0 40px -10px rgba(52, 211, 153, 0.25)',
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
        // Escala tipográfica em rem — escala com a preferência do usuário
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        'label': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'body': ['1rem', { lineHeight: '1.75rem' }],
        // clamp() = fluido: cresce com o viewport sem cortar em telas pequenas
        'display-hero': ['clamp(3.25rem, 10vw, 7.5rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-section': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-title': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
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
