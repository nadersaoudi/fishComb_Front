import React, { Fragment } from 'react'
import './Footer.css'


const Footer = () => {

    return (
        <Fragment>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img  src="../../../../dist/img/logo_gray.png" alt='fishcomb' className="pb-3"/>
                            <p className="text-justify">Fishcomb.com <i>CODE WANTS TO BE SIMPLE </i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown specimen book.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>For Individuals</h6>
                            <ul className="footer-links">
                                <li><a href="/register">Signup</a></li>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/">Explore People</a></li>
                                <li><a href="/">Event</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Forum</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Contribute</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
    
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="/"> FishComb</a>.
            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
export default Footer;