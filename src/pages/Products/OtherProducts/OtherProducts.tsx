// import { H2WithBorders } from "/src/components/GlobalStyles/GlobalStyles.elements";
// import {
//   TitleAndImage,
//   ProductsContainer,
//   CardContainer,
//   ImageContainer,
//   CardTexts,
//   CardTitle,
//   CardDescription,
// } from "./OtherProducts.elements";
// import ServiceContact from "/src/components/layout/ServiceContact/ServiceContact";

// //imagenes
// import droneImageTitle from "/src/assets/png/drone1.png";
// import laptopProduct from "/src/assets/png/laptop-min.png";
// import djiDroneProduct from "/src/assets/png/drone2.png";
// import wingtraDroneProduct from "/src/assets/png/wingtra-drone-min.png";
// import accesoriesProduct from "/src/assets/png/accesories.png";

// interface Producto {
//   title: string;
//   description: string;
//   img: string;
// }

// const productos: Producto[] = [
//   {
//     title: "DJI Inspire 3",
//     description:
//       "DJI Inspire 3 es un dron con cámara de cine integrada con sistema de imágenes 8K de fotograma completo, configuraciones duales Tilt Boost, Pan 360° y con control dual.",
//     img: laptopProduct,
//   },

//   {
//     title: "DJI FPV ",
//     description:
//       "Los drones DJI FPV brindan una experiencia de vuelo inmersiva, con transmisión en tiempo real de alta calidad y controles precisos para pilotos de todos los niveles.",
//     img: djiDroneProduct,
//   },

//   {
//     title: "Wingtra Mapping Drone",
//     description:
//       "The WingtraOne is an easy-to-use mapping drone that delivers consistent, high-quality topographic data faster and more cost-effectively than traditional surveying tools. Ideal for professionals seeking efficient and accurate mapping solutions.",
//     img: wingtraDroneProduct,
//   },

//   {
//     title: "All Kinds of Accessories",
//     description:
//       "DJI offers a wide range of accessories, including spare parts, batteries, and carrying cases, to enhance and support your drone and camera equipment.",
//     img: accesoriesProduct,
//   },
// ];

// export default function OtherProducts() {
//   return (
//     <>
//       <TitleAndImage>
//         <div data-aos="fade-right">
//           <img src={droneImageTitle} alt="drone_image" />
//         </div>
//         <section data-aos="fade-left">
//           <H2WithBorders>
//             Check Out Our Other Products
//             <a href="/shop" target="_blank">
//               By Our Store
//             </a>
//           </H2WithBorders>
//         </section>
//       </TitleAndImage>

//       <ProductsContainer>
//         {productos.map((producto, index) => (
//           <CardContainer key={index}>
//             <ImageContainer>
//               <img src={producto.img} alt="product_img" loading="lazy" />
//             </ImageContainer>
//             <CardTexts data-aos="flip-up">
//               <CardTitle>{producto.title}</CardTitle>
//               <CardDescription>{producto.description}</CardDescription>
//             </CardTexts>
//           </CardContainer>
//         ))}
//       </ProductsContainer>

//       <ServiceContact
//         firstAText="You have doubts? Contact Us"
//         firstAHref="/contact"
//         secondAText="Buy"
//         secondAHref="/shop"
//       ></ServiceContact>
//     </>
//   );
// }
