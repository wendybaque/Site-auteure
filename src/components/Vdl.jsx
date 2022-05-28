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
        <a href="/Inoubliablesymphonie" alt="page inoubliable symphonie"><button className='livre-button'>En savoir plus</button></a>
      </div>
      <div className="wrapper-livre-right">
        <img src={livrevdl} alt="couverture des dangers de la lumière" className='livre-img'/>
      </div>
    </div>
  );
}

export default Vdl;