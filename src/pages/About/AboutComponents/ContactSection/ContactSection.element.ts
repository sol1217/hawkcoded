import styled, {keyframes} from "styled-components";

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
  width: 400px;
  height: 400px;
  animation: ${rotateAndScale} 40s ease infinite;

  @media (max-width: 1100px) {
    width: 350px;
    height: 350px;
  }

    @media (max-width: 860px) {
    width: 300px;
    height: 300px;
  }


  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
`;
