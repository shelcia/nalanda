import React, { useContext, useEffect, useState } from "react";

import Logo from "../../../../assets/nalanda_logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { ResponsiveContext } from "../../../Context/Responsive";

const Navbar = () => {
  const [classname, setClassname] = useState("");
  const history = useHistory();
  const TopBarLinks = [
    {
      name: "Users",
      link: "/admin/dashboard/users",
    },
    {
      name: "Resources",
      link: "/admin/dashboard/resources",
    },
    {
      name: "Doubts",
      link: "/admin/dashboard/doubts",
    },
    {
      name: "Courses",
      link: "/admin/dashboard/courses",
    },
    {
      name: "WebPage Edits",
      link: "/admin/dashboard/webpage-edits",
    },
    {
      name: "Feedback",
      link: "/admin/dashboard/feedback",
    },
  ];

  const [responsive] = useContext(ResponsiveContext);

  useEffect(() => {
    setClassname(responsive ? "" : "display-none");
  }, [responsive]);

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("Nalanda-UserId");
    localStorage.removeItem("Nalanda-Token");
    history.push("/");
  };

  return (
    <React.Fragment>
      <nav
        className={`nav px-5 py-4 bg-blue flex-column shadow-lg ${classname}`}
        style={{ height: "100vh" }}
      >
        <NavLink className="navbar-brand pb-5" to="/">
          <img src={Logo} alt="" height="30px" />
        </NavLink>
        {TopBarLinks.map((link) => (
          <li className="nav-item py-1" key={link.link}>
            <NavLink
              className="nav-link"
              to={link.link}
              exact
              activeClassName="activelink"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li className="nav-item py-1">
          <NavLink
            className="nav-link"
            to="/"
            onClick={(event) => logout(event)}
          >
            Logout
          </NavLink>
        </li>
      </nav>

      {/* <nav
        className="navbar navbar-expand-md bg-light navbar-light fixed-top  shadow-sm bg-white"
        style={{ height: "10vh" }}
      >
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="" height="30px" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            {TopBarLinks.map((link) => (
              <li className="nav-item" key={link.link}>
                <NavLink
                  className="nav-link"
                  to={link.link}
                  exact
                  activeClassName="activelink"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="nav-item border-left">
              <NavLink
                className="nav-link btn btn-primary ml-2"
                to="/"
                onClick={(event) => logout(event)}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}
    </React.Fragment>
  );
};

export default Navbar;