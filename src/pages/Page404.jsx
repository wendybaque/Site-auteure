import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import P404 from "../components/404";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, );

  return (
      <P404 />
  );
}

export default Page404;