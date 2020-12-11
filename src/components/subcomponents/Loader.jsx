import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";

const ReactLoader = ({ size, text }) => {
  return (
    <div className="container-fluid text-center" style={{ marginTop: "15vh" }}>
      <Loader
        type="ThreeDots"
        color="#00b5eb"
        height={size}
        width={size}
        // timeout={3000} //3 secs
      />
      <p className="mt-3">{text}</p>
    </div>
  );
};

export default ReactLoader;
