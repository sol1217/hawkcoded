import React from 'react';
import { FeaturesSection, FeaturesWrap, FeatureImgWrap, FeaturesItem, TitleFeatures } from "./../About.elements.ts";
import start from "./../../../../public/Star.svg";
import { features } from "./../Data/constants.ts";

const FeaturesSectionComponent: React.FC = () => (
  <section id="features" className="section">
    <TitleFeatures>¿Por Qué Elegirnos?</TitleFeatures>
    <FeaturesSection className="sectionImg">
      {features.map((feature, index) => (
        <FeaturesWrap 
          data-aos="fade-left" data-aos-duration="1000" key={index}>
          <FeatureImgWrap className="featuresImg">
            <img src={start} />
          </FeatureImgWrap>
          <FeaturesItem>
            <h2>{feature.title}</h2>
            <p>{feature.content}</p>
          </FeaturesItem>
        </FeaturesWrap>
      ))}
    </FeaturesSection>
  </section>
);

export default FeaturesSectionComponent;
