import React from "react";
import logonoir from "../assets/logonoir.png";

function Navbar() {
  return (
    <nav
      role="navigation"
      aria-label="Barre de navigation"
      classNameName="text-lg m-6 flex flex-wrap justify-around bg-slate-100 border-slate-100 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src={logonoir}
              className="h-6 mr-3 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="text-secondary self-center text-xl font-bold whitespace-nowrap dark:text-white">
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-secondary text-xl rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/Apropos"
                  className="block py-2 pl-3 pr-4 text-secondary text-xl rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  A propos
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="text-primary bg-secondary text-xl shadow-lg flex items-center justify-between p-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Mes livres
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className=" font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/Dangersdelalumiere"
                        className="block p-2 hover:text-secondary dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Les dangers de la lumière
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Inoubliablesymphonie"
                        className="block p-2 hover:text-secondary dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Inoubliable symphonie
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Fleurdelage"
                        className="block p-2 hover:text-secondary dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        La fleur de l'âge
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Ventsdelexistence"
                        className="block p-2 hover:text-secondary dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Les vents de l'existence
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="block py-2 pl-3 pr-4 text-secondary text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
