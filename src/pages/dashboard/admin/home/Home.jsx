import React from "react";
import { H5 } from "../../../../components/CustomTypography";
import useTitle from "../../../../hooks/useTitle";

const Home = () => {
  useTitle("Hello User!");

  return (
    <React.Fragment>
      <div className="container mt-5">
        <H5>Shortcuts</H5>
      </div>
    </React.Fragment>
  );
};

export default Home;
