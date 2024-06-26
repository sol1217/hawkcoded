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
import { useState } from "react";
import MobilMenu from "../MobileMenu/MobilMenu.tsx";

export function Header() {
  const [isShowMobilMenu, setIsShowMobilMenu] = useState(false);

  const handleShowMobilMenu = () => {
    setIsShowMobilMenu(!isShowMobilMenu);
  };
  return (
    <HeaderContainer>
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
        <NavMenu flexDirection="row" />
      </SearchContainer>
    </HeaderContainer>
  );
}
