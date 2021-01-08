import React, { useContext, useEffect, useState } from "react";

import Logo from "../../../../assets/nalanda_logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { ResponsiveContext } from "../../../Context/Responsive";

const Navbar = () => {
  const [classname, setClassname] = useState("");
  const history = useHistory();
  const TopBarLinks = [
    {
      icon: "fas fa-chart-area",
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      icon: "fas fa-users",
      name: "Users",
      link: "/admin/dashboard/users",
    },
    {
      icon: "fas fa-photo-video",
      name: "Resources",
      link: "/admin/dashboard/resources",
    },
    {
      icon: "fas fa-lightbulb",
      name: "Doubts",
      link: "/admin/dashboard/doubts",
    },
    {
      icon: "fas fa-graduation-cap",
      name: "Courses",
      link: "/admin/dashboard/courses",
    },
    {
      icon: "fas fa-edit",
      name: "WebPage Edits",
      link: "/admin/dashboard/webpage-edits",
    },
    {
      icon: "fas fa-comments",
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
        className={`nav px-4 py-4 bg-blue flex-column shadow-lg ${classname}`}
        style={{ height: "100vh" }}
      >
        <NavLink className="navbar-brand pb-5" to="/">
          <img src={Logo} alt="" height="30px" />
        </NavLink>
        {TopBarLinks.map((link) => (
          <li className="nav-item py-2" key={link.link}>
            <NavLink
              className="nav-link"
              to={link.link}
              exact
              activeClassName="activelink"
            >
              <div style={{ width: "180px" }} className="d-flex">
                <div style={{ width: "30px" }}>
                  <i className={`mr-3 ${link.icon}`} />
                </div>
                {link.name}
              </div>
            </NavLink>
          </li>
        ))}
        <li className="nav-item py-1">
          <NavLink
            className="nav-link"
            to="/"
            onClick={(event) => logout(event)}
          >
            <div style={{ width: "180px" }} className="d-flex">
              <div style={{ width: "30px" }}>
                <i className="fas fa-sign-out-alt mr-3" />
              </div>
              Logout
            </div>
          </NavLink>
        </li>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
