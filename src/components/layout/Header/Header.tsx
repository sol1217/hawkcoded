import NavMenu from "../NavMenu/NavMenu.tsx";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import {
  HeaderContainer,
  LogoImage,
  MobilMenuButton,
  MobilMenuSection,
  SearchButton,
  SearchContainer,
  SearchInput,
  ShowButton,
} from "./Header.elements.ts";
import logotype from "../../../assets/png/logo-type.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import MobilMenu from "../MobileMenu/MobilMenu.tsx";

export function Header() {
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowMobilMenu, setIsShowMobilMenu] = useState(false);

  const handleShowInput = () => {
    setIsShowInput(!isShowInput);
  };

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

        {!isShowInput && (
          <ShowButton onClick={handleShowInput}>
            <IoSearch fontSize={30} color="white" />
          </ShowButton>
        )}
        <SearchInput isShowInput={isShowInput} placeholder="Write and search" />
        {isShowInput && (
          <SearchButton>
            <IoSearch fontSize={30} color="white" />
          </SearchButton>
        )}
      </SearchContainer>
    </HeaderContainer>
  );
}
