import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";

const AddUser = () => {
  const history = useHistory();

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
                  <input placeholder="enter User Id" className="form-control" />
                </td>
              </tr>
              <tr>
                <th>Name:</th>
                <td>
                  <input placeholder="enter name" className="form-control" />
                </td>
              </tr>
              <tr>
                <th>Type:</th>
                <td>
                  {" "}
                  <input placeholder="enter type" className="form-control" />
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
