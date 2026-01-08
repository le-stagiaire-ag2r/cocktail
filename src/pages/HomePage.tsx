import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';
import { spirits } from '../data/cocktails';
import { getPopularCocktails, Cocktail } from '../services/cocktailAPI';

gsap.registerPlugin(ScrollTrigger);

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: ${spacing[8]};
  background: ${colors.gradient.sunset};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
`;


const HeroTitle = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.hero};
  font-weight: ${typography.fontWeight.light};
  line-height: 0.95;
  color: ${colors.text.light};
  margin-bottom: ${spacing[8]};

  .line {
    display: block;
    overflow: hidden;
  }

  .word {
    display: inline-block;
    animation: ${slideUp} 1s ease forwards;
    opacity: 0;
  }

  .word:nth-child(1) {
    animation-delay: 0.3s;
  }

  .accent {
    color: ${colors.palette.coral};
    font-style: italic;
    animation-delay: 0.5s;
  }
`;

const HeroSubtitle = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  font-style: italic;
  color: rgba(247, 245, 235, 0.9);
  max-width: 600px;
  margin: 0 auto ${spacing[12]};
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: 0.7s;
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
  color: ${colors.palette.burgundy};
  background: ${colors.palette.cream};
  border: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: 0.9s;
  opacity: 0;

  &:hover {
    background: ${colors.palette.coral};
    color: ${colors.text.light};
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(139, 69, 87, 0.3);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;


const Section = styled.section`
  padding: 140px ${spacing[8]};
  position: relative;
  background: ${colors.background.primary};

  @media (max-width: 768px) {
    padding: 100px ${spacing[6]};
  }
`;

// Transition fluide entre sections
const SectionTransition = styled.div<{ $from: string; $to: string }>`
  height: 150px;
  background: linear-gradient(180deg, ${props => props.$from} 0%, ${props => props.$to} 100%);
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
  color: ${colors.palette.terracotta};
  margin-bottom: ${spacing[6]};

  &::before, &::after {
    content: '';
    width: 30px;
    height: 1px;
    background: ${colors.palette.terracotta};
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

const CocktailCard = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${colors.palette.burgundy};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.gradient.cardOverlay};
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
    transform: scale(1.1);
  }

  &:hover::before {
    opacity: 0.8;
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
  color: ${colors.palette.coral};
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
  color: ${colors.palette.burgundy};
  background: transparent;
  border: 1px solid ${colors.palette.burgundy};
  transition: all 0.4s ease;

  &:hover {
    background: ${colors.palette.burgundy};
    color: ${colors.text.light};
  }
`;

const SpiritsSection = styled(Section)`
  background: ${colors.gradient.olive};
`;

const SpiritsSectionLabel = styled(SectionLabel)`
  color: ${colors.palette.cream};

  &::before, &::after {
    background: ${colors.palette.cream};
  }
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
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${colors.palette.cream};
    transform: translateY(-8px);
  }
`;

const SpiritIcon = styled.span`
  font-size: 3.5rem;
  display: block;
  margin-bottom: ${spacing[5]};
`;

const SpiritName = styled.h4`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.palette.cream};
  margin-bottom: ${spacing[2]};
`;

const SpiritDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.lightSecondary};
`;

const CTASection = styled.section`
  padding: 160px ${spacing[8]};
  text-align: center;
  background: ${colors.gradient.terracotta};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    border-radius: 50%;
  }
`;

const CTASectionLabel = styled(SectionLabel)`
  color: ${colors.palette.cream};

  &::before, &::after {
    background: ${colors.palette.cream};
  }
`;

const CTATitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.heroSmall};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  margin-bottom: ${spacing[6]};
`;

const CTAText = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.xl};
  font-style: italic;
  color: ${colors.text.lightSecondary};
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
    color: ${colors.palette.cream};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    margin-bottom: ${spacing[3]};
  }

  p {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['3xl']};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
  }

  span {
    display: block;
    font-family: ${typography.fontFamily.serif};
    font-size: ${typography.fontSize.base};
    font-style: italic;
    color: rgba(247, 245, 235, 0.7);
    margin-top: ${spacing[1]};
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: ${spacing[5]} ${spacing[10]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.palette.terracotta};
  background: ${colors.palette.cream};
  border: none;
  transition: all 0.4s ease;

  &:hover {
    background: ${colors.text.light};
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const cocktailsRef = useRef<HTMLDivElement>(null);
  const spiritsRef = useRef<HTMLDivElement>(null);
  const [signatureCocktails, setSignatureCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    // Charger les cocktails depuis l'API
    const loadCocktails = async () => {
      const popular = await getPopularCocktails();
      setSignatureCocktails(popular.slice(0, 6));
    };
    loadCocktails();
  }, []);

  useEffect(() => {
    // Cocktails section animations
    if (cocktailsRef.current && signatureCocktails.length > 0) {
      gsap.fromTo(
        cocktailsRef.current.querySelectorAll('.cocktail-card'),
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
  }, [signatureCocktails]);

  return (
    <>
      <Hero ref={heroRef}>
        <HeroContent>
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
      </Hero>

      {/* Transition Hero vers Section cocktails */}
      <SectionTransition $from={colors.palette.burgundy} $to={colors.background.primary} />

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
              onClick={() => navigate(`/cocktail/${cocktail.id}`)}
              className="cocktail-card"
            >
              <img
                src={cocktail.image + '/preview'}
                alt={cocktail.name}
                loading="lazy"
              />
              <CocktailContent>
                <CocktailSpirit>{cocktail.category}</CocktailSpirit>
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

      {/* Transition Section cocktails vers Spiritueux */}
      <SectionTransition $from={colors.background.primary} $to={colors.palette.olive} />

      <SpiritsSection ref={spiritsRef}>
        <SectionHeader>
          <SpiritsSectionLabel>Explorer</SpiritsSectionLabel>
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

      {/* Transition Spiritueux vers CTA */}
      <SectionTransition $from={colors.palette.olive} $to={colors.palette.terracotta} />

      <CTASection>
        <CTASectionLabel>Bienvenue</CTASectionLabel>
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

        <CTAButton to="/recettes">
          Découvrir la carte
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </CTAButton>
      </CTASection>
    </>
  );
};

export default HomePage;
