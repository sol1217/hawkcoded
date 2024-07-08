interface Enlace {
    id: number;
    enlace: string;
    href: string;
  }
  
  export const enlaces: Enlace[] = [
    { id: 1, enlace: 'Inicio', href: '/' },
    { id: 2, enlace: 'Servicios', href: '/services' },
    { id: 3, enlace: 'Productos', href: '/products' },
    { id: 4, enlace: 'Sobre Nosotros', href: '/about' },
  ];
  
  interface AdditionalLinks {
    [key: string]: { id: string; label: string }[];
  }
  
  export const additionalLinks: AdditionalLinks = {
    '/services': [
      { id: '#testimoniales', label: 'Testimoniales' },
      { id: '/all', label: 'Categorías' },
    ],
    '/products': [
      { id: '#nuevos', label: 'Los Más Populares' },
      { id: 'populares', label: 'Populares' },
    ],
  };
  