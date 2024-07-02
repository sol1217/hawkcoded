import styled, { keyframes } from 'styled-components';

// Datos de las marcas
interface Partner {
  id: number;
  imageUrl: string;
  name: string;
}

export const partners: Partner[] = [
  { id: 1, imageUrl: '/src/assets/png/dji-logo.png', name: "DJI" },
  { id: 2, imageUrl: '/src/assets/png/starlink-logo.svg', name: "Starlink" },
  { id: 3, imageUrl: '/src/assets/png/4hawks-logo.png', name: "4hawks" },
  { id: 4, imageUrl: '/src/assets/png/microsoft-logo.svg', name: "Microsoft" },
  { id: 5, imageUrl: '/src/assets/png/wingtra-logo.png', name: "Wingtra" },
  { id: 6, imageUrl: '/src/assets/png/oracle-logo.svg', name: "Oracle" },
];

// Animación de desplazamiento
export const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * ${partners.length})); }
`;

// Componentes styled-components
export const SliderContainer = styled.div`
  background: #e87814;
  color: white; 
  position: relative;
  text-align: center;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  padding: 20px 0; 
  
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
  width: calc(250px * ${partners.length});
  background: #e87814;
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
