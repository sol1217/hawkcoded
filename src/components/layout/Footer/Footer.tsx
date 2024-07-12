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
import { FaFacebook} from "react-icons/fa";
import logo from "../../../assets/icons/logo-white-bg.svg"
import { LuClock } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {


  return (
    <FooterStyled>

      <ScheduleWrap>
        <a href="/"><img src={logo} alt="footer_logo"/></a>
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

      </NavMenuWrap>

      <LocationMainWrap>
        <h3>Ubicaciones</h3>
        <LocationContainer>
          <MdOutlineLocationOn fontSize={50}/>
          <LocationText>Torre empresarial Blue Mall piso 23</LocationText>
        </LocationContainer>
      </LocationMainWrap>

      <LinksMainContainer>
        <LinksContainer>
          <a href="https://www.instagram.com/hawkcoded/" target="_blank">
            <FaSquareInstagram/>
          </a>
          <a href="https://www.facebook.com/hawkcoded?mibextid=LQQJ4d" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/hawkcoded/" target="_blank">
            <FaLinkedin />
          </a>
        </LinksContainer>

        <ContactContainer className="text-with-drop-shadow" href="/contact">Contacto</ContactContainer>

      </LinksMainContainer>
    </FooterStyled>
  );
}
