import React from 'react';
import "../pages/livrepage.css";
import livrevdl from "../assets/livrevdl.png";

function Vents() {
  return (
    <div className='livre-page'>
      <div className="livre-page-left">
      <h2 className='livre-title'>Les vents de l'existence</h2>
        <h3>Genre : roman contemporain à dimension sociologique</h3>
        <p>Proche de la trentaine, Joanne, sociologue émérite, est de ces personnes dont on pourrait dire qu’elles ont réussi leur vie. Et pourtant… Tout s’écroule pour la jeune femme le jour où elle apprend brutalement le suicide de Lucas, son parrain. En héritage, il lui laisse l’Ultimo Respiro, la maison qu’il avait achetée et rénovée afin de finir ses jours à La Turballe, en Loire Atlantique. Elle y retourne alors, d’abord pour des raisons administratives, puis se questionne sur les circonstances du décès de son parrain.
          Ses vieux démons refont surface, l’interrogeant tant sur la mort que sur la vie, et mettent à mal le sens que l’endeuillée avait attribué à son existence. Elle fait la connaissance de Damien Lasareigne qui, avec ses idées artistiques et révoltées, lui fera voir la vie sous d’autres facettes. Ces événements de vie la forceront à affronter ses peurs, ses proches et à faire valoir qui elle est réellement. Alors qu’autour d’elle, tout est question de mort et de finitude, pour elle, tout commence, tout est renouveau.</p>
      </div>
      <div className="livre-page-right">
        <img src={livrevdl} alt="livre les vents de l'existence"/>
      </div>
    </div>
  )
}

export default Vents;
