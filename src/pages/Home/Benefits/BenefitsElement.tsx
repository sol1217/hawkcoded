import { IoGitCompareOutline } from "react-icons/io5";
import { VscCompassActive } from "react-icons/vsc";
import { BsChatText } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { RiFileCodeLine } from "react-icons/ri";
import { PiEqualizerBold } from "react-icons/pi";
import {
  BenefitsContainer,
  BenefitsIcon,
  BenefitsItem,
  PBenefits,
  TitleBenefits,
} from "./Benefits.elements";
import { IconType } from "react-icons";
import React from "react";

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
  ];

  return (
    <div>
      <TitleBenefits>
        Beneficios de trabajar con nuestra empresa de <b>software.</b>
      </TitleBenefits>

      <BenefitsContainer>
        {businesses.map((business, index) => (
          <BenefitsItem data-aos="flip-up" key={index}>
            <PBenefits>{business.title}</PBenefits>
            <p style={{ color: "#000" }}>{business.description}</p>
            <BenefitsIcon src={business.icon} alt="icon" />
          </BenefitsItem>
        ))}
      </BenefitsContainer>
    </div>
  );
}
