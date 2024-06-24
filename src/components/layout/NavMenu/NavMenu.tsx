import { LinkContainer, NavMenuLinks } from "./NavMenu.elements.ts";

const NavMenu = ({ flexDirection = "", color = "" }) => {
  return (
    <nav>
      <NavMenuLinks $flexDirection={flexDirection}>
        <li>
          <LinkContainer $color={color} href="/">
            Home
          </LinkContainer>
        </li>
        <li>
          <LinkContainer $color={color} href="/services">
            Services
          </LinkContainer>
        </li>
        <li>
          <LinkContainer $color={color} href="/products">
            Products
          </LinkContainer>
        </li>
        <li>
          <LinkContainer $color={color} href="/about">
            About Us
          </LinkContainer>
        </li>
        <li>
          <LinkContainer $color={color} href="/contact">
            Contact Us
          </LinkContainer>
        </li>
      </NavMenuLinks>
    </nav>
  );
};

export default NavMenu;
