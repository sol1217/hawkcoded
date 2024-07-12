import React from 'react';
import { ImgContainer, TextWrap, TitleContact, LogoImg, InfoContainer } from "./../Contact.elements";
import simpleLogo from "./../../../assets/icons/logo-white-bg.svg";

const ContactInfo: React.FC = () => (
  <ImgContainer>
    <TextWrap>
      <TitleContact>Contacto</TitleContact>
      <LogoImg loading='lazy' alt='contact-logo' src={simpleLogo} data-aos="fade-right" />
      <InfoContainer>
        <span>Respuesta Rápida:</span> Nos comprometemos a responder a tu consulta en un
        plazo de 24 horas.
        <br />
        Cada mensaje es importante para nosotros te aseguramos una atención
        personalizada.
      </InfoContainer>
    </TextWrap>
  </ImgContainer>
);

export default ContactInfo;
