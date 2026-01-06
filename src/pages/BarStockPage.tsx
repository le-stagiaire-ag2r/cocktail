import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';

gsap.registerPlugin(ScrollTrigger);

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
  max-width: 700px;
  margin: 0 auto;
  line-height: ${typography.lineHeight.relaxed};
`;

const ContentSection = styled.section`
  padding: ${spacing[16]} ${spacing[8]};
  max-width: 1200px;
  margin: 0 auto;
`;

const IntroText = styled.div`
  max-width: 800px;
  margin: 0 auto ${spacing[16]};
  text-align: center;

  p {
    font-size: ${typography.fontSize.lg};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeight.relaxed};
    margin-bottom: ${spacing[4]};
  }
`;

const CategorySection = styled.div`
  margin-bottom: ${spacing[16]};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[8]};
`;

const CategoryIcon = styled.span`
  font-size: ${typography.fontSize['3xl']};
`;

const CategoryTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.primary};
`;

const CategoryDesc = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.text.tertiary};
  margin-top: ${spacing[2]};
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${spacing[4]};
`;

const ItemCard = styled.div`
  padding: ${spacing[6]};
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateY(-3px);
  }
`;

const ItemName = styled.h3`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[2]};
`;

const ItemDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.tertiary};
  line-height: ${typography.lineHeight.relaxed};
`;

const EssentialBadge = styled.span`
  display: inline-block;
  padding: ${spacing[1]} ${spacing[2]};
  margin-left: ${spacing[2]};
  font-size: ${typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  background: ${colors.accent.subtle};
  color: ${colors.accent.primary};
`;

const TipsSection = styled.div`
  margin-top: ${spacing[16]};
  padding: ${spacing[12]};
  background: ${colors.background.secondary};
  border: 1px solid ${colors.border.default};
`;

const TipsTitle = styled.h2`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.accent.primary};
  margin-bottom: ${spacing[6]};
  text-align: center;
`;

const TipsList = styled.ul`
  max-width: 700px;
  margin: 0 auto;
`;

const TipItem = styled.li`
  display: flex;
  gap: ${spacing[4]};
  padding: ${spacing[4]} 0;
  border-bottom: 1px solid ${colors.border.subtle};

  &:last-child {
    border-bottom: none;
  }
`;

const TipNumber = styled.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.accent.primary};
  background: ${colors.accent.subtle};
  border-radius: 50%;
`;

const TipText = styled.span`
  font-size: ${typography.fontSize.base};
  color: ${colors.text.secondary};
  line-height: ${typography.lineHeight.relaxed};
`;

const barCategories = [
  {
    icon: '🥃',
    title: 'Spiritueux de Base',
    description: 'Les fondations de tout bar à cocktails',
    items: [
      { name: 'Whisky/Bourbon', desc: 'Base du Old Fashioned, Manhattan, Whisky Sour', essential: true },
      { name: 'Vodka', desc: 'Neutre et polyvalente - Moscow Mule, Bloody Mary, Martini', essential: true },
      { name: 'Gin', desc: 'Aromatique aux botaniques - Gin Tonic, Negroni, Martini', essential: true },
      { name: 'Rhum Blanc', desc: 'Léger et sucré - Mojito, Daiquiri, Piña Colada', essential: true },
      { name: 'Rhum Ambré', desc: 'Plus complexe - Mai Tai, Dark & Stormy', essential: false },
      { name: 'Tequila Blanco', desc: 'Agave pur - Margarita, Paloma, Tequila Sunrise', essential: true },
      { name: 'Cognac/Brandy', desc: 'Élégant - Sidecar, Brandy Alexander', essential: false },
    ],
  },
  {
    icon: '🍸',
    title: 'Liqueurs & Vermouths',
    description: 'Pour ajouter complexité et douceur',
    items: [
      { name: 'Vermouth Rouge', desc: 'Essentiel pour Negroni, Manhattan', essential: true },
      { name: 'Vermouth Blanc/Dry', desc: 'Pour le Martini classique', essential: true },
      { name: 'Triple Sec/Cointreau', desc: 'Orange - Margarita, Cosmopolitan', essential: true },
      { name: 'Campari', desc: 'Amer italien - Negroni, Americano', essential: true },
      { name: 'Aperol', desc: 'Plus doux que Campari - Spritz', essential: false },
      { name: 'Kahlúa', desc: 'Café - Espresso Martini, White Russian', essential: false },
      { name: 'Amaretto', desc: 'Amande - Amaretto Sour', essential: false },
    ],
  },
  {
    icon: '🍋',
    title: 'Agrumes & Jus',
    description: 'Fraîcheur et acidité essentielles',
    items: [
      { name: 'Citrons frais', desc: 'Toujours presser au moment - ne jamais utiliser de jus en bouteille', essential: true },
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
      { name: 'Glace de qualité', desc: 'Gros cubes pour les cocktails, pilée pour les tiki', essential: true },
      { name: 'Angostura Bitters', desc: 'Quelques gouttes transforment tout', essential: true },
      { name: 'Olives', desc: 'Pour Martini', essential: true },
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
      { name: 'Cola', desc: 'Cuba Libre, Jack & Coke', essential: false },
      { name: 'Ginger Ale', desc: 'Alternative plus douce au ginger beer', essential: false },
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
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      <PageHeader>
        <PageLabel>Guide Essentiel</PageLabel>
        <PageTitle>Bar Bien Approvisionné</PageTitle>
        <PageDesc>
          Tout ce dont vous avez besoin pour créer des cocktails exceptionnels chez vous.
          Des spiritueux de base aux garnitures, voici la liste complète pour monter votre bar.
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
            les indispensables pour débuter. Ajoutez les autres au fur et à mesure de vos explorations.
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

            <ItemsGrid>
              {category.items.map((item, i) => (
                <ItemCard key={i}>
                  <ItemName>
                    {item.name}
                    {item.essential && <EssentialBadge>Essentiel</EssentialBadge>}
                  </ItemName>
                  <ItemDesc>{item.desc}</ItemDesc>
                </ItemCard>
              ))}
            </ItemsGrid>
          </CategorySection>
        ))}

        <TipsSection className="category-section">
          <TipsTitle>Conseils pour Débuter</TipsTitle>
          <TipsList>
            {tips.map((tip, i) => (
              <TipItem key={i}>
                <TipNumber>{i + 1}</TipNumber>
                <TipText>{tip}</TipText>
              </TipItem>
            ))}
          </TipsList>
        </TipsSection>
      </ContentSection>
    </>
  );
};

export default BarStockPage;
