import React from 'react';
import { AboutTitle, AboutInformation, ContentWrapper, ImgContainer } from "./../About.elements.ts";

const AboutTitleInfo: React.FC = () => (
  <ImgContainer>
    <ContentWrapper>
      <AboutTitle>Sobre Nosotros</AboutTitle>
      <AboutInformation>
        Hemos entregado con éxito numerosos proyectos en varias industrias.
        Nuestro enfoque centrado en el cliente garantiza que superemos las
        expectativas en todo momento. Ofrecemos soporte y mantenimiento
        continuos para garantizar la longevidad y eficiencia de nuestras
        soluciones.
      </AboutInformation>
    </ContentWrapper>
  </ImgContainer>
);

export default AboutTitleInfo;
