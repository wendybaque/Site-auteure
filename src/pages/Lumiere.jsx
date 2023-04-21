import React from "react";
import { Helmet } from "react-helmet";
import { Reveal } from "react-awesome-reveal";

import livredol from "../assets/livredol.webp";
import ButtonTop from "../components/ButtonTop";

import StarIcon from "@mui/icons-material/Star";

function Lumiere() {
  return (
    <div className="bg-bg lg:m-10 p-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les dangers de la Lumière</title>
        <link
          
          href="https://wendybaqueauteure.wendev.fr/Dangersdelalumiere"
        />
      </Helmet>
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-col m-2 p-2 lg:w-1/2">
          <Reveal>
            <h2 className="text-3xl font-bold text-secondary font-yeseva">
              Les dangers de la lumière
            </h2>
          </Reveal>
          <h3 className="text-lg font-bold font-josefin mt-8">
            Genre : romance musicale
          </h3>
          <p className="font-josefin tracking-tight p-4 dark:text-white">
            Alice est une sorte de punk désabusée par une vie qu'elle ne veut
            pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où
            la jeunesse subit trop de contraintes, elle peine à faire entendre
            sa voix. Lassée de cette société, elle fuit en Provence où des
            rencontres hautes en couleur et des opportunités l'attendent.
          </p>
          <p className="font-josefin tracking-tight p-4 dark:text-white">
            En parallèle, Gabriel, vedette à succès de la chanson française, est
            atteint de la « maladie de la tristesse ». Affrontant ses démons qui
            émanent chaque soir sur scène de son emblématique guitare bleue, il
            lutte contre lui-même et ce monde du show-business par lequel il est
            complètement dépassé.
          </p>
          <p className="font-josefin tracking-tight p-4 dark:text-white">
            L'une veut atteindre la lumière, au risque de se brûler les ailes.
            L'autre se complaît dans l'ombre, depuis trop longtemps installée
            dans son âme. Ensemble, dans une ambiance eighties entre clarté et
            obscurité, au rythme des trajets en car entre les villes étapes
            d'une tournée nationale, ils vont tenter d'accéder à la lumière :
            celle des projecteurs, de la célébrité, mais aussi celle que l'on a
            en nous, flamme rageuse ou étincelle timide, dangereuse ou
            salvatrice.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={livredol} alt="livre les dangers de la lumière" />
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
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Deux vies. Deux destins.
            </h5>
            <p className="font-josefin dark:text-gray-400">
              Deux vies. Deux destins. D’un côté Alice qui s’adonne à
              l’éclairage scénique du groupe de son petit copain et qui rêve
              d’être ingénieure lumière mais qui perd à la fois son amour et ses
              illusions en ratant son BAC. De l’autre, une vedette étincelante
              sous les projecteurs de la scène qui devient un homme en
              souffrance s’enfonçant de plus en plus dans son mal être aussitôt
              les lumières éteintes. Quel secret enfoui refait surface chaque
              soir pour hanter et détruire cet ange déchu ?
            </p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Une claque monumentale
            </h5>
            <p className="font-josefin dark:text-gray-400">
              Si je pouvais mettre plus de cinq étoiles à ce roman, je le ferai
              sans hésiter ! Comme chaque fois que je lis les mots de Wendy, je
              suis partagée entre mille émotions. La rage d'Alice est devenue
              mienne, le mal-être de Gabriel m'a fendu le cœur. C'est bien
              simple, j'y étais. Dans leur monde, dans leurs têtes, dans leurs
              âmes. J'ai ri, j'ai souri, j'ai pleuré. J'entendais les chansons,
              je traversais les même paysages. Ces années punk, j'y étais à
              travers Alice et Gabriel. Encore une fois, Wendy aborde des thèmes
              lourds aux yeux de la société, les pose avec douceur malgré leur
              dureté. Encore une fois, elle en met plein les yeux et le cœur.
              C'est une claque monumentale.
            </p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden block max-w-sm p-6 bg-primary rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="font-josefin mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Un roman qui donne envie de danser le pogo dans une fosse de salle
              de concert !
            </h5>
            <p className="font-josefin dark:text-gray-400">
              Ecrire et partager une histoire qui se déroule dans les années 80
              était un pari risqué, mais réussi avec justesse et originalité par
              Wendy. Elle se démarque encore une fois des clichés du genre et
              sort des sentiers battus en nous proposant un roman hors du commun
              ! Son style est toujours là, inimitable, percutant et incisif,
              mais surtout réaliste et rempli d'émotions qu'elle décrit très
              bien. C'est comme si on y était !
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
          <p className="ml-2 text-sm font-medium dark:text-white">4,7 sur 5</p>
        </div>
        <p className="font-medium font-josefin text-lg dark:text-gray-400">
          16 évaluations
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
              style={{ width: "35%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">35%</span>
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
          <span className="text-sm font-medium  dark:text-blue-500">0%</span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium  dark:text-blue-500">
            2 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "0%" }}
            ></div>
          </div>
          <span className="text-sm font-medium  dark:text-blue-500">
            0%
          </span>
        </div>
        <div className="flex justify-center w-full items-center mt-4">
          <span className="text-sm font-medium text-primary dark:text-blue-500">
            1 <StarIcon />
          </span>
          <div className="w-2/4 h-5 mx-4 bg-primary rounded dark:bg-gray-700">
            <div
              className="h-5 bg-secondary rounded"
              style={{ width: "0%" }}
            ></div>
          </div>
          <span className="text-sm font-medium dark:text-blue-500">0%</span>
        </div>
      </section>
      <section id="buy" aria-label="Boutons d'achat">
        <div className="lg:flex lg:flex-row justify-center align-center m-2 p-2">
          <a
            href="https://www.amazon.fr/gp/product/B09CB2TY1T/ref=dbs_a_def_rwt_bibl_vppi_i0"
            alt="Les dangers de la lumière sur Amazon"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur Amazon et abonnement Kindle (ebook et broché)
            </button>
          </a>
          <a
            href="https://www.plumesdemimieditions.fr/boutique/les-dangers-de-la-lumiere/"
            alt="Les dangers de la lumière sur Plumes de Mimi éditions"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
              Acheter sur le site de la maison d'édition (broché + box)
            </button>
          </a>
          {/* <a
          href="https://www.kobo.com/fr/fr/ebook/les-dangers-de-la-lumiere"
          alt="Les dangers de la lumière sur Kobo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg">
            Acheter sur Kobo et abonnement Kobo + (ebook)
          </button>
        </a> */}
          <a
            href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=les+dangers+de+la+lumi%C3%A8re+wendy+baqu%C3%A9&sft=1&sa=0"
            alt="Les dangers de la lumière sur Rakuten"
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

export default Lumiere;
