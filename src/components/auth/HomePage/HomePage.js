import React from 'react';
import './HomePage.css';
import {
    NavLink
  } from "react-router-dom";
import Footer from '../../layout/Footer/Footer';

const HomePage = () => {
    return (
      <div>
        <div className='row pt-5 pb-5 header'>
        <div className='col-sm-1'></div>
          <div className='col-sm-1'>
        
          <img src="../../../../dist/img/logofish.png" alt="" />
        
          </div>
          <div className='col-sm-8'></div>
          <div className='col-sm-1 '>
          <NavLink className='login' to="/login">Login</NavLink>
          </div>
          <div className='col-sm-1 '>
          <NavLink className='login' to="/register">Register</NavLink>
          </div>
        </div>
        <div className='home  '>
          
          </div>
         
        <div className=' pt-5'>  <Footer  /></div>
         
   
      </div>
    )
}

export default HomePage;
