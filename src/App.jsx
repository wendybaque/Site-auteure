import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Topbar from "./components/Navbar";
import Carrousel from "./components/Carrousel";
import Presentation from "./components/Presentation";
import Livre from "./components/Livre";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Carrousel />
        <Presentation />
        <Livre />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default App;

