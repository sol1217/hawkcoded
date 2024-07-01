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
            <ViewProduct key={index}>
              <NameProduct>{product.name}</NameProduct>
              <ImgProduct src={product.imgSrc} alt={product.name} />
              <DescriptionProduct>{product.description}</DescriptionProduct>
              <RouteProduct>
                <h3>Visualizar en apartado de productos</h3>
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
