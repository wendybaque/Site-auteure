import React from "react";

function Footer() {
  return (
    <div className="flex flex-row justify-between p-6 font-bold bg-slate-100">
      <p className="">Copyright ©2022</p>
      <p className="">Made with ❤ by <a href="https://wendybaquedevweb.netlify.app/" target="_blank" rel="noreferrer" alt="portfolio de Wendy Baqué" className="hover:text-blue-700 hover:font-bold">Wendy Baqué</a></p>
      <p className=""><a href="/Mentionslegales" alt="Mentions légales" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold">Mentions Légales</a></p>
    </div>
  );
}
export default Footer;