import styled from "styled-components";

export const TextColor = styled.b`
  color: #ff7500;
`;

export const LiTag = styled.li`
  &::marker {
    color: orangered;
    font-size: 30px;
  }
`;

export const ProductsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const TitleProducts = styled.h2`
  font-size: 40px;

  @media (max-width: 950px) {
    text-align: center;
  }

  @media (max-width: 520px) {
    font-size: 30px;
  }
`;

export const ViewProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  padding: 10px;

  @media (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const NameProduct = styled.h2`
  font-size: 35px;
  text-align: center;
`;

export const DescriptionProduct = styled.span`
  padding: 10px;
  text-align: center;
`;

export const ViewProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid rgba(128, 128, 128, 0.65);
  max-width: 450px;
  border-radius: 20px;
  padding: 10px;
  min-width: 300px;

  &:hover {
    border: 3px solid #ff7500;
  }

  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: auto;
  max-width: 380px;
  max-height: 350px;
`;

export const RouteProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  text-align: center;
`;

export const LinkProduct = styled.a`
  padding: 10px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #ff7500;
  cursor: pointer;
  color: white;
  font-size: 20px;
  border: 1px solid;
  transition: transform 0.6s ease;

  &:hover {
    transform: translateX(10px);
    background-color: rgba(255, 117, 0, 0.74);
    border: none;
    color: white;
  }
`;
