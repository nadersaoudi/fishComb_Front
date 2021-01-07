import React, { Fragment } from 'react';
import './HomePage.css';
import {
    NavLink
  } from "react-router-dom";
import Footer from '../../layout/Footer/Footer';

const HomePage = () => {
    return (
      <Fragment>
        <div className='row pt-5 pb-5 header'>
        <div className='col-1'></div>
          <div className='col-1'>
        
          <img src="../../../../dist/img/logofish.png" alt="" />
        
          </div>
          <div className='col-8'></div>
          <div className='col-1 '>
          <NavLink className='login' to="/login">Login</NavLink>
          </div>
          <div className='col-1 '>
          <NavLink className='login' to="/register">Register</NavLink>
          </div>
        </div>
        <div className='home'>
        
          <div className='row pt-5 '>
          <div className='Home__page'>
          <div className='title  pb-5'>
          
          </div>
          </div>
          <div className='row'>
            
          </div>
          </div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          <div className='row pt-5'></div>
          </div>
         
          <Footer />
      
           
          
      </Fragment>
    )
}

export default HomePage;
