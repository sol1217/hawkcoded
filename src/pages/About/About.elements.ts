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

export const AboutContainer = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 100px 30px 30px 120px;
  background: rgba(44, 43, 43, 0.62);
  width: 91%;
  color: white;
  height: 85vh;

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    padding: 100px 30px 30px 0px;
  }
`;

export const ImgContainer = styled.div`
  background-image: url(${abouImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
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
  width: 100%;
  background-color: #171d25;
  padding: 30px;
  color: white;
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
`;

export const InformationContact = styled.span`
  font-size: 22px;
  text-align: center;
`;

export const ButtonContact = styled.button`
  padding: 20px;
  width: 190px;
  background-color: #ff7500;
  color: white;
  font-size: 20px;
  border-radius: 15px;
`;

export const IconContainer = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 600px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContact = styled.img`
  animation: ${rotate} 4s linear infinite;
`;

export const FeaturesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

  &:hover {
    background-color: #ff7500;
  }

  &:hover .featuresImg {
    background-color: rgba(5, 10, 28, 0.89);
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

export const FeaturesItem = styled.div``;

export const TitleFeatures = styled.h2`
  font-size: 45px;
  text-align: center;
  color: #ff7500;
  text-shadow: 2px 0 0 black;
`;
