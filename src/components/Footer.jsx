import React from "react";

function Footer() {
  return (
    <div className="flex flex-row justify-between m-2 p-2 font-bold ">
      <p className="">Copyright ©2022</p>
      <p className="">Made with ❤ by <a href="https://wendybaquedevweb.netlify.app/" target="_blank" rel="noreferrer" alt="portfolio de Wendy Baqué" className="hover:text-sky-700">Wendy Baqué</a></p>
      <p className=""><a href="/Mentionslegales" alt="Mentions légales" target="_blank" rel="noreferrer" className="hover:text-sky-700">Mentions Légales</a></p>
    </div>
  );
}
export default Footer;