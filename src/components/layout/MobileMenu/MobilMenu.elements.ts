import styled from "styled-components";
import { LinkContainer } from "../DeskMenu/NavMenu.elements";

export const MobilMenuContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 1.3rem;

  
  @media (min-width: 1200px) {
    display: none;
  }

  & > li {
    min-height: 25.45px;
  }
`;

export {LinkContainer}