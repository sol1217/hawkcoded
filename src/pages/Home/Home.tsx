import mainLogo from "../../assets/png/main-logo.png";
import { GrTechnology } from "react-icons/gr";
import { IoGitCompareOutline } from "react-icons/io5";
import { VscCompassActive } from "react-icons/vsc";
import { PiEqualizerBold } from "react-icons/pi";
import { RiFileCodeLine } from "react-icons/ri";
import { BsChatText } from "react-icons/bs";
import exampleLogo from "../../assets/png/netflix-logo-example.png";
import {
  BenefitsContainer,
  BrandContainer,
  BusinesImg,
  BusinessItem,
  BusinessWrap,
  BussinesText,
  ButtonContact,
  ContentWrapper,
  EmphasizeText,
  HomeContainer,
  IconsCompanny,
  InformationBox,
  InformationBussines,
  LogoImage,
  MainText,
  NameAndImgBox,
  OverviewContainer,
  SloganText,
  TextAndButtonContainer,
  TextInformation,
  TitleBenefits,
  TitleCompany,
  TitleInformation,
} from "./Home.elements.ts";

export function Home() {
  const businesses = [
    {
      title: "Adaptación a Necesidades Específicas",
      img: <IoGitCompareOutline fontSize={40} />,
      description:
        "Diseñamos y desarrollamos soluciones a medida que se ajustan perfectamente a las necesidades únicas de tu negocio.",
    },
    {
      title: "Soporte Técnico Continuo",
      img: <VscCompassActive fontSize={35} />,
      description:
        "Ofrecemos soporte técnico constante para resolver cualquier problema que pueda surgir.",
    },
    {
      title: "Comunicación Transparente",
      img: <BsChatText fontSize={35} />,
      description:
        "Mantenemos una comunicación abierta y fluida durante todo el proceso de desarrollo.",
    },
    {
      title: "Soluciones Rentables",
      img: <GrTechnology fontSize={40} />,
      description:
        "Ofrecemos soluciones efectivas y eficientes que maximizan el retorno de inversión.",
    },
    {
      title: "Entrega Puntual",
      img: <RiFileCodeLine fontSize={40} />,
      description:
        "Nos comprometemos a cumplir con los plazos establecidos, asegurando que tu proyecto esté listo cuando lo necesitas.",
    },
    {
      title: "Satisfacción del Cliente",
      img: <PiEqualizerBold fontSize={40} />,
      description:
        "Nuestro objetivo principal es la satisfacción completa de nuestros clientes, y trabajamos arduamente para lograrla.",
    },
  ];

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
            <ButtonContact>Contact Us</ButtonContact>
          </TextAndButtonContainer>
        </ContentWrapper>
      </InformationBox>

      <TitleBenefits>
        Beneficios de trabajar con nuestra empresa de <b>software.</b>
      </TitleBenefits>

      <BenefitsContainer>
        {businesses.map((business, index) => (
          <InformationBussines key={index}>
            <IconsCompanny>{business.img}</IconsCompanny>

            <div>
              <TitleInformation>{business.title}</TitleInformation>
              <h3>{business.description}</h3>
            </div>
          </InformationBussines>
        ))}
      </BenefitsContainer>

      <BusinessWrap>
        <BussinesText>Empresas Usan Nuestros servicios</BussinesText>
        <BusinessItem>
          <NameAndImgBox>
            <BusinesImg src={exampleLogo} />
            <TitleCompany>Netflix</TitleCompany>
          </NameAndImgBox>
          <NameAndImgBox>
            <BusinesImg src={exampleLogo} />
            <TitleCompany>Netflix</TitleCompany>
          </NameAndImgBox>
          <NameAndImgBox>
            <BusinesImg src={exampleLogo} />
            <TitleCompany>Netflix</TitleCompany>
          </NameAndImgBox>
          <NameAndImgBox>
            <BusinesImg src={exampleLogo} />
            <TitleCompany>Netflix</TitleCompany>
          </NameAndImgBox>
        </BusinessItem>
      </BusinessWrap>
    </HomeContainer>
  );
}
