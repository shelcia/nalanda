import React from "react";
import Institute from "../../assets/nalanda_institute.png";
import Bar from "../../assets/bar.png";

const DMessage = () => {
  return (
    <React.Fragment>
      <div className="container-fluid mt-5 px-4" id="directorMessage">
        <div className="row">
          <div className="col-sm-6">
            <img src={Institute} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <h2 className="title color-darkBlue font-weight-bold mb-0">
              Director's Message
            </h2>
            <img src={Bar} alt="bar" id="bar" />
            <p className="content mt-2 color-primary">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DMessage;
