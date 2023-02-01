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
      <section
        className="flex flex-col justify-center items-center m-10 pt-8"
        id="rating"
        aria-label="barême des avis sur le livre, basé sur les évaluations Amazon en 2023"
      >
        <div className="flex items-center mb-3">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-stars"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-stars"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-stars"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-stars"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            4.95 out of 5
          </p>
        </div>
        <p className="text-sm font-medium  dark:text-gray-400">
          1,745 global ratings
        </p>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            5 star
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "70%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            70%
          </span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            4 star
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "17%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            17%
          </span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            3 star
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "8%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            8%
          </span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            2 star
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "4%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-primary dark:text-blue-500">
            4%
          </span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-primary0 dark:text-blue-500">
            1 star
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            1%
          </span>
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
