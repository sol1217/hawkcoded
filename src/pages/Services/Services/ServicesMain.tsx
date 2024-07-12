import React from 'react';
import {STitleContainer, H2Title, ImageLogo} from '../../../components/GlobalStyles/GlobalStyles.elements';
import { ServicesContainer, PServices, ServiceItem, ServiceIcon } from './Services.elements';
import ServiceContact from '../../../components/layout/ServiceContact/ServiceContact';
import TestimonialContainer from '../../../components/layout/Testimonials/TestimonialContainer';

import globeIcon from './../../../assets/icons/globe-solid.svg';
import mobileIcon from './../../../assets/icons/mobile-screen-solid.svg';
import rulerIcon from './../../../assets/icons/ruler-solid.svg';
import chartIcon from './../../../assets/icons/chart-simple-solid.svg';
import logo  from "../../../assets/icons/logo-white-bg.svg"

import useScrollToHash from './../../../helpers/useScrollToHash';

const servicesData = [
  { id: 1, title: 'Desarrollo Web', description: 'Creamos sitios web y aplicaciones.', icon: globeIcon},
  { id: 2, title: 'Desarrollo Móvil', description: 'Desarrollamos aplicaciones para iOS y Android.', icon: mobileIcon},
  { id: 3, title: 'UI/UX Design', description: 'Diseñamos Interfaces Atractivas y Funcionales.', icon:  rulerIcon},
  { id: 4, title: 'Marketing Digital', description: 'Promocionamos Productos y Marcas En Medios Digitales.', icon: chartIcon},
];

const Services: React.FC = () => {

  useScrollToHash();

  return (
    <>
      <STitleContainer>
        <H2Title>Estos Son Nuestros Servicios</H2Title>
        <ImageLogo src={logo} alt='Logo'/>
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
