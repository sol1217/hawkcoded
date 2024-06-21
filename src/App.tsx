import "./App.css";
import { Home } from "./pages/Home/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services/Services.tsx";
import { Header } from "./components/layout/Header/Header.tsx";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
