import {
  ProductsContainer,
  CardContainer,
  ImageContainer,
  CardTexts,
  CardTitle,
  CardDescription,
} from "./Products.elements";
import djiMatrizRtk from "../../../assets/png/Matrice-300-RTK.png";
import djiSerie30 from "../../../assets/png/Matrice-30-Series.png";
import dji300 from "../../../assets/png/Matrice-300-RTK.png";
import djiMavic3 from "../../../assets/bg-images/DJI-Mavic-3.webp";
import logo  from "../../../assets/png/logo-hawkcoded.png"
import ServiceContact from "../../../components/layout/ServiceContact/ServiceContact.tsx";

import {
  H2Title, ImageLogo,
  PTitleContainer,
} from "../../../components/GlobalStyles/GlobalStyles.elements.ts";
import Slider from "../../../components/layout/Slider/SliderPartners.tsx";
import React from "react";

interface Producto {
  title: string;
  description: string;
  img: string;
}

const productos: Producto[] = [
  {
    title: "Matrice 350 RTK",
    description:
      "El Matrice 350 RTK, una plataforma insignia de drones mejorada, establece un nuevo punto de referencia para la industria. Esta plataforma de drones de próxima generación presenta un sistema de transmisión de video y una experiencia de control completamente nuevos, un sistema de batería más eficiente y características de seguridad más completas.",
    img: djiMatrizRtk,
  },

  {
    title: "Matrice 30 Series",
    description:
      "Integra múltiples sensores de alto rendimiento en un cuerpo ligero y portátil. Equipado con un control remoto diseñado para usuario.El Serie M30 integra cámaras gran angular, con zoom y térmica (solo el M30T) con un telémetro láser. Juntos pueden capturar los datos aéreos que necesites",
    img: djiSerie30,
  },

  {
    title: "Matrice 300 RTK",
    description:
      "El Matrice 300 RTK es la plataforma dron comercial de DJI más reciente, y se inspira en los sistemas de aviónica más modernos.Ofrece un tiempo de vuelo de hasta 55 minutos, una avanzada IA y un sistema de gestión del estado del VANT.",
    img: dji300,
  },
  {
    title: "DJI Mavic 3 Enterprise",
    description:
      "La Serie Mavic 3 Enterprise redefine los estándares de la industria para los drones comerciales pequeños, Drone Mavic 3, control inteligente, estuche rígido transporte, cargador, 1 batería. ",
    img: djiMavic3,
  },
];

const ProductsMain: React.FC = () => {
  return (
    <>
      <PTitleContainer>
        <H2Title>Estos Son Nuestros Productos</H2Title>
        <ImageLogo src={logo}/>
      </PTitleContainer>

      <ProductsContainer>
        {productos.map((producto, index) => (
          <CardContainer key={index}>
            <ImageContainer>
              <img src={producto.img} alt="product_img" loading="lazy" />
            </ImageContainer>
            <CardTexts data-aos="flip-up">
              <CardTitle>{producto.title}</CardTitle>
              <CardDescription>{producto.description}</CardDescription>
            </CardTexts>
          </CardContainer>
        ))}
      </ProductsContainer>

      <ServiceContact
        firstAText="Me Interesa Un Producto"
        firstAHref="/contact"
        secondAText="Ver Todos"
        secondAHref="/shop"
      ></ServiceContact>


      <Slider />
    </>
  );
};

export default ProductsMain;
