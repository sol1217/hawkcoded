import React, { useState } from 'react';
import { STitleContainer, H2Title } from '../../../components/GlobalStyles/GlobalStyles.elements';
import { ServicesContainer, ServiceItem, PServices, ServiceDescription, CategoryCard } from './allServices.elements';
import ServiceContact from '../../../components/layout/ServiceContact/ServiceContact';
import { servicesData } from '../ServicesData';

// Define el tipo para los datos de servicios
interface Service {
  id: number;
  title: string;
  description: string;
}

interface ServicesData {
  [category: string]: Service[];
}

const typedServicesData: ServicesData = servicesData;

const AllServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Estado para la categoría seleccionada

  const handleCategoryClick = (category: string) => {
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
        {Object.keys(typedServicesData).map((category) => (
          <CategoryCard key={category} onClick={() => handleCategoryClick(category)}>
            <h2>{category}</h2>
            {selectedCategory === category && (
              <ServicesContainer>
                {/* Mostrar servicios de la categoría seleccionada */}
                {typedServicesData[category].map((service) => (
                  <ServiceItem
                    data-aos="flip-down"
                    data-aos-duration="500"
                    key={service.id}
                    onClick={(e) => e.stopPropagation()}
                  >
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
        firstAText='Tienes Dudas? Cuéntanos'
        firstAHref='/contact'
        secondAText='Productos'
        secondAHref='/products'
      />
    </div>
  );
};

export default AllServices;
