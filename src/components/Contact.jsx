import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function Contact() {
  const notify = () =>
    toast.success("Merci pour votre message. Je vous répondrai au plus vite.", {
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
        "kCM4-loc5pRO7-hUK"
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
    <div className="bg-bg m-10 p-10">
      <div className="lg:flex lg:flex-row m-2 p-2 overflow-hidden">
        <div className="lg:flex lg:basis-1/2 ">
          <div className="lg:flex lg:flex-col">
            <div className="mb-4 text-left m-4">
              <h2 className="text-3xl font-bold text-secondary font-yeseva">
                Contact
              </h2>
            </div>
            <div className="font-josefin semi-bold row m-2 p-2 items-center">
              <MailOutlineIcon className="m-2" fontSize="large" />
              wendybaque.auteur@gmail.com
            </div>
            <div className="font-josefin semi-bold flex flex-row m-2 p-2 items-center">
              <FacebookIcon className="m-2" fontSize="large" />
              <a
                href="https://www.facebook.com/AntiigoneWB"
                alt="Ma page facebook"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary hover:font-bold"
              >
                Ma page Facebook
              </a>
            </div>
            <div className="font-josefin semi-bold flex flex-row m-2 p-2 items-center">
              <InstagramIcon className="m-2" fontSize="large" />
              <a
                href="https://www.instagram.com/wendybqe/"
                alt="Mon compte instagram"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary hover:font-bold"
              >
                Mon compte Instagram
              </a>
            </div>
            <div className="font-josefin semi-bold flex flex-row m-2 p-2 items-center">
              <RssFeedIcon className="m-2" fontSize="large" />
              <a
                href="https://wendybaqueauteur.wixsite.com/website"
                alt="Mon blog de chroniques littéraires"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary hover:font-bold"
              >
                Mon blog de chroniques littéraires
              </a>
            </div>
            <div className="font-josefin semi-bold flex flex-row m-2 p-2 items-center">
              <AppShortcutIcon className="m-2" fontSize="large" />
              <a
                href="https://linktr.ee/Antiigone"
                alt="Lien vers mon Linktree"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary hover:font-bold"
              >
                Tous mes liens utiles
              </a>
            </div>
            <div className="font-josefin semi-bold flex flex-row m-2 p-2 items-center">
              <AddShoppingCartIcon className="m-2" fontSize="large" />
              <a
                href="https://www.amazon.fr/Wendy-Baqu%25C3%25A9/e/B07XRW56H6%3Fref=dbs_a_mng_rwt_scns_share"
                alt="Profil auteur amazon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary hover:font-bold"
              >
                Mon profil auteur
              </a>
            </div>
            <div className="font-josefin semi-bold flex flex-row m-2 p-2 items-center">
              <AutoStoriesIcon className="m-2" fontSize="large" />
              <a
                href="https://simplement.pro/u/Antiigone"
                alt="Lien ma page simplementpro"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary hover:font-bold"
              >
                Mes romans en Service Presse
              </a>
            </div>
          </div>
        </div>

        <div className="font-josefin flex flex-col basis-2/3 items-center text-center">
          <p className="font-bold text-2xl">
            L'un de mes livres vous intéresse et vous souhaitez le commander ?{" "}
            <br />
            Ou vous avez tout simplement une question sur mes romans ?
          </p>
          <p className="text-secondary font-josefin font-bold mb-4 mt-4 text-2xl">
            Rendez-vous dans le formulaire ci-dessous.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid justify-items-center"
          >
            <label>
              <input
                type="text"
                placeholder="Votre nom"
                name="user_name"
                required
                aria-required="true"
                className="m-2 p-4 lg:w-96 rounded-lg shadow-md"
              />
            </label>
            <label>
              <input
                type="mail"
                placeholder="Votre e-mail"
                name="user_email"
                required
                aria-required="true"
                className="m-2 p-4 lg:w-96 rounded-lg shadow-md"
              />
            </label>
            <label>
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                name="user_phone"
                required
                aria-required="true"
                className="m-2 p-4 lg:w-96 rounded-lg shadow-md"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Sujet de votre message"
                name="user_subject"
                required
                aria-required="true"
                className="m-2 p-4 lg:w-96 rounded-lg shadow-md"
              />
            </label>
            <label>
              <textarea
                rows="10"
                placeholder="Votre message"
                name="message"
                required
                aria-required="true"
                className="m-2 p-4 lg:w-96 rounded-lg shadow-md"
              />
            </label>
            <button
              type="submit"
              onClick={notify}
              class="hover:animate-bounce m-4 p-2 bg-secondary text-primary shadow-lg rounded-lg"
            >
              Envoyer !
            </button>
            {done && <ToastContainer position="top-right" />}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
