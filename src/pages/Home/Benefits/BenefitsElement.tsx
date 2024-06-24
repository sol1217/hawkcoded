import { IoGitCompareOutline } from "react-icons/io5";
import { VscCompassActive } from "react-icons/vsc";
import { BsChatText } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { RiFileCodeLine } from "react-icons/ri";
import { PiEqualizerBold } from "react-icons/pi";
import {
  BenefitsContainer,
  DescriptionWrap,
  IconsCompanny,
  InformationBussines,
  TitleBenefits,
  TitleInformation,
} from "./Benefits.elements";

export function BenefitsElement() {
  const businesses = [
    {
      title: "Adaptación a Necesidades Específicas",
      img: <IoGitCompareOutline fontSize={40} />,
      description:
        "Diseñamos y desarrollamos soluciones a medida que se ajustan perfectamente a las necesidades únicas de tu negocio.",
    },
    {
      title: "Soporte Técnico Continuo",
      img: <VscCompassActive fontSize={35} />,
      description:
        "Ofrecemos soporte técnico constante para resolver cualquier problema que pueda surgir.",
    },
    {
      title: "Comunicación Transparente",
      img: <BsChatText fontSize={35} />,
      description:
        "Mantenemos una comunicación abierta y fluida durante todo el proceso de desarrollo.",
    },
    {
      title: "Soluciones Rentables",
      img: <GrTechnology fontSize={40} />,
      description:
        "Ofrecemos soluciones efectivas y eficientes que maximizan el retorno de inversión.",
    },
    {
      title: "Entrega Puntual",
      img: <RiFileCodeLine fontSize={40} />,
      description:
        "Nos comprometemos a cumplir con los plazos establecidos, asegurando que tu proyecto esté listo cuando lo necesitas.",
    },
    {
      title: "Satisfacción del Cliente",
      img: <PiEqualizerBold fontSize={40} />,
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
          <InformationBussines key={index}>
            <IconsCompanny>{business.img}</IconsCompanny>

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
