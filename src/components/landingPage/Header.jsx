import React from "react";
// import bg from "../../assets/background.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="row">
          <div className="col-sm-7">
            <h2 className="title">Nalanda Coaching Centre</h2>
            <p className="catchline">
              Nalanda, the Institute that ensure your Success <br />
              Ancient Nalanda is Known for learning your Art <br />
              <b className="highlight">Kanchi Nalanda</b> is known for coaching
              in competitive exam
            </p>
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>

      <Navbar />
    </React.Fragment>
  );
};

export default Header;
