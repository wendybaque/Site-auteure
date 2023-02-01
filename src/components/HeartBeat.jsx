import React from "react";
import "../components/heartbeat.css";

const HeartBeat = () => {
  return (
    <div className="heart overflow-hidden float-left m-10 p-10 md:dispaly-hidden sm:display-hidden">
      <i className="fa fa-heart overflow-hidden drop-shadow-lg">
        <p className="heart-p">
          Merci pour <br />
          votre visite
        </p>
      </i>
    </div>
  );
};

export default HeartBeat;
