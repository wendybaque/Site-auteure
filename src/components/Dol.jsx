import React from 'react'
import "../components/Livre.css";
import livredol from "../assets/livredol.png";

function Dol() {
  return (
    <div className="livre" id="dol">
      <div className="wrapper-dol-left">
        <h2>LES DANGERS DE LA LUMIERE</h2>
        <h3>Genre : romance musicale</h3>
        <p>Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. Lassée de cette société, elle fuit en Provence où des rencontres hautes en couleur et des opportunités l'attendent...</p>
        <a href="/Dangersdelalumiere" alt="page les dangers de la lumière"><button className='dol-button'>En savoir plus</button></a>
      </div>
      <div className="wrapper-dol-right">
        <img src={livredol} alt="couverture des dangers de la lumière"/>
      </div>
    </div>
  );
}

export default Dol;