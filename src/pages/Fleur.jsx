import React from 'react';
import "../pages/livrepage.css";
import livrefdl from "../assets/livrefdl.png";
import Testimonials from '../components/Testimonials';

function Fleur() {
  return (
<div className='livre-wrapper'>
    <div className='livre-page'>
       <div className="livre-page-left">
      <h2 className='livre-title'>La fleur de l'âge</h2>
        <h3>Genre : roman feel-good</h3>
        <p>« Bonjour, je m'appelle Benjamin et je suis musicien. Je viens vous chanter une petite chanson pour espérer vous faire du bien . »</p>
        <p>Cette phrase, Benjamin Leduc, bénévole de l’association Hospit’Art, la prononce à chaque fois qu’il entre dans une chambre du service de soins palliatifs d’une clinique tourangelle. En général, les patients l’accueillent avec enthousiasme et se prennent au jeu, oubliant un temps la maladie et la mort. En général, seulement. Car Marcelle Bourget, quatre-vingt-un ans et toute sa tête (et toutes ses dents aussi !) reste muette face à tous ses efforts.</p>
        <p>Pourtant, les yeux de la vieille dame brillent dès qu’on lui parle de musique. Rongé par un mal qui l’entrave, mais déterminé, le jeune homme est prêt à tout pour percer les secrets de l’aînée. Prêt à tout, même à remettre en question toute sa vie.</p>
        <p>Et si la rencontre avec la patiente en fin de vie et ce trentenaire qui cherche sa voie était le commencement d’une belle histoire bercée par la musique ?</p>
      </div>
      <div className="livre-page-right">
        <img src={livrefdl} alt="livre la fleur de l'âge"/>
      </div>
      </div>
    <div className='testimonials-livre'>
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" className="text-xl font-medium text-indigo-500" alt="">John Doe</a>
  </div>
</div>
      </div>
      <div className='shopping-links'>
        <a href="https://www.amazon.fr/fleur-l%C3%A2ge-Wendy-Baqu%C3%A9/dp/B09NZJY2ND/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=324WQ7J04X56R&keywords=la+fleur+de+l%27age+wendy+baqu%C3%A9&qid=1641041100&sprefix=la+fleur+de+l%27age+wendy+baqu%C3%A9%2Caps%2"><button className="shopping-button">Acheter sur Amazon (ebook et broché)</button></a>
        <a href="https://www.bookelis.com/romans/49342-La-fleur-de-l-age.html" alt="La fleur de l'âge sur Bookelis"><button className="shopping-button">Acheter sur Bookelis (ebook et broché)</button></a>
        <a href="https://www.kobo.com/fr/fr/ebook/la-fleur-de-l-age" alt="La fleur de l^'age sur Kobo"><button className="shopping-button">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
        <a href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0%211&Search=la+fleur+de+l%27%C3%A2ge+wendy+baqu%C3%A9&sft=1&sa=0" alt="La fleur de l'âge sur la FNAC"><button className="shopping-button">Acheter sur la Fnac (ebook et broché)</button></a>
        <a href="https://fr.shopping.rakuten.com/offer/buy/7805339184/la-fleur-de-l-age-format-beau-livre.html" alt="La fleur de l'âge sur Rakuten"><button className="shopping-button">Acheter sur Rakuten (broché)</button></a>
      </div>
</div>
  )
}

export default Fleur;
