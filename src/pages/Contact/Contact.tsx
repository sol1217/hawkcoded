import {
  ContactContainer,
  ContactForm,
  ContactText,
  IconosContainer,
  ImgContainer,
  InfoContactWrap,
  InfoContainer,
  InformationText,
  LogoImg,
  MainLogoImg,
  TextWrap,
  TitleContact,
} from "./Contact.elements.ts";
import simpleLogo from "../../assets/png/simple-logo.png";
import logo from "../../assets/png/main-logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

//formulario
import Formulario from "./FormularioContacto/Formulario.tsx";

export default function Contact() {
  return (
    <ContactContainer>
      <ImgContainer>
        <TextWrap>
          <TitleContact>Contacto</TitleContact>
          <LogoImg src={simpleLogo} />
          <InfoContainer>
            Respuesta Rápida: Nos comprometemos a responder a tu consulta en un
            plazo de 24 horas.
            <br />
            Cada mensaje es importante para nosotros te aseguramos una atención
            personalizada.
          </InfoContainer>
        </TextWrap>
      </ImgContainer>
      <ContactText>Información Adicional o Consultas</ContactText>
      <ContactForm>
        <InfoContactWrap>
          <MainLogoImg src={logo} />
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

        {/* formulario de contacto */}
        <Formulario></Formulario>

      </ContactForm>
    </ContactContainer>
  );
}
