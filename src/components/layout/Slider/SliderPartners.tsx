import React from 'react';
import {SliderContainer, SliderC, Move, SlideImage, SlideName } from './SliderPartners.elements';
import { partners } from './SliderPartners.elements';

// Componente principal
const Slider: React.FC = () => {
  return (
    <SliderContainer>
      <h1>Marcas Que Confían En Nosotros</h1>
      <SliderC>
          <Move>
            {partners.map((partner) => (
              <div>
                <SlideImage src={partner.imageUrl} alt={partner.name} />
                <SlideName>{partner.name}</SlideName>
              </div>
            ))}
          </Move>
      </SliderC>
    </SliderContainer>
  );
};

export default Slider;
