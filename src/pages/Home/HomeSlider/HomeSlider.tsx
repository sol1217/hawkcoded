import React, { useState, useCallback, useRef } from 'react';
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
  const intervarlRef = useRef<NodeJS.Timeout | null>(null);


  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const resetInterval = useCallback(()=> {
    if(intervarlRef.current) {
      clearInterval(intervarlRef.current);
    }

    intervarlRef.current = setInterval(()=> {
      nextSlide();
    }, 5000);
  }, [nextSlide])


  const handleNextSlide = () => {
    nextSlide();
    resetInterval();
  }

  const handlePrevSlide = () => {
    prevSlide();
    resetInterval();
  }

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
      <LeftArrow onClick={handlePrevSlide}>{'<'}</LeftArrow>
      <RightArrow onClick={handleNextSlide}>{'>'}</RightArrow>
    </SliderContainer>
  );
};

export default HomeSlider;