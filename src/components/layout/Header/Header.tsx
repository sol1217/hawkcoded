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
      isBackgroundWhite={isBackgroundWhite}  // <-- Añadir esta línea
      style={{
        backgroundColor: isBackgroundWhite ? "#171d25" : "rgba(0, 0, 0, 0.4)",
        boxShadow: isBackgroundWhite ? "5px 5px 5px 0" : "none",
      }}
    >
      <a href="/">
        <LogoImage src={logotype} />
      </a>

      <MobilMenuButton isOpen={isShowMobilMenu} onClick={handleShowMobilMenu}>
        {isShowMobilMenu ? (
          <IoIosClose size={40} color="white" style={{ transform: 'scale(1.2)' }} />
        ) : (
          <IoMdMenu size={40} color="white" />
        )}
      </MobilMenuButton>

      <MobilMenuSection isVisible={isShowMobilMenu}>
        <MobilMenu />
      </MobilMenuSection>

      <SearchContainer>
        <NavMenu flexDirection="row" color="white" />
      </SearchContainer>
    </HeaderContainer>
  );
}
