import styled from "styled-components";

interface NavMenuLinksProps {
  $flexDirection: string;
  $color: string;
}

interface ButtonLinkProps {
  $background: string;
  $color: string;
}

export const NavContainer = styled.div`
  
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
    font-weight: bold;
  }
`;

export const ContactLink = styled.a<ButtonLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  font-weight: bold;
  border-bottom: 5px solid #b46436;
  transition: 0.3s;
  color: ${({ $color }) => $color || "white"};
  background-color:  ${({ $background }) => $background || "#ef7533"};;

  &:hover {
    border-bottom-width: 0;
    transform: translateY(5px);
  }

`;
