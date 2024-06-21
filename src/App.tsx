import "./App.css";
import { Home } from "./pages/Home/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services/Services.tsx";


function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
