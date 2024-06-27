import styled from 'styled-components';
import { ServiceItem, PServices } from '../Services/Services.elements';
export { ServiceItem, PServices };


export const CategoryCard = styled.div`
    background-color: #fff;
    color: #EE7814;
    border: 1px solid #ddd;
    max-width: 80rem;
    margin: 2rem auto;
    border-radius: 8px;
    padding: 20px; 
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);
    }

    h2 {
        margin-bottom: 10px;
        font-size: 1.75rem;
        color: #333;
        transition: color 0.3s ease;
    }

    &:hover h2 {
        color: #EE7814;
    }

    @media screen and (min-width: 768px) {
        padding: 30px; 
    }
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

export const ServiceDescription = styled.p`
    color: #666;
    font-size: 1rem;
    margin: 0.5rem 0;
    transition: color 0.3s ease;

    ${ServiceItem}:hover & {
        color: #333;
    }
`;
