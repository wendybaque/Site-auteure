import React from "react";
import "../components/Presentation.css";
import logo from "../assets/logonoir.png";
import down from "../assets/down.png";
import { Fade } from "react-awesome-reveal";



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
                <Fade delay={1000}> 
                <p className="fade">Romans contemporains</p>
                </Fade>
                <Fade delay={2000}>
                <p className="fade">Romans feel-good</p>
                </Fade>
                <Fade delay={3000}>
                <p className="fade">Romances musicales</p>
                </Fade>
                <p>Bienvue sur mon site ! Vous y découvrirez mon univers littéraire, fait de récits contemporains et réalistes, avec quelques notes de romance. J'ai à coeur de traiter de sujets originaux à travers des personnages humains et attachants. Je vous souhaite une bonne visite et ce belles lectures !</p>
                <p>Mes livres sont disponibles sur Amazon en versions numériques et imprimées, ainsi qu'à la commande dans vos librairies en ligne et physiques favorites.</p>
            <a href="/Apropos" alt="about path"><button className="apropos-button">A propos de Wendy Baqué</button></a>
            <a href="#livre" className="redirection" alt="redirection vers les pages des livres">
                <img src={down} alt="flèche vers le bas" className="arrow"></img>
            </a>
            </div>
        </div>
        </div>
    );
}

export default Presentation;