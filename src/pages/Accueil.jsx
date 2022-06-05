import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Slider from "../components/Slider";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";
import Inoubliable from "../components/Is";
import Lumière from "../components/Dol";
import Fleur from "../components/Fdl";
import Vents from "../components/Vdl";
import Testimonials from "../components/Testimonials";

function Accueil() {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Presentation />
        {/* <Slider /> */}
        <Lumière/>
        <Inoubliable />
        <Fleur />
        <Vents />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default Accueil;
