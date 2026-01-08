import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';
import { getCocktailById, Cocktail } from '../services/cocktailAPI';
import { bostonCocktails, BostonCocktail } from '../data/bostonCocktails';
import { translateIngredient, translateCategory, translateGlass } from '../utils/translations';

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const BackButton = styled.button`
  position: fixed;
  top: 100px;
  left: ${spacing[6]};
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  padding: ${spacing[3]} ${spacing[4]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text.secondary};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  z-index: 50;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.accent.primary};
    border-color: ${colors.accent.primary};
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    margin: ${spacing[4]};
  }
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};
  max-width: 1400px;
  margin: 0 auto;
  padding: ${spacing[12]} ${spacing[8]};

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid ${colors.border.default};
`;

const CocktailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.background.card} 100%);
  transition: background 0.6s ease;

  .icon {
    font-size: 8rem;
    margin-bottom: ${spacing[4]};
  }

  .category {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.tertiary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing[6]};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[2]};
`;

const Tag = styled.span`
  padding: ${spacing[1]} ${spacing[3]};
  font-size: ${typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  background: ${colors.accent.muted};
  color: ${colors.accent.primary};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.span`
  display: inline-block;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[4]};
`;

const CocktailName = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[4]};
  line-height: 1.1;
`;

const SourceBadge = styled.span`
  display: inline-block;
  padding: ${spacing[1]} ${spacing[3]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  background: ${colors.accent.subtle};
  color: ${colors.accent.primary};
  border: 1px solid ${colors.accent.muted};
  margin-bottom: ${spacing[6]};
`;

const Meta = styled.div`
  display: flex;
  gap: ${spacing[6]};
  margin-bottom: ${spacing[8]};
  padding-bottom: ${spacing[6]};
  border-bottom: 1px solid ${colors.border.default};
`;

const MetaItem = styled.div`
  span {
    display: block;
    font-size: ${typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    color: ${colors.text.tertiary};
    margin-bottom: ${spacing[1]};
  }

  strong {
    font-size: ${typography.fontSize.base};
    color: ${colors.text.primary};
  }
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[6]};
  padding-bottom: ${spacing[3]};
  border-bottom: 1px solid ${colors.border.default};
`;

const IngredientsList = styled.ul`
  margin-bottom: ${spacing[10]};
`;

const IngredientItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]} 0;
  border-bottom: 1px solid ${colors.border.subtle};
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.background.secondary};
    padding-left: ${spacing[4]};
    padding-right: ${spacing[4]};
    margin-left: -${spacing[4]};
    margin-right: -${spacing[4]};
  }
`;

const IngredientName = styled.span`
  font-size: ${typography.fontSize.base};
  color: ${colors.text.primary};
`;

const IngredientMeasure = styled.span`
  font-size: ${typography.fontSize.sm};
  color: ${colors.accent.primary};
  font-weight: ${typography.fontWeight.medium};
`;

const Instructions = styled.div`
  p {
    font-size: ${typography.fontSize.lg};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.text.secondary};
    margin-bottom: ${spacing[4]};
  }
`;

const NoInstructions = styled.div`
  padding: ${spacing[6]};
  background: ${colors.background.secondary};
  border: 1px solid ${colors.border.default};
  text-align: center;

  p {
    color: ${colors.text.tertiary};
    font-style: italic;
  }

  .tip {
    margin-top: ${spacing[4]};
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.secondary};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: ${colors.text.tertiary};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${colors.border.default};
  border-top-color: ${colors.accent.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: ${spacing[16]};

  h2 {
    font-size: ${typography.fontSize['2xl']};
    color: ${colors.text.primary};
    margin-bottom: ${spacing[4]};
  }

  p {
    color: ${colors.text.tertiary};
    margin-bottom: ${spacing[8]};
  }
`;

// Icônes par catégorie
const categoryIcons: Record<string, string> = {
  'Cocktail Classics': '🍸',
  'Whiskies': '🥃',
  'Vodka': '🍹',
  'Brandy': '🍷',
  'Cordials and Liqueurs': '🍾',
  'Rum': '🌴',
  'Gin': '🫒',
  'Tequila': '🌵',
  'Ordinary Drink': '🍸',
  'Cocktail': '🍸',
};

// Traduction des catégories Boston
const translateBostonCategory = (category: string): string => {
  const translations: Record<string, string> = {
    'Cocktail Classics': 'Classique',
    'Whiskies': 'Whisky',
    'Vodka': 'Vodka',
    'Brandy': 'Brandy & Cognac',
    'Cordials and Liqueurs': 'Liqueur',
    'Rum - Daiquiris': 'Daiquiri',
    'Tequila': 'Tequila',
  };
  return translations[category] || category;
};

// Composant pour image de cocktail avec fallback
const CocktailImageWithFallback: React.FC<{
  name: string;
  category: string;
  apiImage?: string;
}> = ({ name, category, apiImage }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(apiImage || null);
  const [loading, setLoading] = useState(!apiImage);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (apiImage) {
      setImageUrl(apiImage);
      setLoading(false);
      return;
    }

    // Essayer de trouver l'image via TheCocktailDB
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`
        );
        const data = await response.json();
        if (data.drinks && data.drinks[0] && data.drinks[0].strDrinkThumb) {
          setImageUrl(data.drinks[0].strDrinkThumb);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
      setLoading(false);
    };

    fetchImage();
  }, [name, apiImage]);

  if (loading) {
    return (
      <ImagePlaceholder>
        <div className="icon">{categoryIcons[category] || '🍸'}</div>
        <div className="category">Chargement...</div>
      </ImagePlaceholder>
    );
  }

  if (error || !imageUrl) {
    return (
      <ImagePlaceholder>
        <div className="icon">{categoryIcons[category] || '🍸'}</div>
        <div className="category">{category}</div>
      </ImagePlaceholder>
    );
  }

  return <CocktailImage src={imageUrl} alt={name} onError={() => setError(true)} />;
};

export const CocktailDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [bostonCocktail, setBostonCocktail] = useState<BostonCocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  // Déterminer si c'est un cocktail Boston
  const isBoston = location.pathname.includes('/boston/') || (id && id.startsWith('mb_'));

  useEffect(() => {
    const loadCocktail = async () => {
      if (!id) return;
      setLoading(true);

      if (isBoston) {
        // Chercher dans les données Boston
        const found = bostonCocktails.find(c => c.id === id);
        setBostonCocktail(found || null);
        setCocktail(null);
      } else {
        // Chercher via l'API
        const data = await getCocktailById(id);
        setCocktail(data);
        setBostonCocktail(null);
      }

      setLoading(false);
    };
    loadCocktail();
  }, [id, isBoston]);

  useEffect(() => {
    if (contentRef.current && (cocktail || bostonCocktail)) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    }
  }, [cocktail, bostonCocktail]);

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>
          <Spinner />
          <p style={{ marginTop: spacing[4] }}>Chargement du cocktail...</p>
        </LoadingContainer>
      </PageContainer>
    );
  }

  // Affichage pour cocktail Boston
  if (bostonCocktail) {
    return (
      <PageContainer>
        <BackButton onClick={() => navigate('/recettes')}>
          ← Retour aux recettes
        </BackButton>

        <HeroSection ref={contentRef}>
          <ImageContainer>
            <CocktailImageWithFallback
              name={bostonCocktail.name}
              category={bostonCocktail.category}
            />
          </ImageContainer>

          <ContentContainer>
            <Category>{translateBostonCategory(bostonCocktail.category)}</Category>
            <CocktailName>{bostonCocktail.name}</CocktailName>
            <SourceBadge>Collection Mr. Boston</SourceBadge>

            <Meta>
              <MetaItem>
                <span>Catégorie</span>
                <strong>{translateBostonCategory(bostonCocktail.category)}</strong>
              </MetaItem>
              <MetaItem>
                <span>Ingrédients</span>
                <strong>{bostonCocktail.ingredients.length}</strong>
              </MetaItem>
              <MetaItem>
                <span>Source</span>
                <strong>Mr. Boston</strong>
              </MetaItem>
            </Meta>

            <SectionTitle>Ingrédients</SectionTitle>
            <IngredientsList>
              {bostonCocktail.ingredients.map((ing, i) => (
                <IngredientItem key={i}>
                  <IngredientName>{translateIngredient(ing.ingredient)}</IngredientName>
                  <IngredientMeasure>{ing.measure}</IngredientMeasure>
                </IngredientItem>
              ))}
            </IngredientsList>

            <SectionTitle>Préparation</SectionTitle>
            <NoInstructions>
              <p>Les instructions de préparation ne sont pas disponibles dans le dataset Mr. Boston.</p>
              <p className="tip">
                Conseil: Mélangez les ingrédients selon les proportions indiquées.
                Pour les cocktails classiques, shakez avec de la glace et servez filtré.
              </p>
            </NoInstructions>
          </ContentContainer>
        </HeroSection>
      </PageContainer>
    );
  }

  // Affichage pour cocktail API (TheCocktailDB)
  if (!cocktail) {
    return (
      <PageContainer>
        <NotFound>
          <h2>Cocktail non trouvé</h2>
          <p>Désolé, ce cocktail n'existe pas dans notre base de données.</p>
          <BackButton onClick={() => navigate('/recettes')}>
            Retour aux recettes
          </BackButton>
        </NotFound>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackButton onClick={() => navigate('/recettes')}>
        ← Retour aux recettes
      </BackButton>

      <HeroSection ref={contentRef}>
        <ImageContainer>
          <CocktailImageWithFallback
            name={cocktail.name}
            category={cocktail.category}
            apiImage={cocktail.image}
          />
          {cocktail.tags.length > 0 && (
            <ImageOverlay>
              <Tags>
                {cocktail.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
            </ImageOverlay>
          )}
        </ImageContainer>

        <ContentContainer>
          <Category>{translateCategory(cocktail.category)}</Category>
          <CocktailName>{cocktail.name}</CocktailName>

          <Meta>
            <MetaItem>
              <span>Verre</span>
              <strong>{translateGlass(cocktail.glass)}</strong>
            </MetaItem>
            <MetaItem>
              <span>Type</span>
              <strong>{cocktail.isAlcoholic ? 'Alcoolisé' : 'Sans alcool'}</strong>
            </MetaItem>
            <MetaItem>
              <span>Ingrédients</span>
              <strong>{cocktail.ingredients.length}</strong>
            </MetaItem>
          </Meta>

          <SectionTitle>Ingrédients</SectionTitle>
          <IngredientsList>
            {cocktail.ingredients.map((ing, i) => (
              <IngredientItem key={i}>
                <IngredientName>{translateIngredient(ing.ingredient)}</IngredientName>
                <IngredientMeasure>{ing.measure}</IngredientMeasure>
              </IngredientItem>
            ))}
          </IngredientsList>

          <SectionTitle>Préparation</SectionTitle>
          <Instructions>
            <p>{cocktail.instructionsFR || cocktail.instructions}</p>
          </Instructions>
        </ContentContainer>
      </HeroSection>
    </PageContainer>
  );
};

export default CocktailDetailPage;
