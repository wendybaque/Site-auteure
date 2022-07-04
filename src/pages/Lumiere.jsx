import React from 'react';
import livredol from "../assets/livredol.png";

function Lumiere() {
  return (
    <div className="bg-slate-100">
    <div className='flex flex-row'>
      <div className="flex flex-col m-2 p-2 w-1/2">
        <h2 className='text-3xl font-bold text-blue-700 font-mono'>Les dangers de la lumière</h2>
        <h3 className='m-2 p-2 font-bold text-blue-700'>Genre : romance musicale</h3>
        <p className='m-2 p-2'>Alice est une sorte de punk désabusée par une vie qu'elle ne veut pas vivre et qui rêve d'être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. Lassée de cette société, elle fuit en Provence où des rencontres hautes en couleur et des opportunités l'attendent.
          En parallèle, Gabriel, vedette à succès de la chanson française, est atteint de la « maladie de la tristesse ». Affrontant ses démons qui émanent chaque soir sur scène de son emblématique guitare bleue, il lutte contre lui-même et ce monde du show-business par lequel il est complètement dépassé.
          L'une veut atteindre la lumière, au risque de se brûler les ailes. L'autre se complaît dans l'ombre, depuis trop longtemps installée dans son âme. Ensemble, dans une ambiance eighties entre clarté et obscurité, au rythme des trajets en car entre les villes étapes d'une tournée nationale, ils vont tenter d'accéder à la lumière : celle des projecteurs, de la célébrité, mais aussi celle que l'on a en nous, flamme rageuse ou étincelle timide, dangereuse ou salvatrice.</p>
      </div>
      <div className="w-1/2">
        <img src={livredol} alt="livre les dangers de la lumière"/>
      </div>
      </div>
      <section id="testimonials">
        <div class="mb-8 text-center m-2 p-2">
    <h2 class="text-3xl font-bold text-blue-700 font-mono">Témoignages</h2>
    <p class="text-lg text-gray-600">Quelques mots des lecteurs...</p>
</div>
<div class="lg:grid lg:grid-cols-4 lg:gap-x-2 m-2 p-2">
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
                " Wendy Baqué nous offre un roman profondément humain qui transpercera les âmes les plus endurcies. Elle nous transmet de très beaux messages avec justesse, humour et sensibilité. "
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg" alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Patricia</h5>
                <p class="text-sm text-gray-600">Lecture évasion</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
                " Aucune surprise pour ce livre de Wendy Baqué qui reste dans la veine de mes ressentis précédents, j'ai plus qu'adoré et l'auteure s'installe durablement dans mes « indispensables ». "
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://m.media-amazon.com/images/I/41e2MG0aGxL._SX195_.jpg" alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Robin</h5>
                <p class="text-sm text-gray-600">Les lectures de Florelle et Robin</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
                " Ce livre est clairement un chef-d'œuvre. Qu'on l'aime ou pas, il restera dans notre tête et dans notre cœur. De part son sujet déjà : une histoire interdite, un sujet encore tabou dans la société et pour beaucoup de monde et par toutes les questions qu'on est amené nous aussi à se poser au fur et à mesure de l'histoire. "
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Inoubliable-symphonie_9306.jpg" alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Aurore</h5>
                <p class="text-sm text-gray-600">Les lectures d'Aurore</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
                " J’ai eu le plaisir de découvrir une très belle histoire à travers ce livre. L’auteure essaye de faire passer un message dans notre société encore très fermée d’esprit. Ce roman mène à la réflexion et au questionnement sur la vie, la mort, l’amour... C’est un roman très touchant, voir bouleversant. Je recommande sans modération ! "
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/41J980YGlSL._SX195_.jpg" alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Marine</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
            </div>
        </div>
    </div>
</div>
        </section>

      <div className='flex flex-row justify-center m-2 p-2'>
        <a href="https://www.amazon.fr/gp/product/B09CB2TY1T/ref=dbs_a_def_rwt_bibl_vppi_i0" alt="Les dangers de la lumière sur Amazon"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Amazon et abonnement Kindle (ebook et broché)</button></a>
        <a href="https://www.plumesdemimieditions.fr/boutique/les-dangers-de-la-lumiere/" alt="Les dangers de la lumière sur Plumes de Mimi éditions"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur le site de la maison d'édition (broché + box)</button></a>
        <a href="https://www.kobo.com/fr/fr/ebook/les-dangers-de-la-lumiere" alt="Les dangers de la lumière sur Kobo"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
        <a href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=les+dangers+de+la+lumi%C3%A8re+wendy+baqu%C3%A9&sft=1&sa=0" alt="Les dangers de la lumière sur Rakuten"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur la Fnac (ebook et broché)</button></a>
        <a href="https://wendybaqueauteur.wixsite.com/website" alt="blog path" target="_blank" rel="noreferrer"><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Retrouvez mes romances dans les boxs livresques Plumes de Mimi</button></a>
      </div>
    </div>
  )
}

export default Lumiere;