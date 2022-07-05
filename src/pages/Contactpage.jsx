import React from 'react';
import {Helmet} from "react-helmet";
import ButtonTop from '../components/ButtonTop';
import Contact from "../components/Contact";

export default function Contactpage() {
  return (
    <main className='bg-slate-100'>
    <div>
    <Helmet>
            <meta charSet="utf-8" />
            <title>Contact</title>
            <link rel="canonical" href="https://site-auteure.vercel.app/Contact" />
    </Helmet>
        <Contact />
    </div>
    <ButtonTop/>
    </main>
  )
}
