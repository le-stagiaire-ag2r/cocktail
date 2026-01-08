import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';
import {
  searchCocktails,
  getPopularCocktails,
  getCocktailsByIngredient,
  getCocktailsByLetter,
  getRandomCocktail,
  Cocktail
} from '../services/cocktailAPI';
import { translateIngredient, translateCategory, translateGlass } from '../utils/translations';

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
  padding: ${spacing[8]};
  background: ${colors.background.primary};
  border-bottom: 1px solid ${colors.border.default};
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  gap: ${spacing[3]};
`;

const SearchInput = styled.input`
  flex: 1;
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
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 4px;
  }

  .name {
    font-weight: ${typography.fontWeight.medium};
  }

  .category {
    font-size: ${typography.fontSize.xs};
    color: ${colors.text.tertiary};
  }
`;

const SearchButton = styled.button`
  padding: ${spacing[4]} ${spacing[6]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  color: ${colors.background.primary};
  background: ${colors.accent.primary};
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.accent.secondary};
  }
`;

const RandomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]};
  margin: ${spacing[4]} auto 0;
  padding: ${spacing[3]} ${spacing[6]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.accent.primary};
  background: transparent;
  border: 1px solid ${colors.accent.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.accent.primary};
    color: ${colors.background.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing[2]};
  flex-wrap: wrap;
  max-width: 800px;
  margin: ${spacing[6]} auto 0;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${spacing[2]} ${spacing[4]};
  font-size: ${typography.fontSize.xs};
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

const AlphabetNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[1]};
  max-width: 900px;
  margin: ${spacing[6]} auto 0;
  padding-top: ${spacing[6]};
  border-top: 1px solid ${colors.border.default};
`;

const AlphabetLabel = styled.span`
  width: 100%;
  text-align: center;
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  margin-bottom: ${spacing[2]};
`;

const LetterButton = styled.button<{ $active: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${props => props.$active ? colors.accent.primary : colors.text.secondary};
  background: ${props => props.$active ? colors.accent.subtle : 'transparent'};
  border: 1px solid ${props => props.$active ? colors.accent.primary : 'transparent'};
  transition: all 0.2s ease;

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

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing[8]};
  padding-bottom: ${spacing[4]};
  border-bottom: 1px solid ${colors.border.default};
`;

const ResultsCount = styled.span`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.tertiary};
`;

const ResultsTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.xl};
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

const CocktailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing[6]};
`;

const CocktailCard = styled.div`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  transition: all 0.4s ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.div<{ $src: string }>`
  aspect-ratio: 4/3;
  background: url(${props => props.$src}) center center / cover no-repeat;
  background-color: ${colors.background.secondary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, ${colors.background.card}, transparent);
  }
`;

const CardContent = styled.div`
  padding: ${spacing[6]};
`;

const CardCategory = styled.span`
  display: inline-block;
  font-size: ${typography.fontSize.xs};
  color: ${colors.accent.primary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  margin-bottom: ${spacing[2]};
`;

const CardTitle = styled.h3`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['xl']};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[3]};
`;

const CardIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[1]};
  margin-bottom: ${spacing[4]};
`;

const IngredientTag = styled.span`
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.tertiary};
  background: ${colors.background.secondary};
  padding: ${spacing[1]} ${spacing[2]};
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${spacing[4]};
  border-top: 1px solid ${colors.border.default};
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
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

const spiritFilters = [
  { id: 'all', label: 'Populaires', ingredient: '' },
  { id: 'vodka', label: 'Vodka', ingredient: 'Vodka' },
  { id: 'gin', label: 'Gin', ingredient: 'Gin' },
  { id: 'rum', label: 'Rhum', ingredient: 'Rum' },
  { id: 'whiskey', label: 'Whisky', ingredient: 'Whiskey' },
  { id: 'tequila', label: 'Tequila', ingredient: 'Tequila' },
  { id: 'bourbon', label: 'Bourbon', ingredient: 'Bourbon' },
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const RecettesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [suggestions, setSuggestions] = useState<Cocktail[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingRandom, setLoadingRandom] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLetter, setActiveLetter] = useState('');
  const [currentView, setCurrentView] = useState<'filter' | 'letter' | 'search'>('filter');
  const gridRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Charger les cocktails (par ingrédient, recherche, lettre ou populaires)
  useEffect(() => {
    const loadCocktails = async () => {
      setLoading(true);
      const ingredientParam = searchParams.get('ingredient');
      const searchParam = searchParams.get('search');
      const letterParam = searchParams.get('letter');

      if (searchParam) {
        const results = await searchCocktails(searchParam);
        setCocktails(results);
        setSearchQuery(searchParam);
        setActiveFilter('all');
        setActiveLetter('');
        setCurrentView('search');
      } else if (letterParam) {
        const results = await getCocktailsByLetter(letterParam);
        setCocktails(results);
        setActiveLetter(letterParam.toUpperCase());
        setActiveFilter('all');
        setSearchQuery('');
        setCurrentView('letter');
      } else if (ingredientParam) {
        const results = await getCocktailsByIngredient(ingredientParam);
        setCocktails(results);
        setSearchQuery('');
        setActiveFilter('all');
        setActiveLetter('');
        setCurrentView('filter');
      } else {
        const popular = await getPopularCocktails();
        setCocktails(popular);
        setCurrentView('filter');
      }
      setLoading(false);
    };
    loadCocktails();
  }, [searchParams]);

  // Autocomplétion lors de la frappe
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length < 2) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      const results = await searchCocktails(searchQuery);
      setSuggestions(results.slice(0, 6));
      setShowSuggestions(results.length > 0);
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

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

  // Animation quand les cocktails changent
  useEffect(() => {
    if (gridRef.current && cocktails.length > 0) {
      gsap.fromTo(
        gridRef.current.querySelectorAll('.cocktail-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, [cocktails]);

  // Recherche de cocktails
  const handleSearch = async () => {
    setShowSuggestions(false);
    if (!searchQuery.trim()) {
      const popular = await getPopularCocktails();
      setCocktails(popular);
      setCurrentView('filter');
      return;
    }

    setLoading(true);
    setActiveFilter('all');
    setActiveLetter('');
    setCurrentView('search');
    const results = await searchCocktails(searchQuery);
    setCocktails(results);
    setLoading(false);
  };

  // Sélectionner une suggestion
  const handleSelectSuggestion = (cocktail: Cocktail) => {
    setShowSuggestions(false);
    navigate(`/cocktail/${cocktail.id}`);
  };

  // Filtrer par spiritueux
  const handleFilterChange = async (filterId: string, ingredient: string) => {
    setActiveFilter(filterId);
    setActiveLetter('');
    setSearchQuery('');
    setCurrentView('filter');
    setLoading(true);

    if (filterId === 'all') {
      const popular = await getPopularCocktails();
      setCocktails(popular);
    } else {
      const results = await getCocktailsByIngredient(ingredient);
      setCocktails(results);
    }

    setLoading(false);
  };

  // Navigation par lettre
  const handleLetterClick = async (letter: string) => {
    setActiveLetter(letter);
    setActiveFilter('all');
    setSearchQuery('');
    setCurrentView('letter');
    setLoading(true);

    const results = await getCocktailsByLetter(letter);
    setCocktails(results);
    setLoading(false);
  };

  // Cocktail aléatoire
  const handleRandomCocktail = async () => {
    setLoadingRandom(true);
    const random = await getRandomCocktail();
    setLoadingRandom(false);

    if (random) {
      navigate(`/cocktail/${random.id}`);
    }
  };

  // Titre dynamique selon le contexte
  const getResultsTitle = () => {
    if (currentView === 'letter' && activeLetter) {
      return `Cocktails commençant par "${activeLetter}"`;
    }
    if (currentView === 'search' && searchQuery) {
      return `Résultats pour "${searchQuery}"`;
    }
    if (activeFilter !== 'all') {
      const filter = spiritFilters.find(f => f.id === activeFilter);
      return `Cocktails à base de ${filter?.label}`;
    }
    return 'Cocktails populaires';
  };

  return (
    <>
      <PageHeader>
        <PageLabel>Collection</PageLabel>
        <PageTitle>Nos Recettes</PageTitle>
        <PageDesc>
          Explorez des centaines de recettes de cocktails du monde entier.
          Classiques intemporels et créations modernes.
        </PageDesc>
      </PageHeader>

      <SearchSection>
        <SearchContainer ref={searchRef}>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              placeholder="Rechercher un cocktail..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
            />
            <SearchButton onClick={handleSearch}>Rechercher</SearchButton>
          </SearchInputWrapper>

          <SuggestionsDropdown $show={showSuggestions}>
            {suggestions.map((cocktail) => (
              <SuggestionItem
                key={cocktail.id}
                onClick={() => handleSelectSuggestion(cocktail)}
              >
                <img src={cocktail.image + '/preview'} alt={cocktail.name} />
                <div>
                  <div className="name">{cocktail.name}</div>
                  <div className="category">{translateCategory(cocktail.category)}</div>
                </div>
              </SuggestionItem>
            ))}
          </SuggestionsDropdown>
        </SearchContainer>

        <RandomButton onClick={handleRandomCocktail} disabled={loadingRandom}>
          {loadingRandom ? 'Chargement...' : '🎲 Cocktail aléatoire'}
        </RandomButton>

        <FiltersContainer>
          {spiritFilters.map(filter => (
            <FilterButton
              key={filter.id}
              $active={activeFilter === filter.id && currentView === 'filter'}
              onClick={() => handleFilterChange(filter.id, filter.ingredient)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FiltersContainer>

        <AlphabetNav>
          <AlphabetLabel>Parcourir par lettre</AlphabetLabel>
          {alphabet.map(letter => (
            <LetterButton
              key={letter}
              $active={activeLetter === letter}
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </LetterButton>
          ))}
        </AlphabetNav>
      </SearchSection>

      <ContentSection id="resultats">
        {loading ? (
          <LoadingContainer>
            <Spinner />
            <p>Chargement des cocktails...</p>
          </LoadingContainer>
        ) : cocktails.length === 0 ? (
          <NoResults>
            <h3>Aucun résultat</h3>
            <p>Essayez une autre recherche, un autre filtre ou une autre lettre.</p>
          </NoResults>
        ) : (
          <>
            <ResultsHeader>
              <ResultsTitle>{getResultsTitle()}</ResultsTitle>
              <ResultsCount>{cocktails.length} cocktail{cocktails.length > 1 ? 's' : ''}</ResultsCount>
            </ResultsHeader>

            <CocktailsGrid ref={gridRef}>
              {cocktails.map((cocktail) => (
                <CocktailCard
                  key={cocktail.id}
                  className="cocktail-card"
                  onClick={() => navigate(`/cocktail/${cocktail.id}`)}
                >
                  <CardImage $src={cocktail.image + '/preview'} />
                  <CardContent>
                    <CardCategory>{translateCategory(cocktail.category)}</CardCategory>
                    <CardTitle>{cocktail.name}</CardTitle>

                    <CardIngredients>
                      {cocktail.ingredients.slice(0, 4).map((ing, i) => (
                        <IngredientTag key={i}>{translateIngredient(ing.ingredient)}</IngredientTag>
                      ))}
                      {cocktail.ingredients.length > 4 && (
                        <IngredientTag>+{cocktail.ingredients.length - 4}</IngredientTag>
                      )}
                    </CardIngredients>

                    <CardMeta>
                      <span>{translateGlass(cocktail.glass)}</span>
                      <span>{cocktail.isAlcoholic ? 'Alcoolisé' : 'Sans alcool'}</span>
                    </CardMeta>
                  </CardContent>
                </CocktailCard>
              ))}
            </CocktailsGrid>
          </>
        )}
      </ContentSection>
    </>
  );
};

export default RecettesPage;
