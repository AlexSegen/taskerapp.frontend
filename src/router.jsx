import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";


import { useAuth } from './hooks/useAuth';

import Login from './landing/auth/Login';
import Register from './landing/auth/Register';
import ForgotPassword from './landing/auth/ForgotPassword';
import ResetPassword from './landing/auth/ResetPassword';

import Profile from './containers/profile';
import ChangePassword from './containers/profile/ChangePassword';

import Home from './containers/home';
import Tasks from './containers/tasks/Tasks';
import TaskDetails from './containers/tasks/TaskDetails';
import TaskCreate from './containers/tasks/TaskCreate';
import Projects from './containers/projects/Projects';
import Team from './containers/team/Team';

import {
  HOME,
  PROFILE,
  TASKS,
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  ADD_TASK,
  DETAILS_TASK,
  TEAM,
  PROJECTS
} from './constants/paths';


const RouterRoot = () => {

    return (
        <Router>
            <Switch>
                <Route exact path={HOME}>
                    <Home />
                </Route>
                <PrivateRoute exact path={TASKS}>
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute exact path={DETAILS_TASK(":id")}>
                    <TaskDetails />
                </PrivateRoute>
                <PrivateRoute path={ADD_TASK}>
                    <TaskCreate />
                </PrivateRoute>
                <PrivateRoute  path={PROJECTS}>
                    <Projects />
                </PrivateRoute>
                <PrivateRoute exact path={PROFILE}>
                    <Profile />
                </PrivateRoute>
                <PrivateRoute path={CHANGE_PASSWORD}>
                    <ChangePassword />
                </PrivateRoute>
                <PrivateRoute exact path={TEAM}>
                    <Team />
                </PrivateRoute>
                <NoAuthOnlyRoute path={LOGIN}>
                    <Login />
                </NoAuthOnlyRoute>
                <NoAuthOnlyRoute path={FORGOT_PASSWORD}>
                    <ForgotPassword />
                </NoAuthOnlyRoute>
                <NoAuthOnlyRoute path={RESET_PASSWORD}>
                    <ResetPassword />
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