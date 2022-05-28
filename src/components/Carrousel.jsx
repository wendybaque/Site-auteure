import React from "react";
import "../components/Carrousel.css";
import livredol from "../assets/livredol.png";

function Carrousel () {
    return (
        <div className="carrousel" id="carrousel">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="item-left">
                            <div className="left-container">
                                <h2 className="carrousel-title">Les dangers de la lumière</h2>
                                <p>Genre : romance musicale</p>
                                <a href="zeqsdxf" alt="esdrfg" ><button>En savoir plus</button></a>
                            </div>
                        </div>
                        <div className="item-right">
                        <img src={livredol} alt="Couverture des dangers de la lumière" className="carrousel-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;