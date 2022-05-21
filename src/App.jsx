import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carrousel from "./components/Carrousel";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Inoubliable from "./components/Is";
import Lumière from "./components/Dol";
import Fleur from "./components/Fdl";
import Vents from "./components/Vdl";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Carrousel />
        <Presentation />
        <Lumière/>
        <Inoubliable />
        <Fleur />
        <Vents />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default App;

