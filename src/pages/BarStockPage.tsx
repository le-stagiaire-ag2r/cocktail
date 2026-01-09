import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';

gsap.registerPlugin(ScrollTrigger);

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
    rgb(125, 139, 106) 30%,
    rgb(180, 120, 90) 60%,
    rgb(112, 42, 64) 100%
  );
`;

const PageHeader = styled.section`
  padding: 160px ${spacing[8]} 100px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 350px;
    height: 350px;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: ${typography.lineHeight.relaxed};
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const ContentSection = styled.section`
  padding: ${spacing[16]} ${spacing[8]};
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 640px) {
    padding: ${spacing[10]} ${spacing[4]};
  }
`;

const IntroText = styled.div`
  max-width: 800px;
  margin: 0 auto ${spacing[16]};
  text-align: center;

  p {
    font-size: ${typography.fontSize.lg};
    color: rgba(247, 245, 235, 0.85);
    line-height: ${typography.lineHeight.relaxed};
    margin-bottom: ${spacing[4]};
  }
`;

const EssentialBadge = styled.span`
  display: inline-block;
  padding: ${spacing[1]} ${spacing[3]};
  margin-left: ${spacing[2]};
  font-size: ${typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  background: rgba(247, 238, 192, 0.2);
  color: ${colors.palette.cream};
  border: 1px solid rgba(247, 238, 192, 0.3);
`;

const CategorySection = styled.div`
  margin-bottom: ${spacing[12]};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  padding-bottom: ${spacing[4]};
  margin-bottom: ${spacing[6]};
  border-bottom: 1px solid rgba(247, 245, 235, 0.2);
`;

const CategoryIcon = styled.span`
  font-size: ${typography.fontSize['3xl']};

  @media (max-width: 640px) {
    font-size: ${typography.fontSize['2xl']};
  }
`;

const CategoryTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};

  @media (max-width: 640px) {
    font-size: ${typography.fontSize.xl};
  }
`;

const CategoryDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: rgba(247, 245, 235, 0.6);
  margin-top: ${spacing[1]};
`;

// Liste fluide sans cartes - style Skyline Venice
const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: ${spacing[4]};
  padding: ${spacing[5]} 0;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);
  transition: all 0.3s ease;

  &:hover {
    padding-left: ${spacing[4]};
    background: rgba(255, 255, 255, 0.03);
    margin: 0 -${spacing[4]};
    padding-right: ${spacing[4]};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  display: inline;
`;

const ItemDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: rgba(247, 245, 235, 0.6);
  line-height: ${typography.lineHeight.relaxed};
  margin-top: ${spacing[1]};
`;

const TipsSection = styled.div`
  margin-top: ${spacing[16]};
  padding-top: ${spacing[12]};
  border-top: 1px solid rgba(247, 245, 235, 0.2);
`;

const TipsTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.palette.cream};
  margin-bottom: ${spacing[8]};
  text-align: center;
`;

const TipsList = styled.ol`
  max-width: 700px;
  margin: 0 auto;
  counter-reset: tip-counter;
`;

const TipItem = styled.li`
  display: flex;
  gap: ${spacing[4]};
  padding: ${spacing[4]} 0;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);
  counter-increment: tip-counter;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: counter(tip-counter);
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${typography.fontSize.sm};
    font-weight: ${typography.fontWeight.medium};
    color: ${colors.palette.cream};
    background: rgba(247, 238, 192, 0.15);
    border-radius: 50%;
  }
`;

const TipText = styled.span`
  font-size: ${typography.fontSize.base};
  color: rgba(247, 245, 235, 0.8);
  line-height: ${typography.lineHeight.relaxed};
  padding-top: 2px;
`;

const barCategories = [
  {
    icon: '🥃',
    title: 'Spiritueux de Base',
    description: 'Les fondations de tout bar à cocktails',
    items: [
      { name: 'Whisky/Bourbon', desc: 'Base du Old Fashioned, Manhattan, Whisky Sour', essential: true },
      { name: 'Vodka', desc: 'Neutre et polyvalente - Moscow Mule, Bloody Mary', essential: true },
      { name: 'Gin', desc: 'Aromatique aux botaniques - Gin Tonic, Negroni', essential: true },
      { name: 'Rhum Blanc', desc: 'Léger et sucré - Mojito, Daiquiri, Piña Colada', essential: true },
      { name: 'Rhum Ambré', desc: 'Plus complexe - Mai Tai, Dark & Stormy', essential: false },
      { name: 'Tequila Blanco', desc: 'Agave pur - Margarita, Paloma, Tequila Sunrise', essential: true },
    ],
  },
  {
    icon: '🍸',
    title: 'Liqueurs & Vermouths',
    description: 'Pour ajouter complexité et douceur',
    items: [
      { name: 'Vermouth Rouge', desc: 'Essentiel pour Negroni, Manhattan', essential: true },
      { name: 'Vermouth Dry', desc: 'Pour le Martini classique', essential: true },
      { name: 'Triple Sec/Cointreau', desc: 'Orange - Margarita, Cosmopolitan', essential: true },
      { name: 'Campari', desc: 'Amer italien - Negroni, Americano', essential: true },
      { name: 'Aperol', desc: 'Plus doux que Campari - Spritz', essential: false },
      { name: 'Kahlúa', desc: 'Café - Espresso Martini, White Russian', essential: false },
    ],
  },
  {
    icon: '🍋',
    title: 'Agrumes & Jus',
    description: 'Fraîcheur et acidité essentielles',
    items: [
      { name: 'Citrons frais', desc: 'Toujours presser au moment - jamais en bouteille', essential: true },
      { name: 'Limes fraîches', desc: 'Indispensables pour Mojito, Margarita, Daiquiri', essential: true },
      { name: 'Oranges', desc: 'Jus et zestes pour garniture', essential: true },
      { name: 'Pamplemousse', desc: 'Pour Paloma et variations', essential: false },
      { name: 'Jus de cranberry', desc: 'Cosmopolitan, Sea Breeze', essential: false },
      { name: 'Jus d\'ananas', desc: 'Piña Colada, drinks tropicaux', essential: false },
    ],
  },
  {
    icon: '🍯',
    title: 'Sirops & Sucres',
    description: 'Équilibrer et adoucir vos créations',
    items: [
      { name: 'Sirop Simple', desc: 'Base essentielle - 1:1 sucre et eau', essential: true },
      { name: 'Sirop de Canne', desc: 'Plus riche - idéal pour Mojito, Daiquiri', essential: true },
      { name: 'Grenadine', desc: 'Tequila Sunrise, Shirley Temple', essential: false },
      { name: 'Sirop d\'Orgeat', desc: 'Amande - Mai Tai', essential: false },
      { name: 'Miel', desc: 'Pour Bee\'s Knees et variations', essential: false },
      { name: 'Sucre en Morceaux', desc: 'Old Fashioned traditionnel', essential: true },
    ],
  },
  {
    icon: '🧊',
    title: 'Garnitures & Extras',
    description: 'Les détails qui font la différence',
    items: [
      { name: 'Glace de qualité', desc: 'Gros cubes pour cocktails, pilée pour tiki', essential: true },
      { name: 'Angostura Bitters', desc: 'Quelques gouttes transforment tout', essential: true },
      { name: 'Olives', desc: 'Pour Martini classique', essential: true },
      { name: 'Cerises Maraschino', desc: 'Manhattan, Old Fashioned', essential: true },
      { name: 'Menthe fraîche', desc: 'Mojito, Julep', essential: true },
      { name: 'Sel fin', desc: 'Pour les bords de verre - Margarita', essential: true },
    ],
  },
  {
    icon: '🥤',
    title: 'Sodas & Mixers',
    description: 'Pour allonger et rafraîchir',
    items: [
      { name: 'Eau gazeuse/Soda', desc: 'Highballs et spritz', essential: true },
      { name: 'Tonic Water', desc: 'Gin Tonic - choisir une marque de qualité', essential: true },
      { name: 'Ginger Beer', desc: 'Moscow Mule, Dark & Stormy', essential: true },
      { name: 'Cola', desc: 'Cuba Libre, Whisky Cola', essential: false },
      { name: 'Ginger Ale', desc: 'Alternative plus douce au ginger beer', essential: false },
      { name: 'Limonade', desc: 'Lynchburg Lemonade, Tom Collins', essential: false },
    ],
  },
];

const tips = [
  'Commencez par les essentiels et ajoutez progressivement selon vos goûts',
  'Investissez dans des spiritueux de qualité moyenne - pas besoin du plus cher',
  'Les jus doivent toujours être frais - le jus de citron en bouteille ruine les cocktails',
  'Faites votre propre sirop simple : c\'est facile et bien meilleur',
  'La glace est cruciale - utilisez de gros cubes pour éviter la dilution rapide',
  'Gardez vos vermouths au réfrigérateur après ouverture',
  'Un bon shaker et une passoire valent l\'investissement',
];

export const BarStockPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll('.category-section');

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom-=100',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, []);

  return (
    <PageWrapper>
      <PageHeader>
        <PageLabel>Guide Essentiel</PageLabel>
        <PageTitle>Bar Bien Approvisionné</PageTitle>
        <PageDesc>
          Tout ce dont vous avez besoin pour créer des cocktails exceptionnels chez vous.
          Des spiritueux de base aux garnitures, voici la liste complète.
        </PageDesc>
      </PageHeader>

      <ContentSection ref={containerRef}>
        <IntroText>
          <p>
            Un bar bien approvisionné ne nécessite pas des centaines de bouteilles.
            Avec une sélection judicieuse de spiritueux de base, quelques liqueurs clés,
            et des ingrédients frais, vous pouvez préparer la grande majorité des cocktails classiques.
          </p>
          <p>
            Les éléments marqués <EssentialBadge>Essentiel</EssentialBadge> sont
            les indispensables pour débuter.
          </p>
        </IntroText>

        {barCategories.map((category, index) => (
          <CategorySection key={index} className="category-section">
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <div>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDesc>{category.description}</CategoryDesc>
              </div>
            </CategoryHeader>

            <ItemsList>
              {category.items.map((item, i) => (
                <ItemRow key={i}>
                  <ItemInfo>
                    <ItemName>
                      {item.name}
                      {item.essential && <EssentialBadge>Essentiel</EssentialBadge>}
                    </ItemName>
                    <ItemDesc>{item.desc}</ItemDesc>
                  </ItemInfo>
                </ItemRow>
              ))}
            </ItemsList>
          </CategorySection>
        ))}

        <TipsSection className="category-section">
          <TipsTitle>Conseils pour Débuter</TipsTitle>
          <TipsList>
            {tips.map((tip, i) => (
              <TipItem key={i}>
                <TipText>{tip}</TipText>
              </TipItem>
            ))}
          </TipsList>
        </TipsSection>
      </ContentSection>
    </PageWrapper>
  );
};

export default BarStockPage;
