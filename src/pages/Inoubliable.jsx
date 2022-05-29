import React from 'react';
import "../pages/livrepage.css";
import livreis from "../assets/livreis.png";

function Inoubliable() {
  return (
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
        <img src={livreis} alt="livre inoubliable symphonie"/>
      </div>
    </div>
  )
}

export default Inoubliable;
