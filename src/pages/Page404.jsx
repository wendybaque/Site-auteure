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
  class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r from-cyan-500 to-blue-500
  "
>
  <div class="px-40 py-20 bg-white rounded-md shadow-xl">
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-blue-700 text-9xl overflow-y-hidden">404</h1>

      <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
        <span class="text-red-500">Oops!</span> Page not found
      </h6>

      <p class="mb-8 text-center text-gray-500 md:text-lg">
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  </div>
</div>
</div>
  );
}

export default Page404;