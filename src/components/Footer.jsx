import React from "react";
import logonoir from "../assets/logonoir.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 ">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 flex justify-center">
          <a
            href="/"
            alt="redirection à l'accueil"
            className="lg:flex items-center"
          >
            <img src={logonoir} className="h-32 mr-3" alt="Wendy Baqué" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="font-bold font-yeseva hover:underline decoration-secondary block py-2 pl-3 pr-4 text-secondary text-l rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">
              MES LIVRES
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-secondary font-josefin">
                  Les dangers de la lumière
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-secondary font-josefin">
                  Inoubliable symphonie
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-secondary font-josefin">
                  La fleur de l'âge
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-secondary font-josefin">
                  Les vents de l'existence
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-gray-900 uppercase dark:text-white">
              <a
                href="/Contact"
                className="font-yeseva  font-bold hover:underline decoration-secondary block py-2 pl-3 pr-4 text-secondary text-l rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              >
                CONTACT
              </a>
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">
                <a
                  href="https://wendybaqueauteur.wixsite.com/website"
                  className="font-yeseva  font-bold hover:underline decoration-secondary block py-2 pl-3 pr-4 text-secondary text-l rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                >
                  LE BLOG
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/Mentionslegales"
                  className="font-yeseva  font-bold hover:underline decoration-secondary block py-2 pl-3 pr-4 text-secondary text-l rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                >
                  MENTIONS LEGALES
                </a>
              </li>
              <li>
                <span className="font-josefin text-md text-gray-500 sm:text-center dark:text-gray-400">
                  Made with ❤ by{" "}
                  <a
                    href="https://wendybaqueportfoliodev.wendev.fr/"
                    target="_blank"
                    rel="noreferrer"
                    alt="portfolio de Wendy Baqué"
                    className="hover:text-secondary"
                  >
                    Wendy Baqué
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/AntiigoneWB"
              className="hover:text-secondary text-gray-500 hover:text-gray-900 dark:hover:text-white"
              alt="redirection vers la page Instagram de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon fontSize="medium" />
            </a>
            <a
              href="https://www.instagram.com/wendybqe/"
              className="hover:text-secondary text-gray-500 hover:text-gray-900 dark:hover:text-white"
              alt="redirection vers le compte Instagram de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon fontSize="medium" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
