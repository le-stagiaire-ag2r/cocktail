// Design Tokens - Le Old Fashioned
// Style luxe inspiré de Skyline Bar Venice

export const colors = {
  // Backgrounds - Palette crème luxe
  background: {
    primary: '#f7f5eb',
    secondary: '#efe9db',
    tertiary: '#e8e2d2',
    card: '#ffffff',
    cardHover: '#f9f7f0',
    dark: '#1a1815',
    darkSecondary: '#252220',
  },

  // Text
  text: {
    primary: '#1a1815',
    secondary: '#5a5652',
    tertiary: '#8a8580',
    muted: '#b0aba5',
    light: '#f7f5eb',
    lightSecondary: '#d0ccc5',
  },

  // Accent - Or luxe
  accent: {
    primary: '#cc9900',
    secondary: '#daa520',
    muted: 'rgba(204, 153, 0, 0.2)',
    subtle: 'rgba(204, 153, 0, 0.08)',
    olive: '#69673a',
    terracotta: '#933a21',
  },

  // Borders
  border: {
    default: 'rgba(26, 24, 21, 0.1)',
    hover: 'rgba(26, 24, 21, 0.2)',
    active: '#cc9900',
    subtle: 'rgba(26, 24, 21, 0.05)',
    light: 'rgba(247, 245, 235, 0.2)',
  },

  // Status
  status: {
    success: '#4a7c59',
    error: '#a63d2f',
    warning: '#c9a227',
  },

  // Gradients
  gradient: {
    gold: 'linear-gradient(135deg, #cc9900 0%, #daa520 50%, #cc9900 100%)',
    cream: 'linear-gradient(180deg, #f7f5eb 0%, #efe9db 100%)',
    dark: 'linear-gradient(180deg, #1a1815 0%, #252220 100%)',
    overlay: 'linear-gradient(to top, rgba(26, 24, 21, 0.95) 0%, rgba(26, 24, 21, 0.6) 50%, transparent 100%)',
    overlayLight: 'linear-gradient(to top, rgba(247, 245, 235, 0.95) 0%, rgba(247, 245, 235, 0) 100%)',
    heroOverlay: 'linear-gradient(135deg, rgba(147, 58, 33, 0.8) 0%, rgba(105, 103, 58, 0.6) 50%, rgba(204, 153, 0, 0.4) 100%)',
  },
};

export const typography = {
  fontFamily: {
    display: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    serif: "'Cormorant Garamond', Georgia, serif",
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
    '10xl': '10rem',
    hero: 'clamp(4rem, 12vw, 9rem)',
    heroSmall: 'clamp(2.5rem, 8vw, 5rem)',
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
    ultrawide: '0.2em',
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
  elegant: '0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  smooth: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(26, 24, 21, 0.05)',
  md: '0 4px 6px -1px rgba(26, 24, 21, 0.08)',
  lg: '0 10px 15px -3px rgba(26, 24, 21, 0.1)',
  xl: '0 20px 25px -5px rgba(26, 24, 21, 0.1)',
  '2xl': '0 25px 50px -12px rgba(26, 24, 21, 0.2)',
  gold: '0 0 40px rgba(204, 153, 0, 0.2)',
  glow: '0 0 60px rgba(204, 153, 0, 0.15)',
  elegant: '0 20px 60px rgba(26, 24, 21, 0.15)',
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
