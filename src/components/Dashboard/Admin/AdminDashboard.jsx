import React from "react";
import Navbar from "./partials/Navbar";
import Header from "./partials/Header";

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <div className="d-flex" style={{ overflow: "hidden", height: "100vh" }}>
        <Navbar />
        <div className="w-100 border" style={{ height: "100vh" }}>
          <Header />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
