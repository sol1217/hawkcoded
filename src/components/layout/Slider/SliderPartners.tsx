import React from 'react';
import { SliderContainer, SlideTrack, Slide, SlideImage, SlideName } from './SliderPartners.elements';
import { partners } from './SliderPartners.elements';

// Componente principal
const Slider: React.FC = () => {
  return (
    <SliderContainer>
      <h1>Nuestras Marcas</h1>
      <SlideTrack>
        {partners.map((partner) => (
          <Slide key={partner.id}>
            <SlideImage src={partner.imageUrl} alt={partner.name} />
            <SlideName>{partner.name}</SlideName>
          </Slide>
        ))}
      </SlideTrack>
    </SliderContainer>
  );
};

export default Slider;
