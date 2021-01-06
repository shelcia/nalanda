import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import Navbar from "../../partials/Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ReactLoader from "../../../../subcomponents/Loader";
import Header from "../../partials/Header";
import Title from "../../partials/Title";

const Users = () => {
  const history = useHistory();

  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("Nalanda-Token");

  const failedNotify = (message) => {
    toast.error(message);
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users`;
    const headers = {
      "auth-token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const getUsers = () => {
      axios
        .get(url, {
          headers: headers,
        })
        .then((response) => {
          setIsLoading(false);
          // console.log(response);
          if (response.data.status === "200") {
            setUserDetails(response.data.message);
          } else if (response.data.status === "400") {
            failedNotify(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    getUsers();
  }, [token]);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="d-flex" style={{ overflow: "hidden", height: "100vh" }}>
        <Navbar />
        <div className="w-100 border" style={{ height: "100vh" }}>
          <Header />
          <div
            className="container-fluid py-4"
            style={{ overflowY: "scroll", height: "90vh" }}
          >
            <Title title="All Users">
              <button
                className="btn btn-primary"
                onClick={() => history.push("/admin/dashboard/adduser")}
              >
                Add New User
              </button>
            </Title>
            {isLoading ? (
              <ReactLoader size="200px" text="loading users" />
            ) : (
              <table className="table table-hover table-striped mt-2">
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
                        <NavLink to={`users/${user._id}`}>
                          {user.userId}
                        </NavLink>
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
      </div>
    </React.Fragment>
  );
};

export default Users;
