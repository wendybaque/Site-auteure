import React from 'react'
import { Reveal } from "react-awesome-reveal";
import "../components/Livre.css";
import livredol from "../assets/livredol.png";

function Dol() {
  return (
    <div className="livre" id="dol">
      <div className="wrapper-livre-left">
        <Reveal>
          <h2 className='livre-title'>Les dangers de la lumière</h2>
        </Reveal>
        <h3>Genre : romance musicale</h3>
        <p>Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. Lassée de cette société, elle fuit en Provence où des rencontres hautes en couleur et des opportunités l'attendent...</p>
        <a href="/Dangersdelalumiere" alt="page les dangers de la lumière"><button className='livre-button'>En savoir plus</button></a>
      </div>
      <div className="wrapper-livre-right">
        <img src={livredol} alt="couverture des dangers de la lumière" className='livre-img'/>
      </div>
    </div>
  );
}

export default Dol;