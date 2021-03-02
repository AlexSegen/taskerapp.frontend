import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { useAuth } from './hooks/useAuth';

import Login from './containers/auth/Login';

import Tasks from './containers/tasks/Tasks';
import TaskDetails from './containers/tasks/TaskDetails';
import TaskEdit from './containers/tasks/TaskEdit';
import Projects from './containers/Projects';

const RouterRoot = () => {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <Redirect to="/tasks" />
                </PrivateRoute>
                <PrivateRoute exact path="/tasks">
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute exact path="/tasks/:id">
                    <TaskDetails />
                </PrivateRoute>
                <PrivateRoute path="/task/new">
                    <TaskEdit />
                </PrivateRoute>
                <PrivateRoute exact path="/tasks/:id/edit">
                    <TaskEdit />
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