import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, );

  return (
      <div className="infos">
        <div className="glitch-bloc">
          <p className="invisible-text">404</p>
          <p className="glitchedAnim">404</p>
          <p className="glitchedAnim">404</p>
          <p className="glitchedAnim">404</p>
        </div>
        <p className="txt-info">Wopsy, this page doesn't exist.</p>
      </div>
  );

}

export default Page404;