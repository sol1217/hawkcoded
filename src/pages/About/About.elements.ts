import styled, { keyframes } from "styled-components";
import abouImg from "../../assets/png/hawkcoded-about.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;

export const AboutTitle = styled.h2`
  font-size: 90px;
  text-align: center;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const WelcomText = styled.span`
  font-size: 20px;
`;

export const AboutInformation = styled.span`
  max-width: 800px;
  font-size: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 30px 30px 120px;
  background: rgba(44, 43, 43, 0.62);
  width: inherit;
  color: white;
  height: 85vh;
  text-align: center;

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    padding: 100px 30px 30px 0px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const ImgContainer = styled.div`
  background-image: url(${abouImg});
  background-size: cover;
  background-position: center;
`;

export const DepartmentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const ItemDepartment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #ddd;
 
  & > p {
    text-wrap: balance;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;

export const DepartamentsInfoWrap = styled.div`
  padding: 20px;
  text-align: center;
`;

export const TitleDepartament = styled.h2`
  color: #ff7500;
  font-size: 40px;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  color: #000;

  @media (max-width: 830px) {
    flex-direction: column;
  }

  @media (max-width: 700px) {
    gap: 100px;
  }
`;

export const ContactInformarionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
  max-width: 450px;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TitleContact = styled.h2`
  font-size: 45px;
  font-weight: bold;
  color: #000;
  margin: 0;

  & > span {
    color: #ff7500;
  }

  @media (max-width: 520px) {
    font-size: 35px;
    width: 80%;
  }
`;

export const InformationContact = styled.span`
  font-size: 22px;
  text-wrap: balance;

  @media (max-width: 520px) {
    font-size: 18px;
    padding-left: 0px;
  }
`;

export const ButtonContact = styled.a`
  padding: 20px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff7500;
  color: white;
  font-size: 22px;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 15px;
  cursor: pointer;
  transition:
  border-color 0.3s,
  background-color 0.3s,
  color 0.3s;

  &:hover {
    border: 1px solid #ff7500;
    background-color: #fff;
    color: #ff7500;
  }
`;


export const ImageContact = styled.img`
  animation: ${rotate} 50s linear infinite;
  width: 430px;
  height: 430px;

  @media (max-width: 1100px) {
    width: 270px;
    height: 270px;
  }

    @media (max-width: 860px) {
    width: 200px;
    height: 200px;
  }


  @media (max-width: 520px) {
    width: 250px;
    height: 250px;
  }
`;

export const FeaturesSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px; 
  padding: 20px;
`;

export const FeaturesWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 600px;


  &:hover {
    transform: scale(1.03);
  }


  @media (max-width: 720px) {
    width: 90%;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    text-align: center;
  }
`;


export const FeatureImgWrap = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  & > img {
    color: #fff;
    fill: #fff;
  }
`;

export const FeaturesItem = styled.div`
`;

export const TitleFeatures = styled.h2`
  font-size: 45px;
  text-align: center;
  color: #ff7500;
`;

export const InformationAboutUsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 30px;
  margin: 4rem 0;

  @media (max-width: 1450px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const InformationAboutUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(5, 10, 28, 0.89);
  flex-direction: column;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 0px 20px 0px 20px;
  padding: 20px;

  @media (max-width: 1450px) {
    width: 80%;
  }
`;

export const AboutImg = styled.img`
  width: auto;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.97);
  }

  @media (max-width: 560px) {
    width: 300px;
    height: 300px;
  }
`;

export const TitleAbout = styled.h2`
  font-size: 50px;
  color: #fff;
  margin-top: 0;

  @media (max-width: 460px) {
    font-size: 40px;
  }
`;

export const TextAbout = styled.span`
  font-size: 20px;
  color: #fff;
  max-width: 650px;
  min-width: 200px;
  text-wrap: pretty;
`;
