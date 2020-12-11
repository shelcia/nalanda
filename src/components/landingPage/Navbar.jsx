import React from "react";

import Logo from "../../assets/nalanda_logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const TopBarLinks = [
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Faculty",
      link: "/faculty",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
  ];

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md bg-light navbar-light fixed-top shadow-sm bg-white"
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
              <li className="nav-item">
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
              <NavLink className="nav-link btn btn-primary ml-2 " to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
