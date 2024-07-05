import React, { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu.tsx";
import MobilMenu from "../MobileMenu/MobilMenu";
import logotype from "../../../assets/png/main-logo.png";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import { HeaderContainer, LogoImage, HeaderMarker, MobilMenuButton, MobilMenuSection, SearchContainer } from "./Header.elements";
import { ContactLink } from "../../layout/NavMenu/NavMenu.elements.ts";

export function Header() {
  const [isShowMobilMenu, setIsShowMobilMenu] = useState(false);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);

  const handleShowMobilMenu = () => {
    setIsShowMobilMenu(!isShowMobilMenu);
  };

  useEffect(() => {
    if (isShowMobilMenu) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }
  }, [isShowMobilMenu]);

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
        <HeaderMarker>HawkCoded</HeaderMarker>
      </a>

      <MobilMenuButton isOpen={isShowMobilMenu} onClick={handleShowMobilMenu}>
        {isShowMobilMenu ? (
          <IoIosClose size={40} color="black" style={{ transform: "scale(1.2)" }} />
        ) : (
          <IoMdMenu size={40} color="black" />
        )}
      </MobilMenuButton>

      <MobilMenuSection isVisible={isShowMobilMenu}>
        <MobilMenu />
        <div>
          <ContactLink $background="white" $color="#ef7533" href="/contact">Contacto</ContactLink>
        </div>
      </MobilMenuSection>

      <SearchContainer>
        <NavMenu flexDirection="row" color="black" />
        <div>
          <ContactLink $background="" $color="white" href="/contact">Contacto</ContactLink>
        </div>
      </SearchContainer>
    </HeaderContainer>
  );
}
