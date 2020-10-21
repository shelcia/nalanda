import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const UserDetail = ({ match }) => {
  console.log(match.params.id);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users/${match.params.id}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        //   setUserDetails(res.data);
      })
      .catch((error) => console.log(error));
  }, [match.params.id]);

  return (
    <React.Fragment>
      <Navbar />
      <div id='admindashboard'>
        <div className='container'></div>
      </div>
    </React.Fragment>
  );
};

export default UserDetail;
