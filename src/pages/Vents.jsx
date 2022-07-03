import React from 'react';
import livrevdl from "../assets/livrevdl.png";

function Vents() {
  return (
   <div className="bg-slate-100">
    <div className='flex flex-row'>
      <div className="flex flex-col m-2 p-2 w-1/2">
      <h2 className='text-3xl font-bold text-blue-700 font-mono'>Les vents de l'existence</h2>
        <h3 className='m-2 p-2 font-bold text-blue-700'>Genre : roman contemporain à dimension sociologique</h3>
        <p className='m-2 p-2'>Proche de la trentaine, Joanne, sociologue émérite, est de ces personnes dont on pourrait dire qu’elles ont réussi leur vie. Et pourtant… Tout s’écroule pour la jeune femme le jour où elle apprend brutalement le suicide de Lucas, son parrain. En héritage, il lui laisse l’Ultimo Respiro, la maison qu’il avait achetée et rénovée afin de finir ses jours à La Turballe, en Loire Atlantique. Elle y retourne alors, d’abord pour des raisons administratives, puis se questionne sur les circonstances du décès de son parrain.
          Ses vieux démons refont surface, l’interrogeant tant sur la mort que sur la vie, et mettent à mal le sens que l’endeuillée avait attribué à son existence. Elle fait la connaissance de Damien Lasareigne qui, avec ses idées artistiques et révoltées, lui fera voir la vie sous d’autres facettes. Ces événements de vie la forceront à affronter ses peurs, ses proches et à faire valoir qui elle est réellement. Alors qu’autour d’elle, tout est question de mort et de finitude, pour elle, tout commence, tout est renouveau.</p>
      </div>
      <div className="w-1/2">
        <img src={livrevdl} alt="livre les vents de l'existence"/>
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

      <div className="flex flex-row justify-center m-2 p-2">
        <a href="https://www.amazon.fr/Vents-lExistence-Wendy-Baqu%C3%A9-ebook/dp/B07XL9FK89" alt="Les vents de l'existence sur Amazon"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Amazon (ebook, broché et relié)</button></a>
        <a href="https://www.bookelis.com/romans/47435-Les-Vents-de-l-Existence.html/" alt="Les vents de l'existence sur Bookelis"><button className="flex justify-center  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Bookelis (ebook et broché)</button></a>
        <a href="https://www.kobo.com/fr/fr/search?query=les+vents+de+l%27existence" alt="Les vents de l'existence sur Kobo"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
      </div>

    </div>
  )
}

export default Vents;
