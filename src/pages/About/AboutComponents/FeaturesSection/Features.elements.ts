import styled from "styled-components";

export const TitleFeatures = styled.h2`
  font-size: 45px;
  text-align: center;
  color: #ff7500;
`;


export const FeaturesSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px; 
  padding: 20px;
`;

export const FeaturesWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 600px;


  &:hover {
    transform: scale(1.03);
  }


  @media (max-width: 720px) {
    width: 90%;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    text-align: center;
  }
`;


export const FeatureImgWrap = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  & > img {
    color: #fff;
    fill: #fff;
  }
`;

export const FeaturesItem = styled.div`
`;

