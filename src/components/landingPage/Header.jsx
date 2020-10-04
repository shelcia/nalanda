import React from "react";
import bg from "../../assets/background.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header border">
        <img src={bg} alt="" className="img-fluid pt-5" />
        <div className="pt-5">
          <h1>ghcgchc</h1>
          <h1>ghcgchc</h1>
        </div>
      </div>

      <Navbar />
    </React.Fragment>
  );
};

export default Header;
