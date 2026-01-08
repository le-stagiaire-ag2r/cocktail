import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';
import { ingredients as allIngredients, Ingredient, ingredientCategories } from '../data/ingredients';

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

const PageHeader = styled.section`
  padding: 160px ${spacing[8]} 100px;
  text-align: center;
  background: ${colors.gradient.olive};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%);
    border-radius: 50%;
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
    background: ${colors.palette.cream};
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
  color: ${colors.text.lightSecondary};
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const SearchSection = styled.div`
  padding: ${spacing[6]} ${spacing[8]};
  background: ${colors.background.primary};
  border-bottom: 1px solid ${colors.border.default};
`;

const SearchContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${spacing[4]};
  font-size: ${typography.fontSize.base};
  color: ${colors.text.primary};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.accent.primary};
  }

  &::placeholder {
    color: ${colors.text.tertiary};
  }
`;

const ViewToggle = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing[2]};
  margin-top: ${spacing[4]};
`;

const ViewButton = styled.button<{ $active: boolean }>`
  padding: ${spacing[2]} ${spacing[4]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  color: ${props => props.$active ? colors.text.light : colors.text.tertiary};
  background: ${props => props.$active ? colors.palette.olive : 'transparent'};
  border: 1px solid ${props => props.$active ? colors.palette.olive : colors.border.default};
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.$active ? colors.text.light : colors.palette.olive};
    border-color: ${colors.palette.olive};
  }
`;

const AlphabetNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[1]};
  max-width: 800px;
  margin: ${spacing[6]} auto 0;
`;

const LetterButton = styled.button<{ $active: boolean; $disabled: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${props => props.$disabled ? colors.text.tertiary : props.$active ? colors.text.light : colors.text.secondary};
  background: ${props => props.$active ? colors.palette.olive : 'transparent'};
  border: none;
  border-radius: 50%;
  opacity: ${props => props.$disabled ? 0.3 : 1};
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => !props.$disabled && colors.text.light};
    background: ${props => !props.$disabled && colors.palette.oliveLight};
  }
`;

const ContentSection = styled.section`
  padding: ${spacing[12]} ${spacing[8]};
  max-width: 1400px;
  margin: 0 auto;
`;

const TotalCount = styled.div`
  text-align: center;
  margin-bottom: ${spacing[8]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.tertiary};
`;

const CategorySection = styled.div`
  margin-bottom: ${spacing[12]};
`;

const CategoryTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.palette.olive};
  margin-bottom: ${spacing[6]};
  padding-bottom: ${spacing[4]};
  border-bottom: 1px solid ${colors.border.default};
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
`;

const LetterSection = styled.div`
  margin-bottom: ${spacing[12]};
`;

const LetterTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.palette.olive};
  margin-bottom: ${spacing[6]};
  padding-bottom: ${spacing[4]};
  border-bottom: 1px solid ${colors.border.default};
`;

const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: ${spacing[3]};
`;

const IngredientCard = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: ${spacing[4]};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.palette.olive};
    background: rgba(125, 139, 106, 0.05);
    transform: translateX(5px);
  }
`;

const IngredientImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const IngredientImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: ${colors.background.secondary};
  color: ${colors.text.tertiary};
`;

const IngredientName = styled.span`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.primary};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${spacing[16]};
  color: ${colors.text.tertiary};

  h3 {
    font-size: ${typography.fontSize.xl};
    color: ${colors.text.secondary};
    margin-bottom: ${spacing[2]};
  }
`;

const categoryIcons: Record<string, string> = {
  'Spiritueux': '🥃',
  'Liqueurs': '🍸',
  'Vins & Vermouths': '🍷',
  'Jus & Agrumes': '🍋',
  'Sirops & Sucres': '🍯',
  'Sodas & Mixers': '🥤',
  'Produits laitiers': '🥛',
  'Fruits': '🍓',
  'Herbes & Épices': '🌿',
  'Garnitures': '🧊',
  'Autres': '✨',
};

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type ViewMode = 'alphabet' | 'category';

// Obtenir l'image d'un ingrédient depuis TheCocktailDB
const getIngredientImageUrl = (nameEN: string): string => {
  return `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(nameEN)}-Small.png`;
};

// Composant pour l'image d'ingrédient avec placeholder
const IngredientImageWithPlaceholder: React.FC<{ ingredient: Ingredient }> = ({ ingredient }) => {
  const [imageError, setImageError] = useState(false);
  const icon = categoryIcons[ingredient.category] || '🍹';

  if (imageError) {
    return (
      <IngredientImageWrapper>
        <ImagePlaceholder>{icon}</ImagePlaceholder>
      </IngredientImageWrapper>
    );
  }

  return (
    <IngredientImageWrapper>
      <IngredientImage
        src={getIngredientImageUrl(ingredient.nameEN)}
        alt={ingredient.name}
        onError={() => setImageError(true)}
      />
    </IngredientImageWrapper>
  );
};

export const IngredientsPage: React.FC = () => {
  const navigate = useNavigate();
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>(allIngredients);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('category');
  const contentRef = useRef<HTMLDivElement>(null);

  // Filtrer les ingrédients
  useEffect(() => {
    let filtered = allIngredients;

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(ing =>
        ing.name.toLowerCase().includes(lowerQuery) ||
        ing.nameEN.toLowerCase().includes(lowerQuery)
      );
    }

    if (activeLetter && viewMode === 'alphabet') {
      filtered = filtered.filter(ing =>
        ing.name.toUpperCase().startsWith(activeLetter)
      );
    }

    setFilteredIngredients(filtered);
  }, [searchQuery, activeLetter, viewMode]);

  // Animation
  useEffect(() => {
    if (contentRef.current && filteredIngredients.length > 0) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.section-animate'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, [filteredIngredients, viewMode]);

  // Grouper par lettre
  const groupedByLetter = filteredIngredients.reduce((acc, ing) => {
    const letter = ing.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(ing);
    return acc;
  }, {} as Record<string, Ingredient[]>);

  // Grouper par catégorie
  const groupedByCategory = ingredientCategories.reduce((acc, cat) => {
    const items = filteredIngredients.filter(ing => ing.category === cat);
    if (items.length > 0) {
      acc[cat] = items;
    }
    return acc;
  }, {} as Record<string, Ingredient[]>);

  const lettersWithItems = new Set(allIngredients.map(ing => ing.name[0].toUpperCase()));

  // Clic sur ingrédient → recherche recettes avec cet ingrédient
  const handleIngredientClick = (ingredient: Ingredient) => {
    navigate(`/recettes?ingredient=${encodeURIComponent(ingredient.nameEN)}#resultats`);
  };

  const handleLetterClick = (letter: string) => {
    if (!lettersWithItems.has(letter)) return;
    setActiveLetter(activeLetter === letter ? '' : letter);
    setSearchQuery('');
  };

  return (
    <>
      <PageHeader>
        <PageLabel>Guide Complet</PageLabel>
        <PageTitle>Ingrédients</PageTitle>
        <PageDesc>
          Explorez plus de {allIngredients.length} ingrédients utilisés dans la création de cocktails.
          Cliquez sur un ingrédient pour voir les recettes associées.
        </PageDesc>
      </PageHeader>

      <SearchSection>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Rechercher un ingrédient..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveLetter('');
            }}
          />
        </SearchContainer>

        <ViewToggle>
          <ViewButton
            $active={viewMode === 'category'}
            onClick={() => { setViewMode('category'); setActiveLetter(''); }}
          >
            Par catégorie
          </ViewButton>
          <ViewButton
            $active={viewMode === 'alphabet'}
            onClick={() => setViewMode('alphabet')}
          >
            Alphabétique
          </ViewButton>
        </ViewToggle>

        {viewMode === 'alphabet' && (
          <AlphabetNav>
            {alphabet.map(letter => (
              <LetterButton
                key={letter}
                $active={activeLetter === letter}
                $disabled={!lettersWithItems.has(letter)}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </LetterButton>
            ))}
          </AlphabetNav>
        )}
      </SearchSection>

      <ContentSection ref={contentRef}>
        {filteredIngredients.length === 0 ? (
          <NoResults>
            <h3>Aucun résultat</h3>
            <p>Essayez une autre recherche.</p>
          </NoResults>
        ) : (
          <>
            <TotalCount>
              {filteredIngredients.length} ingrédient{filteredIngredients.length > 1 ? 's' : ''}
              {activeLetter && ` commençant par "${activeLetter}"`}
              {searchQuery && ` contenant "${searchQuery}"`}
            </TotalCount>

            {viewMode === 'category' ? (
              // Vue par catégorie
              Object.entries(groupedByCategory).map(([category, ingredients]) => (
                <CategorySection key={category} className="section-animate">
                  <CategoryTitle>
                    <span>{categoryIcons[category]}</span>
                    {category}
                  </CategoryTitle>
                  <IngredientsGrid>
                    {ingredients.map((ingredient) => (
                      <IngredientCard
                        key={ingredient.nameEN}
                        onClick={() => handleIngredientClick(ingredient)}
                      >
                        <IngredientImageWithPlaceholder ingredient={ingredient} />
                        <IngredientName>{ingredient.name}</IngredientName>
                      </IngredientCard>
                    ))}
                  </IngredientsGrid>
                </CategorySection>
              ))
            ) : (
              // Vue alphabétique
              Object.entries(groupedByLetter)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([letter, ingredients]) => (
                  <LetterSection key={letter} className="section-animate">
                    <LetterTitle>{letter}</LetterTitle>
                    <IngredientsGrid>
                      {ingredients.map((ingredient) => (
                        <IngredientCard
                          key={ingredient.nameEN}
                          onClick={() => handleIngredientClick(ingredient)}
                        >
                          <IngredientImageWithPlaceholder ingredient={ingredient} />
                          <IngredientName>{ingredient.name}</IngredientName>
                        </IngredientCard>
                      ))}
                    </IngredientsGrid>
                  </LetterSection>
                ))
            )}
          </>
        )}
      </ContentSection>
    </>
  );
};

export default IngredientsPage;
