import React from 'react';
import AboutTitleInfo from './AboutComponents/AboutTitleInfo.tsx/AboutTittleInfo.tsx';
import DepartmentsSection from './AboutComponents/DepartmentsSection/DepartmentsSection.tsx';
import ContactSection from './AboutComponents/ContactSection/ContactSection.tsx';
import FeaturesSectionComponent from './AboutComponents/FeaturesSection/FeaturesSection.tsx';
import AdditionalInfo from './AboutComponents/AdditionalInfo/AdditionalInfo.tsx';
import { AboutContainer } from "./About.elements.ts";

export default function About() {
  return (
    <AboutContainer>
      <AboutTitleInfo />
      <DepartmentsSection />
      <ContactSection />
      <FeaturesSectionComponent />
      <AdditionalInfo />
    </AboutContainer>
  );
}
