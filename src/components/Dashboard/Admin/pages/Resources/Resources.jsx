import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../partials/Header";
import Navbar from "../../partials/Navbar";
import Title from "../../partials/Title";

const Resources = () => {
  const history = useHistory();

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
            <Title title="Resources">
              <button
                className="btn btn-primary"
                onClick={() => history.push("/admin/dashboard/addresource")}
              >
                Add New Resource
              </button>
            </Title>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resources;
