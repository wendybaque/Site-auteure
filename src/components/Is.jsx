import React from 'react'
import { Reveal } from "react-awesome-reveal";
import livreis from "../assets/livreis.png";

function Is() {
  return (
    <div className="lg:flex lg:flex-row m-2 p-2">
      <div className="lg:w-3/5 md:w-full sm:w-full m-2 p-2">
        <Reveal>
          <h2 className='text-3xl font-bold text-blue-700 font-poppins'>Inoubliable symphonie</h2>
        </Reveal>
        <h3 className='font-bold m-2 p-2'>Genre : romance musicale</h3>
        <p className='font-bold'>Nous vivons dans un monde où aimer qui l’on veut n’est pas acceptable à cause d’une trop grande différence d’âge, de revenu financier ou de rang social. Un monde où la musique reste parfois incomprise, où la beauté fait défaut. Un monde où les apparences sont trop souvent trompeuses.
Avant, je croyais que le sens de la vie, c’était la musique. Mon professeur m’a montré que l’amour pouvait aussi valoir la peine d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai défendu, j’ai cru en lui, je me suis perdue.</p>
<p className='font-bold'>Grâce à Rudyard, cet homme au regard tendre et aux valeurs nobles, j’ai pu réaliser mes rêves les plus controversés. L’espace d’un instant, nous nous sommes croisés, nous nous sommes aimés. Nous, qui vivions dans des mondes parallèles.
</p>
<p className='font-bold'>Notre histoire est celle d’une petite étoile en plastique phosphorescente, d’une enquête policière, de parents désabusés, de normes sociales chamboulées, d’opéra rock révolté, de drogue surdosée, d’amour rejeté et d’amitié à toute épreuve.
</p>
<a href="/Inoubliablesymphonie" alt="page les dangers de la lumière"><button className="m-2 p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">En savoir plus</button></a>
      </div>
      <div className='m-2 p-2'>
        <img src={livreis} alt="couverture des dangers de la lumière" className='w-96 h-72'/>
      </div>
    </div>
  );
}

export default Is;