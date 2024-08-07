import {
  DescriptionProduct,
  ImgContainer,
  ImgProduct,
  LiTag,
  NameProduct,
  ProductsWrap,
  RouteProduct,
  TextColor,
  TitleProducts,
  ViewProduct,
  ViewProductContainer,
} from "./OutstandingProducts.elements.ts";

import { FaArrowRight } from "react-icons/fa";
import { products } from "./constants.ts";

export default function OutstandingProducts() {
  return (
    <div>
      <ProductsWrap>
        <ul>
          <LiTag className="text-with-drop-shadow">Nuestros Productos</LiTag>
        </ul>

        <TitleProducts>
          Productos <TextColor className="text-with-drop-shadow">Sobresalientes</TextColor> en Nuestro Catálogo
        </TitleProducts>

        <ViewProductContainer>
            {products.map((product, index) => (
              <ViewProduct href="/products" key={index} data-aos="flip-up">
                <NameProduct>{product.name}</NameProduct>
                <ImgContainer>
                  <ImgProduct loading="lazy" src={product.imgSrc} alt={product.name} />
                </ImgContainer>
                <DescriptionProduct>{product.description}</DescriptionProduct>
                <RouteProduct>
                  <a style={{color: "#fff", fontSize: '18px'}} href="/products" target="_blank">Visualizar en apartado de productos</a>
                  <FaArrowRight style={{color: "#fff"}} />
                </RouteProduct>
              </ViewProduct>
            ))}
    </ViewProductContainer>
      </ProductsWrap>
    </div>
  );
}
