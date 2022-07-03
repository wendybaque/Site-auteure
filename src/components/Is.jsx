import React from 'react'
import { Reveal } from "react-awesome-reveal";
import livreis from "../assets/livreis.png";

function Is() {
  return (
    <div className="flex flex-row m-2 p-2">
      <div className="w-3/5 m-2 p-2">
        <Reveal>
          <h2 className='font-bold text-blue-700'>Inoubliable symphonie</h2>
        </Reveal>
        <h3>Genre : romance musicale</h3>
        <p>Nous vivons dans un monde où aimer qui l’on veut n’est pas acceptable à cause d’une trop grande différence d’âge, de revenu financier ou de rang social. Un monde où la musique reste parfois incomprise, où la beauté fait défaut. Un monde où les apparences sont trop souvent trompeuses.
Avant, je croyais que le sens de la vie, c’était la musique. Mon professeur m’a montré que l’amour pouvait aussi valoir la peine d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai défendu, j’ai cru en lui, je me suis perdue....</p>
        <a href="/Inoubliablesymphonie" alt="page inoubliable symphonie"><button classeName="m-2 p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">En savoir plus</button></a>
      </div>
      <div className='m-2 p-2'>
        <img src={livreis} alt="couverture des dangers de la lumière" className='w-96 h-72'/>
      </div>
    </div>
  );
}

export default Is;