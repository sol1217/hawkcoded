import styled from 'styled-components';

export const TestimonialContainerDiv = styled.section`
  width: 100%;
  max-width: 89rem;
  background-color: #fafafa;
  border-radius: 20px;
  margin: 6rem auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0 20px 0; 
  
  @media screen and (max-width: 768px) {
    flex-direction: row; 
  }

  @media screen and (min-width: 769px) {
    max-width: calc(310px * 3 + 200px * 2); /* Calcula el ancho máximo para tres columnas */
  }

  
  @media (max-width: 480px) {
    border-radius: 0px;
  }
`;

export const TestimonialFigure = styled.figure`
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: none !important;
`;

export const TestimonialBlockquote = styled.blockquote`
  display: block;
  border-radius: 8px;
  border: 1px solid #EE7814;
  position: relative;
  background-color: #fff;
  padding: 25px 50px 30px 50px;
  font-size: 0.8em;
  font-weight: 500;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
`;

export const TestimonialImg = styled.img`
  max-width: 100%;
  vertical-align: middle;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  margin: 40px 0 0 10px;
`;

export const TestimonialAuthor = styled.div`
  position: absolute;
  bottom: 45px;
  padding: 0 10px 0 120px;
  margin: 0;
  text-transform: uppercase;
  color: #EE7814;
  transform: translateY(50%);
`;

export const TestimonialTitle = styled.h5`
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
`;

export const TestimonialSubtitle = styled.span`
  color: #000;
  font-weight: 400;
  text-transform: none;
`;

export const Triangle = styled.div`
  position: absolute;
  left: 17%;
  bottom: 41%; /* Ajusta la posición vertical si es necesario */
  transform: translateX(-50%);
  z-index: 1;
  width: 0;
  height: 0;
  border-left: 24px solid transparent; /* Ajusta el ancho del borde izquierdo */
  border-right: 24px solid transparent; /* Ajusta el ancho del borde derecho */
  border-top: 29px solid #EE7814; /* Ajusta el ancho del borde inferior y el color */
`;
