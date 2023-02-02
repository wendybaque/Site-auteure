import React from "react";
import { Helmet } from "react-helmet";
import ButtonTop from "../components/ButtonTop";
import wendy from "../assets/wendyphoto.webp";
import wendev from "../assets/wendev.webp";

function Apropos() {
  return (
    <main className="bg-bg lg:m-10 p-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>A propos de Wendy Baqué</title>
        <link rel="canonical" href="https://site-auteure.vercel.app/Apropos" />
      </Helmet>
      <div className="lg:flex lg:flex-row bg-bg w-full lg:p-4">
        <div className="lg:w-1/2 lg:m-2 lg:p-2">
          <h2 className="text-3xl font-bold text-secondary font-yeseva">
            A propos de Wendy Baqué
          </h2>
          <p className="pt-8 lg:p-4 font-josefin">
            Connue sous le pseudo d'Antiigone, Wendy Baqué est une auteure qui
            adore jouer avec les mots.
          </p>
          <p className="lg:p-4 font-josefin">
            Pour elle, écrire a toujours été un moyen de communication à part
            entière : tout ce qui ne peut se dire peut s'écrire. C'est pour cela
            que l'expression des émotions de ses personnages prend une grande
            place dans ses écrits, avec une recherche particulière apportée au
            réalisme.
          </p>
          <p className="lg:p-4 font-josefin">
            De manière générale, ses romans traitent de sujets qui lui sont
            chers, mais aussi d'actualité, tantôt tabous, tantôt victimes de
            préjugés et de stéréotypes, comme la fin de vie, l'avortement,
            l'acceptation de soi, la santé mentale ou encore les normes de la
            société. Elle porte une attention particulière aux émotions.
          </p>
          <p className="lg:p-4 font-josefin">
            Ses personnages ne sont pas parfaits, ont des défauts, des failles à
            travers lesquelles ils laissent entrer ou jaillir la lumière, ce qui
            les rend d'autant plus humains. Sa deuxième passion, la musique,
            tient une grande place dans ses écrits.Susciter la réflexion et le
            questionnement de soi chez ses lecteurs est un point clef de la
            fonction de l'écrivain, selon elle.
          </p>
          <p className="lg:p-4 font-josefin">
            Elle réalise aussi des chroniques littéraires de romans auto-édités
            ou de maison d'édition indépendantes, afin de mettre en avant de
            nouveaux auteurs et ses coups de cœur littéraires que vous pouvez
            retrouver sur{" "}
            <a
              href="https://wendybaqueauteur.wixsite.com/website"
              alt="site de chroniquese Wix"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary hover:font-bold underline underline-offset-1"
            >
              ce site
            </a>
            .
          </p>
        </div>
        <div className="lg:w-1/2 m-2 p-2 flex justify-center">
          <img
            src={wendy}
            alt="Wendy Baqué avec ses romans"
            className="drop-shadow-lg"
          />
        </div>
      </div>
      <div className="lg:flex lg:flex-row justify-center lg:m-4">
        <img
          src={wendev}
          alt="Bitmoji de Wendy Baqué"
          className="w-52 h-52 m-6 drop-shadow-lg"
        />
        <div className="lg:flex lg:flex-col ">
          <h3 className="text-3xl font-bold text-secondary font-yeseva p-6">
            Wendy Baqué crée aussi des sites internet !
          </h3>

          <p className="lg:p-4 font-josefin">
            Après un bref passage dans le milieu sanitaire et social entant que
            psychologue et formatrice pour adultes, elle se reconvertit dans la
            création d'applications et de sites web. <br /> Elle crée sa propre
            entreprise de création de sites internet et propose des offres sur
            mesure pour celles et ceux qui lui ressemblent :{" "}
            <span className="font-bold text-secondary animate-pulse">
              Les auteurs{" "}
            </span>
            !
            <br />
            <a
              href="https://linktr.ee/wendev"
              alt="Redirection vers le site de WenDev"
              target="_blank"
              rel="noreferrer"
            >
              
              <button className="hover:animate-bounce mt-16 p-2 bg-secondary text-primary shadow-lg rounded-lg">Découvrez ses offres sur le site de WenDev</button>
            </a>
          </p>
        </div>
      </div>
      <ButtonTop />
    </main>
  );
}
export default Apropos;
