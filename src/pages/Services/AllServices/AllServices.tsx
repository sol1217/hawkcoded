import React, { useState } from 'react';
import { STitleContainer } from '../../../components/GlobalStyles/GlobalStyles.elements';

import {STitle, 
        ServicesContainer, 
        ServiceItem, 
        PServices, 
        ServiceDescription, 
        CategoryCard } 
from './allServices.elements';

import { servicesData } from '../ServicesData';



const AllServices: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null); // Deseleccionar si ya está seleccionada
        } else {
            setSelectedCategory(category); // Seleccionar la categoría clickeada
        }
    };

    return (
        <div>
            <STitleContainer>
                <STitle>All Our Services</STitle>
            </STitleContainer>
            <div>
                {/* Mapear cada categoría */}
                {Object.keys(servicesData).map((category) => (
                    <CategoryCard key={category} onClick={() => handleCategoryClick(category)}>
                        <h2>{category}</h2>
                        {selectedCategory === category && (

                            <ServicesContainer>
                                {/* Mostrar servicios de la categoría seleccionada */}
                                {servicesData[category].map((service) => (

                                    <ServiceItem key={service.id} onClick={(e) => e.stopPropagation()}>
                                        <PServices>{service.title}</PServices>
                                        <ServiceDescription>{service.description}</ServiceDescription>
                                    </ServiceItem>

                                ))}
                            </ServicesContainer>

                        )}
                    </CategoryCard>
                ))}
            </div>
        </div>
    );
};

export default AllServices;
