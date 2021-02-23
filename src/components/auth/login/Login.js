import React, { useState } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { log } from "../../../Actions/auth";
import Footer from "../../layout/Footer/Footer"
import {
  NavLink
} from "react-router-dom";

const Login = ({ log, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const { login, password } = formData;

  const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    log(login, password);
  }
  if (isAuthenticated) {

    return <Redirect to="/dashboard/newsfeed" />;
  };
  return (
    <div className="Login">
      <title>Login | FishComb</title>
      <div className="row">
        <a href="/" className="img">
          <img src="../../../../dist/img/logofish.png" alt="" /></a>
      </div>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
          <div className="card col-sm-7 ">
            <div className="card-body">
              <form onSubmit={e => onSubmit(e)} className="form-signin">
                <div className="mb-3  ">
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12 mb-4 " >
                      <input type="email" className="form-control log__input" placeholder="Email"
                        name="login" value={login} onChange={e => onchange(e)} />
                    </div>
                    <div className="col-sm-12 mb-4 ">
                      <input type="password" name="password" className="form-control log__input" placeholder="Password"
                        name="password" value={password}
                        onChange={e => onchange(e)} />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary col-sm-12  log-button" type="submit" value="handleSubmit" >Login</button>
                </div>
                <div className="col-sm-12  mt-3 mb-4 span1" >
                  <NavLink to="/reset" className="log__link" > <span>Forget password?</span></NavLink>
                </div >
                <hr></hr>
                <div>
                  <NavLink to="/register">
                    <button className="btn btn-primary col-sm-12 mt-2 mb-4 log-button1">Create Account</button>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='col-3'></div>
      </div>
      <div className='pt-5'></div>
      <Footer />
    </div>
  )
}

Login.propTypes = {
  log: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { log })(Login);