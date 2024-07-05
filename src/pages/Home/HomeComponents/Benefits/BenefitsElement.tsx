import { IoGitCompareOutline } from "react-icons/io5";
import { VscCompassActive } from "react-icons/vsc";
import { BsChatText } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { RiFileCodeLine } from "react-icons/ri";
import { PiEqualizerBold } from "react-icons/pi";
import {
  BenefitsContainer,
  DescriptionWrap,
  IconsCompany,
  InformationBussines,
  TitleBenefits,
  TitleInformation,
} from "./Benefits.elements";
import { IconType } from "react-icons";

const iconComponents: Record<string, IconType> = {
  IoGitCompareOutline: IoGitCompareOutline,
  VscCompassActive: VscCompassActive,
  BsChatText: BsChatText,
  GrTechnology: GrTechnology,
  RiFileCodeLine: RiFileCodeLine,
  PiEqualizerBold: PiEqualizerBold,
};

export function BenefitsElement() {
  const businesses = [
    {
        title: "Adaptación a Necesidades Específicas",
        icon: "IoGitCompareOutline" as keyof typeof iconComponents,
        description: "Diseñamos y desarrollamos soluciones a medida que se ajustan perfectamente a las necesidades únicas de tu negocio, maximizando el retorno de inversión.",
    },
    {
        title: "Soporte Técnico Continuo",
        icon: "VscCompassActive" as keyof typeof iconComponents,
        description: "Ofrecemos soporte técnico constante para resolver cualquier problema que pueda surgir, asegurando la satisfacción completa de nuestros clientes.",
    },
    {
        title: "Comunicación Transparente",
        icon: "BsChatText" as keyof typeof iconComponents,
        description: "Mantenemos una comunicación abierta y fluida durante todo el proceso de desarrollo, comprometiéndonos a cumplir con los plazos establecidos.",
    },
    {
        title: "Soluciones Rentables y Entrega Puntual",
        icon: "RiFileCodeLine" as keyof typeof iconComponents,
        description: "Ofrecemos soluciones efectivas y eficientes que maximizan el retorno de inversión y nos comprometemos a entregar puntualmente.",
    },
];

  return (
    <div>
      <TitleBenefits>
        Beneficios de trabajar con nuestra empresa de <span>software</span>
      </TitleBenefits>

      <BenefitsContainer>
        {businesses.map((business, index) => (
          <InformationBussines key={index} data-aos="flip-up">

            <DescriptionWrap>
              <TitleInformation>{business.title}</TitleInformation>
              <p>{business.description}</p>
            </DescriptionWrap>


            <IconsCompany as={iconComponents[business.icon]} fontSize={40} />

          </InformationBussines>
          
        ))}
      </BenefitsContainer>
    </div>
  );
}