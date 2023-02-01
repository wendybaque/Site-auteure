import React from "react";
import logonoir from "../assets/logonoir.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Navbar() {
  return (
    <nav
      role="navigation"
      aria-label="Barre de navigation"
      classNameName="bg-bg text-lg m-6 flex flex-wrap justify-around px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      <div className="bg-bg container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src={logonoir}
            className="h-6 mr-3 sm:h-10"
            alt="Wendy Baqué Logo"
          />
          <span className="text-secondary font-yeseva self-center text-xl font-bold whitespace-nowrap dark:text-white">
            Wendy Baqué, auteure de romans
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-10 m-10  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="font-josefin text-2xl hover:underline decoration-secondary block py-2 pl-3 pr-4 text-secondary rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                alt="redirection vers la page d'accueil"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/Apropos"
                className="font-josefin text-2xl block py-2 pl-3 pr-4 hover:underline text-secondary rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                A propos
              </a>
            </li>

            <li>
              <a
                href="#book"
                className="font-josefin text-2xl  hover:underline decoration-secondary block py-2 pl-3 pr-4 text-secondary rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                alt="redirection vers la section des livres de Wendy Baqué"
              >
                Mes livres
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="font-josefin text-2xl  block py-2 pl-3 pr-4 hover:underline text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/AntiigoneWB"
                className="hover:text-secondary text-gray-500 hover:text-gray-900 dark:hover:text-white"
                alt="redirection vers la page Instagram de Wendy Baque"
              >
                <FacebookIcon fontSize="medium"/>
              </a>
              <a
                href="https://www.instagram.com/wendybqe/"
                className="hover:text-secondary text-gray-500 hover:text-gray-900 dark:hover:text-white"
                alt="redirection vers le compte Instagram de Wendy Baque"
              >
                <InstagramIcon fontSize="medium"/>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
