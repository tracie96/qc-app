import React, { useState } from "react";
import "./index.scss";
import authBanner from "../../assets/authbanner.png";
import { useHistory } from "react-router-dom";
import validatePassword from "../../components/validatePassword";
import validateEmail from "../../components/validateEmail";
import { NotificationManager } from "react-notifications";
import { axiosCalls } from "../../components/_api";
import { hideLoader, showLoader } from "../../components/loader";
const Auth = () => {
  const history = useHistory();
  const [auth, setAuth] = useState({
    firstname: "",
    lastname: "",
    othernames: "",
    email: "",
    username: "",
    password: "",
  });
  const [appLoading, setAppLoading] = useState(false);

  const login = async (e) => {
    // hideLoader();
    e.preventDefault();
    console.log(auth);
    setAppLoading(true);
    const emailV = validateEmail(auth.email);
    const passwordV = validatePassword(auth.password);
    if (emailV !== true) {
      setAppLoading(false);
      return NotificationManager.error("Error", "Invalid Email");
    }

    if (passwordV !== true) {
      setAppLoading(false);
      return NotificationManager.error("Error", passwordV);
    }

    if (auth.username == "") {
      setAppLoading(false);
      return NotificationManager.error("Error", "Username name is required");
    }

    if (auth.othernames == "") {
      setAppLoading(false);
      return NotificationManager.error("Error", "Middle name is required");
    }

    setAppLoading(true);
    showLoader();
    const res = await axiosCalls("auth/register", "POST", auth);
    setAppLoading(false);
    if (res) {
      hideLoader();
      if (res?.er) {
        if (res?.er === "slowNetwork") {
          NotificationManager.error(
            "Error",
            "Opps your network is slow please try again"
          );
          return;
        }
        console.error(res.er.error);
        NotificationManager.error("Error", res.er.error);
        return;
      }
      NotificationManager.success("Success", res.message);

      console.log(res);
    }
  };

  return (
    <div className="authWrap">
      <div className="authWrapCol1">
        <img src={authBanner} alt="" />
      </div>
      <div className="authWrapCol2">
        <div className="actionAuthBtn">
          <button
            onClick={() => {
              history.push(`/login`);
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              history.push(`/signup`);
            }}
          >
            Sign up
          </button>
        </div>
        <div className="authHeader">
          <h2>Let’s get started</h2>
          <p>To continue, please provide a valid phone number.</p>
        </div>
        <div className="formWrap">
          <form action="">
            <div className="inputWrapWith2">
              <div className="inputWrapWith2Col">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setAuth({
                      ...auth,
                      firstname: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="inputWrapWith2Col">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setAuth({
                      ...auth,
                      lastname: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div className="inputWrap">
              <label htmlFor="">Middle name</label>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    othernames: e.target.value,
                  });
                }}
                type="text"
              />
            </div>

            <div className="inputWrap">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    email: e.target.value,
                  });
                }}
                type="text"
              />
            </div>

            <div className="inputWrap">
              <label htmlFor="">Username</label>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    username: e.target.value,
                  });
                }}
                type="text"
              />
            </div>

            <div className="inputWrap">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value,
                  });
                }}
                type="password"
              />
            </div>
            <div className="termsAgree">
              <p>
                By continuing, I represent that I have read, understand, and
                fully agree to the Sendbox{" "}
                <a href="/">terms of service and privacy policy.</a>
              </p>
            </div>

            <div className="submitBtn">
              <button onClick={login}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
