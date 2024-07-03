import React from "react";
import { FooterStyled, LinksContainer, PStyled } from "./Footer.Elements";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterStyled>
      <div>
        <PStyled>©HawkCoded {year}.</PStyled>
      </div>
      <LinksContainer>
        <a href="https://www.instagram.com/hawkcoded/" target="_blank">
          <FaSquareInstagram />
        </a>
        <a>
          <FaFacebook />
        </a>
        <a>
          <IoLogoWhatsapp />
        </a>
        <a>
          <FaYoutube />
        </a>
      </LinksContainer>
    </FooterStyled>
  );
}
