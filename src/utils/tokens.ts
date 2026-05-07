import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tokens = {
  colors: {
    background: {
      primary: '#050505',
      surface: '#0B0D0E',
      card: '#0D1414',
    },
    teal: {
      DEFAULT: '#14B8A6',
      light: '#2DD4BF',
      muted: 'rgba(20,184,166,0.1)',
      glow: 'rgba(45,212,191,0.15)',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      muted: '#475569',
    },
    border: {
      default: 'rgba(20,184,166,0.1)',
      strong: 'rgba(20,184,166,0.25)',
    }
  },
  typography: {
    display: 'font-display',
    body: 'font-body',
    mono: 'font-mono',
  },
  components: {
    card: 'bg-background-card border border-border-default rounded-card shadow-card hover:border-teal/30 transition-all duration-300',
    btnPrimary: 'bg-teal hover:bg-teal-light text-background-primary font-display font-semibold px-6 py-2.5 rounded-button transition-all duration-300 shadow-teal-glow hover:scale-[1.02]',
    btnOutline: 'border border-border-strong text-teal hover:bg-teal/5 font-display font-semibold px-6 py-2.5 rounded-button transition-all duration-300',
    btnGhost: 'border border-border-default text-text-secondary hover:text-teal hover:border-teal/50 font-mono text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-button transition-all duration-300',
    badgeTeal: 'bg-teal-muted text-teal-light border border-teal/20 font-mono text-[10px] px-2 py-0.5 rounded-tag',
    techPill: 'bg-background-surface border border-border-default text-text-secondary font-mono text-[11px] px-3 py-1 rounded-tag transition-all duration-300 hover:border-teal hover:text-teal',
  }
} as const;

export const cnTokens = {
  card: tokens.components.card,
  btnPrimary: tokens.components.btnPrimary,
  btnOutline: tokens.components.btnOutline,
  btnGhost: tokens.components.btnGhost,
  badgeTeal: tokens.components.badgeTeal,
  techPill: tokens.components.techPill,
} as const;
