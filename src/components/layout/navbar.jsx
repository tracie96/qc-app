import React from "react";
import { ArrowBottom, BellIcon, Logo, SearchIcon } from "../../assets/svg";
import DemoUser from "../../assets/demo-user.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  let location = useLocation();
  const [showNav, setShowNav] = React.useState(false);
  return (
    <div className="navbar-ch-con" style={{}}>
      <div className="navbarChild">
        <div className="navbar-logo" style={{ cursor: "pointer" }}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="right-links hideOnMobile">
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
        </ul>
        <p className="HideOnDesktop">
          <i
            style={{ fontSize: "25px", color: "#013d79" }}
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="fas fa-bars HideOnDesktop"
          ></i>
        </p>

        <ul className="right-links hideOnMobile">
          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/">
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
                Sign up
              </button>
            </Link>
          </li>
          <li
            className={`${
              location.pathname == "/hcontact" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/">
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

      {showNav ? (
        <div className="mobileLinks">
          <ul>
            <li
              className={`${
                location.pathname == "/hmenu" ? "activeNvaLink" : ""
              }`}
            >
              <Link to="/">About Us</Link>
            </li>

            <li
              className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}
            >
              <Link to="/">How it Works</Link>
            </li>

            <li
              className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}
            >
              <Link to="/">Investment</Link>
            </li>

            <li
              className={`${
                location.pathname == "/hmenu" ? "activeNvaLink" : ""
              }`}
              style={{ marginTop: "20px" }}
            >
              <Link to="/">
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
                    width: "45%",
                  }}
                >
                  Sign up
                </button>

                <Link to="/">
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
                      marginLeft: "20px",
                      width: "45%",
                    }}
                  >
                    Apply Now
                  </button>
                </Link>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
