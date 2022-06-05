import React from "react";

import "../components/Slider.css";
import img1 from "../assets/livredol.png";
import img2 from "../assets/livreis.png";
import img3 from "../assets/livrefdl.png";
import img4 from "../assets/livrevdl.png";

function Slider () {
    return(
        <div className="slider">
		    <div className="slides">
			    <div className="slide"><img src={img1} alt="Les dangers de la lumière" className="slider-img"/></div>
			    <div className="slide"><img src={img2} alt="Inoubliable symphonie" className="slider-img"/></div>
			    <div className="slide"><img src={img3} alt="La fleur de l'âge" className="slider-img"/></div>
                <div className="slide"><img src={img4} alt="Les vents de l'existence" className="slider-img"/></div>
		    </div>
	    </div>
    )
}

export default Slider;