import React from 'react';
import { STitleContainer, H2Title } from '../../../components/GlobalStyles/GlobalStyles.elements';
import { ServicesContainer, PServices, ServiceItem, ServiceIcon } from './Services.elements';
import ServiceContact from '../../../components/layout/ServiceContact/ServiceContact';
import TestimonialContainer from '../../../components/layout/Testimonials/TestimonialContainer';

import globeIcon from './../../../assets/icons/globe-solid.svg';
import mobileIcon from './../../../assets/icons/mobile-screen-solid.svg';
import rulerIcon from './../../../assets/icons/ruler-solid.svg';
import chartIcon from './../../../assets/icons/chart-simple-solid.svg';

const servicesData = [
  { id: 1, title: 'Web Development', description: 'Creating websites and web applications', icon: globeIcon},
  { id: 2, title: 'Mobile App Development', description: 'Developing mobile applications for iOS and Android', icon: mobileIcon},
  { id: 3, title: 'UI/UX Design', description: 'Designing user interfaces and user experience', icon:  rulerIcon},
  { id: 4, title: 'Digital Marketing', description: 'Promoting brands and products through digital channels', icon: chartIcon},
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
          firstAText='Trabajemos Juntos'
          firstAHref='/contact'
          secondAText='Ver Todos'
          secondAHref='/services/all'
      />

      <TestimonialContainer />
    </>
  );
}


export default Services;
