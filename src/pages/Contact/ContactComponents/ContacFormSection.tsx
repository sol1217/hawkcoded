import React from 'react';
import { ContactForm } from "./../Contact.elements";
import ContactAdditionalInfo from './ContactAdditionalInfo';
import Formulario from './Formulario';

const ContactFormSection: React.FC = () => (
  <ContactForm>
    <ContactAdditionalInfo />
    <Formulario />
  </ContactForm>
);

export default ContactFormSection;
