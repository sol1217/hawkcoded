import styled from "styled-components";
import hawkcoded from "../../assets/jpg/hawkcoded.jpg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
    padding-left: 30px;
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
  text-align: center;

  @media (max-width: 1500px) {
    align-items: center;
    padding-left: 30px;
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

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    border: 3px solid #fff;
    color: #ff7500;
  }
`;

//soll

export const LiTag = styled.li`
  &::marker {
    color: orangered;
    font-size: 30px;
  }
`;

export const ProductsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const TitleProducts = styled.h2`
  font-size: 40px;
`;

export const ViewProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ViewProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid rgba(128, 128, 128, 0.65);
  width: 460px;
  border-radius: 20px;
  padding: 10px;

  &:hover {
    border: 3px solid #ff7500;
  }
`;

export const RouteProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

export const LinkProduct = styled.a`
  padding: 10px;
  border-radius: 60px;
  background-color: orangered;
  cursor: pointer;
`;
