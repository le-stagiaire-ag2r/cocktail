import React, { useEffect, useRef, createContext, useContext, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Sync Lenis avec ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Fonction RAF pour Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Synchroniser GSAP avec le scroller
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.defaults({ scroller: document.documentElement });

    // Refresh ScrollTrigger après initialisation
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance }}>
      {children}
    </LenisContext.Provider>
  );
};

// Animation hooks
export const useScrollAnimation = () => {
  const fadeInUp = (element: HTMLElement, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const fadeIn = (element: HTMLElement, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const scaleIn = (element: HTMLElement, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const parallax = (element: HTMLElement, speed = 0.5) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const movement = (self.progress - 0.5) * 100 * speed;
        gsap.set(element, { y: movement });
      },
    });
  };

  const staggerChildren = (container: HTMLElement, childSelector: string, delay = 0.1) => {
    const children = container.querySelectorAll(childSelector);
    gsap.fromTo(
      children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  return { fadeInUp, fadeIn, scaleIn, parallax, staggerChildren };
};

export default SmoothScroll;
