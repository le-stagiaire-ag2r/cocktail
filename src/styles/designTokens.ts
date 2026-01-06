// Design Tokens - Le Old Fashioned
// Inspired by classic cocktail bars with a modern touch

export const colors = {
  // Backgrounds
  background: {
    primary: '#0a0a0a',
    secondary: '#111111',
    tertiary: '#1a1a1a',
    card: '#141414',
    cardHover: '#1f1f1f',
  },

  // Text
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
    tertiary: '#666666',
    muted: '#444444',
  },

  // Accent - Gold/Amber (whisky inspired)
  accent: {
    primary: '#c9a227',
    secondary: '#e6c355',
    muted: 'rgba(201, 162, 39, 0.3)',
    subtle: 'rgba(201, 162, 39, 0.1)',
  },

  // Borders
  border: {
    default: '#222222',
    hover: '#333333',
    active: '#c9a227',
  },

  // Status
  status: {
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
  },

  // Gradients
  gradient: {
    gold: 'linear-gradient(135deg, #c9a227 0%, #e6c355 50%, #c9a227 100%)',
    dark: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
    radial: 'radial-gradient(ellipse at center, rgba(201, 162, 39, 0.15) 0%, transparent 70%)',
  },
};

export const typography = {
  fontFamily: {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const transitions = {
  fast: '0.15s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
  slower: '0.8s ease',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  gold: '0 0 40px rgba(201, 162, 39, 0.3)',
  glow: '0 0 60px rgba(201, 162, 39, 0.2)',
};

export const zIndex = {
  behind: -1,
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
};
