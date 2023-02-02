import React from "react";
import { Helmet } from "react-helmet";

import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Presentation from "../components/Presentation";
import Inoubliable from "../components/Is";
import Lumière from "../components/Dol";
import Fleur from "../components/Fdl";
import Vents from "../components/Vdl";
import ButtonTop from "../components/ButtonTop";

function Accueil() {
  return (
    <div className="bg-bg">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wendy Baqué | Auteure</title>
        <link rel="canonical" href="https://site-auteure.vercel.app/" />
      </Helmet>
      <section id="presentation">
        <Presentation />
      </section>

      <section id="book">
        <Lumière />
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
      <ButtonTop />
    </div>
  );
}
export default Accueil;
