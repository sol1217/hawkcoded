import { MobilMenuContainer, LinkContainer } from "./MobilMenu.elements.ts";
import { enlaces } from "./../DeskMenu/enlaces.data.ts";

export default function MobilMenu() {
  return (
    <MobilMenuContainer>
        {enlaces.map((enlace) => (
          <li key={enlace.id}>
          <LinkContainer $flexDirection={''} $color={''} href={enlace.href}>
            {enlace.enlace}
          </LinkContainer>
        </li>
        ))}
    </MobilMenuContainer>
  );
}
