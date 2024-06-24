import mainLogo from "../../assets/png/main-logo.png";

import {
  BrandContainer,
  ButtonContact,
  ContentWrapper,
  EmphasizeText,
  HomeContainer,
  InformationBox,
  LinkProduct,
  LiTag,
  LogoImage,
  MainText,
  OverviewContainer,
  ProductsWrap,
  RouteProduct,
  SloganText,
  TextAndButtonContainer,
  TextInformation,
  TitleProducts,
  ViewProduct,
  ViewProductContainer,
} from "./Home.elements";
import ServiceContact from "../Services/ServiceContact/ServiceContact";
import { BenefitsElement } from "./Benefits/BenefitsElement";
import { Information } from "./Information/Information.tsx";

export function Home() {
  return (
    <HomeContainer>
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
            <ButtonContact href="/contact">Contact Us</ButtonContact>
          </TextAndButtonContainer>
        </ContentWrapper>
      </InformationBox>

      <BenefitsElement />

      <ServiceContact
        firstAText="Tell Us About Your Project"
        firstAHref="/contacto"
        secondAText="Services"
        secondAHref="/services"
      />

      <Information />

      <ProductsWrap>
        <ul>
          <LiTag>Always The Best</LiTag>
        </ul>

        <TitleProducts>Ready To Take The Next Step?</TitleProducts>

        <ViewProductContainer>
          <ViewProduct>
            <h2>Get a Live Demo</h2>
            <p>
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on.
            </p>
            <RouteProduct>
              <h3>Request a Free Demo</h3>
              <LinkProduct>ir</LinkProduct>
            </RouteProduct>
          </ViewProduct>
        </ViewProductContainer>
      </ProductsWrap>
    </HomeContainer>
  );
}
