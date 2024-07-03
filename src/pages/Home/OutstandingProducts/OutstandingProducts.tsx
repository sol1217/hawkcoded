import {
  DescriptionProduct,
  ImgProduct,
  LinkProduct,
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
          <LiTag>Nuestros Productos</LiTag>
        </ul>

        <TitleProducts>
          Productos <TextColor>Sobresalientes</TextColor> en Nuestro Catálogo
        </TitleProducts>

        <ViewProductContainer>
            {products.map((product, index) => (
              <ViewProduct href="/products" key={index} data-aos="flip-up">
                <NameProduct>{product.name}</NameProduct>
                <ImgProduct src={product.imgSrc} alt={product.name} />
                <DescriptionProduct>{product.description}</DescriptionProduct>
                <RouteProduct>
                  <a style={{color: "#fff"}} href="/products" target="_blank">Visualizar en apartado de productos</a>
                  <LinkProduct href={product.link}>
                    <FaArrowRight />
                  </LinkProduct>
                </RouteProduct>
              </ViewProduct>
            ))}
    </ViewProductContainer>
      </ProductsWrap>
    </div>
  );
}
