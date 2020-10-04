import React from "react";
import Logo from "../../assets/nalanda_logo.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" height="30px" />
        </a>
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
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Faculty
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link login" href="/">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
