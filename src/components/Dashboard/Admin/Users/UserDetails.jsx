import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

const UserDetail = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    _id: "",
    userId: "",
    name: "",
    type: "",
    date: "",
  });

  const history = useHistory();

  const headers = {
    // "auth-token": token,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

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

    axios.delete(url, {
      headers,
      body: {
        _id: id,
      },
    });
  };

  const editUser = async (id) => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users/${id}`;

    axios.put(url, {
      headers,
      body: {
        _id: id,
      },
    });
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/users/${match.params.id}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, [match.params.id]);

  console.log(user);

  return (
    <React.Fragment>
      <Navbar />
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
                    <input placeholder="enter name" className="form-control" />
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
