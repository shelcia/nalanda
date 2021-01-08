import React, { useState } from "react";
import Header from "../../partials/Header";
import Navbar from "../../partials/Navbar";
import Title from "../../partials/Title";
// import Faculty from "./Faculty";

const WebEdit = () => {
  const [webEdits] = useState([
    { name: "Faculty", class: "border-success" },
    { name: "Faculty", class: "border-warning" },
    { name: "Faculty", class: "border-info" },
    { name: "Faculty", class: "border-danger" },
    { name: "Faculty", class: "border-primary" },
  ]);
  const className =
    "card rounded-0 shadow-sm border-top border-right-0 border-bottom-0 border-left-0";
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
            <Title title="Web Edits"></Title>
            <div className="card-columns">
              {webEdits.map((edit) => (
                <div
                  className={`${className} ${edit.class}`}
                  key={edit.class}
                  style={{ borderTopWidth: "10px !important" }}
                >
                  <div className="card-body ">
                    <div className="card-title">
                      <h4>{edit.name}</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                      {/* <h4>{edit.name}</h4> */}
                      <div>
                        <i className="fas fa-eye"></i>
                        <p>View all</p>
                      </div>
                      <div>
                        <i className="fas fa-user-plus"></i>
                        <p>Add {edit.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WebEdit;
