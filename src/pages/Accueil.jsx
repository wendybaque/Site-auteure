import React from "react";
// import "../App.css";
import Contact from "../components/Contact";
import Inoubliable from "../components/Is";
import Lumière from "../components/Dol";
import Fleur from "../components/Fdl";
import Vents from "../components/Vdl";
import Testimonials from "../components/Testimonials";
import logo from "../assets/logonoir.png";
import down from "../assets/down.png";
import { Fade } from "react-awesome-reveal";
import merci from "../assets/merci.png";


function Accueil() {
  return (
      <div>
        <main className="flex flex-row">
        <div className="flex flex-col align-center justify-center p-2 m-2 basis-1/4">
                <img src={logo} alt="logo de Wendy Baqué" className="presentation-image"/>
                <a href="/Apropos" alt="about path"><button className="flex justify-self-center content-center	 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">A propos de Wendy Baqué</button></a>
          </div>
          <div className="flex flex-col p-2 m-2 basis-2/3 content-center	">
            <div className="p-2 m-2">
                <h3 className="p-2 m-2">Bonjour ! Je suis <span className="text-blue-700 font-bold">Wendy Baqué </span></h3>
                <h3 className="p-2 m-2">Auteure de </h3>
                <div className="p-2 m-2">
                <Fade delay={1000}> 
                <p className="fade text-blue-700 font-bold font-mono">Romans contemporains</p>
                </Fade>
                <Fade delay={2000}>
                <p className="fade text-blue-700 font-bold font-mono">Romans feel-good</p>
                </Fade>
                <Fade delay={3000}>
                <p className="fade text-blue-700 font-bold font-mono">Romances musicales</p>
                </Fade>
                </div>
                <p className="p-2 m-2">Bienvue sur mon site ! Vous y découvrirez mon univers littéraire, fait de récits contemporains et réalistes, avec quelques notes de romance. J'ai à coeur de traiter de sujets originaux à travers des personnages humains et attachants. Je vous souhaite une bonne visite et ce belles lectures !</p>
                <p className="p-2 m-2">Mes livres sont disponibles sur Amazon en versions numériques et imprimées, ainsi qu'à la commande dans vos librairies en ligne et physiques favorites.</p>
                  <a href="#livre" className="redirection" alt="redirection vers les pages des livres">
                  <img src={down} alt="flèche vers le bas" className="animate-bounce h-20 w-20 flex items-center justify-items-center p-2 m-2"></img>
            </a>
            </div>
        </div>
        </main>
        <section className="bg-gray-300">
        <div id="indicators-carousel" class="relative" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src={merci} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={merci} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={merci} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={merci} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
        </section>
        <section>
        <Lumière/>
        </section>
        <section>
        <Inoubliable />
        </section>
        <section>
        <Fleur />
        </section>
        <section>
        <Vents />
        </section>
        <section>
        <Testimonials />
        </section>
        <section>
        <Contact />
        </section>
      </div>
  );
}
export default Accueil;
