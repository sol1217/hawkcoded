import { H2WithBorders } from "/src/components/GlobalStyles/GlobalStyles.elements";
import { TitleAndImage, ProductsContainer, CardContainer, ImageContainer, CardTexts, CardTitle, CardDescription } from "./OtherProducts.elements";

//imagenes
import droneImageTitle from "/src/assets/png/drone1.png";
import droneProduct from "/src/assets/png/drone2.png";
import cameraProduct from "/src/assets/png/camera.png";
import stabilizerProduct from "/src/assets/png/estabilizador.png";
import accesoriesProduct from "/src/assets/png/accesories.png";

interface Producto {
  title: string;
  description: string;
  img: string;
}

const productos: Producto[] = [
  {
    title: 'Cameras Osmo Action',
    description: 'DJI Osmo Action cameras offer 4K video recording, RockSteady stabilization, and dual screens to capture every moment with clarity and ease.',
    img: cameraProduct
  },

  {
    title: 'FPV Drones',
    description: 'DJI FPV drones provide an immersive flight experience, with high-quality real-time transmission and precise controls for pilots of all skill levels.',
    img: droneProduct
  },

  {
    title: 'Professional Video Stabilizers',
    description: 'DJI professional video stabilizers, including the Ronin series, offer advanced stabilization technology for filmmakers and video professionals to capture smooth and cinematic shots.',
    img: stabilizerProduct 
  },

  {
    title: 'All Kinds of Accessories',
    description: 'DJI offers a wide range of accessories, including spare parts, batteries, and carrying cases, to enhance and support your drone and camera equipment.',
    img: accesoriesProduct 
  }
];


export default function OtherProducts() {
  return (
    <>
      <TitleAndImage>
        <div data-aos="fade-right">
          <img src={droneImageTitle} alt="drone_image" />
        </div>
        <section data-aos="fade-left">
          <H2WithBorders>
              Check Out Our Other Products
              <a href="https://djistore.cr/?utm_source=google&utm_medium=cpc&utm_campaign=A20011_GOOGLE_SEM_GENERAL_Q2_2024&gad_source=1&gclid=CjwKCAjwps-zBhAiEiwALwsVYfO-AH1p7p8egygqK3L8MiMbgvEkrRegegdcx1xQgN0FAlEPpJDaNxoCpOAQAvD_BwE"
              target="_blank">By DJI Store</a>
          </H2WithBorders>
        </section>
      </TitleAndImage>

      <ProductsContainer>
        {productos.map((producto, index) => (
          <CardContainer key={index}>
            <ImageContainer>
              <img src={producto.img} alt="product_img"  loading="lazy"/>
            </ImageContainer>
            <CardTexts data-aos="flip-up">
              <CardTitle>{producto.title}</CardTitle>
              <CardDescription>{producto.description}</CardDescription>
            </CardTexts>
          </CardContainer>
        ))}
      </ProductsContainer>

    </>
  )
}
