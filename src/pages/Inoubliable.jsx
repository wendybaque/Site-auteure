import React from 'react';
import livreis from "../assets/livreis.png";

function Inoubliable() {
  return (
    <div className="bg-slate-100">

    <div className='flex flex-row'>
        <div className="flex flex-col m-2 p-2 w-1/2">
      <h2 className='text-3xl font-bold text-blue-700 font-mono'>Inoubliable symphonie</h2>
        <h3 className='m-2 p-2 font-bold text-blue-700'>Genre : romance musicale</h3>
        <p className='m-2 p-2'>Nous vivons dans un monde où aimer qui l’on veut n’est pas acceptable à cause d’une trop grande différence d’âge, de revenu financier ou de rang social. Un monde où la musique reste parfois incomprise, où la beauté fait défaut. Un monde où les apparences sont trop souvent trompeuses.</p>
        <p className='m-2 p-2'>Avant, je croyais que le sens de la vie, c’était la musique. Mon professeur m’a montré que l’amour pouvait aussi valoir la peine d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai défendu, j’ai cru en lui, je me suis perdue.</p>
        <p className='m-2 p-2'>Grâce à Rudyard, cet homme au regard tendre et aux valeurs nobles, j’ai pu réaliser mes rêves les plus controversés. L’espace d’un instant, nous nous sommes croisés, nous nous sommes aimés. Nous, qui vivions dans des mondes parallèles.</p>
        <p className='m-2 p-2'>Notre histoire est celle d’une petite étoile en plastique phosphorescente, d’une enquête policière, de parents désabusés, de normes sociales chamboulées, d’opéra rock révolté, de drogue surdosée, d’amour rejeté et d’amitié à toute épreuve.</p>
      </div>
      <div className="w-1/2">
        <img src={livreis} alt="livre inoubliable symphonie" className='livre-img'/>
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
        <a href="https://www.amazon.fr/Inoubliable-symphonie-Wendy-Baqu%C3%A9-ebook/dp/B086HRNZP8/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=27WOUZX5N2BVL&keywords=wendy+baqu%C3%A9&qid=1654498269&sprefix=wendy+baqu%C3%A9%2Caps%2C110&sr=8-4" alt="Inoubliable symphonie sur Amazon"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Amazon et abonnement Kindle (ebook et broché)</button></a>
        <a href="https://www.plumesdemimieditions.fr/boutique/inoubliable-symphonie/" alt="Inoubliable symphonie sur Plumes de Mimi"><button className=" flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur le site de la maison d'édition (broché + box)</button></a>
        <a href="https://www.kobo.com/fr/fr/ebook/inoubliable-symphonie" alt="Inoubliable symphonie sur Kobo"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
        <a href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=inoubliable+symphonie+wendy+baqu%C3%A9&sft=1&sa=0" alt="Inoubliable symphonie sur FNAC"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur la Fnac (ebook et broché)</button></a>
      </div>

    </div>
  )
}

export default Inoubliable;
