import mainLogo from "../../assets/png/main-logo.png";

import {
  BrandContainer,
  ButtonContact,
  ContentWrapper,
  EmphasizeText,
  HomeContainer,
  InformationBox,
  LogoImage,
  MainText,
  OverviewContainer,
  SloganText,
  TextAndButtonContainer,
  TextInformation,
} from "./Home.elements";
import ServiceContact from "../Services/ServiceContact/ServiceContact";
import { BenefitsElement } from "./Benefits/BenefitsElement";
import { Information } from "./Information/Information.tsx";
import OutstandingProducts from "./OutstandingProducts/OutstandingProducts.tsx";

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
              Somos una empresa de software dedicada a desarrollar soluciones
              tecnológicas innovadoras para satisfacer las necesidades de
              nuestros clientes.
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

      <OutstandingProducts />

      <div>
        <img />
        <p>Cybersecurity Ventures</p>
        <h2>
          The Estimated Global Cost of Cybercrime is $6T and Climbing + 15% a
          Year.
        </h2>
      </div>
    </HomeContainer>
  );
}
