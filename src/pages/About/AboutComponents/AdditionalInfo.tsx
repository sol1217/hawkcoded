import React from 'react';
import { AboutImg, InformationAboutUs, InformationAboutUsWrap, TitleAbout, TextAbout } from "./../About.elements.ts";
import service from "./../../../assets/png/services.png";

const AdditionalInfo: React.FC = () => (
  <InformationAboutUsWrap>
    <AboutImg src={service} data-aos="fade-right" />
    <InformationAboutUs data-aos="fade-left">
      <TitleAbout> Ayudar a su empresa a crecer</TitleAbout>
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
);

export default AdditionalInfo;
