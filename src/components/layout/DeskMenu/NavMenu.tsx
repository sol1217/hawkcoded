import {
  LinkContainer,
  NavMenuLinks,
} from "./NavMenu.elements.ts";
import { enlaces } from "./enlaces.data.ts";


const NavMenu = ({ flexDirection = "", color = "" }) => {
  return (
      <NavMenuLinks $flexDirection={flexDirection} $color={color}>
        {enlaces.map((enlace) => (
          <li key={enlace.id}>
          <LinkContainer $flexDirection={flexDirection} $color={color} href={enlace.href}>
            {enlace.enlace}
          </LinkContainer>
        </li>
        ))}
      </NavMenuLinks>
  );
};

export default NavMenu;
