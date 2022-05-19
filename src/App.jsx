import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import Carrousel from "./components/Carrousel";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Carrousel />
      <Presentation />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
