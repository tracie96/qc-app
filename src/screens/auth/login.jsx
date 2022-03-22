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
    email: "",
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

    setAppLoading(true);
    showLoader();
    const res = await axiosCalls("auth/login", "POST", auth);
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
      history.push(`/app`);
      console.log(res);
      // getUser(res.user.userid);
    }
  };

  const getUser = async (id) => {
    // alert(id);
    let res = await axiosCalls(`users/${id}`, "GET");
    console.log(res);
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
              history.push(`/signup`);
            }}
          >
            Sign up
          </button>
          <button
            onClick={() => {
              history.push(`/login`);
            }}
          >
            Sign In
          </button>
        </div>
        <div className="authHeader">
          <h2>Let’s get started</h2>
          <p>To continue, please provide a valid phone number.</p>
        </div>
        <div className="formWrap">
          <form action="">
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