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
import TaskForm from './containers/tasks/TaskForm';
import Projects from './containers/Projects';

const RouterRoot = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/tasks" />
                </Route>
                <Route exact path="/tasks">
                    <Tasks />
                </Route>
                <Route exact path="/tasks/:id">
                    <TaskDetails />
                </Route>
                <Route path="/task/new">
                    <TaskForm />
                </Route>
                <Route exact path="/tasks/:id/edit">
                    <TaskForm />
                </Route>
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