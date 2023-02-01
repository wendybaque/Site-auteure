import React from "react";
import { Helmet } from "react-helmet";
import { Reveal } from "react-awesome-reveal";

import livrefdl from "../assets/livrefdl.png";
import ButtonTop from "../components/ButtonTop";

function Fleur() {
  return (
    <div className="bg-bg m-10 p-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>La fleur de l'âge</title>
        <link
          rel="canonical"
          href="https://site-auteure.vercel.app/Fleurdelage"
        />
      </Helmet>
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-col m-2 p-2 lg:w-1/2">
          <Reveal>
            <h2 className="text-3xl font-bold text-secondary font-yeseva">
              La fleur de l'âge
            </h2>
          </Reveal>
          <h3 className="text-lg font-bold font-josefin mt-8">
            Genre : roman feel-good
          </h3>
          <p className="italic text-l font-josefin tracking-tight p-4 dark:text-white">
            « Bonjour, je m'appelle Benjamin et je suis musicien. Je viens vous
            chanter une petite chanson pour espérer vous faire du bien . »
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Cette phrase, Benjamin Leduc, bénévole de l’association Hospit’Art,
            la prononce à chaque fois qu’il entre dans une chambre du service de
            soins palliatifs d’une clinique tourangelle. En général, les
            patients l’accueillent avec enthousiasme et se prennent au jeu,
            oubliant un temps la maladie et la mort. En général, seulement. Car
            Marcelle Bourget, quatre-vingt-un ans et toute sa tête (et toutes
            ses dents aussi !) reste muette face à tous ses efforts.
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Pourtant, les yeux de la vieille dame brillent dès qu’on lui parle
            de musique. Rongé par un mal qui l’entrave, mais déterminé, le jeune
            homme est prêt à tout pour percer les secrets de l’aînée. Prêt à
            tout, même à remettre en question toute sa vie.
          </p>
          <p className="text-l font-josefin tracking-tight p-4 dark:text-white">
            Et si la rencontre avec la patiente en fin de vie et ce trentenaire
            qui cherche sa voie était le commencement d’une belle histoire
            bercée par la musique ?
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={livrefdl} alt="livre la fleur de l'âge" />
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
          <div className="block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
          <div className="block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
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
      <section id="buy" aria-label="Boutons d'achat">
        <div className="lg:flex lg:flex-row justify-center align-center m-2 p-2">
          <a
            href="https://www.amazon.fr/fleur-l%C3%A2ge-Wendy-Baqu%C3%A9/dp/B09NZJY2ND/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=324WQ7J04X56R&keywords=la+fleur+de+l%27age+wendy+baqu%C3%A9&qid=1641041100&sprefix=la+fleur+de+l%27age+wendy+baqu%C3%A9%2Caps%2"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Amazon (ebook et broché)
            </button>
          </a>
          <a
            href="https://www.bookelis.com/romans/49342-La-fleur-de-l-age.html"
            alt="La fleur de l'âge sur Bookelis"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              {" "}
              Acheter sur Bookelis (ebook et broché)
            </button>
          </a>
          {/* <a
          href="https://www.kobo.com/fr/fr/ebook/la-fleur-de-l-age"
          alt="La fleur de l'âge sur Kobo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
            Acheter sur Kobo et abonnement Kobo + (ebook)
          </button>
        </a> */}
          <a
            href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0%211&Search=la+fleur+de+l%27%C3%A2ge+wendy+baqu%C3%A9&sft=1&sa=0"
            alt="La fleur de l'âge sur la FNAC"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur la Fnac (ebook et broché)
            </button>
          </a>
          <a
            href="https://fr.shopping.rakuten.com/offer/buy/7805339184/la-fleur-de-l-age-format-beau-livre.html"
            alt="La fleur de l'âge sur Rakuten"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Rakuten (broché)
            </button>
          </a>
        </div>
      </section>
      <ButtonTop />
    </div>
  );
}

export default Fleur;
