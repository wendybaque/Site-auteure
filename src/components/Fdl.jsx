import React from 'react'
import { Reveal } from "react-awesome-reveal";
import livrefdl from "../assets/livrefdl.png";

function Fdl() {
  return (
    <div className="lg:flex lg:flex-row m-2 p-2">
       <div className="lg:w-3/5 md:w-full sm:w-full  m-2 p-2">
        <Reveal>
          <h2 className='text-3xl font-bold text-blue-700 font-poppins'>La fleur de l'âge</h2>
        </Reveal>
        <h3 className='font-bold m-2 p-2'>Genre : roman contemporain feel-good</h3>
        <p className='font-bold'>« Bonjour, je m'appelle Benjamin et je suis musicien. Je viens vous chanter une petite chanson pour espérer vous faire du bien . »
Cette phrase, Benjamin Leduc, bénévole de l’association Hospit’Art, la prononce à chaque fois qu’il entre dans une chambre du service de soins palliatifs d’une
clinique tourangelle. En général, les patients l’accueillent avec enthousiasme et se prennent au jeu, oubliant un temps la maladie et la mort. En général, seulement. Car Marcelle Bourget, quatre-vingt-un ans et toute sa tête (et toutes ses dents aussi !) reste muette face à tous ses efforts.</p>
        <p className='font-bold'>Pourtant, les yeux de la vieille dame brillent dès qu’on lui parle de musique. Rongé par un mal qui l’entrave, mais déterminé, le jeune homme est prêt à tout pour percer les secrets de l’aînée. Prêt à tout, même à remettre en question toute sa vie.
Et si la rencontre avec la patiente en fin de vie et ce trentenaire qui cherche sa voie était le commencement d’une belle histoire bercée par la musique ?</p>
        <a href="/Fleurdelage" alt="page la fleur de l'âge"><button className="m-2 p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">En savoir plus</button></a>
      </div>
      <div className='m-2 p-2'>
        <img src={livrefdl} alt="couverture de la fleur de l'âge" className="w-96 h-72"/>
      </div>
    </div>
  );
}

export default Fdl;