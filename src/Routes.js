import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthPage, LandingPage } from "./components/layout/index";
// import DashboardRoutes from './dashboard/';
import Home from "./screens/home/index";
import Menu from "./screens/menu";
import Contact from "./screens/contact";
import Login from "./screens/auth/login";
import Signup from "./screens/auth/createAccount";
function Routes() {
  return (
    <Router>
      <Switch>
        <LandingPage exact path="/">
          <Home />
        </LandingPage>

        <LandingPage exact path="/home">
          <Home />
        </LandingPage>

        <LandingPage exact path="/menu">
          <Menu />
        </LandingPage>

        <LandingPage exact path="/contact">
          <Contact />
        </LandingPage>

        <AuthPage exact path="/login">
          <Login />
        </AuthPage>

        <AuthPage exact path="/signup">
          <Signup />
        </AuthPage>
      </Switch>
    </Router>
  );
}

export default Routes;
