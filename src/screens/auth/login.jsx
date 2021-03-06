import React, { useState } from "react";
import "./index.scss";
import authBanner from "../../assets/1.jpeg";
import { useHistory } from "react-router-dom";
import validatePassword from "../../components/validatePassword";
import validateEmail from "../../components/validateEmail";
import { NotificationManager } from "react-notifications";
import { axiosCalls } from "../../components/_api";
import { hideLoader, showLoader } from "../../components/loader";
import axios from "axios";

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
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://a1f3-129-18-209-14.ngrok.io/api/signin", {
          email: auth.email,
          password: auth.password,
        })
        .then((res) => {
          NotificationManager.success("Success", "Login Successful ");
          sessionStorage.setItem("token", res.data.token);
          const auth = {
            firstname: res.data.firstname,
            referral: res.data.referral,
          };
          localStorage.setItem("user", JSON.stringify(auth));
          history.push({
            pathname: "/app",
            state: { detail: res.data.firstname },
          });
        });
    } catch (error) {
      if (error.response) {
        // ????????????????????????????????setMsg(error.response.data.msg);
      }
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
              history.push(`/home`);
            }}
          >
            Back
          </button>
        </div>
        <div className="authHeader">
          <h2>Sign In</h2>
          <p>To continue, please provide a valid Email .</p>
        </div>
        <div className="formWrap">
          <form action="">
            <div className="inputWrap">
              <label htmlFor="">Email/Phone Number</label>
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
                fully agree to the QC Express{" "}
                <a
                  onClick={() => {
                    history.push("/terms");
                  }}
                >
                  terms of service{" "}
                </a>
                and{" "}
                <a
                  onClick={() => {
                    history.push("/privacy");
                  }}
                >
                  privacy policy.
                </a>
              </p>
            </div>

            <div className="submitBtn">
              <button onClick={loginUser}>Continue</button>
            </div>
            <hr />
            <div style={{ textAlign: "center" }}>
              <p>New to QC Express?</p>
            </div>
            <div className="submitBtn">
              <button
                onClick={() => {
                  history.push(`/signup`);
                }}
                style={{ background: "#4169e2" }}
              >
                Create your QC Express account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
