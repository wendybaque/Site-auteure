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

            <a href="#livre" >
                <img src={down} alt="flèche vers le bas" className="arrow"></img>
            </a>
            </div>
        </div>
        </div>
    );
}

export default Presentation;