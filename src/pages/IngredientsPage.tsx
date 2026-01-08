import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';
import { getIngredients } from '../services/cocktailAPI';
import { translateIngredient } from '../utils/translations';

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
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${props => props.$disabled ? colors.text.tertiary : props.$active ? colors.accent.primary : colors.text.secondary};
  background: ${props => props.$active ? colors.accent.subtle : 'transparent'};
  border: 1px solid ${props => props.$active ? colors.accent.primary : 'transparent'};
  opacity: ${props => props.$disabled ? 0.3 : 1};
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => !props.$disabled && colors.accent.primary};
    border-color: ${props => !props.$disabled && colors.accent.primary};
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

const LoadingContainer = styled.div`
  text-align: center;
  padding: ${spacing[16]};
  color: ${colors.text.tertiary};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto ${spacing[4]};
  border: 3px solid ${colors.border.default};
  border-top-color: ${colors.accent.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
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

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Obtenir l'image d'un ingrédient depuis TheCocktailDB
const getIngredientImageUrl = (nameEN: string): string => {
  return `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(nameEN)}-Small.png`;
};

// Composant pour l'image d'ingrédient avec placeholder
const IngredientImageWithPlaceholder: React.FC<{ nameEN: string }> = ({ nameEN }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <IngredientImageWrapper>
        <ImagePlaceholder>🍹</ImagePlaceholder>
      </IngredientImageWrapper>
    );
  }

  return (
    <IngredientImageWrapper>
      <IngredientImage
        src={getIngredientImageUrl(nameEN)}
        alt={nameEN}
        onError={() => setImageError(true)}
      />
    </IngredientImageWrapper>
  );
};

export const IngredientsPage: React.FC = () => {
  const navigate = useNavigate();
  const [allIngredients, setAllIngredients] = useState<string[]>([]);
  const [filteredIngredients, setFilteredIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Charger les ingrédients depuis l'API
  useEffect(() => {
    const loadIngredients = async () => {
      setLoading(true);
      const ingredients = await getIngredients();
      // Trier alphabétiquement
      const sorted = ingredients.sort((a, b) => a.localeCompare(b));
      setAllIngredients(sorted);
      setFilteredIngredients(sorted);
      setLoading(false);
    };
    loadIngredients();
  }, []);

  // Filtrer les ingrédients
  useEffect(() => {
    let filtered = allIngredients;

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(ing =>
        ing.toLowerCase().includes(lowerQuery) ||
        translateIngredient(ing).toLowerCase().includes(lowerQuery)
      );
    }

    if (activeLetter) {
      filtered = filtered.filter(ing =>
        ing.toUpperCase().startsWith(activeLetter)
      );
    }

    setFilteredIngredients(filtered);
  }, [searchQuery, activeLetter, allIngredients]);

  // Animation
  useEffect(() => {
    if (contentRef.current && filteredIngredients.length > 0 && !loading) {
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
  }, [filteredIngredients, loading]);

  // Grouper par lettre
  const groupedByLetter = filteredIngredients.reduce((acc, ing) => {
    const letter = ing[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(ing);
    return acc;
  }, {} as Record<string, string[]>);

  const lettersWithItems = new Set(allIngredients.map(ing => ing[0].toUpperCase()));

  const handleIngredientClick = (ingredientEN: string) => {
    navigate(`/recettes?ingredient=${encodeURIComponent(ingredientEN)}`);
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
          Explorez les ingrédients utilisés dans la création de cocktails.
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
      </SearchSection>

      <ContentSection ref={contentRef}>
        {loading ? (
          <LoadingContainer>
            <Spinner />
            <p>Chargement des ingrédients...</p>
          </LoadingContainer>
        ) : filteredIngredients.length === 0 ? (
          <NoResults>
            <h3>Aucun résultat</h3>
            <p>Essayez une autre recherche ou une autre lettre.</p>
          </NoResults>
        ) : (
          <>
            <TotalCount>
              {filteredIngredients.length} ingrédient{filteredIngredients.length > 1 ? 's' : ''}
              {activeLetter && ` commençant par "${activeLetter}"`}
              {searchQuery && ` contenant "${searchQuery}"`}
            </TotalCount>

            {Object.entries(groupedByLetter)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([letter, ingredients]) => (
                <LetterSection key={letter} className="section-animate">
                  <LetterTitle>{letter}</LetterTitle>
                  <IngredientsGrid>
                    {ingredients.map((ingredientEN) => (
                      <IngredientCard
                        key={ingredientEN}
                        onClick={() => handleIngredientClick(ingredientEN)}
                      >
                        <IngredientImageWithPlaceholder nameEN={ingredientEN} />
                        <IngredientName>{translateIngredient(ingredientEN)}</IngredientName>
                      </IngredientCard>
                    ))}
                  </IngredientsGrid>
                </LetterSection>
              ))}
          </>
        )}
      </ContentSection>
    </>
  );
};

export default IngredientsPage;
