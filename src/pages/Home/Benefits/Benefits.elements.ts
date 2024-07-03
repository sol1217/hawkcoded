import styled, { keyframes } from "styled-components";

const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const IconsCompany = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60px;
`;

export const InformationBussines = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  max-height: 150px;
  height: 100%;
  border-radius: 15px;
  padding: 20px;
  border: 1px solid #ddd;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;

  &::before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    top: 20px;
    left: 10px;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 90%;
  }

  @media (max-width: 580px) {
    width: 100%;

    &::before {
      display: none;
    }
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
`;

export const TitleInformation = styled.h2`
  color: #ff7500;
  font-weight: bold;
  text-shadow: 2px 0 2px;
`;

export const TitleBenefits = styled.h2`
  font-size: 30px;
  text-align: center;
  font-family: Verdana;

  @media (max-width: 1290px) {
    font-size: 24px;
    padding: 10px;
  }

  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

export const PBenefits = styled.p`
  color: #ff7500;
  font-size: 1.2rem;
  font-weight: 900;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BenefitsItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:hover img {
    animation: ${rotateY} 1s linear infinite; // Aplicamos la animación al icono al hacer hover
  }
`;

export const BenefitsIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
`;
