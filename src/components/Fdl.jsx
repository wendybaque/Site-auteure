import React from 'react'
import { Reveal } from "react-awesome-reveal";
import "../components/Livre.css";
import livrefdl from "../assets/livrefdl.png";

function Fdl() {
  return (
    <div className="livre" id="fdl">
       <div className="wrapper-livre-left">
        <Reveal>
          <h2 className='livre-title'>La fleur de l'âge</h2>
        </Reveal>
        <h3>Genre : roman contemporain feel-good</h3>
        <p>« Bonjour, je m'appelle Benjamin et je suis musicien. Je viens vous chanter une petite chanson pour espérer vous faire du bien . »
Cette phrase, Benjamin Leduc, bénévole de l’association Hospit’Art, la prononce à chaque fois qu’il entre dans une chambre du service de soins palliatifs d’une
clinique tourangelle. En général, les patients l’accueillent avec enthousiasme et se prennent au jeu, oubliant un temps la maladie et la mort. En général, seulement. Car Marcelle Bourget, quatre-vingt-un ans et toute sa tête (et toutes ses dents aussi !) reste muette face à tous ses efforts....</p>
        <a href="/Fleurdelage" alt="page la fleur de l'âge"><button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">En savoir plus</button></a>
      </div>
      <div className="wrapper-livre-right">
        <img src={livrefdl} alt="couverture de la fleur de l'âge" className='livre-img'/>
      </div>
    </div>
  );
}

export default Fdl;