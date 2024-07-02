import styled from "styled-components";

interface NavMenuLinksProps {
  $flexDirection: string;
  $color: string;
}

export const NavMenuLinks = styled.ol<NavMenuLinksProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  list-style-type: none;
  padding: 10px;
  color: ${({ $color }) => $color || "white"};
`;

export const LinkContainer = styled.a<NavMenuLinksProps>`
  color: ${({ $color }) => $color || "white"};
  font-weight: bold;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7500;
  }
`;
