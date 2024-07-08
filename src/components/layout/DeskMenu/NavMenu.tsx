import React from "react";
import {
  LinkContainer,
  NavMenuLinks,
  SubLinkContainer,
  SubLinksWrapper,
} from "./NavMenu.elements";
import { enlaces, additionalLinks } from "./enlaces.data";

const NavMenu = ({ flexDirection = "", color = "" }) => {
  return (
    <NavMenuLinks $flexDirection={flexDirection} $color={color}>
      {enlaces.map((enlace) => (
        <li key={enlace.id}>
          <LinkContainer $flexDirection={flexDirection} $color={color} href={enlace.href}>
            {enlace.enlace}
            {additionalLinks[enlace.href] && (
              <SubLinksWrapper className="sublinks">
                {additionalLinks[enlace.href].map((subEnlace) => (
                  <SubLinkContainer key={subEnlace.id} href={`${enlace.href}${subEnlace.id}`}>
                    {subEnlace.label}
                  </SubLinkContainer>
                ))}
              </SubLinksWrapper>
            )}
          </LinkContainer>
        </li>
      ))}
    </NavMenuLinks>
  );
};

export default NavMenu;
