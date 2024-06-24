import styled from "styled-components";

import hawkcoded from "../../assets/jpg/hawkcoded.jpg";
export const HomeContainer = styled.div``;

export const InformationBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url(${hawkcoded});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 100px 30px 30px 120px;
  background: rgba(44, 43, 43, 0.8);
  width: 100%;
  height: 100%;

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    padding: 100px 30px 30px 0px;
  }

  @media (max-width: 570px) {
    padding: 100px 30px 30px 40px;
  }

  @media (max-width: 530px) {
    padding: 100px 30px 30px 0;
  }
`;

export const OverviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 530px) {
    align-items: center;
    justify-content: center;
  }
`;

export const MainText = styled.h1`
  color: white;
  font-family: "Lantinghei SC";
  width: 800px;
  text-align: center;

  @media (max-width: 820px) {
    font-size: 40px;
    width: 600px;
  }

  @media (max-width: 630px) {
    width: 500px;
    font-size: 30px;
  }

  @media (max-width: 530px) {
    font-size: 20px;
  }
`;

export const EmphasizeText = styled.b`
  color: #ff7500;
  font-family: cursive;
  font-size: 65px;
  margin-left: 20px;

  @media (max-width: 820px) {
    font-size: 40px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

export const SloganText = styled.h3`
  color: #ff7500;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  color: white;

  @media (max-width: 1500px) {
    align-items: center;
  }
`;

export const TextInformation = styled.div`
  width: 500px;
  font-size: 26px;

  @media (max-width: 530px) {
    font-size: 20px;
    width: 350px;
  }
`;

export const ButtonContact = styled.button`
  padding: 15px;
  border-radius: 50px;
  width: 200px;
  background: transparent;
  color: white;
  font-size: 30px;
  font-family: cursive;
  border: 3px solid #ff7500;
  cursor: pointer;
  box-shadow: -30px -12px 87px -41px rgba(255, 255, 255, 0.76) inset;
  -webkit-box-shadow: -30px -12px 87px -41px rgba(255, 255, 255, 0.76) inset;
  -moz-box-shadow: -30px -12px 87px -41px rgba(255, 255, 255, 0.76) inset;

  &:active {
    transform: scale(0.95);
  }
`;

export const BussinesText = styled.h2`
  font-size: 40px;
  font-family: Farah;
`;

export const BusinessWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: whitesmoke;
`;

export const BusinesImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const TitleCompany = styled.h3`
  font-size: 20px;
`;

export const BusinessItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const NameAndImgBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: transparent;
`;

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
`;

export const IconsCompanny = styled.div`
  width: 25px;
  height: 25px;

  &:hover {
    transform: scale(0.95);
    background-color: rgba(255, 117, 0, 0.56);
    border-radius: 60px;
  }
`;

export const InformationBussines = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 2px 2px 2px 0;
  gap: 30px;
  border: 1px solid;
  border-radius: 15px;
  padding: 10px;
  height: 150px;
`;

export const TitleInformation = styled.h2`
  color: #ff7500;
  font-weight: bold;
  text-shadow: 2px 0 2px;
`;

export const TitleBenefits = styled.h2`
  font-size: 40px;
  text-align: center;
`;

/*
export const InformationServices = styled.div`
  background-color: rgba(206, 201, 201, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  border: 1px solid;
  border-radius: 20px;
  padding: 5px;
  position: absolute;
  top: 1200px;
`;


      <InformationServices>
        <h2>Netflix</h2>
        <p>Servicios adqueridos</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        </p>
      </InformationServices>*/
