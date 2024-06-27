
import { PTitleContainer, H2Title } from "/src/components/GlobalStyles/GlobalStyles.elements";
import { ProductsContainer, CardContainer, ImageContainer, CardTexts, CardTitle, CardDescription } from "./Products.elements";

import serverImage from '/src/assets/png/servidor.png';
import workStationImage from '/src/assets/png/workstation.png';
import networkDevice from '/src/assets/png/wireless-router.png';


//Paquetes
import Packs from './../Packs/Packs';
//otros Productos
import OtherProducts from './../OtherProducts/OtherProducts';

interface Producto {
  title: string;
  description: string;
  img: string;
}

const productos: Producto[] = [
  {
    title: 'Protect Your IT Environments With Powerful Cloud Security Solutions and Always on Support',
    description: 'Our certified cloud security experts help protect your environments across hyperscale public and private clouds so you can run your business with confidence.',
    img: serverImage
  },

  {
    title: 'Enhance Your Workstation Performance with Cutting-Edge Technology',
    description: 'Our advanced workstation solutions are designed to optimize productivity and efficiency, ensuring that your team has the best tools available to perform at their peak.',
    img: workStationImage
  },

  {
    title: 'Optimize Network Performance with Reliable Devices',
    description: 'Our network devices offer robust performance and scalability, ensuring your infrastructure stays connected and secure in today\'s demanding environments.',
    img: networkDevice
  }
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
              <img src={producto.img} alt="product_img" loading="lazy"/>
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
