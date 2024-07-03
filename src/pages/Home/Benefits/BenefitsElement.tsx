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
      description:
        "Diseñamos y desarrollamos soluciones a medida que se ajustan perfectamente a las necesidades únicas de tu negocio.",
    },
    {
      title: "Soporte Técnico Continuo",
      icon: "VscCompassActive" as keyof typeof iconComponents,
      description:
        "Ofrecemos soporte técnico constante para resolver cualquier problema que pueda surgir.",
    },
    {
      title: "Comunicación Transparente",
      icon: "BsChatText" as keyof typeof iconComponents,
      description:
        "Mantenemos una comunicación abierta y fluida durante todo el proceso de desarrollo.",
    },
    {
      title: "Soluciones Rentables",
      icon: "GrTechnology" as keyof typeof iconComponents,
      description:
        "Ofrecemos soluciones efectivas y eficientes que maximizan el retorno de inversión.",
    },
    {
      title: "Entrega Puntual",
      icon: "RiFileCodeLine" as keyof typeof iconComponents,
      description:
        "Nos comprometemos a cumplir con los plazos establecidos, asegurando que tu proyecto esté listo cuando lo necesitas.",
    },
    {
      title: "Satisfacción del Cliente",
      icon: "PiEqualizerBold" as keyof typeof iconComponents,
      description:
        "Nuestro objetivo principal es la satisfacción completa de nuestros clientes, y trabajamos arduamente para lograrla.",
    },
  ];

  return (
    <div>
      <TitleBenefits>
        Beneficios de trabajar con nuestra empresa de <b>software.</b>
      </TitleBenefits>

      <BenefitsContainer>
        {businesses.map((business, index) => (
          <InformationBussines key={index} data-aos="flip-up">
            <IconsCompany as={iconComponents[business.icon]} fontSize={40} />

            <DescriptionWrap>
              <TitleInformation>{business.title}</TitleInformation>
              <h3>{business.description}</h3>
            </DescriptionWrap>
          </InformationBussines>
        ))}
      </BenefitsContainer>
    </div>
  );
}
