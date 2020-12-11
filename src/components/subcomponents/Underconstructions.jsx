import React from "react";
import Image from "../../assets/underconstruction.svg";

const UnderContruction = () => {
  return (
    <div
      className="container-fluid border text-center"
      style={{ marginTop: "15vh" }}
    >
      <img
        src={Image}
        alt=""
        className="w-100"
        style={{ height: "400px" }}
      ></img>
      <p className="mt-5">Webpage under construction !!1</p>
    </div>
  );
};

export default UnderContruction;
