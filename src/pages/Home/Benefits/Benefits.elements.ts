import styled from "styled-components";

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 550px);
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px;

  @media (max-width: 1290px) {
    grid-template-columns: repeat(1, 550px);
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
  gap: 30px;
  border-radius: 15px;
  padding: 10px;
  height: 150px;
  border: 1px solid #ddd;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    height: inherit;
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 580px) {
    width: 60%;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
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
    font-size: 150%;
    padding: 10px;
  }
`;
