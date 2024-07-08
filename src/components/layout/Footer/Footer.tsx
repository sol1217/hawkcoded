import React from "react";
import {
  ContactContainer,
  FooterStyled, LinkMenu,
  LinksContainer, LinksMainContainer, LocationContainer, LocationMainWrap, LocationText,
  NavMenuWrap,
  OpeningHoursContainer,
  ScheduleText,
  ScheduleWrap
} from "./Footer.Elements";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../../assets/png/logo-white-bg.png"
import { LuClock } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {


  return (
    <FooterStyled>

      <ScheduleWrap>
        <a href="/"><img src={logo} width={280} height={70}/></a>
        <OpeningHoursContainer>
          <LuClock fontSize={25}/>
          <ScheduleText>Lunes a viernes de 7AM a 5PM <br/> Sabados de 7 AM a 12PM</ScheduleText>
        </OpeningHoursContainer>
      </ScheduleWrap>


      <NavMenuWrap>
        <h3>Acerca de nosotros</h3>
        <LinkMenu href="/about">Sobre Nosotros</LinkMenu>
        <LinkMenu href="/services">Nuestros Servicios</LinkMenu>
        <LinkMenu href="/products">Algunos Productos</LinkMenu>
        <LinkMenu>Politicas de Seguridad</LinkMenu>

      </NavMenuWrap>

      <LocationMainWrap>
        <h2>Ubicaciones</h2>
        <LocationContainer>
          <MdOutlineLocationOn fontSize={50}/>
          <LocationText> Calle Amelia Francasci #18, Los Prados, Santo Domingo</LocationText>
        </LocationContainer>
        <LocationContainer>
          <MdOutlineLocationOn fontSize={50}/>
          <LocationText> Calle Amelia Francasci #18, Los Prados, Santo Domingo</LocationText>
        </LocationContainer>
      </LocationMainWrap>

      <LinksMainContainer>
        <LinksContainer>
          <a href="https://www.instagram.com/hawkcoded/" target="_blank">
            <FaSquareInstagram/>
          </a>
          <a href="https://www.facebook.com/hawkcoded?mibextid=LQQJ4d">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/hawkcoded/">
            <FaLinkedin />
          </a>
          <a>
            <FaYoutube />
          </a>
        </LinksContainer>

        <ContactContainer href="/contact">Contacto</ContactContainer>

      </LinksMainContainer>
    </FooterStyled>
  );
}
