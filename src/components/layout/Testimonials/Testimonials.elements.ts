import styled from 'styled-components';

export const TestimonialContainerDiv = styled.section`
  width: 100%;
  max-width: 89rem;
  margin: 6rem auto 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px; /* Espacio adicional para evitar que el contenido se solape con la barra de scroll */
  
  @media screen and (max-width: 768px) {
    flex-direction: row; /* Muestra las cards en línea en dispositivos móviles */
  }
`;


export const TestimonialH2 = styled.h2`
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
`;

export const Card = styled.div`
  max-width: 300px;
  max-height: 500px;
  min-height: 282px;
  height: 100%;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  transition: border-color 0.3s, transform 0.3s ease; 


  &:hover {
      border-color: #f57c00; 
      transform: scale(1.05);
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #4CAF50; /* borde verde */
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
`;


export const TestimonialTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 257px;
  min-height: 257px;
  height: 100%;
`;


export const Testimonial = styled.p`
  font-size: 16px;
  color: #666;
  margin: 60px 30px 30px 20px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserInfo = styled.div`
  margin-top: 10px;
`;

export const UserName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0;
  color: #000;
`;

export const UserCompany = styled.p`
  font-size: 14px;
  color: #999;
  margin: 0;

  span {
    color: #4CAF50; /* texto verde */
  }
`;