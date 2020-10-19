import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/nalanda_logo.png";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("Nalanda-UserId");
    localStorage.removeItem("Nalanda-Token");
  };

  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-md bg-light navbar-light fixed-top'>
        <NavLink className='navbar-brand' to='dashboard'>
          <img src={Logo} alt='' height='30px' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='collapsibleNavbar'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='users'>
                Users
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='feedetails'>
                Fee Details
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='resources'>
                Resources
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='askdoubts'>
                Ask Doubts
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='courses'>
                Online Courses
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='feedback'>
                Feedback Corner
              </NavLink>
            </li>
            <li className='nav-item border-left'>
              <NavLink
                className='nav-link login'
                to='/'
                onClick={(e) => logout(e)}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
