import React from "react";
import { Reveal } from "react-awesome-reveal";
import livreis from "../assets/livreis.webp";

function Is() {
  return (
    <div className="lg:flex lg:flex-row lg:m-10 p-6">
      <div className="lg:w-2/3 sm:w-full md:w-full">
        <Reveal>
          <h2 className="m-2 p-2 text-3xl font-bold text-secondary font-yeseva">
            Inoubliable symphonie
          </h2>
        </Reveal>
        <h3 className="font-bold text-xl font-josefin m-4 p-4">
          Genre : romance musicale
        </h3>
        <p className="font-josefin text-xl m-2 p-2">
          Nous vivons dans un monde où aimer qui l’on veut n’est pas acceptable
          à cause d’une trop grande différence d’âge, de revenu financier ou de
          rang social. Un monde où la musique reste parfois incomprise, où la
          beauté fait défaut. Un monde où les apparences sont trop souvent
          trompeuses. Avant, je croyais que le sens de la vie, c’était la
          musique. Mon professeur m’a montré que l’amour pouvait aussi valoir la
          peine d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai
          défendu, j’ai cru en lui, je me suis perdue.
        </p>
        <p className="font-josefin text-xl m-2 p-2">
          Grâce à Rudyard, cet homme au regard tendre et aux valeurs nobles,
          j’ai pu réaliser mes rêves les plus controversés. L’espace d’un
          instant, nous nous sommes croisés, nous nous sommes aimés. Nous, qui
          vivions dans des mondes parallèles.
        </p>
        <p className="font-josefin text-xl m-2 p-2">
          Notre histoire est celle d’une petite étoile en plastique
          phosphorescente, d’une enquête policière, de parents désabusés, de
          normes sociales chamboulées, d’opéra rock révolté, de drogue surdosée,
          d’amour rejeté et d’amitié à toute épreuve.
        </p>
      </div>
      <div className="m-2 p-2 md:p-0 md:m-0 sm:p-0 sm:m-0 flex flex-col items-center">
        <img
          src={livreis}
          alt="couverture d'Inoubliable symphonie de Wendy Baqué"
          className="w-96"
        />
        <a href="/Inoubliablesymphonie" alt="page Inoubliable symphonie">
          <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
            En savoir plus
          </button>
        </a>
      </div>
    </div>
  );
}

export default Is;
