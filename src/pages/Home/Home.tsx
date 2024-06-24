import mainLogo from "../../assets/png/main-logo.png";
import { FaArrowRight } from "react-icons/fa";
import productsAvata from "../../assets/jpg/dji-avata.jpg";
import productsmavic from "../../assets/png/dji-mavic.png";
import {
  BrandContainer,
  ButtonContact,
  ContentWrapper,
  DescriptionProduct,
  EmphasizeText,
  HomeContainer,
  ImgProduct,
  InformationBox,
  LinkProduct,
  LiTag,
  LogoImage,
  MainText,
  NameProduct,
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

        <TitleProducts>
          Productos Sobresalientes en Nuestro Catálogo
        </TitleProducts>

        <ViewProductContainer>
          <ViewProduct>
            <NameProduct>Get a Live Demo</NameProduct>
            <ImgProduct src={productsAvata} />

            <DescriptionProduct>
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on.
            </DescriptionProduct>
            <RouteProduct>
              <h3>Request a Free Demo</h3>
              <LinkProduct>
                <FaArrowRight />
              </LinkProduct>
            </RouteProduct>
          </ViewProduct>
          <ViewProduct>
            <NameProduct>Get a Live Demo</NameProduct>
            <ImgProduct src={productsmavic} />
            <DescriptionProduct>
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on.
            </DescriptionProduct>
            <RouteProduct>
              <h3>Request a Free Demo</h3>
              <LinkProduct href="/products">
                <FaArrowRight />
              </LinkProduct>
            </RouteProduct>
          </ViewProduct>
        </ViewProductContainer>
      </ProductsWrap>
    </HomeContainer>
  );
}
