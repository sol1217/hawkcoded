import React from 'react';
import { InfoContactWrap, MainLogoImg, InformationText, IconosContainer } from "./../Contact.elements";
import logo from "./../../../assets/png/main-logo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactAdditionalInfo: React.FC = () => (
  <InfoContactWrap data-aos="fade-right">
    <MainLogoImg loading='lazy' alt='logo' src={logo} />
    <h2>Contáctanos para Consultas</h2>
    <span>
      Si tienes alguna pregunta, deseas obtener más información sobre
      nuestros servicios o simplemente quieres decir "hola", estamos aquí
      para ayudarte. Completa el formulario a continuación y nos pondremos
      en contacto contigo lo antes posible.
    </span>
    <InformationText>
      Al elegirnos, estás optando por una empresa que prioriza el
      bienestar y el crecimiento profesional de cada uno de sus miembros.
    </InformationText>
    <IconosContainer>
      <a>
        <FaSquareInstagram fontSize={40} />
      </a>
      <a>
        <FaFacebook fontSize={40} />
      </a>
      <a>
        <IoLogoWhatsapp fontSize={40} />
      </a>
      <a>
        <FaYoutube fontSize={40} />
      </a>
    </IconosContainer>
  </InfoContactWrap>
);

export default ContactAdditionalInfo;
