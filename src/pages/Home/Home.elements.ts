import styled from "styled-components";
import hawkcoded from "../../assets/jpg/hawkcoded.jpg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;
`;

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
  background: rgba(44, 43, 43, 0.8);
  width: 100%;
  height: 100%;

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    padding: 100px 30px 30px 0px;
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
  width: 100%;
  max-width: 800px;

  padding-left: 30px;

  @media (min-width: 768px) {
    padding-left: 20px;
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
  align-items: center;
  gap: 30px;
  color: white;
  text-align: center;

  @media (max-width: 1500px) {
    align-items: center;
    padding-left: 30px;
  }
`;

export const TextInformation = styled.div`
  width: 600px;
  font-size: 26px;
  font-family: cursive;

  @media (max-width: 530px) {
    font-size: 20px;
    width: 350px;
  }
`;

export const ButtonContact = styled.a`
  padding: 15px;
  border-radius: 50px;
  width: 200px;
  background: transparent;
  color: white;
  font-size: 30px;
  font-family: cursive;
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

//soll
