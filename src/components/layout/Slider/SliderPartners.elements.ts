import styled, { keyframes } from 'styled-components';

// Datos de las marcas
interface Partner {
  id: number;
  imageUrl: string;
  name: string;
}

import djiLogo from './../../../assets/png/dji-logo.png';
import StarLinkLogo from './../../../assets/png/starlink-logo.svg';
import FourHawsLogo from './../../../assets/png/4hawks-logo.png';
import MicrosoftLogo from './../../../assets/png/microsoft-logo.svg';
import WingtraLogo from './../../../assets/png/wingtra-logo.png';
import OracleLogo from './../../../assets/png/oracle-logo.svg';

export const partners: Partner[] = [
  { id: 1, imageUrl: djiLogo, name: "DJI" },
  { id: 2, imageUrl: StarLinkLogo, name: "Starlink" },
  { id: 3, imageUrl: FourHawsLogo, name: "4hawks" },
  { id: 4, imageUrl: MicrosoftLogo, name: "Microsoft" },
  { id: 5, imageUrl: WingtraLogo, name: "Wingtra" },
  { id: 6, imageUrl: OracleLogo, name: "Oracle" },
];

// Animación de desplazamiento
export const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * ${partners.length})); }
`;

// Componentes styled-components
export const SliderContainer = styled.div`
  background: #F3C398;
  color: white; 
  position: relative;
  text-align: center;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  padding: 20px 0; 
  border-top: 3px solid #e87814;
  
  &::before,
  &::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  h1 {
    margin-bottom: 27px;
    font-size: 28px;
  }
`;

export const SlideTrack = styled.div`
  animation: ${scrollAnimation} ${partners.length * 5}s linear infinite; 
  display: flex;
  background: #F3C398;
  overflow: hidden; 
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 250px;
  margin: 0 10px; 
`;

export const SlideImage = styled.img`
  height: 60px; 
  max-width: 100px;
  width: 100%;
  margin-bottom: 10px; 
`;

export const SlideName = styled.h3`
  font-size: 20px; 
  margin: 0;
`;
