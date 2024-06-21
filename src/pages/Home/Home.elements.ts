import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const Imagen = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  filter: grayscale(100%);
`;

export const InformationBox = styled.div`
  z-index: 98;
  color: black;
  position: absolute;
  background: rgba(16, 15, 15, 0.65);
  width: 88vw;
  height: 84vh;
  padding: 100px 30px 30px 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 100px;
`;

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const MainText = styled.h1`
  color: white;
  font-family: "Lantinghei SC";
  width: 800px;
  text-align: center;
`;

export const EmphasizeText = styled.b`
  color: #ff7500;
  font-family: cursive;
  font-size: 65px;
  margin-left: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

export const FirstText = styled.h3`
  color: #ff7500;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: white;
`;

export const TextInformation = styled.div`
  width: 500px;
  font-size: 26px;
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

  &:active {
    transform: scale(0.95);
  }
`;
