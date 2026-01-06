import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/designTokens';

const FLOATING_WORDS = [
  'COCKTAILS', 'WHISKY', 'OLD FASHIONED', 'NEGRONI', 'MARTINI',
  'SHAKER', 'MIXOLOGIE', 'BOURBON', 'GIN', 'RHUM', 'SPIRITS', 'BAR'
];

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(100px, -50px) rotate(5deg); }
  50% { transform: translate(50px, 100px) rotate(-5deg); }
  75% { transform: translate(-50px, 50px) rotate(3deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-80px, 80px) rotate(-8deg); }
  66% { transform: translate(60px, -40px) rotate(8deg); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(40px, 60px); }
  40% { transform: translate(-30px, 120px); }
  60% { transform: translate(80px, 80px); }
  80% { transform: translate(-60px, 20px); }
`;

const drift = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  10% { opacity: 0.08; }
  90% { opacity: 0.08; }
  100% { transform: translateX(100vw); opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.03; transform: scale(1); }
  50% { opacity: 0.08; transform: scale(1.1); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.4; }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const FloatingWord = styled.span<{
  $x: number;
  $y: number;
  $size: number;
  $duration: number;
  $delay: number;
  $animation: number;
}>`
  position: absolute;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  font-size: ${props => props.$size}px;
  font-weight: 800;
  font-family: 'Playfair Display', serif;
  color: ${colors.text.primary};
  opacity: 0.02;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: ${props => {
    switch(props.$animation % 3) {
      case 0: return float1;
      case 1: return float2;
      default: return float3;
    }
  }} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  white-space: nowrap;
  user-select: none;
`;

const DriftingWord = styled.span<{
  $y: number;
  $size: number;
  $duration: number;
  $delay: number;
}>`
  position: absolute;
  top: ${props => props.$y}%;
  font-size: ${props => props.$size}px;
  font-weight: 900;
  font-family: 'Playfair Display', serif;
  color: ${colors.accent.primary};
  opacity: 0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  animation: ${drift} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  white-space: nowrap;
  user-select: none;
`;

const Particle = styled.div<{
  $x: number;
  $y: number;
  $size: number;
  $duration: number;
  $delay: number;
}>`
  position: absolute;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${colors.accent.primary};
  border-radius: 50%;
  opacity: 0.1;
  animation: ${twinkle} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const GlowOrb = styled.div<{
  $x: number;
  $y: number;
  $size: number;
  $duration: number;
}>`
  position: absolute;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: radial-gradient(circle, ${colors.accent.muted} 0%, transparent 70%);
  border-radius: 50%;
  animation: ${pulse} ${props => props.$duration}s ease-in-out infinite;
  filter: blur(40px);
`;

const GridLine = styled.div<{ $horizontal?: boolean; $position: number }>`
  position: absolute;
  ${props => props.$horizontal ? `
    left: 0;
    right: 0;
    top: ${props.$position}%;
    height: 1px;
  ` : `
    top: 0;
    bottom: 0;
    left: ${props.$position}%;
    width: 1px;
  `}
  background: linear-gradient(
    ${props => props.$horizontal ? '90deg' : '180deg'},
    transparent 0%,
    ${colors.border.default} 50%,
    transparent 100%
  );
  opacity: 0.2;
`;

export const FloatingBackground: React.FC = () => {
  const floatingWords = FLOATING_WORDS.map((word, i) => ({
    word,
    x: Math.random() * 90,
    y: Math.random() * 90,
    size: 14 + Math.random() * 28,
    duration: 25 + Math.random() * 35,
    delay: Math.random() * 15,
    animation: i,
  }));

  const driftingWords = [
    { word: 'COCKTAILS', y: 20, size: 70, duration: 50, delay: 0 },
    { word: 'OLD FASHIONED', y: 45, size: 55, duration: 60, delay: 15 },
    { word: 'MIXOLOGIE', y: 70, size: 65, duration: 55, delay: 8 },
    { word: 'SPIRITS', y: 85, size: 80, duration: 65, delay: 25 },
  ];

  const particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 5,
  }));

  const glowOrbs = [
    { x: 10, y: 20, size: 400, duration: 8 },
    { x: 80, y: 50, size: 350, duration: 10 },
    { x: 40, y: 80, size: 300, duration: 12 },
  ];

  return (
    <Container>
      <GridLine $horizontal $position={25} />
      <GridLine $horizontal $position={50} />
      <GridLine $horizontal $position={75} />
      <GridLine $position={25} />
      <GridLine $position={50} />
      <GridLine $position={75} />

      {glowOrbs.map((orb, i) => (
        <GlowOrb
          key={`orb-${i}`}
          $x={orb.x}
          $y={orb.y}
          $size={orb.size}
          $duration={orb.duration}
        />
      ))}

      {floatingWords.slice(0, 8).map((item, i) => (
        <FloatingWord
          key={`float-${i}`}
          $x={item.x}
          $y={item.y}
          $size={item.size}
          $duration={item.duration}
          $delay={item.delay}
          $animation={item.animation}
        >
          {item.word}
        </FloatingWord>
      ))}

      {driftingWords.map((item, i) => (
        <DriftingWord
          key={`drift-${i}`}
          $y={item.y}
          $size={item.size}
          $duration={item.duration}
          $delay={item.delay}
        >
          {item.word}
        </DriftingWord>
      ))}

      {particles.map((particle, i) => (
        <Particle
          key={`particle-${i}`}
          $x={particle.x}
          $y={particle.y}
          $size={particle.size}
          $duration={particle.duration}
          $delay={particle.delay}
        />
      ))}
    </Container>
  );
};

export default FloatingBackground;
