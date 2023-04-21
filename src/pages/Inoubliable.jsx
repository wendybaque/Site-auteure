import React from "react";
import { Helmet } from "react-helmet";
import { Reveal } from "react-awesome-reveal";

import livreis from "../assets/livreis.webp";
import ButtonTop from "../components/ButtonTop";

import StarIcon from "@mui/icons-material/Star";

function Inoubliable() {
  return (
    <div className="bg-bg lg:m-10 p-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inoubliable symphonie</title>
        <link
         
          href="https://wendybaqueauteure.wendev.fr/Inoubliablesymphonie"
        />
      </Helmet>
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-col m-2 p-2 lg:w-1/2">
          <Reveal>
            <h2 className="text-3xl font-bold text-secondary font-yeseva">
              Inoubliable symphonie
            </h2>
          </Reveal>
          <h3 className="text-lg font-bold font-josefin mt-8">
            Genre : romance musicale
          </h3>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Nous vivons dans un monde où aimer qui l’on veut n’est pas
            acceptable à cause d’une trop grande différence d’âge, de revenu
            financier ou de rang social. Un monde où la musique reste parfois
            incomprise, où la beauté fait défaut. Un monde où les apparences
            sont trop souvent trompeuses.
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Avant, je croyais que le sens de la vie, c’était la musique. Mon
            professeur m’a montré que l’amour pouvait aussi valoir la peine
            d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai
            défendu, j’ai cru en lui, je me suis perdue.
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Grâce à Rudyard, cet homme au regard tendre et aux valeurs nobles,
            j’ai pu réaliser mes rêves les plus controversés. L’espace d’un
            instant, nous nous sommes croisés, nous nous sommes aimés. Nous, qui
            vivions dans des mondes parallèles.
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
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
      <section id="testimonials" aria-label="Témoignages des lecteurs">
        <div className="mb-8 text-center m-2 p-2">
          <h2 className="text-3xl font-bold text-secondary font-yeseva">
            Témoignages
          </h2>
          <p className="text-lg font-bold font-josefin">
            Quelques mots des lecteurs...
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-x-3 justify-around m-2 p-2">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5
              className="font-josefin mb-2 text-2xl font-bold tracking-tight 
             dark:text-white"
            >
              Une histoire d'amour non conventionnel
            </h5>
            <p className="font-josefin  dark:text-gray-400">
              Dans ce roman, nous sommes face à une histoire d'amour tragique
              (no spoil, on le sait dès de début). Une romance interdite,
              d'autant plus choquante de nos jours, j'ai l'impression. Ceci dit,
              le roman ne glorifie pas cette relation inhabituelle. D'ailleurs,
              je tiens à rappeler qu'elle demeure assez chaste. Il ne se passe
              quasiment rien. Le roman est à deux voix et permet au lecteur de
              connaître les sentiments de chacun. June ne cherche qu'à faire de
              la musique. Rudy, en revanche, est un peu perdu. Torturé, il a un
              passé de drogué, et en plus il se fait trop de films avec cette
              gamine, ce qui le trouble davantage.
            </p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bouleversant
            </h5>
            <p className="font-josefin dark:text-gray-400">
              Magnifique histoire, bien que triste, merveilleusement ficelée.
              Une plume fabuleuse qui nous transporte. Je viens de refermer ce
              livre, les larmes aux yeux. Merci pour ce moment, Wendy, j'en suis
              ravie.
            </p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Coup de coeur
            </h5>
            <p className="font-josefin dark:text-gray-400">
              Inoubliable symphonie est une véritable ode à la vie et à ce
              qu'elle peut avoir de plus beau, comme de plus mauvais. Deux êtres
              que tout oppose, tant dans leurs âges, leurs modes de vie, leur
              avenir mais qu'une même passion anime. J'ai aimé parcourir les
              rues de Paris, entendre le son du violon de June, imaginé les
              mains de Rudy sur son piano, parfois incompris les liens qui les
              unissaient, parfois compatis à cet amour impossible et rêvé avec
              cette gamine de son opéra-rock. C'est le troisième roman que je
              lis de Wendy et, comme pour les autres, c'est un véritable coup de
              cœur, ou un coup en plein cœur.
            </p>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center lg:m-10 pt-8"
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
            className="w-5 h-5 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="ml-2 text-sm font-medium dark:text-white dark:text-white">
            4 sur 5
          </p>
        </div>
        <p className="font-medium font-josefin text-lg dark:text-gray-400">
          22 évaluations
        </p>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium dark:text-blue-500">
            5 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "64%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">64%</span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium dark:text-blue-500">
            4 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "14%" }}
            ></div>
          </div>
          <span className="text-sm font-medium  dark:text-blue-500">14%</span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium dark:text-blue-500">
            3 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "0%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">0%</span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium dark:text-blue-500">
            2 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "0%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">
            0%
          </span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-primary0 dark:text-blue-500">
            1 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "22%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">22%</span>
        </div>
      </section>
      <section id="buy" aria-label="Boutons d'achat">
        <div className="lg:flex lg:flex-row justify-center align-center m-2 p-2">
          <a
            href="https://www.amazon.fr/Inoubliable-symphonie-Wendy-Baqu%C3%A9-ebook/dp/B086HRNZP8/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=27WOUZX5N2BVL&keywords=wendy+baqu%C3%A9&qid=1654498269&sprefix=wendy+baqu%C3%A9%2Caps%2C110&sr=8-4"
            alt="Inoubliable symphonie sur Amazon"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Amazon et abonnement Kindle (ebook et broché)
            </button>
          </a>
          <a
            href="https://www.plumesdemimieditions.fr/boutique/inoubliable-symphonie/"
            alt="Inoubliable symphonie sur Plumes de Mimi"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur le site de la maison d'édition (broché + box)
            </button>
          </a>
          <a
            href="https://www.kobo.com/fr/fr/ebook/inoubliable-symphonie"
            alt="Inoubliable symphonie sur Kobo"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Kobo et abonnement Kobo + (ebook)
            </button>
          </a>
          <a
            href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=inoubliable+symphonie+wendy+baqu%C3%A9&sft=1&sa=0"
            alt="Inoubliable symphonie sur FNAC"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur la Fnac (ebook et broché)
            </button>
          </a>
          <a
            href="https://www.plumesdemimieditions.fr/boutique/nos-box/"
            alt="blog path"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg"
            >
              Retrouvez mes romances dans les boxs livresques Plumes de Mimi
            </button>
          </a>
        </div>
      </section>
      <ButtonTop />
    </div>
  );
}

export default Inoubliable;
