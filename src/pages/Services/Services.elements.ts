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




export const STitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 18rem;
  background-image: url("./src/assets/stock-image-services.jpg");
  background-color: rgba(226, 226, 226, 0.9); 
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px 0px #ee7814;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1; 
  }
`;

export const STitle = styled.h2`
  position: relative;
  color: white; 
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  z-index: 2; 

  @media screen and (min-width: 768px) {
    font-size: 45px;
    text-align: center;
    padding-left: 0;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const ServicesContainer = styled.div`
  overflow: hidden;
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr; 

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px 34px;
  }
`;

export const ServiceItem = styled.div`
  border-bottom: 1px solid #000;
  padding: 20px;
  transition: transform 0.3s ease, background-color 0.3s ease; 
  position: relative;

  &:last-of-type {
    border: none;
  }

  &:hover {
    transform: scale(1.05);
    background-color: #f3f3f4; 

    & > img {
      animation: ${rotateYAnimation} 1s linear infinite; 
    }
  }

  @media screen and (min-width: 768px) {
    border: none;
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
  transition: color 0.3s ease; 

  & > img {
    width: 15px;
    background-color: #ee7814;
    padding: 5px;
    border-radius: 50%;
    transition: transform 0.3s ease, background-color 0.3s ease, margin-left 0.3s ease; 
  }

  &:hover {
    color: #f57c00; 

    & > img {
      transform: scale(1.2);
      background-color: #f57c00; 
      margin-left: 10px; 
    }
  }
`;