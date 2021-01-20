import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = ({component:Component, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Cookies.get('user') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;