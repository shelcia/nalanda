import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const Users = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Navbar />
      <div id='admindashboard'>
        <div className='container'>
          <button
            className='btn btn-primary w-100 mt-5'
            onClick={() => history.push("myblogs/newblog")}>
            Add New User
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
