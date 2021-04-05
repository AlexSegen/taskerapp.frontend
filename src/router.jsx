import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";


import { useAuth } from './hooks/useAuth';

import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Profile from './containers/profile';

import Tasks from './containers/tasks/Tasks';
import TaskDetails from './containers/tasks/TaskDetails';
import TaskEdit from './containers/tasks/TaskEdit';
import Projects from './containers/projects/Projects';
import Team from './containers/team/Team';

import {
  HOME,
  ABOUT,
  PROFILE,
  TASKS,
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  ADD_TASK,
  EDIT_TASK,
  DETAILS_TASK,
  TEAM,
  PROJECTS
} from './constants/paths';

const RouterRoot = () => {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={HOME}>
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute exact path={TASKS}>
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute exact path={DETAILS_TASK(":id")}>
                    <TaskDetails />
                </PrivateRoute>
                <PrivateRoute path={ADD_TASK}>
                    <TaskEdit />
                </PrivateRoute>
                <PrivateRoute  path={EDIT_TASK(":id")}>
                    <TaskEdit />
                </PrivateRoute>
                <PrivateRoute  path={PROJECTS}>
                    <Projects />
                </PrivateRoute>
                <PrivateRoute exact path={PROFILE}>
                    <Profile />
                </PrivateRoute>
                <PrivateRoute exact path={TEAM}>
                    <Team />
                </PrivateRoute>
                <NoAuthOnlyRoute path={LOGIN}>
                    <Login />
                </NoAuthOnlyRoute>
                <NoAuthOnlyRoute path={REGISTER}>
                    <Register />
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