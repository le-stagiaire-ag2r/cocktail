import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';
import { cocktails, spirits } from '../data/cocktails';

gsap.registerPlugin(ScrollTrigger);

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: ${spacing[8]};
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroLabel = styled.span`
  display: inline-block;
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[6]};
  opacity: 0;
`;

const HeroTitle = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: clamp(3rem, 12vw, 10rem);
  font-weight: ${typography.fontWeight.bold};
  line-height: 0.9;
  color: ${colors.text.primary};
  margin-bottom: ${spacing[6]};

  span {
    display: block;
    opacity: 0;
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${typography.fontSize.xl};
  color: ${colors.text.secondary};
  max-width: 500px;
  margin: 0 auto ${spacing[10]};
  opacity: 0;
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: ${spacing[4]} ${spacing[10]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  color: ${colors.background.primary};
  background: ${colors.accent.primary};
  border: 2px solid ${colors.accent.primary};
  transition: all 0.3s ease;
  opacity: 0;

  &:hover {
    background: transparent;
    color: ${colors.accent.primary};
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${spacing[10]};
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, ${colors.accent.primary}, transparent);
`;

const Section = styled.section`
  padding: ${spacing[24]} ${spacing[8]};
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing[16]};
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[4]};
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text.primary};
`;

const CocktailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[6]};
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CocktailCard = styled(Link)`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  padding: ${spacing[8]};
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.gradient.radial};
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateY(-5px);

    &::before {
      opacity: 1;
    }
  }
`;

const CocktailBadge = styled.span`
  position: absolute;
  top: ${spacing[4]};
  right: ${spacing[4]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  color: ${colors.background.primary};
  background: ${colors.accent.primary};
  padding: ${spacing[1]} ${spacing[3]};
`;

const CocktailName = styled.h3`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[2]};
  position: relative;
`;

const CocktailSpirit = styled.span`
  font-size: ${typography.fontSize.sm};
  color: ${colors.accent.primary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
`;

const CocktailDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.secondary};
  line-height: ${typography.lineHeight.relaxed};
  margin-top: ${spacing[4]};
  position: relative;
`;

const SpiritsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${spacing[4]};
  max-width: 1200px;
  margin: 0 auto;
`;

const SpiritCard = styled(Link)`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  padding: ${spacing[8]};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateY(-3px);
  }
`;

const SpiritIcon = styled.span`
  font-size: 3rem;
  display: block;
  margin-bottom: ${spacing[4]};
`;

const SpiritName = styled.h4`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.xl};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[2]};
`;

const SpiritDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.tertiary};
`;

const CTASection = styled.section`
  padding: ${spacing[24]} ${spacing[8]};
  text-align: center;
  background: linear-gradient(to bottom, ${colors.background.primary}, ${colors.background.secondary});
`;

const CTATitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${colors.text.primary};
  margin-bottom: ${spacing[4]};
`;

const CTAText = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.text.secondary};
  margin-bottom: ${spacing[8]};
`;

const CTAInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing[12]};
  flex-wrap: wrap;
  margin-bottom: ${spacing[8]};
`;

const CTABlock = styled.div`
  text-align: center;

  h4 {
    font-size: ${typography.fontSize.sm};
    color: ${colors.accent.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[2]};
  }

  p {
    font-size: ${typography.fontSize['2xl']};
    font-family: ${typography.fontFamily.display};
    color: ${colors.text.primary};
  }
`;

export const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cocktailsRef = useRef<HTMLDivElement>(null);
  const spiritsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(hero.querySelector('.hero-label'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .to(hero.querySelectorAll('.hero-title span'), {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.4')
    .to(hero.querySelector('.hero-subtitle'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .to(hero.querySelector('.hero-button'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4')
    .to(hero.querySelector('.scroll-indicator'), {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.2');

    // Animate title letters with initial state
    gsap.set(hero.querySelectorAll('.hero-title span'), { opacity: 0, y: 50 });
    gsap.set(hero.querySelector('.hero-label'), { opacity: 0, y: 20 });
    gsap.set(hero.querySelector('.hero-subtitle'), { opacity: 0, y: 30 });
    gsap.set(hero.querySelector('.hero-button'), { opacity: 0, y: 20 });
    gsap.set(hero.querySelector('.scroll-indicator'), { opacity: 0 });

    // Cocktails section animations
    if (cocktailsRef.current) {
      gsap.fromTo(
        cocktailsRef.current.querySelectorAll('.cocktail-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cocktailsRef.current,
            start: 'top bottom-=100',
          },
        }
      );
    }

    // Spirits section animations
    if (spiritsRef.current) {
      gsap.fromTo(
        spiritsRef.current.querySelectorAll('.spirit-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: spiritsRef.current,
            start: 'top bottom-=100',
          },
        }
      );
    }
  }, []);

  const signatureCocktails = cocktails.filter(c => c.isSignature || ['old-fashioned', 'negroni', 'manhattan', 'margarita'].includes(c.id));

  return (
    <>
      <Hero ref={heroRef}>
        <HeroContent>
          <HeroLabel className="hero-label">Bar à Cocktails</HeroLabel>
          <HeroTitle className="hero-title">
            <span>Le Old</span>
            <span>Fashioned</span>
          </HeroTitle>
          <HeroSubtitle className="hero-subtitle">
            L'art du cocktail, simplement. Découvrez nos créations et l'univers de la mixologie.
          </HeroSubtitle>
          <HeroButton to="/recettes" className="hero-button">
            Découvrir nos cocktails
          </HeroButton>
        </HeroContent>
        <ScrollIndicator className="scroll-indicator" />
      </Hero>

      <Section ref={cocktailsRef}>
        <SectionHeader>
          <SectionLabel>Signatures</SectionLabel>
          <SectionTitle>Nos Créations</SectionTitle>
        </SectionHeader>

        <CocktailsGrid>
          {signatureCocktails.slice(0, 4).map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              to={`/recettes/${cocktail.id}`}
              className="cocktail-card"
            >
              {cocktail.isSignature && <CocktailBadge>Signature</CocktailBadge>}
              <CocktailSpirit>{cocktail.spirit}</CocktailSpirit>
              <CocktailName>{cocktail.name}</CocktailName>
              <CocktailDesc>{cocktail.description}</CocktailDesc>
            </CocktailCard>
          ))}
        </CocktailsGrid>
      </Section>

      <Section ref={spiritsRef} style={{ background: colors.background.secondary }}>
        <SectionHeader>
          <SectionLabel>Explorer</SectionLabel>
          <SectionTitle>Les Spiritueux</SectionTitle>
        </SectionHeader>

        <SpiritsGrid>
          {spirits.map((spirit) => (
            <SpiritCard
              key={spirit.id}
              to={`/spiritueux#${spirit.id}`}
              className="spirit-card"
            >
              <SpiritIcon>{spirit.icon}</SpiritIcon>
              <SpiritName>{spirit.name}</SpiritName>
              <SpiritDesc>{spirit.description}</SpiritDesc>
            </SpiritCard>
          ))}
        </SpiritsGrid>
      </Section>

      <CTASection>
        <CTATitle>Venez nous rendre visite</CTATitle>
        <CTAText>Nous serions ravis de vous accueillir et de vous faire découvrir notre univers.</CTAText>

        <CTAInfo>
          <CTABlock>
            <h4>Horaires</h4>
            <p>Mar - Dim</p>
            <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary }}>18h00 - 02h00</p>
          </CTABlock>
          <CTABlock>
            <h4>Adresse</h4>
            <p>À définir</p>
            <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary }}>Paris, France</p>
          </CTABlock>
        </CTAInfo>

        <HeroButton as={Link} to="/recettes" style={{ opacity: 1 }}>
          Découvrir la carte
        </HeroButton>
      </CTASection>
    </>
  );
};

export default HomePage;
