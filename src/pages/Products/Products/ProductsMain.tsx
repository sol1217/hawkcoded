import {
  ProductsContainer,
  Products,
  CardContainer,
  ImageContainer,
  CardTexts,
  CardTitle,
  CardDescription,
} from "./Products.elements";
import productos from "./products.data.ts";
import logo  from "./../../../assets/icons/logo-white-bg.svg"
import ServiceContact from "./../../../components/layout/ServiceContact/ServiceContact.tsx";
import {
  H2Title, ImageLogo,
  PTitleContainer,
} from "./../../../components/GlobalStyles/GlobalStyles.elements.ts";
import Slider from "./../../../components/layout/Slider/SliderPartners.tsx";
import useScrollToHash from "./../../../helpers/useScrollToHash.tsx";



const ProductsMain: React.FC = () => {
  useScrollToHash();

  return (
    <ProductsContainer>
      <PTitleContainer>
        <H2Title>Estos Son Nuestros Productos</H2Title>
        <ImageLogo src={logo} alt="logo"/>
      </PTitleContainer>
      <div  id="nuevos"></div>

      <Products>
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
      </Products>

      <ServiceContact
        firstAText="Me Interesa Un Producto"
        firstAHref="/contact"
        secondAText="Ver Todos"
        secondAHref="/ecommerce"
      ></ServiceContact>


      <Slider />
    </ProductsContainer>
  );
};

export default ProductsMain;
