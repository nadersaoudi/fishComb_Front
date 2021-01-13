import React from 'react';
import {  NavLink} from "react-router-dom";
import './Nav.css';

const Nav =() => {
    return(
        <ul className="nav nav-pills nav-justified " id='navprofil'>
          <li className="nav-item">
            <NavLink to={`/dashboard/profile/about`} className="nav_profile"><span className="lin_profile">About</span></NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/order`} className="nav_profile"><span className="lin_profile">Order History</span></NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/network`} className="nav_profile"><span className="lin_profile">Network</span></NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/webinars`} className="nav_profile"><span className="lin_profile">Webinars</span></NavLink>
          </li>
        </ul>
    )
}

export default Nav;