import { LinkContainer, NavMenuLinks } from "./NavMenu.elements.ts";

const NavMenu = () => {
  return (
    <nav>
      <NavMenuLinks>
        <li>
          <LinkContainer href="/">Home</LinkContainer>
        </li>
        <li>
          <LinkContainer href="/services">Services</LinkContainer>
        </li>
        <li>
          <LinkContainer href="/products">Products</LinkContainer>
        </li>
        <li>
          <LinkContainer href="/about">About Us</LinkContainer>
        </li>
        <li>
          <LinkContainer href="/contact">Contact Us</LinkContainer>
        </li>
      </NavMenuLinks>
    </nav>
  );
};

export default NavMenu;
