import React from 'react';
import { STitleContainer, H2Title } from '/src/components/GlobalStyles/GlobalStyles.elements';
import { ServicesContainer, PServices, ServiceItem, ServiceIcon } from './Services.elements';
import ServiceContact from '../../../components/layout/ContactComponent/ServiceContact';
import TestimonialContainer from '/src/components/layout/Testimonials/TestimonialContainer';

const servicesData = [
  { id: 1, title: 'Web Development', description: 'Creating websites and web applications', icon: './src/assets/icons/globe-solid.svg' },
  { id: 2, title: 'Mobile App Development', description: 'Developing mobile applications for iOS and Android', icon: './src/assets/icons/mobile-screen-solid.svg' },
  { id: 3, title: 'UI/UX Design', description: 'Designing user interfaces and user experience', icon: './src/assets/icons/ruler-solid.svg' },
  { id: 4, title: 'Digital Marketing', description: 'Promoting brands and products through digital channels', icon: './src/assets/icons/chart-simple-solid.svg' },
];

const Services: React.FC = () => {
  return (
    <>
      <STitleContainer>
        <H2Title>These Are Our Services</H2Title>
      </STitleContainer>

      <ServicesContainer>
        {servicesData.map((service) => (
          <ServiceItem data-aos="flip-up" key={service.id}>
            <PServices>{service.title}</PServices>
            <p style={{color: '#000'}}>{service.description}</p>
            <ServiceIcon src={service.icon} alt="icon" />
          </ServiceItem>
        ))}
      </ServicesContainer>

      <ServiceContact 
          firstAText='Tell Us About Your Project'
          firstAHref='/contact'
          secondAText='See More'
          secondAHref='/services/all'
      />

      <TestimonialContainer />
    </>
  );
}


export default Services;
