import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';
import { cocktails } from '../data/cocktails';

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

const FiltersSection = styled.div`
  padding: ${spacing[8]};
  position: sticky;
  top: 70px;
  z-index: 100;
  background: ${colors.background.primary};
  border-bottom: 1px solid ${colors.border.default};
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing[3]};
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${spacing[2]} ${spacing[5]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  color: ${props => props.$active ? colors.accent.primary : colors.text.tertiary};
  background: ${props => props.$active ? colors.accent.subtle : 'transparent'};
  border: 1px solid ${props => props.$active ? colors.accent.primary : colors.border.default};
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.accent.primary};
    border-color: ${colors.accent.primary};
  }
`;

const ContentSection = styled.section`
  padding: ${spacing[12]} ${spacing[8]};
  max-width: 1400px;
  margin: 0 auto;
`;

const CocktailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${spacing[6]};
`;

const CocktailCard = styled.div`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CardHeader = styled.div`
  padding: ${spacing[6]};
  border-bottom: 1px solid ${colors.border.default};
  position: relative;
`;

const CardBadge = styled.span`
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

const CardSpirit = styled.span`
  display: block;
  font-size: ${typography.fontSize.xs};
  color: ${colors.accent.primary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  margin-bottom: ${spacing[2]};
`;

const CardTitle = styled.h3`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.primary};
`;

const CardBody = styled.div`
  padding: ${spacing[6]};
`;

const CardDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.secondary};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[4]};
`;

const CardIngredients = styled.div`
  margin-bottom: ${spacing[4]};

  h4 {
    font-size: ${typography.fontSize.xs};
    color: ${colors.text.tertiary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[2]};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: ${spacing[2]};
  }

  li {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.secondary};
    background: ${colors.background.secondary};
    padding: ${spacing[1]} ${spacing[3]};
    border-radius: 2px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]} ${spacing[6]};
  border-top: 1px solid ${colors.border.default};
  background: ${colors.background.secondary};
`;

const CardMeta = styled.span`
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
`;

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'whisky', label: 'Whisky' },
  { id: 'gin', label: 'Gin' },
  { id: 'rhum', label: 'Rhum' },
  { id: 'vodka', label: 'Vodka' },
  { id: 'tequila', label: 'Tequila' },
];

export const RecettesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredCocktails = activeFilter === 'all'
    ? cocktails
    : cocktails.filter(c => c.category === activeFilter);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll('.cocktail-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    }
  }, [activeFilter]);

  return (
    <>
      <PageHeader>
        <PageLabel>Collection</PageLabel>
        <PageTitle>Nos Recettes</PageTitle>
        <PageDesc>
          Découvrez notre collection de cocktails classiques et nos créations signatures.
          Des recettes détaillées pour reproduire vos cocktails préférés.
        </PageDesc>
      </PageHeader>

      <FiltersSection>
        <FiltersContainer>
          {categories.map(cat => (
            <FilterButton
              key={cat.id}
              $active={activeFilter === cat.id}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </FilterButton>
          ))}
        </FiltersContainer>
      </FiltersSection>

      <ContentSection>
        <CocktailsGrid ref={gridRef}>
          {filteredCocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} className="cocktail-card">
              <CardHeader>
                {cocktail.isSignature && <CardBadge>Signature</CardBadge>}
                <CardSpirit>{cocktail.spirit}</CardSpirit>
                <CardTitle>{cocktail.name}</CardTitle>
              </CardHeader>

              <CardBody>
                <CardDesc>{cocktail.description}</CardDesc>

                <CardIngredients>
                  <h4>Ingrédients</h4>
                  <ul>
                    {cocktail.ingredients.slice(0, 4).map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                    {cocktail.ingredients.length > 4 && (
                      <li>+{cocktail.ingredients.length - 4}</li>
                    )}
                  </ul>
                </CardIngredients>
              </CardBody>

              <CardFooter>
                <CardMeta>{cocktail.technique}</CardMeta>
                <CardMeta>{cocktail.glass}</CardMeta>
              </CardFooter>
            </CocktailCard>
          ))}
        </CocktailsGrid>
      </ContentSection>
    </>
  );
};

export default RecettesPage;
