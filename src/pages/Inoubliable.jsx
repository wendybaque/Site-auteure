import React from "react";
import { Helmet } from "react-helmet";
import { Reveal } from "react-awesome-reveal";

import livreis from "../assets/livreis.png";
import ButtonTop from "../components/ButtonTop";

function Inoubliable() {
  return (
    <div className="bg-bg m-10 p-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inoubliable symphonie</title>
        <link
          rel="canonical"
          href="https://site-auteure.vercel.app/Inoubliablesymphonie"
        />
      </Helmet>
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-col m-2 p-2 lg:w-1/2">
          <Reveal>
            <h2 className="text-3xl font-bold text-secondary font-yeseva">
              Inoubliable symphonie
            </h2>
          </Reveal>
          <h3 className="m-2 p-2 font-bold">Genre : romance musicale</h3>
          <p className="m-2 p-2 font-bold">
            Nous vivons dans un monde où aimer qui l’on veut n’est pas
            acceptable à cause d’une trop grande différence d’âge, de revenu
            financier ou de rang social. Un monde où la musique reste parfois
            incomprise, où la beauté fait défaut. Un monde où les apparences
            sont trop souvent trompeuses.
          </p>
          <p className="m-2 p-2 font-bold">
            Avant, je croyais que le sens de la vie, c’était la musique. Mon
            professeur m’a montré que l’amour pouvait aussi valoir la peine
            d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai
            défendu, j’ai cru en lui, je me suis perdue.
          </p>
          <p className="m-2 p-2 font-bold">
            Grâce à Rudyard, cet homme au regard tendre et aux valeurs nobles,
            j’ai pu réaliser mes rêves les plus controversés. L’espace d’un
            instant, nous nous sommes croisés, nous nous sommes aimés. Nous, qui
            vivions dans des mondes parallèles.
          </p>
          <p className="m-2 p-2 font-bold">
            Notre histoire est celle d’une petite étoile en plastique
            phosphorescente, d’une enquête policière, de parents désabusés, de
            normes sociales chamboulées, d’opéra rock révolté, de drogue
            surdosée, d’amour rejeté et d’amitié à toute épreuve.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={livreis}
            alt="livre inoubliable symphonie"
            className="livre-img"
          />
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
                "Magnifique histoire, bien que triste, merveilleusement ficelée.
                Une plume fabuleuse qui nous transporte. Je viens de refermer ce
                livre, les larmes aux yeux. Merci pour ce moment, Wendy, j'en
                suis ravie. "
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://m.media-amazon.com/images/I/41DHvfDeCdL.jpg"
                    alt="couverture inoubliable symphonie"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 class="font-bold font-josefin">Céline</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
              </div>
            </div>
          </div>
          <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
            <div class="mb-2">
              <p class="mb-2 text-center text-gray-600 font-bold">
                " Ce roman est plus qu'une romance parlant de musique. Le sujet
                principal peut paraître odieux, à vomir: les sentiments d'un
                prof envers une élève. C'est bien plus que ça. Cette histoire
                interdite est le fil conducteur du roman. Mais, si vous
                connaissez les écrits de Wendy, vous vous doutez que ce n'est
                pas le seul sujet abordé. Comme d'habitude, c'est une auteure
                qui casse les codes. Et plutôt que de pointer du doigt et de
                dénoncer les choses (d'une certaine manière, elle le fait mais
                c'est subtil) elle amène le lecteur a des réflexions et c'est
                vraiment ce que j'aime chez elle."
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://m.media-amazon.com/images/I/41DHvfDeCdL.jpg"
                    alt="couverture inoubliable symphonie"
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
                " Ce livre est clairement un chef-d'œuvre. Qu'on l'aime ou pas,
                il restera dans notre tête et dans notre cœur. De part son sujet
                déjà : une histoire interdite, un sujet encore tabou dans la
                société et pour beaucoup de monde et par toutes les questions
                qu'on est amené nous aussi à se poser au fur et à mesure de
                l'histoire. "
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://m.media-amazon.com/images/I/41DHvfDeCdL.jpg"
                    alt="couverture inoubliable symphonie"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 class="font-bold font-josefin">Aurore</h5>
                <p class="text-sm text-gray-600">Les lectures d'Aurore</p>
              </div>
            </div>
          </div>
          <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
            <div class="mb-2">
              <p class="mb-2 text-center text-gray-600 font-bold">
                "On pourrait croire à un amour dérangeant, mais l'auteur
                parvient subtilement à le rendre beau, poétique, dépourvu du
                côté sexuel. Un amour qui n'a pas été choisi mais qui s'est
                imposé de lui même comme une évidence aux protagonistes qui
                étaient tous deux en souffrance avant leur rencontre. Wendy
                traite avec intelligence des sujets de société dont une relation
                majeur/mineur, la drogue et ses dérives, les classes sociales et
                leurs idées formatées. C'est un roman poignant et percutant qui
                m'a émue."
              </p>
              <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://m.media-amazon.com/images/I/41DHvfDeCdL.jpg"
                    alt="couverture inoubliable symphonie"
                    class="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 class="font-bold font-josefin">Dévoreuse de livres</h5>
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
          href="https://www.amazon.fr/Inoubliable-symphonie-Wendy-Baqu%C3%A9-ebook/dp/B086HRNZP8/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=27WOUZX5N2BVL&keywords=wendy+baqu%C3%A9&qid=1654498269&sprefix=wendy+baqu%C3%A9%2Caps%2C110&sr=8-4"
          alt="Inoubliable symphonie sur Amazon"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex justify-center">
            Acheter sur Amazon et abonnement Kindle (ebook et broché)
          </button>
        </a>
        <a
          href="https://www.plumesdemimieditions.fr/boutique/inoubliable-symphonie/"
          alt="Inoubliable symphonie sur Plumes de Mimi"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" flex justify-center">
            Acheter sur le site de la maison d'édition (broché + box)
          </button>
        </a>
        <a
          href="https://www.kobo.com/fr/fr/ebook/inoubliable-symphonie"
          alt="Inoubliable symphonie sur Kobo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex justify-center">
            Acheter sur Kobo et abonnement Kobo + (ebook)
          </button>
        </a>
        <a
          href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=inoubliable+symphonie+wendy+baqu%C3%A9&sft=1&sa=0"
          alt="Inoubliable symphonie sur FNAC"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex justify-center">
            Acheter sur la Fnac (ebook et broché)
          </button>
        </a>
        <a
          href="https://wendybaqueauteur.wixsite.com/website"
          alt="blog path"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Retrouvez mes romances dans les boxs livresques Plumes de Mimi
          </button>
        </a>
      </div>
      <ButtonTop />
    </div>
  );
}

export default Inoubliable;
