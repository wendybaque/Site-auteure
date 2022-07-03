import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
      <nav role="navigation">
      <Navbar />
      </nav>
      <div>
        <main>
        <Presentation />
        </main>
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
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
export default Accueil;
