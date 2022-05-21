import React from "react";
import "../components/Presentation.css";
import logo from "../assets/logoblanc.png"
import down from "../assets/down.png"

function Presentation () {
    return (
        <div className="presentation" id="presentation">
        <div className="presentation-left">
            <div className="img-container">
                <img src={logo} alt="logo de Wendy Baqué" className="presentation-image"/>
            </div>
        </div>
        <div className="presentation-right">
            <div className="presentation-wrapper">
                <h2>Bonjour et bienvenue sur mon site ! Je suis</h2>
                <h1>Wendy Baqué</h1>
                <h3>Auteure de <span>romans contemporains </span>, feel-good et de romances musicales</h3>

            <a href="#livre" >
                <img src={down} alt="flèche vers le bas" className="arrow"></img>
            </a>
            </div>
        </div>
        </div>
    );
}

export default Presentation;