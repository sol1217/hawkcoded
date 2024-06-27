import styled, { keyframes } from "styled-components";
import phone from "../../assets/jpg/phone.jpg";

const rotateAndScale = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(360deg) scale(1.1);
  }
  100% {
    transform: rotate(720deg) scale(1);
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrap = styled.div`
  background: rgba(44, 43, 43, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 30px;

  @media (max-width: 530px) {
    font-size: 20px;
  }
`;

export const TitleContact = styled.span`
  font-size: 35px;
  color: #ff7500;
  font-weight: bold;
  text-align: center;
  max-width: 60%;
  font-family: cursive;
  text-shadow: 2px 0 0;
`;

export const LogoImg = styled.img`
  box-shadow: 5px 5px 10px 0;
  border-radius: 20px;
  width: 700px;

  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const ContactText = styled.h2`
  font-size: 48px;
  text-shadow: 2px 2px 0 #ff7500;
  font-family: cursive;
  text-align: center;

  @media (max-width: 580px) {
    font-size: 30px;
  }
`;

export const InfoContainer = styled.span`
  font-size: 23px;
  color: rgba(255, 255, 255, 0.58);
  text-align: center;
  max-width: 80%;

  @media (max-width: 580px) {
    width: 400px;
    font-size: 18px;
  }
`;

export const ContactForm = styled.div`
  width: 90%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 800px;
  height: 352px;
  background-color: #ff7500;
  border-radius: 0 20px 20px 0;
  box-shadow: 1px 1px 5px 0;
  position: relative;

  @media (max-width: 1080px) {
    border-radius: 0 0 20px 20px;
    width: 100%;
  }

  @media (max-width: 580px) {
    width: 90%;
  }
`;

export const InputDesign = styled.input`
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  border: none;

  @media (max-width: 580px) {
    width: 80%;
  }
`;

export const TextareaDesign = styled.textarea`
  padding: 15px;
  border-radius: 10px;
  max-width: 500px;

  min-height: 30px;
  width: 500px;
  border: none;

  @media (max-width: 580px) {
    width: 80%;
  }
`;

export const ButtonSubmit = styled.input`
  border-radius: 20px;
  padding: 15px;
  width: 150px;
  color: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
  background-color: #171d25;

  &:active {
    transform: scale(0.95);
  }
`;

export const InfoContactWrap = styled.div`
  background-color: #171d25;
  width: 800px;
  padding: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  border-radius: 20px 0 0 20px;
  height: 333px;
  box-shadow: 1px 1px 5px 0;
  position: relative;

  @media (max-width: 1080px) {
    border-radius: 20px 20px 0 0;
    width: 98%;
  }

  @media (max-width: 580px) {
    width: 85%;
    height: inherit;
  }
`;

export const InformationText = styled.h3`
  color: darkgray;
`;

export const IconosContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const MainLogoImg = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -10px;
  left: 30px;
  animation: ${rotateAndScale} 3s ease-in-out;

  &:hover {
    animation: ${rotateAndScale} 4s ease-in-out infinite;
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const FormTitle = styled.h2`
  color: white;
  font-size: 25px;
  text-shadow: 1px 1px 0 black;
`;
