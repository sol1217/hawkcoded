import React from 'react';
import AboutTitleInfo from './AboutComponents/AboutTittleInfo.tsx';
import DepartmentsSection from './AboutComponents/DepartmentsSection';
import ContactSection from './AboutComponents/ContactSection';
import FeaturesSectionComponent from './AboutComponents/FeaturesSection';
import AdditionalInfo from './AboutComponents/AdditionalInfo';
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
