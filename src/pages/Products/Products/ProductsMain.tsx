import {
  PTitleContainer,
  H2Title,
} from "/src/components/GlobalStyles/GlobalStyles.elements";
import {
  ProductsContainer,
  CardContainer,
  ImageContainer,
  CardTexts,
  CardTitle,
  CardDescription,
} from "./Products.elements";
import djiAir from "../../../assets/png/dji-air.png";
import djiMavic from "../../../assets/png/dji-mavic-3.png";

import serverImage from "/src/assets/png/servidor.png";
import workStationImage from "/src/assets/png/workstation.png";
import networkDevice from "/src/assets/png/wireless-router.png";

//Paquetes
import Packs from "./../Packs/Packs";
//otros Productos
import OtherProducts from "./../OtherProducts/OtherProducts";

interface Producto {
  title: string;
  description: string;
  img: string;
}

const productos: Producto[] = [
  {
    title: "DJI MAVIC 3",
    description:
      "Con un potente rendimiento de vuelo y una cámara Hasselblad, Mavic 3 Classic ofrece la esencia absoluta de imágenes icónicas. Llévalo a cualquier aventura para crear un trabajo inolvidable.",
    img: djiMavic,
  },

  {
    title: "DJI Air 3",
    description:
      "Rendimiento complementario de la cámara Tiempo máximo de vuelo de 46 minutos, fotos de cámara dual de 48MP, videos HDR de doble cámara de 4K/60fps.Detección de obstáculos omnidireccionales, transmisión de video HD 04.",
    img: djiAir,
  },

  {
    title: "DJI Mini 4 Pro (DJI RC-2)",
    description:
      "DJI Mini 4 Pro es mini dron de cámara más avanzado hasta la fecha. Integra potentes capacidades de imagen, detección omnidireccional de obstáculos, ActiveTrack 360° con el nuevo modo Trace y transmisión de vídeo FHD de 20 km, lo que trae aún más cosas para amar tanto para profesionales como para principiantes",
    img: networkDevice,
  },
  {
    title: "DJI Avata 2",
    description: "kkk",
    img: networkDevice,
  },
];

const ProductsMain: React.FC = () => {
  return (
    <>
      <PTitleContainer>
        <H2Title>These Are Our Products</H2Title>
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

      {/* Paquetes de software */}
      <Packs></Packs>

      {/* Otros Productos */}
      <OtherProducts></OtherProducts>
    </>
  );
};

export default ProductsMain;
