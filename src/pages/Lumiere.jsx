import React from 'react';
import {Helmet} from "react-helmet";
import livredol from "../assets/livredol.png";
import ButtonTop from '../components/ButtonTop';

function Lumiere() {
  return (
    <div className="bg-slate-100">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Les dangers de la Lumière</title>
                <link rel="canonical" href="https://site-auteure.vercel.app/Dangersdelalumiere" />
        </Helmet>
    <div className='flex flex-row'>
      <div className="flex flex-col m-2 p-2 w-1/2">
        <h2 className='text-3xl font-bold text-blue-700 font-poppins'>Les dangers de la lumière</h2>
        <h3 className='m-2 p-2 font-bold text-blue-700'>Genre : romance musicale</h3>
        <p className='m-2 p-2 font-bold'>Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. Lassée de cette société, elle fuit en Provence où des rencontres hautes en couleur et des opportunités l'attendent.</p>
          <p className='m-2 p-2 font-bold'>En parallèle, Gabriel, vedette à succès de la chanson française, est atteint de la « maladie de la tristesse ». Affrontant ses démons qui émanent chaque soir sur scène de son emblématique guitare bleue, il lutte contre lui-même et ce monde du show-business par lequel il est complètement dépassé.</p>
          <p className='m-2 p-2 font-bold'>L'une veut atteindre la lumière, au risque de se brûler les ailes. L'autre se complaît dans l'ombre, depuis trop longtemps installée dans son âme. Ensemble, dans une ambiance eighties entre clarté et obscurité, au rythme des trajets en car entre les villes étapes d'une tournée nationale, ils vont tenter d'accéder à la lumière : celle des projecteurs, de la célébrité, mais aussi celle que l'on a en nous, flamme rageuse ou étincelle timide, dangereuse ou salvatrice.</p>
      </div>
      <div className="w-1/2">
        <img src={livredol} alt="livre les dangers de la lumière"/>
      </div>
      </div>
      <section id="testimonials">
        <div class="mb-8 text-center m-2 p-2">
    <h2 class="text-3xl font-bold text-blue-700 font-poppins">Témoignages</h2>
    <p class="text-lg text-gray-600 font-bold">Quelques mots des lecteurs...</p>
</div>
<div class="lg:grid lg:grid-cols-4 lg:gap-x-2 m-2 p-2">
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 font-bold">
                "Wendy Baqué nous offre un roman profondément humain qui transpercera les âmes les plus endurcies. Elle nous transmet de très beaux messages avec justesse, humour et sensibilité. "
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg" alt="couverture les dangers de la lumière"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-poppins">Patricia</h5>
                <p class="text-sm text-gray-600">Lecture évasion</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 font-bold">
                "Ecrire et partager une histoire qui se déroule dans les années 80 était un pari risqué, mais réussi avec justesse et originalité par Wendy. Elle se démarque encore une fois des clichés du genre et sort des sentiers battus en nous proposant un roman hors du commun ! Son style est toujours là, inimitable, percutant et incisif, mais surtout réaliste et rempli d'émotions qu'elle décrit très bien. C'est comme si on y était !"
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg" alt="couverture les dangers de la lumière"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-poppins">Judicaël</h5>
                <p class="text-sm text-gray-600">Lecteur</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 font-bold">
                "Une histoire poignante, émouvante, encourageant à réaliser ces rêves quelque soit la difficulté.
Wendy Baqué à su comme à son habitude poser des mots et des situations durs avec une fluidité qui rend la lecture de ces écrits additif. Dans ce livre vous plongez dans l'univers des strass, des déboires, de la maladie,de l'indifférence et des préjugés mais vous trouverez également une fille au caractère bien trempé qui même si elle est paumé, va tout faire pour se relever, accomplir ce qu'elle peut et devenir qui elle veut être vraiment.""
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg" alt="couverture les dangers de la lumière"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-poppins">Marie</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 font-bold">
                "J'ai été attirée par la couverture et le résumé, mais je ne pensais pas être autant prise par l'histoire.
J'ai fait la tournée avec les personnages, ils m'ont complètement emportée.
L'histoire est géniale, on replonge dans les années 80-90 avec la musique qui va bien et le langage...
Bravo à l'auteure et merci pour ce roman."
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg" alt="couverture les dangers de la lumière"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-poppins">Emilie</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
            </div>
        </div>
    </div>
</div>
        </section>

      <div className='flex flex-row justify-center m-2 p-2'>
        <a href="https://www.amazon.fr/gp/product/B09CB2TY1T/ref=dbs_a_def_rwt_bibl_vppi_i0" alt="Les dangers de la lumière sur Amazon"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Amazon et abonnement Kindle (ebook et broché)</button></a>
        <a href="https://www.plumesdemimieditions.fr/boutique/les-dangers-de-la-lumiere/" alt="Les dangers de la lumière sur Plumes de Mimi éditions"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur le site de la maison d'édition (broché + box)</button></a>
        <a href="https://www.kobo.com/fr/fr/ebook/les-dangers-de-la-lumiere" alt="Les dangers de la lumière sur Kobo"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
        <a href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=les+dangers+de+la+lumi%C3%A8re+wendy+baqu%C3%A9&sft=1&sa=0" alt="Les dangers de la lumière sur Rakuten"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur la Fnac (ebook et broché)</button></a>
        <a href="https://wendybaqueauteur.wixsite.com/website" alt="blog path" target="_blank" rel="noreferrer"><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Retrouvez mes romances dans les boxs livresques Plumes de Mimi</button></a>
      </div>
      <ButtonTop />
    </div>
  )
}

export default Lumiere;