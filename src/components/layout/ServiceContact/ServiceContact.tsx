import { ServiceContactContainer, ServiceButtonContact, SeeMoreContainer } from "./ServiceContact.elements"
import { FaArrowRight } from "react-icons/fa";

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
            <FaArrowRight fill="#fff"></FaArrowRight>
        </SeeMoreContainer>
    </ServiceContactContainer>
  )
}


export default ServiceContact;
