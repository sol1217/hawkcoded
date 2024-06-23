import { ServiceContactContainer, ServiceButtonContact, SeeMoreContainer } from "./ServiceContact.elements"

const ServiceContact: React.FC = () => {
  return ( 
    <ServiceContactContainer>
        <ServiceButtonContact>Tell us about yout project</ServiceButtonContact>
        <SeeMoreContainer href="/services/all">
            See More
            <img src="./src/assets/icons/arrow-right-solid.svg" loading="lazy" alt="see_more" />
        </SeeMoreContainer>
    </ServiceContactContainer>
  )
}


export default ServiceContact;
