import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetail = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    _id: "",
    userId: "",
    name: "",
    type: "",
    date: "",
  });

  const successNotify = (message) => toast.success(message);
  const failedNotify = (message) => toast.error(message);

  const inputChange = (event) => {
    // console.log(event.target.value, event.target.name);

    const newUser = {
      ...user,
      [event.target.name]: event.target.value,
    };
    // console.log(newUser.name);
    setUser(newUser);
  };

  const history = useHistory();
  const token = localStorage.getItem("Nalanda-Token");

  const convertDate = (date) => {
    const dates = new Date(date);
    const formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(dates);
    return formattedDate;
  };

  const deleteUser = async (event, id) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users`;

    const headers = {
      "auth-token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios.delete(url, {
      headers,
      body: {
        _id: id,
      },
    });
  };

  const editUser = (id) => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users/${id}`;
    const headers = {
      "auth-token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const body = user;
    axios
      .put(url, body, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "200")
          successNotify(response.data.message);
        else if (response.data.status === "400")
          failedNotify(response.data.message);
        else if (response.data.status === "500") {
          failedNotify("Server girl got some issues");
        }
      })
      .catch((error) => {
        console.log(error);
        failedNotify(error);
      });
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users/${match.params.id}`;
    // console.log(url);

    const headers = {
      "auth-token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        // console.log(response);
        setUser(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id, token]);

  // console.log(user);

  return (
    <React.Fragment>
      <Navbar />
      <ToastContainer />
      <div id="admindashboard">
        <div className="container">
          <table
            className="table table-hover table-borderless"
            style={{ marginTop: "15vh" }}
          >
            <tbody>
              <tr>
                <th>User Id:</th>
                <td>
                  {isEdit ? (
                    <input
                      placeholder="enter User Id"
                      className="form-control"
                      value={user.userId}
                      name="userId"
                      onChange={(event) => inputChange(event)}
                    />
                  ) : (
                    user.userId
                  )}
                </td>
              </tr>
              <tr>
                <th>Name:</th>
                <td>
                  {isEdit ? (
                    <input
                      placeholder="enter name"
                      value={user.name}
                      name="name"
                      onChange={(event) => inputChange(event)}
                      className="form-control"
                    />
                  ) : (
                    user.name
                  )}
                </td>
              </tr>
              <tr>
                <th>Type:</th>
                <td>{user.type}</td>
              </tr>
              <tr>
                <th>Joined at:</th>
                <td>{user.date ? convertDate(user.date) : ""}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            {isEdit ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  setIsEdit(!isEdit);
                }}
              >
                Cancel Edit
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={(event) => deleteUser(event)}
              >
                Delete User
              </button>
            )}

            {isEdit ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  editUser(user._id);
                }}
                className="ml-3 btn btn-primary"
              >
                Confirm Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEdit(!isEdit);
                }}
                className="ml-3 btn btn-primary"
              >
                Edit User
              </button>
            )}
            <button
              type="button"
              className="btn btn-primary ml-3"
              onClick={(event) => {
                event.preventDefault();
                history.push("/admin/dashboard/users");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDetail;
