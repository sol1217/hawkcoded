import { LinkContainer, NavMenuLinks } from "./NavMenu.elements.ts";

const NavMenu = ({ flexDirection = "", color = "" }) => {
  return (
    <nav>
      <NavMenuLinks $flexDirection={flexDirection} $color={color}>
        <li>
          <LinkContainer $flexDirection={flexDirection} $color={color} href="/">
            Home
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            $flexDirection={flexDirection}
            $color={color}
            href="/services"
          >
            Services
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            $flexDirection={flexDirection}
            $color={color}
            href="/products"
          >
            Products
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            $flexDirection={flexDirection}
            $color={color}
            href="/about"
          >
            About Us
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            $flexDirection={flexDirection}
            $color={color}
            href="/contact"
          >
            Contact Us
          </LinkContainer>
        </li>
      </NavMenuLinks>
    </nav>
  );
};

export default NavMenu;
