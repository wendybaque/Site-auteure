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
    <main className="overflow-hidden " aria-label="page 404">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Page 404 | Not found</title>
            <link rel="canonical" href="https://site-auteure.vercel.app/*" />
    </Helmet>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg')",
          height: "80vh",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
        >
          <div className=" overflow-hidden flex justify-center items-center h-full">
            <div className="overflow-hidden text-center text-white px-6 md:px-12">
              <h1 className="text-primary p-6 overflow-hidden text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Page 404 Not fourd<br />
                <span className="font-bold text-secondary">
                  Oups, pas de livres ici !
                </span>
              </h1>
              <h2 className="text-4xl text-primary  overflow-hidden m-6">
                Vous allez être redirigés automatiquement à l'accueil d'ici
                quelques secondes...
              </h2>
              <a href="/" alt="redirection vers l'accueil"></a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10"
        style={{
          height: "50px",
          transform: "scale(2)",
          transformOrigin: "top center",
          color: "#fff",
        }}
      >
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </main>
  );
}

export default Page404;
