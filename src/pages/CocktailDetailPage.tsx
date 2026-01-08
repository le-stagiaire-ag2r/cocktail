import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';
import { getCocktailById, Cocktail } from '../services/cocktailAPI';
import { translateIngredient, translateCategory, translateGlass } from '../utils/translations';
import { useLenis } from '../components/ui/SmoothScroll';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background.primary};
`;

const BackButton = styled.button`
  position: fixed;
  top: 100px;
  left: ${spacing[8]};
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  padding: ${spacing[3]} ${spacing[5]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  color: ${colors.text.secondary};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  z-index: 50;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.accent.primary};
    border-color: ${colors.accent.primary};
  }

  @media (max-width: 968px) {
    position: relative;
    top: 0;
    left: 0;
    margin: ${spacing[6]} ${spacing[6]} 0;
  }
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px ${spacing[12]} ${spacing[16]};

  @media (max-width: 1200px) {
    padding: 140px ${spacing[8]} ${spacing[12]};
  }

  @media (max-width: 968px) {
    padding: ${spacing[8]} ${spacing[6]};
    order: 2;
  }
`;

const ImageColumn = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 968px) {
    position: relative;
    height: 60vh;
    order: 1;
  }
`;

const CocktailImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background: url(${props => props.$src}) center center / cover no-repeat;
  background-color: ${colors.background.dark};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.gradient.heroOverlay};
    opacity: 0.4;
  }
`;

const Category = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[3]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[6]};

  &::before {
    content: '';
    width: 30px;
    height: 1px;
    background: ${colors.accent.primary};
  }
`;

const CocktailName = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.heroSmall};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[6]};
  line-height: 1.1;
`;

const Meta = styled.div`
  display: flex;
  gap: ${spacing[8]};
  margin-bottom: ${spacing[10]};
  padding-bottom: ${spacing[8]};
  border-bottom: 1px solid ${colors.border.default};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  span {
    display: block;
    font-size: ${typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    color: ${colors.text.tertiary};
    margin-bottom: ${spacing[2]};
  }

  strong {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.xl};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.primary};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[2]};
  margin-bottom: ${spacing[8]};
`;

const Tag = styled.span`
  padding: ${spacing[2]} ${spacing[4]};
  font-size: ${typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  background: ${colors.accent.subtle};
  color: ${colors.accent.olive};
  border: 1px solid ${colors.border.default};
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[6]};
  display: flex;
  align-items: center;
  gap: ${spacing[4]};

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${colors.border.default};
  }
`;

const IngredientsList = styled.ul`
  margin-bottom: ${spacing[12]};
`;

const IngredientItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]} 0;
  border-bottom: 1px solid ${colors.border.subtle};
  transition: all 0.3s ease;

  &:hover {
    padding-left: ${spacing[4]};
    background: ${colors.background.secondary};
    margin-left: -${spacing[4]};
    margin-right: -${spacing[4]};
    padding-right: ${spacing[4]};
  }
`;

const IngredientLink = styled(Link)`
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.base};
  color: ${colors.text.primary};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.accent.primary};
  }
`;

const IngredientMeasure = styled.span`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.base};
  font-style: italic;
  color: ${colors.accent.primary};
`;

const Instructions = styled.div`
  p {
    font-family: ${typography.fontFamily.serif};
    font-size: ${typography.fontSize.lg};
    font-style: italic;
    line-height: ${typography.lineHeight.loose};
    color: ${colors.text.secondary};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${colors.text.tertiary};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${colors.border.default};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: ${spacing[8]};

  h2 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['3xl']};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.primary};
    margin-bottom: ${spacing[4]};
  }

  p {
    font-family: ${typography.fontFamily.serif};
    font-style: italic;
    color: ${colors.text.tertiary};
    margin-bottom: ${spacing[8]};
  }
`;

const ReturnButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  padding: ${spacing[4]} ${spacing[8]};
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${colors.text.light};
  background: ${colors.text.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.accent.primary};
  }
`;

export const CocktailDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const { lenis } = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [id, lenis]);

  useEffect(() => {
    const loadCocktail = async () => {
      if (!id) return;
      setLoading(true);
      const data = await getCocktailById(id);
      setCocktail(data);
      setLoading(false);
    };
    loadCocktail();
  }, [id]);

  useEffect(() => {
    if (contentRef.current && cocktail) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }
  }, [cocktail]);

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

  if (!cocktail) {
    return (
      <PageContainer>
        <NotFound>
          <h2>Cocktail non trouvé</h2>
          <p>Désolé, ce cocktail n'existe pas dans notre base de données.</p>
          <ReturnButton to="/recettes">
            Retour aux recettes
          </ReturnButton>
        </NotFound>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackButton onClick={() => navigate('/recettes')}>
        ← Retour
      </BackButton>

      <HeroSection>
        <ContentColumn ref={contentRef}>
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

          {cocktail.tags.length > 0 && (
            <Tags>
              {cocktail.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </Tags>
          )}

          <SectionTitle>Ingrédients</SectionTitle>
          <IngredientsList>
            {cocktail.ingredients.map((ing, i) => (
              <IngredientItem key={i}>
                <IngredientLink to={`/recettes?ingredient=${encodeURIComponent(ing.ingredient)}`}>
                  {translateIngredient(ing.ingredient)}
                </IngredientLink>
                <IngredientMeasure>{ing.measure}</IngredientMeasure>
              </IngredientItem>
            ))}
          </IngredientsList>

          <SectionTitle>Préparation</SectionTitle>
          <Instructions>
            <p>{cocktail.instructionsFR || cocktail.instructions}</p>
          </Instructions>
        </ContentColumn>

        <ImageColumn>
          <CocktailImage $src={cocktail.image} />
        </ImageColumn>
      </HeroSection>
    </PageContainer>
  );
};

export default CocktailDetailPage;
