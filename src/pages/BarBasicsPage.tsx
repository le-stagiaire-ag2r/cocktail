import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, typography, spacing } from '../styles/designTokens';
import { techniques, tools } from '../data/cocktails';

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
    rgb(107, 58, 74) 0%,
    rgb(139, 69, 87) 20%,
    rgb(180, 100, 80) 40%,
    rgb(196, 112, 77) 60%,
    rgb(125, 139, 106) 80%,
    rgb(107, 122, 88) 100%
  );
  overflow-x: hidden;
`;

const PageHeader = styled.section`
  padding: 160px ${spacing[8]} 100px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -80px;
    width: 300px;
    height: 300px;
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

const Section = styled.section`
  padding: ${spacing[16]} ${spacing[8]};
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    padding: ${spacing[10]} ${spacing[4]};
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing[12]};
  padding-bottom: ${spacing[6]};
  border-bottom: 1px solid rgba(247, 245, 235, 0.15);

  h2 {
    font-family: ${typography.fontFamily.display};
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
    margin-bottom: ${spacing[4]};
  }

  p {
    font-family: ${typography.fontFamily.serif};
    font-size: ${typography.fontSize.lg};
    font-style: italic;
    color: rgba(247, 245, 235, 0.7);
    max-width: 600px;
    margin: 0 auto;
  }
`;

// Techniques en liste fluide
const TechniquesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechniqueItem = styled.div`
  padding: ${spacing[8]} 0;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);

  &:last-child {
    border-bottom: none;
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
    font-size: ${typography.fontSize['2xl']};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
  }

  @media (max-width: 640px) {
    gap: ${spacing[3]};

    span {
      font-size: 1.8rem;
    }

    h3 {
      font-size: ${typography.fontSize.xl};
    }
  }
`;

const TechniqueDesc = styled.p`
  font-size: ${typography.fontSize.base};
  color: rgba(247, 245, 235, 0.7);
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.relaxed};
  max-width: 700px;
`;

const TechniqueSteps = styled.ol`
  counter-reset: step;
  padding-left: ${spacing[2]};

  li {
    counter-increment: step;
    position: relative;
    padding-left: ${spacing[10]};
    padding-bottom: ${spacing[3]};
    color: rgba(247, 245, 235, 0.8);
    font-size: ${typography.fontSize.sm};
    line-height: ${typography.lineHeight.relaxed};

    &::before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      width: 28px;
      height: 28px;
      background: rgba(247, 238, 192, 0.15);
      color: ${colors.palette.cream};
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.medium};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 13px;
      top: 32px;
      width: 1px;
      height: calc(100% - 24px);
      background: rgba(247, 245, 235, 0.2);
    }
  }
`;

// Outils en grille simple sans cartes
const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[1]};

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ToolItem = styled.div`
  padding: ${spacing[6]};
  text-align: center;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: ${spacing[3]};
  }

  h4 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
    margin-bottom: ${spacing[2]};
  }

  p {
    font-size: ${typography.fontSize.sm};
    color: rgba(247, 245, 235, 0.6);
    line-height: ${typography.lineHeight.relaxed};
  }

  @media (max-width: 640px) {
    padding: ${spacing[4]};

    .icon {
      font-size: 2rem;
    }
  }
`;

// Conseils en liste fluide
const TipsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TipItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${spacing[6]};
  padding: ${spacing[6]} 0;
  border-bottom: 1px solid rgba(247, 245, 235, 0.1);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${spacing[3]};
  }
`;

const TipTitle = styled.h4`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.light};
  color: ${colors.text.light};
  min-width: 150px;
`;

const TipText = styled.p`
  font-size: ${typography.fontSize.base};
  color: rgba(247, 245, 235, 0.7);
  line-height: ${typography.lineHeight.relaxed};
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
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <PageWrapper>
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

          <TechniquesList>
            {techniques.map((tech) => (
              <TechniqueItem key={tech.id} className="animate-item">
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
              </TechniqueItem>
            ))}
          </TechniquesList>
        </Container>
      </Section>

      <Section ref={toolsRef}>
        <Container>
          <SectionHeader>
            <h2>Les Outils Essentiels</h2>
            <p>Un bon bartender a besoin des bons outils. Voici l'équipement indispensable.</p>
          </SectionHeader>

          <ToolsGrid>
            {tools.map((tool, i) => (
              <ToolItem key={i} className="animate-item">
                <div className="icon">{tool.icon}</div>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </ToolItem>
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

          <TipsList>
            {tips.map((tip, i) => (
              <TipItem key={i} className="animate-item">
                <TipTitle>{tip.title}</TipTitle>
                <TipText>{tip.text}</TipText>
              </TipItem>
            ))}
          </TipsList>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default BarBasicsPage;
