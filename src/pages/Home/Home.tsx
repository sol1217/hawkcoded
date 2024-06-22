import mainLogo from "../../assets/png/main-logo.png";
import {
  BrandContainer,
  ButtonContact,
  ContentWrapper,
  EmphasizeText,
  InformationBox,
  LogoImage,
  MainText,
  OverviewContainer,
  SloganText,
  TextAndButtonContainer,
  TextInformation,
} from "./Home.elements.ts";

export function Home() {
  return (
    <main>
      <InformationBox>
        <ContentWrapper>
          <OverviewContainer>
            <BrandContainer>
              <SloganText>Excelencia e invación</SloganText>
              <LogoImage src={mainLogo} />
            </BrandContainer>

            <MainText>
              Transforma tu presencia digital con
              <EmphasizeText>nosotros</EmphasizeText>
            </MainText>
          </OverviewContainer>
          <TextAndButtonContainer>
            <TextInformation>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextInformation>
            <ButtonContact>Contact Us</ButtonContact>
          </TextAndButtonContainer>
        </ContentWrapper>
      </InformationBox>

      <div>
        <h2>Nuestra experiencia respalda a las empresas líderes</h2>
        <div>
          <img />
        </div>
      </div>
    </main>
  );
}
