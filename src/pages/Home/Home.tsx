import mainLogo from "../../assets/png/main-logo.png";
import setting from "../../assets/png/settings.png";
import {
  BrandContainer,
  BussinesContainer,
  ButtonContact,
  ContentWrapper,
  EmphasizeText,
  IconsCompanny,
  InformationBox,
  InformationBussines,
  LogoImage,
  MainText,
  OverviewContainer,
  SloganText,
  TextAndButtonContainer,
  TextInformation,
  TitleInformation,
} from "./Home.elements.ts";

export function Home() {
  const businesses = [
    { title: "Blockchain", description: "Lorem ipsum dolor sit amet..." },
    { title: "Sol", description: "Lorem ipsum dolor sit amet..." },
    { title: "Max", description: "Lorem ipsum dolor sit amet..." },
  ];
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

      <h2>Nuestra experiencia respalda a las empresas líderes</h2>

      <BussinesContainer>
        {businesses.map((business, index) => (
          <InformationBussines key={index}>
            <IconsCompanny src={setting} />

            <div>
              <TitleInformation>{business.title}</TitleInformation>
              <h3>{business.description}</h3>
            </div>
          </InformationBussines>
        ))}
      </BussinesContainer>
    </main>
  );
}
