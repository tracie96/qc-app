import React, { isValidElement, useState } from "react";
import "./index.scss";
import contries from "../../components/countries";
import NIGStates from "../../components/nigeriaStates";
import authBanner from "../../assets/4.jpeg";
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
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
    state: "",
    city: "",
    address: "",
    country: "",
    referral: "",
  });
  window.localStorage.setItem("user", JSON.stringify(auth));

  const [tab, setTab] = useState("tab1");
  const [appLoading, setAppLoading] = useState(false);

  
  const emailVerify = async (e) => {
    e.preventDefault();

    try {
      console.log(tab)
       axios
        .post("http://localhost:4000/api/verify_token", {
          email: auth.email,
        })
        .then((res) => {
      
        });
        setTab("tab2");          

    } catch (e) {
      console.log(e);
    }

  };

  const handlesave = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/api/register-user", {
          firstname: auth.firstname,
          country: auth.country,
          email: auth.email,
          lastname: auth.lastname,
          phonenumber: auth.phonenumber,
          city: auth.city,
          state: auth.state,
          address: auth.address,
          password: auth.password,
          referral: auth.referral,
        })
        .then((res) => {
          NotificationManager.success("Success", "Account Created Successful ");
          // sessionStorage.setItem("token", res.data.token);
          // const auth = {
          //   firstname: res.data.firstname,
          //   referral: res.data.referral,
          // };
          // localStorage.setItem("user", JSON.stringify(auth));
          history.push({
            pathname: "/login",
            // state: { detail: res.data.firstname },
          });
        });
    } catch (error) {
      if (error.response) {
      }
    }
  };

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

    if (auth.mobile == "") {
      setAppLoading(false);
      return NotificationManager.error("Error", "Mobile  number is required");
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
      history.push(`/login`);

      console.log(res);
    }
  };
  const handleChange = ({ target }) => {
    // setDelivery({ ...delivery, [target.name]: target.value });
    // console.log(delivery);
  };
  const handleTab = (e) => {
    e.preventDefault();
    if (tab == "tab1") {
      // if (delivery.fromaddress == "") {
      //   return NotificationManager.error("Error", "From address is required");
      // }

      // if (delivery.state == "") {
      //   return NotificationManager.error("Error", "state is required");
      // }

      // if (delivery.city == "") {
      //   return NotificationManager.error("Error", "city is required");
      // }
      e.preventDefault();
      setTab("tab2");
    }

    if (tab == "tab2") {
      // if (delivery.deliverylocation == "") {
      //   if (delivery.zone == "") {
      //     return NotificationManager.error("Error", "Country is required");
      //   }

      //   return NotificationManager.error(
      //     "Error",
      //     "Delivery location is required"
      //   );
      // }

      // if (delivery.recipientname == "") {
      //   return NotificationManager.error("Error", "Recipient name is required");
      // }

      // if (delivery.recipientnumber == "") {
      //   return NotificationManager.error(
      //     "Error",
      //     "Recipient number is required"
      //   );
      // }

      // if (delivery.itemname == "") {
      //   return NotificationManager.error(
      //     "Error",
      //     "Item description is required"
      //   );
      // }
      e.preventDefault();

      setTab("tab3");
    }

    if (tab == "tab3") {
      // if (delivery.weight == "") {
      //   return NotificationManager.error("Error", "weight is required");
      // }

      // if (delivery.length == "") {
      //   return NotificationManager.error("Error", "Length is required");
      // }

      // if (delivery.breath === "") {
      //   return NotificationManager.error("Error", "Breath is required");
      // }
      e.preventDefault();
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
        {/* <div className="authHeader">
{tab == "tab2" ? <h2>Verify your phone number</h2> : ""}

{tab == "tab3" ? (
  <h2>
   Create your account
  </h2>
) : (
  ""
)}
          <p>To continue, please provide a valid phone number.</p>
        </div> */}
        <div className="formWrap">
          {tab == "tab1" ? (
            <div style={{ alignSelf: "center" }}>
              <div className="authHeader" style={{ marginTop: "0px" }}>
                <h2>Get started</h2>
                <p>To continue, please provide a valid Email.</p>
              </div>{" "}
              <form style={{ width: "480px" }}>
                <div className="row">
                  <div className="inputWrapBook">
                    <label htmlFor="">Country</label>

                    <select
                      className="where-address-input-option"
                      name="zone"
                      onChange={(e)=>
                        setAuth({
                          ...auth,
                          country: e.target.value,
                        })
                      }
                      value={auth.country}
                      required
                    >
                      <option value="">Select</option>
                      {contries.map((data) => {
                        return (
                          <option value={data.Zone}>{data.Countries}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="inputWrapBook">
                  <label htmlFor="">Email</label>
                  <input
                    required
                    type="text"
                    placeholder="Input Email"
                    name="email"
                    value={auth.email}
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="btnsfd">
                  <button
                    onClick={emailVerify}
                    className="where-address-button"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
          {tab == "tab2" ? (
            <div style={{ alignSelf: "center" }}>
              <div className="authHeader" style={{ marginTop: "0px" }}>
                <h2>Verify your Email</h2>
                <p>Enter the 6-digit OTP sent to your Email..</p>
              </div>{" "}
              <form style={{ width: "480px" }}>
                <div className="row">
                  <div
                    id="otp"
                    class="inputs d-flex flex-row justify-content-center mt-2"
                  >
                    {" "}
                    <input
                      class="m-2 text-center form-control rounded"
                      type="text"
                      id="first"
                      maxlength="1"
                    />{" "}
                    <input
                      class="m-2 text-center form-control rounded"
                      type="text"
                      id="second"
                      maxlength="1"
                    />{" "}
                    <input
                      class="m-2 text-center form-control rounded"
                      type="text"
                      id="third"
                      maxlength="1"
                    />{" "}
                    <input
                      class="m-2 text-center form-control rounded"
                      type="text"
                      id="fourth"
                      maxlength="1"
                    />{" "}
                    <input
                      class="m-2 text-center form-control rounded"
                      type="text"
                      id="fifth"
                      maxlength="1"
                    />{" "}
                    <input
                      class="m-2 text-center form-control rounded"
                      type="text"
                      id="sixth"
                      maxlength="1"
                    />{" "}
                  </div>
                </div>

                <div className="btnsfd">
                  <button onClick={handleTab} className="where-address-button">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}

          {tab == "tab3" ? (
            <div style={{ alignSelf: "center" }}>
              <div className="authHeader">
                <h2>Continue</h2>
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
                    <label htmlFor="">Phone Number</label>
                    <input
                      onChange={(e) => {
                        setAuth({
                          ...auth,
                          phonenumber: e.target.value,
                        });
                      }}
                      type="text"
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="inputWrapBook">
                        <label htmlFor="">City</label>
                        <input
                          required
                          type="text"
                          placeholder="Input city"
                          name="city"
                          value={auth.city}
                          onChange={(e) => {
                            setAuth({
                              ...auth,
                              city: e.target.value,
                            });
                          }}
                        />
                      </div>{" "}
                    </div>
                    <div className="col">
                      <div className="inputWrapBook">
                        <label htmlFor="">Select state</label>

                        <select
                          className="where-address-input-option"
                          name="state"
                          onChange={(e) => {
                            setAuth({
                              ...auth,
                              state: e.target.value,
                            });
                          }}
                          value={auth.state}
                          required
                        >
                          <option value="">Select state</option>
                          {NIGStates.map((data) => {
                            return <option value={data}>{data}</option>;
                          })}
                        </select>
                      </div>{" "}
                    </div>
                  </div>

                  <div className="col">
                    <div className="inputWrapBook">
                      <div className="row">
                        <div className="inputWrapBook">
                          <label htmlFor="">House/APT/Flat Number</label>
                          <input
                            required
                            type="text"
                            placeholder="Please input Address"
                            name="form"
                            value={auth.address}
                            onChange={(e) => {
                              setAuth({
                                ...auth,
                                address: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
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

                  <div className="inputWrap">
                    <label htmlFor="">
                      Referral Code (<span>Optional</span>)
                    </label>
                    <input
                      onChange={(e) => {
                        setAuth({
                          ...auth,
                          referral: e.target.value,
                        });
                      }}
                      type="text"
                    />
                  </div>
                  <div className="termsAgree">
                    <p>
                      By continuing, I represent that I have read, understand,
                      and fully agree to the QC Express{" "}
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
                    <button onClick={handlesave}>Continue</button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
