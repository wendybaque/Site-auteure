import React from "react";

// import { link } from "react-router-dom;
// import "../components/Navbar.css";
import logoblanc from "../assets/logoblanc.png"

function Topbar() {
  return (
       <nav class="flex items-center justify-between flex-wrap bg-sky-700 p-6" role="navigation">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img src={logoblanc} className="fill-current h-20 w-20 mr-2" width="54" height="54" viewBox="0 0 54 54" alt="logo de Wendy Baqué"/>
    <span class="font-semibold text-xl tracking-tight">Wendy Baqué</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/Apropos" className="p-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        A propos
      </a>
      <a href="/Dangersdelalumiere" className="p-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Les dangers de la lumière
      </a>
      <a href="/Inoubliablesymphonie" className="p-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Inoubliable Symphonie
      </a>
      <a href="/Ventsdelexistence" className="p-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Les vents de l'existence
      </a>
      <a href="/Fleurdelage" className="p-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        La fleur de l'âge
      </a>
    </div>
    <div>
      <a href="/Contact" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Contact</a>
    </div>
  </div>
</nav>

  );
}

export default Topbar;