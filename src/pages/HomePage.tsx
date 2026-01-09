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

// Page entière avec gradient continu - style Skyline Venice
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgb(112, 42, 64) 0%,
    rgb(180, 80, 60) 25%,
    rgb(240, 126, 78) 50%,
    rgb(125, 139, 106) 75%,
    rgb(107, 74, 94) 100%
  );
  position: relative;
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
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%);
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
    color: ${colors.palette.cream};
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
    background: rgba(255, 255, 255, 0.95);
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

  @media (max-width: 640px) {
    padding: ${spacing[4]} ${spacing[6]};
  }
`;

// Sections fluides sans fond - tout sur le gradient
const FluidSection = styled.section`
  padding: 120px ${spacing[8]};
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 80px ${spacing[6]};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 640px) {
    margin-bottom: 40px;
  }
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[4]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  color: ${colors.palette.cream};
  margin-bottom: ${spacing[6]};

  &::before, &::after {
    content: '';
    width: 30px;
    height: 1px;
    background: rgba(247, 245, 235, 0.5);
  }
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.heroSmall};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  line-height: 1.1;
`;

const SectionSubtitle = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.xl};
  font-style: italic;
  color: rgba(247, 245, 235, 0.8);
  max-width: 600px;
  margin: ${spacing[6]} auto 0;
`;

// Grid de cocktails - images avec overlay, pas de cartes
const CocktailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CocktailCard = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(112, 42, 64, 0.9) 0%, rgba(112, 42, 64, 0.3) 50%, transparent 100%);
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
    opacity: 0.7;
  }
`;

const CocktailContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${spacing[8]};
`;

const CocktailSpirit = styled.span`
  display: block;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.palette.cream};
  margin-bottom: ${spacing[2]};
  opacity: 0.8;
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
  color: ${colors.palette.cream};
  background: transparent;
  border: 1px solid rgba(247, 245, 235, 0.4);
  transition: all 0.4s ease;

  &:hover {
    background: rgba(247, 245, 235, 0.1);
    border-color: ${colors.palette.cream};
  }
`;

// Spiritueux - liste fluide avec séparateurs, pas de cartes
const SpiritsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SpiritRow = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${spacing[6]};
  padding: ${spacing[6]} 0;
  border-bottom: 1px solid rgba(247, 245, 235, 0.15);
  transition: all 0.3s ease;

  &:first-child {
    border-top: 1px solid rgba(247, 245, 235, 0.15);
  }

  &:hover {
    padding-left: ${spacing[4]};
    background: rgba(255, 255, 255, 0.05);
    margin: 0 -${spacing[4]};
    padding-right: ${spacing[4]};
  }

  @media (max-width: 640px) {
    gap: ${spacing[3]};
    padding: ${spacing[4]} 0;
  }
`;

const SpiritIcon = styled.span`
  font-size: 2.5rem;
  width: 60px;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1.8rem;
    width: 45px;
  }
`;

const SpiritInfo = styled.div`
  flex: 1;
`;

const SpiritName = styled.h4`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  margin-bottom: ${spacing[1]};

  @media (max-width: 640px) {
    font-size: ${typography.fontSize.lg};
  }
`;

const SpiritDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: rgba(247, 245, 235, 0.6);

  @media (max-width: 640px) {
    font-size: ${typography.fontSize.xs};
  }
`;

const SpiritArrow = styled.span`
  font-size: ${typography.fontSize.xl};
  color: rgba(247, 245, 235, 0.4);
  transition: all 0.3s ease;

  ${SpiritRow}:hover & {
    color: ${colors.palette.cream};
    transform: translateX(5px);
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 160px ${spacing[8]};
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%);
    border-radius: 50%;
  }

  @media (max-width: 640px) {
    padding: 80px ${spacing[4]};
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
  color: rgba(247, 245, 235, 0.8);
  margin-bottom: ${spacing[12]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// Séparateur décoratif
const Divider = styled.div`
  width: 60px;
  height: 1px;
  background: rgba(247, 245, 235, 0.4);
  margin: 0 auto ${spacing[8]};
`;

const CTAInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing[16]};
  flex-wrap: wrap;
  margin-bottom: ${spacing[12]};

  @media (max-width: 640px) {
    gap: ${spacing[8]};
    flex-direction: column;
    align-items: center;
  }
`;

const CTABlock = styled.div`
  text-align: center;

  h4 {
    font-size: ${typography.fontSize.xs};
    font-weight: ${typography.fontWeight.medium};
    color: rgba(247, 245, 235, 0.6);
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
    color: rgba(247, 245, 235, 0.5);
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
  color: ${colors.palette.burgundy};
  background: ${colors.palette.cream};
  border: none;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.95);
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

  @media (max-width: 640px) {
    padding: ${spacing[4]} ${spacing[6]};
  }
`;

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const cocktailsRef = useRef<HTMLDivElement>(null);
  const spiritsRef = useRef<HTMLDivElement>(null);
  const [signatureCocktails, setSignatureCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const loadCocktails = async () => {
      const popular = await getPopularCocktails();
      setSignatureCocktails(popular.slice(0, 6));
    };
    loadCocktails();
  }, []);

  useEffect(() => {
    if (cocktailsRef.current && signatureCocktails.length > 0) {
      gsap.fromTo(
        cocktailsRef.current.querySelectorAll('.cocktail-card'),
        { opacity: 0, y: 80 },
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

    if (spiritsRef.current) {
      gsap.fromTo(
        spiritsRef.current.querySelectorAll('.spirit-row'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
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
    <PageWrapper>
      <Hero>
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

      <FluidSection ref={cocktailsRef}>
        <SectionHeader>
          <SectionLabel>Signatures</SectionLabel>
          <SectionTitle>Nos Créations</SectionTitle>
          <SectionSubtitle>
            Une sélection de cocktails emblématiques, préparés avec passion.
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
      </FluidSection>

      <FluidSection ref={spiritsRef}>
        <SectionHeader>
          <SectionLabel>Explorer</SectionLabel>
          <SectionTitle>Les Spiritueux</SectionTitle>
          <SectionSubtitle>
            Découvrez l'univers des spiritueux et leur rôle essentiel.
          </SectionSubtitle>
        </SectionHeader>

        <SpiritsContainer>
          {spirits.map((spirit) => (
            <SpiritRow
              key={spirit.id}
              to={`/spiritueux#${spirit.id}`}
              className="spirit-row"
            >
              <SpiritIcon>{spirit.icon}</SpiritIcon>
              <SpiritInfo>
                <SpiritName>{spirit.name}</SpiritName>
                <SpiritDesc>{spirit.description}</SpiritDesc>
              </SpiritInfo>
              <SpiritArrow>→</SpiritArrow>
            </SpiritRow>
          ))}
        </SpiritsContainer>
      </FluidSection>

      <CTASection>
        <SectionLabel>Bienvenue</SectionLabel>
        <CTATitle>Venez Nous Découvrir</CTATitle>
        <Divider />
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
    </PageWrapper>
  );
};

export default HomePage;
