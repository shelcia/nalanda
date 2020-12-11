import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import ReactLoader from "../../../subcomponents/Loader";

const Users = () => {
  const history = useHistory();

  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users`;
    const getUsers = () => {
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          setUserDetails(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div id="admindashboard">
        <div className="container">
          <button
            className="btn btn-primary w-100"
            onClick={() => history.push("/admin/dashboard/users/adduser")}
            style={{ marginTop: "15vh" }}
          >
            Add New User
          </button>
          {isLoading ? (
            <ReactLoader size="200px" text="loading users" />
          ) : (
            <table className="table table-hover mt-2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <NavLink to={`users/${user._id}`}>{user.userId}</NavLink>{" "}
                    </td>
                    <td>{user.name}</td>
                    <td>{user.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
