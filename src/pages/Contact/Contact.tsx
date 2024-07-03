import React from 'react';
import { ContactContainer, H2WithBorders } from "./Contact.elements";
import ContactInfo from './ContactComponents/ContactInfo';
import ContactFormSection from './ContactComponents/ContacFormSection';

export default function Contact() {
  return (
    <ContactContainer>
      <ContactInfo />
      <H2WithBorders>Información Adicional o Consultas</H2WithBorders>
      <ContactFormSection />
    </ContactContainer>
  );
}
