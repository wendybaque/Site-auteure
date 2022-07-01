import React from "react";
import { useState } from "react";
// import { link } from "react-router-dom;
import "../components/Navbar.css";
import logoblanc from "../assets/logoblanc.png"

function Topbar() {
  
    const [showLinks, setShowLinks] =useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
   <nav className={`navbar ${showLinks? "show-nav":"hide-nav"}`} role="navigation">
       <div className="logo"><a href="#presentation" alt="presentation path"><img src={logoblanc} alt="Logo de Wendy Baqué" className="logo"></img></a></div>
       <div className="title">
           <p>Wendy Baqué | Auteure de romans</p>
           </div>
       <ul className="navbar-links">
        <li className="navbar-item slideInDown-1" onClick={()=>setShowLinks(false)}>
            <a href="/" className="navbar-link" alt="home path">Accueil</a>
        </li>
        <li className="navbar-item slideInDown-2" onClick={()=>setShowLinks(false)}>
            <a href="/Apropos" className="navbar-link" alt="about path">A propos</a>
        </li>
        <li className="navbar-item slideInDown-3" onClick={()=>setShowLinks(false)}>
            <a href="/Fleurdelage" className="navbar-link" alt="la fleur de l'âge path">La fleur de l'âge</a>
        </li>
        <li className="navbar-item slideInDown-4" onClick={()=>setShowLinks(false)}>
            <a href="/Dangersdelalumiere" className="navbar-link" alt="Les dangers de la lumière path">Les dangers de la lumière</a>
        </li>
        <li className="navbar-item slideInDown-5" onClick={()=>setShowLinks(false)}>
            <a href="/Inoubliablesymphonie" className="navbar-link" alt="Inoubliable symphonie path">Inoubliable symphonie</a>
        </li>
        <li className="navbar-item slideInDown-6" onClick={()=>setShowLinks(false)}>
            <a href="/Ventsdelexistence" className="navbar-link" alt="Les vents de l'existence path">Les vents de l'existence</a>
        </li>
        <li className="navbar-item slideInDown-7" onClick={()=>setShowLinks(false)}>
            <a href="/Contact" className="navbar-link" alt="contact path">Contact</a>
        </li>
       </ul>
       <button className="navbar-burger" onClick={handleShowLinks} role="navigation" aria-controls="toggle" menubar>
           <span className="burger-line" menuitem></span>
           <span className="burger-line" menuitem></span>
           <span className="burger-line" menuitem></span>
       </button>
   </nav>
  );
}

export default Topbar;