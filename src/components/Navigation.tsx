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
  padding: ${props => props.$scrolled ? spacing[3] : spacing[5]} ${spacing[8]};
  background: ${props => props.$scrolled
    ? 'rgba(107, 58, 74, 0.98)'
    : 'linear-gradient(180deg, rgba(107, 58, 74, 0.9) 0%, rgba(107, 58, 74, 0.7) 50%, transparent 100%)'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 640px) {
    padding: ${props => props.$scrolled ? spacing[2] : spacing[3]} ${spacing[4]};
  }
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
  font-weight: ${typography.fontWeight.light};
  color: ${colors.palette.cream};
  letter-spacing: ${typography.letterSpacing.wide};
  transition: color 0.3s ease;

  span {
    color: ${colors.palette.coral};
    font-style: italic;
  }

  &:hover {
    color: ${colors.palette.coral};
  }

  @media (max-width: 640px) {
    font-size: ${typography.fontSize.lg};
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing[8]};

  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: ${spacing[6]};
    background: ${colors.gradient.burgundy};
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: ${typography.fontFamily.body};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.widest};
  color: ${props => props.$active ? colors.palette.coral : 'rgba(247, 245, 235, 0.8)'};
  position: relative;
  padding: ${spacing[2]} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 1px;
    background: ${colors.palette.coral};
    transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover {
    color: ${colors.palette.coral};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 968px) {
    font-size: ${typography.fontSize.lg};
    letter-spacing: ${typography.letterSpacing.ultrawide};
    color: ${colors.palette.cream};
  }
`;

const MenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  z-index: 1001;

  @media (max-width: 968px) {
    display: flex;
  }

  span {
    display: block;
    width: 28px;
    height: 1px;
    background: ${colors.palette.cream};
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
      margin: 8px 0;
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
    }
  }
`;

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/recettes', label: 'Cocktails' },
  { path: '/ingredients', label: 'Ingrédients' },
  { path: '/spiritueux', label: 'Spiritueux' },
  { path: '/bar-stock', label: 'Le Bar' },
  { path: '/bar-basics', label: 'Techniques' },
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
        <Logo to="/">Le Old <span>Fashioned</span></Logo>

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
