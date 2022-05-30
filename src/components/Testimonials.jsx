import React from 'react'
import "../components/Testimonials.css";
import stars from "../assets/stars.jpg";

const data = [
    {id:1,
    chroniqueur : "Patricia",
    blog: "Lectures évasion",
    img: "https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg",
    avis: "Wendy Baqué nous offre un roman profondément humain qui transpercera les âmes les plus endurcies. Elle nous transmet de très beaux messages avec justesse, humour et sensibilité.",
    },
    {id:2,
    chroniqueur: "Robin",
    blog: "Les lectures de Florelle et Robin",
    img: "https://m.media-amazon.com/images/I/41e2MG0aGxL._SX195_.jpg",
    avis: "Aucune surprise pour ce livre de Wendy Baqué qui reste dans la veine de mes ressentis précédents, j'ai plus qu'adoré et l'auteure s'installe durablement dans mes « indispensables ».",
        },
    {id:3,
    chroniqueur : "Aurore",
    blog: "Les lectures d'Aurore",
    img: "https://www.babelio.com/couv/CVT_Inoubliable-symphonie_9306.jpg",
    avis: "Ce livre est clairement un chef-d'œuvre. Qu'on l'aime ou pas, il restera dans notre tête et dans notre cœur. De part son sujet déjà : une histoire interdite, un sujet encore tabou dans la société et pour beaucoup de monde et par toutes les questions qu'on est amené nous aussi à se poser au fur et à mesure de l'histoire.",
    },
    {id:4,
    chroniqueur : "Marine",
    blog: "Lectrice",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41J980YGlSL._SX195_.jpg",
    avis: "J’ai eu le plaisir de découvrir une très belle histoire à travers ce livre. L’auteure essaye de faire passer un message dans notre société encore très fermée d’esprit. Ce roman mène à la réflexion et au questionnement sur la vie, la mort, l’amour... C’est un roman très touchant, voir bouleversant. Je recommande sans modération !",
    },
]
export default function Testimonials() {
  return (
    <div className='testimonials' id="testimonials">
      <h1 className='testimonials-title'>Quelques avis des lecteurs</h1>
      <div className="testimonials-container">
          {data.map(d=>(
          <div className="card">
              <div className="top">
                  <img src={d.img} alt="Icone du livre chroniqué" className='testimonials-img'/>
                  <img src={stars} alt="étoiles avis" className='testimonials-stars'/>
              </div>
              <div className="center">
                  <p>{d.avis}</p>
              </div>
              <div className="bottom">
                  <h3>{d.chroniqueur}</h3>
                  <h4>{d.blog}</h4>
              </div>
          </div>
          ))}
      </div>
    </div>
  )
}
