import styled from 'styled-components';

export const STitle = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const PServices = styled.p`
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ServiceIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
`;
