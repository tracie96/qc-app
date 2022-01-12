import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./components/layout/index";
// import DashboardRoutes from './dashboard/';
import Home from "./screens/home/index";
import Menu from './screens/menu'
import Contact from './screens/contact'
function Routes() {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/">
          <Home />
        </AuthRoute>

        <AuthRoute exact path="/home">
          <Home />
        </AuthRoute>


        <AuthRoute exact path="/menu">
          <Menu />
        </AuthRoute>

        <AuthRoute exact path="/contact">
          <Contact />
        </AuthRoute>
      </Switch>
    </Router>
  );
}

export default Routes;
