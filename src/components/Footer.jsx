import React from "react";
import "../components/Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
    <div className="footer-text">
      <p>Copyright ©2022</p>
      <p>Made with ❤ by Wendy Baqué</p>
      <p className="legal-mentions"><a href="/Mentionslegales" alt="Mentions légales">Mentions Légales</a></p>
    </div>
    </div>
  );
}
export default Footer;