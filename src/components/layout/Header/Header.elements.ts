import styled, { keyframes } from "styled-components";
import {
  HeaderContainerProps,
  MobilMenuButtonProps,
  MobilMenuSectionProps,
  SearchInputProps,
} from "./Header.types";

const rotateIn = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(90deg) scale(1.2);
  }
`;

const rotateOut = keyframes`
  0% {
    transform: rotate(45deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 40px;
  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 99;

  @media (min-width: 1200px) {
    justify-content: space-center;
    padding: 0px 20px;
  }

  @media (max-width: 480px) {
    padding: 8px 4px;
  }

  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`;

export const HeaderMarker = styled.h1`
    font-size: 24px;
    margin: 0;
    font-weight: 800;
    color: #ee7816;

    @media (min-width: 768px) {
      font-size: 30px;
    }

    @media (min-width: 1200px) {
      font-size: 37px;
      margin: 0;
    }
`


export const MobilMenuButton = styled.button<MobilMenuButtonProps>`
  background-color: transparent;
  border: none;
  & > svg {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
    animation: ${({ isOpen }) => (isOpen ? rotateIn : rotateOut)} 0.3s forwards;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobilMenuSection = styled.div<MobilMenuSectionProps>`
  position: absolute;
  display: flex;
  top: 100px;
  right: 10px;
  background-color: #ff7500;
  padding: 25px;
  width: 200px;
  justify-content: center;
  flex-direction: column;
  z-index: 101;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 0;
  overflow: hidden;
  max-height: ${({ isVisible }) => (isVisible ? "300px" : "0")};
  transition: max-height 0.3s ease;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;

  @media (min-width: 1000px) {
    display: none;
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
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 550px) {
    width: 48px;
    height: 48px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 2px;
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
  
`;
