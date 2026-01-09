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

// Page entière avec gradient continu - style Skyline Venice
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgb(107, 122, 88) 0%,
    rgb(125, 139, 106) 20%,
    rgb(180, 140, 100) 40%,
    rgb(196, 112, 77) 60%,
    rgb(180, 80, 60) 80%,
    rgb(112, 42, 64) 100%
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
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
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

const SearchSection = styled.div`
  padding: ${spacing[6]} ${spacing[8]};
  background: transparent;
  border-bottom: 1px solid rgba(247, 245, 235, 0.15);

  @media (max-width: 640px) {
    padding: ${spacing[4]} ${spacing[4]};
  }
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
  background: rgba(247, 245, 235, 0.95);
  border: 1px solid rgba(247, 245, 235, 0.3);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(247, 245, 235, 0.6);
    background: #fff;
  }

  &::placeholder {
    color: ${colors.text.muted};
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
  color: ${props => props.$active ? colors.text.light : 'rgba(247, 245, 235, 0.7)'};
  background: ${props => props.$active ? 'rgba(247, 238, 192, 0.3)' : 'transparent'};
  border: 1px solid ${props => props.$active ? 'rgba(247, 238, 192, 0.5)' : 'rgba(247, 245, 235, 0.3)'};
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.text.light};
    border-color: rgba(247, 238, 192, 0.5);
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
  color: ${props => props.$disabled ? 'rgba(247, 245, 235, 0.3)' : props.$active ? colors.text.light : 'rgba(247, 245, 235, 0.7)'};
  background: ${props => props.$active ? 'rgba(247, 238, 192, 0.3)' : 'transparent'};
  border: none;
  border-radius: 50%;
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => !props.$disabled && colors.text.light};
    background: ${props => !props.$disabled && 'rgba(247, 238, 192, 0.15)'};
  }

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    font-size: ${typography.fontSize.xs};
  }
`;

const ContentSection = styled.section`
  padding: ${spacing[12]} ${spacing[8]};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 640px) {
    padding: ${spacing[8]} ${spacing[4]};
  }
`;

const TotalCount = styled.div`
  text-align: center;
  margin-bottom: ${spacing[8]};
  font-size: ${typography.fontSize.sm};
  color: rgba(247, 245, 235, 0.6);
`;

const CategorySection = styled.div`
  margin-bottom: ${spacing[12]};
`;

const CategoryTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  margin-bottom: ${spacing[6]};
  padding-bottom: ${spacing[4]};
  border-bottom: 1px solid rgba(247, 245, 235, 0.15);
  display: flex;
  align-items: center;
  gap: ${spacing[3]};

  @media (max-width: 640px) {
    font-size: ${typography.fontSize.xl};
  }
`;

const LetterSection = styled.div`
  margin-bottom: ${spacing[12]};
`;

const LetterTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  margin-bottom: ${spacing[6]};
  padding-bottom: ${spacing[4]};
  border-bottom: 1px solid rgba(247, 245, 235, 0.15);

  @media (max-width: 640px) {
    font-size: ${typography.fontSize['2xl']};
  }
`;

// Grille d'ingrédients pour réduire le scroll
const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing[2]};

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const IngredientItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: ${spacing[3]};
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);
  text-align: left;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const IngredientImageWrapper = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.9);
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
  font-size: 20px;
  background: rgba(247, 245, 235, 0.1);
  color: rgba(247, 245, 235, 0.6);
`;

const IngredientName = styled.span`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${spacing[16]};
  color: rgba(247, 245, 235, 0.6);

  h3 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.xl};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
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
    <PageWrapper>
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
                      <IngredientItem
                        key={ingredient.nameEN}
                        onClick={() => handleIngredientClick(ingredient)}
                      >
                        <IngredientImageWithPlaceholder ingredient={ingredient} />
                        <IngredientName>{ingredient.name}</IngredientName>
                      </IngredientItem>
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
                        <IngredientItem
                          key={ingredient.nameEN}
                          onClick={() => handleIngredientClick(ingredient)}
                        >
                          <IngredientImageWithPlaceholder ingredient={ingredient} />
                          <IngredientName>{ingredient.name}</IngredientName>
                        </IngredientItem>
                      ))}
                    </IngredientsGrid>
                  </LetterSection>
                ))
            )}
          </>
        )}
      </ContentSection>
    </PageWrapper>
  );
};

export default IngredientsPage;
