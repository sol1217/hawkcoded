import styled from 'styled-components';

interface SlideProps {
  imageUrl: string;
  currentIndex: number;
  slideIndex: number;
}

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px; /* Altura del slider */
  overflow: hidden;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
`;

export const Slide = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: ${props => props.slideIndex === props.currentIndex ? '0%' : props.slideIndex > props.currentIndex ? '100%' : '-100%'};
  transition: left 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  z-index: 10;
  overflow: hidden;
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 20;
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 30;
  margin-left: -20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 833px) {
    margin-left: -100px;
  }

  @media (max-width: 719px) {
    margin-left: -3rem;
    padding-inline: 1rem;
  }
`;

export const SlideTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    text-align: left;
    font-size: 1em;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  text-wrap: balance;
  min-width: 400px;
  max-width: 400px;

  @media (max-width: 500px) {
    max-width: 200px;
    min-width: 200px;
  }

  @media (min-width: 1200px) {
    max-width: 600px;
    min-width: 600px;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 100;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #ff7500;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  left: 20px;
`;

export const RightArrow = styled(ArrowButton)`
  right: 20px;
`;