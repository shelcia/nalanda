import React from "react";
import Image from "../../assets/underconstruction.svg";

const UnderContruction = () => {
  return (
    <div className="container-fluid text-center" style={{ marginTop: "15vh" }}>
      <img
        src={Image}
        alt=""
        className="w-100"
        style={{ height: "400px" }}
      ></img>
      <p className="mt-5 font-weight-bolder">
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        Webpage under construction <span role="img">💻👩‍💻</span> !!
      </p>
    </div>
  );
};

export default UnderContruction;
