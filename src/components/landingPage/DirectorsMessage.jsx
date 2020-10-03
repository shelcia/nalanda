import React from "react";
import Institute from "../../assets/nalanda_institute.png";

const DMessage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={Institute} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <p>
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
