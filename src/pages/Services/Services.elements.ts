import styled, { keyframes } from 'styled-components';

// Keyframe para la animación de rotación
const rotateYAnimation = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const ServicesContainer = styled.div`
  overflow: hidden;
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr; /* Por defecto, una columna para pantallas pequeñas */

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas para pantallas grandes */
    padding-inline: 34px;
  }
`;

export const ServiceItem = styled.div`
  border-bottom: 1px solid #000;
  padding: 20px;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Transiciones para transform y background-color */
  position: relative;

  &:last-of-type {
    border: none;
  }

  &:hover {
    transform: scale(1.05);
    background-color: #f3f3f4; /* Cambio de color de fondo al hacer hover */

    /* Aplicar la animación a los ServiceIcon dentro de ServiceItem */
    & > img {
      animation: ${rotateYAnimation} 1s linear infinite; /* Animación de rotación */
    }
  }

  @media screen and (min-width: 768px) {
    border: none;
  }
`;

export const STitle = styled.h2`
  color: black;
  font-size: 30px;
  text-align: left;
  font-weight: 400;
  padding-left: 30px;
  background-image: url("./src/assets/map-min.png");
  background-color: #e2e2e2;
  background-size: cover; 
  background-position: left;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    text-align: center;
  }
`;

export const PServices = styled.p`
  color: black;
  font-size: 23px;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`;


/*Contact*/
export const ServiceContactContainer = styled.div`
    padding: 100px 30px;
    color: #000;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      padding: 40px 60px;
  }
`


export const ServiceButtonContact = styled.button`
    padding: 0px 60px;
    border: 2px solid #ee7814;
    height: 70px;
    border-radius: 40px;
    background-color: transparent;
    color: #000;
    font-size: 18px;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s; 


    &:hover {
        border-color: transparent; 
        background-color: #f57c00;
        color: #fff;
    }
`;


export const SeeMoreContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: #000;
  transition: color 0.3s ease; /* Transición para el color del texto */

  & > img {
    width: 15px;
    background-color: #ee7814;
    padding: 5px;
    border-radius: 50%;
    transition: transform 0.3s ease, background-color 0.3s ease, margin-left 0.3s ease; /* Transiciones para transform, background-color y margin-left */
  }

  &:hover {
    color: #f57c00; /* Cambia el color del texto a naranja en hover */

    & > img {
      transform: scale(1.2); /* Escala el tamaño del icono en hover */
      background-color: #f57c00; /* Cambia el color de fondo del icono en hover */
      margin-left: 10px; /* Desplaza la imagen 10px a la derecha en hover */
    }
  }
`;