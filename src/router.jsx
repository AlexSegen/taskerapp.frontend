import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Tasks from './containers/tasks/Tasks';
import Projects from './containers/Projects';


const RouterRoot = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Tasks />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
            </Switch>
        </Router>

    )

}

export default RouterRoot;