import {
  AboutContainer,
  AboutImg,
  AboutInformation,
  AboutTitle,
  ButtonContact,
  ContactContainer,
  ContactInformarionWrap,
  ContentWrapper,
  DepartamentsInfoWrap,
  DepartmentsWrap,
  FeatureImgWrap,
  FeaturesItem,
  FeaturesMain,
  FeaturesSection,
  FeaturesWrap,
  IconContainer,
  Image,
  ImageContact,
  ImgContainer,
  InformationAboutUs,
  InformationAboutUsWrap,
  InformationContact,
  ItemDepartment,
  TextAbout,
  TitleAbout,
  TitleContact,
  TitleDepartament,
  TitleFeatures,
  WelcomText,
} from "./About.elements.ts";
import service from "../../assets/png/services.png";
import { motion } from "framer-motion";
import start from "../../../public/Star.svg";
import robot from "../../assets/png/robot.png";
import { departments, features } from "./constants.ts";
import { fadeIn, slideIn } from "../../../styles/animations.ts";
import Slider from "/src/components/layout/Slider/Slider.tsx";

export default function About() {
  return (
    <AboutContainer>
      <ImgContainer>
        <ContentWrapper>
          <AboutTitle>Sobre Nosotros</AboutTitle>
          <AboutInformation>
            Hemos entregado con éxito numerosos proyectos en varias industrias.
            Nuestro enfoque centrado en el cliente garantiza que superemos las
            expectativas en todo momento. Ofrecemos soporte y mantenimiento
            continuos para garantizar la longevidad y eficiencia de nuestras
            soluciones.
          </AboutInformation>
        </ContentWrapper>
      </ImgContainer>
      <DepartamentsInfoWrap>
        <TitleDepartament> ¿Que es Hawkcoded?</TitleDepartament>
        <WelcomText>
          Bienvenido a Hawkcoded, donde la innovación se encuentra con la
          excelencia en el desarrollo de software.
        </WelcomText>
      </DepartamentsInfoWrap>

      <DepartmentsWrap>
        {departments.map((department, index) => (
          <ItemDepartment key={index} data-aos="flip-up">
            <Image src={department.image} />
            <h2>{department.title}</h2>
            <p>{department.description}</p>
          </ItemDepartment>
        ))}
      </DepartmentsWrap>

      <ContactContainer>
        <ContactInformarionWrap>
          <TitleContact>Contactanos para mas información</TitleContact>
          <InformationContact>
            Prosperamos con la creatividad y el ingenio, buscando constantemente
            nuevas formas de resolver problemas. La excelencia está en el núcleo
            de todo lo que hacemos. Nos comprometemos a entregar productos y
            servicios de primera calidad.
            <br />
            Nuestros clientes son nuestros socios.
          </InformationContact>
          <ButtonContact>Contacto</ButtonContact>
        </ContactInformarionWrap>
        <IconContainer>
          <ImageContact src={robot} />
        </IconContainer>
      </ContactContainer>

      <section id="features" className="section">
        <TitleFeatures>¿Por Qué Elegirnos?</TitleFeatures>
        <FeaturesSection className="sectionImg">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={fadeIn("left", "spring", index * 0.6, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <FeaturesMain>
                <FeaturesWrap>
                  <FeatureImgWrap className="featuresImg">
                    <img src={start} />
                  </FeatureImgWrap>

                  <FeaturesItem>
                    <h2>{feature.title}</h2>
                    <p>{feature.content}</p>
                  </FeaturesItem>
                </FeaturesWrap>
              </FeaturesMain>
            </motion.div>
          ))}
        </FeaturesSection>
      </section>

      <InformationAboutUsWrap>
        <AboutImg src={hawkcodedAbout} data-aos="fade-right"/>
        <InformationAboutUs data-aos="fade-left">
          <TitleAbout>Our membership for you.</TitleAbout>
          <TextAbout>
            Además de los servicios mencionados, nos especializamos en adaptar
            cada solución a las necesidades específicas de nuestros clientes,
            asegurando un enfoque personalizado y resultados óptimos. Trabajamos
            en colaboración estrecha con su equipo para entender sus desafíos y
            proporcionar soluciones que realmente marquen la diferencia.
            <br />
            Nuestro compromiso con la innovación y la excelencia nos impulsa a
            utilizar las tecnologías más avanzadas y las mejores prácticas de la
            industria. Desde la concepción hasta la implementación y el soporte
            continuo, estamos dedicados a ayudar a su empresa a crecer y
            prosperar en el competitivo mercado actual.
          </TextAbout>
        </InformationAboutUs>
      </InformationAboutUsWrap>

      <Slider/>
    </AboutContainer>
  );
}
