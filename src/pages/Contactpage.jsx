import React from "react";
import { Helmet } from "react-helmet";
import ButtonTop from "../components/ButtonTop";
import Contact from "../components/Contact";
// import HeartBeat from "../components/HeartBeat";

export default function Contactpage() {
  return (
    <main className="bg-bg m-10 p-10">
      <div className="overflow-hidden">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact</title>
          <link
            rel="canonical"
            href="https://site-auteure.vercel.app/Contact"
          />
        </Helmet>
        <Contact />
        {/* <HeartBeat /> */}
      </div>
      <ButtonTop />
    </main>
  );
}
