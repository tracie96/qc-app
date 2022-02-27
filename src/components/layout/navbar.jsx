import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../assets/svg";
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
            <a href="#features">Features</a>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <a href="#testimonials">Testimonials</a>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <Link to="/">Awards</Link>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <a href="#faq">FAQs</a>
            {/* <Link to="/"></Link> */}
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
            <Link to="/">Download Now</Link>
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
              <Link to="/">Features</Link>
            </li>
            <li
              className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}
            >
              <Link to="/">Testimonials</Link>
            </li>
            <li
              className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}
            >
              <Link to="/">Awards</Link>
            </li>{" "}
            <li
              className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}
            >
              <Link to="/">FAQs</Link>
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