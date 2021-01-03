import React from 'react';
import {  NavLink} from "react-router-dom";




const Nav =() => {


    return(
        <ul className="nav nav-pills nav-justified " id='navprofil'>
        <li className="nav-item">
          <NavLink to={`/dashboard/profile/about`} className="m">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={`/dashboard/profile/order`} className="m">Order History</NavLink>
        </li>
       
       
      </ul>
    )

}

export default Nav;