import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { FloatingBackground } from './components/ui/FloatingBackground';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { GlobalStyles } from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import RecettesPage from './pages/RecettesPage';
import CocktailDetailPage from './pages/CocktailDetailPage';
import IngredientsPage from './pages/IngredientsPage';
import SpiriteuxPage from './pages/SpiriteuxPage';
import BarBasicsPage from './pages/BarBasicsPage';
import BarStockPage from './pages/BarStockPage';
import styled from 'styled-components';
import { colors, typography, spacing } from './styles/designTokens';

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Footer = styled.footer`
  padding: 100px ${spacing[8]} ${spacing[12]};
  background: linear-gradient(135deg, ${colors.background.dark} 0%, ${colors.palette.burgundyDark} 100%);
  color: ${colors.text.light};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -150px;
    right: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(232, 168, 140, 0.1) 0%, transparent 60%);
    border-radius: 50%;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${spacing[12]};
  margin-bottom: ${spacing[16]};

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: ${spacing[8]};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterBrand = styled.div`
  h3 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['3xl']};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text.light};
    margin-bottom: ${spacing[2]};

    span {
      color: ${colors.palette.coral};
      font-style: italic;
    }
  }

  .tagline {
    font-family: ${typography.fontFamily.serif};
    font-size: ${typography.fontSize.base};
    font-style: italic;
    color: ${colors.text.lightSecondary};
    margin-top: ${spacing[4]};
    max-width: 280px;

    @media (max-width: 600px) {
      margin: ${spacing[4]} auto 0;
    }
  }
`;

const FooterNav = styled.div`
  h4 {
    font-size: ${typography.fontSize.xs};
    font-weight: ${typography.fontWeight.medium};
    color: ${colors.palette.coral};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    margin-bottom: ${spacing[6]};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${spacing[3]};
  }

  a {
    font-size: ${typography.fontSize.sm};
    color: ${colors.text.lightSecondary};
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.palette.coral};
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
  border-top: 1px solid ${colors.border.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing[4]};

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.lightSecondary};
`;

const Legal = styled.p`
  font-family: ${typography.fontFamily.serif};
  font-size: ${typography.fontSize.xs};
  font-style: italic;
  color: ${colors.text.muted};
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <SmoothScroll>
        <ScrollToTop />
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
            </Routes>
          </main>

          <Footer>
            <FooterContainer>
              <FooterTop>
                <FooterBrand>
                  <h3>Le Old <span>Fashioned</span></h3>
                  <p className="tagline">
                    L'art du cocktail, simplement. Une expérience raffinée au coeur de la mixologie.
                  </p>
                </FooterBrand>

                <FooterNav>
                  <h4>Navigation</h4>
                  <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/recettes">Cocktails</Link></li>
                    <li><Link to="/ingredients">Ingrédients</Link></li>
                    <li><Link to="/bar-stock">Le Bar</Link></li>
                  </ul>
                </FooterNav>

                <FooterNav>
                  <h4>Spiritueux</h4>
                  <ul>
                    <li><Link to="/spiritueux#whisky">Whisky</Link></li>
                    <li><Link to="/spiritueux#gin">Gin</Link></li>
                    <li><Link to="/spiritueux#rhum">Rhum</Link></li>
                    <li><Link to="/spiritueux#vodka">Vodka</Link></li>
                  </ul>
                </FooterNav>

                <FooterNav>
                  <h4>Techniques</h4>
                  <ul>
                    <li><Link to="/bar-basics">Les bases</Link></li>
                    <li><Link to="/bar-basics#shaking">Shaking</Link></li>
                    <li><Link to="/bar-basics#stirring">Stirring</Link></li>
                    <li><Link to="/bar-basics#muddling">Muddling</Link></li>
                  </ul>
                </FooterNav>
              </FooterTop>

              <FooterBottom>
                <Copyright>&copy; 2024 Le Old Fashioned. Tous droits réservés.</Copyright>
                <Legal>L'abus d'alcool est dangereux pour la santé. À consommer avec modération.</Legal>
              </FooterBottom>
            </FooterContainer>
          </Footer>
        </AppWrapper>
      </SmoothScroll>
    </Router>
  );
}

export default App;
