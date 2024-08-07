import styled from "styled-components";

export const BusinessWrap = styled.section`
  background-color: #fafafa;
  padding: 20px;
  text-align: center;
  margin: 4rem 0;

  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const BussinesText = styled.h1`
  color: #333;
  font-size: 2em;
`;

export const TextColor = styled.span`
  color: #ee7814;
`;

export const InformationWrap = styled.p`
  color: #555;
  font-size: 1.2em;
  margin: 0 auto;
  padding-bottom: 40px;
  max-width: 65ch;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

export const ImgAndTitleBox = styled.div`
  background-color: #ee7814;
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  height: 100px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  & > img {
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
     width: 100px;

     & > p {
      font-size: 14px;
    }
  }
`;

export const LiTag = styled.li`
  list-style: none;
  color: #ee7814;
  font-size: 1.2em;
  margin-bottom: 20px;
`;
