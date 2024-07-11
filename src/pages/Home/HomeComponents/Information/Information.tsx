import {
  BusinessWrap,
  BussinesText,
  ImgAndTitleBox,
  InformationWrap,
  ItemWrap,
  LiTag,
  TextColor,
} from "../Information/Information.elements.tsx";
import { items } from "./Approaches.ts";

export function Information() {
  return (
    <BusinessWrap>
      <ul>
        <LiTag className="text-with-drop-shadow">Nuestro Enfoque</LiTag>
      </ul>

      <BussinesText>
        Desarrollo de <TextColor className="text-with-drop-shadow">Software Personalizado</TextColor>
      </BussinesText>
      <InformationWrap>
        Ofrecemos asesoramiento estratégico en tecnología para ayudar a las
        empresas a definir y ejecutar sus proyectos tecnológicos, asegurando la
        alineación con sus objetivos de negocio.
      </InformationWrap>
      <ItemWrap>
        {items.map((items, index) => (
          <ImgAndTitleBox key={index}>
            <img src={items.img} alt="aptitudes" />
            <p className="text-with-drop-shadow">{items.title}</p>
          </ImgAndTitleBox>
        ))}
      </ItemWrap>
    </BusinessWrap>
  );
}
