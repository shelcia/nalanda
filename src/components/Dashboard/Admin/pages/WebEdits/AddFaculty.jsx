import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../partials/Navbar";
import axios from "axios";

const AddFaculty = () => {
  const history = useHistory();

  const [faculty, setFaculty] = useState({
    facId: "",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-library.com%2Ficon%2Fdefault-user-icon-26.html&psig=AOvVaw0miXE_wDRqf-Uae188Xar2&ust=1609056302293000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjW-fuX6-0CFQAAAAAdAAAAABAI",
    name: "",
    degree: "",
    desc: "",
  });

  const inputChange = (event) => {
    const newUser = {
      ...faculty,
      [event.target.name]: event.target.value,
    };
    setFaculty(newUser);
  };

  const token = localStorage.getItem("Nalanda-Token");

  const successNotify = (message) => toast.success(message);
  const failedNotify = (message) => toast.error(message);

  const headers = {
    "auth-token": token,
    "Content-Type": "application/json",
  };

  const addFaculty = (event) => {
    event.preventDefault();

    if (!faculty.facId || !faculty.degree || !faculty.name) {
      failedNotify("Make sure all important fields are filled!");
      return;
    }

    toast.warning("We are adding the user to the backend");

    const response = faculty;

    const body = JSON.stringify(response);
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/faculty`;

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
                <th>Faculty Id:</th>
                <td>
                  <input
                    placeholder="enter faculty Id"
                    value={faculty.facId}
                    name="facId"
                    onChange={(event) => inputChange(event)}
                    className="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>Image:</th>
                <td>
                  <input
                    placeholder="enter name"
                    value={faculty.image}
                    name="image url"
                    onChange={(event) => inputChange(event)}
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
                    value={faculty.name}
                    name="name"
                    onChange={(event) => inputChange(event)}
                    className="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>Degree:</th>
                <td>
                  <input
                    placeholder="enter degree"
                    value={faculty.degree}
                    name="degree"
                    onChange={(event) => inputChange(event)}
                    className="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>
                  <input
                    placeholder="enter description"
                    value={faculty.desc}
                    name="desc"
                    onChange={(event) => inputChange(event)}
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
                history.push("/admin/dashboard/webpage-edits");
              }}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary ml-3"
              onClick={(event) => {
                addFaculty(event);
              }}
            >
              Add Faculty
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddFaculty;
