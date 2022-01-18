import React from "react";
import { ArrowBottom, BellIcon, Logo, SearchIcon } from "../../assets/svg";
import DemoUser from "../../assets/demo-user.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  let location = useLocation();
  return (
    <div className="navbar-ch-con">
      <div className="navbarChild">
        <div className="navbar-logo" style={{ cursor: "pointer" }}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="right-links">
          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/">About Us</Link>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <Link to="/">How it Works</Link>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <Link to="/">Investment</Link>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <Link to="/">Support</Link>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <Link to="/">FAQs</Link>
          </li>
        </ul>

        <ul className="right-links">
          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/menu">
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #013D79",
                  color: "#013D79",
                  padding: "10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  // fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                Apply Now
              </button>
            </Link>
          </li>
          <li
            className={`${
              location.pathname == "/hcontact" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/menu">
              <button
                style={{
                  background: "#013D79",
                  border: "1px solid #013D79",
                  color: "#FFB90D",
                  padding: "10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  // fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                Apply Now
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
