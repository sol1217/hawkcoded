import styled from "styled-components";

export const NavMenuLinks = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  list-style-type: none;
  padding: 10px;
`;

export const LinkContainer = styled.a`
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: #ff7500;
  }
`;
