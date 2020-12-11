import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";

const AddUser = () => {
  const history = useHistory();
  const userId = useRef("");
  const name = useRef("");
  const type = useRef("");
  const password = useRef("");

  const headers = {
    // "auth-token": token,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const addUser = async () => {
    const url = `${process.env.REACT_APP_API_LINK}admin/login`;

    const body = {
      userId: userId.current.value,
      name: name.current.value,
      type: type.current.value,
      password: password.current.value,
    };

    console.log(body);

    axios.post(url, {
      headers,
      body: body,
    });
  };

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
                  <input
                    placeholder="enter User Id"
                    ref={userId}
                    className="form-control"
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
                event.preventDefault();
                addUser();
              }}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUser;
