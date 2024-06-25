import styled from "styled-components";

export const ServiceContactContainer = styled.div`
  padding: 100px 30px;
  color: #000;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 40px 60px;
  }
`;

export const ServiceButtonContact = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0px 60px;
  border: 2px solid #ee7814;
  height: 70px;
  border-radius: 40px;
  background-color: transparent;
  color: #000;
  font-size: 18px;
  text-align: center;
  transition:
    border-color 0.3s,
    background-color 0.3s,
    color 0.3s;

  &:hover {
    border-color: transparent;
    background-color: #f57c00;
    color: #fff;
  }
`;

export const SeeMoreContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: #000;
  transition: color 0.3s ease;

  & > img {
    width: 15px;
    background-color: #ee7814;
    padding: 5px;
    border-radius: 50%;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease,
      margin-left 0.3s ease;
  }

  &:hover {
    color: #f57c00;

    & > img {
      transform: scale(1.2);
      background-color: #f57c00;
      margin-left: 10px;
    }
  }
`;
