import React from "react";
import "../components/Topbar.css";
import logoblanc from "../assets/logoblanc.png"

function Topbar () {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                <a href="#presentation"><img src={logoblanc} alt="Logo de Wendy Baqué" className="logo"></img></a>

                    <div className="title">
                        <h2>Wendy Baqué</h2>
                        <h2>Auteure de romans</h2>
                    </div>
                </div>
                <div className="topbar-right">
                    <a href="#carrousel">Carrousel</a> 
                    <a href="#presentation">Présentation</a>
                    <a href="#livre">Mes Livres</a>
                    <a href="#contact">Contact</a>
                    
                </div>
            </div>
        </div>
    );
}

export default Topbar;