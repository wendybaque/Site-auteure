import React from 'react'
import "./Apropos.css";
import wendy from "../assets/wendyphoto.png"

 function Apropos() {
  return (
    <main>
    <div className='apropos'>
      <div className="apropos-left">
        <h2 className='apropos-title'>A propos de Wendy Baqué</h2>
        <p className='apropos-description'>Connue sous le pseudo d'Antiigone, Wendy Baqué est une auteure qui adore jouer avec les mots.</p>
        <p className='apropos-description'>Pour elle, écrire a toujours été un moyen de communication à part entière : tout ce qui ne peut se dire peut s'écrire. C'est pour cela que l'expression des émotions de ses personnages prend une grande place dans ses écrits, avec une recherche particulière apportée au réalisme.</p>
        <p className='apropos-description'>Elle auto-édite "Les Vents de l'Existence" en octobre 2019 et a la joie de voir son second roman "Inoubliable Symphonie" édité en mars 2020 chez Plumes de Mimi éditions. </p>
        <p className='apropos-description'>"Les dangers de la lumière", une romance musicale dans la France des années 80 et placée sous le signe du rock and roll, est éditée en août 2021, également chez Plumes de Mimi éditions.</p>
        <p className='apropos-description'>Le petit dernier, un roman feel-good intitulé "La fleur de l'âge"est sorti en février 2022. Il vous plongera dans le quotidien de Benjamin, musicien bénévole de l'association Hospit'Art, qui intervient auprès de patients en fin de vie… mais attention, joie de vivre, positivité et humour garantis ! </p>
        <p className='apropos-description'>De manière générale, ses romans traitent de sujets qui lui sont chers, mais aussi d'actualité, tantôt tabous, tantôt victimes de préjugés et de stéréotypes, comme la fin de vie, l'avortement, l'acceptation de soi, la santé mentale ou encore les normes de la société. Elle porte une attention particulière aux émotions.</p>
        <p className='apropos-description'>Ses personnages ne sont pas parfaits, ont des défauts, des failles à travers lesquelles ils laissent entrer ou jaillir la lumière, ce qui les rend d'autant plus humains. Sa deuxième passion, la musique, tient une grande place dans ses écrits.Susciter la réflexion et le questionnement de soi chez ses lecteurs est un point clef de la fonction de l'écrivain, selon elle.</p>
        <p className='apropos-description'>Elle réalise aussi des chroniques littéraires de romans auto-édités ou de maison d'édition indépendantes, afin de mettre en avant de nouveaux auteurs et ses coups de cœur littéraires que vous pouvez retrouver sur <a href="https://wendybaqueauteur.wixsite.com/website" alt="site de chroniquese Wix">ce site</a>.</p>
      </div>
      <div className="apropos-right">
        <img src={wendy} alt="icone de wendy baqué"/>
      </div>
    </div>
    </main>
  )
}
export default Apropos;
