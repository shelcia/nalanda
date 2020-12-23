import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoginIllustration from "../../assets/login_illustration.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // const successNotify = () => toast.success("Login Succesfull");
  const failedNotify = (message) => toast.error(message);

  const history = useHistory();
  // console.log(history);

  const headers = {
    "Content-Type": "application/json",
  };

  const userId = useRef();
  const password = useRef();

  const LoginUser = (event) => {
    event.preventDefault();

    const response = {
      userId: userId.current.value,
      password: password.current.value,
    };

    const body = JSON.stringify(response);
    const url = `${process.env.REACT_APP_API_LINK}admin/login`;

    axios
      .post(url, body, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "400") {
          failedNotify(response.data.message);
        } else if (response.data.status === "500") {
          failedNotify("Server gal is not facing her issues!!");
        } else if (response.data.status === "200") {
          localStorage.setItem("Nalanda-UserId", userId.current.value);
          localStorage.setItem("Nalanda-Token", response.data.message);
          history.push("/admin/dashboard");
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
      <div className="h-100" id="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 bg-yellow">
              <img src={LoginIllustration} alt="login" className="img-fluid" />
            </div>
            <div className="col-sm-5 d-flex justify-content-center align-items-center flex-column">
              <h2 className="mb-2 color-darkBlue">Login</h2>
              <form onSubmit={LoginUser} className="w-100">
                <div className="form-group ">
                  <label htmlFor="uname">Admission Id:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    placeholder="Enter admission id"
                    name="uname"
                    ref={userId}
                    required
                  />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    ref={password}
                    required
                  />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                {/* <div className="form-group form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                      required
                    />
                    I agree on blabla.
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Check this checkbox to continue.
                    </div>
                  </label>
                </div> */}
                <div className="text-center pt-5">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
