import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../partials/Navbar";
import Header from "../../partials/Header";
import Title from "../../partials/Title";

const AddUser = () => {
  const history = useHistory();
  const userId = useRef("");
  const name = useRef("");
  const type = useRef("");
  const password = useRef("");

  const token = localStorage.getItem("Nalanda-Token");

  const headers = {
    "auth-token": token,
    "Content-Type": "application/json",
  };

  const successNotify = (message) => toast.success(message);
  const failedNotify = (message) => toast.error(message);

  const addUser = async (event) => {
    event.preventDefault();
    toast.warning("We are adding the user to the backend");

    const response = {
      userId: userId.current.value,
      name: name.current.value,
      type: type.current.value,
      password: password.current.value,
    };

    const body = JSON.stringify(response);
    const url = `${process.env.REACT_APP_API_LINK}admin/register`;

    axios
      .post(url, body, {
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
            <Title title="Add User" />

            <div className="container">
              <table className="table table-hover table-borderless mt-4">
                <tbody>
                  <tr>
                    <th>User Id:</th>
                    <td>
                      <input
                        placeholder="enter User Id"
                        ref={userId}
                        className="form-control"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Name:</th>
                    <td>
                      <input
                        placeholder="enter name"
                        ref={name}
                        className="form-control"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Type:</th>
                    <td>
                      <div className="form-group">
                        <select className="form-control" ref={type} id="type">
                          <option>Admin</option>
                          <option>Faculty</option>
                          <option>Student</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Password:</th>
                    <td>
                      <input
                        placeholder="enter password"
                        ref={password}
                        type="password"
                        className="form-control"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    history.push("/admin/dashboard/users");
                  }}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-primary ml-3"
                  onClick={(event) => {
                    addUser(event);
                  }}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUser;
