import styled from "styled-components";
import phone from "../../assets/jpg/phone.jpg";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  background-image: url(${phone});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

export const TextWrap = styled.div`
  background: rgba(44, 43, 43, 0.6);
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 30px;
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
`;

export const InfoContainer = styled.span`
  font-size: 23px;
  color: rgba(255, 255, 255, 0.58);
  text-align: center;
  max-width: 50%;
`;

export const ContactForm = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  width: 800px;
  background-color: #ff7500;
  box-shadow: 1px 1px 5px 0;
`;

export const InputDesign = styled.input`
  padding: 15px;
  border-radius: 5px;
  width: 500px;
  border: none;
`;

export const TextareaDesign = styled.textarea`
  padding: 15px;
  border-radius: 5px;
  width: 500px;
  border: none;
`;

export const ButtonSubmit = styled.input`
  border-radius: 20px;
  padding: 10px;
  width: 100px;
  color: white;
  border: none;
  font-size: 18px;
  background-color: #171d25;
`;

export const InfoContactWrap = styled.div`
  background-color: #171d25;
  width: 800px;
  padding: 20px;
  color: white;
  text-align: center;
  box-shadow: 1px 1px 5px 0;
`;

export const ContactImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const InformationText = styled.span`
  width: 300px;
  background-color: #535bf2;
  font-size: 20px;
`;
