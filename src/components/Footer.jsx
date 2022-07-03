import React from "react";
import "../components/Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
    <div className="footer-text">
      <p>Copyright ©2022</p>
      <p>Made with ❤ by <a href="https://wendybaquedevweb.netlify.app/" target="_blank" rel="noreferrer" alt="portfolio de Wendy Baqué" className="portfolio">Wendy Baqué</a></p>
      <p className="legal-mentions"><a href="/Mentionslegales" alt="Mentions légales" target="_blank" rel="noreferrer">Mentions Légales</a></p>
    </div>
    </div>
  );
}
export default Footer;