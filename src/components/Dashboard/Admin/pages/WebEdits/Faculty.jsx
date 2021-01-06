import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import Navbar from "../../partials/Navbar";
import axios from "axios";
import ReactLoader from "../../../../subcomponents/Loader";
import { toast, ToastContainer } from "react-toastify";

const Faculty = () => {
  const history = useHistory();

  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const failedNotify = (message) => {
    toast.error(message);
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/faculty`;
    const headers = {
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
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <ToastContainer />
      <div id="admindashboard">
        <div className="container">
          <button
            className="btn btn-primary w-100"
            onClick={() =>
              history.push("/admin/dashboard/webpage-edits/faculty/addfaculty")
            }
            style={{ marginTop: "15vh" }}
          >
            Add Faculty
          </button>
          {isLoading ? (
            <ReactLoader size="200px" text="loading users" />
          ) : (
            <table className="table table-hover mt-2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Degree</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <NavLink to={`webpage-edits/faculty/${user._id}`}>
                        {user.facId}
                      </NavLink>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.degree}</td>
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

export default Faculty;
