import styled from "styled-components";

interface NavMenuLinksProps {
  $flexDirection: string;
  $color: string;
}

export const NavContainer = styled.div<NavMenuLinksProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};

  padding: 0 20px 0 20px;
`;

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
  font-weight: 200;
  font-size: 19px;
  font-family: sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7500;
  }
`;

export const ContactLink = styled.a`
  padding: 13px;
  background-color: #ff7500;
  font-size: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  color: white;
`;
