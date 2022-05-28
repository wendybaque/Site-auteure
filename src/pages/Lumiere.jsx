import React from 'react';
import "../pages/livrepage.css";
import livredol from "../assets/livredol.png";

function Lumiere() {
  return (
    <div className='livre-page'>
      <div className="livre-page-left">
        <h2 className='livre-title'>Les dangers de la lumière</h2>
        <h3>Genre : romance musicale</h3>
        <p>Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. Lassée de cette société, elle fuit en Provence où des rencontres hautes en couleur et des opportunités l'attendent.
          En parallèle, Gabriel, vedette à succès de la chanson française, est atteint de la « maladie de la tristesse ». Affrontant ses démons qui émanent chaque soir sur scène de son emblématique guitare bleue, il lutte contre lui-même et ce monde du show-business par lequel il est complètement dépassé.
          L'une veut atteindre la lumière, au risque de se brûler les ailes. L'autre se complaît dans l'ombre, depuis trop longtemps installée dans son âme. Ensemble, dans une ambiance eighties entre clarté et obscurité, au rythme des trajets en car entre les villes étapes d'une tournée nationale, ils vont tenter d'accéder à la lumière : celle des projecteurs, de la célébrité, mais aussi celle que l'on a en nous, flamme rageuse ou étincelle timide, dangereuse ou salvatrice.</p>
      </div>
      <div className="livre-page-right">
        <img src={livredol} alt="livre les dangers de la lumière"/>
      </div>
    </div>
  )
}

export default Lumiere;