import React from 'react';
import {Helmet} from "react-helmet";
import Contact from "../components/Contact";

export default function Contactpage() {
  return (
    <main>
    <div>
    <Helmet>
            <meta charSet="utf-8" />
            <title>Contact</title>
            <link rel="canonical" href="https://site-auteure.vercel.app/Contact" />
    </Helmet>
        <Contact />
    </div>
    </main>
  )
}
