import NavMenu from "../NavMenu/NavMenu.tsx";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import {
  HeaderContainer,
  LogoImage,
  MobilMenuButton,
  MobilMenuSection,
  SearchContainer,
} from "./Header.elements.ts";
import logotype from "../../../assets/png/logo-type.png";
import { useEffect, useState } from "react";
import MobilMenu from "../MobileMenu/MobilMenu.tsx";

export function Header() {
  const [isShowMobilMenu, setIsShowMobilMenu] = useState(false);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);

  const handleShowMobilMenu = () => {
    setIsShowMobilMenu(!isShowMobilMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Cambia el número 100 por la cantidad de píxeles que desees
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
      style={{
        backgroundColor: isBackgroundWhite ? "#171d25" : "transparent",
        boxShadow: isBackgroundWhite ? " 5px 5px 5px 0" : "none",
      }}
    >
      <a href="/">
        <LogoImage src={logotype} />
      </a>

      <MobilMenuButton onClick={handleShowMobilMenu}>
        {isShowMobilMenu ? (
          <IoIosClose fontSize={60} color="white" />
        ) : (
          <IoMdMenu fontSize={50} color="white" />
        )}
      </MobilMenuButton>

      {isShowMobilMenu && (
        <MobilMenuSection>
          <MobilMenu />
        </MobilMenuSection>
      )}

      <SearchContainer>
        <NavMenu flexDirection="row" color="white" />
      </SearchContainer>
    </HeaderContainer>
  );
}
