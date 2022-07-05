import React from "react";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Presentation from "../components/Presentation";
import Inoubliable from "../components/Is";
import Lumière from "../components/Dol";
import Fleur from "../components/Fdl";
import Vents from "../components/Vdl";
// import ButtonTop from "../components/ButtonTop";
import HoverEffect from "../components/HoverEffect";

function Accueil() {
  return (
      <div className="bg-slate-100">
        <section id="presentation">
            <Presentation />
        </section>
        
        <section id="carousel">
            <HoverEffect/>
        </section>

        <section id="book">
            <Lumière/>
            <Inoubliable />
            <Fleur />
            <Vents />
        </section>

        <section id="testimonials">
            <Testimonials />
        </section>

        <section id="contact">
            <Contact />
        </section>
      </div>
  );
}
export default Accueil;
