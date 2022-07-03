import React from 'react'
import wendy from "../assets/wendyphoto.png"

 function Apropos() {
  return (
    <main>
    <div className="flex flex-row bg-slate-100 w-full">
      <div className="w-1/2 m-2 p-2">
        <h1 className='text-3xl font-bold text-blue-700 font-mono'>A propos de Wendy Baqué</h1>
        <p className='p-2 font-semibold'>Connue sous le pseudo d'Antiigone, Wendy Baqué est une auteure qui adore jouer avec les mots.</p>
        <p className='p-2 font-semibold'>Pour elle, écrire a toujours été un moyen de communication à part entière : tout ce qui ne peut se dire peut s'écrire. C'est pour cela que l'expression des émotions de ses personnages prend une grande place dans ses écrits, avec une recherche particulière apportée au réalisme.</p>
        <p className='p-2 font-semibold'>De manière générale, ses romans traitent de sujets qui lui sont chers, mais aussi d'actualité, tantôt tabous, tantôt victimes de préjugés et de stéréotypes, comme la fin de vie, l'avortement, l'acceptation de soi, la santé mentale ou encore les normes de la société. Elle porte une attention particulière aux émotions.</p>
        <p className='p-2 font-semibold'>Ses personnages ne sont pas parfaits, ont des défauts, des failles à travers lesquelles ils laissent entrer ou jaillir la lumière, ce qui les rend d'autant plus humains. Sa deuxième passion, la musique, tient une grande place dans ses écrits.Susciter la réflexion et le questionnement de soi chez ses lecteurs est un point clef de la fonction de l'écrivain, selon elle.</p>
        <p className='p-2 font-semibold'>Elle réalise aussi des chroniques littéraires de romans auto-édités ou de maison d'édition indépendantes, afin de mettre en avant de nouveaux auteurs et ses coups de cœur littéraires que vous pouvez retrouver sur <a href="https://wendybaqueauteur.wixsite.com/website" alt="site de chroniquese Wix" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold underline underline-offset-1">ce site</a>.</p>
        <p className='p-2 font-semibold'>Après un bref passage dans le milieu sanitaire et social entant que psychologue et formatrice pour adultes, elle se reconvertit dans la création d'applications et de sites web. Son travail est disponible sur son <a href="https://wendybaquedevweb.netlify.app/" alt="portfolio de Wendy Baqué" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold underline underline-offset-1">portfolio</a>.</p>
      </div>
      <div className='w-1/3 m-2 p-2'>
        <img src={wendy} alt="icone de wendy baqué"/>
      </div>
    </div>
    </main>
  )
}
export default Apropos;
