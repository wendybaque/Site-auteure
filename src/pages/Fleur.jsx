import React from 'react';
import "../pages/livrepage.css";
import livrefdl from "../assets/livrefdl.png";

function Fleur() {
  return (
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
  )
}

export default Fleur;
