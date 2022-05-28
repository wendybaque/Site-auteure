import React from "react";
import { useState } from "react";
import "../components/Carrousel.css";
import flèchegauche from "../assets/flèchegauche.png"
import flèchedroite from "../assets/flèchedroite.png"

function Carrousel () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id:1,
            title:"Les dangers de a lumière",
            genre:"Romance musicale",
            img:"../assets/livredol.png"
        },
        {
            id:2,
            title:"Inoubliable symphonie",
            genre:"Romance musicale",
            img:"../assets/livreis.png"
        },
        {
            id:3,
            title:"Les vents de l'existence",
            genre:"Roman contemporain à dimension sociologique",
            img:"../assets/livrevdl.png"
        },
        {
            id:4,
            title:"La fleur de l'âge",
            genre:"Roman feel-good",
            img:"../assets/livrefdl.png"
        },
    ];
    const handleClick = (way)=>{
        way==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0);
    }
    return (
        <div className="carrousel" id="carrousel">
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="item-left">
                            <div className="left-container">
                                <h2 className="carrousel-title">{d.title}</h2>
                                <p>{d.genre}</p>
                                <a href="/Dangersdelalumiere" alt="page les dangers de la lumière" ><button>En savoir plus</button></a>
                            </div>
                        </div>
                        <div className="item-right">
                            <img src={d.img} alt="Couverture des dangers de la lumière" className="carrousel-img"/>
                        </div>
                    </div>
                  </div>
                ))}
            </div>
            <img src={flèchedroite} alt="flèche droite" className="arrow-right" onClick={()=>handleClick()}/>
            <img src={flèchegauche} alt="flèche gauche" className="arrow-left" onClick={()=>handleClick("left")}/>
        </div>
    );
}

export default Carrousel;