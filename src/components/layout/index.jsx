import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./layout.css";
import Footer from "./footer";
export default function Index({ children, ...props }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="app-wrapper">
      <div className="app-navbar">
        <Navbar />
      </div>

      <div className="layout-children">
        <div className="layout-ch">
          <Route {...props}>
            {isAuthenticated ? children : <Redirect to="/signin" />}
          </Route>
          <Footer />
        </div>
      </div>
    </div>
  );
}
