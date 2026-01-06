import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colors, typography, spacing } from '../styles/designTokens';

const Header = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${spacing[4]} ${spacing[8]};
  background: ${props => props.$scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${props => props.$scrolled ? colors.border.default : 'transparent'};
  transition: all 0.4s ease;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: ${typography.fontFamily.display};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.accent.primary};
  letter-spacing: ${typography.letterSpacing.tight};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing[8]};

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: ${spacing[8]};
    background: ${colors.background.primary};
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.4s ease;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  color: ${props => props.$active ? colors.accent.primary : colors.text.secondary};
  position: relative;
  padding: ${spacing[2]} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 1px;
    background: ${colors.accent.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.accent.primary};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.xl};
  }
`;

const MenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${colors.text.primary};
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
      margin: 6px 0;
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
    }
  }
`;

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/recettes', label: 'Recettes' },
  { path: '/ingredients', label: 'Ingrédients' },
  { path: '/spiritueux', label: 'Spiritueux' },
  { path: '/bar-stock', label: 'Le Bar' },
  { path: '/bar-basics', label: 'Techniques' },
  { path: '/contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Header $scrolled={scrolled}>
      <Nav>
        <Logo to="/">Le Old Fashioned</Logo>

        <MenuButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </MenuButton>

        <NavLinks $isOpen={isOpen}>
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                $active={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>
      </Nav>
    </Header>
  );
};

export default Navigation;
