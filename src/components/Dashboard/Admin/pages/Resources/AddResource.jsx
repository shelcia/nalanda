import React from "react";
import Header from "../../partials/Header";
import Navbar from "../../partials/Navbar";
import Title from "../../partials/Title";

const AddResource = () => {
  return (
    <React.Fragment>
      <div className="d-flex" style={{ overflow: "hidden", height: "100vh" }}>
        <Navbar />
        <div className="w-100 border" style={{ height: "100vh" }}>
          <Header />
          <div
            className="container-fluid py-4"
            style={{ overflowY: "scroll", height: "90vh" }}
          >
            <Title title="Add Resources" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddResource;
