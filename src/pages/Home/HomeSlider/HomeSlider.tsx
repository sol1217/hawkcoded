import React, { useState } from 'react';
import {
  SliderContainer,
  Slide,
  SlideOverlay,
  SlideContent,
  SlideTitle,
  SlideDescription,
  LeftArrow,
  RightArrow
} from './HomeSlider.elements';
import { SlideData } from './HomeSliderData';

interface HomeSliderProps {
  slides: SlideData[];
}

const HomeSlider: React.FC<HomeSliderProps> = ({ slides })  => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          imageUrl={slide.imageUrl}
          currentIndex={currentSlide}
          slideIndex={index}
        >
          <SlideOverlay />
          <SlideContent>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideDescription>{slide.description}</SlideDescription>
          </SlideContent>
        </Slide>
      ))}
      <LeftArrow onClick={prevSlide}>{'<'}</LeftArrow>
      <RightArrow onClick={nextSlide}>{'>'}</RightArrow>
    </SliderContainer>
  );
};

export default HomeSlider;