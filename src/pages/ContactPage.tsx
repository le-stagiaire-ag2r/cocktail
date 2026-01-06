import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors, typography, spacing } from '../styles/designTokens';

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
  max-width: 600px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: ${spacing[16]} ${spacing[8]};
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactBlock = styled.div`
  margin-bottom: ${spacing[10]};

  h3 {
    display: flex;
    align-items: center;
    gap: ${spacing[3]};
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize.xl};
    color: ${colors.accent.primary};
    margin-bottom: ${spacing[4]};

    span {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: ${typography.fontSize.base};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeight.relaxed};
    margin-bottom: ${spacing[1]};
  }

  a {
    color: ${colors.text.secondary};
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.accent.primary};
    }
  }
`;

const HoursTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid ${colors.border.default};
  }

  td {
    padding: ${spacing[3]} 0;
    font-size: ${typography.fontSize.base};
    color: ${colors.text.secondary};

    &:last-child {
      text-align: right;
      color: ${colors.text.tertiary};
    }
  }

  .closed {
    font-style: italic;
    color: ${colors.text.tertiary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing[3]};
  margin-top: ${spacing[4]};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 1.25rem;
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.accent.primary};
    background: ${colors.accent.subtle};
  }
`;

const FormSection = styled.div`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  padding: ${spacing[10]};

  h2 {
    font-family: ${typography.fontFamily.display};
    font-size: ${typography.fontSize['2xl']};
    color: ${colors.text.primary};
    margin-bottom: ${spacing[2]};
  }

  > p {
    font-size: ${typography.fontSize.base};
    color: ${colors.text.tertiary};
    margin-bottom: ${spacing[8]};
  }
`;

const Form = styled.form``;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[4]};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${spacing[5]};

  label {
    display: block;
    font-size: ${typography.fontSize.sm};
    font-weight: ${typography.fontWeight.medium};
    color: ${colors.text.secondary};
    margin-bottom: ${spacing[2]};
  }

  input, select, textarea {
    width: 100%;
    padding: ${spacing[4]};
    font-family: ${typography.fontFamily.body};
    font-size: ${typography.fontSize.base};
    color: ${colors.text.primary};
    background: ${colors.background.primary};
    border: 1px solid ${colors.border.default};
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${colors.accent.primary};
    }

    &::placeholder {
      color: ${colors.text.tertiary};
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  select {
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  padding: ${spacing[4]} ${spacing[10]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wider};
  color: ${colors.background.primary};
  background: ${colors.accent.primary};
  border: 2px solid ${colors.accent.primary};
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: ${colors.accent.primary};
  }
`;

const MapSection = styled.section`
  padding: ${spacing[16]} ${spacing[8]};
  background: ${colors.background.secondary};
`;

const MapPlaceholder = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  aspect-ratio: 21/9;
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing[4]};

  span {
    font-size: 4rem;
  }

  p {
    color: ${colors.text.tertiary};
  }
`;

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
    }

    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current.querySelectorAll('.contact-block'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <PageHeader>
        <PageLabel>Contact</PageLabel>
        <PageTitle>Nous Contacter</PageTitle>
        <PageDesc>
          Une question, une réservation ? N'hésitez pas à nous contacter.
        </PageDesc>
      </PageHeader>

      <ContentSection>
        <ContactGrid>
          <ContactInfo ref={infoRef}>
            <ContactBlock className="contact-block">
              <h3><span>📍</span> Adresse</h3>
              <p>Adresse à définir</p>
              <p>75000 Paris, France</p>
            </ContactBlock>

            <ContactBlock className="contact-block">
              <h3><span>🕐</span> Horaires</h3>
              <HoursTable>
                <tbody>
                  <tr>
                    <td>Lundi</td>
                    <td className="closed">Fermé</td>
                  </tr>
                  <tr>
                    <td>Mardi - Dimanche</td>
                    <td>18h00 - 02h00</td>
                  </tr>
                </tbody>
              </HoursTable>
            </ContactBlock>

            <ContactBlock className="contact-block">
              <h3><span>📞</span> Téléphone</h3>
              <p><a href="tel:+33100000000">+33 1 00 00 00 00</a></p>
            </ContactBlock>

            <ContactBlock className="contact-block">
              <h3><span>✉️</span> Email</h3>
              <p><a href="mailto:contact@leoldfashioned.fr">contact@leoldfashioned.fr</a></p>
            </ContactBlock>

            <ContactBlock className="contact-block">
              <h3><span>🔗</span> Réseaux Sociaux</h3>
              <SocialLinks>
                <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
                <SocialLink href="#" aria-label="Facebook">👤</SocialLink>
                <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
              </SocialLinks>
            </ContactBlock>
          </ContactInfo>

          <FormSection ref={formRef}>
            <h2>Envoyez-nous un message</h2>
            <p>Pour une réservation ou toute autre demande.</p>

            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <label htmlFor="firstName">Prénom *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="lastName">Nom *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 6 00 00 00 00"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="subject">Sujet *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="reservation">Réservation</option>
                  <option value="privatisation">Privatisation</option>
                  <option value="evenement">Événement spécial</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre message..."
                />
              </FormGroup>

              <SubmitButton type="submit">Envoyer le message</SubmitButton>
            </Form>
          </FormSection>
        </ContactGrid>
      </ContentSection>

      <MapSection>
        <MapPlaceholder>
          <span>🗺️</span>
          <p>Carte interactive - Adresse à définir</p>
        </MapPlaceholder>
      </MapSection>
    </>
  );
};

export default ContactPage;
