import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com";

import Mail from "../assets/mail.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Amazon from "../assets/amazon.svg";
import Book from "../assets/book.svg";
import Linktree from "../assets/linktree.svg";
import Blog from "../assets/blog.svg";

function Contact () {
    const notify = () => toast.success("Merci pour votre message. Je vous répondrai au plus vite.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_u2fklzg",
          "template_rl2rmjf",
          formRef.current,
          "DUffDPlWcTNQB2sPj"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col bg-slate-100 overflow-hidden">
            <div className="lg:flex lg:flex-row m-2 p-2">
                <div className="lg:flex lg:basis-1/2 ">
                    <h2 class="text-3xl font-bold text-blue-700 font-poppins">Contact</h2>
                    <div className="lg:flex lg:flex-col md:flex-row sm:flex-row">
                        <div className="flex flex-row m-2 p-2 font-bold items-center">
                            <img src={Mail} alt="logo mail" className="w-14 h-14 m-2 p-2 font-bold" />wendybaque.auteur@gmail.com
                        </div>
                        <div className="flex flex-row m-2 p-2 font-bold items-center">
                            <img src={Facebook} alt="logo facebook" className="w-14 h-14 m-2 p-2" /> 
                            <a href="https://www.facebook.com/AntiigoneWB" alt="Ma page facebook" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold">Ma page Facebook</a>
                        </div>
                        <div className="flex flex-row m-2 p-2 font-bold items-center">
                            <img src={Instagram} alt="logo instagram" className="w-14 h-14 m-2 p-2" />
                            <a href="https://www.instagram.com/wendybqe/" alt="Mon compte instagram" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold">Mon compte Instagram</a>
                        </div>
                        <div className="flex flex-row m-2 p-2 font-bold items-center">
                            <img src={Blog} alt="logo internet blog" className="w-14 h-14 m-2 p-2" />
                            <a href="https://wendybaqueauteur.wixsite.com/website" alt="Mon blog de chroniques littéraires" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold">Mon blog de chroniques littéraires</a>
                        </div>
                        <div className="flex flex-row m-2 p-2 font-bold items-center">
                            <img src={Linktree} alt="logo linktree" className="w-14 h-14 m-2 p-2" />
                            <a href="https://linktr.ee/Antiigone" alt="Lien vers mon Linktree" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold">Tous mes liens utiles</a>
                        </div>
                        <div className="flex flex-row m-2 p-2 font-bold items-center">
                            <img src={Amazon} alt="logo amazon" className="w-14 h-14 m-2 p-2" />
                            <a href="https://www.amazon.fr/Wendy-Baqu%25C3%25A9/e/B07XRW56H6%3Fref=dbs_a_mng_rwt_scns_share" alt="Profil auteur amazon" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold">Mon profil auteur</a>
                        </div>
                        <div className="flex flex-row m-2 p-2 font-bold items-center">
                            <img src={Book} alt="book" className="w-14 h-14 m-2 p-2" />
                            <a href="https://simplement.pro/u/Antiigone" alt="Lien ma page simplementpro" target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:font-bold">Mes romans en Service Presse</a>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col basis-1/2 font-bold items-center text-center">
                    <p>L'un de mes livres vous intéresse et vous souhaitez le commander ? Ou vous avez tout simplement une question sur mes romans ?</p>
                    <p className="text-blue-700 font-poppins">Rendez-vous dans le formulaire ci-dessous.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="grid justify-items-center">
                        <label><input type="text" placeholder="Votre nom" name="user_name" required aria-required="true" className="m-2 p-4 w-96 rounded-lg shadow-md"/></label>
                        <label><input type="mail" placeholder="Votre e-mail" name="user_email" required aria-required="true" className="m-2 p-4 w-96 rounded-lg shadow-md "/></label>
                        <label><input type="tel" placeholder="Votre numéro de téléphone" name="user_phone" required aria-required="true" className="m-2 p-4 w-96 rounded-lg shadow-md "/></label>
                        <label><input type="text" placeholder="Sujet de votre message" name="user_subject" required aria-required="true" className="m-2 p-4 w-96 rounded-lg shadow-md"/></label>
                        <label><textarea rows="10" placeholder="Votre message" name="message" required aria-required="true" className="m-2 p-4 w-96 rounded-lg shadow-md"/></label>
                        <button type="submit" onClick={notify} class="hover:animate-bounce m-2 p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Envoyer !</button>
                        {done && <ToastContainer position="top-right"/>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;