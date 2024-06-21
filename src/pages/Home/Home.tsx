import img from "../../assets/3.jpg";
import mainLogo from "../../assets/main-logo.png";
import {
  ButtonContact,
  EmphasizeText,
  FirstText,
  Imagen,
  InfoContainer,
  InformationBox,
  LogoContainer,
  LogoImage,
  MainText,
  ResumeContainer,
  TextInformation,
} from "./Home.elements.ts";

export function Home() {
  return (
    <main>
      <InformationBox>
        <ResumeContainer>
          <LogoContainer>
            <FirstText>Excelencia e invación</FirstText>
            <LogoImage src={mainLogo} />
          </LogoContainer>

          <MainText>
            Transforma tu presencia digital con
            <EmphasizeText>nosotros</EmphasizeText>
          </MainText>
        </ResumeContainer>
        <InfoContainer>
          <TextInformation>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextInformation>
          <ButtonContact>Contact Us</ButtonContact>
        </InfoContainer>
      </InformationBox>

      <Imagen src={img} />
    </main>
  );
}
