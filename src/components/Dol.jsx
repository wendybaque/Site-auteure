import React from 'react'
import { Reveal } from "react-awesome-reveal";
import livredol from "../assets/livredol.png";

function Dol() {
  return (
    <div className="lg:flex lg:flex-row m-2 p-2">
      <div className="lg:w-3/5 md:w-full sm:w-full m-2 p-2">
        <Reveal>
          <h2 className='text-3xl font-bold text-secondary font-yeseva'>Les dangers de la lumière</h2>
        </Reveal>
        <h3 className='font-bold m-2 p-2'>Genre : romance musicale</h3>
        <p className='font-bold'>Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. Lassée de cette société, elle fuit en Provence où des rencontres hautes en couleur et des opportunités l'attendent...</p>
        <p className='font-bold'>L'une veut atteindre la lumière, au risque de se brûler les ailes. L'autre se complaît dans l'ombre, depuis trop longtemps installée dans son âme. Ensemble, dans une ambiance eighties entre clarté et obscurité, au rythme des trajets en car entre les villes étapes d'une tournée nationale, ils vont tenter d'accéder à la lumière : celle des projecteurs, de la célébrité, mais aussi celle que l'on a en nous, flamme rageuse ou étincelle timide, dangereuse ou salvatrice.</p>
        <a href="/Dangersdelalumiere" alt="page les dangers de la lumière"><button className="hover:animate-bounce m-2 p-2">En savoir plus</button></a>
      </div>
      <div className='m-2 p-2'>
        <img src={livredol} alt="couverture des dangers de la lumière" className="w-96 h-72"/>
      </div>
    </div>
  );
}

export default Dol;