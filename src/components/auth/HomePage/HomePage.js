import React from 'react';
import './HomePage.css';
import './custom.css';

import {NavLink} from "react-router-dom";
import Footer from '../../layout/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <header>
            <div class="container">
                <div class="row">
                    <div class="col-xs-8 col-sm-8 col-md-8 mob_full_639">
                        
                            <div class="logo">
                               
                                    <img src="../../../dist/img/logofish.png" alt="" />
                            </div>
                            
                       
                    </div>
                   
          <div className='col-sm-2 pt-3 '>
          <NavLink className='login' to="/login"  style={{color:'white'}}>Login</NavLink>
          </div>
          <div className='col-sm-1 pt-3 '>
          <NavLink className='login' to="/register" style={{color:'white'}}>Register</NavLink>
          </div>
                    <div class="col-xs-6 col-sm-6 col-md-8 mob_full_639">
                        <div class="center_text_box">
                            <h1>Here comes the social networking platform that you’ve been waiting for</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            {/*<div className='home  '>
                <div className='row '>
                    <div className="col-xs-6 col-sm-6 col-md-6 "></div>
                    <div class="col-xs-6 col-sm-6 col-md-6 mob_full_639  pt-5">
                        <div class="center_text_box">
                            <h1>Here comes the social networking platform that you’ve been waiting for</h1>
                        </div>
                    </div>
                </div>
    </div>*/}
            <section class="features" id="features">
                <div class="container">
                    <div class="down_arrow">
                        <a href="#features" class="go_down">
                            <span class="icon-arrow"></span>
                            <span class="icon-arrow"></span>
                            <span class="icon-arrow"></span>
                        </a>
                    </div>
                    <div class="head_text">
                        <h2>Features</h2>
                        <p>Find more friends around the world with amazing features.</p>
                    </div>
                    <div class="feav_ture">
                        <ul>
                            <li class="blue">
                                <a href="#">
                                    <span class="icon">
                                        <i class="icon-make_friend"></i>
                                    </span>
                                    <p>Make Friends</p>
                                </a>
                            </li>
                            <li class="laman">
                                <a href="#">
                                    <span class="icon">
                                        <i class="icon-publis_post"></i>
                                    </span>
                                    <p>Publish Posts</p>
                                </a>
                            </li>
                            <li class="red">
                                <a href="#">
                                    <span class="icon">
                                        <i class="icon-privat_chat"></i>
                                    </span>
                                    <p>Private Chats</p>
                                </a>
                            </li>
                            <li class="parpal">
                                <a href="#">
                                    <span class="icon">
                                        <i class="icon-webbinar"></i>
                                    </span>
                                    <p>Webinars</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <div class="col-sm-12 col-md-3 logo_gray_main">
                        <div class="logo_gray">
                            <a href="#">
                                <img src="../../../../dist/img/logo_gray.png" alt=""/></a>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown specimen book.</p>
                    </div>
                    <div class="col-sm-12 col-md-6 menu_listing">
                        <div class="row">
                            <div class="col-xs-4 col-sm-4 text_list mob_full_639">
                                <h2>For Individuals</h2>
                                <ul class="menu">
                                    <li>
                                        <a href="Registration.html">Signup</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">login</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Explore People</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Event</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Features</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Forum</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-4 col-sm-4 text_list mob_full_639">
                                <h2>For Businesses</h2>
                                <ul class="menu">
                                    <li>
                                        <a href="Registration.html">Business Signup</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Business Login</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Benefits</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Network</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Advertise</a>
                                    </li>
                                    <li>
                                        <a href="Home.html">Shop</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-4 col-sm-4 text_list mob_full_639">
                                <h2>About</h2>
                                <ul class="menu">
                                    <li>
                                        <a href="AboutUs.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="page/page9f7f.html?pid=4">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="page/page8bbd.html?pid=5">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="page/page011e.html?pid=6">Terms</a>
                                    </li>
                                    <li>
                                        <a href="page/page91b3.html?pid=7">Help</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 text_list">
                        <h2>Contact Us</h2>
                        <ul class="con">
                            <li>
                                <p>
                                    <span class="icon-line_phone"></span>+1 (234) 222 0754</p>
                            </li>
                            <li>
                                <p>
                                    <span class="icon-line_email"></span>info@thunder-team.com</p>
                            </li>
                            <li>
                                <p>
                                    <span class="icon-line_map"></span>228 Park Ave S NY, USA</p>
                            </li>
                        </ul>
                        <div class="foloow">
                            <p>Follow:</p>
                            <ul class="social">
                                <li>
                                    <a href="javascript:;">
                                        <i class="icon-fb"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i class="icon-tw"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i class="icon-gp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i class="icon-ss"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="col-sm-12">
                        <div class="foot_text">
                            <p>copyright @<a href="javascript:;">easysocial</a>
                                2017. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default HomePage;
