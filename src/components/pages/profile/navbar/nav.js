import React from 'react';
import {  NavLink} from "react-router-dom";
import '../Profile.css';



const Nav =() => {


    return(
        <ul className="nav nav-pills nav-justified " id='navprofil'>
          <li className="nav-item">
            <NavLink to={`/dashboard/profile/about`} className="m">About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/order`} className="m">Order History</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/network`} className="m">Network</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={`/dashboard/profile/webinars`} className="m">Webinars</NavLink>
          </li>
        </ul>
    )

}

export default Nav;