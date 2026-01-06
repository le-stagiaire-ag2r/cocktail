import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section<{ $fullHeight?: boolean }>`
  position: relative;
  min-height: ${props => props.$fullHeight ? '100vh' : 'auto'};
  opacity: 0;
`;

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  fullHeight?: boolean;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  fullHeight = false,
  className,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { opacity: 0, y: 60 },
      fadeIn: { opacity: 0 },
      scaleIn: { opacity: 0, scale: 0.95 },
      slideLeft: { opacity: 0, x: -60 },
      slideRight: { opacity: 0, x: 60 },
    };

    const from = animations[animation];

    gsap.fromTo(
      section,
      from,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [animation, delay]);

  return (
    <Section ref={sectionRef} $fullHeight={fullHeight} className={className}>
      {children}
    </Section>
  );
};

// Animated text that reveals character by character
const TextContainer = styled.span`
  display: inline-block;
`;

const Char = styled.span`
  display: inline-block;
  opacity: 0;
`;

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  tag = 'span',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.char');

    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [text]);

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag className={className}>
      <TextContainer ref={containerRef}>
        {text.split('').map((char, i) => (
          <Char key={i} className="char">
            {char === ' ' ? '\u00A0' : char}
          </Char>
        ))}
      </TextContainer>
    </Tag>
  );
};

export default AnimatedSection;
