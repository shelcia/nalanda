import React, { useState } from "react";
import CountUp from "react-countup";
import { H6 } from "../../../components/CustomTypography";

const Counters = () => {
  const [countUp] = useState([
    {
      count: 500,
      desc: "Students cleared TNPSC",
      class: "bg-blue color-white",
    },
    {
      count: 600,
      desc: "Students cleared IBPS",
      class: "bg-yellow color-darkBlue",
    },
    {
      count: 700,
      desc: "Students cleared TRB",
      class: "bg-darkBlue color-yellow",
    },
  ]);

  const className =
    "mx-2 d-flex justify-content-center align-items-center shadow-sm text-center flex-column";

  return (
    <React.Fragment>
      <div className="container-fluid mt-5" id="counters">
        <div className="row">
          {countUp.map((count) => (
            <div className="col-md-4 px-4 mb-1" key={count.class}>
              <div
                className={`${className} ${count.class}`}
                style={{ height: "200px" }}
              >
                <h2 className="mb-0 mt-0" style={{ fontSize: "4rem" }}>
                  <CountUp end={count.count} duration={5} />
                </h2>
                <H6 className="mt-0">{count.desc}</H6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counters;
