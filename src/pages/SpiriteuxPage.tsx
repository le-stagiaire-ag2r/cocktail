import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';
import { spirits, cocktails } from '../data/cocktails';

gsap.registerPlugin(ScrollTrigger);

const PageHeader = styled.section`
  padding: 180px ${spacing[8]} ${spacing[16]};
  text-align: center;
  background: linear-gradient(to bottom, ${colors.background.secondary}, ${colors.background.primary});
`;

const PageLabel = styled.span`
  display: inline-block;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[4]};
`;

const PageTitle = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[4]};
`;

const PageDesc = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const SpiritSection = styled.section<{ $alt?: boolean }>`
  padding: ${spacing[20]} ${spacing[8]};
  background: ${props => props.$alt ? colors.background.secondary : colors.background.primary};
`;

const SpiritContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SpiritHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${spacing[8]};
  align-items: center;
  margin-bottom: ${spacing[10]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const SpiritIcon = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: ${colors.background.card};
  border: 2px solid ${colors.accent.primary};
  border-radius: 50%;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const SpiritInfo = styled.div`
  h2 {
    font-family: ${typography.fontFamily.display};
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: ${typography.fontWeight.bold};
    color: ${colors.accent.primary};
    margin-bottom: ${spacing[2]};
  }

  > p {
    font-size: ${typography.fontSize.lg};
    color: ${colors.text.secondary};
  }
`;

const SpiritContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[10]};

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const SpiritDescription = styled.div`
  p {
    font-size: ${typography.fontSize.lg};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeight.relaxed};
    margin-bottom: ${spacing[6]};
  }
`;

const CocktailsSection = styled.div`
  margin-top: ${spacing[8]};
`;

const SectionSubtitle = styled.h4`
  font-size: ${typography.fontSize.sm};
  color: ${colors.accent.primary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  margin-bottom: ${spacing[4]};
`;

const CocktailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const CocktailItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateX(5px);
  }

  .name {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.base};
    color: ${colors.text.primary};
  }

  .technique {
    font-size: ${typography.fontSize.xs};
    color: ${colors.text.tertiary};
    text-transform: uppercase;
  }
`;

const TypesColumn = styled.div``;

const TypesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const TypeCard = styled.div`
  padding: ${spacing[4]};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  border-left: 3px solid ${colors.accent.primary};

  .name {
    font-size: ${typography.fontSize.base};
    font-weight: ${typography.fontWeight.semibold};
    color: ${colors.text.primary};
    margin-bottom: ${spacing[1]};
  }

  .origin {
    font-size: ${typography.fontSize.xs};
    color: ${colors.accent.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[2]};
  }

  .notes {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.tertiary};
  }
`;

const FactsBox = styled.div`
  margin-top: ${spacing[6]};
  padding: ${spacing[5]};
  background: ${colors.accent.subtle};
  border: 1px solid ${colors.accent.muted};

  h5 {
    font-size: ${typography.fontSize.xs};
    color: ${colors.accent.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[3]};
  }

  p {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeight.relaxed};
    margin: 0;
  }
`;

export const SpiriteuxPage: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCocktailClick = (cocktailName: string) => {
    navigate(`/recettes?search=${encodeURIComponent(cocktailName)}`);
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
    <div ref={containerRef}>
      <PageHeader>
        <PageLabel>Guide</PageLabel>
        <PageTitle>Les Spiritueux</PageTitle>
        <PageDesc>
          Découvrez l'univers des spiritueux. De leur histoire à leurs caractéristiques,
          apprenez à connaître les bases de chaque famille.
        </PageDesc>
      </PageHeader>

      {spirits.map((spirit, index) => (
        <SpiritSection
          key={spirit.id}
          id={spirit.id}
          $alt={index % 2 === 1}
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
                <TypesGrid>
                  {spirit.types.map((type, i) => (
                    <TypeCard key={i}>
                      <div className="name">{type.name}</div>
                      <div className="origin">{type.origin}</div>
                      <div className="notes">{type.notes}</div>
                    </TypeCard>
                  ))}
                </TypesGrid>

                <FactsBox>
                  <h5>Le saviez-vous ?</h5>
                  <p>{getSpiritFact(spirit.id)}</p>
                </FactsBox>
              </TypesColumn>
            </SpiritContent>
          </SpiritContainer>
        </SpiritSection>
      ))}
    </div>
  );
};

export default SpiriteuxPage;
