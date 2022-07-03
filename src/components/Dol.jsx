import React from 'react'
import { Reveal } from "react-awesome-reveal";
import livredol from "../assets/livredol.png";

function Dol() {
  return (
    <div className="flex flex-row m-2 p-2">
      <div className="w-3/5 m-2 p-2">
        <Reveal>
          <h2 className='font-bold text-blue-700'>Les dangers de la lumière</h2>
        </Reveal>
        <h3>Genre : romance musicale</h3>
        <p>Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. Lassée de cette société, elle fuit en Provence où des rencontres hautes en couleur et des opportunités l'attendent...</p>
        <a href="/Dangersdelalumiere" alt="page les dangers de la lumière"><button className="m-2 p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">En savoir plus</button></a>
      </div>
      <div className='m-2 p-2'>
        <img src={livredol} alt="couverture des dangers de la lumière" className="w-96 h-72"/>
      </div>
    </div>
  );
}

export default Dol;