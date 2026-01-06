import React, { useEffect, useRef } from 'react';
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
  grid-template-columns: 2fr 1fr;
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

const CocktailTags = styled.div`
  h4 {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.tertiary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[4]};
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: ${spacing[2]};
  }
`;

const CocktailTag = styled.span`
  display: inline-block;
  padding: ${spacing[2]} ${spacing[4]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.secondary};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.accent.primary};
    color: ${colors.accent.primary};
  }
`;

const TypesColumn = styled.div`
  h4 {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[4]};
    padding-bottom: ${spacing[2]};
    border-bottom: 1px solid ${colors.border.default};
  }
`;

const TypesList = styled.ul`
  li {
    padding: ${spacing[3]} 0;
    border-bottom: 1px solid ${colors.border.default};

    &:last-child {
      border-bottom: none;
    }

    strong {
      display: block;
      color: ${colors.text.primary};
      margin-bottom: ${spacing[1]};
    }

    span {
      font-size: ${typography.fontSize.sm};
      color: ${colors.text.tertiary};
    }
  }
`;

export const SpiriteuxPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

                <CocktailTags>
                  <h4>Cocktails emblématiques</h4>
                  <div>
                    {getCocktailsBySpirit(spirit.id).map(c => (
                      <CocktailTag key={c.id}>{c.name}</CocktailTag>
                    ))}
                  </div>
                </CocktailTags>
              </SpiritDescription>

              <TypesColumn>
                <h4>Types de {spirit.name}</h4>
                <TypesList>
                  {spirit.types.map((type, i) => (
                    <li key={i}>
                      <strong>{type.name}</strong>
                      <span>{type.origin} • {type.notes}</span>
                    </li>
                  ))}
                </TypesList>
              </TypesColumn>
            </SpiritContent>
          </SpiritContainer>
        </SpiritSection>
      ))}
    </div>
  );
};

export default SpiriteuxPage;
