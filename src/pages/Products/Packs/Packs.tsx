// import { H2WithBorders } from "/src/components/GlobalStyles/GlobalStyles.elements";
// import {
//   ProductsContainer,
//   CardContainer,
//   ImageContainer,
//   CardTexts,
//   CardTitle,
//   CardDescription,
// } from "./Packs.elements";

// //imagenes
// import softwarePack from "/src/assets/png/software-pack.png";
// import hardwarePack from "/src/assets/png/hardware-pack.png";
// import cyberSecurityPack from "/src/assets/png/cybersecurity-pack.png";
// import consultingPack from "/src/assets/png/consulting-pack.png";

// interface Pack {
//   title: string;
//   description: string;
//   img: string;
// }

// const packs: Pack[] = [
//   {
//     title: "DJI Mini 3 Basico -N1",
//     description:
//       "DJI Mini 3 es un dron con cámara compacto y ligero, listo para la aventura.  Impresionante vídeo 4K HDR para capturar colores y detalles auténticos y divertidas funciones, como Grabación vertical, para obtener fantásticas tomas para las redes sociales.",
//     img: softwarePack,
//   },
//   {
//     title: "DJI Mini 3 Fly More Combo plus RC",
//     description:
//       "Puesta en Marcha Tecnológica con Consultoría, Mantenimiento Preventivo Plus con Consultoría, Actualización y Optimización con Consultoría, Infraestructura Completa con Consultoría, Transformación Tecnológica con Consultoría Estratégica.",
//     img: hardwarePack,
//   },
//   {
//     title: "DJI MAVIC 3 PRO",
//     description:
//       "La serie DJI Mavic 3 presenta un rendimiento de imágenes de siguiente nivel. El sistema de triple cámara del Mavic 3 Pro marca el comienzo de una nueva era de drones con cámara al albergar tres sensores y lentes con diferentes distancias focales. Equipado con una cámara Hasselblad y dos telecámaras, Mavic 3 Pro es un dron con triple cámara que abre nuevas perspectivas de disparo.",
//     img: cyberSecurityPack,
//   },
//   {
//     title: "DJI Mini 2 SE",
//     description:
//       "¿Qué tan liviano es el DJI Mini 2 SE? Con menos de 249 g, pesa aproximadamente lo mismo que una manzana y cabe en la palma de la mano. Compacto y conveniente, Mini 2 SE es su compañero de viaje ideal y transforma la forma en que captura sus momentos favoritos.",
//     img: consultingPack,
//   },
// ];

// export default function Packs() {
//   return (
//     <>
//       <H2WithBorders>Our Packs</H2WithBorders>

//       <ProductsContainer>
//         {packs.map((pack, index) => (
//           <CardContainer key={index}>
//             <ImageContainer>
//               <img src={pack.img} alt="product_img" loading="lazy" />
//             </ImageContainer>
//             <CardTexts data-aos="flip-up">
//               <CardTitle>{pack.title}</CardTitle>
//               <CardDescription>{pack.description}</CardDescription>
//             </CardTexts>
//           </CardContainer>
//         ))}
//       </ProductsContainer>
//     </>
//   );
// }
