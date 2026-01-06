import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';
import { ingredients as allIngredients, Ingredient, getIngredientImage, ingredientCategories } from '../data/ingredients';

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

const SuggestionsDropdown = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: ${spacing[1]};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  max-height: 300px;
  overflow-y: auto;
  display: ${props => props.$show ? 'block' : 'none'};
  z-index: 200;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;

const SuggestionItem = styled.button`
  width: 100%;
  padding: ${spacing[3]} ${spacing[4]};
  text-align: left;
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.primary};
  background: transparent;
  border: none;
  border-bottom: 1px solid ${colors.border.subtle};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  transition: background 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${colors.background.secondary};
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    background: white;
    border-radius: 4px;
  }

  .category {
    font-size: ${typography.fontSize.xs};
    color: ${colors.text.tertiary};
    margin-left: auto;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing[2]};
  margin-top: ${spacing[6]};
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  padding: ${spacing[2]} ${spacing[4]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${props => props.$active ? colors.accent.primary : colors.text.tertiary};
  background: ${props => props.$active ? colors.accent.subtle : 'transparent'};
  border: 1px solid ${props => props.$active ? colors.accent.primary : colors.border.default};
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.accent.primary};
    border-color: ${colors.accent.primary};
  }
`;

const AlphabetNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[1]};
  max-width: 800px;
  margin: ${spacing[4]} auto 0;
`;

const LetterButton = styled.button<{ $active: boolean; $hasItems: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${props => props.$active ? colors.accent.primary : props.$hasItems ? colors.text.secondary : colors.text.tertiary};
  background: ${props => props.$active ? colors.accent.subtle : 'transparent'};
  border: 1px solid ${props => props.$active ? colors.accent.primary : 'transparent'};
  opacity: ${props => props.$hasItems ? 1 : 0.4};
  cursor: ${props => props.$hasItems ? 'pointer' : 'default'};
  transition: all 0.2s ease;

  &:hover {
    ${props => props.$hasItems && `
      color: ${colors.accent.primary};
      border-color: ${colors.accent.primary};
    `}
  }
`;

const ContentSection = styled.section`
  padding: ${spacing[12]} ${spacing[8]};
  max-width: 1400px;
  margin: 0 auto;
`;

const CategorySection = styled.div`
  margin-bottom: ${spacing[12]};
`;

const CategoryTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[6]};
  padding-bottom: ${spacing[4]};
  border-bottom: 2px solid ${colors.border.default};
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
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[6]};
  padding-bottom: ${spacing[4]};
  border-bottom: 2px solid ${colors.border.default};
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
    border-color: ${colors.accent.primary};
    transform: translateX(5px);
  }
`;

const IngredientImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  background: white;
  border-radius: 4px;
`;

const IngredientName = styled.span`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.primary};
`;

const CountBadge = styled.span`
  display: inline-block;
  padding: ${spacing[2]} ${spacing[4]};
  margin-left: ${spacing[3]};
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.tertiary};
  background: ${colors.background.secondary};
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

const TotalCount = styled.div`
  text-align: center;
  margin-bottom: ${spacing[8]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.tertiary};
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

export const IngredientsPage: React.FC = () => {
  const navigate = useNavigate();
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>(allIngredients);
  const [suggestions, setSuggestions] = useState<Ingredient[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('category');
  const contentRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filtrer les ingrédients
  useEffect(() => {
    let filtered = allIngredients;

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(ing =>
        ing.name.toLowerCase().includes(lowerQuery) ||
        ing.nameEN.toLowerCase().includes(lowerQuery)
      );
      setSuggestions(filtered.slice(0, 8));
      setShowSuggestions(filtered.length > 0 && searchQuery.length >= 1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }

    if (activeLetter && viewMode === 'alphabet') {
      filtered = filtered.filter(ing =>
        ing.name.toUpperCase().startsWith(activeLetter)
      );
    }

    setFilteredIngredients(filtered);
  }, [searchQuery, activeLetter, viewMode]);

  // Fermer les suggestions en cliquant ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
  const groupedByCategory = filteredIngredients.reduce((acc, ing) => {
    if (!acc[ing.category]) acc[ing.category] = [];
    acc[ing.category].push(ing);
    return acc;
  }, {} as Record<string, Ingredient[]>);

  const lettersWithItems = new Set(allIngredients.map(ing => ing.name[0].toUpperCase()));

  const handleIngredientClick = (ingredient: Ingredient) => {
    // Utiliser le nom anglais pour l'API
    navigate(`/recettes?ingredient=${encodeURIComponent(ingredient.nameEN)}`);
  };

  const handleSelectSuggestion = (ingredient: Ingredient) => {
    setShowSuggestions(false);
    navigate(`/recettes?ingredient=${encodeURIComponent(ingredient.nameEN)}`);
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
        <SearchContainer ref={searchRef}>
          <SearchInput
            type="text"
            placeholder="Rechercher un ingrédient..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveLetter('');
            }}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          />
          <SuggestionsDropdown $show={showSuggestions}>
            {suggestions.map((ingredient, i) => (
              <SuggestionItem
                key={i}
                onClick={() => handleSelectSuggestion(ingredient)}
              >
                <img
                  src={getIngredientImage(ingredient.nameEN)}
                  alt={ingredient.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {ingredient.name}
                <span className="category">{ingredient.category}</span>
              </SuggestionItem>
            ))}
          </SuggestionsDropdown>
        </SearchContainer>

        <ViewToggle>
          <ToggleButton
            $active={viewMode === 'category'}
            onClick={() => { setViewMode('category'); setActiveLetter(''); }}
          >
            Par catégorie
          </ToggleButton>
          <ToggleButton
            $active={viewMode === 'alphabet'}
            onClick={() => setViewMode('alphabet')}
          >
            Alphabétique
          </ToggleButton>
        </ViewToggle>

        {viewMode === 'alphabet' && (
          <AlphabetNav>
            {alphabet.map(letter => (
              <LetterButton
                key={letter}
                $active={activeLetter === letter}
                $hasItems={lettersWithItems.has(letter)}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </LetterButton>
            ))}
          </AlphabetNav>
        )}
      </SearchSection>

      <ContentSection ref={contentRef}>
        <TotalCount>
          {filteredIngredients.length} ingrédient{filteredIngredients.length > 1 ? 's' : ''} trouvé{filteredIngredients.length > 1 ? 's' : ''}
        </TotalCount>

        {filteredIngredients.length === 0 ? (
          <NoResults>
            <h3>Aucun résultat</h3>
            <p>Essayez une autre recherche.</p>
          </NoResults>
        ) : viewMode === 'category' ? (
          ingredientCategories.map(category => {
            const items = groupedByCategory[category];
            if (!items || items.length === 0) return null;
            return (
              <CategorySection key={category} className="section-animate">
                <CategoryTitle>
                  <span>{categoryIcons[category]}</span>
                  {category}
                  <CountBadge>{items.length}</CountBadge>
                </CategoryTitle>
                <IngredientsGrid>
                  {items.map((ingredient, i) => (
                    <IngredientCard
                      key={i}
                      onClick={() => handleIngredientClick(ingredient)}
                    >
                      <IngredientImage
                        src={getIngredientImage(ingredient.nameEN)}
                        alt={ingredient.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <IngredientName>{ingredient.name}</IngredientName>
                    </IngredientCard>
                  ))}
                </IngredientsGrid>
              </CategorySection>
            );
          })
        ) : (
          Object.entries(groupedByLetter)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([letter, items]) => (
              <LetterSection key={letter} className="section-animate">
                <LetterTitle>
                  {letter}
                  <CountBadge>{items.length} ingrédient{items.length > 1 ? 's' : ''}</CountBadge>
                </LetterTitle>
                <IngredientsGrid>
                  {items.map((ingredient, i) => (
                    <IngredientCard
                      key={i}
                      onClick={() => handleIngredientClick(ingredient)}
                    >
                      <IngredientImage
                        src={getIngredientImage(ingredient.nameEN)}
                        alt={ingredient.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <IngredientName>{ingredient.name}</IngredientName>
                    </IngredientCard>
                  ))}
                </IngredientsGrid>
              </LetterSection>
            ))
        )}
      </ContentSection>
    </>
  );
};

export default IngredientsPage;
