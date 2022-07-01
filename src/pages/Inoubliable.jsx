import React from 'react';
import "../pages/livrepage.css";
import livreis from "../assets/livreis.png";
import Testimonials from '../components/Testimonials';

function Inoubliable() {
  return (
    <div className="livre-wrapper">

    <div className='livre-page'>
        <div className="livre-page-left">
      <h2 className='livre-title'>Inoubliable symphonie</h2>
        <h3>Genre : romance musicale</h3>
        <p>Nous vivons dans un monde où aimer qui l’on veut n’est pas acceptable à cause d’une trop grande différence d’âge, de revenu financier ou de rang social. Un monde où la musique reste parfois incomprise, où la beauté fait défaut. Un monde où les apparences sont trop souvent trompeuses.</p>
        <p>Avant, je croyais que le sens de la vie, c’était la musique. Mon professeur m’a montré que l’amour pouvait aussi valoir la peine d’être vécu. Alors, je l’ai aimé, envers et contre tout. Je l’ai défendu, j’ai cru en lui, je me suis perdue.</p>
        <p>Grâce à Rudyard, cet homme au regard tendre et aux valeurs nobles, j’ai pu réaliser mes rêves les plus controversés. L’espace d’un instant, nous nous sommes croisés, nous nous sommes aimés. Nous, qui vivions dans des mondes parallèles.</p>
        <p>Notre histoire est celle d’une petite étoile en plastique phosphorescente, d’une enquête policière, de parents désabusés, de normes sociales chamboulées, d’opéra rock révolté, de drogue surdosée, d’amour rejeté et d’amitié à toute épreuve.</p>
      </div>
      <div className="livre-page-right">
        <img src={livreis} alt="livre inoubliable symphonie" className='livre-img'/>
      </div>
      </div>
      <div className='testimonials-livre'>
        <Testimonials />
      </div>
      <div className='shopping-links'>
        <a href="https://www.amazon.fr/Inoubliable-symphonie-Wendy-Baqu%C3%A9-ebook/dp/B086HRNZP8/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=27WOUZX5N2BVL&keywords=wendy+baqu%C3%A9&qid=1654498269&sprefix=wendy+baqu%C3%A9%2Caps%2C110&sr=8-4" alt="Inoubliable symphonie sur Amazon"><button className="shopping-button">Acheter sur Amazon et abonnement Kindle (ebook et broché)</button></a>
        <a href="https://www.plumesdemimieditions.fr/boutique/inoubliable-symphonie/" alt="Inoubliable symphonie sur Plumes de Mimi"><button className="shopping-button">Acheter sur le site de la maison d'édition (broché + box)</button></a>
        <a href="https://www.kobo.com/fr/fr/ebook/inoubliable-symphonie" alt="Inoubliable symphonie sur Kobo"><button className="shopping-button">Acheter sur Kobo et abonnement Kobo + (ebook)</button></a>
        <a href="https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=inoubliable+symphonie+wendy+baqu%C3%A9&sft=1&sa=0" alt="Inoubliable symphonie sur FNAC"><button className="shopping-button">Acheter sur la Fnac (ebook et broché)</button></a>
      </div>

    </div>
  )
}

export default Inoubliable;
