import React from "react";
import { Helmet } from "react-helmet";
import { Reveal } from "react-awesome-reveal";

import livrevdl from "../assets/livrevdl.webp";
import ButtonTop from "../components/ButtonTop";

import StarIcon from "@mui/icons-material/Star";

function Vents() {
  return (
    <div className="bg-bg lg:m-10 p-6">
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
          <h3 className="text-lg font-bold font-josefin mt-8">
            Genre : roman contemporain à dimension sociologique
          </h3>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Proche de la trentaine, Joanne, sociologue émérite, est de ces
            personnes dont on pourrait dire qu’elles ont réussi leur vie.
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Et pourtant… Tout s’écroule pour la jeune femme le jour où elle
            apprend brutalement le suicide de Lucas, son parrain. En héritage,
            il lui laisse l’Ultimo Respiro, la maison qu’il avait achetée et
            rénovée afin de finir ses jours à La Turballe, en Loire Atlantique.
            Elle y retourne alors, d’abord pour des raisons administratives,
            puis se questionne sur les circonstances du décès de son parrain.
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
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
      <section id="testimonials" aria-label="Témoignages des lecteurs">
        <div className="mb-8 text-center m-2 p-2">
          <h2 className="text-3xl font-bold text-secondary font-yeseva">
            Témoignages
          </h2>
          <p className="text-lg font-bold font-josefin">
            Quelques mots des lecteurs...
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-x-3 justify-around m-2 p-2">
          <div className="block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              A lire absolument
            </h5>
            <p className="font-josefin  dark:text-gray-400">
              Pourquoi cette peur ? Pourquoi le fait d'en parler est encore
              tabou ? La mort fait peur. Elle nous enlève une partie de soi mais
              nous devrions décider la façon dont nous voudrions mourir. Ce
              livre est un roman engagé. Engagé sur la mort, l'avortement, le
              suicide, les jugements. Des sujets abordés encore trop peu parlés,
              qu'elle aborde avec respect et bienveillance. La plume de Wendy
              est entraînante et douce. Elle prend parti sur certaines choses à
              travers Damien mais le fait avec tolérance et le respect. Elle
              n'impose pas son point de vue.
            </p>
          </div>
          <div className="block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Existentiel
            </h5>
            <p className="font-josefin dark:text-gray-400">
              On suit avec intérêt les chemins de vie de Joanne et Damien. Tous
              deux ont connu une épreuve douloureuse : le décès d’un proche dans
              des contextes différents Un projet commun va les amener à débattre
              s d’un sujet grave : « le droit de se donner la mort. » Avec
              authenticité et conviction, chacun va argumenter sa position à ce
              sujet , s’en suivent des échanges compliqués, passionnés. Ce livre
              a du caractère et émotions et sentiments sont en toile de fond en
              permanence. l’auteur nous interpelle là ; sur une question
              existentielle dont nous évitons souvent d’en débattre par tabou,
              pudeur…
            </p>
          </div>
          <div className="block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Un très beau roman !
            </h5>
            <p className="font-josefin dark:text-gray-400">
              Bien que le sujet principal soit assez lourd émotionnellement,
              c'est une pépite. Aborder la mort et le droit à mourir dignement
              n'est pas une mince affaire et pourtant Wendy l'a fait avec une
              infinie douceur. Alors, évidemment, j'ai versé des larmes. Les
              démons qui hantent Joanne ne laissent pas insensible. Mais au delà
              de ça, il est question de vie. De ce droit à chacun de vivre comme
              il l'entend, de partager notre vie avec qui l'on veut et comme on
              veut. Et que l'amour se cache sous bien des formes, il faut savoir
              simplement aller au delà des apparences.
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
            className="w-5 h-5 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="ml-2 text-sm font-medium dark:text-white">4,2 sur 5</p>
        </div>
        <p className="font-medium font-josefin text-lg dark:text-gray-400">
          29 évaluations
        </p>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium dark:text-blue-500">
            5 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "65%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">65%</span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium dark:text-blue-500">
            4 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "16%" }}
            ></div>
          </div>
          <span className="text-sm font-medium  dark:text-blue-500">16%</span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium  dark:text-blue-500">
            3 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">5%</span>
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
          <span className="text-sm font-medium text-primary dark:text-blue-500">
            0%
          </span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-primary0 dark:text-blue-500">
            1 star
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "13%" }}
            ></div>
          </div>
          <span className="text-sm font-medium  dark:text-blue-500">13%</span>
        </div>
      </section>
      <section id="buy" aria-label="Boutons d'achat">
        <div className="lg:flex lg:flex-row justify-center align-center m-2 p-2">
          <a
            href="https://www.amazon.fr/Vents-lExistence-Wendy-Baqu%C3%A9-ebook/dp/B07XL9FK89"
            alt="Les vents de l'existence sur Amazon"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Amazon (ebook, broché et relié)
            </button>
          </a>
          <a
            href="https://www.bookelis.com/romans/47435-Les-Vents-de-l-Existence.html/"
            alt="Les vents de l'existence sur Bookelis"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Bookelis (ebook et broché)
            </button>
          </a>
          {/* <a
            href="https://www.kobo.com/fr/fr/search?query=les+vents+de+l%27existence"
            alt="Les vents de l'existence sur Kobo"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Kobo et abonnement Kobo + (ebook)
            </button>
          </a> */}
        </div>
      </section>
      <ButtonTop />
    </div>
  );
}

export default Vents;
