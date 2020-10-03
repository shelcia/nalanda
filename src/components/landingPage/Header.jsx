import React from "react";
import bg from "../../assets/background.png";
import Logo from "../../assets/nalanda_logo.png";

const Header = () => {
  return (
    <React.Fragment>
      <img src={bg} alt="" className="img-fluid pt-5" />
      <nav className="navbar navbar-expand-sm bg-light fixed-top">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" height="30px" />
        </a>
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
            <a className="nav-link" href="/">
              <button className="btn btn-primary">Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
