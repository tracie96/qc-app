import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  AuthPage,
  LandingPage,
  ProtectedRoutes,
} from "./components/layout/index";
// import DashboardRoutes from './dashboard/';
import Home from "./screens/home/index";
import Menu from "./screens/menu";
import Contact from "./screens/contact";
import Login from "./screens/auth/login";
import Signup from "./screens/auth/createAccount";
import Dashboard from "./screens/dashboard";
import BookDelivery from "./screens/book/bookDelivery";
import BookDeliverySecond from "./screens/book/bookDeliverySecond";
import BookDeliveryThird from "./screens/book/bookDeliveryThird";
import BookDeliveryFifth from "./screens/book/bookDeliveryFifth";
import BookDeliverySixth from "./screens/book/bookDeliverySixth";
import BookDeliverySeventh from "./screens/book/bookDeliverySeventh";
import BookDeliveryEight from "./screens/book/bookDeliveryEight";
import TrackingPage1 from "./screens/tracking/trackingPage1";
import TrackingPage2 from "./screens/tracking/trackingPage2";
import TrackingPage3 from "./screens/tracking/trackingPage3";
import TrackingPage4 from "./screens/tracking/trackingPage4";
import TrackingPage5 from "./screens/tracking/trackingPage5";
import ReferFriend from "./screens/refer/referFriend";
import Track from "./screens/book/track.js"
import AllBooks from "./screens/book/allBooks";

function Routes() {
  return (
    <Router>
      <Switch>
        <LandingPage exact path="/">
          <Dashboard />
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

        <ProtectedRoutes exact path="/app">
          <Dashboard />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/book_delivery">
          <BookDelivery />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/all_bookings">
          <AllBooks />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/book_delivery_third">
          <BookDeliveryThird />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/book_delivery_fifth">
          <BookDeliveryFifth />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/book_delivery_sixth">
          <BookDeliverySixth />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/book_delivery_seventh">
          <BookDeliverySeventh />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/book_delivery_eight">
          <BookDeliveryEight />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/tracking_page1">
          <TrackingPage1 />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/tracking_page2">
          <TrackingPage2 />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/tracking_page3">
          <TrackingPage3 />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/locate_hub">
          <TrackingPage4 />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/tracking_page5">
          <TrackingPage5 />
        </ProtectedRoutes>

        <ProtectedRoutes exact path="/refer_friend">
          <ReferFriend />
        </ProtectedRoutes>
        <ProtectedRoutes exact path="/track">
          <Track />
        </ProtectedRoutes>
      </Switch>
    </Router>
  );
}

export default Routes;
