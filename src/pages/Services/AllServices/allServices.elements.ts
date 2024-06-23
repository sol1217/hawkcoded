import styled, { keyframes } from 'styled-components';
import {ServiceItem, PServices, STitle} from '../Services.elements'
export {
    ServiceItem,
    PServices,
    STitle
}


const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const CategoryCard = styled.div`
    background-color: #231E1C;
    color: #DDB99E;
    max-width: 80rem;
    margin: 2rem auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px; 
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    }

    h2 {
        margin-bottom: 10px;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        padding: 20px; 
    }
`;


export const ServicesContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;

    /* Aplicamos la animación de fade */
    animation: ${fadeIn} 0.5s ease;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ServiceDescription = styled.p`
    color: #666;
    font-size: 1rem;
    margin: 0.5rem 0;
`;

