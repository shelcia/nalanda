import { Button, Card, CardContent, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LightTextField from "../../components/CustomLightTextField";
import { H1, Paragraph, Tiny } from "../../components/CustomTypography";
import { apiAuth } from "../../services/models/AuthModel";

const Login = () => {
  const mobileBreakup = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const [values, setValues] = useState({
    userId: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    error: "",
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userId":
        errors.userId = "";
        break;
      case "password":
        errors.password = "";
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();

  //nalanda_admin
  //password

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    const newErrors = { ...errors };

    if (values.userId === "") {
      newErrors.userId = "Please enter userId id";
    }
    if (values.password === "") {
      newErrors.password = "Please enter password";
    }

    // console.log({ newErrors });

    setErrors(newErrors);

    if (values.userId === "" || values.password === "") {
      setLoading(false);
      return;
    }

    apiAuth.post(values, "login").then((res) => {
      // console.log(res);
      if (res.status !== "200") {
        setErrors({ ...errors, error: res.message });
        return;
      }
      localStorage.setItem("Nalanda-UserId", values.userId);
      localStorage.setItem("Nalanda-Token", res.message.token);
      localStorage.setItem("Nalanda-Type", res.message.type);
      if (res.message.type === "admin") {
        navigate("/admin_dashboard");
      } else if (res.message.type === "student") {
        navigate("/student_dashboard");
      }
    });

    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className="h-100" id="login">
        <div className="container-fluid d-flex justify-content-center align-items-center h-100">
          <Card style={{ width: mobileBreakup ? "600px" : "250px" }}>
            <CardContent className="text-center">
              <H1 className="mb-2 color-darkBlue">Signin</H1>
              <Tiny className="my-5">
                NOTE: This login is for users who are already authorised to
                access the portal
              </Tiny>
              <br />
              <Tiny className="text-danger">{errors?.error}</Tiny>
              <div className="container mt-3">
                <LightTextField
                  label="User ID*"
                  size="small"
                  fullWidth
                  name="userId"
                  onChange={handleChange}
                  value={values.userId || ""}
                  error={errors.userId.length > 0}
                  helperText={errors.userId}
                  // error={values.userId === ""}
                  // helperText={
                  //   values.userId === ""
                  //     ? "User Id should be valid and not empty"
                  //     : ""
                  // }
                  className="mb-3"
                />
                <LightTextField
                  label="Password*"
                  size="small"
                  fullWidth
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password || ""}
                  error={errors.password.length > 0}
                  helperText={errors.password}
                  // error={values.password === ""}
                  // helperText={
                  //   values.password === "" ? "Password should not be empty" : ""
                  // }
                  className="mb-3"
                />
              </div>
              <div className="text-center mt-3">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={loading ? () => {} : (e) => handleLogin(e)}
                  disabled={loading}
                >
                  Login
                </Button>

                <Paragraph className="mt-3">
                  Go to{"  "}
                  <NavLink to="/" className="color-blue">
                    Home Page
                  </NavLink>
                </Paragraph>
              </div>
            </CardContent>
          </Card>
          {/* <div className="row">
            <div className="col-sm-7 bg-yellow">
              <img src={LoginIllustration} alt="login" className="w-100" />
            </div>
            <div className="col-sm-5 d-flex justify-content-center align-items-center flex-column">
              <H1 className="mb-2 color-darkBlue">Signin</H1>
              <Tiny className="my-3">
                NOTE: This login is for users who are already authorised to
                access the portal
              </Tiny>

              <Tiny className="text-danger">{error}</Tiny>

              <div className="container">
                <LightTextField
                  size="small"
                  fullWidth
                  name="userId"
                  onChange={handleChange}
                  value={values.userId || ""}
                  error={values.userId === ""}
                  helperText={
                    values.userId === ""
                      ? "User Id should be valid and not empty"
                      : ""
                  }
                  className="mb-3"
                />
                <LightTextField
                  size="small"
                  fullWidth
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password || ""}
                  error={values.password === ""}
                  helperText={
                    values.password === "" ? "Password should not be empty" : ""
                  }
                  className="mb-3"
                />
              </div>
              <div className="text-center mt-3">
                {loading ? (
                  <Button disabled fullWidth variant="contained">
                    Login
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={LoginUser}
                  >
                    Login
                  </Button>
                )}
                <Paragraph className="mt-3">
                  Go to{"  "}
                  <NavLink to="/" className="color-blue">
                    Home Page
                  </NavLink>
                </Paragraph>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
