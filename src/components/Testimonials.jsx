import React from 'react'
import "../components/Testimonials.css";
import img1 from "../assets/livredol.png";
// import img2 from "../assets/livreis.png";
// import img3 from "../assets/livrefdl.png";
// import img4 from "../assets/livrevdl.png";
import stars from "../assets/stars.jpg";


export default function Testimonials() {
  return (
    <div className='testimonials' id="testimonials">
      <h1 className='testimonials-title'>Quelques avis des lecteurs</h1>
      <div className="testimonials-container">
          <div className="card">
              <div className="top">
                  <img src={img1} alt="Icone du livre chroniqué" className='testimonials-img'/>
                  <img src={stars} alt="étoiles avis" className='testimonials-stars'/>
              </div>
              <div className="center">
                  <p>Texte de l'avis</p>
              </div>
              <div className="bottom">
                  <h3>Nom du chroniqueur</h3>
                  <h4>Nom du blog</h4>
              </div>
          </div>
      </div>
    </div>
  )
}
