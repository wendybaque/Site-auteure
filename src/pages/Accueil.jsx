import React from "react";
import "../App.css";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";
import Inoubliable from "../components/Is";
import Lumière from "../components/Dol";
import Fleur from "../components/Fdl";
import Vents from "../components/Vdl";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";

function Accueil() {
  return (
    <div>
      <div>
        <main>
        <Presentation />
        </main>
        <section>
          <Carousel/>
        </section>
        <section>
        <Lumière/>
        </section>
        <section>
        <Inoubliable />
        </section>
        <section>
        <Fleur />
        </section>
        <section>
        <Vents />
        </section>
        <section>
        <Testimonials />
        </section>
        <section>
        <Contact />
        </section>
      </div>
    </div>
  );
}
export default Accueil;
