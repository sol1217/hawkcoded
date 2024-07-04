import { HomeContainer } from "./Home.elements";
import HomeSlider from "./HomeSlider/HomeSlider.tsx";
import { BenefitsElement } from "./HomeComponents/Benefits/BenefitsElement.tsx";
import ServiceContact from "./../../components/layout/ServiceContact/ServiceContact.tsx";
import { Information } from "./HomeComponents/Information/Information.tsx";
import OutstandingProducts from "./HomeComponents/OutstandingProducts/OutstandingProducts.tsx";

import slides from "./HomeSlider/HomeSliderData.ts";

export function Home() {
  return (
    <HomeContainer>
      <HomeSlider slides={slides}/>
      <BenefitsElement />
      <ServiceContact
        firstAText="Cuéntanos Sobre Tu Idea"
        firstAHref="/contacto"
        secondAText="Servicios"
        secondAHref="/services"
      />
      <Information />
      <OutstandingProducts />
    </HomeContainer>
  );
}
