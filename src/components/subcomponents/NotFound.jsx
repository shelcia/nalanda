import React from "react";
import Image from "../../assets/notfound.svg";

const NotFound = () => {
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
        Page not found<span role="img">💻👩‍💻</span> !!
      </p>
    </div>
  );
};

export default NotFound;
