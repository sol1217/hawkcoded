import React, { useEffect, useState } from "react";
import { HeaderContainer, DesktopMenuContainer, LogoImage, MobilMenuButton, MobilMenuSection, ContactButtonsContainer } from "./Header.elements";
import { ContactLink } from "./../DeskMenu/NavMenu.elements.ts";
import NavMenu from "./../DeskMenu/NavMenu.tsx";

import { IoMdMenu, IoIosClose } from "react-icons/io";
import MobilMenu from "../MobileMenu/MobilMenu";
import logotype from "./../../../assets/png/nuevo-logo.png";


export function Header() {
  const [isShowMobilMenu, setIsShowMobilMenu] = useState(false);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);

  const handleShowMobilMenu = () => {
    setIsShowMobilMenu(!isShowMobilMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsBackgroundWhite(true);
      } else {
        setIsBackgroundWhite(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isBackgroundWhite={isBackgroundWhite}>

      <a href="/">
        <LogoImage loading="lazy" alt="logo_image" src={logotype} />
      </a>

    {/* desktop menu */}
      <DesktopMenuContainer>
        <NavMenu flexDirection="row" color="black"/>
      </DesktopMenuContainer>

      <ContactButtonsContainer>
        <ContactLink $background="white" $color="#ef7533" href="/contact">Contacto</ContactLink>
        <ContactLink $background="#ef7533" $color="white" href="/ecommerce">Ecommerce</ContactLink>
      </ContactButtonsContainer>


    {/* mobile menu */}
      <MobilMenuButton isOpen={isShowMobilMenu} onClick={handleShowMobilMenu}>
        {isShowMobilMenu ? (
          <IoIosClose size={40} color="black" style={{ transform: "scale(1.2)" }} />
        ) : (
          <IoMdMenu size={40} color="black" />
        )}
      </MobilMenuButton>

      <MobilMenuSection isVisible={isShowMobilMenu}>
        <MobilMenu />
        <section>
          <ContactLink $background="white" $color="#ef7533" href="/contact">Contacto</ContactLink>
          <ContactLink $background="white" $color="#ef7533" href="/ecommerce">Ecommerce</ContactLink>
        </section>
      </MobilMenuSection>

    </HeaderContainer>
  );
}
