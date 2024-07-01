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
        <a>
          <FaSquareInstagram fontSize={30} color="white" />
        </a>
        <a>
          <FaFacebook fontSize={30} color="white" />
        </a>
        <a>
          <IoLogoWhatsapp fontSize={30} color="white" />
        </a>
        <a>
          <FaYoutube fontSize={30} color="white" />
        </a>
      </LinksContainer>
    </FooterStyled>
  );
}
