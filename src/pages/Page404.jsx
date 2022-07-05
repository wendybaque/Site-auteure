import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import P404 from "../components/404";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, );

  return (
    <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Page 404 | Not found</title>
                <link rel="canonical" href="https://wendybaqueauteurederomans.netlify.app/*" />
            </Helmet>
      <P404 />
      </div>
  );
}

export default Page404;