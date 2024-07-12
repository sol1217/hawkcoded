import styled, {keyframes} from 'styled-components';
const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;




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


export const IconsCompany = styled.img`
  width: 100%;
  max-width: 40px;
  height: 100%;
  max-height: 40px;
  fill: #ff7500;
  color: #ff7500;
`;

export const InformationBussines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  padding: 20px;
  border: 1px solid #ddd;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

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

  &:hover svg {
    animation: ${rotateY} 1s linear infinite; 
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;

  & > p {
    padding-inline: 40px; 
  }

  @media (max-width: 480px) {
    & > p {
      padding-inline: 10px; 
    }
  }
`;

export const TitleInformation = styled.h2`

`;

export const TitleBenefits = styled.h2`
  font-size: 2em;
  text-align: center;

  & > span {
    color: #ff7500;
  }


  @media (max-width: 1290px) {
    padding: 10px;
  }

  @media (max-width: 650px) {
    margin-bottom: 0;
  }
`;