import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Users = () => {
  const history = useHistory();

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users`;
    const getUsers = () => {
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          setUserDetails(res.data);
        })
        .catch((error) => console.log(error));
    };
    getUsers();
  }, []);

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
          <table className='table table-hover mt-2'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((user) => (
                <tr>
                  <td>
                    <NavLink to={`users/${user._id}`}>{user.userId}</NavLink>{" "}
                  </td>
                  <td>
                    {user.fname} {user.lname}
                  </td>
                  <td>{user.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
