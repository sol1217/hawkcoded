import React, { useState } from 'react';
import { STitleContainer, H2Title } from '/src/components/GlobalStyles/GlobalStyles.elements';
import {ServicesContainer, 
        ServiceItem, 
        PServices, 
        ServiceDescription, 
        CategoryCard } 
from './allServices.elements';

import ServiceContact from '../../../components/layout/ContactComponent/ServiceContact';

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
                <H2Title>All Our Services</H2Title>
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

                                    <ServiceItem data-aos="flip-down" data-aos-duration="500" key={service.id} onClick={(e) => e.stopPropagation()}>
                                        <PServices>{service.title}</PServices>
                                        <ServiceDescription>{service.description}</ServiceDescription>
                                    </ServiceItem>

                                ))}
                            </ServicesContainer>

                        )}
                    </CategoryCard>
                ))}
            </div>

            <ServiceContact 
          firstAText='You have doubts? Contact Us'
          firstAHref='/contact'
          secondAText='Products'
          secondAHref='/products'
      />
        </div>
    );
};

export default AllServices;
