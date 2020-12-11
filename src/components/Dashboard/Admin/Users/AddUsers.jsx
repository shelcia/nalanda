import React from "react";
import Navbar from "../Navbar";

const AddUser = () => {
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
            {/* {isEdit ? (
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
            </button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUser;
