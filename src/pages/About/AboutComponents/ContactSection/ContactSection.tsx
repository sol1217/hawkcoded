import React from 'react';
import { ContactContainer, ContactInformarionWrap, TitleContact, InformationContact, ButtonContact, ImageContact } from './ContactSection.elements';
import imgRotative from "./../../../../assets/icons/engine.svg";

const ContactSection: React.FC = () => (
  <ContactContainer>
    <ContactInformarionWrap>
      <TitleContact>Contactanos para <span className="text-with-drop-shadow">más información</span>.</TitleContact>
      <InformationContact>
        Prosperamos con la creatividad y el ingenio, buscando constantemente
        nuevas formas de resolver problemas. <span style={{fontWeight: '700'}}>La excelencia está en el núcleo
        de todo lo que hacemos.</span> Nos comprometemos a entregar productos y
        servicios de primera calidad.
        <br />
        Nuestros clientes son nuestros socios.
      </InformationContact>
      <ButtonContact href="/contact"><span className="text-with-drop-shadow">Contacto</span></ButtonContact>
    </ContactInformarionWrap>
    
    <ImageContact loading='lazy' alt='gear' src={imgRotative} />
  </ContactContainer>
);

export default ContactSection;
