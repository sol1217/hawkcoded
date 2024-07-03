import React from 'react';
import { ImgContainer, TextWrap, TitleContact, LogoImg, InfoContainer } from "./../Contact.elements";
import simpleLogo from "./../../../assets/png/simple-logo.png";

const ContactInfo: React.FC = () => (
  <ImgContainer>
    <TextWrap>
      <TitleContact>Contacto</TitleContact>
      <LogoImg src={simpleLogo} data-aos="fade-right" />
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
