import React from "react";
import { Reveal } from "react-awesome-reveal";
import livrevdl from "../assets/livrevdl.webp";

function Vdl() {
  return (
    <div className="lg:flex lg:flex-row lg:m-10 p-6">
      <div className="lg:w-2/3 sm:w-full md:w-full">
        <Reveal>
          <h2 className="m-2 p-2 text-3xl font-bold text-secondary font-yeseva">
            Les vents de l'existence
          </h2>
        </Reveal>
        <h3 className="font-bold text-xl font-josefin m-4 p-4">
          Genre : roman contemporain à dimension sociologique
        </h3>
        <p className="font-josefin text-xl m-2 p-2">
          Proche de la trentaine, Joanne, sociologue émérite, est de ces
          personnes dont on pourrait dire qu’elles ont réussi leur vie. Et
          pourtant… Tout s’écroule pour la jeune femme le jour où elle apprend
          brutalement le suicide de Lucas, son parrain. En héritage, il lui
          laisse l’Ultimo Respiro, la maison qu’il avait achetée et rénovée afin
          de finir ses jours à La Turballe, en Loire Atlantique. Elle y retourne
          alors, d’abord pour des raisons administratives, puis se questionne
          sur les circonstances du décès de son parrain...
        </p>
        <p className="font-josefin text-xl m-2 p-2">
          Ses vieux démons refont surface, l’interrogeant tant sur la mort que
          sur la vie, et mettent à mal le sens que l’endeuillée avait attribué à
          son existence. Elle fait la connaissance de Damien Lasareigne qui,
          avec ses idées artistiques et révoltées, lui fera voir la vie sous
          d’autres facettes. Ces événements de vie la forceront à affronter ses
          peurs, ses proches et à faire valoir qui elle est réellement. Alors
          qu’autour d’elle, tout est question de mort et de finitude, pour elle,
          tout commence, tout est renouveau.
        </p>
      </div>
      <div className="m-2 p-2 md:p-0 md:m-0 sm:p-0 sm:m-0 flex flex-col items-center">
        <img
          src={livrevdl}
          alt="Couverture de Les vents de l'existence de Wendy Baqué"
          className="w-96 h-72"
        />
        <a href="/Ventsdelexistence" alt="Redirection vers la page Les vents de l'existence de Wendy Baqué">
          <button class="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">En savoir plus</button>
        </a>
      </div>
    </div>
  );
}

export default Vdl;
