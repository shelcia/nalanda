import React from "react";
import Navbar from "./partials/Navbar";

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id="admindashboard">
        <div
          className="container"
          style={{ marginTop: "10vh", height: "100vh" }}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
