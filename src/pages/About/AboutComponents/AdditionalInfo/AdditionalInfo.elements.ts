import styled from "styled-components";

export const InformationAboutUsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 30px;
  margin: 4rem 0;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 60px;
  }
`;


export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.97);
  }

  @media (max-width: 560px) {
    width: 300px;
    height: 300px;
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
  max-width: 65ch;
  min-width: 200px;
  text-wrap: pretty;
  padding: 1rem;
`;
