import styled from "styled-components";

export const DepartamentsInfoWrap = styled.div`
  padding: 20px;
  text-align: center;
`;

export const TitleDepartament = styled.h2`
  color: #ff7500;
  font-size: 40px;
`;

export const WelcomText = styled.span`
  font-size: 20px;
`;

export const DepartmentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const ItemDepartment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #ddd;
 
  & > p {
    text-wrap: balance;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;
