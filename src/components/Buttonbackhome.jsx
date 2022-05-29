import React from"react";
// import{Link}from"react-router-dom";
import"../components/Buttonbackhome.css";

function Buttonbackhome(){
  return(
    <div className="button-back-home">
      {/* <Link to="/"> */}
        <a href="/" alt="Bouton de retour à l'accueil"><button type="button" className="button-back-home">
          Retour à l'accueil
        </button></a>
      {/* </Link> */}
    </div>
  );
}

export default Buttonbackhome;