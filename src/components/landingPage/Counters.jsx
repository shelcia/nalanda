import React, { useState } from "react";
import CountUp from "react-countup";

const Counters = () => {
  const [countUp] = useState([
    {
      count: "500",
      desc: "Students cleared TNPSC",
      class: "bg-blue color-white",
    },
    {
      count: "600",
      desc: "Students cleared TNEB",
      class: "bg-yellow color-darkBlue",
    },
    {
      count: "700",
      desc: "Students cleared TRB",
      class: "bg-darkBlue color-yellow",
    },
  ]);

  const className =
    "card mx-2 d-flex justify-content-center align-items-center shadow-sm text-center border border-0 rounded-0";

  return (
    <React.Fragment>
      <div className="container-fluid mt-5" id="counters">
        <div className="card-deck px-4">
          {countUp.map((count) => (
            <div
              className={`${className} ${count.class}`}
              style={{ height: "200px" }}
            >
              <h2 className="title" style={{ fontSize: "4rem" }}>
                <CountUp end={count.count} duration={5} />
              </h2>
              <p className="desc">{count.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counters;
