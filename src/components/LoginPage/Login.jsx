import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoginIllustration from "../../assets/login_illustration.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const successNotify = () => toast.success("Login Succesfull");
  const failedNotify = (message) => toast.error(message);

  const history = useHistory();
  console.log(history);

  const headers = {
    "Content-Type": "application/json",
  };

  const userId = useRef();
  const password = useRef();
  const type = useRef();

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
        history.push("/admin/dashboard");
        successNotify();
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
            <div className="col-sm-7">
              <img src={LoginIllustration} alt="login" className="img-fluid" />
            </div>
            <div className="col-sm-5">
              <h2 className="title">Login</h2>
              <form onSubmit={LoginUser}>
                <div className="form-group">
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
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                    ref={password}
                    required
                  />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="type">Who are You ?</label>
                  <select name="type" className="custom-select" ref={type}>
                    <option value="Student">Student</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Admin">Admin</option>
                  </select>
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
                  <button type="submit">Login</button>
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
