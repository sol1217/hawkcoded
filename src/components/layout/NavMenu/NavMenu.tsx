import {
  ContactLink,
  LinkContainer,
  NavContainer,
  NavMenuLinks,
} from "./NavMenu.elements.ts";

const NavMenu = ({ flexDirection = "", color = "" }) => {
  return (
    <NavContainer >
      <NavMenuLinks $flexDirection={flexDirection} $color={color}>
        <li>
          <LinkContainer $flexDirection={flexDirection} $color={color} href="/">
            Inicio
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            $flexDirection={flexDirection}
            $color={color}
            href="/services"
          >
            Servicios
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            $flexDirection={flexDirection}
            $color={color}
            href="/products"
          >
            Productos
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            $flexDirection={flexDirection}
            $color={color}
            href="/about"
          >
            Sobre nosotros
          </LinkContainer>
        </li>
      </NavMenuLinks>
    </NavContainer>
  );
};

export default NavMenu;
