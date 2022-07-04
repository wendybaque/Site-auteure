import React from 'react';
import livrefdl from "../assets/livrefdl.png";

function Fleur() {
  return (
<div className='bg-slate-100'>
    <div className='flex flex-row'>
       <div className="flex flex-col m-2 p-2 w-1/2">
      <h2 className='text-3xl font-bold text-blue-700 font-mono'>La fleur de l'âge</h2>
        <h3 className='m-2 p-2 font-bold text-blue-700'>Genre : roman feel-good</h3>
        <p className='m-2 p-2 italic'>« Bonjour, je m'appelle Benjamin et je suis musicien. Je viens vous chanter une petite chanson pour espérer vous faire du bien . »</p>
        <p className='m-2 p-2'>Cette phrase, Benjamin Leduc, bénévole de l’association Hospit’Art, la prononce à chaque fois qu’il entre dans une chambre du service de soins palliatifs d’une clinique tourangelle. En général, les patients l’accueillent avec enthousiasme et se prennent au jeu, oubliant un temps la maladie et la mort. En général, seulement. Car Marcelle Bourget, quatre-vingt-un ans et toute sa tête (et toutes ses dents aussi !) reste muette face à tous ses efforts.</p>
        <p className='m-2 p-2'>Pourtant, les yeux de la vieille dame brillent dès qu’on lui parle de musique. Rongé par un mal qui l’entrave, mais déterminé, le jeune homme est prêt à tout pour percer les secrets de l’aînée. Prêt à tout, même à remettre en question toute sa vie.</p>
        <p className='m-2 p-2'>Et si la rencontre avec la patiente en fin de vie et ce trentenaire qui cherche sa voie était le commencement d’une belle histoire bercée par la musique ?</p>
      </div>
      <div className="w-1/2">
        <img src={livrefdl} alt="livre la fleur de l'âge"/>
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
                "J'ai beaucoup aimé ce personnage, sa sensibilité, ses doutes, le voir évoluer et l'accompagner, d'une certaine manière, sur son chemin à la recherche du bonheur, entre rires et larmes.
La fleur de l'âge, ce sont deux âmes qui se croisent, se comprennent et se font du bien. "
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg" alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Marjorie</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
                " La plume de Wendy est tout simplement belle et addictive. J'aime que dans chaque nouveau livre, elle fasse des allusions à ses œuvres déjà sorties et qu'il y ait toujours un lien entre elles. Elle a un talent incroyable et aime aborder des sujets pas évidents ce qui donne toujours de merveilleux résultats. Ici aussi dans La fleur de l'âge, on passe par tout un tas d'émotions : de la tristesse à la peur, parfois un peu de joie aussi et une certaine euphorie presque lorsque Benjamin prend sa vie en main. Le partage, l'entraide, la maladie et la fin de vie sont les principales idées de cette histoire et elles sont terriblement bien traitées."
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://m.media-amazon.com/images/I/41e2MG0aGxL._SX195_.jpg" alt="img"
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
                "Beaucoup de thèmes importants sont abordés dans cette histoire, mais ils le sont toujours de manière positive, même s'ils sont abordés dans la réalité de la vie du quotidien. Ils laissent leur place à l'espoir d'une évolution, d'une remise en question vers une vie meilleure, d'une acceptation de soi et des autres
Cette histoire nous montre qu'à tout âge, tous les rêves sont permis, que les rencontres de la vie sont déterminantes et peuvent nous faire changer de cap vers un avenir meilleur"
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/41J980YGlSL._SX195_.jpg" alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Françoise</h5>
                <p class="text-sm text-gray-600">La vie en livres de Françoise</p>
            </div>
        </div>
    </div>
</div>
        </section>
      <div className='flex flex-row justify-center m-2 p-2'>
        <a href="https://www.amazon.fr/fleur-l%C3%A2ge-Wendy-Baqu%C3%A9/dp/B09NZJY2ND/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=324WQ7J04X56R&keywords=la+fleur+de+l%27age+wendy+baqu%C3%A9&qid=1641041100&sprefix=la+fleur+de+l%27age+wendy+baqu%C3%A9%2Caps%2"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Amazon (ebook et broché)</button></a>
        <a href="https://www.bookelis.com/romans/49342-La-fleur-de-l-age.html" alt="La fleur de l'âge sur Bookelis"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Acheter sur Bookelis (ebook et broché)</button></a>
        <a href="https://www.kobo.com/fr/fr/ebook/la-fleur-de-l-age" alt="La fleur de l^'age sur Kobo"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
        <a href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0%211&Search=la+fleur+de+l%27%C3%A2ge+wendy+baqu%C3%A9&sft=1&sa=0" alt="La fleur de l'âge sur la FNAC"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur la Fnac (ebook et broché)</button></a>
        <a href="https://fr.shopping.rakuten.com/offer/buy/7805339184/la-fleur-de-l-age-format-beau-livre.html" alt="La fleur de l'âge sur Rakuten"><button className="flex justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Acheter sur Rakuten (broché)</button></a>
      </div>
</div>
  )
}

export default Fleur;
