import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";
import giflivre from "../assets/giflivre.gif";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, );

  return (
      <div>
          <img src={giflivre} alt="gif de livre" className="giflivre"/>
      </div>
  );

}

export default Page404;