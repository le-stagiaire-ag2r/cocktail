import { createGlobalStyle } from 'styled-components';
import { colors, typography } from './designTokens';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${typography.fontFamily.body};
    font-weight: ${typography.fontWeight.regular};
    line-height: ${typography.lineHeight.normal};
    color: ${colors.text.primary};
    background-color: ${colors.background.primary};
    overflow-x: hidden;
  }

  /* Custom scrollbar - style luxe */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.accent.olive};
    border-radius: 0;
    border: 2px solid ${colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.accent.primary};
  }

  /* Selection */
  ::selection {
    background: ${colors.accent.muted};
    color: ${colors.text.primary};
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Headings - Style luxe avec Cormorant Garamond */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fontFamily.display};
    font-weight: ${typography.fontWeight.light};
    line-height: ${typography.lineHeight.tight};
    letter-spacing: ${typography.letterSpacing.tight};
  }

  h1 {
    font-weight: ${typography.fontWeight.light};
  }

  /* Paragraphs */
  p {
    font-family: ${typography.fontFamily.body};
    line-height: ${typography.lineHeight.relaxed};
  }

  /* Smooth scroll for the whole document when using Lenis */
  html.lenis {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  .lenis.lenis-scrolling iframe {
    pointer-events: none;
  }

  /* Animation utilities */
  .reveal-text {
    opacity: 0;
    transform: translateY(30px);
  }

  .reveal-text.revealed {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Line decoration */
  .gold-line {
    width: 60px;
    height: 1px;
    background: ${colors.accent.primary};
  }

  /* Section spacing utilities */
  .section-padding {
    padding: 120px 0;
  }

  @media (max-width: 768px) {
    .section-padding {
      padding: 80px 0;
    }
  }
`;

export default GlobalStyles;
