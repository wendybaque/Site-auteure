import React from "react";
import "../components/Presentation.css";
import logo from "../assets/logonoir.png"
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
                <h3>Bonjour ! Je suis</h3>
                <h1>Wendy Baqué</h1>
                <h3>Auteure de </h3>
                <p>Bienvue sur mon site ! Vous y découvrirez mon univers littéraire, fait de récits contemporains et réalistes, avec quelques notes de romance. J'ai à coeur de traiter de sujets originaux à trvaers des personnages humains et attachants. Je vous souhaite une bonne visite et ce belles lectures !</p>
                <p>Mes livres sont disponibles sur Amazon en versions numériques et imprimées, ainsi qu'à la commande dans vos librairies en ligne et physiques favorites.</p>
            <a href="#livre" className="redirection">
                <img src={down} alt="flèche vers le bas" className="arrow"></img>
            </a>
            </div>
        </div>
        </div>
    );
}

export default Presentation;