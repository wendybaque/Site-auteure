import React from "react";
import { useState } from "react";
import "../components/Navbar.css";
import logoblanc from "../assets/logoblanc.png"

function Topbar() {
  
    const [showLinks, setShowLinks] =useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
   <nav className={`navbar ${showLinks? "show-nav":"hide-nav"}`}>
       <div className="logo"><a href="#presentation"><img src={logoblanc} alt="Logo de Wendy Baqué" className="logo"></img></a></div>
       <ul className="navbar-links">
        <li className="navbar-item slideInDown-1">
            <a href="/" className="navbar-link">Accueil</a>
        </li>
        <li className="navbar-item slideInDown-2">
            <a href="#presentation" className="navbar-link">Présentation</a>
        </li>
        <li className="navbar-item slideInDown-3">
            <a href="#livre" className="navbar-link">Mes livres</a>
        </li>
        <li className="navbar-item slideInDown-4">
            <a href="#contact" className="navbar-link">Contact</a>
        </li>
       </ul>
       <button className="navbar-burger" onClick={handleShowLinks}>
           <span className="burger-line"></span>
       </button>
   </nav>
  );
}

export default Topbar;

/* <div className="topbar-left">
                <a href="#presentation"><img src={logoblanc} alt="Logo de Wendy Baqué" className="logo"></img></a>
                    <div className="title">
                        <h2>Wendy Baqué</h2>
                        <h2>Auteure de romans</h2>
                    </div>
                </div> */