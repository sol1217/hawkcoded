import styled from 'styled-components';
import stockServiceImage from '/src/assets/bg-images/stock-image-services.webp';
import stockProductImage_1 from '/src/assets/bg-images/software.webp'


export const LoadMoreButton = styled.button`
  background-color: #EE7814;
  color: #fff;
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s; 


  &:hover {
      border-color: #f57c00; 
      background-color: #fff;
      color: #f57c00;

  }
`;


export const STitleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    max-height: 400px;
    background-image: url(${stockServiceImage});
    background-color: rgba(226, 226, 226, 0.9);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;


interface H2TitleProps {
  color?: string;
  textShadow?: string;
}

export const H2Title = styled.h2<H2TitleProps>`
  color: ${(props) => props.color || 'white'};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  text-shadow: ${(props) => props.textShadow || '2px 2px 4px rgba(0, 0, 0, 0.3)'};
`;



export const PTitleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    max-height: 400px;
    background-image: url(${stockProductImage_1});
    background-color: rgba(226, 226, 226, 0.9);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;


export const H2WithBorders = styled.h2`
  color: #EE7814;
  overflow: hidden;
  padding: 30px 0;
  font-size: 28px;
  text-align: center;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    border: 1px solid #EE7814;
  }

  &::before {
    top: 0;
    left: 0;
    right: auto;
    border-bottom: none;
  }

  &::after {
    bottom: 0;
    right: 0;
    left: auto;
    border-top: none;
  }

  & > a {
    color: #EE7814;
    font-size: 15px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    transition: color 0.3s ease-in;
  }
      & > a:hover {
        color: #000;
      }

`;
