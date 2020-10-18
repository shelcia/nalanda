import React from "react";
import Logo from "../../assets/nalanda_logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-md bg-light navbar-light fixed-top'>
        <NavLink className='navbar-brand' to='/'>
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
              <NavLink className='nav-link' to='/'>
                About Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Courses
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/faculty'>
                Faculty
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Gallery
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Contact Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link login' to='/login'>
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
