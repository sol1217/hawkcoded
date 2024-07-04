import styled from 'styled-components';
import abouImg from "./../../../../assets/bg-images/computer.webp";

export const ImgContainer = styled.div`
  background-image: url(${abouImg});
  background-size: cover;
  background-position: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(44, 43, 43, 0.62);
  width: inherit;
  color: white;
  height: 100vh;
  max-height: 1200px;
  text-align: center;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    padding: 100px 30px 30px 0px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }

  
  @media (max-width: 480px) {
    margin-top: 5rem;
  }
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

