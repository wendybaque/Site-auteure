import React from 'react'
import "../components/HoverEffect.css"
import livrevdl from "../assets/livrevdl.png";
import livreis from "../assets/livreis.png";
import livrefdl from "../assets/livrefdl.png";
import livredol from "../assets/livredol.png";


export default function HoverEffect() {
  return (
    <div className="container">
   <div className="box">
   <a href="/Dangersdelalumiere" alt="redirection page Les dangers de la lumière">
    <div className="imgBx">
        <img src={livredol} alt="couverture Les dangers de la lumière"/>
      </div>
      <div className="content">
        <div className='overflow-y-hidden'>
          <h2>Les dangers de la lumière</h2>
          <p>Romance musicale
          </p>
        </div>
      </div></a>
    </div>

    <div className="box">
     <a href="/Inoubliablesymphonie" alt="redirection page Inoubliable symphonie"><div className="imgBx">
        <img src={livreis} alt="couverture inoubliable symphonie"/>
      </div>

      <div className="content">
        <div className='overflow-y-hidden'>
          <h2>Inoubliable symphonie</h2>
          <p>Romance musicale
          </p>
        </div>
      </div></a>
    </div>

    <div className="box">
      <a href="/Fleurdelage" alt="redirection page La fleur de l'âge"><div className="imgBx">
        <img src={livrefdl} alt="Couverture La fleur de l'âge"/>
      </div>
      <div className="content">
        <div className='overflow-y-hidden'>
          <h2>La fleur de l'âge</h2>
          <p>Roman feel-good
          </p>
        </div>
      </div></a>
    </div>

    <div className="box">
      <a href="/Ventsdelexistence" alt="redirection page Les vents de l'existence"><div className="imgBx">
        <img src={livrevdl} alt="couverture Les vents de l'existence"/>
      </div>
      <div className="content">
        <div className='overflow-y-hidden'>
          <h2>Les vents de l'existence</h2>
          <p>Roman contemporain à dimension sociologique</p>
        </div>
      </div></a>
    </div>
  </div>
  );
}
