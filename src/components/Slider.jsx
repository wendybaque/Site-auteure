import React from "react";
// import {useState} from 'react'
import "../components/Slider.css";
// import { useState } from "react";
// import { Slide } from 'react-slideshow-image';
import img1 from "../assets/livredol.png";
import img2 from "../assets/livreis.png";
import img3 from "../assets/livrefdl.png";
import img4 from "../assets/livrevdl.png";

// import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'
function Slider () {
    return(
        <div className="slider">
		    <div className="slides">
			    <div className="slide"><img src={img1} alt="Les dangers de la lumière" /></div>
			    <div className="slide"><img src={img2} alt="Inoubliable symphonie" /></div>
			    <div className="slide"><img src={img3} alt="La fleur de l'âge" /></div>
                <div className="slide"><img src={img4} alt="Les vents de l'existence" /></div>

		    </div>
	    </div>
    )
}

export default Slider;
    
// export default function Slider() {

//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//         } 
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }

//     const moveDot = index => {
//         setSlideIndex(index)
//     }

//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img 
//                         src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
//                         />
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             <div className="container-dots">
//                 {Array.from({length: 5}).map((item, index) => (
//                     <div 
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// function Slideshow () {
//     const proprietes = {
//         duration:5000,
//         transitionDuration:500,
//         infinite:true,
//         indicators:true,
//         arrows:true,
//     }
//     return (
//         <div className="containerslide">
//             <Slide {...proprietes}>
//                 <div className="each-slide">
//                         <img src={img1} alt="les dangers de la lumière"/>
//                 </div>

//                 <div className="each-slide">
//                         <img src={img2} alt="inoubliable symphonie"/>
//                 </div>

//                 <div className="each-slide">
//                         <img src={img3} alt="les vents de l'existence"/>
//                 </div>

//                 <div className="each-slide">
//                         <img src={img4} alt="la fleur de l'âge"/>
//                 </div>
//             </Slide>
//         </div>
//     );
// }

// export default Slideshow;

// function Carrousel () {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const data = [
//         {
//             id:1,
//             title:"Les dangers de a lumière",
//             genre:"Romance musicale",
//             img:"../assets/livredol.png"
//         },
//         {
//             id:2,
//             title:"Inoubliable symphonie",
//             genre:"Romance musicale",
//             img:"../assets/livreis.png"
//         },
//         {
//             id:3,
//             title:"Les vents de l'existence",
//             genre:"Roman contemporain à dimension sociologique",
//             img:"../assets/livrevdl.png"
//         },
//         {
//             id:4,
//             title:"La fleur de l'âge",
//             genre:"Roman feel-good",
//             img:"../assets/livrefdl.png"
//         },
//     ];
//     const handleClick = (way)=>{
//         way==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0);
//     }
//     return (
//         <div className="carrousel" id="carrousel">
//             <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
//                 {data.map((d)=>(
//                 <div className="container">
//                     <div className="item">
//                         <div className="item-left">
//                             <div className="left-container">
//                                 <h2 className="carrousel-title">{d.title}</h2>
//                                 <p>{d.genre}</p>
//                                 <a href="/Dangersdelalumiere" alt="page les dangers de la lumière" ><button>En savoir plus</button></a>
//                             </div>
//                         </div>
//                         <div className="item-right">
//                             <img src={d.img} alt="Couverture des dangers de la lumière" className="carrousel-img"/>
//                         </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//             <img src={flèchedroite} alt="flèche droite" className="arrow-right" onClick={()=>handleClick()}/>
//             <img src={flèchegauche} alt="flèche gauche" className="arrow-left" onClick={()=>handleClick("left")}/>
//         </div>
//     );
// }

// export default Carrousel;