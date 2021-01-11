import React , { useEffect } from 'react'
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard'
import Login  from './components/auth/login/Login';
import Reset  from './components/auth/Reset/Reset';
import Register from './components/auth/Register/Register';
import HomePage from './components/auth/HomePage/HomePage';
import {
  Switch,
  Route,
  Redirect,HashRouter
} from "react-router-dom";
import store from "./store";
import { loadUser  } from "./Actions/auth";
import { getMyinvitations } from './Actions/Friends'; 
import { Provider } from 'react-redux';
import ProtectedRoute from "./ProtectedRoute";
import  Cookies from 'js-cookie';



const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>; 

const App = () => {
  if (Cookies.user) {
    ProtectedRoute(Cookies.user);
  }
  useEffect(() => { 
    store.dispatch(loadUser());
  }, []);
  useEffect(() => {
    store.dispatch(getMyinvitations());
  }, []);
 


  return (
    <div className="container-fluid">
    
    <Provider store={store}>
    <HashRouter>
    <React.Suspense fallback={loading()}>
    <Switch>
    <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/reset">
          <Reset />
        </Route>
      <ProtectedRoute  path="/dashboard">
        <Dashboard />
      </ProtectedRoute>
      <Route exact path="/">
        <Redirect exact from="/" to="/dashboard/newsfeed" />
      </Route>
      <Route path="*">
        <Redirect from="/" to="/dashboard" />
      </Route>
     
    </Switch>
    </React.Suspense>
    </HashRouter>
    </Provider>
    
 
  </div>
  );
}

export default App;
