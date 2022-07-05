import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../components/404.css";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, );

  return (
    <div className="bg-slate-100 overflow-hidden">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Page 404 | Not found</title>
                <link rel="canonical" href="https://site-auteure.vercel.app/*" />
            </Helmet>
            <div className="infos">
        <main>
        <div className="glitch-bloc">
          <p className="invisible-text">404</p>
          <p className="glitchedAnim">404</p>
          <p className="glitchedAnim">404</p>
          <p className="glitchedAnim">404</p>
        </div>
        <p className="txt-info">Wopsy, this page doesn't exist.</p>
        </main>
      </div>
      </div>
  );
}

export default Page404;