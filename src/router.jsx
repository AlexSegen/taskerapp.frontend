import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useAuth } from './hooks/useAuth';

import Login from './containers/auth/Login';

import Tasks from './containers/tasks/Tasks';
import Projects from './containers/Projects';

const RouterRoot = () => {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute path="/task/:id">
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute exact path="/projects">
                    <Projects />
                </PrivateRoute>
                <NoAuthOnlyRoute path="/login">
                    <Login />
                </NoAuthOnlyRoute>
            </Switch>
        </Router>

    )

}

function PrivateRoute({ children, ...rest }) {

    const {  isAuthenticated } = useAuth();
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  function NoAuthOnlyRoute({ children, ...rest }) {
    
    const { isAuthenticated } = useAuth();
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default RouterRoot;