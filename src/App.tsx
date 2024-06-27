import "./App.css";
import { Home } from "./pages/Home/Home.tsx";
import { Header } from "./components/layout/Header/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//animaciones
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

//services
import Services from "./pages/Services/Services/ServicesMain.tsx";
import AllServices from "./pages/Services/AllServices/AllServices.tsx";
import Footer from "../src/components/layout/Footer/Footer.tsx";
import Contact from "./pages/Contact/Contact.tsx";

//products
import ProductsMain from "./pages/Products/Products/ProductsMain.tsx";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
    });
  }, []);


  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/all" element={<AllServices />} />

          <Route path="/products" element={<ProductsMain />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
