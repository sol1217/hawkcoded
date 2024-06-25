import "./App.css";
import { Home } from "./pages/Home/Home.tsx";
import { Header } from "./components/layout/Header/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//services
import Services from "./pages/Services/Services.tsx";
import AllServices from "./pages/Services/AllServices/AllServices.tsx";
import Footer from "../src/components/layout/Footer/Footer.tsx";
import Contact from "./pages/Contact/Contact.tsx";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/all" element={<AllServices />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
