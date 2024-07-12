import styled from "styled-components";
import { H2WithBorders } from "./../../components/GlobalStyles/GlobalStyles.elements";
export {H2WithBorders}
import phone from "../../assets/bg-images/phone.webp";


export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: 20px;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  & > h2 {
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
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
  color: #fff;
  font-weight: bold;
  text-align: center;
  max-width: 60%;
`;

export const LogoImg = styled.img`
  width: 50%;
  max-width: 500px;
  max-height: 200px;
`;


export const InfoContainer = styled.span`
  font-size: 23px;
  color: #fff;
  text-align: center;
  max-width: 80%;

  & > span {
    color: #EE7814;
  }

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
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 800px;
  height: 500px;
  background-color: #ff7500;
  border-radius: 0 20px 20px 0;
  position: relative;
  border: 1px solid #ff7500;

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
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const InfoContactWrap = styled.div`
  background-color: #fff;
  width: 800px;
  height: 480px;
  padding: 30px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 22px;
  border: 1px solid #ff7500;
  border-radius: 20px 0 0 20px;
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

  & > svg {
    max-width: 40px;
    width: 100%;
    max-height: 40px;
    height: 100%;
  }
`;

export const MainLogoImg = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 20px;
  left: 20px;

  @media (max-width: 1187px) {
    display: none;
  }
`;

export const FormTitle = styled.h2`
  margin: 0 auto;
  color: white;
  font-size: 25px;
`;
