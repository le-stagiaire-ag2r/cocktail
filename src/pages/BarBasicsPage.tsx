import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';
import { techniques, tools } from '../data/cocktails';

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

const Section = styled.section<{ $alt?: boolean }>`
  padding: ${spacing[20]} ${spacing[8]};
  background: ${props => props.$alt ? colors.background.secondary : colors.background.primary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing[12]};

  h2 {
    font-family: ${typography.fontFamily.display};
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: ${typography.fontWeight.bold};
    color: ${colors.accent.primary};
    margin-bottom: ${spacing[4]};
  }

  p {
    font-size: ${typography.fontSize.lg};
    color: ${colors.text.secondary};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TechniquesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[6]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TechniqueCard = styled.div`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  padding: ${spacing[8]};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateY(-3px);
  }
`;

const TechniqueHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[4]};

  span {
    font-size: 2.5rem;
  }

  h3 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['xl']};
    color: ${colors.accent.primary};
  }
`;

const TechniqueDesc = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.text.secondary};
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.relaxed};
`;

const TechniqueSteps = styled.ol`
  counter-reset: step;

  li {
    counter-increment: step;
    position: relative;
    padding-left: ${spacing[8]};
    padding-bottom: ${spacing[3]};
    color: ${colors.text.secondary};
    font-size: ${typography.fontSize.sm};
    line-height: ${typography.lineHeight.relaxed};

    &::before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: ${colors.accent.subtle};
      color: ${colors.accent.primary};
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.semibold};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 11px;
      top: 28px;
      width: 1px;
      height: calc(100% - 20px);
      background: ${colors.border.default};
    }
  }
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[4]};

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ToolCard = styled.div`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  padding: ${spacing[6]};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.accent.primary};
    transform: translateY(-3px);
  }

  .icon {
    width: 60px;
    height: 60px;
    margin: 0 auto ${spacing[4]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background: ${colors.accent.subtle};
    border: 1px solid ${colors.accent.muted};
    border-radius: 50%;
  }

  h4 {
    font-size: ${typography.fontSize.base};
    color: ${colors.text.primary};
    margin-bottom: ${spacing[2]};
  }

  p {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.tertiary};
  }
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[6]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled.div`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  border-left: 3px solid ${colors.accent.primary};
  padding: ${spacing[6]};

  h4 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.lg};
    color: ${colors.accent.primary};
    margin-bottom: ${spacing[3]};
  }

  p {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeight.relaxed};
  }
`;

const tips = [
  {
    title: 'La Glace',
    text: 'Utilisez toujours de la glace fraîche. Les gros glaçons fondent plus lentement et diluent moins votre cocktail.',
  },
  {
    title: 'Les Proportions',
    text: 'Respectez les proportions des recettes, surtout au début. Un jigger est votre meilleur ami.',
  },
  {
    title: 'La Fraîcheur',
    text: 'Utilisez toujours des jus d\'agrumes fraîchement pressés. La différence est immense.',
  },
  {
    title: 'La Température',
    text: 'Refroidissez vos verres avant de servir. Un cocktail bien froid est un cocktail réussi.',
  },
];

export const BarBasicsPage: React.FC = () => {
  const techniquesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [techniquesRef, toolsRef, tipsRef];

    sections.forEach((ref) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <PageHeader>
        <PageLabel>Guide</PageLabel>
        <PageTitle>L'Art du Cocktail</PageTitle>
        <PageDesc>
          Maîtrisez les techniques essentielles du bartending.
          Des outils indispensables aux méthodes de préparation,
          découvrez tous les secrets pour réaliser des cocktails parfaits.
        </PageDesc>
      </PageHeader>

      <Section ref={techniquesRef}>
        <Container>
          <SectionHeader>
            <h2>Techniques de Base</h2>
            <p>Chaque cocktail a sa méthode de préparation. Voici les techniques fondamentales.</p>
          </SectionHeader>

          <TechniquesGrid>
            {techniques.map((tech) => (
              <TechniqueCard key={tech.id} className="animate-item">
                <TechniqueHeader>
                  <span>{tech.icon}</span>
                  <h3>{tech.name}</h3>
                </TechniqueHeader>
                <TechniqueDesc>{tech.description}</TechniqueDesc>
                <TechniqueSteps>
                  {tech.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </TechniqueSteps>
              </TechniqueCard>
            ))}
          </TechniquesGrid>
        </Container>
      </Section>

      <Section $alt ref={toolsRef}>
        <Container>
          <SectionHeader>
            <h2>Les Outils Essentiels</h2>
            <p>Un bon bartender a besoin des bons outils. Voici l'équipement indispensable.</p>
          </SectionHeader>

          <ToolsGrid>
            {tools.map((tool, i) => (
              <ToolCard key={i} className="animate-item">
                <div className="icon">{tool.icon}</div>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </ToolCard>
            ))}
          </ToolsGrid>
        </Container>
      </Section>

      <Section ref={tipsRef}>
        <Container>
          <SectionHeader>
            <h2>Conseils de Pro</h2>
            <p>Quelques astuces pour élever vos cocktails au niveau supérieur.</p>
          </SectionHeader>

          <TipsGrid>
            {tips.map((tip, i) => (
              <TipCard key={i} className="animate-item">
                <h4>{tip.title}</h4>
                <p>{tip.text}</p>
              </TipCard>
            ))}
          </TipsGrid>
        </Container>
      </Section>
    </>
  );
};

export default BarBasicsPage;
