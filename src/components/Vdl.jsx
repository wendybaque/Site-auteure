import React from 'react'
import { Reveal } from "react-awesome-reveal";
import "../components/Livre.css";
import livrevdl from "../assets/livrevdl.png";

function Vdl() {
  return (
    <div className="livre" id="vdl">
       <div className="wrapper-livre-left">
        <Reveal>
          <h2 className='livre-title'>Les vents de l'existence</h2>
        </Reveal>
        <h3>Genre : roman contemporain à dimension sociologique</h3>
        <p>Proche de la trentaine, Joanne, sociologue émérite, est de ces personnes dont on pourrait dire qu’elles ont réussi leur vie. Et pourtant… Tout s’écroule pour la jeune femme le jour où elle apprend brutalement le suicide de Lucas, son parrain. En héritage, il lui laisse l’Ultimo Respiro, la maison qu’il avait achetée et rénovée afin de finir ses jours à La Turballe, en Loire Atlantique. Elle y retourne alors, d’abord pour des raisons administratives, puis se questionne sur les circonstances du décès de son parrain...</p>
        <a href="/Ventsdelexistence" alt="page les vents de l'existence"><button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">En savoir plus</button></a>
      </div>
      <div className="wrapper-livre-right">
        <img src={livrevdl} alt="couverture des dangers de la lumière" className='livre-img'/>
      </div>
    </div>
  );
}

export default Vdl;