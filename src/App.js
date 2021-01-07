import React , { useEffect } from 'react'
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard'
import Login  from './components/auth/login/Login';
import Reset  from './components/auth/Reset/Reset';
import Register from './components/auth/Register/Register';
import HomePage from './components/auth/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import store from "./store";
import { loadUser  } from "./Actions/auth";
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

 


  return (
    <div className="container-fluid">
    <Router>
    <Provider store={store}>
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
        <Redirect exact from="/" to="dashboard" />
      </Route>
      <Route path="*">
        <Redirect from="/" to="dashboard" />
      </Route>
     
    </Switch>
    </React.Suspense>
    </Provider>
    
  </Router>
  </div>
  );
}

export default App;
