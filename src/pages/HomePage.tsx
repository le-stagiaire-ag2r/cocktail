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
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
`;

const HeroLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[4]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  color: ${colors.accent.olive};
  margin-bottom: ${spacing[8]};
  opacity: 0;

  &::before, &::after {
    content: '';
    width: 40px;
    height: 1px;
    background: ${colors.accent.primary};
  }
`;

const HeroTitle = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.hero};
  font-weight: ${typography.fontWeight.light};
  line-height: 0.95;
  color: ${colors.text.primary};
  margin-bottom: ${spacing[8]};

  .line {
    display: block;
    overflow: hidden;
  }

  .word {
    display: inline-block;
    opacity: 0;
    transform: translateY(100%);
  }

  .accent {
    color: ${colors.accent.primary};
    font-style: italic;
  }
`;

const HeroSubtitle = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  font-style: italic;
  color: ${colors.text.secondary};
  max-width: 600px;
  margin: 0 auto ${spacing[12]};
  opacity: 0;
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: ${spacing[5]} ${spacing[10]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.text.light};
  background: ${colors.text.primary};
  border: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;

  &:hover {
    background: ${colors.accent.primary};
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${spacing[12]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[3]};
  opacity: 0;

  span {
    font-size: ${typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    color: ${colors.text.tertiary};
    writing-mode: vertical-rl;
  }

  &::after {
    content: '';
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, ${colors.accent.primary}, transparent);
  }
`;

const Section = styled.section`
  padding: 140px ${spacing[8]};
  position: relative;

  @media (max-width: 768px) {
    padding: 100px ${spacing[6]};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[4]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[6]};

  &::before, &::after {
    content: '';
    width: 30px;
    height: 1px;
    background: ${colors.accent.primary};
  }
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.heroSmall};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.primary};
  line-height: 1.1;
`;

const SectionSubtitle = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.xl};
  font-style: italic;
  color: ${colors.text.secondary};
  max-width: 600px;
  margin: ${spacing[6]} auto 0;
`;

const CocktailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[4]};
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CocktailCard = styled(Link)`
  position: relative;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${colors.background.dark};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.gradient.overlay};
    z-index: 1;
    transition: opacity 0.4s ease;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover img {
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 0.7;
  }
`;

const CocktailContent = styled.div`
  position: relative;
  z-index: 2;
  padding: ${spacing[8]};
`;

const CocktailSpirit = styled.span`
  display: block;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[2]};
`;

const CocktailName = styled.h3`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  line-height: 1.2;
`;

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[3]};
  margin-top: 60px;
  padding: ${spacing[4]} ${spacing[8]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.text.primary};
  background: transparent;
  border: 1px solid ${colors.text.primary};
  transition: all 0.4s ease;

  &:hover {
    background: ${colors.text.primary};
    color: ${colors.text.light};
  }
`;

const SpiritsSection = styled(Section)`
  background: ${colors.background.dark};
`;

const SpiritsSectionTitle = styled(SectionTitle)`
  color: ${colors.text.light};
`;

const SpiritsSubtitle = styled(SectionSubtitle)`
  color: ${colors.text.lightSecondary};
`;

const SpiritsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: ${spacing[4]};
  max-width: 1200px;
  margin: 0 auto;
`;

const SpiritCard = styled(Link)`
  padding: ${spacing[10]} ${spacing[6]};
  text-align: center;
  border: 1px solid ${colors.border.light};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${colors.accent.primary};
    transform: translateY(-5px);
  }
`;

const SpiritIcon = styled.span`
  font-size: 3.5rem;
  display: block;
  margin-bottom: ${spacing[5]};
  filter: grayscale(0.3);
`;

const SpiritName = styled.h4`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[2]};
`;

const SpiritDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.lightSecondary};
`;

const CTASection = styled.section`
  padding: 160px ${spacing[8]};
  text-align: center;
  background: ${colors.background.secondary};
  position: relative;
  overflow: hidden;
`;

const CTATitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.heroSmall};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[6]};
`;

const CTAText = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.xl};
  font-style: italic;
  color: ${colors.text.secondary};
  margin-bottom: ${spacing[12]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing[16]};
  flex-wrap: wrap;
  margin-bottom: ${spacing[12]};
`;

const CTABlock = styled.div`
  text-align: center;

  h4 {
    font-size: ${typography.fontSize.xs};
    font-weight: ${typography.fontWeight.medium};
    color: ${colors.accent.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    margin-bottom: ${spacing[3]};
  }

  p {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['3xl']};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.primary};
  }

  span {
    display: block;
    font-family: ${typography.fontFamily.serif};
    font-size: ${typography.fontSize.base};
    font-style: italic;
    color: ${colors.text.tertiary};
    margin-top: ${spacing[1]};
  }
`;

export const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cocktailsRef = useRef<HTMLDivElement>(null);
  const spiritsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({ delay: 0.3 });

    // Set initial states
    gsap.set(hero.querySelectorAll('.word'), { opacity: 0, y: '100%' });
    gsap.set(hero.querySelector('.hero-label'), { opacity: 0, y: 20 });
    gsap.set(hero.querySelector('.hero-subtitle'), { opacity: 0, y: 30 });
    gsap.set(hero.querySelector('.hero-button'), { opacity: 0, y: 20 });
    gsap.set(hero.querySelector('.scroll-indicator'), { opacity: 0 });

    // Animate
    tl.to(hero.querySelector('.hero-label'), {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .to(hero.querySelectorAll('.word'), {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 1.2,
      ease: 'power3.out',
    }, '-=0.6')
    .to(hero.querySelector('.hero-subtitle'), {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8')
    .to(hero.querySelector('.hero-button'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .to(hero.querySelector('.scroll-indicator'), {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.3');

    // Cocktails section animations
    if (cocktailsRef.current) {
      gsap.fromTo(
        cocktailsRef.current.querySelectorAll('.cocktail-card'),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cocktailsRef.current,
            start: 'top bottom-=150',
          },
        }
      );
    }

    // Spirits section animations
    if (spiritsRef.current) {
      gsap.fromTo(
        spiritsRef.current.querySelectorAll('.spirit-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: spiritsRef.current,
            start: 'top bottom-=100',
          },
        }
      );
    }
  }, []);

  const signatureCocktails = cocktails.filter(c => c.isSignature || ['old-fashioned', 'negroni', 'manhattan', 'margarita', 'martini', 'mojito'].includes(c.id)).slice(0, 6);

  return (
    <>
      <Hero ref={heroRef}>
        <HeroContent>
          <HeroLabel className="hero-label">Bar à Cocktails</HeroLabel>
          <HeroTitle className="hero-title">
            <span className="line">
              <span className="word">Le Old</span>
            </span>
            <span className="line">
              <span className="word accent">Fashioned</span>
            </span>
          </HeroTitle>
          <HeroSubtitle className="hero-subtitle">
            L'art du cocktail, simplement. Découvrez nos créations
            et l'univers raffiné de la mixologie.
          </HeroSubtitle>
          <HeroButton to="/recettes" className="hero-button">
            Découvrir la carte
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </HeroButton>
        </HeroContent>
        <ScrollIndicator className="scroll-indicator">
          <span>Scroll</span>
        </ScrollIndicator>
      </Hero>

      <Section ref={cocktailsRef}>
        <SectionHeader>
          <SectionLabel>Signatures</SectionLabel>
          <SectionTitle>Nos Créations</SectionTitle>
          <SectionSubtitle>
            Une sélection de cocktails emblématiques, préparés avec passion et savoir-faire.
          </SectionSubtitle>
        </SectionHeader>

        <CocktailsGrid>
          {signatureCocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              to={`/recettes/${cocktail.id}`}
              className="cocktail-card"
            >
              <img
                src={`https://www.thecocktaildb.com/images/media/drink/${cocktail.id === 'old-fashioned' ? 'vrn24e1515598006' : cocktail.id === 'negroni' ? 'qgdu971561574065' : cocktail.id === 'manhattan' ? 'yk70e31606771240' : cocktail.id === 'margarita' ? '5noda61589575158' : cocktail.id === 'martini' ? '71t8111504346318' : 'metwgh1606770327'}.jpg`}
                alt={cocktail.name}
                loading="lazy"
              />
              <CocktailContent>
                <CocktailSpirit>{cocktail.spirit}</CocktailSpirit>
                <CocktailName>{cocktail.name}</CocktailName>
              </CocktailContent>
            </CocktailCard>
          ))}
        </CocktailsGrid>

        <div style={{ textAlign: 'center' }}>
          <ViewAllButton to="/recettes">
            Voir tous les cocktails
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </ViewAllButton>
        </div>
      </Section>

      <SpiritsSection ref={spiritsRef}>
        <SectionHeader>
          <SectionLabel style={{ color: colors.accent.primary }}>Explorer</SectionLabel>
          <SpiritsSectionTitle>Les Spiritueux</SpiritsSectionTitle>
          <SpiritsSubtitle>
            Découvrez l'univers des spiritueux et leur rôle essentiel dans l'art du cocktail.
          </SpiritsSubtitle>
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
      </SpiritsSection>

      <CTASection>
        <SectionLabel>Bienvenue</SectionLabel>
        <CTATitle>Venez Nous Découvrir</CTATitle>
        <CTAText>
          Nous serions ravis de vous accueillir et de vous faire
          découvrir notre univers de cocktails raffinés.
        </CTAText>

        <CTAInfo>
          <CTABlock>
            <h4>Horaires</h4>
            <p>Mar — Dim</p>
            <span>18h00 — 02h00</span>
          </CTABlock>
          <CTABlock>
            <h4>Réservation</h4>
            <p>+33 1 23 45 67 89</p>
            <span>Recommandée le week-end</span>
          </CTABlock>
        </CTAInfo>

        <HeroButton as={Link} to="/recettes" style={{ opacity: 1 }}>
          Découvrir la carte
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </HeroButton>
      </CTASection>
    </>
  );
};

export default HomePage;
