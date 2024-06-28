import {
  AboutContainer,
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
  InformationContact,
  ItemDepartment,
  TitleContact,
  TitleDepartament,
  TitleFeatures,
} from "./About.elements.ts";
import hand from "../../assets/png/hand.png";
import { motion } from "framer-motion";
import start from "../../../public/Star.svg";

import { departments, features } from "./AboutItem.ts";
import { fadeIn, slideIn } from "../../../styles/animations.ts";

export default function About() {
  return (
    <AboutContainer>
      <ImgContainer>
        <ContentWrapper>
          <h2>About US</h2>
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
          <ItemDepartment key={index}>
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
        <FeaturesSection className="sectionImg">
          <TitleFeatures>What People are saying about us</TitleFeatures>
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
    </AboutContainer>
  );
}
