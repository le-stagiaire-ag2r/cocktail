import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { colors, typography, spacing } from '../styles/designTokens';
import { getCocktailById, Cocktail } from '../services/cocktailAPI';
import { translateIngredient, translateCategory, translateGlass } from '../utils/translations';
import { useLenis } from '../components/ui/SmoothScroll';

// Animations
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background.primary};
`;

const BackButton = styled.button`
  position: absolute;
  top: ${spacing[6]};
  left: ${spacing[6]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: ${typography.fontSize.lg};
  color: ${colors.text.light};
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  z-index: 50;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  @media (max-width: 968px) {
    position: relative;
    top: 0;
    left: 0;
    margin: ${spacing[4]};
    width: auto;
    height: auto;
    padding: ${spacing[2]} ${spacing[4]};
    border-radius: 0;
    color: ${colors.text.primary};
    background: ${colors.background.card};
    border: 1px solid ${colors.border.default};

    &:hover {
      color: ${colors.palette.burgundy};
      border-color: ${colors.palette.burgundy};
      transform: none;
    }
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
  background: ${colors.gradient.burgundy};
  position: relative;
  overflow: hidden;
  animation: ${slideInLeft} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%);
    animation: ${rotate} 30s linear infinite;
  }

  @media (max-width: 1200px) {
    padding: 140px ${spacing[8]} ${spacing[12]};
  }

  @media (max-width: 968px) {
    padding: ${spacing[12]} ${spacing[6]};
    order: 2;
  }
`;

const ImageColumn = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  animation: ${slideInRight} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 968px) {
    position: relative;
    height: 50vh;
    order: 1;
    animation: ${fadeInUp} 0.6s ease forwards;
  }
`;

const CocktailImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background: url(${props => props.$src}) center center / cover no-repeat;
  background-color: ${colors.palette.burgundyDark};
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.03);
  }
`;

const ContentInner = styled.div`
  position: relative;
  z-index: 1;
`;

const Category = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[3]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  color: ${colors.palette.coral};
  margin-bottom: ${spacing[6]};
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: ${colors.palette.coral};
  }
`;

const CocktailName = styled.h1`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.heroSmall};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  margin-bottom: ${spacing[8]};
  line-height: 1.1;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;
`;

const Description = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.lg};
  font-style: italic;
  color: ${colors.text.lightSecondary};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[10]};
  max-width: 500px;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.border.light};
  margin: ${spacing[8]} 0;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

const DecorativeIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: ${spacing[8]} auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: ${colors.text.lightSecondary};
    stroke-width: 1;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.ultrawide};
  color: ${colors.text.lightSecondary};
  margin-bottom: ${spacing[6]};
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.8s;
  opacity: 0;
`;

const SensoryProfile = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[6]};
  margin-bottom: ${spacing[10]};
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.9s;
  opacity: 0;
`;

const SensoryItem = styled.div`
  text-align: center;

  .icon {
    width: 40px;
    height: 40px;
    margin: 0 auto ${spacing[3]};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;

    svg {
      width: 100%;
      height: 100%;
      stroke: ${colors.text.lightSecondary};
      stroke-width: 1.5;
      fill: none;
    }
  }

  .label {
    font-size: ${typography.fontSize.xs};
    font-weight: ${typography.fontWeight.semibold};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    color: ${colors.text.light};
  }
`;

const IngredientsList = styled.ul`
  margin-bottom: ${spacing[10]};
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 1s;
  opacity: 0;
`;

const IngredientItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]} 0;
  border-bottom: 1px solid ${colors.border.light};
  transition: all 0.3s ease;

  &:hover {
    padding-left: ${spacing[4]};
    background: rgba(255, 255, 255, 0.05);
    margin-left: -${spacing[4]};
    margin-right: -${spacing[4]};
    padding-right: ${spacing[4]};
  }
`;

const IngredientLink = styled(Link)`
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.base};
  color: ${colors.text.light};
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.palette.coral};
  }
`;

const IngredientMeasure = styled.span`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.base};
  font-style: italic;
  color: ${colors.palette.coral};
`;

const Instructions = styled.div`
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 1.1s;
  opacity: 0;

  p {
    font-family: ${typography.fontFamily.serif};
    font-size: ${typography.fontSize.lg};
    font-style: italic;
    line-height: ${typography.lineHeight.loose};
    color: ${colors.text.lightSecondary};
  }
`;

const Meta = styled.div`
  display: flex;
  gap: ${spacing[8]};
  margin-top: ${spacing[10]};
  padding-top: ${spacing[8]};
  border-top: 1px solid ${colors.border.light};
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 1.2s;
  opacity: 0;
`;

const MetaItem = styled.div`
  span {
    display: block;
    font-size: ${typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    color: ${colors.text.lightSecondary};
    margin-bottom: ${spacing[1]};
  }

  strong {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${colors.gradient.burgundy};
  color: ${colors.text.light};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${colors.border.light};
  border-top-color: ${colors.palette.coral};
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
  background: ${colors.gradient.burgundy};

  h2 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['3xl']};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
    margin-bottom: ${spacing[4]};
  }

  p {
    font-family: ${typography.fontFamily.serif};
    font-style: italic;
    color: ${colors.text.lightSecondary};
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
  color: ${colors.palette.burgundy};
  background: ${colors.text.light};
  transition: all 0.4s ease;

  &:hover {
    background: ${colors.palette.coral};
    color: ${colors.text.light};
    transform: translateY(-2px);
  }
`;

// Determine sensory profile based on ingredients
const getSensoryProfile = (cocktail: Cocktail) => {
  const ingredients = cocktail.ingredients.map(i => i.ingredient.toLowerCase()).join(' ');

  const isSweet = ingredients.includes('sugar') || ingredients.includes('syrup') ||
                  ingredients.includes('liqueur') || ingredients.includes('cream');
  const isCitrus = ingredients.includes('lemon') || ingredients.includes('lime') ||
                   ingredients.includes('orange') || ingredients.includes('citrus');
  const isStrong = ingredients.includes('whiskey') || ingredients.includes('bourbon') ||
                   ingredients.includes('rum') || ingredients.includes('vodka');
  const isBitter = ingredients.includes('bitter') || ingredients.includes('campari') ||
                   ingredients.includes('aperol');
  const isRefreshing = ingredients.includes('soda') || ingredients.includes('tonic') ||
                       ingredients.includes('mint') || ingredients.includes('ice');

  return [
    { label: isSweet ? 'Doux' : isBitter ? 'Amer' : 'Équilibré', type: 'taste' },
    { label: isStrong ? 'Puissant' : 'Délicat', type: 'strength' },
    { label: isCitrus || isRefreshing ? 'Frais' : 'Rond', type: 'profile' },
  ];
};

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

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>
          <Spinner />
          <p style={{ marginTop: spacing[4], fontStyle: 'italic' }}>Préparation du cocktail...</p>
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

  const sensoryProfile = getSensoryProfile(cocktail);

  return (
    <PageContainer>
      <HeroSection>
        <ContentColumn>
          <BackButton onClick={() => navigate('/recettes')}>
            ←
          </BackButton>
          <ContentInner ref={contentRef}>
            <Category>{translateCategory(cocktail.category)}</Category>
            <CocktailName>{cocktail.name}</CocktailName>

            <Description>
              {cocktail.ingredients.slice(0, 3).map(i => translateIngredient(i.ingredient)).join(' - ')}
              {cocktail.ingredients.length > 3 ? ` et ${cocktail.ingredients.length - 3} autres ingrédients` : ''}
            </Description>

            <Divider />

            <DecorativeIcon>
              <svg viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" />
                <circle cx="40" cy="40" r="20" />
                <circle cx="40" cy="40" r="10" />
                <line x1="40" y1="5" x2="40" y2="15" />
                <line x1="40" y1="65" x2="40" y2="75" />
                <line x1="5" y1="40" x2="15" y2="40" />
                <line x1="65" y1="40" x2="75" y2="40" />
                <line x1="15" y1="15" x2="22" y2="22" />
                <line x1="58" y1="58" x2="65" y2="65" />
                <line x1="15" y1="65" x2="22" y2="58" />
                <line x1="58" y1="22" x2="65" y2="15" />
              </svg>
            </DecorativeIcon>

            <SectionTitle>Profil Sensoriel</SectionTitle>
            <SensoryProfile>
              {sensoryProfile.map((item, i) => (
                <SensoryItem key={i}>
                  <div className="icon">
                    {item.type === 'taste' && (
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" strokeLinecap="round" />
                        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {item.type === 'strength' && (
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    )}
                    {item.type === 'profile' && (
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                        <path d="M20 12a8 8 0 1 1-8-8v8h8z" opacity="0.5" />
                      </svg>
                    )}
                  </div>
                  <span className="label">{item.label}</span>
                </SensoryItem>
              ))}
            </SensoryProfile>

            <Divider />

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

            <Meta>
              <MetaItem>
                <span>Verre</span>
                <strong>{translateGlass(cocktail.glass)}</strong>
              </MetaItem>
              <MetaItem>
                <span>Type</span>
                <strong>{cocktail.isAlcoholic ? 'Alcoolisé' : 'Sans alcool'}</strong>
              </MetaItem>
            </Meta>
          </ContentInner>
        </ContentColumn>

        <ImageColumn>
          <CocktailImage $src={cocktail.image} />
        </ImageColumn>
      </HeroSection>
    </PageContainer>
  );
};

export default CocktailDetailPage;
