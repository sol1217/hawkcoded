import djiMatrizRtk from "../../../assets/png/Matrice-300-RTK.png";
import djiSerie30 from "../../../assets/png/Matrice-30-Series.png";
import dji300 from "../../../assets/png/Matrice-300-RTK.png";
import djiMavic3 from "../../../assets/png/mavic-3-enterp.png";

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


export default productos;
  