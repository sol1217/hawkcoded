import { HomeContainer } from "./Home.elements";
import HomeSlider from "./HomeSlider/HomeSlider.tsx";
import { BenefitsElement } from "./Benefits/BenefitsElement";
import ServiceContact from "./../../components/layout/ServiceContact/ServiceContact.tsx";
import { Information } from "./Information/Information.tsx";
import OutstandingProducts from "./OutstandingProducts/OutstandingProducts.tsx";

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
