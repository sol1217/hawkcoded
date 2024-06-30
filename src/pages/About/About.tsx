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
} from "./About.elements.ts";
import hand from "../../assets/png/hand.png";
import { motion } from "framer-motion";
import start from "../../../public/Star.svg";
import hawkcodedAbout from "../../assets/jpg/software.jpg";

import { departments, features } from "./constants.ts";
import { fadeIn, slideIn } from "../../../styles/animations.ts";

export default function About() {
  return (
    <AboutContainer>
      <ImgContainer>
        <ContentWrapper>
          <AboutTitle>About US</AboutTitle>
          <AboutInformation>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            aperiam ea eligendi consectetur et quas ipsa impedit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam ea
            eligendi consectetur et quas ipsa impedit.
          </AboutInformation>
        </ContentWrapper>
      </ImgContainer>
      <DepartamentsInfoWrap>
        <TitleDepartament>Our Team Experts</TitleDepartament>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          aperiam ea eligendi consectetur et quas ipsa impedit.
        </p>
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
            Discover top-rated snowboards, gear, and accessories to enhance your
            performance on the slopes.Discover top-rated snowboards, gear, and
            accessories to enhance your performance on the slopes.
          </InformationContact>
          <ButtonContact>Lorem</ButtonContact>
        </ContactInformarionWrap>
        <IconContainer>
          <ImageContact src={hand} />
        </IconContainer>
      </ContactContainer>

      <section id="features" className="section">
        <TitleFeatures>What People are saying about us</TitleFeatures>
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
                    <h2>Rewards</h2>
                    <p>
                      The best credit cards offer some tantalizing combinations
                      of promotions and prizes
                    </p>
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
            Different bodies, different needs. That’s why every subscription is
            catered to your needs. Because we all need someone to care for us.
            Different bodies, different needs. That’s why every subscription is
            catered to your needs. Because we all need someone to care for us.
            Different bodies, different needs. That’s why every subscription is
            catered to your needs. Because we all need someone to care for us.
            Different bodies, different needs. That’s why every subscription is
            catered to your needs. Because we all need someone to care for us.
            <br />
            Different bodies, different needs. That’s why every subscription is
            catered to your needs. Because we all need someone to care for us.
            Different bodies, different needs. That’s why every subscription is
            catered to your needs. Because we all need someone to care for us.
          </TextAbout>
        </InformationAboutUs>
      </InformationAboutUsWrap>
    </AboutContainer>
  );
}
