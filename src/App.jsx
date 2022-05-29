import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Buttonbackhome from "./components/Buttonbackhome";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Fleur from "./pages/Fleur";
import Lumiere from "./pages/Lumiere";
import Inoubliable from "./pages/Inoubliable";
import Vents from "./pages/Vents";
import Page404 from "./pages/Page404";
import Mentions from "./pages/Mentionslegales";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Apropos" element={<Apropos/>} />
            <Route path="/Fleurdelage" element={<Fleur/>} />
            <Route path="/Dangersdelalumiere" element={<Lumiere/>} />
            <Route path="/Inoubliablesymphonie" element={<Inoubliable/>} />
            <Route path="/Ventsdelexistence" element={<Vents/>} />
            <Route path="/Mentionslegales" element={<Mentions/>} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      <Buttonbackhome/>
      <Footer />
    </div>
  );
}

export default App;

