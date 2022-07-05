import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

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
            <div
  className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r from-cyan-500 to-blue-700
  "
>
  <div className="px-40 py-20 bg-white rounded-md shadow-xl">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-blue-700 text-9xl overflow-y-hidden">404</h1>

      <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
        <span className="text-red-500">Oups !</span> Pas de livres ici !
      </h6>

      <p className="mb-8 text-center text-gray-500 font-bold md:text-lg">
        Cette page n'existe pas. Redirection automatique à l'accueil.
      </p>
    </div>
  </div>
</div>
</div>
  );
}

export default Page404;