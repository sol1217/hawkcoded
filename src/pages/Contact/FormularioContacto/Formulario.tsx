import {
    ButtonSubmit,
    FormTitle,
    FormWrap,
    InputDesign,
    TextareaDesign,
} from "./Fomulario.elements";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Formulario() {
 
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');
  const [error, setError] = useState<string>('');

  const SERVICE_KEY = import.meta.env.VITE_CONTACT_SERVICE_ID;
  const TMPLT_KEY = import.meta.env.VITE_CONTACT_TEMPLATE_ID;
  const USER_KEY = import.meta.env.VITE_CONTACT_USER_ID;


  useEffect(()=> {
    if(error) {
        const timer = setTimeout(() => {
            setError('');
        }, 3000);

        return () => clearTimeout(timer);
    }
  }, [error]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email || !emailRegex.test(email)) {
        setError('Email incorrecto o no válido.');
        return;
    } 

    emailjs.send(
        SERVICE_KEY,
        TMPLT_KEY, {
            nombre,
            email,
            mensaje,
        },
        USER_KEY
    )
    .then(()=> {
        alert('Correo Enviado Correctamente.');
        setNombre('');
        setEmail('');
        setMensaje('');
    })
    .catch((error) => {
        console.log(error);
    })
  }

  
  return (
    <FormWrap onSubmit={handleSubmit} data-aos="fade-left">
        <FormTitle>Formulario de Contacto</FormTitle>
        {error && (
            //crear un elemento de alerta, por ahora es un <p>:
            <p>{error}</p> 
        )}
        <InputDesign placeholder="Ingresa Tu Nombre" onChange={(e) => setNombre(e.target.value)}/>
        <InputDesign placeholder="Ingresa Tu Email" onChange={(e) => setEmail(e.target.value)}/>
        <TextareaDesign placeholder="Escribe Tu Mensaje" onChange={(e) => setMensaje(e.target.value)}/>
        <ButtonSubmit type="submit" placeholder="Enviar" />
  </FormWrap>
  )
}
