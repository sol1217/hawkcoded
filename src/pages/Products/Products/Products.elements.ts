import styled from 'styled-components';

export const ProductsContainer = styled.div`
  overflow: hidden;
`;

export const Products = styled.section`
  max-width: 900px;
  margin: 4rem auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 580px) {
    margin: 0 auto;
    gap: 60px;
  }

`;

export const ImageContainer = styled.div`
  width: auto;
  min-width: 240px;
  min-height: 240px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 100px;
    background-color: #ef7533;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
    z-index: 1;
  }

  & > img {
    width: 100%;
    max-width: 240px;
    height: auto; 
    max-height: 240px; 
    object-fit: contain; /* Ajuste del tamaño del objeto manteniendo la proporción */
    position: relative;
    z-index: 10;
  }
`;

export const CardTexts = styled.div`
  padding: 10px;
  position: relative;
  z-index: 30;
  flex: 1;
  transition: transform 0.3s ease;

  @media screen and (max-width: 580px) {
    margin: 0 auto;
    gap: 60px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 38px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  overflow: visible;
  background-color: white;
  text-align: left;
  position: relative;
  transition: transform 0.3s ease;

  &:hover ${ImageContainer} {
    transform: translateY(-10px);
  }

  &:hover ${ImageContainer}::before {
    transform: scale(1);
  }

  &:hover ${CardTexts} {
    transform: scale(1.05);
  }

  @media screen and (max-width: 580px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  color: #333;
  z-index: 2;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  z-index: 2;
`;
