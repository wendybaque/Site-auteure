import React from 'react'
import { Reveal } from "react-awesome-reveal";
import livrevdl from "../assets/livrevdl.png";

function Vdl() {
  return (
    <div className="lg:flex lg:flex-row m-2 p-2">
       <div className="lg:w-3/5 md:w-full sm:w-full m-2 p-2">
        <Reveal>
          <h2 className='text-3xl font-bold text-secondary font-yeseva'>Les vents de l'existence</h2>
        </Reveal>
        <h3 className='font-bold m-2 p-2'>Genre : roman contemporain à dimension sociologique</h3>
        <p className='font-bold'>Proche de la trentaine, Joanne, sociologue émérite, est de ces personnes dont on pourrait dire qu’elles ont réussi leur vie. Et pourtant… Tout s’écroule pour la jeune femme le jour où elle apprend brutalement le suicide de Lucas, son parrain. En héritage, il lui laisse l’Ultimo Respiro, la maison qu’il avait achetée et rénovée afin de finir ses jours à La Turballe, en Loire Atlantique. Elle y retourne alors, d’abord pour des raisons administratives, puis se questionne sur les circonstances du décès de son parrain...</p>
        <p className='font-bold'>Ses vieux démons refont surface, l’interrogeant tant sur la mort que sur la vie, et mettent à mal le sens que l’endeuillée avait attribué à son existence. Elle fait la connaissance de Damien Lasareigne qui, avec ses idées artistiques et révoltées, lui fera voir la vie sous d’autres facettes. Ces événements de vie la forceront à affronter ses peurs, ses proches et à faire valoir qui elle est réellement. Alors qu’autour d’elle, tout est question de mort et de finitude, pour elle, tout commence, tout est renouveau.</p>
        <a href="/Ventsdelexistence" alt="page les vents de l'existence"><button class="hover:animate-bounce m-2 p-2">En savoir plus</button></a>
      </div>
      <div className='m-2 p-2'>
        <img src={livrevdl} alt="couverture des dangers de la lumière" className='w-96 h-72'/>
      </div>
    </div>
  );
}

export default Vdl;