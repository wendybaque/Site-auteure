import React from "react";
import { NavLink } from 'react-router-dom';
import logoblanc from "../assets/logoblanc.png"

function Topbar() {
  return (
       <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-cyan-500 to-blue-700 p-6" role="navigation">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="/" alt="Back home"><img src={logoblanc} className="fill-current h-20 w-20 mr-2" width="54" height="54" viewBox="0 0 54 54" alt="logo de Wendy Baqué"/></a>
    <a href="/" alt="Back home"><span class="font-semibold font-cursive text-xl tracking-tight m-2">Wendy Baqué</span></a>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/Apropos" className="text-base font-bold font-poppins p-2 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300">
        A propos
      </a>
      <a href="/Dangersdelalumiere" className="text-base font-bold font-poppins p-2 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300">
        Les dangers de la lumière
      </a>
      <a href="/Inoubliablesymphonie" className="text-base font-bold font-poppins p-2 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 transition duration-300">
        Inoubliable Symphonie
      </a>
      <a href="/Ventsdelexistence" className="text-base font-bold font-poppins p-2 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 transition duration-300">
        Les vents de l'existence
      </a>
      <a href="/Fleurdelage" className="text-base font-bold font-poppins p-2 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 transition duration-300">
        La fleur de l'âge
      </a>
    </div>
    <div>
      <a href="/Contact" className="animate-pulse text-base font-bold font-poppins inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-700 hover:bg-white mt-4 lg:mt-0 transition duration-300">Contact</a>
    </div>
  </div>
</nav>

  );
}

export default Topbar;