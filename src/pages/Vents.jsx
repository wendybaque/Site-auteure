import React from "react";
import { Helmet } from "react-helmet";
import { Reveal } from "react-awesome-reveal";

import livrevdl from "../assets/livrevdl.png";
import ButtonTop from "../components/ButtonTop";

function Vents() {
  return (
    <div className="bg-bg m-10 p-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les vents de l'existence</title>
        <link
          rel="canonical"
          href="https://site-auteure.vercel.app/Ventsdelexistence"
        />
      </Helmet>
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-col m-2 p-2 lg:w-1/2 ">
          <Reveal>
            <h2 className="text-3xl font-bold text-secondary font-yeseva">
              Les vents de l'existence
            </h2>
          </Reveal>
          <h3 className="m-2 p-2 font-bold">
            Genre : roman contemporain à dimension sociologique
          </h3>
          <p className="m-2 p-2 font-bold">
            Proche de la trentaine, Joanne, sociologue émérite, est de ces
            personnes dont on pourrait dire qu’elles ont réussi leur vie.
          </p>
          <p className="m-2 p-2 font-bold">
            Et pourtant… Tout s’écroule pour la jeune femme le jour où elle
            apprend brutalement le suicide de Lucas, son parrain. En héritage,
            il lui laisse l’Ultimo Respiro, la maison qu’il avait achetée et
            rénovée afin de finir ses jours à La Turballe, en Loire Atlantique.
            Elle y retourne alors, d’abord pour des raisons administratives,
            puis se questionne sur les circonstances du décès de son parrain.
          </p>
          <p className="m-2 p-2 font-bold">
            Ses vieux démons refont surface, l’interrogeant tant sur la mort que
            sur la vie, et mettent à mal le sens que l’endeuillée avait attribué
            à son existence. Elle fait la connaissance de Damien Lasareigne qui,
            avec ses idées artistiques et révoltées, lui fera voir la vie sous
            d’autres facettes. Ces événements de vie la forceront à affronter
            ses peurs, ses proches et à faire valoir qui elle est réellement.
            Alors qu’autour d’elle, tout est question de mort et de finitude,
            pour elle, tout commence, tout est renouveau.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={livrevdl} alt="livre les vents de l'existence" />
        </div>
      </div>
      <section id="testimonials">
        <div class="mb-8 text-center m-2 p-2">
          <h2 class="text-3xl font-bold text-secondary font-yeseva">
            Témoignages
          </h2>
          <p class="text-lg text-gray-600 font-bold">
            Quelques mots des lecteurs...
          </p>
        </div>
        <div class="lg:grid lg:grid-cols-4 lg:gap-x-2 m-2 p-2">
          <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
            <div class="mb-2">
              <p class="mb-2 text-center text-gray-600 font-bold">
                "Bien que le sujet principal soit assez lourd émotionnellement,
                c'est une pépite. Aborder la mort et le droit à mourir dignement
                n'est pas une mince affaire et pourtant Wendy l'a fait avec une
                infinie douceur. Alors, évidemment, j'ai versé des larmes. Les
                démons qui hantent Joanne ne laissent pas insensible. Mais au
                delà de ça, il est question de vie. De ce droit à chacun de
                vivre comme il l'entend, de partager notre vie avec qui l'on
                veut et comme on veut. Et que l'amour se cache sous bien des
                formes, il faut savoir simplement aller au delà des apparences."
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/41J980YGlSL._SX195_.jpg"
                    alt="couverture des Vents de l'existence"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 class="font-bold font-josefin">Noélie</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
              </div>
            </div>
          </div>
          <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
            <div class="mb-2">
              <p class="mb-2 text-center text-gray-600 font-bold">
                "Ce livre est un roman engagé. Engagé sur la mort, l'avortement,
                le suicide, les jugements. Des sujets abordés encore trop peu
                parlés, qu'elle aborde avec respect et bienveillance. La plume
                de Wendy est entraînante et douce. Elle prend parti sur
                certaines choses à travers Damien mais le fait avec tolérance et
                le respect. Elle n'impose pas son point de vue. "
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/41J980YGlSL._SX195_.jpg"
                    alt="couverture des Vents de l'existence"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 class="font-bold font-josefin">Farah</h5>
                <p class="text-sm text-gray-600">
                  Les trouvailles littéraires de Farah
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
            <div class="mb-2">
              <p class="mb-2 text-center text-gray-600 font-bold">
                "J'ai aimé découvrir la relation entre nos deux personnages, ses
                prémices, sa construction à travers les échanges, les
                sentiments, et les difficultés, tout est toujours justement posé
                et pensé pour nous émouvoir à point nommé. La part belle du
                roman revient aussi à cette vision de notre société
                d'aujourd'hui, individualiste, néolibérale, et à aider le
                lecteur, tout comme les personnages à trouver sa place, à savoir
                avancer, à apprendre à conjuguer les tourments de la vie avec
                ses bonheurs, et à s'accepter malgré la pression sociale et
                normative."
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/41J980YGlSL._SX195_.jpg"
                    alt="couverture des Vents de l'existence"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 class="font-bold font-josefin ">Kazcook</h5>
                <p class="text-sm text-gray-600">La Kaza de Papel</p>
              </div>
            </div>
          </div>
          <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
            <div class="mb-2">
              <p class="mb-2 text-center text-gray-600 font-bold">
                "J’ai eu le plaisir de découvrir une très belle histoire à
                travers ce livre. L’auteure essaye de faire passer un message
                dans notre société encore très fermée d’esprit. Ce roman mène à
                la réflexion et au questionnement sur la vie, la mort,
                l’amour... C’est un roman très touchant, voir bouleversant. Je
                recommande sans modération ! "
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/41J980YGlSL._SX195_.jpg"
                    alt="couverture des Vents de l'existence"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 class="font-bold font-josefin">Marine</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:flex lg:flex-row justify-center align-center m-2 p-2">
        <a
          href="https://www.amazon.fr/Vents-lExistence-Wendy-Baqu%C3%A9-ebook/dp/B07XL9FK89"
          alt="Les vents de l'existence sur Amazon"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex justify-center">
            Acheter sur Amazon (ebook, broché et relié)
          </button>
        </a>
        <a
          href="https://www.bookelis.com/romans/47435-Les-Vents-de-l-Existence.html/"
          alt="Les vents de l'existence sur Bookelis"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex justify-center">
            Acheter sur Bookelis (ebook et broché)
          </button>
        </a>
        <a
          href="https://www.kobo.com/fr/fr/search?query=les+vents+de+l%27existence"
          alt="Les vents de l'existence sur Kobo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex justify-center">
            Acheter sur Kobo et abonnement Kobo + (ebook)
          </button>
        </a>
      </div>
      <ButtonTop />
    </div>
  );
}

export default Vents;
