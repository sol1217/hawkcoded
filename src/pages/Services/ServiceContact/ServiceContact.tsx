import { ServiceContactContainer, ServiceButtonContact, SeeMoreContainer } from "../Services.elements"


export default function ServiceContact() {
  return ( 
    <ServiceContactContainer>
        <ServiceButtonContact>Tell us about yout project</ServiceButtonContact>
        <SeeMoreContainer href="#">
            See More
            <img src="./src/assets/icons/arrow-right-solid.svg" loading="lazy" alt="see_more" />
        </SeeMoreContainer>
    </ServiceContactContainer>
  )
}
