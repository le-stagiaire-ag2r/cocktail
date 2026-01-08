import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, 20px); }
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

const GlowOrb = styled.div<{
  $x: number;
  $y: number;
  $size: number;
  $duration: number;
  $color: string;
}>`
  position: absolute;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: radial-gradient(circle, ${props => props.$color} 0%, transparent 70%);
  border-radius: 50%;
  animation: ${float} ${props => props.$duration}s ease-in-out infinite;
  filter: blur(80px);
  opacity: 0.4;
`;

const TextureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.02;
  pointer-events: none;
`;

export const FloatingBackground: React.FC = () => {
  const glowOrbs = [
    { x: 5, y: 10, size: 600, duration: 15, color: 'rgba(204, 153, 0, 0.08)' },
    { x: 75, y: 30, size: 500, duration: 18, color: 'rgba(105, 103, 58, 0.06)' },
    { x: 30, y: 70, size: 550, duration: 20, color: 'rgba(147, 58, 33, 0.04)' },
  ];

  return (
    <Container>
      {glowOrbs.map((orb, i) => (
        <GlowOrb
          key={`orb-${i}`}
          $x={orb.x}
          $y={orb.y}
          $size={orb.size}
          $duration={orb.duration}
          $color={orb.color}
        />
      ))}
      <TextureOverlay />
    </Container>
  );
};

export default FloatingBackground;
