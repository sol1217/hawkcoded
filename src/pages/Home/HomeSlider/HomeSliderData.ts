import image1 from './../../../assets/bg-images/software.webp';
import image2 from './../../../assets/bg-images/hawkcoded.webp';
import image3 from './../../../assets/bg-images/computer.webp';
import image4 from './../../../assets/bg-images/llavero.webp';
import image5 from './../../../assets/bg-images/tshirt.webp';

export interface SlideData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}


const slides: SlideData[] = [
  {
      id: 1,
      imageUrl: image1,
      title: 'Productos de excelente calidad',
      description: 'Nuestro principal objetivo es proporcionar productos cuya calidad esté por encima de la excelencia.',
  },
  {
      id: 2,
      imageUrl: image2,
      title: 'Desarrollo de aplicaciones',
      description: 'Cada aplicación o sistema creado por @hawkcoded involucra un profundo plan y aseguramiento de calidad.',
  },
  {
      id: 3,
      imageUrl: image3,
      title: 'Haz crecer tu negocio',
      description: 'Nuestra experiencia en el ámbito digital y el marketing pueden llevar tu negocio al siguiente nivel.',
  },
  {
      id: 4,
      imageUrl: image4,
      title: 'Diseño UX/UI innovador',
      description: 'Creamos interfaces de usuario atractivas y fáciles de usar que mejoran la experiencia del usuario.',
  },
  {
      id: 5,
      imageUrl: image5,
      title: 'Soluciones integrales',
      description: 'Ofrecemos una amplia gama de servicios tecnológicos para cubrir todas tus necesidades.',
  },
];

export default slides;