import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';
import { getCocktailById, Cocktail } from '../services/cocktailAPI';
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

export const CocktailDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

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
          <CocktailImage src={cocktail.image} alt={cocktail.name} />
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
