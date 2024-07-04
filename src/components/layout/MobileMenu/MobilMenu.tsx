import { MobilMenuContainer } from "./MobilMenu.elements.ts";
import NavMenu from "../NavMenu/NavMenu.tsx";

export default function MobilMenu() {
  return (
    <MobilMenuContainer>
      <NavMenu flexDirection="column" color="white" />
    </MobilMenuContainer>
  );
}
