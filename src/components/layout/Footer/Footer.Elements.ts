import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin-top: 3rem;
  background-color: #0e131a;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  place-content: center;
  padding: 40px;
  color: white;


  @media (max-width: 1119px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 55px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 55px;
  }


`;

export const ScheduleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const ScheduleText = styled.p`
  color: #808080;
  font-size: 20px;
`

export const OpeningHoursContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin-top: -1rem;
`

export const NavMenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 23px;
  font-size: 19px;

  & > h3 {
    margin: 0 auto;
  }
`

export const LinkMenu = styled.a`
  color: #808080;
  transition: all 0.3s;
  
  &:hover{
    color: white;
  }
`

export const LocationMainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  width: 280px;

  @media (max-width: 1119px) {
    width: auto;
  }

  & > h3 {
    font-size: 20px;
    margin: 0 auto;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 300px;
`

export const LocationText = styled.p`
  color: #808080;
  font-size: 20px;
`

export const ContactContainer = styled.a`
  min-width: 130px;
  height: 40px;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  font-size: 20px;
  outline: none;
  border-radius: 10px;
  z-index: 0;
  background: #f77500;
  overflow: hidden;
  border: 2px solid #f77500;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  &:hover {
    color: #f77500;
    border: 2px solid #f77500;
  }
  &:hover:after {
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #fff;
  }
  
  
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > a {
    cursor: pointer;
  }

  & > a > svg {
    fill: white;
    width: 25px;
    height: 25px;
    transition: fill 0.3s ease;

    &:hover {
      fill: orange;
    }
  }
`

export const LinksMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  
`;
