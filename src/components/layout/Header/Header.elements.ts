import styled, {keyframes} from "styled-components";
import { SearchInputProps } from "./Header.types.ts";

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

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 4px;
  align-items: center;
  position: fixed;
  z-index: 99;
  transition: background-color 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: ${(props) =>
    props.isBackgroundWhite ? "5px 5px 5px rgba(0, 0, 0, 0.3)" : "none"};

  @media (min-width: 1200px) {
    justify-content: space-around;
    padding: 20px 4px;
  }
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

  @media (max-width: 1200px) {
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
  transition: width 0.5s ease, opacity 0.5s ease;
  background: rgba(227, 233, 236, 0.4);
  padding: 10px;
  border: none;
  border-radius: 15px;
  color: black;
  z-index: 99;
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

export const MobilMenuSection = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100px;
  right: 30px;
  background-color: rgba(255, 255, 255, 0.91);
  padding: 10px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 0;
  overflow: hidden;
  max-height: ${({ isVisible }) => (isVisible ? '300px' : '0')};
  transition: max-height 0.3s ease;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.3s ease;


  @media (min-width: 1200px) {
    display: none;
  }
`;
