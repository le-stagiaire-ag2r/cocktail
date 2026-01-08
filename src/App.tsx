import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { FloatingBackground } from './components/ui/FloatingBackground';
import { Navigation } from './components/Navigation';
import { GlobalStyles } from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import RecettesPage from './pages/RecettesPage';
import CocktailDetailPage from './pages/CocktailDetailPage';
import IngredientsPage from './pages/IngredientsPage';
import SpiriteuxPage from './pages/SpiriteuxPage';
import BarBasicsPage from './pages/BarBasicsPage';
import BarStockPage from './pages/BarStockPage';
import ContactPage from './pages/ContactPage';
import styled from 'styled-components';
import { colors, typography, spacing } from './styles/designTokens';

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Footer = styled.footer`
  padding: ${spacing[16]} ${spacing[8]};
  background: ${colors.background.secondary};
  border-top: 1px solid ${colors.border.default};
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${spacing[10]};
  margin-bottom: ${spacing[12]};

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterBrand = styled.div`
  h3 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['2xl']};
    color: ${colors.accent.primary};
    margin-bottom: ${spacing[2]};
  }

  p {
    color: ${colors.text.tertiary};
    font-size: ${typography.fontSize.sm};
    margin-bottom: ${spacing[1]};
  }

  .tagline {
    font-style: italic;
    color: ${colors.text.secondary};
    margin-top: ${spacing[4]};
  }
`;

const FooterNav = styled.div`
  h4 {
    font-size: ${typography.fontSize.sm};
    font-weight: ${typography.fontWeight.semibold};
    color: ${colors.text.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.wide};
    margin-bottom: ${spacing[4]};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${spacing[2]};
  }

  a {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.tertiary};
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.accent.primary};
    }
  }

  @media (max-width: 600px) {
    ul {
      align-items: center;
    }
  }
`;

const FooterBottom = styled.div`
  padding-top: ${spacing[8]};
  border-top: 1px solid ${colors.border.default};
  text-align: center;

  p {
    font-size: ${typography.fontSize.xs};
    color: ${colors.text.tertiary};
    margin-bottom: ${spacing[2]};
  }

  .legal {
    font-style: italic;
    opacity: 0.7;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <SmoothScroll>
        <AppWrapper>
          <FloatingBackground />
          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recettes" element={<RecettesPage />} />
              <Route path="/cocktail/:id" element={<CocktailDetailPage />} />
              <Route path="/ingredients" element={<IngredientsPage />} />
              <Route path="/spiritueux" element={<SpiriteuxPage />} />
              <Route path="/bar-basics" element={<BarBasicsPage />} />
              <Route path="/bar-stock" element={<BarStockPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer>
            <FooterContainer>
              <FooterGrid>
                <FooterBrand>
                  <h3>Le Old Fashioned</h3>
                  <p>Bar à cocktails</p>
                  <p className="tagline">L'art du cocktail, simplement.</p>
                </FooterBrand>

                <FooterNav>
                  <h4>Navigation</h4>
                  <ul>
                    <li><a href="/recettes">Recettes</a></li>
                    <li><a href="/ingredients">Ingrédients</a></li>
                    <li><a href="/spiritueux">Spiritueux</a></li>
                    <li><a href="/bar-stock">Le Bar</a></li>
                    <li><a href="/bar-basics">Techniques</a></li>
                  </ul>
                </FooterNav>

                <FooterNav>
                  <h4>Spiritueux</h4>
                  <ul>
                    <li><a href="/spiritueux#whisky">Whisky</a></li>
                    <li><a href="/spiritueux#gin">Gin</a></li>
                    <li><a href="/spiritueux#rhum">Rhum</a></li>
                    <li><a href="/spiritueux#vodka">Vodka</a></li>
                  </ul>
                </FooterNav>

                <FooterNav>
                  <h4>Contact</h4>
                  <ul>
                    <li><span style={{ color: colors.text.tertiary }}>Adresse à définir</span></li>
                    <li><span style={{ color: colors.text.tertiary }}>Paris, France</span></li>
                    <li><span style={{ color: colors.accent.primary }}>Mar-Dim: 18h-02h</span></li>
                  </ul>
                </FooterNav>
              </FooterGrid>

              <FooterBottom>
                <p>&copy; 2024 Le Old Fashioned. Tous droits réservés.</p>
                <p className="legal">L'abus d'alcool est dangereux pour la santé. À consommer avec modération.</p>
              </FooterBottom>
            </FooterContainer>
          </Footer>
        </AppWrapper>
      </SmoothScroll>
    </Router>
  );
}

export default App;
