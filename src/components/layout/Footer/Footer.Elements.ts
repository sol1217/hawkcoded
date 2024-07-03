import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin-top: 3rem;
  background-color: #0e131a;
  display: flex;
  justify-content: space-between;
  padding: 20px 35px;
  height: 45px;
`;

export const PStyled = styled.p`
  font-size: 16px;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  & > a {
    cursor: pointer;
  }

  & > a > svg {
    fill: white;
    width: 25px;
    height: 25px;
    transition: fill 0.3s ease;

    &:hover {
      fill: orange;
    }
  }
`;
