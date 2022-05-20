import React from "react";
import "../components/Navbar.css";
import logoblanc from "../assets/logoblanc.png"

function Topbar() {
  
  return (
   <nav className="navbar">
       <div className={logoblanc}></div>
       <ul className="navbar-links">
        <li className="navbar-item">
            <a href="/" className="navbar-link">Accueil</a>
        </li>
        <li className="navbar-item">
            <a href="#presentation" className="navbar-link">Présentation</a>
        </li>
        <li className="navbar-item">
            <a href="#livre" className="navbar-link">Mes livres</a>
        </li>
        <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
        </li>
       </ul>
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