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
                "Magnifique histoire, bien que triste, merveilleusement ficelée. Une plume fabuleuse qui nous transporte.
Je viens de refermer ce livre, les larmes aux yeux. Merci pour ce moment, Wendy, j'en suis ravie. "
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Inoubliable-symphonie_9306.jpg" alt="couverture inoubliable symphonie"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Céline</h5>
                <p class="text-sm text-gray-600">Lectrice</p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
        <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
                " Ce roman est plus qu'une romance parlant de musique.
Le sujet principal peut paraître odieux, à vomir: les sentiments d'un prof envers une élève.
C'est bien plus que ça. Cette histoire interdite est le fil conducteur du roman. Mais, si vous connaissez les écrits de Wendy, vous vous doutez que ce n'est pas le seul sujet abordé.
Comme d'habitude, c'est une auteure qui casse les codes. Et plutôt que de pointer du doigt et de dénoncer les choses (d'une certaine manière, elle le fait mais c'est subtil) elle amène le lecteur a des réflexions et c'est vraiment ce que j'aime chez elle."
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Inoubliable-symphonie_9306.jpg" alt="couverture inoubliable symphonie"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Farah</h5>
                <p class="text-sm text-gray-600">Les trouvailles littéraires de Farah</p>
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
                    <img src="https://www.babelio.com/couv/CVT_Inoubliable-symphonie_9306.jpg" alt="couverture inoubliable symphonie"
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
                "On pourrait croire à un amour dérangeant, mais l'auteur parvient subtilement à le rendre beau, poétique, dépourvu du côté sexuel. Un amour qui n'a pas été choisi mais qui s'est imposé de lui même comme une évidence aux protagonistes qui étaient tous deux en souffrance avant leur rencontre. Wendy traite avec intelligence des sujets de société dont une relation majeur/mineur, la drogue et ses dérives, les classes sociales et leurs idées formatées. C'est un roman poignant et percutant qui m'a émue."
            </p>
            <div class="flex flex-col items-center justify-center">
                <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src="https://www.babelio.com/couv/CVT_Inoubliable-symphonie_9306.jpg" alt="couverture inoubliable symphonie"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-blue-700 font-mono">Dévoreuse de livres</h5>
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
        <a href="https://wendybaqueauteur.wixsite.com/website" alt="blog path" target="_blank" rel="noreferrer"><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Retrouvez mes romances dans les boxs livresques Plumes de Mimi</button></a>
      </div>

    </div>
  )
}

export default Inoubliable;
