import React from "react";

const Counters = () => {
  return (
    <React.Fragment>
      <div className="container-fluid mt-5" id="counters">
        <div className="card-deck px-4">
          <div
            className="card mx-2 d-flex justify-content-center align-items-center shodow text-center bg-blue color-white"
            id="tnpsc"
          >
            <h2 className="title">500</h2>
            <p className="desc">Students cleared TNPSC</p>
          </div>
          <div
            className="card mx-2 d-flex justify-content-center align-items-center shodow text-center bg-yellow color-darkBlue"
            id="tneb"
          >
            <h2 className="title">600</h2>
            <p className="desc">Students cleared TNEB</p>
          </div>
          <div
            className="card mx-2 d-flex justify-content-center align-items-center shodow text-center bg-darkBlue color-yellow"
            id="trb"
          >
            <h2 className="title">700</h2>
            <p className="desc">Students cleared TRB</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counters;
