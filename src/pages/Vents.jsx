import React from 'react';
import "../pages/livrepage.css";
import livrevdl from "../assets/livrevdl.png";

function Vents() {
  return (
   <div className="livre-wrapper">

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
      <div className='testimonials-livre'>

      </div>

      <div className="flex flex-row flex-wrap">
        <a href="https://www.amazon.fr/Vents-lExistence-Wendy-Baqu%C3%A9-ebook/dp/B07XL9FK89" alt="Les vents de l'existence sur Amazon"><button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Amazon (ebook, broché et relié)</button></a>
        <a href="https://www.bookelis.com/romans/47435-Les-Vents-de-l-Existence.html/" alt="Les vents de l'existence sur Bookelis"><button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Bookelis (ebook et broché)</button></a>
        <a href="https://www.kobo.com/fr/fr/search?query=les+vents+de+l%27existence" alt="Les vents de l'existence sur Kobo"><button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
      </div>

    </div>
  )
}

export default Vents;
