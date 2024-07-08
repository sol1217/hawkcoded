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
  /* Puedes agregar estilos adicionales aquí si es necesario */
`;

export const SubLinksWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease-in-out; 
`;

export const NavMenuLinks = styled.ul<NavMenuLinksProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  justify-content: space-around;
  align-items: center;
  min-height: 43px;
  list-style-type: none;
  padding: 10px;
  color: ${({ $color }) => $color || "white"};

  li {
    position: relative;

    &:hover ${SubLinksWrapper} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LinkContainer = styled.a<NavMenuLinksProps>`
  color: ${({ $color }) => $color || "white"};
  font-weight: 200;
  text-align: left;
  font-size: 19px;
  font-family: "Rajdhani", sans-serif;
  transition: color 0.3s ease, font-size 0.3s ease;
  position: relative;
  padding-inline: 1rem;

  &:hover {
    color: #ff7500;
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    &:hover {
      font-size: 20px;
    }
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
  border-bottom: 1px solid #231e1b;
  transition: 0.3s;
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $background }) => $background || "#ef7533"};

  &:hover {
    transform: scale(1.04);
  }
`;

export const SubLinkContainer = styled.a`
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px 15px;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;


