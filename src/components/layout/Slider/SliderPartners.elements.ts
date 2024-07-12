import styled, { keyframes } from 'styled-components';

// Datos de las marcas
interface Partner {
  id: number;
  imageUrl: string;
  name: string;
}

import djiLogo from './../../../assets/icons/dji-logo.svg';
import StarLinkLogo from './../../../assets/icons/starlink-logo.svg';
import FourHawsLogo from './../../../assets/icons/4hawks-logo.svg';
import MicrosoftLogo from './../../../assets/icons/microsoft-logo.svg';
import WingtraLogo from './../../../assets/icons/wingtra-logo.svg';
import OracleLogo from './../../../assets/icons/oracle-logo.svg';

export const partners: Partner[] = [
  { id: 1, imageUrl: djiLogo, name: "DJI" },
  { id: 2, imageUrl: StarLinkLogo, name: "Starlink" },
  { id: 3, imageUrl: FourHawsLogo, name: "4hawks" },
  { id: 4, imageUrl: MicrosoftLogo, name: "Microsoft" },
  { id: 5, imageUrl: WingtraLogo, name: "Wingtra" },
  { id: 6, imageUrl: OracleLogo, name: "Oracle" },
];

// Animación de desplazamiento
export const animacion = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
`;

// Componentes styled-components

export const SliderContainer = styled.div`
  background-color: #FFE8DB;
  display: flex;
  border-top: 3px solid #ee7814;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 1.5em;
    padding: 19px 4px;
    color: #231E1B;
    position: relative;

    &::before, &::after {
      content: "";
      background-color: #ee7814;
      width: 200px;
      height: 1px;
      position: absolute; 
    }

    &::after {
      top: 80%;
      right: -10%;
    }

    &::before {
      top: 20%;
      left: -10%;
    }
  }
`


export const SliderC = styled.div`
    background-color: #FFE8DB;
    height: 100px;
    width: 100%;
    overflow: hidden;
`;


export const Move = styled.div`
    display: flex;
    justify-content:space-evenly;
    width: calc(150px * 14);
    animation: ${animacion} 50s linear infinite;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #231E1B;
    }
`;


export const SlideImage = styled.img`
  height: 60px; 
  max-width: 100px;
  width: 100%;
  margin-bottom: 10px; 
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
`;


export const SlideName = styled.p`
  font-weight: bold;
  font-size: 20px; 
  margin: 0;
`;
