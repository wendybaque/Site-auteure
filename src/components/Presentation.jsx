import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Presentation() {
  return (
    <header className="overflow-hidden" aria-label="En-tête du site">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg')",
          height: "90vh",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
        >
          <div className="overflow-hidden flex justify-center items-center h-full">
            <div className="overflow-hidden text-center text-white px-6 md:px-12">
              <h1 className="text-primary p-6 overflow-hidden text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Bienvenue sur le site de <br />
                <span className="font-bold text-secondary">Wendy Baqué</span>
              </h1>
                <h2 className="text-4xl text-primary  overflow-hidden m-6">Auteure de </h2>
                <Fade delay={1000}> 
                <p className="text-xl text-primary  overflow-hidden m-6">Romans contemporains</p>
                </Fade >
                <Fade delay={2000}> 
                <p className="text-xl text-primary  overflow-hidden m-6">Romans feel-good</p>
                </Fade >
                <Fade delay={3000}> 
                <p className="text-xl text-primary  overflow-hidden m-6">Romances musicales</p>
                </Fade >
              <a href="#intro" alt="redirection vers la section à propos">
                <div className="drop-shadow-2xl flex items-center justify-center mt-24 animate-bounce">
                  <svg
                    width="100px"
                    height="100px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C12.5523 7 13 7.44772 13 8V13.5858L15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11 13.5858V8C11 7.44772 11.4477 7 12 7Z"
                        fill="white"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10"
        style={{
          height: "50px",
          transform: "scale(2)",
          transformOrigin: "top center",
          color: "#fff",
        }}
      >
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </header>
  );
}
