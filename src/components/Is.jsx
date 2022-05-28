import React from 'react'
import { Reveal } from "react-awesome-reveal";
import "../components/Livre.css";
import livreis from "../assets/livreis.png";

function Is() {
  return (
    <div className="livre" id="is">
      <div className="wrapper-livre-left">
        <Reveal>
          <h2 className='livre-title'>Inoubliable symphonie</h2>
        </Reveal>
        <h3>Genre : romance musicale</h3>
        <p>Nous vivons dans un monde où aimer qui l’on veut n’est pas acceptable à cause d’une trop grande différence d’âge, de revenu financier ou de rang social. Un monde où la musique reste parfois incomprise, où la beauté fait défaut. Un monde où les apparences sont trop souvent trompeuses.
Avant, je croyais que le sens de la vie, c’était la musique. Mon professeur m’a montré que l’amour pouvait aussi valoir la peine d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai défendu, j’ai cru en lui, je me suis perdue....</p>
        <a href="/Inoubliablesymphonie" alt="page inoubliable symphonie"><button className='livre-button'>En savoir plus</button></a>
      </div>
      <div className="wrapper-livre-right">
        <img src={livreis} alt="couverture des dangers de la lumière" className='livre-img'/>
      </div>
    </div>
  );
}

export default Is;