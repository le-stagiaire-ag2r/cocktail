// Design Tokens - Le Old Fashioned
// Style luxe inspiré de Skyline Bar Venice - Couleurs chaudes et vivantes

export const colors = {
  // Backgrounds - Palette chaude sans noir
  background: {
    primary: '#f7f5eb',
    secondary: '#efe9db',
    tertiary: '#e8e2d2',
    card: '#ffffff',
    cardHover: '#faf8f2',
    warm: '#d4c4b0',
    dark: '#5A3D47',  // Burgundy foncé chaleureux pour le footer
  },

  // Couleurs principales - Palette chaude
  palette: {
    burgundy: '#8B4557',
    burgundyDark: '#6B3A4A',
    burgundyLight: '#A65D6F',
    terracotta: '#C4704D',
    terracottaLight: '#D4896A',
    coral: '#E8A88C',
    olive: '#7D8B6A',
    oliveLight: '#9AAA82',
    cream: '#F7F5EB',
    sand: '#E5DED0',
    gold: '#C9A227',
    goldLight: '#DEBC4F',
    plum: '#6B4A5E',
    rose: '#B87D8B',
  },

  // Gradients - Dégradés élégants
  gradient: {
    burgundy: 'linear-gradient(135deg, #8B4557 0%, #6B3A4A 100%)',
    burgundyReverse: 'linear-gradient(135deg, #6B3A4A 0%, #8B4557 100%)',
    terracotta: 'linear-gradient(135deg, #C4704D 0%, #A65D6F 100%)',
    warm: 'linear-gradient(135deg, #C4704D 0%, #8B4557 50%, #6B4A5E 100%)',
    sunset: 'linear-gradient(135deg, #E8A88C 0%, #C4704D 50%, #8B4557 100%)',
    olive: 'linear-gradient(135deg, #7D8B6A 0%, #6B7A58 100%)',
    cream: 'linear-gradient(180deg, #f7f5eb 0%, #efe9db 100%)',
    warmOverlay: 'linear-gradient(to right, rgba(107, 58, 74, 0.95) 0%, rgba(107, 58, 74, 0.7) 50%, transparent 100%)',
    cardOverlay: 'linear-gradient(to top, rgba(107, 58, 74, 0.9) 0%, rgba(139, 69, 87, 0.4) 50%, transparent 100%)',
    pageTransition: 'linear-gradient(90deg, #8B4557 0%, #C4704D 50%, #7D8B6A 100%)',
  },

  // Text
  text: {
    primary: '#3D2E2E',
    secondary: '#5A4A4A',
    tertiary: '#7A6A6A',
    muted: '#9A8A8A',
    light: '#F7F5EB',
    lightSecondary: 'rgba(247, 245, 235, 0.8)',
    onDark: '#F7F5EB',
    onWarm: '#F7F5EB',
  },

  // Accent
  accent: {
    primary: '#C9A227',
    secondary: '#DEBC4F',
    muted: 'rgba(201, 162, 39, 0.2)',
    subtle: 'rgba(201, 162, 39, 0.08)',
    olive: '#7D8B6A',
    terracotta: '#C4704D',
  },

  // Borders
  border: {
    default: 'rgba(61, 46, 46, 0.1)',
    hover: 'rgba(61, 46, 46, 0.2)',
    active: '#C9A227',
    subtle: 'rgba(61, 46, 46, 0.05)',
    light: 'rgba(247, 245, 235, 0.2)',
    warm: 'rgba(139, 69, 87, 0.3)',
  },

  // Status
  status: {
    success: '#7D8B6A',
    error: '#A65D6F',
    warning: '#C9A227',
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
  morph: '0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  slideIn: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  reveal: '1s cubic-bezier(0.77, 0, 0.175, 1)',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(61, 46, 46, 0.05)',
  md: '0 4px 6px -1px rgba(61, 46, 46, 0.08)',
  lg: '0 10px 15px -3px rgba(61, 46, 46, 0.1)',
  xl: '0 20px 25px -5px rgba(61, 46, 46, 0.1)',
  '2xl': '0 25px 50px -12px rgba(61, 46, 46, 0.2)',
  warm: '0 20px 60px rgba(139, 69, 87, 0.2)',
  gold: '0 0 40px rgba(201, 162, 39, 0.2)',
  glow: '0 0 60px rgba(201, 162, 39, 0.15)',
  elegant: '0 20px 60px rgba(61, 46, 46, 0.15)',
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
