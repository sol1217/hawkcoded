import React, { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import {
  HeaderContainer,
  LogoImage,
  MobilMenuButton,
  MobilMenuSection,
  SearchContainer,
} from "./Header.elements";
import logotype from "../../../assets/png/logo-type.png";
import MobilMenu from "../MobileMenu/MobilMenu";
import { ContactLink } from "../../layout/NavMenu/NavMenu.elements.ts";

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
    <HeaderContainer
      isBackgroundWhite={isBackgroundWhite} // <-- Añadir esta línea
    >
      <a href="/">
        <LogoImage src={logotype} />
      </a>

      <MobilMenuButton isOpen={isShowMobilMenu} onClick={handleShowMobilMenu}>
        {isShowMobilMenu ? (
          <IoIosClose
            size={40}
            color="black"
            style={{ transform: "scale(1.2)" }}
          />
        ) : (
          <IoMdMenu size={40} color="black" />
        )}
      </MobilMenuButton>

      <MobilMenuSection isVisible={isShowMobilMenu}>
        <MobilMenu />
        <div>
          <ContactLink href="/contact">Contacto</ContactLink>
        </div>
      </MobilMenuSection>

      <SearchContainer>
        <NavMenu flexDirection="row" color="black" />
        <div>
          <ContactLink href="/contact">Contacto</ContactLink>
        </div>
      </SearchContainer>
    </HeaderContainer>
  );
}
