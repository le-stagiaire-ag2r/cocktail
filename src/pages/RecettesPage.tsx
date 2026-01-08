import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
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
  background: ${colors.gradient.burgundy};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
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
  color: ${colors.palette.coral};
  margin-bottom: ${spacing[6]};
  animation: ${fadeInUp} 0.6s ease forwards;

  &::before, &::after {
    content: '';
    width: 30px;
    height: 1px;
    background: ${colors.palette.coral};
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
  padding: ${spacing[10]} ${spacing[8]};
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
  padding: ${spacing[4]} ${spacing[5]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.base};
  color: ${colors.text.primary};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.palette.burgundy};
    box-shadow: 0 0 0 3px ${colors.accent.muted};
  }

  &::placeholder {
    color: ${colors.text.muted};
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
  box-shadow: 0 10px 40px rgba(61, 46, 46, 0.15);
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
    width: 44px;
    height: 44px;
    object-fit: cover;
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
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  color: ${colors.text.light};
  background: ${colors.palette.burgundy};
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.palette.burgundyDark};
    transform: translateY(-2px);
  }
`;

const RandomButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]};
  margin: ${spacing[6]} auto 0;
  padding: ${spacing[3]} ${spacing[6]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  color: ${colors.palette.terracotta};
  background: transparent;
  border: 1px solid ${colors.palette.terracotta};
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.palette.terracotta};
    color: ${colors.text.light};
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
  margin: ${spacing[8]} auto 0;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${spacing[2]} ${spacing[4]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  color: ${props => props.$active ? colors.text.light : colors.text.secondary};
  background: ${props => props.$active ? colors.palette.burgundy : 'transparent'};
  border: 1px solid ${props => props.$active ? colors.palette.burgundy : colors.border.default};
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.$active ? colors.text.light : colors.palette.burgundy};
    border-color: ${colors.palette.burgundy};
  }
`;

const AlphabetNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[1]};
  max-width: 900px;
  margin: ${spacing[8]} auto 0;
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
  margin-bottom: ${spacing[3]};
`;

const LetterButton = styled.button<{ $active: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.light};
  color: ${props => props.$active ? colors.text.light : colors.text.secondary};
  background: ${props => props.$active ? colors.palette.burgundy : 'transparent'};
  border: none;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.$active ? colors.text.light : colors.palette.burgundy};
    background: ${props => props.$active ? colors.palette.burgundy : colors.accent.subtle};
  }
`;

const ContentSection = styled.section`
  padding: ${spacing[16]} ${spacing[8]};
  max-width: 1400px;
  margin: 0 auto;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing[10]};
  padding-bottom: ${spacing[6]};
  border-bottom: 1px solid ${colors.border.default};
`;

const ResultsCount = styled.span`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.tertiary};
`;

const ResultsTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.primary};
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: ${spacing[20]};
  color: ${colors.text.tertiary};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto ${spacing[4]};
  border: 2px solid ${colors.border.default};
  border-top-color: ${colors.palette.burgundy};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const CocktailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[4]};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CocktailCard = styled.div`
  position: relative;
  height: 420px;
  overflow: hidden;
  cursor: pointer;
  background: ${colors.palette.burgundy};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.gradient.cardOverlay};
    z-index: 1;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 0.7;
  }
`;

const CardImage = styled.div<{ $src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${props => props.$src}) center center / cover no-repeat;
  background-color: ${colors.palette.burgundyLight};
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${CocktailCard}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing[6]};
  z-index: 2;
`;

const CardCategory = styled.span`
  display: inline-block;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.palette.coral};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  margin-bottom: ${spacing[2]};
`;

const CardTitle = styled.h3`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  margin-bottom: ${spacing[3]};
  line-height: 1.2;
`;

const CardIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[1]};
  margin-bottom: ${spacing[4]};
`;

const IngredientTag = styled.span`
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.lightSecondary};
  background: rgba(255, 255, 255, 0.15);
  padding: ${spacing[1]} ${spacing[2]};
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${spacing[4]};
  border-top: 1px solid ${colors.border.light};
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.lightSecondary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${spacing[20]};
  color: ${colors.text.tertiary};

  h3 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['2xl']};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.secondary};
    margin-bottom: ${spacing[3]};
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
  const [currentView, setCurrentView] = useState<'filter' | 'letter' | 'search' | 'ingredient'>('filter');
  const [currentIngredient, setCurrentIngredient] = useState('');
  const gridRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

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
        setCurrentIngredient(ingredientParam);
        setCurrentView('ingredient');
      } else {
        const popular = await getPopularCocktails();
        setCocktails(popular);
        setCurrentView('filter');
      }
      setLoading(false);
    };
    loadCocktails();
  }, [searchParams]);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (gridRef.current && cocktails.length > 0) {
      gsap.fromTo(
        gridRef.current.querySelectorAll('.cocktail-card'),
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    }
  }, [cocktails]);

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
    setCurrentIngredient('');
    setCurrentView('search');
    const results = await searchCocktails(searchQuery);
    setCocktails(results);
    setLoading(false);
  };

  const handleSelectSuggestion = (cocktail: Cocktail) => {
    setShowSuggestions(false);
    navigate(`/cocktail/${cocktail.id}`);
  };

  const handleFilterChange = async (filterId: string, ingredient: string) => {
    setActiveFilter(filterId);
    setActiveLetter('');
    setSearchQuery('');
    setCurrentIngredient('');
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

  const handleLetterClick = async (letter: string) => {
    setActiveLetter(letter);
    setActiveFilter('all');
    setSearchQuery('');
    setCurrentIngredient('');
    setCurrentView('letter');
    setLoading(true);

    const results = await getCocktailsByLetter(letter);
    setCocktails(results);
    setLoading(false);
  };

  const handleRandomCocktail = async () => {
    setLoadingRandom(true);
    const random = await getRandomCocktail();
    setLoadingRandom(false);

    if (random) {
      navigate(`/cocktail/${random.id}`);
    }
  };

  const getResultsTitle = () => {
    if (currentView === 'letter' && activeLetter) {
      return `Cocktails commençant par "${activeLetter}"`;
    }
    if (currentView === 'search' && searchQuery) {
      return `Résultats pour "${searchQuery}"`;
    }
    if (currentView === 'ingredient' && currentIngredient) {
      return `Cocktails avec ${translateIngredient(currentIngredient)}`;
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
        <PageTitle>Nos Cocktails</PageTitle>
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

        <div style={{ textAlign: 'center' }}>
          <RandomButton onClick={handleRandomCocktail} disabled={loadingRandom}>
            {loadingRandom ? 'Chargement...' : 'Cocktail aléatoire'}
          </RandomButton>
        </div>

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
                      {cocktail.ingredients.slice(0, 3).map((ing, i) => (
                        <IngredientTag key={i}>{translateIngredient(ing.ingredient)}</IngredientTag>
                      ))}
                      {cocktail.ingredients.length > 3 && (
                        <IngredientTag>+{cocktail.ingredients.length - 3}</IngredientTag>
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
