import styled from "styled-components";

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 550px);
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 20px;
  padding: 10px;

  @media (max-width: 1290px) {
    grid-template-columns: repeat(1, 550px);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    margin-top: 4rem;
    gap: 4rem;
  }
`;

export const IconsCompanny = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgba(255, 117, 0, 0.69);
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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
