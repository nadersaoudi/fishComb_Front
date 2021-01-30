import React from 'react';
import {  NavLink} from "react-router-dom";
import './Nav.css';

const Nav =() => {
    return(
        <ul className="nav nav-pills nav-justified " id='navprofil'>
          <li className="nav-item">
            <NavLink to={`/dashboard/profile/about`} className="nav_profile"><span className="n">About</span></NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/order`} className="nav_profile"><span className="n">Order History</span></NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/network`} className="nav_profile"><span className="n">Network</span></NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/webinars`} className="nav_profile"><span className="n">Webinars</span></NavLink>
          </li>
        </ul>
    )
}

export default Nav;