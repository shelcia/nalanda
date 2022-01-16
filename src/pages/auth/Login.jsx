import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginIllustration from "../../assets/illustrations/login_illustration.png";
import LightTextField from "../../components/CustomLightTextField";
import { H1, Paragraph, Tiny } from "../../components/CustomTypography";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="h-100" id="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 bg-yellow">
              <img src={LoginIllustration} alt="login" className="w-100" />
            </div>
            <div className="col-sm-5 d-flex justify-content-center align-items-center flex-column">
              <H1 className="mb-2 color-darkBlue">Signin</H1>
              <Tiny className="my-3">
                NOTE: This login is for users who are already authorised to
                access the portal
              </Tiny>
              <div className="container">
                <LightTextField
                  size="small"
                  fullWidth
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email || ""}
                  error={values.email === ""}
                  helperText={
                    values.email === ""
                      ? "Email should be valid and not empty"
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
                <Button color="primary" variant="contained">
                  Login
                </Button>
                <Paragraph className="mt-3">
                  Go to{"  "}
                  <NavLink to="/" className="color-blue">
                    Home Page
                  </NavLink>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
