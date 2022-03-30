import React from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../assets/svg";
export default function Navbar() {
  let location = useLocation();
  let history = useHistory();
  const [showNav, setShowNav] = React.useState(false);
  return (
    <div className="navbar-ch-con" style={{}}>
      <div className="navbarChild">
        <div className="navbar-logo" style={{ cursor: "pointer" ,width:"10%"}}>
          <Link to="/home">
            <Logo />
          </Link>
        </div>

      <div style={{color:"#0000",width:"70%"}}>
        <ul className="right-links hideOnMobile">
          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <a href="#features"  style={{color:"#000"}}>Features</a>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <a href="#testimonials" style={{color:"#000"}}>Testimonials</a>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <Link to="/" style={{color:"#000"}}>Service Updates</Link>
          </li>

          <li className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}>
            <a href="#faq" style={{color:"#000"}}>FAQs</a>
            {/* <Link to="/"></Link> */}
          </li>
        </ul>
        </div>
        <p className="HideOnDesktop">
          <i
            style={{ fontSize: "25px", color: "#013d79" }}
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="fas fa-bars HideOnDesktop"
          ></i>
        </p>

        <ul className="right-links hideOnMobile right-links-btn">
          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <button onClick={() => history.push(`/signup`)}>Sign Up</button>

            <button onClick={() => history.push(`/login`)}>Sign In</button>
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
