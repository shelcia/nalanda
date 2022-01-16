import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginIllustration from "../../assets/illustrations/login_illustration.png";
import LightTextField from "../../components/CustomLightTextField";
import { H1, Paragraph, Tiny } from "../../components/CustomTypography";
import { apiAuth } from "../../services/models/AuthModel";

const Login = () => {
  const [values, setValues] = useState({
    userId: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const [error, setError] = useState("");

  //nalanda_admin
  //password

  const LoginUser = (event) => {
    event.preventDefault();
    setLoading(true);

    apiAuth.post(values, "login").then((res) => {
      console.log(res);
      if (res.status !== "200") {
        setError(res.message);
        return;
      }
      localStorage.setItem("Nalanda-UserId", values.userId);
      localStorage.setItem("Nalanda-Token", res.message.token);
      localStorage.setItem("Nalanda-Type", res.message.type);
      if (res.message.type === "admin") {
        navigate("/admin_dashboard");
      }
    });

    setLoading(false);
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
