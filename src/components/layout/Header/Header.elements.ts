import styled, { keyframes } from "styled-components";
import {
  HeaderContainerProps,
  MobilMenuButtonProps,
  MobilMenuSectionProps,
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
  z-index: 100; 
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
  position: sticky;
  top: 0;

  @media (min-width: 1200px) {
    justify-content: space-between;
    padding: 0px 20px;
  }

  @media (max-width: 480px) {
    padding: 8px 4px;
  }

  & > section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;

    & > a {
    display: flex;
  }
  }
`;


export const DesktopMenuContainer = styled.div`
  @media (max-width: 1100px) {
    display: none;
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

  @media (min-width: 1100.91px) {
    display: none;
  }
`;

export const MobilMenuSection = styled.div<MobilMenuSectionProps>`
  position: absolute;
  display: flex;
  top: 100px;
  right: 10px;
  background-color: #231E1B;
  padding: 25px;
  width: 200px;
  justify-content: center;
  flex-direction: column;
  z-index: 101; 
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 0;
  overflow: hidden;
  max-height: ${({ isVisible }) => (isVisible ? "500px" : "0")};
  transition: max-height 0.3s ease, opacity 0.3s ease; /* Combina las transiciones en una sola declaración */
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};

  @media (min-width: 1100px) {
    display: none;
  }

  & > section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;



export const LogoImage = styled.img`
  width: 240px;
  height: 55px;
`;


export const ContactButtonsContainer = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  gap: 20px;

  @media (max-width: 1100px) {
    display: none;
  }
`;