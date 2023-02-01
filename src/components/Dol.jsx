import React from "react";
import { Reveal } from "react-awesome-reveal";
import livredol from "../assets/livredol.png";

function Dol() {
  return (
    <div className="flex flex-row lg:m-10 lg:p-10 md:p-2 md:m-2 sm:p-2 sm:m-2">
      <div className="w-2/3 md:flex-col sm:flex-col">
        <Reveal>
          <h2 className="text-3xl font-bold text-secondary font-yeseva">
            Les dangers de la lumière
          </h2>
        </Reveal>
        <h3 className="font-bold text-xl font-josefin m-2 p-2">
          Genre : romance musicale
        </h3>
        <p className="font-josefin text-xl">
          Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas
          vivre et qui rêve d'être ingénieur lumière. Dans une époque où la
          jeunesse subit trop de contraintes, elle peine à faire entendre sa
          voix. Lassée de cette société, elle fuit en Provence où des rencontres
          hautes en couleur et des opportunités l'attendent...
        </p>
        <p className="font-josefin text-xl">
          L'une veut atteindre la lumière, au risque de se brûler les ailes.
          L'autre se complaît dans l'ombre, depuis trop longtemps installée dans
          son âme. Ensemble, dans une ambiance eighties entre clarté et
          obscurité, au rythme des trajets en car entre les villes étapes d'une
          tournée nationale, ils vont tenter d'accéder à la lumière : celle des
          projecteurs, de la célébrité, mais aussi celle que l'on a en nous,
          flamme rageuse ou étincelle timide, dangereuse ou salvatrice.
        </p>
      </div>
      <div className="m-2 p-2 md:p-0 md:m-0 sm:p-0 sm:m-0 flex flex-col items-center">
        <img
          src={livredol}
          alt="Couverture des dangers de la lumière de Wendy Baqué"
          className="w-96 h-72"
        />
        <a href="/Dangersdelalumiere" alt="page Les dangers de la lumière de Wendy Baqué">
          <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
            En savoir plus
          </button>
        </a>
      </div>
    </div>
  );
}

export default Dol;
