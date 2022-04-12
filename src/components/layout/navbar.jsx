import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../assets/svg";
export default function Navbar() {
  let location = useLocation();
  let history = useHistory();
  const [showNav, setShowNav] = React.useState(false);
  const [user, setUser] = React.useState("");
  const logout = () =>{
    localStorage.removeItem('user')
    window.location.reload();

  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser)
    }
    else{
      history.push('/home')
    }
  }, []);

  return (
    <div className="navbar-ch-con" style={{}}>
      <div className="navbarChild">
        <div className="navbar-logo" style={{ cursor: "pointer" ,width:"10%",marginTop:"-20px"}}>
          <Link to="/home">
            <Logo />
          </Link>
        </div>

      <div style={{color:"#0000",width:"70%",marginTop:"-10px"}}>
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
            }`} style={{display:"flex"}}
          >
            {user?<><button style={{height:"50px",background:"#fff",width:"100%"}}><p style={{width:"120px",color:"#000"}}>Welcome, {user.firstname}</p></button>
               <button onClick={() => history.push(`/app`)} style={{height:"50px",background:"rgba(2, 5, 161, 0.91)",border:"0px",width:"100%"}}><p style={{width:"80px",color:"#fff"}}>Cockpit</p></button>
            <button onClick={logout} style={{height:"50px",background:"#000",border:"0px",width:"100%"}}><p style={{width:"50px",fontSize:"12px",color:"#fff"}}>Log Out</p></button>
                        </>:
                        <>
            <button onClick={() => history.push(`/signup`)} style={{height:"50px"}}><p style={{width:"80px"}}>Sign Up</p></button>

            <button onClick={() => history.push(`/login`)} style={{height:"50px"}}><p style={{width:"80px"}}>Sign In</p></button>
            </>
            }
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
              // style={{ marginTop: "20px" }}
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
