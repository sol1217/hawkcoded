import NavMenu from "../NavMenu/NavMenu.tsx";
import {
  HeaderContainer,
  LogoImage,
  SearchButton,
  SearchContainer,
  SearchInput,
  ShowButton,
} from "./Header.elements.ts";
import logotype from "../../../assets/logotype.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

export function Header() {
  const [isShowInput, setIsShowInput] = useState(false);

  const handleShowInput = () => {
    setIsShowInput(!isShowInput);
  };
  return (
    <HeaderContainer>
      <LogoImage src={logotype} />
      <SearchContainer>
        <NavMenu />
        {!isShowInput && (
          <ShowButton onClick={handleShowInput}>
            <IoSearch fontSize={30} color="black" />
          </ShowButton>
        )}
        <SearchInput isShowInput={isShowInput} placeholder="Write and search" />
        {isShowInput && (
          <SearchButton>
            <IoSearch fontSize={30} color="black" />
          </SearchButton>
        )}
      </SearchContainer>
    </HeaderContainer>
  );
}
