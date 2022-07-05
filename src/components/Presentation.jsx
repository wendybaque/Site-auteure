import React from 'react'

import logo from "../assets/logonoir.png";
import down from "../assets/down.png";
import { Fade } from "react-awesome-reveal";

export default function Presentation() {
  return (
    <div>
      <main className="flex flex-row">
        <div className="flex flex-col align-center justify-center content-center p-2 m-2 basis-1/4">
                <img src={logo} alt="logo de Wendy Baqué" className="presentation-image"/>
                <a href="/Apropos" alt="about path"><button className="flex text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mb-2">A propos de Wendy Baqué</button></a>
                <a href="https://wendybaqueauteur.wixsite.com/website" alt="blog path" target="_blank" rel="noreferrer"><button type="button" className="flex text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mb-2">Mon blog de chroniqueuse littéraire</button></a>
          </div>
          <div className="flex flex-col p-2 m-2 basis-2/3 content-center" id="welcome">
            <div className="p-2 m-2">
                <h1 className="p-2 m-2 font-bold">Bonjour ! Je suis <span className="text-blue-700 font-bold font-poppins">Wendy Baqué </span></h1>
                <h2 className="p-2 m-2 font-bold">Auteure de </h2>
                <div className="p-2 m-2">
                <Fade delay={1000}> 
                <p className="fade text-blue-700 font-bold font-poppins">Romans contemporains</p>
                </Fade>
                <Fade delay={2000}>
                <p className="fade text-blue-700 font-bold font-poppins">Romans feel-good</p>
                </Fade>
                <Fade delay={3000}>
                <p className="fade text-blue-700 font-bold font-poppins">Romances musicales</p>
                </Fade>
                </div>
                <p className="p-2 m-2 font-bold">Bienvue sur mon site ! Vous y découvrirez mon univers littéraire, fait de récits contemporains et réalistes, avec quelques notes de romance. J'ai à coeur de traiter de sujets originaux à travers des personnages humains et attachants. Je vous souhaite une bonne visite et ce belles lectures !</p>
                <p className="p-2 m-2 font-bold">Mes livres sont disponibles sur Amazon en versions numériques et imprimées, ainsi qu'à la commande dans vos librairies en ligne et physiques favorites.</p>
                  <div className="flex justify-center">
                  <a href="#book" className="redirection" alt="redirection vers les pages des livres">
                  <img src={down} alt="flèche vers le bas" className="animate-bounce h-20 w-20 flex items-center justify-center p-2 m-2"></img>
            </a>
            </div>
            </div>
        </div>
        </main>
    </div>
  )
}
