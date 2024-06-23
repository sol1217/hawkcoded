import { ServiceContactContainer, ServiceButtonContact, SeeMoreContainer } from "./ServiceContact.elements"

interface ContactProps {
  firstAText: string,
  firstAHref: string,

  secondAText: string,
  secondAHref: string
}

const ServiceContact: React.FC<ContactProps> = ({firstAText, firstAHref, secondAText, secondAHref}) => {
  return ( 
    <ServiceContactContainer>
        <ServiceButtonContact href={firstAHref}>{firstAText}</ServiceButtonContact>
        <SeeMoreContainer href={secondAHref}>
            {secondAText}
            <img src="/src/assets/icons/arrow-right-solid.svg" loading="lazy" alt="see_more" />
        </SeeMoreContainer>
    </ServiceContactContainer>
  )
}


export default ServiceContact;
