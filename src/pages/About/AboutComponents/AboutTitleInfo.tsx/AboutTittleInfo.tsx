import React from 'react';
import { ImgContainer, ContentWrapper, AboutTitle, AboutInformation } from './AboutTittleInfo.elementes';

const AboutTitleInfo: React.FC = () => (
  <ImgContainer>
    <ContentWrapper>
      <AboutTitle data-aos="fade-up">Sobre Nosotros</AboutTitle>
      <AboutInformation data-aos="fade-up">
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
