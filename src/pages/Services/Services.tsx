import React from "react";
import { ServicesContainer, PServices, ServiceItem, STitle, STitleContainer } from "./Services.elements.ts";
import ServiceContact from "./ServiceContact/ServiceContact.tsx";
import TestimonialContainer from "./../../components/layout/Testimonials/TestimonialContainer.tsx";

const servicesData = [
  { id: 1, title: "Web Development", description: "Creating websites and web applications", icon: './src/assets/icons/globe-solid.svg' },
  { id: 2, title: "Mobile App Development", description: "Developing mobile applications for iOS and Android", icon: './src/assets/icons/mobile-screen-solid.svg' },
  { id: 3, title: "UI/UX Design", description: "Designing user interfaces and user experience", icon: './src/assets/icons/ruler-solid.svg' },
  { id: 4, title: "Digital Marketing", description: "Promoting brands and products through digital channels", icon: './src/assets/icons/chart-simple-solid.svg' },
];

export default function Services() {
  return (
    <>
      <STitleContainer>
        <STitle>Services</STitle>
      </STitleContainer>

      <ServicesContainer>
        {servicesData.map((service) => (
          <ServiceItem key={service.id}>
            <PServices>{service.title}</PServices>
            <p style={{color: '#000'}}>{service.description}</p>
            <img style={{width: '2rem'}} loading="lazy" src={service.icon} alt="icon"/>
          </ServiceItem>
        ))}
      </ServicesContainer>

      <ServiceContact/>


      <TestimonialContainer/>
    </>
  );
}
