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
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  padding: 25px 60px 25px 60px;
  align-items: center;
  gap: 30px;
  position: fixed;
  z-index: 99;
  transition: background-color 0.3s ease;
  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);

  @media (min-width: 1200px) {
    justify-content: flex-start;
    padding: 20px 60px;
  }

  @media (max-width: 1200px) {
    justify-content: space-around;
    padding: 30px;
  }
`;

export const MobilMenuButton = styled.button<MobilMenuButtonProps>`
  background-color: transparent;
  border: none;
  & > svg {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
    animation: ${({ isOpen }) => (isOpen ? rotateIn : rotateOut)} 0.3s forwards;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MobilMenuSection = styled.div<MobilMenuSectionProps>`
  position: absolute;
  top: 100px;
  right: 70px;
  background-color: #ff7500;
  padding: 25px;
  width: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
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

  @media (min-width: 1200px) {
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
  justify-content: space-between;
  align-items: center;
  width: 70%;

  @media (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 1300px) {
    width: 60%;
  }
`;
