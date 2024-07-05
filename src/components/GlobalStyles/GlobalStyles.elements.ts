import styled from 'styled-components';
import stockServiceImage from './../../assets/bg-images/computer.webp';
import stockProductImage_1 from './../../assets/png/ball-software.jpg'


export const LoadMoreButton = styled.button`
  background-color: #EE7814;
  color: #fff;
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s; 


  &:hover {
      border-color: #f57c00; 
      background-color: #fff;
      color: #f57c00;

  }
`;


export const STitleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    max-height: 400px;
    background-image: url(${stockServiceImage});
    background-color: rgba(226, 226, 226, 0.9);
    background-size: cover;
    background-position: center;
    flex-direction: column;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
`;

export const ImageLogo = styled.img`
    width: 280px;
  height: 70px;
`


interface H2TitleProps {
  color?: string;
  textShadow?: string;
}

export const H2Title = styled.h2<H2TitleProps>`
  color: ${(props) => props.color || 'white'};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  text-shadow: ${(props) => props.textShadow || '2px 2px 4px rgba(0, 0, 0, 0.3)'};

  
  @media (max-width: 480px) {
    margin-top: 5rem;
    font-size: 1.5rem;
  }
`;



export const PTitleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    max-height: 400px;
    background-image: url(${stockProductImage_1});
    background-color: rgba(226, 226, 226, 0.9);
    background-size: cover;
    background-position: center;
    gap: 20px;
    display: flex;
    justify-content: center;
  flex-direction: column;
  gap: 20px;
    align-items: center;
    -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
`;



export const H2WithBorders = styled.h2`
  color: #EE7814;
  overflow: hidden;
  padding: 30px 0;
  font-size: 28px;
  text-align: center;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    border: 1px solid #EE7814;
  }

  &::before {
    top: 0;
    left: 0;
    right: auto;
    border-bottom: none;
  }

  &::after {
    bottom: 0;
    right: 0;
    left: auto;
    border-top: none;
  }

  & > a {
    color: #EE7814;
    font-size: 15px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    transition: color 0.3s ease-in;
  }
      & > a:hover {
        color: #000;
      }

`;


export const H3Error = styled.h3`
  color: #f44336;
  background-color: #fff;
  border: 1px solid #f44336;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  position: absolute; /* Establece posición absoluta */
  top: -40px; /* Ajusta la posición superior según necesites */
  left: 50%; /* Centra horizontalmente */
  transform: translateX(-50%); /* Ajusta para centrar horizontalmente */
  z-index: 10; /* Asegura que esté por encima del contenido */
`;


export const ButtonContact = styled.a`
  padding: 15px;
  border-radius: 50px;
  width: 200px;
  background: transparent;
  color: white;
  font-size: 30px;
  border: 3px solid #ff7500;
  text-align: center;
  cursor: pointer;
  box-shadow: -30px -12px 87px -41px rgba(255, 255, 255, 0.76) inset;
  -webkit-box-shadow: -30px -12px 87px -41px rgba(255, 255, 255, 0.76) inset;
  -moz-box-shadow: -30px -12px 87px -41px rgba(255, 255, 255, 0.76) inset;
  transition: border 0.3s ease, color 0.3s ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    border: 3px solid #fff;
    color: #ff7500;
  }
`;
