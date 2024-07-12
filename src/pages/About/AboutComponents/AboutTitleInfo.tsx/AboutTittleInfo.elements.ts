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
  height: 60vh;
  max-height: 1200px;
  text-align: center;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    gap: 60px;
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
  margin: 0;

  @media (min-width: 1499px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 1500px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;


export const AboutInformation = styled.span`
  max-width: 800px;
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin: 0 auto;
  text-wrap: balance;

  @media (max-width: 772px) {
    max-width: 90%;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

