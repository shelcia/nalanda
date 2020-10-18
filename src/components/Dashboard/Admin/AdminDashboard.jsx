import React from "react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <div id='admindashboard'>
        <div className='container-fluid pl-0 pr-0'>
          <nav
            className='navbar navbar-expand-md bg-dark navbar-dark'
            id='navbar-dashboard'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#collapsibleNavbar'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='collapsibleNavbar'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='users'>
                    Users
                  </NavLink>
                  <NavLink className='nav-link' to='/profile'>
                    Link
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/feedetails'>
                    Link
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/resources'>
                    Link
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
