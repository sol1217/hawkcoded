import { H2WithBorders } from "/src/components/GlobalStyles/GlobalStyles.elements";
import { ProductsContainer, CardContainer, ImageContainer, CardTexts, CardTitle, CardDescription } from "./Packs.elements";

//imagenes
import softwarePack from "/src/assets/png/software-pack.png";
import hardwarePack from "/src/assets/png/hardware-pack.png";
import cyberSecurityPack from "/src/assets/png/cybersecurity-pack.png";
import consultingPack from "/src/assets/png/consulting-pack.png";

interface Pack {
    title: string;
    description: string;
    img: string;
  }
  
  const packs: Pack[] = [
    {
        title: 'Software Package',
        description: 'Digital Entrepreneur, Growing SME, Innovative Company, Digital Transformation',
        img: softwarePack
      },
      {
        title: 'Hardware Package',
        description: 'Technological Start-Up with Consulting, Preventive Maintenance Plus with Consulting, Update and Optimization with Consulting, Complete Infrastructure with Consulting, Technological Transformation with Strategic Consulting',
        img: hardwarePack
      },
      {
        title: 'Cybersecurity Package',
        description: 'Essential Cybersecurity, Advanced Cybersecurity, Total Cybersecurity',
        img: cyberSecurityPack
      },
      {
        title: 'Consulting Package',
        description: 'Strategic Boost, Operational Excellence, Digital Strength, Exceptional Project Management',
        img: consultingPack
      }
  ];


export default function Packs() {
  return (
    <>
      <H2WithBorders>
        Our Packs
      </H2WithBorders>

      <ProductsContainer>
        {packs.map((pack, index) => (
          <CardContainer key={index}>
            <ImageContainer>
              <img src={pack.img} alt="product_img" />
            </ImageContainer>
            <CardTexts data-aos="flip-up">
              <CardTitle>{pack.title}</CardTitle>
              <CardDescription>{pack.description}</CardDescription>
            </CardTexts>
          </CardContainer>
        ))}
      </ProductsContainer>
    </>
  )
}
