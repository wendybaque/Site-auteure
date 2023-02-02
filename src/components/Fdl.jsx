import React from "react";
import { Reveal } from "react-awesome-reveal";
import livrefdl from "../assets/livrefdl.webp";

function Fdl() {
  return (
    <div className="lg:flex lg:flex-row lg:m-10 p-6">
      <div className="lg:w-2/3 sm:w-full md:w-full">
        <Reveal>
          <h2 className="m-2 p-2 text-3xl font-bold text-secondary font-yeseva">
            La fleur de l'âge
          </h2>
        </Reveal>
        <h3 className="font-bold text-xl font-josefin m-4 p-4">
          Genre : roman contemporain feel-good
        </h3>
        <p className="font-josefin text-xl m-2 p-2">
          <span className="italic">« Bonjour, je m'appelle Benjamin et je suis musicien. Je viens vous
          chanter une petite chanson pour espérer vous faire du bien . »</span> Cette
          phrase, Benjamin Leduc, bénévole de l’association Hospit’Art, la
          prononce à chaque fois qu’il entre dans une chambre du service de
          soins palliatifs d’une clinique tourangelle. En général, les patients
          l’accueillent avec enthousiasme et se prennent au jeu, oubliant un
          temps la maladie et la mort. En général, seulement. Car Marcelle
          Bourget, quatre-vingt-un ans et toute sa tête (et toutes ses dents
          aussi !) reste muette face à tous ses efforts.
        </p>
        <p className="font-josefin text-xl m-2 p-2">
          Pourtant, les yeux de la vieille dame brillent dès qu’on lui parle de
          musique. Rongé par un mal qui l’entrave, mais déterminé, le jeune
          homme est prêt à tout pour percer les secrets de l’aînée. Prêt à tout,
          même à remettre en question toute sa vie. Et si la rencontre avec la
          patiente en fin de vie et ce trentenaire qui cherche sa voie était le
          commencement d’une belle histoire bercée par la musique ?
        </p>

      </div>
      <div className="m-2 p-2 md:p-0 md:m-0 sm:p-0 sm:m-0 flex flex-col items-center">
        <img
          src={livrefdl}
          alt="couverture de La fleur de l'âge de Wendy Baqué"
          className="w-96 h-72"
        />
                <a href="/Fleurdelage" alt="redirection vers la page La fleur de l'âge de Wendy Baqué">
          <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
            En savoir plus
          </button>
        </a>
      </div>
    </div>
  );
}

export default Fdl;
