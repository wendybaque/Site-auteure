import React from "react";
import "../components/Presentation.css";
import logo from "../assets/logoblanc.png"
import down from "../assets/down.png"
import { init } from "ityped"
import { useEffect, useRef } from "react";

function Presentation () {
    const textRef=useRef();
    useEffect(()=>{
        init(textRef.current, {
            backDelay:1500,
            backSpeed:40, 
            showCursor: true,
            strings: ["romans contemporains","romans feel-good", "romances musicales" ]
        });
    },[])

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
                <h3>Auteure de <span ref={textRef} className="presentation-span"></span></h3>
                <p>Connue sous le pseudo d'Antiigone, Wendy Baqué est une auteure qui adore jouer avec les mots.</p>
                <p>Pour elle, écrire a toujours été un moyen de communication à part entière : tout ce qui ne peut se dire peut s'écrire. C'est pour cela que l'expression des émotions de ses personnages prend une grande place dans ses écrits, avec une recherche particulière apportée au réalisme.</p>                <p>"Les dangers de la lumière", une romance musicale dans la France des années 80 et placée sous le signe du rock and roll, est éditée en août 2021, également chez Plumes de Mimi éditions.</p>
                <p>De manière générale, ses romans traitent de sujets qui lui sont chers, mais aussi d'actualité, tantôt tabous, tantôt victimes de préjugés et de stéréotypes, comme la fin de vie, l'avortement, l'acceptation de soi, la santé mentale ou encore les normes de la société. Elle porte une attention particulière aux émotions.</p>
                <p>Ses personnages ne sont pas parfaits, ont des défauts, des failles à travers lesquelles ils laissent entrer ou jaillir la lumière, ce qui les rend d'autant plus humains. Sa deuxième passion, la musique, tient une grande place dans ses écrits.Susciter la réflexion et le questionnement de soi chez ses lecteurs est un point clef de la fonction de l'écrivain, selon elle.</p>
                <p>Elle réalise aussi des chroniques littéraires de romans auto-édités ou de maison d'édition indépendantes, afin de mettre en avant de nouveaux auteurs et ses coups de cœur littéraires que vous pouvez retrouver sur <a href="https://wendybaqueauteur.wixsite.com/website" className="site-de-chroniqueuse">ce site</a></p>
            <a href="#livre" className="redirection">
                <img src={down} alt="flèche vers le bas" className="arrow"></img>
            </a>
            </div>
        </div>
        </div>
    );
}

export default Presentation;