import {
  ButtonSubmit,
  ContactContainer,
  ContactForm,
  ContactImg,
  FormWrap,
  ImgContainer,
  InfoContactWrap,
  InfoContainer,
  InformationText,
  InputDesign,
  LogoImg,
  TextareaDesign,
  TextWrap,
  TitleContact,
} from "./Contact.elements.ts";
import simpleLogo from "../../assets/png/simple-logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <ContactContainer>
      <ImgContainer>
        <TextWrap>
          <TitleContact>Contacto</TitleContact>
          <LogoImg src={simpleLogo} />
          <InfoContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu quis ipsum
            suspendisse ultrices gravida. Get in Touch
          </InfoContainer>
        </TextWrap>
      </ImgContainer>
      <ContactForm>
        <InfoContactWrap>
          <h2>Why Work With Us</h2>
          <InformationText>
            iusto odio dignissim qui blandit praesent luptatum zzril delenit.
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu
          </InformationText>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu
          </p>
          <div>
            <FaSquareInstagram fontSize={30} />
            <FaFacebook fontSize={30} />
            <IoLogoWhatsapp fontSize={30} />
            <FaYoutube fontSize={30} />
          </div>
        </InfoContactWrap>
        <FormWrap>
          <InputDesign placeholder="Ingresa tu nombre" />
          <InputDesign placeholder="Ingresa tu Email" />
          <TextareaDesign placeholder="Escribe tu mensaje" />
          <ButtonSubmit type="submit" placeholder="Submit" />
        </FormWrap>
      </ContactForm>
    </ContactContainer>
  );
}
