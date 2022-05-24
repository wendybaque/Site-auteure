import React from "react";
import "../components/Contact.css";
import Mail from "../assets/mail.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Amazon from "../assets/amazon.svg";
import Book from "../assets/book.svg";
import Linktree from "../assets/linktree.svg";
import Blog from "../assets/blog.svg";

function Contact () {
    return (
        <div className="contact" id="contact">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Contact</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Mail} alt="logo mail" className="contact-icon" />wendybaque.auteur@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Facebook} alt="logo facebook" className="contact-icon" /> 
                            <a href="https://www.facebook.com/AntiigoneWB" alt="Ma page facebook" target="_blank" rel="noreferrer">Ma page Facebook</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={Instagram} alt="logo instagram" className="contact-icon" />
                            <a href="https://www.instagram.com/wendybqe/" alt="Mon compte instagram" target="_blank" rel="noreferrer">Mon compte Instagram</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={Blog} alt="logo internet blog" className="contact-icon" />
                            <a href="https://wendybaqueauteur.wixsite.com/website" alt="Mon blog de chroniques littéraires" target="_blank" rel="noreferrer">Mon blog de chroniques littéraires</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={Linktree} alt="logo linktree" className="contact-icon" />
                            <a href="https://linktr.ee/Antiigone" alt="Lien vers mon Linktree" target="_blank" rel="noreferrer">Tous mes liens utiles</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={Amazon} alt="logo amazon" className="contact-icon" />
                            <a href="https://www.amazon.fr/Wendy-Baqu%25C3%25A9/e/B07XRW56H6%3Fref=dbs_a_mng_rwt_scns_share" alt="Profil auteur amazon" target="_blank" rel="noreferrer">Mon profil auteur</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={Book} alt="book" className="contact-icon" />
                            <a href="https://simplement.pro/u/Antiigone" alt="Lien ma page simplementpro" target="_blank" rel="noreferrer">Mes romans en Service Presse</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={Book} alt="book" className="contact-icon" />
                            <a href="https://www.babelio.com/monprofil.php?id_user=1134833" alt="Lien vers mon profil babelio" target="_blank" rel="noreferrer">Mon profil Babelio</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={Book} alt="book" className="contact-icon" />
                            <a href="https://booknode.com/antiigone_22911324" alt="Lien vers mon profil booknode" target="_blank" rel="noreferrer">Mon profil Booknode</a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <h1> Vous souhaitez commander l'un de mes romans au format broché avec une dédicace personnalisée ? Ou vous avez tout simplement une question sur mes livres ? Rendez-vous dans le formulaire ci-dessous.</h1>
                </div>
            </div>
        </div>
    );
}

export default Contact;