import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const BusinessWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 10px;
  background-color: #171d25;
  color: white;
`;

export const InformationWrap = styled.span`
  color: rgba(218, 217, 217, 0.59);
  font-size: 20px;
  width: 600px;
  text-align: center;
  padding: 10px;

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  padding: 10px;

  @media (max-width: 710px) {
    width: 90%;
  }
`;

export const ImgAndTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 5px;
  width: 150px;

  &:hover {
    animation: ${rotate} 1s linear;
  }

  &:nth-child(odd) {
    border: 4px solid #ff7500;
    background: orange;
  }

  &:nth-child(even) {
    background: #ff7500;
    border: 4px solid orange;
  }

  @media (max-width: 500px) {
    width: 130px;
    padding: 2px;
    height: 50px;
  }
`;

export const BussinesText = styled.div`
  font-size: 40px;
  text-align: center;
  font-family: Syne, sans-serif;

  @media (max-width: 700px) {
    font-size: 28px;
  }
`;

export const LiTag = styled.li`
  &::marker {
    color: orangered;
    font-size: 30px;
  }
`;

export const TextColor = styled.b`
  color: #ff7500;
`;
