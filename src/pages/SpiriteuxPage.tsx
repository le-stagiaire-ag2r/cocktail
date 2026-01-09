import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';
import { spirits, cocktails } from '../data/cocktails';

gsap.registerPlugin(ScrollTrigger);

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
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
    rgb(180, 120, 90) 0%,
    rgb(196, 112, 77) 15%,
    rgb(112, 42, 64) 40%,
    rgb(107, 74, 94) 60%,
    rgb(125, 139, 106) 80%,
    rgb(107, 122, 88) 100%
  );
  overflow-x: hidden;
`;

const PageHeader = styled.section`
  padding: 160px ${spacing[8]} 100px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%);
    border-radius: 50%;
  }

  @media (max-width: 640px) {
    padding: 120px ${spacing[4]} 60px;
  }
`;

const PageLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[4]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  color: ${colors.palette.cream};
  margin-bottom: ${spacing[6]};
  animation: ${fadeInUp} 0.6s ease forwards;

  &::before, &::after {
    content: '';
    width: 30px;
    height: 1px;
    background: rgba(247, 245, 235, 0.5);
  }
`;

const PageTitle = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.heroSmall};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  margin-bottom: ${spacing[6]};
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.1s;
  opacity: 0;
`;

const PageDesc = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.xl};
  font-style: italic;
  color: rgba(247, 245, 235, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: ${typography.lineHeight.relaxed};
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

// Section spiritueux sans background - fluide
const SpiritSection = styled.section`
  padding: ${spacing[16]} ${spacing[8]};
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    padding: ${spacing[10]} ${spacing[4]};
  }
`;

const SpiritContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SpiritHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[6]};
  margin-bottom: ${spacing[8]};
  padding-bottom: ${spacing[6]};
  border-bottom: 1px solid rgba(247, 245, 235, 0.15);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 640px) {
    gap: ${spacing[3]};
    margin-bottom: ${spacing[6]};
  }
`;

const SpiritIcon = styled.span`
  font-size: 4rem;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

const SpiritInfo = styled.div`
  h2 {
    font-family: ${typography.fontFamily.display};
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
    margin-bottom: ${spacing[2]};
  }

  > p {
    font-size: ${typography.fontSize.lg};
    color: rgba(247, 245, 235, 0.7);
  }
`;

const SpiritContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${spacing[8]};
  }
`;

const SpiritDescription = styled.div`
  p {
    font-size: ${typography.fontSize.lg};
    color: rgba(247, 245, 235, 0.8);
    line-height: ${typography.lineHeight.relaxed};
    margin-bottom: ${spacing[6]};
  }
`;

const CocktailsSection = styled.div`
  margin-top: ${spacing[8]};
`;

const SectionSubtitle = styled.h4`
  font-size: ${typography.fontSize.xs};
  color: ${colors.palette.cream};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  margin-bottom: ${spacing[4]};
  opacity: 0.7;
`;

// Liste de cocktails fluide sans cartes
const CocktailsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CocktailItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]} 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    padding-left: ${spacing[3]};
    background: rgba(255, 255, 255, 0.03);
    margin: 0 -${spacing[3]};
    padding-right: ${spacing[3]};
  }

  .name {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.base};
    color: ${colors.text.light};
  }

  .technique {
    font-size: ${typography.fontSize.xs};
    color: rgba(247, 245, 235, 0.5);
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
  }
`;

const TypesColumn = styled.div``;

// Types affichés en liste fluide
const TypesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypeRow = styled.div`
  padding: ${spacing[4]} 0;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);

  &:last-child {
    border-bottom: none;
  }

  .name {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
    margin-bottom: ${spacing[1]};
  }

  .origin {
    font-size: ${typography.fontSize.xs};
    color: ${colors.palette.coral};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[1]};
  }

  .notes {
    font-size: ${typography.fontSize.sm};
    color: rgba(247, 245, 235, 0.6);
    line-height: ${typography.lineHeight.relaxed};
  }
`;

// Facts sans box - juste texte stylé
const FactsSection = styled.div`
  margin-top: ${spacing[8]};
  padding-top: ${spacing[6]};
  border-top: 1px solid rgba(247, 245, 235, 0.15);

  h5 {
    font-size: ${typography.fontSize.xs};
    color: ${colors.palette.coral};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.ultrawide};
    margin-bottom: ${spacing[3]};
  }

  p {
    font-family: ${typography.fontFamily.serif};
    font-size: ${typography.fontSize.base};
    font-style: italic;
    color: rgba(247, 245, 235, 0.7);
    line-height: ${typography.lineHeight.relaxed};
    margin: 0;
  }
`;

export const SpiriteuxPage: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCocktailClick = (cocktailName: string) => {
    navigate(`/recettes?search=${encodeURIComponent(cocktailName)}#resultats`);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('.spirit-section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const getCocktailsBySpirit = (spiritId: string) => {
    return cocktails.filter(c => c.category === spiritId).slice(0, 5);
  };

  const getSpiritFact = (spiritId: string): string => {
    const facts: Record<string, string> = {
      whisky: "Le whisky le plus cher jamais vendu est une bouteille de Macallan 1926 à 1,9 million de dollars. Le bourbon doit être produit aux États-Unis et contenir au moins 51% de maïs.",
      gin: "Le gin tonic a été inventé par les soldats britanniques en Inde pour masquer le goût amer de la quinine, utilisée contre le paludisme. London Dry ne signifie pas que le gin est fait à Londres.",
      rhum: "Le rhum agricole AOC Martinique est le seul spiritueux français avec une appellation d'origine contrôlée. La marine britannique donnait une ration quotidienne de rhum jusqu'en 1970.",
      vodka: "La vodka peut être distillée à partir de presque n'importe quoi : pommes de terre, raisins, betteraves, et même du lait. En Russie, le mot 'vodka' signifie 'petite eau'.",
      tequila: "La vraie tequila ne doit être produite que dans 5 régions du Mexique, principalement Jalisco. Le mezcal avec un ver est un mythe marketing - les vraies bouteilles n'en contiennent pas.",
    };
    return facts[spiritId] || "Chaque spiritueux a son histoire unique et ses traditions de fabrication qui lui confèrent son caractère distinctif.";
  };

  return (
    <PageWrapper ref={containerRef}>
      <PageHeader>
        <PageLabel>Guide</PageLabel>
        <PageTitle>Les Spiritueux</PageTitle>
        <PageDesc>
          Découvrez l'univers des spiritueux. De leur histoire à leurs caractéristiques,
          apprenez à connaître les bases de chaque famille.
        </PageDesc>
      </PageHeader>

      {spirits.map((spirit) => (
        <SpiritSection
          key={spirit.id}
          id={spirit.id}
          className="spirit-section"
        >
          <SpiritContainer>
            <SpiritHeader>
              <SpiritIcon>{spirit.icon}</SpiritIcon>
              <SpiritInfo>
                <h2>{spirit.name}</h2>
                <p>{spirit.description}</p>
              </SpiritInfo>
            </SpiritHeader>

            <SpiritContent>
              <SpiritDescription>
                <p>{spirit.fullDescription}</p>

                <CocktailsSection>
                  <SectionSubtitle>Cocktails emblématiques</SectionSubtitle>
                  <CocktailsList>
                    {getCocktailsBySpirit(spirit.id).map(c => (
                      <CocktailItem key={c.id} onClick={() => handleCocktailClick(c.name)}>
                        <span className="name">{c.name}</span>
                        <span className="technique">{c.technique}</span>
                      </CocktailItem>
                    ))}
                  </CocktailsList>
                </CocktailsSection>
              </SpiritDescription>

              <TypesColumn>
                <SectionSubtitle>Types de {spirit.name}</SectionSubtitle>
                <TypesList>
                  {spirit.types.map((type, i) => (
                    <TypeRow key={i}>
                      <div className="name">{type.name}</div>
                      <div className="origin">{type.origin}</div>
                      <div className="notes">{type.notes}</div>
                    </TypeRow>
                  ))}
                </TypesList>

                <FactsSection>
                  <h5>Le saviez-vous ?</h5>
                  <p>{getSpiritFact(spirit.id)}</p>
                </FactsSection>
              </TypesColumn>
            </SpiritContent>
          </SpiritContainer>
        </SpiritSection>
      ))}
    </PageWrapper>
  );
};

export default SpiriteuxPage;
