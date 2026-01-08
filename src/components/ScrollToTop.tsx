import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from './ui/SmoothScroll';

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  const { lenis } = useLenis();

  useEffect(() => {
    // Petit délai pour laisser la page se charger
    const timer = setTimeout(() => {
      if (hash) {
        // Si hash présent, scroll vers l'élément
        const element = document.querySelector(hash);
        if (element) {
          if (lenis) {
            lenis.scrollTo(element as HTMLElement, { offset: -100 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          return;
        }
      }

      // Sinon scroll en haut
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash, lenis]);

  return null;
};

export default ScrollToTop;
