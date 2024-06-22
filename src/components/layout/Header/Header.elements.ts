import styled from "styled-components";
import { SearchInputProps } from "./Header.types.ts";

export const HeaderContainer = styled.div`
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 96%;
  top: 0;
  z-index: 99;
  /*background: linear-gradient(#086c90, #ff7500);*/
`;

export const LogoImage = styled.img`
  width: 280px;
  height: 70px;

  @media (max-width: 550px) {
    width: 200px;
    height: 50px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ShowButton = styled.button`
  background: transparent;
  border: 0;

  &:active {
    transform: scale(0.95);
  }
`;

export const SearchInput = styled.input.attrs<SearchInputProps>((props) => ({
  style: {
    width: props.isShowInput ? "180px" : "0",
    opacity: props.isShowInput ? "1" : "0",
  },
}))<SearchInputProps>`
  transition:
    width 0.5s ease,
    opacity 0.5s ease;
  background: rgba(227, 233, 236, 0.4);
  padding: 10px;
  border: none;
  border-radius: 15px;
  color: black;
  z-index: 99;

  &:focus {
  }
`;

export const SearchButton = styled.div`
  background: transparent;
  border: 0;

  &:active {
    transform: scale(0.9);
  }
`;

export const MobilMenuButton = styled.button`
  background-color: transparent;
  border: none;

  @media (min-width: 1080px) {
    display: none;
  }
`;

export const MobilMenuSection = styled.div`
  position: absolute;
  top: 100px;
  right: 30px;
  background-color: white;
  padding: 10px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 450px) {
    right: 50px;
  }
`;
