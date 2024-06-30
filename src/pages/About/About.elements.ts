import styled, { keyframes } from "styled-components";
import abouImg from "../../assets/jpg/hawkcoded-about.jpg";

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
  text-shadow: 5px 0 0 black;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const AboutInformation = styled.span`
  width: 600px;
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
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

export const DepartamentsInfoWrap = styled.div`
  text-align: center;
  padding: 20px;
`;

export const TitleDepartament = styled.h2`
  color: #ff7500;
  font-size: 40px;
  text-shadow: 1px 0 0 black;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #171d25;
  padding: 30px;
  color: white;

  @media (max-width: 1500px) {
    flex-direction: column;
  }

  @media (max-width: 700px) {
    gap: 100px;
  }
`;

export const ContactInformarionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  width: 450px;
  padding: 20px;
`;

export const TitleContact = styled.span`
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  color: #ff7500;
  text-shadow: 2px 0 0 white;

  @media (max-width: 520px) {
    font-size: 35px;
    width: 80%;
  }
`;

export const InformationContact = styled.span`
  font-size: 22px;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 18px;
    width: 70%;
  }
`;

export const ButtonContact = styled.button`
  padding: 20px;
  width: 190px;
  background-color: #ff7500;
  color: white;
  font-size: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export const IconContainer = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 600px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
`;

export const ImageContact = styled.img`
  animation: ${rotate} 4s linear infinite;

  @media (max-width: 700px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 520px) {
    width: 250px;
    height: 250px;
  }
`;

export const FeaturesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  height: 500px;

  @media (max-width: 1420px) {
    height: 900px;
  }

  @media (max-width: 1420px) {
    height: inherit;
  }
`;

export const FeaturesWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(5, 10, 28, 0.89);
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7500;
  }

  &:hover .featuresImg {
    background-color: rgba(5, 10, 28, 0.89);
  }

  @media (max-width: 720px) {
    width: 90%;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FeaturesMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeatureImgWrap = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 117, 0, 0.63);
`;

export const FeaturesItem = styled.div`
  margin-left: 20px;
`;

export const TitleFeatures = styled.h2`
  font-size: 45px;
  text-align: center;
  color: #ff7500;
  text-shadow: 2px 0 0 black;
`;

export const InformationAboutUsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  background-color: #622719;
  padding: 30px;

  @media (max-width: 1450px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const InformationAboutUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 1px 1px 5px 5px rgba(255, 255, 255, 0.89);
  -webkit-box-shadow: 1px 1px 5px 5px rgba(255, 255, 255, 0.89);
  -moz-box-shadow: 1px 1px 5px 5px rgba(255, 255, 255, 0.89);
  border-radius: 20px;
  padding: 20px;

  @media (max-width: 1450px) {
    width: 80%;
  }
`;

export const AboutImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.89);
  -webkit-box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.89);
  -moz-box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.89);
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
  color: white;
  text-shadow: 5px 0 0 black;

  @media (max-width: 460px) {
    font-size: 40px;
  }
`;

export const TextAbout = styled.span`
  font-size: 20px;
  color: white;
  max-width: 650px;
  min-width: 200px;
`;
