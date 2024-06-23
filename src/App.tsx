import "./App.css";
import { Home } from "./pages/Home/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//services
import Services from "./pages/Services/Services.tsx";
import AllServices from "./pages/Services/AllServices/AllServices.tsx";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services/all" element={<AllServices />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
